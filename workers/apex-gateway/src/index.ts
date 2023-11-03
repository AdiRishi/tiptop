import { createSchema, createYoga, YogaInitialContext } from 'graphql-yoga';
import { useResponseCache } from '@graphql-yoga/plugin-response-cache';
import { createKvCache } from 'envelop-response-cache-cloudflare-kv';
import { typeDefs } from './graphql-schema/typeDefs.generated';
import { resolvers } from './graphql-schema/resolvers.generated';

export type Env = {
  ENVIRONMENT: 'testing' | 'development' | 'production';
  DB: D1Database;
  __D1_BETA__DB: D1Database;
  GRAPHQL_RESPONSE_CACHE: KVNamespace;
};
export type GraphQLContext = YogaInitialContext & Env & ExecutionContext;

// @ts-expect-error - Miniflare needs all exported values to be an object or function
export let graphqlServer: ReturnType<typeof createYoga<Env & ExecutionContext>> = { INIT_ME: true };

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    // @ts-expect-error - Miniflare needs all exported values to be an object or function
    if (graphqlServer.INIT_ME) {
      graphqlServer = createYoga<Env & ExecutionContext>({
        schema: createSchema({ typeDefs, resolvers }),
        plugins: [
          useResponseCache({
            // @ts-expect-error - https://github.com/dotansimha/graphql-yoga/issues/3048
            cache: createKvCache({
              KV: env.GRAPHQL_RESPONSE_CACHE,
              ctx,
              keyPrefix: 'graphql',
            }),
            session: () => null,
            includeExtensionMetadata: true,
            ttl: 1000 * 60 * 1, // 1 minute
            enabled: () => true,
          }),
        ],
      });
    }
    return await graphqlServer.fetch(request, env, ctx);
  },
};
