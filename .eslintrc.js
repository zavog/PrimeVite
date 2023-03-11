module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/typescript/recommended',
    'plugin:prettier/recommended',
  ],
  rules: { 'no-undef': 'off' },
  ignorePatterns: ['**/*.css', '**/*.md', 'shims.d.ts', 'dist'],
}
