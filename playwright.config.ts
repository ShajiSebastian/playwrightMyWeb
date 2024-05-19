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
  // timeout: 30000,
  // timeout: 5 * 60 * 1000,
  // Maximum time in milliseconds the whole test suite can run. Zero timeout (default) disables this behavior. Useful on CI to prevent broken setup from running too long and wasting resources
  // globalTimeout: 600000,
  // preserveOutput: 'always', //'never', 'failures-only'
  name: 'acceptance tests by shaji',
  globalTimeout: process.env.CI ? 1 * 1 * 1 : undefined,
  testDir: './tests',
  // testMatch: /.*\.e2e\.js/,
  // testIgnore: '**/test-assets/**',
  // Filter to only run tests with a title matching one of the patterns. Global configuration
  // grep: /smoke/,
  // Filter to only run tests with a title not matching one of the patterns
  // grepInvert: /manual/,
  /* Run all tests in all files in parallel. By default, test files are run in parallel. Tests in a single file are run in order*/
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  // retries: 2,
  // The maximum number of test failures for the whole test suite run. After reaching this number, testing will stop and exit with an error.
  // maxFailures: process.env.CI ? 1 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
     reporter: 'html', // reporter: 'list',
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
    trace: 'on-first-retry', // other values 'on','off','on-first-retry','on-all-retries','retain-on-failure','retain-on-first-failure'
    screenshot: 'on', //'off','only-on-failure'
    // baseURL: 'http://localhost:3000',
    // browserName: 'firefox',
    // video: 'on-first-retry',//'off','on','retain-on-failure','on-first-retry'
  },

  /* Configure projects for major browsers. will run simultaneously */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },

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
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
