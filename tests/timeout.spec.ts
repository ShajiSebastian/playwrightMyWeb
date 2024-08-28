import { test, expect } from '@playwright/test';

// Run all the tests in the file concurrently using parallel workers.
test.describe.configure({ timeout: 200000 });

test('timeoutTest1. Will pass', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  // ...
});

test('timeoutTest2. Will fail', async ({ page }) => {
  await page.goto('https://playwright.devMMMMMM/');
  // ...
});

test('timeouTest3. Will fail', async ({ page }) => {
  await page.goto('https://playwright.devMMMMMMMM/');
  // ...
});

// setting timeout at test level
test('timeout at test level', async ({ page }) => {
  test.setTimeout(120000);
  // ...
});

test.beforeAll(async () => {
  // Set timeout for this hook.
  test.setTimeout(60000);
});

// setting timeout at describe level
test.describe('setting timeout at describe level', () => {
  // Applies to all tests in this group.
  test.describe.configure({ timeout: 60000 });

  test('test one. will pass', async () => { /* ... */ });
  test('test two. will pass', async () => { /* ... */ });
  test('test three. will pass', async () => { /* ... */ });
});
