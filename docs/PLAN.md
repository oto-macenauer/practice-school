# Practice School — architecture & migration plan

Consolidates `practice-history`, `practice-english` and `practice-czech` into one app
for several kids in different school grades.

## 1. Decisions

| Topic | Decision |
|---|---|
| Users | Siblings, each with own local profile (name + grade). Currently 3rd and 5th grade; 2nd/4th content kept for review. |
| Stack | Vanilla HTML/CSS/JS, no build, no bundler. Modern JS syntax (const/let, arrows, template literals, async) but **classic scripts + global `School` namespace** (no ES modules) so content can be lazy-loaded via `<script>` injection. |
| Hosting | GitHub Pages now. All URLs relative, so the same files later work behind nginx in Docker. |
| Persistence | Everything via `School.Store` (async API). `LocalStore` adapter now; `ApiStore` (REST → SQLite) later. No Firebase. |
| UI language | Czech everywhere. English subject content stays English. |
| Grades | One grade per content item. Profile grade = default view; other grades browsable. |
| Young UI | Grades 1–3: `body.young` — larger type & buttons, 2-column answer grid, read-aloud button, no typing exercises, stars instead of XP numbers. |
| Kinds | `lesson` (learning material + short practice), `practice` (ungraded drill), `test` (graded 1–5 like school). |
| Features kept | Mistakes review, session resume, XP/streak (local), print mode (A4), PWA/offline, speech synthesis, AI image tool, Playwright + CI, content validator. |
| Old repos | After launch: each old site's `index.html` becomes a redirect to the matching page in practice-school, then repo archived. |

## 2. Subjects

| id | Name | Speech lang |
|---|---|---|
| `cestina` | Čeština | cs-CZ |
| `anglictina` | Angličtina | en-GB |
| `matematika` | Matematika | cs-CZ |
| `vlastiveda` | Vlastivěda | cs-CZ |
| `prirodoveda` | Přírodověda | cs-CZ |

## 3. Folder layout

```
index.html              SPA shell (hash router)
manifest.webmanifest    PWA manifest (relative start_url/scope)
sw.js                   service worker, network-first
version.json            polled by update checker
css/app.css
js/
  util.js               School.util — shuffle, esc, el, normalize, speak
  store.js              School.Store — interface + LocalStore adapter
  catalog.js            School.catalog helpers + lazy content loader
  engine.js             School.engine — per-type item renderers + runner
  print.js              School.print — A4 worksheet rendering
  views.js              School.views — profiles, home, subject, lesson, results, settings
  app.js                router + boot
  update-checker.js
content/
  subjects.js           School.SUBJECTS
  catalog.js            School.CATALOG — metadata for every item (dashboard never loads item files)
  <grade>/<subject>/<slug>.js   School.register({...})
  <grade>/<subject>/img/        images used by that subject's content
images/icons/           PWA icons
tools/
  validate.js           schema checker (node tools/validate.js)
  migrate/convert.js    one-off converter from the three old repos (kept for provenance)
  generate_images.py    AI illustrations (ported from practice-english)
tests/                  Playwright (config + specs)
.github/workflows/ci.yml   validate + playwright on push/PR
```

## 4. Content schema

### Catalog entry (`content/catalog.js`)

```js
{ id: "4-vlastiveda-habsburkove",   // "<grade>-<subject>-<slug>", unique, stable (progress keys use it)
  grade: 4, subject: "vlastiveda", kind: "test",
  title: "Habsburkové", description: "…", icon: "🏰",
  file: "content/4/vlastiveda/habsburkove.js" }
```

### Content file

```js
School.register({
  id: "4-vlastiveda-habsburkove",
  groups: { reading: 2 },            // optional: use only N random sections of a group
  lesson: [ /* lesson only */
    { type: "text", html: "<p>…</p>" },
    { type: "image", src: "content/4/…/img/x.webp", alt: "…" },
    { type: "table", head: ["…"], rows: [["…"]] }
  ],
  sections: [{
    id: "materials", title: "Materials", icon: "🧱", image: "content/4/anglictina/img/x.webp",
    instructions: "…", type: "choice",
    pick: 5 | "auto",                // optional; "auto" = profile length setting (3/5/10); omitted = all
    group: "reading",                // optional, see groups
    passage: "…" | passages: [{ passage, items }],   // reading: one passage, or pick one at random
    items: [ … ]
  }]
});
```

### Section types and item shapes

