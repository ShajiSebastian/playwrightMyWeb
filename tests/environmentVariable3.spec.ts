// https://www.codyantunez.com/blog/how-to-use-environment-variables-in-playwright
// https://www.youtube.com/watch?v=GQStVI5qbLI&t=6s

// here we require as many number of .env files depends on environments
// if we fllow this approach we have to edit each script depending upon the evironment
import { test, expect } from '@playwright/test';
import dotenv from "dotenv"
//the below values to be edited in each scripts depending on environment each time
dotenv.config({
  path: `.env.uat`,
  // override: true  // this is optional. required to override if any global values   already present
})

test('Run in multiple environment using separate .env files', async ({ page }) => {
  console.log('User name:', process.env.BASE_URL);
  console.log('User name:', process.env.USER_NAME);
  console.log('Password:', process.env.PASSWORD);
});