const {test} = require('@playwright/test');

// Helper function to navigate to a URL and get the page title
async function navigateAndGetTitle(page, url) {
    await page.goto(url);
    return await page.title();
}

test('Browser context basic test', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const title = await navigateAndGetTitle(page, "https://rahulshettyacademy.com/loginpagePractise/");
    console.log("Title of the page is: ", title);
});

test("Google page title test", async ({ page }) => {
    const title = await navigateAndGetTitle(page, "https://google.com");
    console.log("Title of the page is: ", title);
});