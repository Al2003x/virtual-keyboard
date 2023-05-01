module.exports = {
  extends: ['airbnb-base'],
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  rules: {
    'import/extensions': 0,
    quotes: ['error', 'single', { avoidEscape: true }],
  },
};
