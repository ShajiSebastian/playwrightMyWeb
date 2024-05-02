import { test, expect } from '@playwright/test';

// Run all tests parallel
test.describe.configure({ mode: 'parallel' }); // serial / parallel. default is parallel

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


