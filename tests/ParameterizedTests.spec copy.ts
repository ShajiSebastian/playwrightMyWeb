import { test, expect } from '@playwright/test';

const people = ['Alice', 'Bob'];
for (const name of people) {
  test(`testing with ${name}`, async () => {
    console.log(`Running ${test.info().title}`);
  });
  // You can also do it with test.describe() or with multiple tests as long the test name is unique.
}
