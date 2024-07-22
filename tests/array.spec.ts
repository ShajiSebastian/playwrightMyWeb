import { test, expect } from '@playwright/test';

test('Browsers', async ({ page }) => {
let fruits = ["apple", "mango", "grape", "banana"];
// let first = fruits[0]
// console.log(first);
// let [first, sec, thr, last] = fruits;
// console.log(first, thr, last);
// let [first, , thr] = fruits
// console.log(thr);
let [a, ...rest] = fruits
console.log(a);
console.log(rest);
})
