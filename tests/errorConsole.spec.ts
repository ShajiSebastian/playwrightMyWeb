import { test } from '@playwright/test';

test('test to check test.step comes in report', async ({ page }) => {
  await page.goto("https://www.flipkart.com/")
// capture errors
page.on('pageerror', (error) => {
  console.error('Error:', error)
})
// capture console messages
page.on('console', (msg) => {
  console.log('Message:', msg.text())
})
})
