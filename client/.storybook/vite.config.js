import tsconfigPaths from 'vite-tsconfig-paths';
import pandaCss from '@pandacss/dev/postcss';
import { defineConfig } from 'vite';

export default defineConfig(() => ({
  publicDir: 'assets',
  define: {
    'process.env.API_URL': JSON.stringify('/no-api-available'),
  },
  css: {
    postcss: {
      plugins: [pandaCss({ configPath: './styled-system/setup/config.ts' })],
    },
  },
  plugins: [tsconfigPaths()],
}));
