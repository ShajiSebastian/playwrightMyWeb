import { test, expect } from '@playwright/test';
const { chromium } = require('playwright');  // Or 'firefox' or 'webkit'.

// keeps trying to execute multiple times till it get success response or time out occurs
// https://playwright.dev/docs/test-assertions#expectpoll
test.skip('retry till pass ', async ({ page }) => {
await expect.poll(async () => {
  const response = await page.request.get('https://api.example.com');
  return response.status();
}, {
  // Custom expect message for reporting, optional.
  message: 'make sure API eventually succeeds',
  // Poll for 10 seconds; defaults to 5 seconds. Pass 0 to disable timeout.
  timeout: 10000,
}).toBe(200);
})

// You can also specify custom polling intervals:
test.skip('retry till pass2 ', async ({ page }) => {
await expect.poll(async () => {
  const response = await page.request.get('https://api.example.com');
  return response.status();
}, {
  // Probe, wait 1s, probe, wait 2s, probe, wait 10s, probe, wait 10s, probe
  // ... Defaults to [100, 250, 500, 1000].
  intervals: [1_000, 2_000, 10_000],
  timeout: 60_000
}).toBe(200);
})