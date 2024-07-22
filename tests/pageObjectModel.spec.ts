import { test, expect } from '@playwright/test';
import { PlaywrightDevPage } from './pageObjects/playwright-dev-page';

test('basic test without POM', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.locator('text=Get started').click();
  await page.locator('text=Get started').first().click();
  await expect(page.locator('text=Getting started').first()).toBeVisible();
  await expect(page.locator('div[class="theme-doc-markdown markdown"] header h1')).toContainText('Installation');
});

test('basic test with POM', async ({ page }) => {
  const playwrightDev = new PlaywrightDevPage(page);
  await playwrightDev.goto();
  await playwrightDev.getStarted();
  await expect(playwrightDev.tocList).toContainText('Installation');
});
