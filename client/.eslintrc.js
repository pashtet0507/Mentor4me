module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-filename-extension': 0,
    'no-restricted-exports': 0,
    'react/prop-types': 0,
    'no-console': 0,
    'react/jsx-no-constructed-context-values': 0,
    ' default-param-last': 0,
    'max-len': 0,
    'default-param-last': 0,
    'no-alert': 0,
    'no-param-reassign': 0,
    'no-unused-vars': 0,
    'func-names': 0,
    'import/prefer-default-export': 0,
    'no-unused-expressions': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'import/no-cycle': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'no-nested-ternary': 0,
  },
};
