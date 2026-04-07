import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import globals from 'globals';

export default tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.strictTypeChecked,
  {
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      'max-lines': ['error', { max: 150, skipBlankLines: true, skipComments: true }],
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/explicit-function-return-type': 'warn',
      '@typescript-eslint/consistent-type-imports': 'error',
      'no-restricted-syntax': [
        'error',
        {
          selector: 'JSXAttribute[name.name="style"]',
          message: 'Inline styles are forbidden. Use CSS Modules instead.',
        },
      ],
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['../**/features/*', '../../features/*'],
              message: 'Use @features/ alias instead of relative imports to features/',
            },
            {
              group: ['../**/app/*', '../../app/*'],
              message: 'Use @app/ alias instead of relative imports to app/',
            },
            {
              group: ['../**/shared/*', '../../shared/*'],
              message: 'Use @shared/ alias instead of relative imports to shared/',
            },
            {
              group: ['../**/i18n/*', '../../i18n/*', '../../i18n'],
              message: 'Use @i18n/ alias instead of relative imports to i18n/',
            },
          ],
        },
      ],
    },
  },
  {
    files: ['**/*.stories.tsx', '**/*.test.tsx'],
    rules: {
      'no-restricted-syntax': 'off',
    },
  },
  {
    files: ['**/GuidyMascot/GuidyMascot.tsx', '**/GuidyMascot/MascotHead.tsx'],
    rules: {
      'no-restricted-syntax': 'off',
    },
  },
);
