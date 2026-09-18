const { test, expect } = require("@playwright/test");
const { createProfile } = require("../helpers");

test("print view renders worksheet and optional answer key", async ({ page }) => {
  await createProfile(page, "Petr", 4);
  await page.goto("/#/print/4-anglictina-unit5-test");
  await expect(page.locator(".print-sheet h1")).toContainText("Unit 5");
  expect(await page.locator(".print-section").count()).toBeGreaterThan(3);
  await expect(page.locator(".print-match").first()).toBeVisible();
  await expect(page.locator(".print-key")).toBeHidden();
  await page.check("#print-key");
  await expect(page.locator(".print-key")).toBeVisible();
});
