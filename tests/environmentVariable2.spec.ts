// https://www.codyantunez.com/blog/how-to-use-environment-variables-in-playwright
// https://www.youtube.com/watch?v=GQStVI5qbLI&t=6s

// here only one .env file rquired
// the .env file to be edited one time depending on environment
// make sure only .env file is present in the suite. else value can be retrieved randomly from any file
import { test, expect } from '@playwright/test';
require('dotenv').config() // if there is only one .env file we can give like this

// the values are taken from .env files
test('Run in multiple environment using a single .env file', async ({ page }) => {
  console.log('User name:', process.env.BASE_URL);
  console.log('User name:', process.env.USER_NAME);
  console.log('Password:', process.env.PASSWORD);
});