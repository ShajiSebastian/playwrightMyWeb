
import test from "./pages/BaseTest"

test('Verify Alerts, Frame & Windows Page', async ( {alertsFrameWindowsPage, page}) => {
    await page.goto("https://demoqa.com/");
    await page.getByText('Alerts, Frame & Windows', { exact: true }).click();  //Matches locator with exact text and clicks
    await page.getByText('Browser Windows', { exact: true }).click();
    await alertsFrameWindowsPage.verifyNewTab(`https://demoqa.com/sample`);
    await alertsFrameWindowsPage.verifyNewWindow(`https://demoqa.com/sample`);
    await page.getByText('Alerts', { exact: true }).click(); // this is difficult. refer alertDialogue.spec.ts
    await alertsFrameWindowsPage.enterTextAndAccept(`Hello`); // Enter Text Hello in alert prompt and click ok
    await page.getByText('Frames', { exact: true }).click(); 
    await alertsFrameWindowsPage.verifyFrameText('This is a sample page');
    await page.getByText('Nested Frames', { exact: true }).click(); 
    await alertsFrameWindowsPage.verifyNestedFrameChildText();
});
