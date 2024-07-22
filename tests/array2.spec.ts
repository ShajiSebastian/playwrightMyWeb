import { test, expect } from '@playwright/test';

test('Browsers', async ({ page }) => {
    const myBio = {
        fullName: {
            fname: "Shaji",
            lname: "Sebastian"
        },
        age: 27,
        gender: "m"
    }
    console.log(myBio);
    let { fullName: { lname, fname }, age, gender } = myBio;
    console.log(fname, lname, age, gender );
})
