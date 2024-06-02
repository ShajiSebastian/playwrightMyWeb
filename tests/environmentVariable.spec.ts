import { test, expect } from '@playwright/test';


// pass the value from command line. to run the below test USER_NAME=me PASSWORD=secret npx playwright test
test(`environment variable test`, async ({ page }) => {
  // ...
  console.log('User name:', process.env.USER_NAME);
  console.log('Password:', process.env.PASSWORD);
  // await page.getByLabel('User Name').fill(process.env.USER_NAME);
  // await page.getByLabel('Password').fill(process.env.PASSWORD);
});