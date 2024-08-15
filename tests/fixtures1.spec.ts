// this test is to understand how we can define an object like user defined 'page'

import { test } from "../fixtures/myFixtures1"

test('Fixture demo', async ({page,name,age}) =>{ // here page is defined by playwright itself. name and age is defined by me in ../fixtures/myFixtures.ts file
    console.log('name: '+ name)
    console.log('age: '+ age)
    console.log('name in uppercase: '+ name.toUpperCase())
})