import { test, expect } from '@playwright/test';

// beforeall keyword. When called inside a test.describe() group, runs before all tests in the group.
test.beforeAll('Setup', async () => {
  console.log('Before tests');
});

// beforeEach keyword. When called inside a test.describe() group, runs before each test in the group.
test.beforeEach('Read title of the current script', async ({ page }) => {
  console.log(`Running ${test.info().title}`);
  // await page.goto('https://cloudtesting.contosotraders.com/')
});

// afterall keyword with a title
test.afterAll('Teardown', async () => {
  console.log('Done with tests');
  // ...
});

// afterEach keyword. When called inside a test.describe() group, runs after each test in the group.
test.afterEach('Status check',async ({ page }) => {
  console.log(`Finished ${test.info().title} with status ${test.info().status}`);

  if (test.info().status !== test.info().expectedStatus)
    console.log(`Did not run as expected, ended up at ${page.url()}`);
});

// afterEach keyword
test.afterEach('Status check', async ({ page }) => {
  if (test.info().status !== test.info().expectedStatus)
    console.log(`Did not run as expected, ended up at error url ${page.url()}`);
});

test("beforeafterEach", async ({ page }) => {
  await page.goto("https://letcode.in/buttons");
})
