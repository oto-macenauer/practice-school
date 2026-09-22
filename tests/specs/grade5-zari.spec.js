const { test, expect } = require("@playwright/test");
const { createProfile, startItem, finishRun } = require("../helpers");

// Září content for 5th grade: Čeština (stavba slova, slovní druhy),
// Matematika (převody, geometrie) and Přírodověda (rostliny/houby, živočichové).
const ITEMS = [
  "5-cestina-stavba-slova",
  "5-cestina-slovni-druhy",
  "5-cestina-test-zari",
  "5-matematika-prevody-a-pocitani",
  "5-matematika-primky-a-usecky",
  "5-matematika-test-zari",
  "5-prirodoveda-rostliny-a-houby",
  "5-prirodoveda-zivocichove",
  "5-prirodoveda-test-zari"
];

// One item per subject, answered card by card to the results screen.
const RUN_THROUGH = ["5-cestina-test-zari", "5-matematika-primky-a-usecky", "5-prirodoveda-zivocichove"];

test("every září item for grade 5 builds a run", async ({ page }) => {
  const problems = [];
  page.on("pageerror", (e) => problems.push(String(e)));
  page.on("console", (m) => { if (m.type() === "error") problems.push(m.text()); });

  await createProfile(page, "Pátá", 5);
  for (const id of ITEMS) {
    await startItem(page, id);
    await expect(page.locator(".question-card")).toBeVisible();
  }
  expect(problems, problems.join("\n")).toHaveLength(0);
});

for (const id of RUN_THROUGH) {
  test(`${id} runs to the results screen`, async ({ page }) => {
    await createProfile(page, "Pátá", 5);
    await startItem(page, id);
    const types = await finishRun(page);
    expect(types.size).toBeGreaterThan(0);
    await expect(page.locator("#results")).toBeVisible();
  });
}

test("new subjects show up on the grade 5 home screen", async ({ page }) => {
  await createProfile(page, "Pátá", 5);
  for (const subject of ["Čeština", "Matematika", "Přírodověda"]) {
    await expect(page.locator(".subject-tile", { hasText: subject })).toBeVisible();
  }
});
