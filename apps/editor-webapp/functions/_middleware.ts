import sentryPlugin from '@cloudflare/pages-plugin-sentry';

export const onRequest: PagesFunction = (context) => {
  return sentryPlugin({
    enabled: process.env.NODE_ENV === 'production',
    dsn: undefined, // TODO set DSN
    tracesSampleRate: 0.5,
  })(context);
};
