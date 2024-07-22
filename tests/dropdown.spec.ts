import { test, expect, } from '@playwright/test';


test("Select from dropdown", async ({ page },testInfo) => {
  await page.goto("https://www.saucedemo.com/");
  const user = page.locator("input[placeholder='Username']")
  await user.fill("standard_user");
  const pass = page.locator("input[placeholder='Password']")
  await pass.fill("secret_sauce");
  await page.click("#login-button");
  const priceSelect = page.locator("select.product_sort_container")
  await priceSelect.selectOption({ value: "lohi" })
  await testInfo.attach("login screenshot", {
      contentType: "image/png",
      body: await page.screenshot()
  })
  const firstProduct = page.locator("#inventory_container div.inventory_item_label a div")
  console.log(await firstProduct.first().textContent());
  await priceSelect.selectOption({ value: "hilo" })
  await testInfo.attach("login screenshot", {
      contentType: "image/png",
      body: await page.screenshot()
  })
  console.log(await firstProduct.first().textContent());
})



// open index.html to execute this test case
test("Select from bootstrap dropdown", async ({ page }) => {

  // await page.goto("file:///Y:/my-code-base/Playwright-Test-Runner/advanceSelect/index.html");
  await page.goto("http://127.0.0.1:5500/tests/dropdownIndex.html");
  // await page.locator(".selectpicker")
  //     .selectOption({
  //         label: "Playwright"
  //     })
  await selectOption(page, /^Playwright$/g);
  await selectOption(page, /^Cypress$/g);
  await page.waitForTimeout(5000)
}) 

async function selectOption(page: Page, data: RegExp) {
  await page.locator(".filter-option").click();
  await page.locator(".dropdown-menu")
      .locator("li", {
          has: page.locator("a span"),
          hasText: data
      }).click();
}
