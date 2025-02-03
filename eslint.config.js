import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';
import pluginImport from 'eslint-plugin-import';
import pluginN from 'eslint-plugin-n';
import pluginPromise from 'eslint-plugin-promise';
import pluginStandard from 'eslint-plugin-standard';


/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    languageOptions: {
      globals: globals.browser,
      ecmaVersion: 'latest',
      parserOptions: {
        ecmaFeatures: { jsx: true },
        sourceType: 'module'
      }
    },
    settings: {
      react: { version: 'detect' }
    },
    plugins: {
      js: pluginJs,
      react: pluginReact,
      import: pluginImport,
      n: pluginN,
      promise: pluginPromise,
      standard: pluginStandard
    },
    rules: {
      ...pluginJs.configs.recommended.rules,
      ...pluginReact.configs.recommended.rules,
      ...pluginReact.configs['jsx-runtime'].rules,
      indent: ['error', 2],
      quotes: ['error', 'single'],
      semi: ['error', 'always'],
      // 'no-console': 'error',
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
      'import/export': 'error',
      'n/handle-callback-err': 'error'
    }
  }
];