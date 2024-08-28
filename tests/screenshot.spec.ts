import { test } from "@playwright/test";

test('take screenshot and Attach in report', async ({ page }, testInfo) => {
    await page.goto('https://playwright.dev');
    const screenshot = await page.screenshot();
    await testInfo.attach('screenshotShaji', { body: screenshot, contentType: 'image/png' });
});

test('save screenshot in a location', async ({ page }, testInfo) => {
    await page.goto('https://playwright.dev');
    const screenshot = await page.screenshot({ path: './screenshot1.png' });
    await testInfo.attach('screenshotShaji', { body: screenshot, contentType: 'image/png' });
});

test("Hide a portion in screenshot", async ({ page }, testInfo) => {
    await page.goto("https://letcode.in/edit");
    let signup = page.locator("text='Sign up'")
    let login = page.locator("text='Log in'")
    let sc = await page.screenshot(
        {
            path: "./screenshot2.png",
            mask: [signup, login] // hiding the element in the screenshot
        });

})
