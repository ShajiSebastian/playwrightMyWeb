import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  globalSetup: "./globalSetup_LoginSessionStorage.ts",
  // timeout: 30000,
  // timeout: 5 * 60 * 1000,
  // Maximum time in milliseconds the whole test suite can run. Zero timeout (default) disables this behavior. Useful on CI to prevent broken setup from running too long and wasting resources
  // globalTimeout: 600000,
  // preserveOutput: 'always', //'never', 'failures-only'
  // expect assertion time out. differnt from test timeout.  5 seconds by default. we can change it.
  // expect: {
  //   timeout: 10 * 1000,
  // },
  name: 'acceptance tests by shaji',
  // globalTimeout: process.env.CI ? 10000 * 1 * 1 : undefined,
  testDir: './tests',
  // testMatch: /.*\.e2e\.js/, // run only matching test files
  // testIgnore: '**/test-assets/**', // to ignore test files
  // Filter to only run tests with a title matching one of the patterns. Global configuration
  // grep: /smoke/,
  // Filter to only run tests with a title not matching one of the patterns
  // grepInvert: /manual/,
  /* Run all tests in all files in parallel. By default, test files are run in parallel. Tests in a single file are run in order*/
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  // outputDir: 'test-results', // Folder for test artifacts such as screenshots, videos, traces, etc.
  /* Retry on CI only */
  // retries: process.env.CI ? 2 : 0,
  retries: 0,
  // The maximum number of test failures for the whole test suite run. After reaching this number, testing will stop and exit with an error.
  // maxFailures: process.env.CI ? 1 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  // example below is using a ternary operator where it first checking if the environment variable CI is true or undefined/false. 
  // ...If true the top line with the "?" gets run, if false (running the playwright command from my local machine) the "html" and "indent-list-reporter" reports will be used.
  // reporter: process.env.CI 
    // ? 'dot' //[["list"], ["html"], ["@currents/playwright"]]
    // : 'list', //[["html"], ["indent-list-reporter"]], // to be used in CI. // Dot reporter is very concise - it only produces a single character per successful test run. It is the default on CI and useful where you don't want a lot of output., default 'list' when running locally
     reporter: 'html', //'list','line','html','dot'. dot only in console
    //  reporter: [['list', { printSteps: true }]], //opt into the step rendering
  // multiple reporters. instead of above single one
    //  reporter: [
    //   ['list'], //'list','line','html','dot'. dot only in console
    //   ['json', {  outputFile: 'test-results.json' }], // PLAYWRIGHT_JSON_OUTPUT_NAME=results.json npx playwright test --reporter=json
        // ["html",{ open: "always"}] // always, never, on-failure
    // ],

  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',
    // headless: false,
    // viewport: { width: 1280, height: 720 },
    // ignoreHTTPSErrors: true,
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer . 
    Traces are normally run in a Continuous Integration(CI) environment, because locally you can use UI Mode for developing and debugging tests. 
    However, if you want to run traces locally without using UI Mode, you can force tracing to be on with --trace on.*/
    trace: 'on', // other values 'on','off','on-first-retry','on-all-retries','retain-on-failure','retain-on-first-failure'
    screenshot: 'on', //'off','only-on-failure'
    // baseURL: 'http://localhost:3000',
    // browserName: 'firefox',
    // video: 'on-first-retry',//'off','on','retain-on-failure','on-first-retry',
    // launchOptions: {slowMo: 1000}// for slow execution
    storageState: "./loginSessionStorage.json",
  },

  /* Browser configuration. each tests will run in all the below browsers simultaneously */
  // we can select it from dropdwn options which we get when clicking inside square bracket
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // webkit execution fails for some scripts. need to check the issue
    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },

    // https://playwright.dev/docs/test-projects#configure-projects-for-multiple-environments
    // all the tests will run in all the below environments if the condition given in that is matching
    // {
    //   name: 'staging',
    //   use: {
    //     baseURL: 'staging.example.com',
    //   },
    //   retries: 2,
    // },
    // {
    //   name: 'production',
    //   use: {
    //     baseURL: 'production.example.com',
    //   },
    //   retries: 0,
    // },

    // https://playwright.dev/docs/test-projects#splitting-tests-into-projects
    // {
    //   name: 'Smoke',
    //   testMatch: /.*smoke.spec.ts/,
    //   retries: 0,
    // },
    //  {
    //   name: 'Smoke',
    //   testMatch: /.*.spec.ts/,
    //   retries: 0,
    // },
    // {
    //   name: 'Default',
    //   testIgnore: /.*smoke.spec.ts/,
    //   retries: 1,
    // },

  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },

  
  
});
