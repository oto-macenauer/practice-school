const { test, expect } = require("@playwright/test");
const { createProfile, startItem, answerCurrent, finishRun } = require("../helpers");

/** Correct answer of the current card, read from the persisted session. */
function currentAnswer(page) {
  return page.evaluate(() => {
    const key = Object.keys(localStorage).find((k) => k.indexOf(":session:") !== -1);
    const s = JSON.parse(localStorage.getItem(key));
    return s.cards[s.current].item.answer;
  });
}

test("history test: full run, results with school grade, progress saved", async ({ page }) => {
  await createProfile(page, "Petr", 4);
  await startItem(page, "4-vlastiveda-voda-a-podnebi");
  await expect(page.locator(".progress-text")).toContainText("Otázka 1 z");
  await finishRun(page);
  await expect(page.locator(".results-grade")).toBeVisible();
  await page.click("a:has-text('Zpět')");
  await expect(page.locator(".item-card[data-id='4-vlastiveda-voda-a-podnebi']")).toContainText("1× pokus");
});

test("wrong answers go to mistakes mode and get fixed there", async ({ page }) => {
  await createProfile(page, "Petr", 4);
  await startItem(page, "4-vlastiveda-habsburkove");
  // answer the first three wrong on purpose, the rest with the first option
  for (let i = 0; !(await page.locator("#results").count()); i++) {
    if (i < 3) {
      const answer = await currentAnswer(page);
      const buttons = page.locator(".answer-btn");
      const n = await buttons.count();
      for (let b = 0; b < n; b++) {
        if ((await buttons.nth(b).textContent()) !== answer) { await buttons.nth(b).click(); break; }
      }
    } else {
      await answerCurrent(page);
    }
    await page.click("#next-btn");
  }
  const btn = page.locator("a:has-text('Procvičit chyby')");
  await expect(btn).toBeVisible();
  const count = parseInt((await btn.textContent()).match(/\d+/)[0], 10);
  expect(count).toBeGreaterThanOrEqual(3);
  await btn.click();
  await expect(page.locator(".tag-warn:has-text('Oprava chyb')")).toBeVisible();
  await expect(page.locator(".progress-text")).toContainText(`z ${count}`);

  // fix every mistake: they disappear from the list
  while (!(await page.locator("#results").count())) {
    const answer = await currentAnswer(page);
    await page.locator(".answer-btn").filter({ hasText: answer }).first().click();
    await page.click("#next-btn");
  }
  await expect(page.locator("a:has-text('Procvičit chyby')")).toHaveCount(0);
  await page.goto("/#/g/4/vlastiveda");
  await expect(page.locator(".item-card[data-id='4-vlastiveda-habsburkove'] a:has-text('Chyby')")).toHaveCount(0);
});

test("session survives reload", async ({ page }) => {
  await createProfile(page, "Petr", 4);
  await startItem(page, "4-vlastiveda-habsburkove");
  await answerCurrent(page);
  await page.click("#next-btn");
  await answerCurrent(page);
  await page.reload();
  await expect(page.locator(".progress-text")).toContainText("Otázka 3 z");
  await page.goto("/#/");
  await expect(page.locator(".continue")).toContainText("Habsburkové");
});

test("practice item lets kid choose sections", async ({ page }) => {
  await createProfile(page, "Petr", 4);
  await page.goto("/#/run/4-anglictina-unit5-procvicovani");
  const boxes = page.locator(".section-picker input[type=checkbox]");
  await expect(boxes.first()).toBeVisible();
  expect(await boxes.count()).toBeGreaterThan(3);
  for (let i = 1; i < (await boxes.count()); i++) await boxes.nth(i).uncheck();
  await page.click(".length-picker .chip[data-len='3']");
  await page.click("#start-btn");
  await expect(page.locator(".progress-text")).toContainText("z 3");
});

test("every section type renders and can be answered", async ({ page }) => {
  await createProfile(page, "Petr", 4);
  const seen = new Set();
  for (const id of ["4-anglictina-unit6-test", "4-anglictina-unit5-procvicovani", "4-cestina-opakovani"]) {
    await startItem(page, id);
    (await finishRun(page)).forEach((t) => seen.add(t));
  }
  for (const t of ["choice", "match", "write", "spell", "order"]) expect([...seen]).toContain(t);
});
