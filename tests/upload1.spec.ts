import { test, expect } from '@playwright/test';
test('File upload', async({page})=>{
  await page.goto("https://blueimp.github.io/jQuery-File-Upload/");
  const [uploadFiles] = await Promise.all([
    page.waitForEvent('filechooser'),
    page.click("input[type='File']"),
    page.waitForTimeout(3000)
]);

const isMultiple = uploadFiles.isMultiple();
console.log(isMultiple);
uploadFiles.setFiles(["uploadItems/apple.png","uploadItems/mango.png"])
})
