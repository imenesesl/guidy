import { defineConfig } from 'vitest/config';
import { resolve } from 'node:path';

const root = import.meta.dirname;

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/test-setup.ts'],
    css: { modules: { classNameStrategy: 'non-scoped' } },
    coverage: {
      provider: 'v8',
      include: ['src/**/*.{ts,tsx}'],
      exclude: [
        'src/**/*.test.{ts,tsx}',
        'src/**/*.stories.{ts,tsx}',
        'src/**/index.ts',
        'src/test-setup.ts',
        'src/css-modules.d.ts',
        'src/main.tsx',
      ],
      thresholds: { statements: 80, branches: 80, functions: 80, lines: 80 },
    },
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