| type | item | notes |
|---|---|---|
| `choice` | `{ prompt, options[], answer, explanation?, say? }` | `answer` is the option **string**. `___` in prompt renders as a highlighted gap. `say` = text spoken by the listen button (listening). |
| `match` | `{ prompt, answer }` | Options = answer + 3 distinct answers from other items in section. Print: two columns. |
| `write` | `{ prompt, answer, accept?[] }` | Typed answer, case/space-insensitive. Not allowed for grades 1–3. |
| `spell` | `{ word, hint? }` | Word is spoken, kid types it. Not allowed for grades 1–3. |
| `order` | `{ words[], answer }` | Tap words to build sentence. |
| `gap-text` | section-level `{ text, wordBank[], blanks[] }` | `{1}`, `{2}` placeholders; one card, one point per blank. |

Old-type mapping: history MC → `choice`; czech `fill-choice` → `choice` (`before___after`); czech `syllable-split`/`match-pair`/`reading-comprehension` → `choice`; czech `word-order` → `order`; english `fill-choice`/`reading`/`listen-comprehension` → `choice`; english `match` → `match`; `fill-write` → `write`; `spell` → `spell`; `gap-fill` → `gap-text`.

Mistake key per item: `<sectionId>|<text>` where text = `prompt` (choice/match/write), `word` (spell), `answer` (order); gap-text blanks use `<sectionId>|#<n>`. The section prefix keeps identical prompts in different sections apart; old history mistakes (question text) import as `otazky|<text>`.

## 5. Store API (async, adapter-swappable)

```js
Store.listProfiles()                 → [{ id, name, grade, avatar, createdAt }]
Store.saveProfile(profile)           → profile
Store.deleteProfile(id)
Store.getActiveProfileId() / setActiveProfileId(id)   // always device-local
Store.getProgress(profileId)         → { xp, items: { [contentId]: { attempts, bestPct, bestGrade, lastAt, mistakes: [key] } } }
Store.addXp(profileId, contentId, n)
Store.recordRun(profileId, contentId, { score, total, mistakes, mode })
Store.getSettings(profileId) / saveSettings(profileId, s)   // { length: 3|5|10, speech: bool }
Store.getSession(profileId, contentId, mode) / saveSession(…, state) / clearSession(…)   // device-local
```

Future `ApiStore` implements the same calls against `/api/profiles`, `/api/progress/:profile` etc.; sessions stay local.

## 6. Routes

| hash | view |
|---|---|
| `#/profiles` | profile picker / create / edit |
| `#/` | home for active profile's grade: subjects with item counts, "continue" and mistakes shortcuts |
| `#/g/<grade>` | home for another grade |
| `#/g/<grade>/<subject>` | list of lessons / practice / tests |
| `#/run/<id>` / `#/run/<id>/mistakes` | runner (section picker for `practice` → items one by one → results) |
| `#/lesson/<id>` | lesson material, then its practice via runner |
| `#/print/<id>` | printable worksheet |
| `#/settings` | profile settings, import old data, reset |

## 7. Runner behavior

- Item-by-item cards with instant feedback + explanation (history style) for all kinds.
- XP: 10 per correct + streak bonus (streak × 5). Level = xp / 500. Young UI shows stars.
- Results: score, %, stars; `test` also shows Czech grade 1–5 (≥90 / ≥75 / ≥60 / ≥30 / else); per-section breakdown; "Procvičit chyby (n)".
- Session saved after every answer; reload resumes.
- Mistakes mode: only items whose key is in the profile's mistake list; answering right removes it.

## 8. Migration inventory

| Source | Target |
|---|---|
| history `lucemburkove`, `husitske-valky`, `habsburkove`, `voda-a-podnebi` | `4/vlastiveda/*` — `test` |
| czech `test-2026-03-31` | `2/cestina/ctvrtletni-2026-03-31` — `test` |
| czech `4tr-opakovani`, `4tr-podstatna-jmena` | `4/cestina/*` — `test` |
| english practice-tests `unit5`…`unit9`, `review5-9` | `4/anglictina/unitN-test`, `review5-9-test` — `test` |
| english vocabulary/grammar/reading/listening/spelling per unit 5–7 | `4/anglictina/unitN-procvicovani` — `practice` (sections from each module) |
| english `images/topics/*` | `content/4/anglictina/img/` |
| old localStorage (`history-practice-stats`, english `scores`) | "Importovat staré výsledky" in settings — same origin `oto-macenauer.github.io`, so data is readable |

Matematika and Přírodověda start empty (subject tiles show "Zatím žádné testy").

## 9. Rollout

1. Scaffold + migrate locally (this session). Validator + Playwright green.
2. Create GitHub repo `practice-school`, enable Pages. *(needs approval)*
3. Kids use it for a week alongside old sites.
4. Old repos: replace `index.html` with redirect, archive. *(needs approval)*
5. Later: Docker (nginx + API + SQLite), `ApiStore`, optional leaderboard/badges.
