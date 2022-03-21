module.exports = {
  env: {
    browser: true,
  },

  parser: '@typescript-eslint/parser',
  extends: ['airbnb', 'airbnb-typescript', 'plugin:prettier/recommended'],

  plugins: ['prettier'],

  parserOptions: {
    project: ['./tsconfig.json'],
  },
  rules: {
    'prettier/prettier': 'error',
    // A list of allowed function definition syntaxes.
    'react/function-component-definition': [
      2,
      {
        namedComponents: ['function-declaration', 'arrow-function'],
      },
    ],
    // Default length is 100.
    'max-len': 'off',
    // Allow underscore as a prefix for private values.
    'no-underscore-dangle': 'off',

    // Allow hoisting.
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': 'off',

    // Allow amplify _version to be number.
    '@typescript-eslint/naming-convention': 'off',
    'react/jsx-props-no-spreading': [
      2,
      {
        exceptions: ['IonTextarea', 'IonInput'],
      },
    ],
    // This rule disallows you to use more recent javascript features.
    // We don't need this rule because webpack + babel can handle it.
    'no-restricted-syntax': 'off',

    // Use single quotes in jsx.
    'jsx-quotes': [2, 'prefer-single'],
    // Let's not use explicit any.
    //'@typescript-eslint/no-explicit-any': [2, {
    //    'fixToUnknown': false,
    //    'ignoreRestArgs': false
    //}],
    // Since React v17, it's not required to import React.
    'react/react-in-jsx-scope': 'off',
  },
};
