import { test, expect } from '@playwright/test';

test('Login test', async ({ page }) => {
  await page.goto('https://practicetestautomation.com/practice-test-login/');
  await page.getByLabel('Username').click();
  await page.getByLabel('Username').fill('student');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').press('CapsLock');
  await page.getByLabel('Password').fill('Password123');
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.getByRole('heading')).toContainText('Logged In Successfully');
  await expect(page.getByRole('link', { name: 'Log out' })).toBeVisible();
});

test("Locator in detail", async ({ page }, testInfo) => {
  await test.step("Login", async () => {
      await page.goto("https://www.saucedemo.com/");
      const user = page.locator("input[placeholder='Username']")
      await user.fill("standard_user");
      const pass = page.locator("input[placeholder='Password']")
      await pass.fill("secret_sauce");
      await page.click("#login-button");
      const screenshot = await page.screenshot();
      await testInfo.attach("login screenshot", {
          contentType: "image/png",
          body: screenshot
      })
  })
})