import { GraphQLClient } from 'graphql-request';

let clientCache: GraphQLClient;

export function createGraphqlClient(env: Env): GraphQLClient {
  if (clientCache) {
    return clientCache;
  }

  clientCache = new GraphQLClient(`${env.BACKEND_API_URL}/graphql`, {
    headers: {
      'User-Agent': 'graphql-request',
    },
    fetch: fetch,
  });
  return clientCache;
}
