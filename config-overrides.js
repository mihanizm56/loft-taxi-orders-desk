const path = require('path'); // eslint-disable-line @typescript-eslint/no-var-requires

module.exports = (config /* , env */) => {
  return {
    ...config,
    entry: [...config.entry, 'babel-polyfill'],
    resolve: {
      ...config.resolve,
      alias: {
        ...config.resolve.alias,
        '@': path.resolve(__dirname, 'src/'),
      },
    },
  };
};
