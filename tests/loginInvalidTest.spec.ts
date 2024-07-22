// This script is taken from https://github.com/ortoniKC/playwright-book-cart-app.git

import { expect, test } from "@playwright/test";
// const CryptoJS = require("crypto-js")
import * as data from "../tests/data/loginUser.json";

test("Locator in detail", async ({ page }) => {
        await test.step("Enter valid username and invalid password", async () => {
            await page.goto("https://bookcart.azurewebsites.net//login");
            await loginUser(data.userName, data.invalidPassword);
            const msg = page.getByRole("alert");
            await expect(msg).toBeVisible();
            await expect(msg).toHaveText(data.errorMsg);
        })
    })

    test("Valid login & logout", async ({ page }) => {


        await test.step("login with valid credentials", async () => {
            await login.navigateToLoginPage();
            await login.loginUser(getDecryptedValue(data.userName), getDecryptedValue(data.password));
            await header.verifyLoginSuccess();
        })
        await test.step("Logout user", async () => {
            await header.logoutUser();
        })
    })
    

function getDecryptedValue(data: string) {
    var decrypted = CryptoJS.AES.decrypt(data, process.env.SECRET_KEY);
    return decrypted.toString(CryptoJS.enc.Utf8);
}

function loginUser(user: string, password: string) {
    // await this.assert.assertURL("https://bookcart.azurewebsites.net/login")
    this.enterUserName(user);
    this.enterPassword(password);
    this.clickLoginButton();
}



