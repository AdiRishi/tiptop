import { drizzle } from 'drizzle-orm/d1';
import type { DrizzleD1Database } from 'drizzle-orm/d1';
import { Env } from '..';
import * as cmsSchema from './schema';

let drizzleClient: DrizzleD1Database<typeof completeSchema>;

const completeSchema = {
  ...cmsSchema,
};

export function getDrizzleClient(env: Env): DrizzleD1Database<typeof completeSchema> {
  if (!drizzleClient) {
    // Do not make the client more than once when the worker is in memory
    drizzleClient = drizzle(env.ENVIRONMENT === 'testing' ? env.__D1_BETA__DB : env.DB, {
      schema: completeSchema,
    });
  }
  return drizzleClient;
}
