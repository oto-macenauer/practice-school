const { test, expect } = require("@playwright/test");
const { createProfile, startItem, finishRun } = require("../helpers");

// Říjen–listopad content for 3rd grade: Čeština (být × bít, vyjmenovaná slova po B,
// opakování, čtvrtletní písemka) and Matematika (závorky, slovní úlohy, geometrie, písemka).
const ITEMS = [
  "3-cestina-byt-bit",
  "3-cestina-vyjmenovana-slova-b",
  "3-cestina-opakovani",
  "3-cestina-ctvrtletni-pisemka",
  "3-matematika-zavorky",
  "3-matematika-slovni-ulohy",
  "3-matematika-primka-a-usecka",
  "3-matematika-ctvrtletni-pisemka"
];

const RUN_THROUGH = ["3-cestina-ctvrtletni-pisemka", "3-matematika-ctvrtletni-pisemka", "3-matematika-zavorky"];

test("every new grade 3 item builds a run", async ({ page }) => {
  const problems = [];
  page.on("pageerror", (e) => problems.push(String(e)));
  page.on("console", (m) => { if (m.type() === "error") problems.push(m.text()); });

  await createProfile(page, "Třetí", 3);
  for (const id of ITEMS) {
    await startItem(page, id);
    await expect(page.locator(".question-card")).toBeVisible();
  }
  expect(problems, problems.join("\n")).toHaveLength(0);
});

for (const id of RUN_THROUGH) {
  test(`${id} runs to the results screen`, async ({ page }) => {
    await createProfile(page, "Třetí", 3);
    await startItem(page, id);
    const types = await finishRun(page);
    expect(types.size).toBeGreaterThan(0);
    await expect(page.locator("#results")).toBeVisible();
  });
}

test("být × bít lesson shows the table of pairs", async ({ page }) => {
  await createProfile(page, "Třetí", 3);
  await page.goto("/#/lesson/3-cestina-byt-bit");
  await expect(page.locator(".lesson-table tbody tr")).toHaveCount(8);
  await expect(page.locator(".lesson-table")).toContainText("přibít");
});

test("závorky drill prints as an A4 worksheet", async ({ page }) => {
  await createProfile(page, "Třetí", 3);
  await page.goto("/#/print/3-matematika-zavorky");
  await expect(page.locator(".drill-page .drill-item").first()).toContainText("(");
});
