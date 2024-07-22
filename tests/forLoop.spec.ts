import { test, expect } from '@playwright/test';
const { chromium } = require('playwright');  // Or 'firefox' or 'webkit'.

test('looping item', async ({ page }) => {
  for (const li of await page.getByRole('listitem').all())
  await li.click();
});


test('looping and counting item', async ({ page }) => {
  await page.goto("https://letcode.in/elements");
  const ele = page.locator("input[name='username']")
  await ele?.fill("ortonikc");
  await ele?.press("Enter");
  await page.waitForSelector("app-gitrepos ol li", { timeout: 5000 })
  const repos = page.locator("app-gitrepos ol li");
  console.log(await repos.count());
  // console.log(await repos.allInnerTexts());
  let c = await repos.count()
  for (let i = 0; i < c; i++) {
      let text = await repos.nth(i).textContent();
      console.log(text);
  }
})
