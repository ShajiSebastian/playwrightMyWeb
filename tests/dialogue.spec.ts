import { test, expect } from '@playwright/test';
const { chromium } = require('playwright');  // Or 'firefox' or 'webkit'.

// By default, dialogs are auto-dismissed by Playwright, so you don't have to handle them.

test('retry Test1. Will pass', async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  page.on('dialog', async dialog => {
    console.log(dialog.message());
    await dialog.dismiss(); //dialog.accept();
  });
  await page.evaluate(() => alert('1'));
  await browser.close();
});

// page.on('dialog', dialog => dialog.accept());
// await page.getByRole('button').click();
