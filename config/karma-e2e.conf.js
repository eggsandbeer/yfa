module.exports = function (config) {
    "use strict";

    config.set({
        frameworks: ["ng-scenario"],

        // base path, that will be used to resolve files and exclude
        basePath  : '../',

        // list of files / patterns to load in the browser
        files     : [
            'test/client/e2e/**/*.js'
        ],

        // list of files to exclude
        exclude   : [

        ],

        junitReporter : {
            outputFile: 'test_out/e2e.xml',
            suite     : 'e2e'
        },

        // test results reporter to use
        // possible values: 'dots', 'progress', 'junit'
        reporters     : ['progress'],

        // web server port
        port          : 9876,

        // cli runner port
        runnerPort    : 9100,

        // enable / disable colors in the output (reporters and logs)
        colors        : true,

        // level of logging
        // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
        logLevel      : config.DEBUG,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch     : true,

        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera
        // - Safari (only Mac)
        // - PhantomJS
        // - IE (only Windows)
        browsers      : ['Chrome', 'PhantomJS'],

        // If browser does not capture in given timeout [ms], kill it
        captureTimeout: 60000,

        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        singleRun     : false,

        proxies: {
            '/': 'http://localhost:3000/'
        },

        urlRoot: '/__karma__/'
    });
};
