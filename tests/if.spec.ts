import { test } from "@playwright/test";

test("chromium bug App", async ({ page }) => {
    await page.goto("https://bugs.chromium.org/p/chromium/issues/list");
    // select dropdown
    const ele = await page.$("#can")
    if (ele) {
        console.log('element found')
        } else throw new Error("Element not found")
})
