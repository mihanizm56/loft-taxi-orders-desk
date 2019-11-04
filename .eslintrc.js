module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
  ],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
  },
  env: {
    browser: true,
    node: true,
  },
  plugins: ['import', 'react-hooks'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'all',
        useTabs: false,
        printWidth: 80,
      },
    ],
    'jsx-a11y/media-has-caption': 'off',
    'import/prefer-default-export': 0,
    'prefer-destructuring': 0,
    'react/destructuring-assignment': 0,
    'react/jsx-filename-extension': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['**/*.test.js'],
      },
    ],
    'no-console': ['error', { allow: ['warn', 'error', 'info'] }],
    quotes: ['error', 'single'],
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/label-has-for': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['routeName'],
        aspects: ['noHref', 'invalidHref', 'preferButton'],
      },
    ],
    'function-paren-newline': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'react/default-props-match-prop-types': 0,
    'react/require-default-props': 0,
    'react/jsx-wrap-multilines': [
      'error',
      { arrow: true, return: true, declaration: true },
    ],
    'react/jsx-one-expression-per-line': 0,
    'react/button-has-type': 0,
    'consistent-return': 0,
    '@typescript-eslint/indent': 0, // Conflicts with Prettier
    '@typescript-eslint/explicit-member-accessibility': 0,
    '@typescript-eslint/interface-name-prefix': ['error', 'always'],
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    'no-case-declarations': 0,
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [['@', './src']],
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
      },
    },
  },
};
