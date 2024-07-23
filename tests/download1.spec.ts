import { expect, test } from "@playwright/test"; 

//This script may fail as popup comes when running in this laptop

test.skip('Handle File Downloads', async({context})=>{
    const page = await context.newPage();
    await page.goto("https://filesamples.com/formats/jpeg")
    // Start waiting for download before clicking. Note no await.
    const downloadPromise = page.waitForEvent('download');
    await page.getByRole('link', { name: 'Download' }).nth(1).click();
    const download = await downloadPromise;
  
  // Wait for the download process to complete and save the downloaded file somewhere.
  await download.saveAs('./tests/downloadedFiles/' + download.suggestedFilename());
  });
