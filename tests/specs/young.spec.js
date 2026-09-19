const { test, expect } = require("@playwright/test");
const { createProfile, startItem } = require("../helpers");

test("young UI: big two-column answers, stars instead of XP", async ({ page }) => {
  await createProfile(page, "Anička", 3);
  await page.goto("/#/g/2/cestina");
  await expect(page.locator(".item-card")).toHaveCount(1);
  await startItem(page, "2-cestina-ctvrtletni-2026-03-31");
  // tests hide the score HUD mid-run
  await expect(page.locator(".hud")).toHaveCount(0);

  const answers = page.locator(".answers");
  await expect(answers).toBeVisible();
  const cols = await answers.evaluate((e) => getComputedStyle(e).gridTemplateColumns.split(" ").length);
  expect(cols).toBe(2);
  const h = await page.locator(".answer-btn").first().evaluate((e) => e.getBoundingClientRect().height);
  expect(h).toBeGreaterThanOrEqual(64);
});
