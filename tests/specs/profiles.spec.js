const { test, expect } = require("@playwright/test");
const { createProfile } = require("../helpers");

test("first visit asks for a profile, then shows own grade", async ({ page }) => {
  await createProfile(page, "Anička", 3);
  await expect(page.locator("body")).toHaveClass(/young/);
  await expect(page.locator("#profile-chip")).toContainText("Anička");
  // 3rd grade has only Logika so far: the other subject tiles are disabled
  await expect(page.locator(".subject-tile")).toHaveCount(6);
  await expect(page.locator("a.subject-tile")).toHaveCount(1);
  await expect(page.locator("a.subject-tile[data-subject=logika]")).toBeVisible();
  // other grades are reachable
  await expect(page.locator(".grade-switch .chip")).toHaveCount(3);
});

test("older grade uses standard UI and can switch profiles", async ({ page }) => {
  await createProfile(page, "Petr", 5);
  await expect(page.locator("body")).not.toHaveClass(/young/);
  await expect(page.locator(".level")).toBeVisible();

  await page.click("#profile-chip");
  await page.click("#add-profile");
  await page.fill(".profile-form input[name=name]", "Anička");
  await page.selectOption(".profile-form select[name=grade]", "3");
  await page.click(".profile-form button[type=submit]");
  await expect(page.locator("body")).toHaveClass(/young/);

  await page.click("#profile-chip");
  await expect(page.locator(".profile-card:not(.profile-add)")).toHaveCount(2);
  await page.locator(".profile-card", { hasText: "Petr" }).click();
  await expect(page.locator(".hello")).toContainText("Petr");
});

test("browse another grade and subject list", async ({ page }) => {
  await createProfile(page, "Petr", 5);
  await page.click(".grade-switch .chip:has-text('4. třída')");
  await expect(page.locator(".page-title")).toContainText("4. třída");
  await page.click(".subject-tile[data-subject=vlastiveda]");
  await expect(page.locator(".item-card")).toHaveCount(4);
  await expect(page.locator(".item-card[data-id='4-vlastiveda-habsburkove']")).toContainText("Zatím nezkoušeno");
});

test("settings: edit grade and delete profile", async ({ page }) => {
  await createProfile(page, "Petr", 5);
  await page.goto("/#/settings");
  await page.selectOption(".profile-form select[name=grade]", "4");
  await page.click(".profile-form button[type=submit]");
  await expect(page.locator(".hello")).toContainText("4. třída");

  await page.goto("/#/settings");
  page.once("dialog", (d) => d.accept());
  await page.click("#delete-profile");
  await expect(page.locator(".profile-form")).toBeVisible();
});
