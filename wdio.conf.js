const allure = require('allure-commandline');

exports.config = {
    runner: 'local',
    specs: [
        'test/features/**/*.feature'
    ],
    exclude: [
        // 'path/to/excluded/files'
    ],
    maxInstances: 10,
    capabilities: [ {
        browserName: 'chrome',
        'goog:chromeOptions': {
            args: ['--headless', '--disable-gpu','--disable-dev-shm-usage','--no-sandbox'],
        },
        excludeDriverLogs: ['*']
    }],
    logLevel: 'error',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['chromedriver'],
    framework: 'cucumber',
    specFileRetries: 0,
    specFileRetriesDelay: 0,
    // specFileRetriesDeferred: false,
    reporters: ['spec', ['allure', {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: false,
    }]],
    cucumberOpts: {
        require: ['test/step-definitions/*.js'],
        backtrace: false,
        requireModule: ['@babel/register'],
        dryRun: false,
        failFast: false,
        format: ['pretty'],
        snippets: true,
        source: true,
        profile: [],
        strict: false,
        tagExpression: '',
        timeout: 60000,
        ignoreUndefinedDefinitions: false
    },
    // onPrepare: function (config, capabilities) {
    // },
    // onWorkerStart: function (cid, caps, specs, args, execArgv) {
    // },
    // beforeSession: function (config, capabilities, specs) {
    // },
    // before: function (capabilities, specs) {
    // },
    // beforeCommand: function (commandName, args) {
    // },
    // beforeFeature: function (uri, feature, scenarios) {
    // },
    beforeScenario: async (uri, feature, scenario, sourceLocation, context) => {
        await browser.maximizeWindow();
    },
    // beforeStep: function ({ uri, feature, step }, context) {
    // },
    // afterStep: function ({ uri, feature, step }, context, { error, result, duration, passed, retries }) {
    // },
    // afterScenario: function (uri, feature, scenario, result, sourceLocation, context) {
    // },
    // afterFeature: function (uri, feature, scenarios) {
    // },
    // afterCommand: function (commandName, args, result, error) {
    // },
    // after: function (result, capabilities, specs) {
    // },
    // afterSession: function (config, capabilities, specs) {
    // },
    onComplete: function () {
        const reportError = new Error('Could not generate Allure report')
        const generation = allure(['generate', 'allure-results', '--clean'])
        return new Promise((resolve, reject) => {
            const generationTimeout = setTimeout(
                () => reject(reportError),
                10000)

            generation.on('exit', function (exitCode) {
                clearTimeout(generationTimeout)

                if (exitCode !== 0) {
                    return reject(reportError)
                }

                console.log('Allure report successfully generated')
                resolve()
            })
        })
    }
    //onReload: function(oldSessionId, newSessionId) {
    //}
}
