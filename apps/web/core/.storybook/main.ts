import type { StorybookConfig } from '@storybook/react-vite';
import { resolve } from 'node:path';

const root = import.meta.dirname;

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(ts|tsx)'],
  framework: '@storybook/react-vite',
  viteFinal: async (viteConfig) => {
    viteConfig.publicDir = false;
    viteConfig.resolve ??= {};
    viteConfig.resolve.alias = {
      ...viteConfig.resolve.alias,
      '@app': resolve(root, '../src/app'),
      '@features': resolve(root, '../src/features'),
      '@shared': resolve(root, '../src/shared'),
      '@i18n': resolve(root, '../src/i18n'),
      '@guidy/ds': resolve(root, '../../../../packages/ds/src'),
    };
    return viteConfig;
  },
};

export default config;
