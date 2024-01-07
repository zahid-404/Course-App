module.exports = {
  root: true,
  env: { node: true, es2020: true },
  extends: ['eslint:recommended'],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: ['express'],
  rules: {
    // Global rules for the entire project
    'semi': ['error', 'never'],
    'quotes': ['error', 'single'],
    'no-console': 'off',
  },
  overrides: [
    {
      files: ['server/**/*.js'], // Apply rules only to files inside the server folder
      extends: ['plugin:express/recommended'], // Extend with express-specific rules
      rules: {
        // Server-specific rules can be added or overridden here
        'express/no-unused-vars': 'error',
      },
    },
  ],
};
