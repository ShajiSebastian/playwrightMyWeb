import { test, expect } from '@playwright/test';
const { chromium } = require('playwright');  // Or 'firefox' or 'webkit'.

// https://playwright.dev/docs/pages#handling-popups

// Start waiting for popup before clicking. Note no await.
// const popupPromise = page.waitForEvent('popup');
// await page.getByText('open the popup').click();
// const popup = await popupPromise;
// // Interact with the new popup normally.
// await popup.getByRole('button').click();
// console.log(await popup.title());