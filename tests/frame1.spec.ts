import { test, expect } from '@playwright/test';
// const { chromium } = require('playwright');  // Or 'firefox' or 'webkit'.


test('Getting all frames', async ({ page }) => {
    await page.goto("https://letcode.in/frame")
    const allFrames = page.frames()
    console.log('Number of Frames:' + allFrames.length)
})

test('Getting frame by name', async ({ page }) => {
    await page.goto("https://letcode.in/frame")
    await page.frame('firstFr')?.fill("input[name='fname']", 'shaji') // ? symbol is instead of if condition. the fill command will execute only if frame is present
    await page.frame('firstFr')?.fill("input[name='lname']", 'sebastian')
    expect(await page.frame('firstFr')?.locator('p.has-text-info').textContent()).toContain("You have entered")
    await page.waitForTimeout(3000);
})

test('Getting frame by frameLocator', async ({ page }) => {
    await page.goto("https://letcode.in/frame")
    await page.frameLocator("#firstFr")?.locator('input[name="fname"]').fill('christo') // ? symbol is instead of if condition. the fill command will execute only if frame is present
    await page.frameLocator("#firstFr")?.locator('input[name="lname"]').fill('shaji')
    expect(await page.frame('firstFr')?.locator('p.has-text-info').textContent()).toContain("You have entered")
    await page.waitForTimeout(3000);
})

test('Getting inner frame', async ({ page }) => {
    // simply get into out frame then move to inner frame
    await page.frameLocator("#firstFrame").frameLocator("InnerFramelocator")?.locator('input[name="fname"]').fill('christo')
})

// page.frameLocator('abc').first()
// page.frameLocator('abc').last()
// page.frameLocator('abc').nth(2)

// await page.frame('frame-login');// Get frame using the frame's name attribute
// await page.frame({ url: /.*domain.*/ });// Get frame using frame's URL
