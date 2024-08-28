import { test, expect } from '@playwright/test';

// https://www.lambdatest.com/learning-hub/playwright-visual-regression-testing

// npx playwright test visualRegressionTesting.spec.ts --update-snapshots // run command

test('VisualRegressionTesting-compare a page', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveScreenshot();
  // will take sreenshot also will compare with previous one. 
  // The screenshot will be stored in the folder /tests/nameOfScriptFile-snapshots. screenshots for each browser.
  // This function will wait until two consecutive page screenshots yield the same result, and then compare the last screenshot with the expectation. 
  // The script will fail when we run first time as there is no existing screenshot available
  await expect(page).toHaveScreenshot("VisualRegressionFullPage.png");
  // if we are not giving any name to screenshot file dont forget to run the below commands. This is to update our baseline images
  // npx playwright test --update-snapshots
})

test('VisualRegressionTesting-compare element', async ({ page }) => {
  await page.goto('https://ecommerce-playground.lambdatest.io/');
  const headerLogo = page.locator('#entry_217821 > figure > a > img')
  await expect(headerLogo).toHaveScreenshot()
  await expect(page).toHaveScreenshot("VisualRegressionElement.png");
})

// There is a chance that screenshot comparison may fail for minor changes. We can give some relaxation.
// maxDiffPixelRatio - this value can be between 0 and 1 and is defined as the acceptable amount of pixels that can differ from the total amount of pixels.
// maxDiffPixels - this can be any value and is just a count of how many pixels can be different - it's worth experimenting with your test execution and seeing what an acceptable difference is.
// Threshold - this value can be between 0 (strict) and 1 (lax) and is the acceptable perceived color difference between the same pixel in the compared images - again, this is worth experimenting with and seeing how strict you want it to be.
// await expect(headerLogo).toHaveScreenshot({ maxDiffPixelRatio: 0.1 })
// await expect(headerLogo).toHaveScreenshot({ maxDiffPixels: 100 })
// await expect(headerLogo).toHaveScreenshot({ threshold: 0.1 })
//The above configuration can be done in script or project level
// module.exports = {
//   expect: {
//   toHaveScreenshot: { maxDiffPixels: 100 },
//   },
// };

// There is a chance of dynamic component in a page. We can skip comparing this as it will always differ
test('VisualRegressionTesting-ignoring dynamic part of the page', async ({ page }) => {
  await page.goto('https://ecommerce-playground.lambdatest.io/');
  await expect(page).toHaveScreenshot({ mask: [page.locator('.carousel-inner')] })
});

// There are pages which we can scroll
test('VisualRegressionTesting-full page by scrolling', async ({ page }) => {
  await page.goto('https://ecommerce-playground.lambdatest.io/');
  await page.waitForTimeout(3000)
  await expect(page).toHaveScreenshot({ fullPage: true, animations: "disabled", maxDiffPixelRatio: 0.2 });
});
// animations: “disabled” - this will stop any CSS animations or transitions on your webpage.
// maxDiffPixelRatio: 0.2 - which we covered earlier, will allow some room for minor differences.