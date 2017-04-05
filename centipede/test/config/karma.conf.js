var webpackConfig = require('../../webpack.conf');
webpackConfig.entry = {};

module.exports = function(config) {
  config.set({
    basePath: '../../',
    browsers: ['Chrome'],
    frameworks: ['mocha', 'expect'],
    preprocessors: {
      'test/**/*.js': ['webpack'],
    },
    files: [
      'centipede.js',
      'test/spec/**/*_unit.js',
    ],
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: true
    },
    reporters: ['progress', 'html'],
    htmlReporter: {
      outputDir: 'docs/tests',
      urlFriendlyName: true,
      namedFiles: true,
    },
    client: {
      mocha: {
        timeout : 20000, // 20 seconds
      },
    },
  });
};
