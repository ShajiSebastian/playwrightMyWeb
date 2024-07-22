import { expect, test } from "@playwright/test";

test("color", async ({ page }) => {
    await page.goto("https://letcode.in/buttons");
    const btn = page.locator("#home");
    const color = await btn.evaluate((ele) => {
        return window.getComputedStyle(ele).getPropertyValue("background-color")
    });
    console.log(color);
    expect(color).toBe("rgb(250, 124, 145)");


})
