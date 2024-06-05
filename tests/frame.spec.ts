import { test, expect } from '@playwright/test';
const { chromium } = require('playwright');  // Or 'firefox' or 'webkit'.

// Locate element inside frame
// const username = await page.frameLocator('.frame-class').getByLabel('User Name');
// await username.fill('John');

// // Get frame using the frame's name attribute
// const frame = page.frame('frame-login');

// // Get frame using frame's URL
// const frame = page.frame({ url: /.*domain.*/ });

// // Interact with the frame
// await frame.fill('#username-input', 'John');

// page.frameLocator('#my-frame').getByRole('button', { name: 'Sign in' }).click();