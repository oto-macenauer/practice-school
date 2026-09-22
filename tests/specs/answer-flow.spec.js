const { test, expect } = require("@playwright/test");
const { createProfile, startItem, setPref } = require("../helpers");

const ITEM = "5-logika-procvicovani"; // all-choice practice item

/** Correct answer of the displayed card, read from the persisted session. */
async function currentAnswer(page) {
  const index = parseInt(await page.locator(".question-card").getAttribute("data-index"), 10);
  return page.evaluate((i) => {
    const key = Object.keys(localStorage).find((k) => k.indexOf(":session:") !== -1);
    return JSON.parse(localStorage.getItem(key)).cards[i].item.answer;
  }, index);
}

test("default flow: tap evaluates right away and a correct answer moves on", async ({ page }) => {
  await createProfile(page, "Petr", 5);
  await startItem(page, ITEM);
  await expect(page.locator(".confirm-btn")).toHaveCount(0);
  const answer = await currentAnswer(page);
  await page.locator(".answer-btn").filter({ hasText: answer }).first().click();
  await expect(page.locator("#feedback")).toContainText("Správně");
  await expect(page.locator(".question-card[data-index='1']")).toBeVisible();
});

test("confirm on: tap only selects, choice can be changed, Potvrdit evaluates", async ({ page }) => {
  await createProfile(page, "Petr", 5);
  await setPref(page, "#set-confirm", true);
  await startItem(page, ITEM);

  const confirm = page.locator(".confirm-btn");
  await expect(confirm).toBeDisabled();
  const answer = await currentAnswer(page);
  const wrong = page.locator(".answer-btn").filter({ hasNotText: answer }).first();
  const right = page.locator(".answer-btn").filter({ hasText: answer }).first();

  await wrong.click();
  await expect(wrong).toHaveClass(/selected/);
  await expect(confirm).toBeEnabled();
  await expect(page.locator("#feedback")).toBeHidden();
  await expect(page.locator(".question-card[data-index='0']")).toBeVisible();

  // mistap taken back: selecting another option moves the highlight, nothing graded yet
  await right.click();
  await expect(wrong).not.toHaveClass(/selected/);
  await expect(right).toHaveClass(/selected/);
  await expect(page.locator("#feedback")).toBeHidden();

  await confirm.click();
  await expect(page.locator("#feedback")).toContainText("Správně");
  await expect(page.locator(".question-card[data-index='1']")).toBeVisible();
});

test("auto-advance off: correct answer waits on the next button", async ({ page }) => {
  await createProfile(page, "Petr", 5);
  await setPref(page, "#set-autonext", false);
  await startItem(page, ITEM);

  const answer = await currentAnswer(page);
  await page.locator(".answer-btn").filter({ hasText: answer }).first().click();
  await expect(page.locator("#feedback")).toContainText("Správně");
  await expect(page.locator("#next-btn")).toBeVisible();
  await page.waitForTimeout(2200);
  await expect(page.locator(".question-card[data-index='0']")).toBeVisible();
  await page.click("#next-btn");
  await expect(page.locator(".question-card[data-index='1']")).toBeVisible();
});

test("settings keep the answer-flow choices per profile", async ({ page }) => {
  await createProfile(page, "Petr", 5);
  await setPref(page, "#set-confirm", true);
  await setPref(page, "#set-autonext", false);
  await page.goto("/#/");
  await page.goto("/#/settings");
  await expect(page.locator("#set-confirm")).toBeChecked();
  await expect(page.locator("#set-autonext")).not.toBeChecked();
});
