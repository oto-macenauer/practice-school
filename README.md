# Procvičování

Practice app for primary school kids: tests, practice sets and lessons across subjects and grades. Each child has their own profile and grade. Grades 1–3 get a simpler, bigger UI.

Replaces [practice-history](https://github.com/oto-macenauer/practice-history), [practice-english](https://github.com/oto-macenauer/practice-english) and [practice-czech](https://github.com/oto-macenauer/practice-czech).

## Features

- Profiles per child (local), grade-based dashboard, browse other grades for review
- Subjects: Čeština, Angličtina, Matematika, Vlastivěda, Přírodověda
- Lessons, ungraded practice, graded tests (Czech school grade 1–5)
- Question types: multiple choice, matching, typing, spelling (speech), word order, gap text, listening (speech synthesis)
- Instant feedback with explanations, XP and streaks, stars for young kids
- Mistakes review, resume after reload, printable A4 worksheets with answer key
- Installable PWA, works offline
- Imports results from the old apps (same origin)

## Run locally

```bash
npm install          # only needed for tests
npm run serve        # http://localhost:8080/
```

Any static server works (`python -m http.server`). Opening `index.html` from disk mostly works too, but the service worker and update check need http.

## Content

See [CLAUDE.md](CLAUDE.md#adding-content) and [docs/PLAN.md](docs/PLAN.md) for the schema. Check content with:

```bash
node tools/validate.js
```

## Tests

```bash
npx playwright install chromium
npx playwright test --config tests/playwright.config.js
```

CI runs the validator and Playwright on every push and PR.

## Deploy

GitHub Pages from `main` / root. Bump `version.json` so open tabs show the "new version" toast.

## License

[MIT](LICENSE)
