// https://www.codyantunez.com/blog/how-to-use-environment-variables-in-playwright
// https://www.youtube.com/watch?v=GQStVI5qbLI&t=6s

// here we require as many number of .env files depends on environments
// if we fllow this approach no need of edit .env files
// make sure we include  globalSetup: "./globalSetup_MultipleEnviroments.ts" in playwright.config.ts
import { test, expect } from '@playwright/test';

// to run the test test_env=uat npx playwright test (replace uat with dev/ prod etc)
test.only('Run in multiple environment using separate .env files and value retrieved using globalsetup file', async ({ page }) => {
  console.log('User name:', process.env.BASE_URL);
  console.log('User name:', process.env.USER_NAME);
  console.log('Password:', process.env.PASSWORD);
});