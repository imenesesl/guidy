import { resolve } from 'node:path';
import { defineConfig } from '@rspack/cli';
import { rspack } from '@rspack/core';
import RefreshPlugin from '@rspack/plugin-react-refresh';

const isDev = process.env['NODE_ENV'] === 'development';
const root = import.meta.dirname;

export default defineConfig({
  entry: { main: './src/main.tsx' },
  output: {
    filename: '[name].[contenthash].js',
    path: resolve(root, 'dist'),
    clean: true,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      '@app': resolve(root, 'src/app'),
      '@features': resolve(root, 'src/features'),
      '@shared': resolve(root, 'src/shared'),
      '@i18n': resolve(root, 'src/i18n'),
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: 'builtin:swc-loader',
          options: {
            jsc: {
              parser: { syntax: 'typescript', tsx: true },
              transform: {
                react: {
                  runtime: 'automatic',
                  development: isDev,
                  refresh: isDev,
                },
              },
            },
          },
        },
      },
      {
        test: /\.module\.css$/,
        type: 'css/module',
        parser: { namedExports: false },
        generator: { namedExports: false },
      },
      {
        test: /\.css$/,
        exclude: /\.module\.css$/,
        type: 'css',
      },
    ],
  },
  plugins: [
    new rspack.HtmlRspackPlugin({ template: './public/index.html' }),
    isDev && new RefreshPlugin(),
  ].filter(Boolean),
  experiments: { css: true },
  devServer: {
    port: 3001,
    hot: true,
    historyApiFallback: true,
  },
});
