module.exports = {
  env: {
    es6: true,
    node: true,
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  extends: ['airbnb-base', 'prettier'],
  parser: 'babel-eslint',
  parserOptions: {
    allowImportExportEverywhere: false,
    codeFrame: true,
    ecmaFeatures: {
      arrowFunctions: true,
      classes: true,
      experimentalObjectRestSpread: true,
      jsx: false,
      modules: true,
    },
    ecmaVersion: 8,
    sourceType: 'module',
  },
  plugins: ['compat', 'fp', 'sort-imports-es6-autofix', 'prettier'],
  rules: {
    'compat/compat': 'error',
    'fp/no-arguments': 'error',
    'fp/no-delete': 'error',
    'fp/no-events': 'error',
    'fp/no-get-set': 'error',
    'fp/no-let': 'error',
    'fp/no-loops': 'warn',
    'fp/no-mutating-assign': 'error',
    'fp/no-mutating-methods': [
      'error',
      {
        allowedObjects: ['R'],
      },
    ],
    'fp/no-valueof-field': 'error',
    'import/no-extraneous-dependencies': 'off',
    'import/order': [
      'error',
      {
        groups: ['external', ['builtin', 'sibling', 'parent', 'index', 'internal']],
        'newlines-between': 'always-and-inside-groups',
      },
    ],
    'linebreak-style': ['error', 'unix'],
    'lines-around-comment': [
      'error',
      {
        beforeBlockComment: true,
      },
    ],
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: ['const'],
        next: '*',
      },
      {
        blankLine: 'any',
        prev: ['const'],
        next: ['const'],
      },
      {
        blankLine: 'always',
        prev: '*',
        next: 'return',
      },
    ],
    'no-underscore-dangle': ['off'],
    'prettier/prettier': 'error',
    'sort-imports-es6-autofix/sort-imports-es6': [
      'error',
      {
        ignoreCase: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
      },
    ],
    'spaced-comment': ['off'],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js'],
        paths: ['src'],
      },
    },
  },
}
