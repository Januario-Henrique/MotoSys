// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');

module.exports = defineConfig([
  {
    env: {
      browser: true,
      node: true, 
    },
  },
  expoConfig,
  {
    ignores: ['dist/*'],
  },
]);
  