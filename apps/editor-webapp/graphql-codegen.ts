import type { CodegenConfig } from '@graphql-codegen/cli';
import {
  DateTimeResolver,
  UUIDResolver,
  JSONResolver,
  NonEmptyStringResolver,
  CurrencyResolver,
} from 'graphql-scalars';

const config: CodegenConfig = {
  schema: 'https://apex-gateway.arishi.workers.dev/graphql',
  documents: ['./app/graphql/queries.server.ts', './app/graphql/mutations.server.ts'],
  ignoreNoDocuments: true,
  generates: {
    './app/graphql/gql-generated/': {
      preset: 'client',
      plugins: [],
      config: {
        scalars: {
          DateTime: DateTimeResolver.extensions.codegenScalarType,
          UUID: UUIDResolver.extensions.codegenScalarType,
          JSON: JSONResolver.extensions.codegenScalarType,
          JSONObject: JSONResolver.extensions.codegenScalarType,
          NonEmptyString: NonEmptyStringResolver.extensions.codegenScalarType,
          Currency: CurrencyResolver.extensions.codegenScalarType,
        },
        enumsAsTypes: true,
      },
    },
  },
};

export default config;
