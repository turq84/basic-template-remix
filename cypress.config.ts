import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    specPattern: 'cypress/**/*.spec.ts',
    fixturesFolder: 'cypress/fixtures',
    supportFile: 'cypress/support/e2e.ts',
  },
});
