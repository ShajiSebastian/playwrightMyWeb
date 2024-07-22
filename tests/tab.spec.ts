
import { test, expect } from '@playwright/test';
import { promiseHooks } from 'v8';

test.skip("multiple tabs- second tab getting from first tab", async ({ context }) => {  
    const page = await context.newPage()
    await page.goto("https://playwright.dev/")
    await page.waitForTimeout(2000) 

    const [page2] = await Promise.all ([
        context.waitForEvent('page' ),
        page.locator('#__docusaurus_skipToContent_fallback > header > div > div > span > a.gh-btn > span.gh-text').click()
])
    await page2.waitForLoadState();
    console.log('current page1 is:', await page.title())
    console.log('current page2 is:', await page2.title())
})

test("multiple tabs- second tab getting from first tab - 2nd way", async ({ context }) => {  
    const page = await context.newPage()
    await page.goto("https://playwright.dev/")
    await page.waitForTimeout(2000) 
    await page.locator('#__docusaurus_skipToContent_fallback > header > div > div > span > a.gh-btn > span.gh-text').click()
    const page3 = await context.waitForEvent('page');
    await page3.waitForLoadState();

    console.log('current page10000 is:', await page.title())
    console.log('current page20000 is:', await page3.title())

    await page3.close();
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

// async verifyNewTab(newTabUrlExpect): Promise<void> {
//     // Start waiting for new page before clicking.
//     const pagePromise = this.context.waitForEvent('page');
//     await this.NEW_TAB_BUTTON.click();
//     const newTab = await pagePromise;
    

//     await newTab.waitForLoadState();
//     const newTabUrlActual = newTab.url();
//     //Verify New Tab URL
//     expect(newTabUrlActual == newTabUrlExpect).toBeTruthy();
//     //Verify Text displayed in New tab
//     await expect(newTab.locator('#sampleHeading')).toContainText('This is a sample page');
//     //Close New tab
//     await newTab.close();
// }