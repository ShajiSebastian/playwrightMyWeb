const { test, expect } = require('@playwright/test');

test.skip('Handle multiple elements', async ({ page }) => {
    await page.goto('https://example.com');

    // Locator that returns multiple elements
    const itemsLocator = page.locator('.list-item'); // Assume this locator returns multiple items

    // Get the count of elements
    const itemCount = await itemsLocator.count();
    console.log(`Number of items: ${itemCount}`);
    await itemsLocator.first().click();
    await itemsLocator.last().click();
    await itemsLocator.nth(6).click();


    // Iterate over each element
    for (let i = 0; i < itemCount; i++) {
        const item = itemsLocator.nth(i); // Select the element at index i
        await expect(item).toBeVisible(); // Check if the item is visible
        console.log(`Item ${i + 1} text:`, await item.textContent());
    }

    // Get all texts from the items
    const allItems = await itemsLocator.all()
    const allTexts = await itemsLocator.allTextContents();
    console.log('All item texts:', allTexts);

    // Click all items
    await itemsLocator.evaluateAll(items => items.forEach(item => item.click()));
});