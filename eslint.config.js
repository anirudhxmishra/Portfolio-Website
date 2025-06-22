// eslint.config.js

import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

export default [
  // Ignore built folders and node_modules
  {
    ignores: ['dist', 'build', '.next', 'node_modules'],
  },

  // Apply ESLint rules to all JS/JSX files
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      // Base JS rules
      ...js.configs.recommended.rules,

      // React-specific rules
      ...react.configs.recommended.rules,

      // React Hooks rules
      ...reactHooks.configs.recommended.rules,

      // React Refresh (for Vite or Fast Refresh dev)
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],

      // Allow unused variables if they match pattern (like `React`, `motion`)
      'no-unused-vars': [
        'error',
        {
          varsIgnorePattern: '^[A-Z_]', // allows React, motion, etc.
          argsIgnorePattern: '^_',      // allows (_, index)
        },
      ],
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
];
