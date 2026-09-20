const { test, expect } = require("@playwright/test");
const { createProfile, startItem, answerCurrent, continueRun, clickOption, settle, finishRun } = require("../helpers");

/** Correct answer of the displayed card, read from the persisted session. */
async function currentAnswer(page) {
  const index = parseInt(await page.locator(".question-card").getAttribute("data-index"), 10);
  return page.evaluate((i) => {
    const key = Object.keys(localStorage).find((k) => k.indexOf(":session:") !== -1);
    return JSON.parse(localStorage.getItem(key)).cards[i].item.answer;
  }, index);
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

/** Run a test answering the first `wrong` cards wrong and the rest with the first option. */
async function runWithMistakes(page, id, wrong) {
  await startItem(page, id);
  for (let i = 0; !(await page.locator("#results").count()); i++) {
    if (i < wrong) {
      const answer = await currentAnswer(page);
      expect(await clickOption(page, (t) => t !== answer)).toBe("moved");
    } else {
      await answerCurrent(page);
      await continueRun(page);
    }
  }
}

test("wrong answers go to mistakes mode and get fixed there", async ({ page }) => {
  await createProfile(page, "Petr", 4);
  await runWithMistakes(page, "4-vlastiveda-habsburkove", 3);
  const btn = page.locator("a:has-text('Procvičit chyby')");
  await expect(btn).toBeVisible();
  const count = parseInt((await btn.textContent()).match(/\d+/)[0], 10);
  expect(count).toBeGreaterThanOrEqual(3);
  await btn.click();
  await expect(page.locator(".tag-warn:has-text('Oprava chyb')")).toBeVisible();
  await expect(page.locator(".progress-text")).toContainText(`z ${count}`);

  // fix every mistake: correct answers move on by themselves, mistakes disappear
  while (!(await page.locator("#results").count())) {
    const answer = await currentAnswer(page);
    expect(await clickOption(page, (t) => t === answer)).toBe("moved");
  }
  await expect(page.locator("a:has-text('Procvičit chyby')")).toHaveCount(0);
  await page.goto("/#/g/4/vlastiveda");
  await expect(page.locator(".item-card[data-id='4-vlastiveda-habsburkove'] a:has-text('Chyby')")).toHaveCount(0);
});

test("session survives reload", async ({ page }) => {
  await createProfile(page, "Petr", 4);
  await startItem(page, "4-vlastiveda-habsburkove");
  await answerCurrent(page);
  await continueRun(page);
  await answerCurrent(page);
  await continueRun(page);
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
  test.setTimeout(180000); // three full runs with auto-advance delays
  await createProfile(page, "Petr", 4);
  const seen = new Set();
  for (const id of ["4-anglictina-unit6-test", "4-anglictina-unit5-procvicovani", "4-cestina-opakovani"]) {
    await startItem(page, id);
    (await finishRun(page)).forEach((t) => seen.add(t));
  }
  for (const t of ["choice", "match", "write", "spell", "order"]) expect([...seen]).toContain(t);
});

test("lesson shows material, then practice", async ({ page }) => {
  await createProfile(page, "Petr", 5);
  await page.click(".subject-tile[data-subject=anglictina]");
  await page.click(".item-card[data-id='5-anglictina-may-might-some-any'] a:has-text('Otevřít')");
  await expect(page.locator(".lesson-table")).toHaveCount(2);
  await page.click("a:has-text('Procvičit')");
  await page.click("#start-btn");
  await finishRun(page);
  await expect(page.locator(".results-grade")).toHaveCount(0);
});

test("test gives no feedback mid-run and reviews answers at the end", async ({ page }) => {
  await createProfile(page, "Petr", 4);
  await startItem(page, "4-vlastiveda-habsburkove");
  await expect(page.locator(".hud")).toHaveCount(0);
  const answer = await currentAnswer(page);
  const card = page.locator(".question-card");
  const wrong = card.locator(".answer-btn").filter({ hasNotText: answer }).first();
  await wrong.click();
  await expect(wrong).toHaveClass(/chosen/);
  await expect(card.locator(".answer-btn.correct, .answer-btn.incorrect")).toHaveCount(0);
  await expect(page.locator("#feedback")).toBeHidden();
  await expect(page.locator(".question-card[data-index='1']")).toBeVisible();

  const total = await page.evaluate(() => {
    const key = Object.keys(localStorage).find((k) => k.indexOf(":session:") !== -1);
    return JSON.parse(localStorage.getItem(key)).cards.length;
  });
  await finishRun(page);
  await expect(page.locator("#review .review-item")).toHaveCount(total);
  const first = page.locator("#review .review-item").first();
  await expect(first).toHaveClass(/fail/);
  await expect(first).toContainText(answer);
});

test("practice: correct answer moves on, wrong waits for tap or Enter", async ({ page }) => {
  await createProfile(page, "Petr", 4);
  await runWithMistakes(page, "4-vlastiveda-habsburkove", 3);
  await page.click("a:has-text('Procvičit chyby')");
  await expect(page.locator(".hud")).toBeVisible();

  // wrong → feedback stays, tap outside buttons continues
  let answer = await currentAnswer(page);
  expect(await clickOption(page, (t) => t !== answer)).toBe("waiting");
  await expect(page.locator("#feedback")).toContainText(answer);
  await page.waitForTimeout(1500);
  await expect(page.locator(".question-card[data-index='0']")).toBeVisible();
  await page.click(".question-card .section-head");
  await expect(page.locator(".question-card[data-index='1']")).toBeVisible();

  // wrong → Enter continues
  answer = await currentAnswer(page);
  expect(await clickOption(page, (t) => t !== answer)).toBe("waiting");
  await page.keyboard.press("Enter");
  await expect(page.locator(".question-card[data-index='2']")).toBeVisible();

  // correct → moves on by itself
  answer = await currentAnswer(page);
  await page.locator(".answer-btn").filter({ hasText: answer }).first().click();
  await expect(page.locator("#feedback")).toContainText("Správně");
  await expect(page.locator("#next-btn")).toBeHidden();
  await expect(page.locator(".question-card[data-index='2']")).toHaveCount(0);
});

test("logic puzzles show a picture grid and picture answers", async ({ page }) => {
  await createProfile(page, "Petr", 5);
  await page.click(".subject-tile[data-subject=logika]");
  await expect(page.locator(".item-card[data-id='5-logika-test']")).toBeVisible();
  await startItem(page, "5-logika-test");
  const grid = page.locator(".question-card .puzzle-grid");
  await expect(grid).toBeVisible();
  await expect(grid.locator("td.grid-q")).toHaveText("?");
  // emoji/number options → picture tiles; letter options (e.g. "B D G K ?") stay a list
  const first = await page.locator(".answer-btn").first().textContent();
  await expect(page.locator(".answers-pictures")).toHaveCount(/\p{L}/u.test(first) ? 0 : 1);
  await finishRun(page);
  await expect(page.locator(".results-grade")).toBeVisible();
  await expect(page.locator("#review .puzzle-grid").first()).toBeVisible();
});

test("music: lesson and drills draw a staff, review keeps it", async ({ page }) => {
  await createProfile(page, "Petr", 5);
  await page.click(".subject-tile[data-subject=hudebni]");
  await page.click(".item-card[data-id='5-hudebni-noty-stupnice-tempa'] a:has-text('Otevřít')");
  await expect(page.locator(".lesson svg.staff").first()).toBeVisible();
  expect(await page.locator(".lesson svg.staff").count()).toBeGreaterThan(5);
  await expect(page.locator(".lesson svg.staff").first().locator("ellipse")).not.toHaveCount(0);

  await startItem(page, "5-hudebni-test");
  await expect(page.locator(".question-card svg.staff")).toBeVisible();
  await finishRun(page);
  await expect(page.locator("#review svg.staff").first()).toBeVisible();
});

test("5th grade English test runs to a school grade", async ({ page }) => {
  await createProfile(page, "Petr", 5);
  await startItem(page, "5-anglictina-test-2026-09-22");
  await finishRun(page);
  await expect(page.locator(".results-grade")).toBeVisible();
});
