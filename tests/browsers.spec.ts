import { test, expect } from '@playwright/test';
const { chromium, firefox, webkit } = require('playwright');

// reading current url
test('Browsers', async ({ page }) => {
  const browser = await firefox.launch();  // Or 'firefox' or 'webkit' or 'chromium'.
  const page1 = await browser.newPage();
  await page1.goto('https://playwright.dev/');
  console.log(`Current url is: ${page.url()}`);
});
