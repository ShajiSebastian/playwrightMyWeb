import { expect, test } from "@playwright/test";

test("Download file", async ({ page }, testInfo) => {
        await page.goto("https://www.lambdatest.com/selenium-playground/generate-file-to-download-demo");
        await page.locator("#textbox").type("Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis earum itaque assumenda doloribus reprehenderit, laborum, cum eaque dolor ducimus quos ad, quibusdam blanditiis. Architecto animi eligendi vero necessitatibus quasi rem quis quod eaque eius iste officiis nostrum id quae, est dolores, saepe perferendis quo! Doloremque neque quos rerum harum esse.");
        await page.locator("#create").click();
        const [download] = await Promise.all([
            page.waitForEvent('download'),
            page.click("text='Download'")
        ]);
        const path = download.suggestedFilename();
        await download.saveAs(path);
        await testInfo.attach('downloaded', { path: path });
        const path2 = await download.path()
        console.log('path2:' + path2)
        
        
    })

