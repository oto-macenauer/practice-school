const { expect } = require("@playwright/test");

/** Fresh app with one profile created through the UI. */
async function createProfile(page, name, grade) {
  await page.goto("/");
  await page.evaluate(() => localStorage.clear());
  await page.goto("/#/profiles");
  await page.fill(".profile-form input[name=name]", name);
  await page.selectOption(".profile-form select[name=grade]", String(grade));
  await page.click(".profile-form button[type=submit]");
  await expect(page.locator(".hello")).toContainText(name);
}

/** Open item from the catalog and pass the intro screen. */
async function startItem(page, id, length = 3) {
  await page.goto(`/#/run/${id}`);
  const lenBtn = page.locator(`.length-picker .chip[data-len="${length}"]`);
  if (await lenBtn.count()) await lenBtn.click();
  await page.click("#start-btn");
  await expect(page.locator(".question-card")).toBeVisible();
}

/**
 * Answer the current card with the first available input (right or wrong)
 * and return the card type.
 */
async function answerCurrent(page) {
  const card = page.locator(".question-card");
  await expect(page.locator("#next-btn")).toBeHidden();
  const type = await card.getAttribute("data-type");
  if (type === "choice" || type === "match") {
    await card.locator(".answer-btn").first().click();
  } else if (type === "write" || type === "spell") {
    await card.locator(".write-input").fill("abc");
    await card.locator(".write-form button").click();
  } else if (type === "order") {
    const chips = card.locator(".word-bank .word-chip:not(.placed)");
    while (await chips.count()) await chips.first().click();
    await card.locator("button:has-text('Zkontrolovat')").click();
  } else if (type === "gap-text") {
    const selects = card.locator(".gap-select");
    for (let i = 0; i < (await selects.count()); i++) await selects.nth(i).selectOption({ index: 1 });
    await card.locator("button:has-text('Zkontrolovat')").click();
  } else {
    throw new Error("unknown card type " + type);
  }
  await expect(page.locator("#feedback")).toBeVisible();
  return type;
}

/** Answer every card until the results screen; returns set of seen types. */
async function finishRun(page) {
  const seen = new Set();
  for (let i = 0; i < 300; i++) {
    if (await page.locator("#results").count()) return seen;
    seen.add(await answerCurrent(page));
    await page.click("#next-btn");
  }
  throw new Error("run did not finish");
}

module.exports = { createProfile, startItem, answerCurrent, finishRun };
