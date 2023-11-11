import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react';
import type { LinksFunction } from '@remix-run/cloudflare';
import { cssBundleHref } from '@remix-run/css-bundle';
import { withSentry } from '@sentry/remix';
import tailwindStyles from './tailwind.css';
import { ThemeProvider } from './components/ui/theme-provider';
import { Layout } from './layouts/default';

// devtool
import rdtStylesheet from 'remix-development-tools/index.css';
import { withDevTools } from 'remix-development-tools';

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: tailwindStyles },
  ...(cssBundleHref ? [{ rel: 'stylesheet', href: cssBundleHref }] : []),
  { rel: 'stylesheet', href: rdtStylesheet },
];

const App = function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <ThemeProvider defaultTheme="dark">
          <Layout>
            <Outlet />
          </Layout>
        </ThemeProvider>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
};

export default withSentry(withDevTools(App));
