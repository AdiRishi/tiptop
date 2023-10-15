import type { Cache, CacheEntityRecord } from '@envelop/response-cache';
import type { ExecutionResult } from 'graphql';

export type KvCacheConfig = {
  /**
   * The Cloudflare KV namespace that should be used to store the cache
   */
  KV: KVNamespace;
  /**
   * The Cloudflare worker execution context. Used to perform non-blocking actions like cache storage and invalidation.
   */
  ctx: ExecutionContext;
  /**
   * The maximum TTL that can be set for a cache entry (in milliseconds)
   */
  maxTtl: number;
  /**
   * A prefix that should be added to all cache keys
   */
  keyPrefix?: string;
};

/**
 * Creates a cache object that uses Cloudflare KV to store GraphQL responses.
 * This cache is optimized for Cloudflare workers and uses the `ctx.waitUntil` method to perform non-blocking actions where possible
 *
 * To find out more about how this cache is implemented see https://the-guild.dev/blog/graphql-response-caching-with-envelop
 *
 * @param config Modify the behavior of the cache as it pertains to Cloudflare KV
 * @returns A cache object that can be passed to envelop's `useResponseCache` plugin
 */
export function createKvCache(config: KvCacheConfig): Cache {
  const buildOperationKey = (id: string | number) =>
    `${config.keyPrefix ? `${config.keyPrefix}:` : ''}operation:${id}`;

  const buildEntityKey = (typename: string, id?: string | number) => {
    if (id) {
      return `${config.keyPrefix ? `${config.keyPrefix}:` : ''}entity:${typename}:${id}`;
    }
    return `${config.keyPrefix ? `${config.keyPrefix}:` : ''}entity:${typename}`;
  };

  const buildEntityTypenameKey = (typename: string) => {
    return `${config.keyPrefix ? `${config.keyPrefix}:` : ''}entity:${typename}`;
  };

  const putCacheFunction = async (...args: Parameters<Cache['set']>) => {
    const [id, data, entities, ttl] = args;
    const expirationTtlInSeconds = Math.max(Math.min(config.maxTtl / 1000, ttl / 1000), 60);
    const operationKey = buildOperationKey(id);
    const kvPromises: Promise<unknown>[] = [];

    // Store the operation result
    kvPromises.push(
      config.KV.put(operationKey, JSON.stringify(data), {
        expirationTtl: expirationTtlInSeconds,
      })
    );

    // Store connections between the entities and the operation key
    // TODO: this logic will not work at scale due to the eventually consistent nature of KV. We need to use DurableObjects to synchronize this.
    for (const entity of entities) {
      const entityKey = buildEntityKey(entity.typename, entity.id);
      const existingEntityMap = await config.KV.get<string[]>(entityKey, 'json');
      const entityMap = existingEntityMap ?? [];
      if (!entityMap.includes(operationKey)) {
        entityMap.push(operationKey);
      }
      kvPromises.push(
        config.KV.put(entityKey, JSON.stringify(entityMap), {
          expirationTtl: expirationTtlInSeconds,
        })
      );
    }

    await Promise.allSettled(kvPromises);
  };

  const invalidateCacheFunction = async (...args: Parameters<Cache['invalidate']>) => {
    const [entities] = args;
    const kvPromises: Promise<unknown>[] = [];

    for (const entity of entities) {
      if (!entity.id) {
        // Invalidate all operations that are connected to this entity
        const entityKey = buildEntityTypenameKey(entity.typename);
        let keyListComplete = false;
        let cursor: string | undefined = undefined;
        const entityKeysToDelete: string[] = [];

        do {
          const kvListResponse: KVNamespaceListResult<unknown, string> = await config.KV.list({
            prefix: entityKey,
            cursor,
          });
          keyListComplete = kvListResponse.list_complete;
          if (!kvListResponse.list_complete) {
            cursor = kvListResponse.cursor;
          }
          const allEntityKeys = kvListResponse.keys;
          for (const kvEntityKey of allEntityKeys) {
            const entityMap = await config.KV.get<string[]>(kvEntityKey.name, 'json');
            if (entityMap) {
              for (const operationId of entityMap) {
                kvPromises.push(config.KV.delete(operationId));
              }
            }
            // Don't delete keys while iterating over them
            entityKeysToDelete.push(kvEntityKey.name);
          }
        } while (!keyListComplete);
        for (const keysToDelete of entityKeysToDelete) {
          kvPromises.push(config.KV.delete(keysToDelete));
        }
      } else {
        // Invalidate all operations that are connected to this entity
        const entityKey = buildEntityKey(entity.typename, entity.id);
        const entityMap = await config.KV.get<string[]>(entityKey, 'json');
        if (entityMap) {
          for (const operationId of entityMap) {
            kvPromises.push(config.KV.delete(operationId));
          }
        }
        // Invalidate the entity map
        kvPromises.push(config.KV.delete(entityKey));
      }
    }

    await Promise.allSettled(kvPromises);
  };

  const cache: Cache = {
    async get(id: string) {
      const kvResponse = await config.KV.get(buildOperationKey(id), 'text');
      if (kvResponse) {
        return JSON.parse(kvResponse) as ExecutionResult;
      }
    },

    set(
      /** id/hash of the operation */
      id: string,
      /** the result that should be cached */
      data: ExecutionResult,
      /** array of entity records that were collected during execution */
      entities: Iterable<CacheEntityRecord>,
      /** how long the operation should be cached (in seconds) */
      ttl: number
    ) {
      // Do not block execution of the worker while caching the result
      return config.ctx.waitUntil(putCacheFunction(id, data, entities, ttl));
    },

    invalidate(entities: Iterable<CacheEntityRecord>) {
      // Do not block execution of the worker while invalidating the cache
      return config.ctx.waitUntil(invalidateCacheFunction(entities));
    },
  };
  return cache;
}
