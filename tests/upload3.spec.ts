import { expect, test } from "@playwright/test"; 
import path from 'path';

test("Upload file3", async ({ page }) => {

        await page.goto("https://demoqa.com/upload-download")
        // Select one file
        const uploadFilePath = path.join(__dirname, "../../tests/data/sampleFile.jpeg");
        await page.locator(`#uploadFile`).setInputFiles(uploadFilePath);
        await expect(page.getByText('sampleFile.jpeg')).toBeVisible();
})

