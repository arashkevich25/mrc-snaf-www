const path = require('path');

module.exports = {
  eslint: {
    enable: true,
    mode: 'extends',
    loaderOptions: (eslintOptions) => {
      return eslintOptions;
    },
  },
};
