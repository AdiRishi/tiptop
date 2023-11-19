/// <reference types="@remix-run/dev" />
import '@remix-run/cloudflare';
/// <reference types="@cloudflare/workers-types" />
import type { AppLoadContext as OriginalAppLoadContext } from '@remix-run/cloudflare';

declare global {
  /**
   * A global `process` object is only available during build to access NODE_ENV.
   */
  const process: { env: { NODE_ENV: 'production' | 'development' } };

  /**
   * Declare expected Env parameter in fetch handler.
   */
  interface Env {
    BACKEND_API_URL: string;
  }
}

declare module '@remix-run/cloudflare' {
  export interface AppLoadContext extends OriginalAppLoadContext {
    env: Env;
  }
}
