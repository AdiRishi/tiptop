import type { CacheEntityRecord } from '@envelop/response-cache';
import type { KvCacheConfig } from '.';
import { buildEntityKey } from './cacheKey';

export async function invalidate(
  entities: Iterable<CacheEntityRecord>,
  config: KvCacheConfig
): Promise<void> {
  const kvPromises: Promise<unknown>[] = []; // Collecting all the KV operations so we can await them all at once

  for (const entity of entities) {
    console.log('invalidating', JSON.stringify(entity, null, 2));
    const entityKey = buildEntityKey(entity.typename, entity.id, config.keyPrefix);
    console.log('entityKey', entityKey);

    for await (const kvKey of _getAllKvKeysForPrefix(entityKey, config)) {
      console.log('got key', kvKey.name);
      if (kvKey.metadata?.operationKey) {
        console.log('key has metadata', kvKey.metadata?.operationKey);
        kvPromises.push(config.KV.delete(kvKey.metadata?.operationKey));
        kvPromises.push(config.KV.delete(kvKey.name));
      }
    }
  }

  await Promise.allSettled(kvPromises);
}

export async function* _getAllKvKeysForPrefix(prefix: string, config: KvCacheConfig) {
  let keyListComplete = false;
  do {
    let cursor: string | undefined = undefined;

    const kvListResponse = await config.KV.list<{ operationKey: string }>({
      prefix,
      cursor,
    });
    keyListComplete = kvListResponse.list_complete;
    if (!kvListResponse.list_complete) {
      cursor = kvListResponse.cursor;
    }

    for (const keyResult of kvListResponse.keys) {
      yield keyResult;
    }
  } while (!keyListComplete);
}
