# CLAUDE.md

## Project overview

Procvičování — one practice app for several kids in different school grades (currently 3rd and 5th; 2nd and 4th kept for review). Subjects: Čeština, Angličtina, Matematika, Vlastivěda, Přírodověda. Static site (vanilla HTML/CSS/JS, no build), hosted on GitHub Pages; later Docker + SQLite. Architecture and decisions: `docs/PLAN.md`.

Replaces practice-history, practice-english and practice-czech. `tools/migrate/convert.js` regenerates migrated content from those repos — don't rerun it over hand-edited content.

## Development

```bash
npm run serve                 # node tools/serve.js 8080 → http://localhost:8080/
node tools/validate.js        # content schema check (run after every content change)
npx playwright test --config tests/playwright.config.js   # UI tests (desktop + tablet)
```

**Before committing, validator and Playwright must pass.** Add specs in `tests/specs/` for new behavior. Bump `version.json` on each deploy (update toast polls it).

## Architecture

Single page (`index.html`), hash router in `js/app.js`. Classic scripts, global `School` namespace — **load order in index.html matters**: util → store → content/subjects → content/catalog → catalog → engine → print → legacy-import → views → app.

- `js/store.js` — **all persistence goes through `School.Store`** (async). Never touch localStorage from views/engine. `LocalStore` now; a REST adapter will replace it.
- `js/catalog.js` — reads `School.CATALOG`; lazy-loads item files via `<script>` injection.
- `js/engine.js` — builds a serializable run (cards), renders one card at a time, saves session after every answer.
- `js/print.js` — A4 worksheet + answer key.
- `js/views.js` — profiles, home, subject list, lesson, settings.

Profiles are local (name, grade, avatar). Grade ≤ 3 → `body.young` (bigger UI, stars, no typing).

## Adding content

1. Create `content/<grade>/<subject>/<slug>.js` calling `School.register({ id, sections: [...] })`.
2. Add catalog entry in `content/catalog.js`: `id` = `<grade>-<subject>-<slug>`, `grade`, `subject`, `kind` (`lesson` | `practice` | `test`), `title`, `description`, `icon`, `file`.
3. Images go to `content/<grade>/<subject>/img/`.
4. `node tools/validate.js`.

Section types (full schema in `docs/PLAN.md` §4): `choice` `{prompt, options, answer, explanation?, say?}` (answer is the option string, `___` = gap), `match` `{prompt, answer}`, `write` `{prompt, answer, accept?}`, `spell` `{word, hint?}`, `order` `{words, answer}`, `gap-text` (section-level `text`/`wordBank`/`blanks`). Section options: `pick` (number or `"auto"`), `group` + item-level `groups`, `passage` / `passages`.

**Content ids and section ids are progress keys** — renaming them loses kids' results and mistakes.

## Conventions

- All UI text in Czech. English subject content stays in English.
- Modern JS is fine (const/let, arrows, template literals, async) but no ES modules and no build step.
- Escape all content with `School.util.esc` before inserting into HTML.
- Relative URLs only (GitHub Pages subpath and Docker root must both work).
- XP: 10 per correct + streak × 5. Level = xp / 500. Tests grade 1–5 at ≥90/75/60/30 %.

## Content rules

- Grades 1–3: no `write` / `spell` sections (validator warns). Short sentences, simple words.
- Don't make the correct answer the longest option (validator warns above 60 %).
- Listening: comprehension questions about spoken text (`say`), never "type what you heard" (except `spell`).
- Don't reference songs or materials not in the app.
- Buttons: selected state = light background + dark text, never white on blue (mobile readability).
