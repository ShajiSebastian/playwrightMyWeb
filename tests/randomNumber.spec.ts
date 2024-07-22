import { test, expect } from '@playwright/test';

test('Browsers', async ({ page }) => {
    let nums = getRandomNum();
    console.log(nums);
    
})

function getRandomNum() {
    const num = Math.random() * 9999;
    return num.toString();
}

