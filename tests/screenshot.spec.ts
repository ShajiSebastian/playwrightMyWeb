import { test, expect } from '@playwright/test';

// https://playwright.dev/docs/screenshots // refer the link for more options

test.skip('take screenshot', async ({ page }) => {
  await page.goto('https://playwright.dev/'); 
  await page.screenshot(); // screenshot will be saved in a separate folder with the name of script name
  await page.screenshot({ path: 'screenshot.png' }); // will be saved in root location
  await page.screenshot({ path: 'screenshotFull.png', fullPage: true });
  await page.locator('#__docusaurus_skipToContent_fallback > header > div > h1').screenshot({ path: 'screenshotElement.png' });//screenshot of a single element
})

test.skip('compare screenshot', async ({ page }) => {
  await page.goto('https://playwright.dev/'); 
  await expect(page).toHaveScreenshot();// will take sreenshot also will compare with previous one
// This function will wait until two consecutive page screenshots yield the same result, and then compare the last screenshot with the expectation. 
// The script may fail when we run first time as there is no existing screenshot available
  await expect(page).toHaveScreenshot("abcd.png");
})

test("mask element in screenshot", async ({ page }, testInfo) => {
  await page.goto("https://letcode.in/edit");
  let signup = page.locator("text='Sign up'")
  let login = page.locator("text='Log in'")
  let sc = await page.screenshot({path: "./screenshotHideElement.png",mask: [signup, login] });
  // await testInfo.attach("highlighted screenshot", {
  //     body: sc,
  //     contentType: "image/png"
  // })
})


