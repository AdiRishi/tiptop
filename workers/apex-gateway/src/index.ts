import { createSchema, createYoga, YogaInitialContext } from 'graphql-yoga';
import { typeDefs } from './schema/typeDefs.generated';
import { resolvers } from './schema/resolvers.generated';

export type Env = {
  ENVIRONMENT: 'development' | 'production';
};
export type GraphQLContext = YogaInitialContext & Env & ExecutionContext;

const graphqlServer = createYoga<Env & ExecutionContext>({
  schema: createSchema({ typeDefs, resolvers }),
});

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    return graphqlServer.fetch(request, env, ctx);
  },
};
