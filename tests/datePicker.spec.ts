// https://www.lambdatest.com/learning-hub/automate-date-pickers-with-playwright

import { test } from "@playwright/test";
import moment from "moment";
 
 test("Calendar demo using fill function", async ({ page }) => {
     await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo");
     let date = "1994-12-04"
    //  await page.fill("id=birthday", date);
     async function selectDate(date: number, dateToSelect: string)

async function selectDate(date: number, dateToSelect: string) {
    
    await page.click("//input[@placeholder='Start date']")
     
        const mmYY = page.locator("(//table[@class='table-condensed']//th[@class='datepicker-switch'])[1]");
        const prev = page.locator("(//table[@class='table-condensed']//th[@class='prev'])[1]");
        const next = page.locator("(//table[@class='table-condensed']//th[@class='next'])[1]");
     
        // let dateToSelect: string = "May 2019";
        const thisMonth = moment(dateToSelect, "MMMM YYYY").isBefore();
        console.log("this month? " + thisMonth);
        while (await mmYY.textContent() != dateToSelect) {
            if (thisMonth) {
                await prev.click();
            } else {
                await next.click();
            }
        }
        await page.click("//td[@class='day'][text()='${date}']");
    }
    })