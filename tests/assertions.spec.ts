// The following assertions will retry until the assertion passes, or the assertion timeout is reached. Note that retrying assertions are async, so you must await them.

// https://playwright.dev/docs/test-assertions
// https://playwright.dev/docs/api/class-genericassertions
// https://playwright.dev/docs/api/class-locatorassertions
// https://playwright.dev/docs/api/class-pageassertions

// expect('Hello world!').toEqual(expect.stringContaining('Hello'));  
    
// const value = 42;
// expect(value).toBeGreaterThan(1);
// expect(value).toBeGreaterThanOrEqual(42);
// expect(value).toBeLessThan(100);
// expect(value).toBeLessThanOrEqual(42);

// const value = null;
// expect(value).toBeNull()

// const value = { example: 'value' };
// expect(value).toBeTruthy();

// const value = undefined;
// expect(value).toBeUndefined();

// const value = 'Hello, World';
// expect(value).toContain('World');
// expect(value).toContain(',');

// const value = [1, 2, 3];
// expect(value).toContain(2);
// expect(new Set(value)).toContain(2);

// const value = { prop: 1 };
// expect(value).toEqual({ prop: 1 });

// expect('Hello, World').toHaveLength(12);
// expect([1, 2, 3]).toHaveLength(3);

// const value = 1;
// expect(value).not.toBe(2);

// expect(locator).toBeChecked()
// expect(locator).toBeEnabled()
// expect(locator).toBeVisible()
// expect(locator).toContainText()
// expect(locator).toHaveAttribute()
// expect(locator).toHaveCount()
// expect(locator).toHaveText()
// expect(locator).toHaveValue()
// expect(page).toHaveTitle()
// expect(page).toHaveURL() 