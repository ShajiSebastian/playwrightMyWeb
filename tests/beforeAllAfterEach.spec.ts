import { test, expect } from '@playwright/test';

// beforeAll
// executed before all tests in the file
// when used inside describe, runs before all tests in the group
// If multiple beforeAll is used, they will run in the order of their registration

// beforeEach
// executed before each test in the file
// when used inside describe, runs before each test in the group
// If multiple beforeEach is used, they will run in the order of their registration

// afterAll
// executes after all tests in the file
// when used inside describe, runs after all tests in the group
// If multiple afterAll is used, they will run in the order of their registration

// afterEach
// executes after each test in the file
// when used inside describe, runs after each test in the group
// If multiple afterEach is used, they will run in the order of their registration

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
