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
 * Wait until the answered card is resolved: either the run moved on by itself
 * (correct answer / test) or it waits on the next button (wrong answer).
 * Returns "moved" or "waiting".
 */
async function settle(page, index) {
  let outcome;
  await expect(async () => {
    if (await page.locator(`#results, .question-card:not([data-index="${index}"])`).count()) outcome = "moved";
    else if (await page.locator("#next-btn").isVisible()) outcome = "waiting";
    expect(outcome).toBeTruthy();
  }).toPass({ timeout: 5000 });
  return outcome;
}

/** After an answer: click through if the run waits on the next button. */
async function continueRun(page) {
  if (await page.locator("#next-btn").isVisible()) await page.click("#next-btn");
}

/** Click the option matching `pick(text)` on a choice/match card; returns settle() outcome. */
async function clickOption(page, pick) {
  const card = page.locator(".question-card");
  const index = await card.getAttribute("data-index");
  const buttons = card.locator(".answer-btn");
  const n = await buttons.count();
  for (let b = 0; b < n; b++) {
    if (pick(await buttons.nth(b).textContent())) { await buttons.nth(b).click(); break; }
  }
  return settle(page, index);
}

/**
 * Answer the current card with the first available input (right or wrong)
 * and return the card type.
 */
async function answerCurrent(page) {
  const card = page.locator(".question-card");
  await expect(page.locator("#next-btn")).toBeHidden();
  const type = await card.getAttribute("data-type");
  const index = await card.getAttribute("data-index");
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
  await settle(page, index);
  return type;
}

/** Answer every card until the results screen; returns set of seen types. */
async function finishRun(page) {
  const seen = new Set();
  for (let i = 0; i < 300; i++) {
    if (await page.locator("#results").count()) return seen;
    seen.add(await answerCurrent(page));
    await continueRun(page);
  }
  throw new Error("run did not finish");
}

module.exports = { createProfile, startItem, answerCurrent, continueRun, clickOption, settle, finishRun };
