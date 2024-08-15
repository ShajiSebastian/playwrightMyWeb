import { test } from "@playwright/test";

test("Wait for an alert", async ({ page }) => {
    await page.goto("https://letcode.in/waits")
    page.on("dialog", async (alert) => { //alert is user defined word
        console.log('Alert message: ' + alert.message());
        // console.log('Default Value: ' + alert.defaultValue());
        // console.log('Type: ' + alert.type());
        await alert.accept(); // accept / dismiss
        await alert.accept('shaji'); // inputting value in the alert message
    });
    // await page.click("#accept")
    await page.getByText('Simple Alert').click()
    await page.waitForEvent("dialog");

})

test("Modal alert", async ({ page }) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-modal-demo")
    await page.click("//button[@data-target='#myModal']")
    await page.click("(//button[text()='Save Changes'])[1]")
})
