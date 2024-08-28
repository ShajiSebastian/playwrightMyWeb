import { test, expect } from '@playwright/test';

// // Each test in the file will be retried twice and have a timeout of 20 seconds.
test.describe.configure({ retries: 2, timeout: 200000 });

test('retry Test1. Will pass', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  // ...
});

test('retry Test2. Will fail', async ({ page }) => {
  await page.goto('https://playwright.devMMMMMM/');
  // ...
});

test('retry Test3. Will fail', async ({ page }) => {
  await page.goto('https://playwright.devMMMMMMMM/');
  // ...
});

