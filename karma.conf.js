// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-spec-reporter'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular-devkit/build-angular/plugins/karma'),
    ],
    client: {
      clearContext: false, // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      reports: ['json', 'html'],
      dir: 'coverage',
      includeAllSources: true,
      skipFilesWithNoCoverage: false,
      fixWebpackSourcePaths: true,
    },
    specReporter: {
      suppressErrorSummary: false,
      suppressFailed: false,
      suppressPassed: false,
      suppressSkipped: true,
      showSpecTiming: true,
    },
    reporters: ['spec', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_WARN,
    autoWatch: true,
    browsers: ['Chrome'],
    // browsers: ['ChromeNoSandbox'],
    // customLaunchers: {
    //   ChromeNoSandbox: {
    //     base: 'ChromiumHeadless',
    //     flags: ['--no-sandbox'],
    //   },
    // },
    singleRun: true,
    restartOnFileChange: true,
  });
};
