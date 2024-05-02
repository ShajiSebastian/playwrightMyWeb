import { test, expect } from '@playwright/test';

// basic info about a test
test('basic info about a test', async ({ page }) => {
  await test.info().attach('screenshot', {
    body: await page.screenshot(),
    contentType: 'image/png',
  });
});

test('reading title of the current test script',async ({ page }) => {
  console.log(`The title of the current test is:  ${test.info().title}`);
  console.log(`The titlePath of the current test is: ${test.info().titlePath}`);
  await page.goto('https://playwright.dev/');
  console.log(`The duration of the current test is: ${test.info().duration}`);
  console.log(`test.info().status is: ${test.info().status}`);
});



// example for describe. group of tests together
test.describe('Describe ttile with two tests', () => {
  test('testOne', async ({ page }) => {
    // ...
  });

  test('testTwo', async ({ page }) => {
    // ...
  });
});


// reading current url
test('reading current url', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  console.log(`Current url is: ${page.url()}`);
});

// title with partial match
test('reading title of a page', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

// reading a text from page
test('reading text from a page', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  const name = await page.innerText('.navbar__title');
  expect(name).toBe('Playwright');
});

// click on the link
// checking heading / reading text / toBeVisible keyword
test('click on a link', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.getByRole('link', { name: 'Get started' }).click();

// Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

// sample for Annotation. Test annotations are displayed in the test report
test('annotation in a test', { 
  annotation: {
    type: 'issue',
    description: 'https://github.com/microsoft/playwright/issues/23180',
  },
}, async ({ page }) => {
  await page.goto('https://playwright.dev/');
});

// annotation at desribe level
test.describe('annotation at desribe level', {
  annotation: {
    type: 'issue',
    description: 'https://github.com/microsoft/playwright/issues/23180',
  },
}, () => {
  test('one', async ({ page }) => {
    // ...
  });

  test('two', async ({ page }) => {
    // ...
  });
});

// skip a test from execution
test.skip('skip a test', async ({ page }) => {
  // ...
});

// skip at describe level
test.describe.skip('skip at describe level', () => {
  test('example', async ({ page }) => {
    // This test will not run
  });
});

// skip a test based on some condition
test('skip based on condition', async ({ page, browserName }) => {
  test.skip(browserName !== 'webkit', 'This feature is Safari-only');
  // ...
});

// skip a test from execution. 
test.fixme('skip using fixme', async ({ page }) => {
  // ...
});

// skip test at describe level
test.describe.fixme('skip using fixme at describe level', () => {
  test('example', async ({ page }) => {
    // This test will not run
  });
});



// run only the test
// test.only('focus this test', async ({ page }) => {
//   // Run only focused tests in the entire project.
// });
// test.describe.only('run only this test', () => {
//   test('in the focused group', async ({ page }) => {
//     // This test will run
//   });
// });

// test fails purposefully
test.fail('Fail a test', async ({ page }) => {
  // ...
});



// to make a test fail based on some condition  
test('fail only in WebKit', async ({ page, browserName }) => {
  test.fail(browserName === 'webkit', 'This feature is not implemented for Mac yet');
  // ...
});

// making a test slow. call test.slow() inside the test body.
test('slow test', async ({ page }) => {
  test.slow();
  // ...
});

// Declares a test step that is shown in the report.
test('Declares a test step', async ({ page }) => {
  await test.step('Log in', async () => {
    // ...
  });

  await test.step('Outer step', async () => {
    // ...
    // You can nest steps inside each other.
    await test.step('Inner step', async () => {
      // ...
    });
  });
});

