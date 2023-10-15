import { createSchema, createYoga, YogaInitialContext } from 'graphql-yoga';
import { useResponseCache } from '@envelop/response-cache';
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
      console.log('INIT SERVER');
      graphqlServer = createYoga<Env & ExecutionContext>({
        schema: createSchema({ typeDefs, resolvers }),
        plugins: [
          useResponseCache({
            cache: createKvCache({ KV: env.GRAPHQL_RESPONSE_CACHE, ctx }),
            session: () => null,
            includeExtensionMetadata: true,
          }),
        ],
      });
    }
    return graphqlServer.fetch(request, env, ctx);
  },
};
