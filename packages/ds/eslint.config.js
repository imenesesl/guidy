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
    },
  },
  {
    files: ['**/*.stories.tsx', '**/*.test.tsx'],
    rules: {
      'no-restricted-syntax': 'off',
    },
  },
);
