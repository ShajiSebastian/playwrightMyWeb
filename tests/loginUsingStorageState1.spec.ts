import { test, expect } from '@playwright/test';

// step1: create a login sesion json file. This can be created in two ways
//       1. using codegen npx playwright codegen --save-storage=auth.json ( to confirm whether it works we can use the command npx playwright open --load-storage=auth.json abc.com)
//       2. create a file which contains login steps and save its session. eg: globalSetup_LoginSessionStorage.ts
// Step2. mention to use it in our test file. This can be configured at global level (inside config file) or test level
//       1. If using global level, mention the below in playwright.config.ts
//          globalSetup: "./globalSetup_LoginSessionStorage",// to run this file before the suite starts to run.
//          storageState: "./loginSessionStorage.json" // to use the this file in all our tests. golbal configuration. we can configure this in our test file too.
//       2. If using in test loadEnvFile, mention the below in our test file


test('Uses cookie given at Global level', async ({ page, context }) => {
  // await context.clearCookies() // clear cookie given in global configuration
  await page.goto('https://demoblaze.com/');
  await expect(page.locator('#logout2')).toBeVisible()
});

test('Uses cookie given at Global level- test 1', async ({ page }) => {
  await page.goto('https://demoblaze.com/');
  await page.waitForTimeout(3000)
  await expect(page.locator('#logout2')).toBeVisible()
});

test.use({ storageState: "./loginSessionStorage.json" })
test('Uses cookie given at test level- test1', async ({ page }) => {
  await page.goto('https://demoblaze.com/');
  await expect(page.locator('#logout2')).toBeVisible()
});

test('Uses cookie given at test level- test2', async ({ browser }) => {
  const context = await browser.newContext({
    storageState: "./loginSessionStorage.json"
  })
  const page = await context.newPage()
  await page.goto('https://demoblaze.com/');
  await expect(page.locator('#logout2')).toBeVisible()
});
