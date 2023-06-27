module.exports = {
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:tailwindcss/recommended'
  ],
  rules: {
    'tailwindcss/migration-from-tailwind-2': 'off',
    'vue/multi-word-component-names': 'off'
  }
}
