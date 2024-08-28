import { test } from "@playwright/test";
const assert = require("assert");

test("try catch example", async ({ page }) => {
    await page.goto("https://duckduckgo.com");

    let element = await page.locator("[name=\"q\"]");
    await element.click();
    await element.fill("LambdaTest");
    await element.press("Enter");
  
  const title = await page.title()
  
    try {
      assert.equal(title,"LambdaTest at DuckDuckGommmm","Page title does not match");
      // await setTestStatus("passed", "Title matched");
    } catch (e) {
      // await this.setTestStatus("failed", e);
      throw(e);
    }
  
})
