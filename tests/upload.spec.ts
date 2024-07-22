import { test, expect } from '@playwright/test';
test('Handle file uploads', async({context})=>{
  const page = await context.newPage();
  await page.goto("https://cgi-lib.berkeley.edu/ex/fup.html");
// Start waiting for file chooser before clicking. Note no await.
const fileChooserPromise = page.waitForEvent('filechooser');
await page.locator("input[name='upfile']").click();
await page.waitForTimeout(3000);
const fileChooser = await fileChooserPromise;
await fileChooser.setFiles('./tests/uploadFiles/sample.txt');
await page.waitForTimeout(3000);
await page.locator("input[type='submit']").click();})

