import { test, expect } from '@playwright/test';

test('Uses cookie given at Global level- test 3', async ({ page }) => {
  await page.goto('https://demoblaze.com/');
  await expect(page.locator('#logout2')).toBeVisible()
});

test('Uses cookie given at Global level- test 4', async ({ page }) => {
  await page.goto('https://demoblaze.com/');
  await page.waitForTimeout(3000)
  await expect(page.locator('#logout2')).toBeVisible()
});
