module.exports = {
  extends: 'ashworthhub',
  env: {
    browser: true,
  },
  plugins: [
    'react',
    'jsx-a11y',
  ],
  rules: {
    'react/jsx-filename-extension': 'off',
    'react/jsx-max-props-per-line': 'error',
    'react/jsx-closing-bracket-location': ['error', 'props-aligned'],
    'import/named': 'error',
    'import/imports-first': 'off',
  },
};
