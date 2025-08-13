/** @type {import("prettier").Config} */
export default {
  tabWidth: 4,
  semi: true,
  singleQuote: true,
  trailingComma: 'all',
  bracketSpacing: true,
  arrowParens: 'always',
  endOfLine: 'lf',
  overrides: [
    {
      files: ['*.json', '*.config.js', '*.config.ts', 'prettier.config.js'],
      options: {
        tabWidth: 2,
      },
    },
  ],
};
