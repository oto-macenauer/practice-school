const { test, expect } = require("@playwright/test");
const { createProfile, startItem, answerCurrent } = require("../helpers");

test("generated math examples run as choice cards", async ({ page }) => {
  await createProfile(page, "Anička", 3);
  await page.goto("/#/g/3/matematika");
  await expect(page.locator(".item-card")).toHaveCount(2);
  await startItem(page, "3-matematika-scitani-a-odcitani");
  await expect(page.locator(".question-card")).toContainText("=");
  await expect(page.locator(".answer-btn")).toHaveCount(4);
  await answerCurrent(page);
});

test("drill print fills A4 pages with examples in columns", async ({ page }) => {
  await createProfile(page, "Anička", 3);
  await page.goto("/#/print/3-matematika-scitani-a-odcitani");

  // only the first level is ticked at first
  await expect(page.locator(".drill-sections input:checked")).toHaveCount(1);
  await expect(page.locator(".drill-subtitle")).toHaveText("Sčítání do 20");
  const items = page.locator(".drill-page .drill-item");
  await expect(items).toHaveCount(51);
  const cols = await page.locator(".drill-page .drill-grid").evaluate((e) => getComputedStyle(e).gridTemplateColumns.split(" ").length);
  expect(cols).toBe(3);
  for (const t of await items.allTextContents()) {
    const [, a, b] = t.match(/(\d+) \+ (\d+) =/);
    expect(+a + +b).toBeLessThanOrEqual(20);
  }

  await page.selectOption("#drill-pages", "2");
  await expect(page.locator(".drill-page")).toHaveCount(2);
  await expect(items).toHaveCount(102);

  await expect(page.locator(".drill-key")).toBeHidden();
  await page.check("#print-key");
  await expect(page.locator(".drill-key .drill-item b")).toHaveCount(102);
});

test("drill print mixes chosen tables without repeating an example", async ({ page }) => {
  await createProfile(page, "Anička", 3);
  await page.goto("/#/print/3-matematika-nasobilka");
  await expect(page.locator(".drill-sections input")).toHaveCount(18);
  await page.click(".drill-sections .bulk-all");
  await expect(page.locator(".drill-sections input:checked")).toHaveCount(18);
  await expect(page.locator(".drill-subtitle")).toContainText("Dělení 10");
  const texts = (await page.locator(".drill-page .drill-item").allTextContents()).map((t) => t.replace(/^\d+\.\s*/, ""));
  expect(texts).toHaveLength(51);
  expect(new Set(texts).size).toBe(51);

  await page.click(".drill-sections .bulk-none");
  await expect(page.locator(".drill-sections input:checked")).toHaveCount(0);
  await expect(page.locator(".drill-page")).toHaveCount(0);
});

test("division sections hold only division", async ({ page }) => {
  await createProfile(page, "Anička", 3);
  await page.goto("/#/print/3-matematika-nasobilka");
  await page.click(".drill-sections .bulk-none");
  await page.check(".drill-sections input[value=deleni-7]");
  for (const t of await page.locator(".drill-page .drill-item").allTextContents()) expect(t).toMatch(/\d+ : 7 =/);
});

test("practice intro: bulk select and unselect sections", async ({ page }) => {
  await createProfile(page, "Anička", 3);
  await page.goto("/#/run/3-matematika-nasobilka");
  const boxes = page.locator(".section-picker input");
  await expect(boxes).toHaveCount(18);
  await page.click(".section-picker .bulk-none");
  await expect(page.locator(".section-picker input:checked")).toHaveCount(0);
  await page.check(".section-picker input[value=nasobeni-3]");
  await page.click(".section-picker .bulk-all");
  await expect(page.locator(".section-picker input:checked")).toHaveCount(18);
});
