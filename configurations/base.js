module.exports = {
  parser: 'babel-eslint',
  env: {
    es6: true,
    jest: true,
    jasmine: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true,
    },
  },
  extends: 'airbnb',
  plugins: [
    'import',
    'promise',
  ],
  rules: {
    'max-len': ['warn', 120, { ignoreComments: true }],
    'quote-props': ['error', 'consistent-as-needed'],
    'no-cond-assign': ['error', 'except-parens'],
    'radix': 'off',
    'no-else-return': 'error',
    'import/no-extraneous-dependencies': ['error', { devDependencies: ['**.*.test.js', '**/*.spec.js', '**/*.conf.js', '**/*.stories.js'],
      peerDependencies: true }],
    'no-confusing-arrow': 'off',
    'comma-dangle': ['error', 'always-multiline'],
    'object-property-newline': ['error', { allowMultiplePropertiesPerLine: false }],
  },
  overrides: [
    {
      files: [ "src/*.js", "dist/*.js", "bin/*.js", "lib/*.js" ],
      excludedFiles: '*.test.js',
    },
  ],
};
