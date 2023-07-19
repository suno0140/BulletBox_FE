const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@imgs': path.resolve(__dirname, 'src/imgs'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
    },
  },
};
