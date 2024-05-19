import { test, expect } from '@playwright/test';

test('checking page load', async ({ page }) => {
    page.once('load', () => console.log('Page loaded 1!'));
    await page.goto('https://playwright.dev/');
    
    console.log(`Current url is: ${page.url()}`);
    console.log(await page.video().path());
    await page.video.saveAs(path);

  });
  


