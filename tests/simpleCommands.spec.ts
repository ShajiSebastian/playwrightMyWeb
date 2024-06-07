import { test, expect } from '@playwright/test';
const { chromium } = require('playwright');  // Or 'firefox' or 'webkit'.

// https://playwright.dev/docs/locators
// https://playwright.dev/docs/other-locators
// https://playwright.dev/docs/best-practices#use-codegen-to-generate-locators // to generate locator
// https://playwright.dev/docs/best-practices#use-playwrights-tooling // hepls to write scripting

// page.getByRole() to locate by explicit and implicit accessibility attributes.
// page.getByText() to locate by text content.
// page.getByLabel() to locate a form control by associated label's text.
// page.getByPlaceholder() to locate an input by placeholder.
// page.getByAltText() to locate an element, usually image, by its text alternative.
// page.getByTitle() to locate an element by its title attribute.
// page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).

// await page.getByLabel('User Name').fill('John');

// await page.getByLabel('Password').fill('secret-password');

// await page.getByRole('button', { name: 'Sign in' }).click();

// await expect(page.getByText('Welcome, John!')).toBeVisible();

// Create a page.
// const page = await context.newPage();

test.skip('Login test. May skip', async ({ page }) => {
  await page.goto('https://example.com/signin');
  // await page.waitForURL('**/login'); // if we want to wait till a particular url comes
  await page.goto('/signin');
  await page.getByLabel('User Name').fill('user');
  await page.getByLabel('Password').fill('password');
  await page.getByText('Sign in').click();
  // ...
});

// console.log(page.url());

// await page.locator('css=button').click();

// Wrong, will match many elements including <body>
// await page.locator(':has-text("Playwright")').click();
// Correct, only matches the <article> element
// await page.locator('article:has-text("Playwright")').click();

// await page.locator('#nav-bar :text("Home")').click();

// test('Open new tab', async ({ page }) => {
//   await page.goto('https://playwright.dev/');
//   await page.goto('chrome://newtab/');
//   await page.goto('http://britishmalayali.com/');

// });


// Fill an input to the right of "Username".
// await page.locator('input:right-of(:text("Username"))').fill('value');

// Click a button near the promo card.
// await page.locator('button:near(.promo-card)').click();

// Click the radio input in the list closest to the "Label 3".
// await page.locator('[type=radio]:left-of(:text("Label 3"))').first().click();

// Click first button
// await page.locator('button').locator('nth=0').click(); // Click first button

// Click last button
// await page.locator('button').locator('nth=-1').click();  // Click last button





// basic info about a test
test.skip('screenshot taking', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  // await test.info().attach('screenshot', {
  //   body: await page.screenshot(),
  //   contentType: 'image/png',
  // });
});

test('reading title of the current test script',async ({ page }) => {
  console.log(`The title of the current test is:  ${test.info().title}`);
  console.log(`The titlePath of the current test is: ${test.info().titlePath}`);
  await page.goto('https://playwright.dev/');
  console.log(`The duration of the current test is: ${test.info().duration}`);
  console.log(`test.info().status is: ${test.info().status}`);
});

// test('basic test', async ({ page }, testInfo) => {
//   expect(testInfo.title).toBe('basic test');
//   await page.screenshot(testInfo.outputPath('screenshot.png'));
// });

