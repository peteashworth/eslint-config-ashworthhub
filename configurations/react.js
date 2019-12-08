module.exports = {
  extends: 'ashworthhub',
  env: {
    browser: true,
  },
  plugins: [
    'babel',
    'react',
    'jsx-a11y',
  ],
  rules: {
    'generator-star-spacing': 'off',
    'jsx-a11y/anchor-is-valid': ['error', {
      components: ['Link'],
      specialLink: ['to'],
    }],
    'react/jsx-filename-extension': 'off',
    'react/jsx-max-props-per-line': 'error',
    'react/jsx-closing-bracket-location': ['error', 'props-aligned'],
    'react/no-unused-prop-types': ['error', {
      skipShapeProps: true,
    }],
    'react/prefer-stateless-function': ['error', {
      ignorePureComponents: true,
    }],
    'import/named': 'error',
    'no-param-reassign': ['error', {
      props: true,
      ignorePropertyModificationsFor: ['req'],
    }],
    'react/destructuring-assignment': [
      'off',
      'always',
      {
        ignoreClassFields: true,
      },
    ],
  },
};
