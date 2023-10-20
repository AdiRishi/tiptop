import { test, expect, beforeEach } from 'vitest';
import { ExecutionResult } from 'graphql';
import type { Cache } from '@envelop/response-cache';
import { createKvCache, type KvCacheConfig } from './index';

const describe = setupMiniflareIsolatedStorage();

type Env = {
  ENVIRONMENT: 'testing' | 'development' | 'production';
  GRAPHQL_RESPONSE_CACHE: KVNamespace;
};

describe('@envelop/response-cache-cloudflare-kv', () => {
  let env: Env;
  let config: KvCacheConfig;
  let cache: Cache;
  const dataValue: ExecutionResult<{ key: string }, { extensions: string }> = {
    errors: [],
    data: { key: 'value' },
    extensions: { extensions: 'value' },
  };
  const dataKey = '1B9502F92EFA53AFF0AC650794AA79891E4B6900';

  beforeEach(() => {
    env = getMiniflareBindings<Env>();
    config = {
      KV: env.GRAPHQL_RESPONSE_CACHE,
      ctx: new ExecutionContext(),
      maxTtl: 60 * 1000, // 1 minute
      keyPrefix: 'vitest',
    };
    cache = createKvCache(config);
  });

  test('basic set() and get() usage', async () => {
    await cache.set(dataKey, dataValue, [], config.maxTtl);
    const result = await cache.get(dataKey);
    expect(result).toEqual(dataValue);

    const operationKey = `${config.keyPrefix}:operation:${dataKey}`;
    const operationValue = await env.GRAPHQL_RESPONSE_CACHE.get(operationKey, 'text');
    expect(operationValue).toBeTruthy();
    expect(JSON.parse(operationValue!)).toEqual(dataValue);
  });

  test('get() on a non-existent key', async () => {
    const result = await cache.get(dataKey);
    expect(result).toBeUndefined();
  });
});
