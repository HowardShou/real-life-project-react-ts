module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  // extends繼承(拓展)是eslint本來就有的設定，不過仍需要下載，
  // airbnb對應的就是eslint-config-aribnb
  // 不過也不是只有eslint-config-xx的套件能被放到extends，以下
  // 也有從plugin一次引入多個的寫法(plugin:XXXX/recommended)
  extends: [
    'airbnb',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
    'react-app',
    // "plugin:react/recommended",
    // "eslint:recommended",
  ],
  // plugin則是eslint本身沒有由其他開法者分享出來的，亦需要下載，
  // react對應的是eslint-plugin-react
  plugins: ['react', '@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': 'error',
  },
}
