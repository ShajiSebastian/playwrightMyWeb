
import { test, expect } from '@playwright/test';
import { promiseHooks } from 'v8';

test("multiple tabs- second tab getting from first tab- simple one", async ({ page }) => {  
    await page.goto("https://playwright.dev/")
    await page.waitForTimeout(2000) 

    const [page2] = await Promise.all ([
        page.waitForEvent('popup' ), // use only comma here. here page is a user defined word. we can use any word like 'popup', 'abc' etc
        page.locator('#__docusaurus_skipToContent_fallback > header > div > div > span > a.gh-btn > span.gh-text').click()
    ])

    await page2.waitForLoadState();

    // tabs storing in an array
    // const tabs = page2.context().pages()
    // console.log('No of tabs:'+ tabs.length)
    // tabs.forEach(tab => {
    //     console.log('URL is:' + tab.url())
    // })
 
    console.log('page1 url is:', await page.url())
    console.log('page1 title is:', await page.title())
    console.log('page2 url is:', await page2.url())
    console.log('page2 title is:', await page2.title())
})

//This is exactly same as above one
// test("multiple tabs- second tab getting from first tab- simple one", async ({ context }) => {  
//     const page = await context.newPage()
//     await page.goto("https://playwright.dev/")
//     await page.waitForTimeout(2000) 

//     const [page2] = await Promise.all ([
//         page.waitForEvent('popup' ), // use only comma here. here page is a user defined word. we can use any word like 'popup', 'abc' etc
//         page.locator('#__docusaurus_skipToContent_fallback > header > div > div > span > a.gh-btn > span.gh-text').click()
//     ])

//     await page2.waitForLoadState();

//     // tabs storing in an array
//     // const tabs = page2.context().pages()
//     // console.log('No of tabs:'+ tabs.length)
//     // tabs.forEach(tab => {
//     //     console.log('URL is:' + tab.url())
//     // })
 
//     console.log('page1 url is:', await page.url())
//     console.log('page1 title is:', await page.title())
//     console.log('page2 url is:', await page2.url())
//     console.log('page2 title is:', await page2.title())
// })

test("multiple tabs- second tab getting from first tab", async ({ page }) => {  
    // const page = await context.newPage()
    await page.goto("https://playwright.dev/")
    await page.waitForTimeout(2000) 

    const [page2] = await Promise.all ([
        page.waitForEvent('popup' ), // use only comma here. here page is a user defined word. we can use any word like 'popup', 'abc' etc
        page.locator('#__docusaurus_skipToContent_fallback > header > div > div > span > a.gh-btn > span.gh-text').click()
    ])

    // const [page3] = await Promise.all ([
    //     page.waitForEvent('popup' ), // use only comma here. here page is a user defined word. we can use any word like 'popup', 'abc' etc
    //     page.locator('#__docusaurus_skipToContent_fallback > header > div > div > span > a.gh-btn > span.gh-text').click()
    // ])
    await page2.waitForLoadState();

    // tabs storing in an array
    const tabs = page2.context().pages()
    console.log('No of tabs:'+ tabs.length)
    tabs.forEach(tab => {
        console.log('URL is:' + tab.url())
    })
    // await tabs[1].fill('','') // to work on each tabs. But we may confuse which is the page/url of tab[1]. Solution given below
    let facebookPage;
    let amazonePage;
    for (let i=0; i < tabs.length; i++){
        const url = tabs[i].url()
        if (url == "https://www.facebook.com/lambdatest/")
        { 
            facebookPage = tabs[i]
        }
        if (url == "https://www.amzone.com/lambdatest/")
        { 
            amazonePage = tabs[i]
        }
    }

    const text = await facebookPage.textContent("H1")
    console.log(text)
 
    // another way of working on tabs
    console.log('page1 url is:', await page.url())
    console.log('page1 title is:', await page.title())
    console.log('page2 url is:', await page2.url())
    console.log('page2 title is:', await page2.title())
})

test("multiple tabs- second tab getting from first tab - 2nd way", async ({ context }) => {  
    const page = await context.newPage()
    await page.goto("https://playwright.dev/")
    await page.waitForTimeout(2000) 
    await page.locator('#__docusaurus_skipToContent_fallback > header > div > div > span > a.gh-btn > span.gh-text').click()
    const page2 = await context.waitForEvent('page');
    await page2.waitForLoadState();

    console.log('current page10000 is:', await page.title())
    console.log('current page20000 is:', await page2.title())

    await page2.close();
    await page.waitForTimeout(2000)
})


test.skip("multiple tabs- second tab is a new url", async ({ context }) => {  
    const page = await context.newPage()
    await page.goto("https://playwright.dev/")
    await page.waitForTimeout(2000) 

    const page2 = await context.newPage()
    await page2.goto("https://www.cypress.io/")
    // await page2.waitForLoadState();
    console.log('current page111 is:', await page.title())
    console.log('current page222 is:', await page2.title())
    
})
