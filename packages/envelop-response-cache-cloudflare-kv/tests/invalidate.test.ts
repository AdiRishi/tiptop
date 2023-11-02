import { test, expect, beforeEach } from 'vitest';
import { ExecutionResult } from 'graphql';
import { KvCacheConfig } from '..';
import { _getAllKvKeysForPrefix, invalidate } from '../invalidate';
import { set } from '../set';
import { buildEntityKey, buildOperationKey } from '../cacheKey';

const describe = setupMiniflareIsolatedStorage();

type Env = {
  ENVIRONMENT: 'testing' | 'development' | 'production';
  GRAPHQL_RESPONSE_CACHE: KVNamespace;
};

describe('invalidate.test.ts', () => {
  let env: Env;
  let maxTtl: number;
  let executionContext: ExecutionContext;
  let config: KvCacheConfig;
  const keyPrefix = 'vitest';

  describe('_getAllKvKeysForPrefix()', () => {
    beforeEach(() => {
      env = getMiniflareBindings<Env>();
      executionContext = new ExecutionContext();
      config = {
        KV: env.GRAPHQL_RESPONSE_CACHE,
        ctx: executionContext,
        keyPrefix,
      };
      maxTtl = 60 * 1000; // 1 minute
    });

    test('should successfully iterate over a KV namespace with no keys', async () => {
      // kv cache has no keys at this point
      const keys = [];
      for await (const kvKey of _getAllKvKeysForPrefix('vitest', config)) {
        keys.push(kvKey);
      }
      expect(keys).toEqual([]);
    });

    test('should successfully iterate over a KV namespace with less than 1000 keys', async () => {
      // setup kv cache
      for (let i = 0; i < 500; i++) {
        await env.GRAPHQL_RESPONSE_CACHE.put(`vitest:entity:User:${i}`, 'value', {
          metadata: { operationKey: `vitest:operation:${i}` },
        });
      }

      const keys = [];
      for await (const kvKey of _getAllKvKeysForPrefix('vitest', config)) {
        keys.push(kvKey);
        const userId = kvKey.name.split(':')[3];
        expect(kvKey.metadata).toEqual({
          operationKey: `vitest:operation:${userId}`,
        });
      }
      expect(keys.length).toEqual(500);
    });

    test('should successfully iterate over a KV namespace with more than 1000 keys', async () => {
      // setup kv cache
      for (let i = 0; i < 1500; i++) {
        await env.GRAPHQL_RESPONSE_CACHE.put(`vitest:entity:User:${i}`, 'value', {
          metadata: { operationKey: `vitest:operation:${i}` },
        });
      }

      const keys = [];
      for await (const kvKey of _getAllKvKeysForPrefix('vitest', config)) {
        keys.push(kvKey);
        const indexId = kvKey.name.split(':')[3];
        expect(kvKey.metadata).toEqual({
          operationKey: `vitest:operation:${indexId}`,
        });
      }
      expect(keys.length).toEqual(1500);
    });
  });

  describe('invalidate()', () => {
    const dataValue: ExecutionResult<{ key: string }, { extensions: string }> = {
      errors: [],
      data: { key: 'value' },
      extensions: { extensions: 'value' },
    };
    const dataKey = '1B9502F92EFA53AFF0AC650794AA79891E4B6900';

    async function collectAllKeys(prefix: string) {
      const keys = [];
      for await (const kvKey of _getAllKvKeysForPrefix(prefix, config)) {
        keys.push(kvKey);
      }
      return keys;
    }

    beforeEach(() => {
      env = getMiniflareBindings<Env>();
      executionContext = new ExecutionContext();
      config = {
        KV: env.GRAPHQL_RESPONSE_CACHE,
        ctx: executionContext,
        keyPrefix,
      };
      maxTtl = 60 * 1000; // 1 minute
    });

    test('should invalidate all entity keys given only a type', async () => {
      await set(
        dataKey,
        dataValue,
        [{ typename: 'User' }, { typename: 'User', id: 1 }, { typename: 'User', id: 2 }],
        maxTtl,
        config
      );

      await invalidate([{ typename: 'User' }], config);

      const allKeys = await collectAllKeys(keyPrefix);
      expect(allKeys.length).toEqual(0);
    });

    test('should invalidate only given entity and operation key', async () => {
      await set(
        dataKey,
        dataValue,
        [{ typename: 'User' }, { typename: 'User', id: 1 }, { typename: 'User', id: 2 }],
        maxTtl,
        config
      );

      await invalidate([{ typename: 'User', id: 1 }], config);

      const allKeys = await collectAllKeys(keyPrefix);
      expect(allKeys.length).toEqual(2);

      const operationKey = buildOperationKey(dataKey, config.keyPrefix);
      const operationKeyWithoutPrefix = buildOperationKey(dataKey);
      const entityTypeKey = buildEntityKey('User', undefined, config.keyPrefix);
      const entityKey1 = buildEntityKey('User', 1, config.keyPrefix);
      const entityKey2 = buildEntityKey('User', 2, config.keyPrefix);

      expect(allKeys.find((k) => k.name === operationKey)).not.toBeDefined();

      expect(
        allKeys.find((k) => k.name === `${entityTypeKey}:${operationKeyWithoutPrefix}`)
      ).toBeDefined();
      expect(
        allKeys.find((k) => k.name === `${entityTypeKey}:${operationKeyWithoutPrefix}`)?.metadata
      ).toEqual({ operationKey });

      expect(
        allKeys.find((k) => k.name === `${entityKey1}:${operationKeyWithoutPrefix}`)
      ).not.toBeDefined();

      expect(
        allKeys.find((k) => k.name === `${entityKey2}:${operationKeyWithoutPrefix}`)
      ).toBeDefined();
      expect(
        allKeys.find((k) => k.name === `${entityKey2}:${operationKeyWithoutPrefix}`)?.metadata
      ).toEqual({ operationKey });
    });
  });
});