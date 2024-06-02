import { test, expect } from '@playwright/test';

// By default, test files are run in parallel. Tests in a single file are run in order,
// You can configure tests using test.describe.configure to run tests in a single file in parallel.
// You can configure entire project to have all tests in all files to run in parallel using testProject.fullyParallel or testConfig.fullyParallel.
// To disable parallelism limit the number of workers to one.

// nb: Note that parallel tests are executed in separate worker processes and cannot share any state or global variables.

// npx playwright test --workers=1 // disable any parallelism. Either set workers: 1 option in the configuration file or pass --workers=1 to the command line.

// Run all tests in a single file parallel
test.describe.configure({ mode: 'parallel' }); // serial / parallel. default is serial

test('test1', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  // ...
});

test('test2', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  // ...
});

test('test3', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  // ...
});


