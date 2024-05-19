import { test, expect } from '@playwright/test';
const { webkit, devices } = require('playwright');
const iPhone = devices['iPhone 6'];

// test('Browserss', async ({ page }) => {
//   const browser = await webkit.launch();
//   const context = await browser.newContext({
//     iPhone
//   });
//   const page2 = await context.newPage();
//   await page2.goto('http://example.com');
//   // other actions...
//   await browser.close();
// })();

// test('Browsers', async ({ page }) => {
//   const browser = await firefox.launch();  // Or 'firefox' or 'webkit' or 'chromium'.
//   const page1 = await browser.newPage();
//   await page1.goto('https://playwright.dev/');
//   console.log(`Current url is: ${page.url()}`);
// });

