import { test, expect, beforeEach } from 'vitest';
import { ExecutionResult } from 'graphql';
import { set } from '../set';
import { KvCacheConfig } from '..';
import { _getAllKvKeysForPrefix } from '../invalidate';
import { buildOperationKey, buildEntityKey } from '../cacheKey';

const describe = setupMiniflareIsolatedStorage();

type Env = {
  ENVIRONMENT: 'testing' | 'development' | 'production';
  GRAPHQL_RESPONSE_CACHE: KVNamespace;
};

describe('set.test.ts', () => {
  let env: Env;
  let maxTtl: number;
  let executionContext: ExecutionContext;
  let config: KvCacheConfig;
  const keyPrefix = 'vitest';
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

  describe('set()', () => {
    beforeEach(() => {
      env = getMiniflareBindings<Env>();
      executionContext = new ExecutionContext();
      config = {
        KV: env.GRAPHQL_RESPONSE_CACHE,
        ctx: executionContext,
        keyPrefix: 'vitest',
      };
      maxTtl = 60 * 1000; // 1 minute
    });

    test('should save the operation and entity keys in the KV store', async () => {
      await set(
        dataKey,
        dataValue,
        [{ typename: 'User' }, { typename: 'User', id: 1 }, { typename: 'User', id: 2 }],
        maxTtl,
        config
      );
      const operationKey = buildOperationKey(dataKey, config.keyPrefix);
      const operationKeyWithoutPrefix = buildOperationKey(dataKey);
      const entityTypeKey = buildEntityKey('User', undefined, config.keyPrefix);
      const entityKey1 = buildEntityKey('User', 1, config.keyPrefix);
      const entityKey2 = buildEntityKey('User', 2, config.keyPrefix);

      const allKeys = await collectAllKeys(keyPrefix);
      expect(allKeys.length).toEqual(4);

      expect(allKeys.find((k) => k.name === operationKey)).toBeDefined();
      expect(allKeys.find((k) => k.name === operationKey)?.metadata).toEqual({ operationKey });

      expect(
        allKeys.find((k) => k.name === `${entityTypeKey}:${operationKeyWithoutPrefix}`)
      ).toBeDefined();
      expect(
        allKeys.find((k) => k.name === `${entityTypeKey}:${operationKeyWithoutPrefix}`)?.metadata
      ).toEqual({ operationKey });

      expect(
        allKeys.find((k) => k.name === `${entityKey1}:${operationKeyWithoutPrefix}`)
      ).toBeDefined();
      expect(
        allKeys.find((k) => k.name === `${entityKey1}:${operationKeyWithoutPrefix}`)?.metadata
      ).toEqual({ operationKey });

      expect(
        allKeys.find((k) => k.name === `${entityKey2}:${operationKeyWithoutPrefix}`)
      ).toBeDefined();
      expect(
        allKeys.find((k) => k.name === `${entityKey2}:${operationKeyWithoutPrefix}`)?.metadata
      ).toEqual({ operationKey });
    });

    test('should function even if there are no entities', async () => {
      await set(dataKey, dataValue, [], maxTtl, config);
      const operationKey = buildOperationKey(dataKey, config.keyPrefix);
      const operationKeyWithoutPrefix = buildOperationKey(dataKey);

      const allKeys = await collectAllKeys(keyPrefix);
      expect(allKeys.length).toEqual(1);

      expect(allKeys.find((k) => k.name === operationKey)).toBeDefined();
      expect(allKeys.find((k) => k.name === operationKey)?.metadata).toEqual({ operationKey });

      expect(
        allKeys.find(
          (k) =>
            k.name ===
            `${buildEntityKey('User', undefined, config.keyPrefix)}:${operationKeyWithoutPrefix}`
        )
      ).toBeUndefined();
    });
  });
});
