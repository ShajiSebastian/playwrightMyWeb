import { test, expect } from '@playwright/test';
const { chromium } = require('playwright');  // Or 'firefox' or 'webkit'.

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