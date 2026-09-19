#!/usr/bin/env node
/**
 * Content validator — checks content/subjects.js, content/catalog.js and every item file
 * against the schema in docs/PLAN.md §4. Exit code 1 on any error.
 *
 * Usage: node tools/validate.js
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.resolve(__dirname, "..");
const KINDS = ["lesson", "practice", "test"];
const TYPES = ["choice", "match", "write", "spell", "order", "gap-text"];
const LESSON_BLOCKS = ["text", "image", "table"];

const errors = [];
const warnings = [];
const err = (where, msg) => errors.push(`${where}: ${msg}`);
const warn = (where, msg) => warnings.push(`${where}: ${msg}`);

function load(rel, School) {
  const abs = path.join(ROOT, rel);
  const ctx = { School, console };
  vm.createContext(ctx);
  vm.runInContext(fs.readFileSync(abs, "utf8"), ctx, { filename: rel });
}

function imageExists(where, src) {
  if (src && !fs.existsSync(path.join(ROOT, src))) err(where, `image not found: ${src}`);
}

function stripPunct(w) {
  return w.replace(/[.,!?;:]+$/, "");
}

/** Mistake key per item, must match School.engine.itemKey (PLAN §4). */
function itemKey(type, item, sectionId, n) {
  if (type === "gap-text") return `${sectionId}|#${n}`;
  if (type === "spell") return `${sectionId}|${item.word}`;
  if (type === "order") return `${sectionId}|${item.answer}`;
  const grid = item.grid ? "|" + item.grid.map((r) => r.join(" ")).join("/") : "";
  return `${sectionId}|${item.prompt}${grid}`;
}

function checkChoice(where, it) {
  if (typeof it.prompt !== "string" || !it.prompt) err(where, "choice: missing prompt");
  if (it.grid !== undefined) {
    const ok = Array.isArray(it.grid) && it.grid.length &&
      it.grid.every((r) => Array.isArray(r) && r.length && r.every((c) => typeof c === "string"));
    if (!ok) err(where, "choice: grid must be a non-empty array of rows of strings");
  }
  if (!Array.isArray(it.options) || it.options.length < 2) return err(where, "choice: needs ≥2 options");
  if (new Set(it.options).size !== it.options.length) err(where, `choice: duplicate options ${JSON.stringify(it.options)}`);
  if (!it.options.includes(it.answer)) err(where, `choice: answer ${JSON.stringify(it.answer)} not in options`);
}

function checkSection(where, s, grade, keys) {
  if (!s.id) err(where, "section: missing id");
  if (!s.title) err(where, "section: missing title");
  if (!TYPES.includes(s.type)) return err(where, `unknown section type ${JSON.stringify(s.type)}`);
  imageExists(where, s.image);

  if (grade <= 3 && (s.type === "write" || s.type === "spell")) warn(where, `${s.type} in grade ${grade} (young UI has no typing)`);

  if (s.type === "gap-text") {
    if (typeof s.text !== "string") return err(where, "gap-text: missing text");
    if (!Array.isArray(s.wordBank) || !Array.isArray(s.blanks)) return err(where, "gap-text: needs wordBank and blanks");
    const nums = [...s.text.matchAll(/\{(\d+)\}/g)].map((m) => parseInt(m[1], 10));
    for (const n of nums) {
      const blank = s.blanks[n - 1];
      if (blank === undefined) err(where, `gap-text: {${n}} has no blank`);
      else if (!s.wordBank.includes(blank)) err(where, `gap-text: blank ${n} ${JSON.stringify(blank)} not in wordBank`);
    }
    s.blanks.forEach((_, i) => keys.push(itemKey("gap-text", null, s.id, i + 1)));
    return;
  }

  // Items: flat, or per passage
  let groups;
  if (Array.isArray(s.passages)) {
    groups = s.passages.map((p, i) => {
      if (!p.passage) err(`${where} passage ${i + 1}`, "missing passage text");
      return p.items || [];
    });
  } else {
    groups = [s.items || []];
  }
  const all = [].concat(...groups);
  if (!all.length) err(where, "section has no items");

  for (const items of groups) {
    const count = items.length;
    if (typeof s.pick === "number" && s.pick > count) warn(where, `pick ${s.pick} > ${count} items`);
  }
  if (s.pick !== undefined && s.pick !== "auto" && !(Number.isInteger(s.pick) && s.pick > 0)) err(where, `bad pick ${JSON.stringify(s.pick)}`);

  let longest = 0;
  all.forEach((it, i) => {
    const w = `${where} item ${i + 1}`;
    switch (s.type) {
      case "choice":
        checkChoice(w, it);
        if (Array.isArray(it.options) && it.options.includes(it.answer)) {
          const len = String(it.answer).length;
          if (it.options.every((o) => o === it.answer || String(o).length < len)) longest++;
        }
        break;
      case "match":
        if (!it.prompt || typeof it.answer !== "string") err(w, "match: needs prompt and answer");
        break;
      case "write":
        if (!it.prompt || typeof it.answer !== "string") err(w, "write: needs prompt and answer");
        if (it.accept !== undefined && !Array.isArray(it.accept)) err(w, "write: accept must be array");
        break;
      case "spell":
        if (typeof it.word !== "string" || !it.word) err(w, "spell: needs word");
        break;
      case "order": {
        if (!Array.isArray(it.words) || typeof it.answer !== "string") { err(w, "order: needs words[] and answer"); break; }
        const a = it.words.map(stripPunct).sort().join(" ");
        const b = it.answer.split(/\s+/).map(stripPunct).sort().join(" ");
        if (a !== b) err(w, `order: words ${JSON.stringify(it.words)} don't form ${JSON.stringify(it.answer)}`);
        break;
      }
    }
    keys.push(itemKey(s.type, it, s.id));
  });

  if (s.type === "match") {
    const distinct = new Set(all.map((it) => it.answer)).size;
    if (distinct < 4) err(where, `match: needs ≥4 distinct answers, has ${distinct}`);
  }
  if (s.type === "choice" && all.length >= 5) {
    const pct = Math.round((longest / all.length) * 100);
    if (pct > 60) warn(where, `correct answer is the longest option in ${pct}% of items`);
  }
}

