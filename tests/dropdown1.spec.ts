import { test, expect, } from '@playwright/test';

test("Select from dropdown", async ({ page },testInfo) => {
  await page.goto("https://www.saucedemo.com/");
  await page.locator("input[placeholder='Username']").fill("standard_user");
  await page.locator("input[placeholder='Password']").fill("secret_sauce");
  await page.locator("select.product_sort_container").selectOption({ value: "lohi" })
  console.log(await page.locator("#inventory_container div.inventory_item_label a div").first().textContent());
  // const selectedText = await page.innerText('.dropdown-toggle'); // Replace with the actual selector to get the text of the selected option
  // console.log(`Selected option text: ${selectedText}`);
})
