import { test,expect } from "@playwright/test";

test.skip("my test", async ({ page }) => {
    await page.goto("https://letcode.in/dropable")
    await page.getByRole('tabpanel', { name: 'Simple' }).locator('#draggable').hover();
    await page.mouse.down();
    await page.getByRole('tabpanel', { name: 'Simple' }).locator('#droppable').hover();
    await page.mouse.up();
    await expect(page.getByRole('tabpanel', { name: 'Simple' }).locator('#droppable')).toContainText('Dropped'); //Verify Dropped text
    })
