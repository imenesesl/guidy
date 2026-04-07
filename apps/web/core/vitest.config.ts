import { defineConfig } from 'vitest/config';
import { resolve } from 'node:path';

const root = import.meta.dirname;

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/test-setup.ts'],
    css: { modules: { classNameStrategy: 'non-scoped' } },
  },
  resolve: {
    alias: {
      '@app': resolve(root, 'src/app'),
      '@features': resolve(root, 'src/features'),
      '@shared': resolve(root, 'src/shared'),
      '@i18n': resolve(root, 'src/i18n'),
    },
  },
});
