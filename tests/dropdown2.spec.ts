import { test } from "@playwright/test";

test("dropdown 2", async ({ page }) => {
    await page.goto("https://bugs.chromium.org/p/chromium/issues/list");
    // select dropdown
    const ele = await page.$("#can")
    if (ele) {
        await ele.selectOption({
            label: "Issues to verify"
        })
    } else throw new Error("Eleemnt not found")
})
