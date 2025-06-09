// @ts-check
import eslint from '@eslint/js';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import globals from 'globals';
import { parse } from 'path';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    ignores: ['eslint.config.mjs'],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  eslintPluginPrettierRecommended,
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest,
      },
      sourceType: 'commonjs',
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
   rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-floating-promises': 'warn',
      '@typescript-eslint/no-unsafe-argument': 'off', // Cambiado a 'off'
      '@typescript-eslint/no-unsafe-call': 'off',     // Añadido y puesto en 'off'
      'prettier/prettier': [
          'error',
          {
              singleQuote: true,
              trailingComma: 'es5',
              printWidth: 100,
              tabWidth: 4,
              semi: true,
              useTabs: false,
              endOfLine: 'lf',
          },
      ],
    },
  }
);