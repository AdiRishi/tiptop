import { ThemeProvider } from './components/ui/theme-provider';
import tailwindStyles from './global-css/tailwind.css';
import { Layout } from './layouts/default';
import type { LinksFunction } from '@remix-run/cloudflare';
import { cssBundleHref } from '@remix-run/css-bundle';
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react';
import { withSentry } from '@sentry/remix';
import { withDevTools } from 'remix-development-tools';
// devtool
import rdtStylesheet from 'remix-development-tools/index.css';

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: tailwindStyles },
  ...(cssBundleHref ? [{ rel: 'stylesheet', href: cssBundleHref }] : []),
  { rel: 'stylesheet', href: rdtStylesheet },
];

const App = function App() {
  return (
    <html lang="en" className="dark">
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
