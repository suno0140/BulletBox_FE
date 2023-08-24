/* eslint @typescript-eslint/no-var-requires: "off" */
const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@imgs': path.resolve(__dirname, 'src/imgs'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@layout': path.resolve(__dirname, 'src/layout'),
      '@core': path.resolve(__dirname, 'src/core'),
      '@api': path.resolve(__dirname, 'src/api'),
      '@redux': path.resolve(__dirname, 'src/redux'),
    },
  },
};
