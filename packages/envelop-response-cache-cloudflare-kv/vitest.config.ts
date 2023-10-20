import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'miniflare',
    reporters: ['verbose'],
    environmentOptions: {
      wranglerConfigPath: './wrangler.vitest.toml',
      bindings: { ENVIRONMENT: 'testing' },
    },
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html', 'clover', 'json'],
    },
  },
});
