module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true,
  },
  extends: [
    'airbnb-typescript/base'
  ],
  plugins: [
    '@typescript-eslint',
  ],
  ignorePatterns: [
    'dist',
    'node_modules',
    'coverage',
    '.eslintrc.js',
    '*.snippet.ts',
    '*.config.js'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.eslint.json',
  },
  rules: {
    'comma-dangle': 'off',
    'max-len': ['error', {code: 120}],
    'no-case-declarations': 'off',
    'no-console': 'off',
    'no-param-reassign': 'off',
    'no-plusplus': 'off',
    'object-curly-newline': 'off',
    'object-curly-spacing': 'off',
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    '@typescript-eslint/explicit-function-return-type': 'error',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/semi': ['error', 'never']
  },
};
