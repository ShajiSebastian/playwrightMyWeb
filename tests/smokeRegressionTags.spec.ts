import { test, expect } from '@playwright/test';

// sample for tag somke, regression etc. Test tags are displayed in the test report
test('basic test1', {tag: '@smoke',}, async ({ page }) => {
  await page.goto('https://playwright.dev/');
  // ...
});

test('basic test2', {tag: '@Regression',}, async ({ page }) => {
  await page.goto('https://playwright.dev/');
  // ...
});

// tag at describe level
test.describe('tag at describe level', {
  tag: '@smoke',
}, () => {
  test('one', async ({ page }) => {
    // ...
  });

  test('two', async ({ page }) => {
    // ...
  });
});