function main() {
  const School = { register: (o) => registered.push(o) };
  let registered = [];

  load("content/subjects.js", School);
  load("content/catalog.js", School);
  const subjects = new Set((School.SUBJECTS || []).map((s) => s.id));
  if (!subjects.size) err("subjects.js", "School.SUBJECTS empty");
  const catalog = School.CATALOG || [];

  const seen = new Set();
  const counts = {};

  for (const c of catalog) {
    const where = c.id || "(catalog entry without id)";
    if (seen.has(c.id)) err(where, "duplicate id");
    seen.add(c.id);

    if (!Number.isInteger(c.grade) || c.grade < 1 || c.grade > 9) err(where, `bad grade ${c.grade}`);
    if (!subjects.has(c.subject)) err(where, `unknown subject ${c.subject}`);
    if (!KINDS.includes(c.kind)) err(where, `unknown kind ${c.kind}`);
    if (!c.title) err(where, "missing title");

    const m = /^(\d+)-([a-z]+)-([a-z0-9-]+)$/.exec(c.id || "");
    if (!m) err(where, "id must be <grade>-<subject>-<slug>");
    else {
      if (+m[1] !== c.grade) err(where, `id grade ${m[1]} ≠ grade ${c.grade}`);
      if (m[2] !== c.subject) err(where, `id subject ${m[2]} ≠ subject ${c.subject}`);
      const expected = `content/${c.grade}/${c.subject}/${m[3]}.js`;
      if (c.file !== expected) err(where, `file should be ${expected}, is ${c.file}`);
    }

    if (!c.file || !fs.existsSync(path.join(ROOT, c.file))) { err(where, `file missing: ${c.file}`); continue; }

    registered = [];
    try {
      load(c.file, School);
    } catch (e) {
      err(where, `failed to load: ${e.message}`);
      continue;
    }
    if (registered.length !== 1) { err(where, `file must call School.register once, called ${registered.length}×`); continue; }
    const item = registered[0];
    if (item.id !== c.id) err(where, `registered id ${item.id} ≠ catalog id`);

    if (c.kind === "lesson") {
      if (!Array.isArray(item.lesson) || !item.lesson.length) err(where, "lesson kind needs a lesson[] array");
      else item.lesson.forEach((b, i) => {
        if (!LESSON_BLOCKS.includes(b.type)) err(`${where} lesson block ${i + 1}`, `unknown block type ${b.type}`);
        if (b.type === "image") imageExists(`${where} lesson block ${i + 1}`, b.src);
      });
    }

    if (!Array.isArray(item.sections) || (!item.sections.length && c.kind !== "lesson")) {
      err(where, "needs sections[]");
      continue;
    }

    const keys = [];
    const sectionIds = new Set();
    item.sections.forEach((s, i) => {
      const w = `${where} § ${s.id || i + 1}`;
      if (sectionIds.has(s.id)) err(w, "duplicate section id");
      sectionIds.add(s.id);
      checkSection(w, s, c.grade, keys);
    });

    if (item.groups) {
      for (const g of Object.keys(item.groups)) {
        const n = item.sections.filter((s) => s.group === g).length;
        if (n < item.groups[g]) err(where, `group ${g} wants ${item.groups[g]} sections, has ${n}`);
      }
    }

    const dup = keys.filter((k, i) => keys.indexOf(k) !== i);
    if (dup.length) warn(where, `${dup.length} duplicate mistake keys, e.g. ${JSON.stringify(dup[0])}`);

    const k = `${c.grade}. třída / ${c.subject} / ${c.kind}`;
    counts[k] = (counts[k] || 0) + 1;
  }

  // Orphan content files
  const listed = new Set(catalog.map((c) => c.file));
  (function walk(dir) {
    for (const f of fs.readdirSync(path.join(ROOT, dir), { withFileTypes: true })) {
      const rel = `${dir}/${f.name}`;
      if (f.isDirectory()) walk(rel);
      else if (f.name.endsWith(".js") && /^content\/\d+\//.test(rel) && !listed.has(rel)) warn(rel, "not in catalog");
    }
  })("content");

  console.log("Obsah:");
  for (const k of Object.keys(counts).sort()) console.log(`  ${k}: ${counts[k]}`);
  if (warnings.length) {
    console.log(`\nVarování (${warnings.length}):`);
    warnings.forEach((w) => console.log("  ⚠ " + w));
  }
  if (errors.length) {
    console.log(`\nChyby (${errors.length}):`);
    errors.forEach((e) => console.log("  ✗ " + e));
  }
  console.log(`\n${catalog.length} položek, ${errors.length} chyb, ${warnings.length} varování.`);
  process.exit(errors.length ? 1 : 0);
}

main();
