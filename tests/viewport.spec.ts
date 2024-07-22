import { test } from '@playwright/test';

//browser window size varies with viewport values.
test.use({
  viewport: {
      height: 824,
      width: 536
  }
})

test('test to check test.step comes in report', async ({ page }) => {
console.log('practice test viewport')
await page.waitForTimeout(8000)
})
