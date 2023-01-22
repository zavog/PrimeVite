module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/typescript/recommended',
    'plugin:prettier/recommended',
  ],
  rules: { 'no-undef': 'off' },
  ignorePatterns: ['**/*.d.ts', '**/*.css', '**/*.md'],
}
