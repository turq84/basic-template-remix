/// <reference types="vitest" />
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// The reference for the vitest setup: https://github.com/gustavocadev/remix-vitest-react-testing/tree/main

/**
 * Why is this file needed?
 * We needed to create this file because in Remix v2.8.1, Vitest doesnt work well in the vite.config.ts
 */
export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    environment: 'jsdom',
    coverage: {
      provider: 'v8', // Use the V8 coverage provider
      reporter: ['text', 'json', 'lcov', 'html'], // List of reports to generate
    },
  },
});
