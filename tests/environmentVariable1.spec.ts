// https://www.codyantunez.com/blog/how-to-use-environment-variables-in-playwright
// https://www.youtube.com/watch?v=GQStVI5qbLI&t=6s

import { test, expect } from '@playwright/test';

// to run the test: USER_NAME=SHAJIUAT1 PASSWORD=SHA198212345 npx playwright test
test("environment variable taking from command line", async ({ page }) => {
  console.log('User name:', process.env.USER_NAME);
  console.log('Password:', process.env.PASSWORD);
});