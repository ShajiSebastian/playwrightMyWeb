import { test, expect } from '@playwright/test';
const { chromium } = require('playwright');  // Or 'firefox' or 'webkit'.

test('looping item', async ({ page }) => {
  for (const li of await page.getByRole('listitem').all())
  await li.click();
});
