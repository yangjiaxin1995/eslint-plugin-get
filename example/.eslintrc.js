module.exports = {
  root: true,
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  plugins: ['get'],
  rules: {
    'get/get': ['warn', false],
  },
};
