import { test, expect, Page, Browser, chromium } from '@playwright/test';

// The below script uses to create a login session to reuse in all our tests
// The purpose of this script is to save the cookies in a file named loginSessionStorage.json"
// This file is not necessary but LoginSessionStorage.json is necessary
// If we use codegen, the file LoginSessionStorage.json will create automatically and this file is not required in that case
// The beow code executes always before starting any test cases. This happens even if we do test.only in any test file
async function globalSetup() {
    const browser: Browser = await chromium.launch({ headless: true });
    const context = await browser.newContext()
    const page: Page = await context.newPage();
    await page.goto('https://demoblaze.com/');
    await page.getByRole('link', { name: 'Log in' }).click();
    await page.locator('#loginusername').click();
    await page.locator('#loginusername').fill('test');
    await page.locator('#loginpassword').fill('t');
    await page.locator('#loginpassword').click();
    await page.locator('#loginpassword').fill('test');
    await page.getByRole('button', { name: 'Log in' }).click();
    await expect(page.locator('#nameofuser')).toContainText('Welcome test');
    //save the state of the login
    await page.context().storageState({ path: "./loginSessionStorage.json" })
    await browser.close()
};

export default globalSetup;