/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting',
    // 'plugin:prettier/recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },

  rules: {
    // http://eslint.cn/docs/rules/
    'vue/no-parsing-error': 'off',
    'no-unused-vars': 'off',
    'no-dupe-args': 'error',
    'no-empty': 'off',
    'no-extra-semi': 'off',
    'no-constant-condition': 'off',
    'no-console': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/no-multiple-template-root': 'off'
  },
}
