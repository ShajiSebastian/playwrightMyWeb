import { test, expect } from '@playwright/test';


// basic info about a test
test('screenshot taking', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  // await test.info().attach('screenshot', {
  //   body: await page.screenshot(),
  //   contentType: 'image/png',
  // });
});

test('reading title of the current test script',async ({ page }) => {
  console.log(`The title of the current test is:  ${test.info().title}`);
  console.log(`The titlePath of the current test is: ${test.info().titlePath}`);
  await page.goto('https://playwright.dev/');
  console.log(`The duration of the current test is: ${test.info().duration}`);
  console.log(`test.info().status is: ${test.info().status}`);
});