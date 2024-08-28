import { test, expect } from '@playwright/test';

test.use({
  browserName: "firefox"
})
test('test1', async ({ page }) => {
 
  await page.goto('https://playwright.dev/');
  await page.screenshot({ path: 'screenshot.png' });
  await page.waitForTimeout(3000)
})

test('test2', async ({ page }) => {
 
  await page.goto('https://playwright.dev/');
  await page.screenshot({ path: 'screenshot.png' });
  await page.waitForTimeout(3000)
})

