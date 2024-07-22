import { test, expect } from '@playwright/test';

test("reading table header", async ({ page }) => {
  await page.goto('https://demoqa.com/webtables');
  const headerText = await page.getByRole('columnheader').allTextContents(); // Get all Text from WebTable Header
  expect(headerText[0] == "First Name").toBeTruthy(); // Verify the First Column Header here we are comparing string values
      })
  
  
  
  
  
  