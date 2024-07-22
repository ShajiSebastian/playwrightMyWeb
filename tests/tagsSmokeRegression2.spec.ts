import { test, expect } from '@playwright/test';

// tags are part of test name
// npx playwright test --grep @reg
test.describe('tag another way', () => {
test('Test signup page @smoke', async () => {
  console.log("some signup test @smoke");
});

test('Test login page @reg', async () => {
  console.log("some login test @reg");
});

test('Test add to cart page @smoke @reg ', async () => {
  console.log("some add to cart test @smoke");
});
})