test('Attach screenshot in report', async ({ page }, testInfo) => {
  await page.goto('https://playwright.dev');
  await expect(page).toHaveURL('https://playwright.dev/');
  const screenshot = await page.screenshot();
  await testInfo.attach('screenshotShaji', { body: screenshot, contentType: 'image/png' });
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
test.fail('Fail a test purposefully', async ({ page }) => {
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

  // nest steps inside
  await test.step('Outer step', async () => {
    // ...
    // You can nest steps inside each other.
    await test.step('Inner step', async () => {
      // ...
    });
});
})

// inner text. 
test.skip('sample commands about a test. May skip', async ({ page }) => {
  const texts1 = await page.getByRole('link').allInnerTexts(); //Returns an array of values
  const texts2 = await page.getByRole('link').allTextContents(); //Returns an array of values
  const button = page.getByRole('button').and(page.getByTitle('Subscribe'));//finds a button with a specific title. use of 'and'
  //await locator.blur(); //Calls blur on the element.
  await page.getByRole('checkbox').check(); // radio or check box
  await page.getByRole('checkbox', { name: 'Subscribe' }).check();
  await page.getByRole('button', { name: /submit/i }).click();
  await expect(page.getByRole('heading', { name: 'Sign up' })).toBeVisible();
  expect(page.getByLabel('checkbox')).toBeChecked(); //Assert the checked state
  await page.getByRole('textbox').clear();  
  await page.getByRole('button').click(); // clicking a button
  const count = await page.getByRole('listitem').count();

  await page.getByRole('textbox').fill('example value'); // typing a text box
  // await locator.first();
  // await locator.focus();

  const locator = page.frameLocator('iframe').getByText('Submit');
  await locator.click(); 
  // await locator.getAttribute(name); Returns the matching element's attribute value.
  await page.getByAltText('Playwright logo').click(); //Allows locating elements by their alt text. 

// await page.getByRole('button').click();// Generic click
// await page.getByRole('button').click({ force: true });
// await page.getByText('Item').dblclick();// Double click
// await page.getByText('Item').click({ button: 'right' });// Right click
// await page.getByText('Item').click({ modifiers: ['Shift'] });// Shift + click
// await page.getByText('Item').click({ modifiers: ['ControlOrMeta'] }); // Ctrl + click or Windows and Linux. // Meta + click on macOS
// await page.getByText('Item').hover(); // Hover over element
// await page.getByText('Item').click({ position: { x: 0, y: 0 } }); // Click the top left corner

  await page.getByLabel('Username').fill('john');
  await page.getByLabel('Password').fill('secret');
  await page.getByPlaceholder('name@example.com').fill('playwright@microsoft.com');
  await page.locator('#area').pressSequentially('Hello World!');
  await page.getByPlaceholder('name@example.com').fill('playwright@microsoft.com'); //  Allows locating input elements by the placeholder text. <input type="email" placeholder="name@example.com" />
  await expect(page.getByRole('heading', { name: 'Sign up' })).toBeVisible();

  await page.getByRole('checkbox', { name: 'Subscribe' }).check();
  const product = page.getByRole('listitem').filter({ hasText: 'Product 2' });//locators can be chained to narrow down the search
  await page.getByRole('listitem').filter({ hasText: 'Product 2' }).getByRole('button', { name: 'Add to cart' }).click();//locators can be chained to narrow down the search
  await page.getByRole('button', { name: /submit/i }).click();
  await page.getByTestId('directions').click(); //<button data-testid="directions">Itinéraire</button>
  await expect(page.getByTitle('Issues count')).toHaveText('25 issues'); //Allows locating elements by their title attribute.
  await page.getByRole('link').hover();//Hover over the matching element.
  await locator.innerText();
  const value = await page.getByRole('textbox').inputValue();
  const checked = await page.getByRole('checkbox').isChecked();
  const disabled = await page.getByRole('button').isDisabled();
  const editable = await page.getByRole('textbox').isEditable();
  const enabled = await page.getByRole('button').isEnabled();
  const hidden = await page.getByRole('button').isHidden();
  const visible = await page.getByRole('button').isVisible();
  const banana = await page.getByRole('listitem').last();
  const banana2 = await page.getByRole('listitem').nth(2); //Returns locator to the n-th matching element. It's zero based, nth(0) selects the first element.
  await locator.pressSequentially('Hello'); // Types instantly
  await locator.pressSequentially('World', { delay: 100 }); // Types slower, like a user  
  const locator1 = page.getByLabel('Password'); //An example of typing into a text field and then submitting the form:
  await locator1.pressSequentially('my password');
  await locator1.press('Enter');
  await page.getByRole('link').screenshot(); //Take a screenshot of the element matching the locator.
  await locator.scrollIntoViewIfNeeded();
  await locator.selectText();
  await page.getByRole('checkbox').setChecked(true);//Set the state of a checkbox or a radio element.
  await page.getByRole('checkbox').uncheck();
  // await orderSent.waitFor();
  // await page.screenshot({ path: 'screenshot.png' }); // Screenshots
  // await page.screenshot({ path: 'screenshot.png', fullPage: true }); // Full page screenshots
  const buffer = await page.screenshot();
  console.log(buffer.toString('base64'));// Rather than writing into a file, you can get a buffer 
  await page.locator('.header').screenshot({ path: 'screenshot.png' });//screenshot of a single element 

  // await browser.close();
  page.once('load', () => console.log('Page loaded!'));
  // setInputFiles // https://playwright.dev/docs/api/class-locator#locator-set-input-files
  // selectOption //dropdown values. https://playwright.dev/docs/api/class-locator#locator-select-option
await page.getByLabel('Choose a color').selectOption('blue');// Single selection matching the value or label
await page.getByLabel('Choose a color').selectOption({ label: 'Blue' });// Single selection matching the label
await page.getByLabel('Choose multiple colors').selectOption(['red', 'green', 'blue']);// Multiple selected items
});

test('for loop. looping item', async ({ page }) => {
  for (const li of await page.getByRole('listitem').all())
  await li.click();
});

// Matches <span>

test.skip('getByText. May skip', async ({ page }) => {

/*  
Consider the following DOM structure:
<div>Hello <span>world</span></div>
<div>Hello</div>
*/

page.getByText('world');
await expect(page.getByText('Welcome, John')).toBeVisible();
// await expect(page.getByText('Welcome, John', { exact: true })).toBeVisible(); // exact match
// await expect(page.getByText(/welcome, [A-Za-z]+$/i)).toBeVisible(); //regular expression

// Matches first <div>
page.getByText('Hello world');

// Matches second <div>
page.getByText('Hello', { exact: true });

// Matches both <div>s
page.getByText(/Hello/);

// Matches second <div>
page.getByText(/^hello$/i);
})

test.skip('usage of or. May skip ', async ({ page }) => {
//usage of 'or' // Consider a scenario where you'd like to click on a "New email" button, but sometimes a security settings dialog shows up instead. In this case, you can wait for either a "New email" button, or a dialog and act accordingly.
const newEmail = page.getByRole('button', { name: 'New' });
const dialog = page.getByText('Confirm security settings');
await expect(newEmail.or(dialog)).toBeVisible();
if (await dialog.isVisible())
  await page.getByRole('button', { name: 'Dismiss' }).click();
await newEmail.click();
})

// If you absolutely must use CSS or XPath locators, you can use page.locator() to create a locator that takes a selector describing how to find an element in the page. 
// Playwright supports CSS and XPath selectors, and auto-detects them if you omit css= or xpath= prefix.

// await page.locator('css=button').click();
// await page.locator('xpath=//button').click();

// await page.locator('button').click(); // same as above
// await page.locator('//button').click(); // same as above


// Fill an input with the id "username"
// await page.locator('id=username').fill('value');

// Click an element with data-test-id "submit"
// await page.locator('data-test-id=submit').click();

// const button = page.getByRole('button').and(page.getByTitle('Subscribe')); //two locators simultaneously
// await page.locator('button').locator('visible=true').click(); //Matching only visible elements

// working on list items
// await expect(page.getByRole('listitem')).toHaveCount(3); //Count items in a list
// await expect(page.getByRole('listitem')).toHaveText(['apple', 'banana', 'orange']); //Assert all text in a list
// await page.getByText('orange').click();
// await page.getByRole('listitem').filter({ hasText: 'orange' }).click();
// await page.getByTestId('orange').click();
// onst banana = await page.getByRole('listitem').nth(1); // nth item
// const rowLocator = page.getByRole('listitem');
// await rowLocator.filter({ hasText: 'Mary' }).filter({ has: page.getByRole('button', { name: 'Say goodbye' }) }).screenshot({ path: 'screenshot.png' });
// Iterate elements in a list - one of the ways
// for (const row of await page.getByRole('listitem').all())
  // console.log(await row.textContent());
// Iterate elements in a list - another way
  // const rows = page.getByRole('listitem');
  // const count = await rows.count();
  // for (let i = 0; i < count; ++i)
  //   console.log(await rows.nth(i).textContent());

  // const child = page.getByText('Hello');
// const parent = page.getByRole('listitem').filter({ has: child }); // to locate a parent element based on child element

// narrows existing locator according to the options, for example filters by text. It can be chained to filter multiple times.
// https://playwright.dev/docs/api/class-locator

// const rowLocator = page.locator('tr');
// // ...
// await rowLocator
//     .filter({ hasText: 'text in column 1' })
//     .filter({ has: page.getByRole('button', { name: 'column 2 button' }) })
//     .screenshot();

// await page.getByRole('listitem').filter({ hasText: 'Product 2' }).getByRole('button', { name: 'Add to cart' }).click();
// await expect(page.getByRole('listitem').filter({ hasNotText: 'Out of stock' })).toHaveCount(5);
// await page.getByRole('listitem').filter({ has: page.getByRole('heading', { name: 'Product 2' }) }).getByRole('button', { name: 'Add to cart' }).click();
// await expect(page.getByRole('listitem').filter({ hasNot: page.getByText('Product 2') })).toHaveCount(1);

// try catch block to catch error

// test('try catch block', async ({ page }) => {
//   await test.step('Log in', async () => {
//     // ...
//   });

// try {
//   await page.locator('.foo').waitFor();
// } catch (e) {
//   if (e instanceof playwright.errors.TimeoutError) {
//     // Do something if this is a timeout.
//   }
// 
