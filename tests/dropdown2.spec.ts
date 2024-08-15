import { test, expect, } from '@playwright/test';

test("dropdown2", async ({ page }) => {
  await page.goto('https://example.com');
  await page.click('.dropdown-toggle'); 
  await page.click('.dropdown-menu .dropdown-item[data-value="value"]'); 
  const selectedText = await page.innerText('.dropdown-toggle'); // Replace with the actual selector to get the text of the selected option
  console.log(`Selected option text: ${selectedText}`);
})

// open index.html to execute this test case
test.skip("Select from bootstrap dropdown", async ({ page }) => {

  // await page.goto("file:///Y:/my-code-base/Playwright-Test-Runner/advanceSelect/index.html");
  await page.goto("http://127.0.0.1:5500/tests/dropdownIndex.html");
  // await page.locator(".selectpicker").selectOption({label: "Playwright"})
  await selectOption(page, /^Playwright$/g);
  await selectOption(page, /^Cypress$/g);
  await page.waitForTimeout(5000)

  async function selectOption( data: RegExp) {
    await page.locator(".filter-option").click();
    await page.locator(".dropdown-menu").locator("li", {has: page.locator("a span"),hasText: data}).click();
    // await page.locator(".dropdown-menu").locator("li",{hasText: "India"}).click();
    // await page.locator(".dropdown-menu", {has: page.locator("li",{hasText: "India"})}).click();
    
  }
}) 


