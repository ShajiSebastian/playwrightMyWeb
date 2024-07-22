import { test, expect } from '@playwright/test';
const { chromium } = require('playwright');  // Or 'firefox' or 'webkit'.

// keeps trying to execute multiple times till it get success response or time out occurs
// aywright.dev/docs/test-assertions#expecttopass
test.skip('retry till pass ', async ({ page }) => {
  await expect(async () => {
    const response = await page.request.get('https://api.example.com');
    expect(response.status()).toBe(200);
  }).toPass();
})

// You can also specify custom timeout and retry intervals:
test.skip('retry till pass2 ', async ({ page }) => {
  await expect(async () => {
    const response = await page.request.get('https://api.example.com');
    expect(response.status()).toBe(200);
  }).toPass({
    // Probe, wait 1s, probe, wait 2s, probe, wait 10s, probe, wait 10s, probe
    // ... Defaults to [100, 250, 500, 1000].
    intervals: [1_000, 2_000, 10_000],
    timeout: 60_000
  });
})