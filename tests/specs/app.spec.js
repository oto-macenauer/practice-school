const { test, expect } = require("@playwright/test");
const { createProfile } = require("../helpers");

test("no console errors across main pages", async ({ page }) => {
  const errors = [];
  page.on("pageerror", (e) => errors.push(e.message));
  page.on("console", (m) => { if (m.type() === "error") errors.push(m.text()); });
  await createProfile(page, "Petr", 4);
  for (const h of ["#/", "#/g/4/anglictina", "#/g/2", "#/run/4-anglictina-unit9-test", "#/print/2-cestina-ctvrtletni-2026-03-31", "#/settings"]) {
    await page.goto("/" + h);
    await page.waitForLoadState("networkidle");
  }
  expect(errors).toEqual([]);
});

test("unknown content shows an error instead of crashing", async ({ page }) => {
  await createProfile(page, "Petr", 4);
  await page.goto("/#/run/9-matematika-neexistuje");
  await expect(page.locator(".empty")).toContainText("nenalezen");
});

test("PWA manifest and service worker file are served", async ({ page, request }) => {
  await page.goto("/");
  await expect(page.locator("link[rel=manifest]")).toHaveAttribute("href", "manifest.webmanifest");
  const m = await (await request.get("/manifest.webmanifest")).json();
  expect(m.start_url).toBe("./");
  expect((await request.get("/sw.js")).ok()).toBeTruthy();
  expect((await request.get("/version.json")).ok()).toBeTruthy();
});

test("legacy import picks up old history stats", async ({ page }) => {
  await createProfile(page, "Petr", 4);
  await page.evaluate(() => localStorage.setItem("history-practice-stats", JSON.stringify({
    totalXp: 1234,
    tests: { habsburkove: { bestPct: 80, attempts: 2, xp: 300, mistakes: ["Kdo byl Rudolf II.?"] } }
  })));
  await page.goto("/#/settings");
  await page.click("#import-btn");
  await expect(page.locator("#import-btn")).toHaveText("Importováno ✓");
  await page.goto("/#/g/4/vlastiveda");
  const card = page.locator(".item-card[data-id='4-vlastiveda-habsburkove']");
  await expect(card).toContainText("80 %");
  await expect(card).toContainText("Chyby (1)");
});
