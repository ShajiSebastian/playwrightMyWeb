import { test, expect } from '@playwright/test';

// sample for tag somke, regression etc. Test tags are displayed in the test report
// npx playwright test --tag smoke
test('tag sample 1', {tag: '@smoke',}, async ({ page }) => {
  await page.goto('https://playwright.dev/');
  // ...
});

test('tag sample 2', {tag: '@Regression',}, async ({ page }) => {
  await page.goto('https://playwright.dev/');
  // ...
});

test('tag sample 3', {tag: ['@smoke', '@Regression']}, async ({ page }) => {
  await page.goto('https://playwright.dev/');
  // ...
});

// tag at describe level
test.describe('tag at describe level', {tag: '@smoke',}, () => {
  test('tag inside describe one', async ({ page }) => {
    // ...
  });

  test('tag inside describe two', async ({ page }) => {
    // ...
  });
});
