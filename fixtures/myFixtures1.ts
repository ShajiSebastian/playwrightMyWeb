import { test as myOwnTest } from "@playwright/test";

type shaji = {
    name: string;
    age: number
}

const myFixtureTest = myOwnTest.extend<shaji>({

    name: "shaji sebastian",
    age:40
})

export const test = myFixtureTest;


// we can write the above function by simply replacing shaji

// const myFixtureTest = myOwnTest.extend<{
//     name: string;
//     age: number
// }>({
//     name: "shaji sebastian",
//     age:40
// })