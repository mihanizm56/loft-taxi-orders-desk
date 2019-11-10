const { override, addWebpackModuleRule } = require('customize-cra'); // eslint-disable-line
const path = require('path'); // eslint-disable-line

module.exports = (config /* , env */) => {
  return {
    ...config,
    entry: ['babel-polyfill', ...config.entry],
    resolve: {
      ...config.resolve,
      alias: {
        ...config.resolve.alias,
        '@': path.resolve(__dirname, 'src/'),
      },
    },
  };
};
