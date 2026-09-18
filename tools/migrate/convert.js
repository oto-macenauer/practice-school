#!/usr/bin/env node
/**
 * One-off converter: practice-history + practice-english + practice-czech → practice-school content.
 * Kept in the repo for provenance. See docs/PLAN.md §4 (schema) and §8 (inventory).
 *
 * Usage:
 *   node tools/migrate/convert.js [--history DIR] [--english DIR] [--czech DIR]
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.resolve(__dirname, "..", "..");

function arg(name, def) {
  const i = process.argv.indexOf("--" + name);
  return i > -1 ? process.argv[i + 1] : def;
}

const SRC = {
  history: arg("history", "C:/Projects/practice-history"),
  english: arg("english", "C:/Projects/practice-english"),
  czech: arg("czech", "C:/Users/oto/AppData/Local/Temp/claude/C--Projects-practice-history/f1744d18-d663-4b15-a12f-50352c6aa425/scratchpad/practice-czech"),
};

const SUBJECTS = [
  { id: "cestina", name: "Čeština", icon: "📝", color: "#e17055", speechLang: "cs-CZ" },
  { id: "anglictina", name: "Angličtina", icon: "🔤", color: "#0984e3", speechLang: "en-GB" },
  { id: "matematika", name: "Matematika", icon: "🔢", color: "#6c5ce7", speechLang: "cs-CZ" },
  { id: "vlastiveda", name: "Vlastivěda", icon: "🏰", color: "#d4a017", speechLang: "cs-CZ" },
  { id: "prirodoveda", name: "Přírodověda", icon: "🌿", color: "#00b894", speechLang: "cs-CZ" },
];

const catalog = [];
const copiedImages = new Set();

// ---------- helpers ----------

function write(rel, text) {
  const abs = path.join(ROOT, rel);
  fs.mkdirSync(path.dirname(abs), { recursive: true });
  fs.writeFileSync(abs, text, "utf8");
}

function readJSON(p) {
  return JSON.parse(fs.readFileSync(p, "utf8"));
}

function emit(entry, content, source) {
  const file = `content/${entry.grade}/${entry.subject}/${entry.slug}.js`;
  const id = `${entry.grade}-${entry.subject}-${entry.slug}`;
  catalog.push({
    id, grade: entry.grade, subject: entry.subject, kind: entry.kind,
    title: entry.title, description: entry.description, icon: entry.icon, file,
  });
  const body = Object.assign({ id }, content);
  write(file, `// Migrated from ${source}\nSchool.register(${JSON.stringify(body, null, 2)});\n`);
}

function copyImage(srcAbs) {
  const name = path.basename(srcAbs);
  const rel = `content/4/anglictina/img/${name}`;
  if (!copiedImages.has(name)) {
    fs.mkdirSync(path.join(ROOT, "content/4/anglictina/img"), { recursive: true });
    fs.copyFileSync(srcAbs, path.join(ROOT, rel));
    copiedImages.add(name);
  }
  return rel;
}

/** Resolve an english image reference (relative to some page) to a copied content path. */
function englishImage(ref) {
  if (!ref) return undefined;
  const abs = path.join(SRC.english, "images", "topics", path.basename(ref));
  if (!fs.existsSync(abs)) return undefined;
  return copyImage(abs);
}

function clean(obj) {
  for (const k of Object.keys(obj)) if (obj[k] === undefined) delete obj[k];
  return obj;
}

// ---------- history ----------

function convertHistory() {
  const ctx = {};
  vm.createContext(ctx);
  vm.runInContext(fs.readFileSync(path.join(SRC.history, "js/tests/index.js"), "utf8") + "\nthis.TEST_REGISTRY = TEST_REGISTRY;", ctx);
  for (const t of ctx.TEST_REGISTRY) {
    const qctx = {};
    vm.createContext(qctx);
    vm.runInContext(fs.readFileSync(path.join(SRC.history, t.file), "utf8") + "\nthis.QUESTIONS = QUESTIONS;", qctx);
    const items = qctx.QUESTIONS.map((q) => clean({
      prompt: q.question,
      options: q.options.slice(),
      answer: q.options[q.correct],
      explanation: q.explanation || undefined,
    }));
    emit(
      { grade: 4, subject: "vlastiveda", slug: t.id, kind: "test", title: t.title, description: t.description, icon: t.icon },
      { sections: [{ id: "otazky", title: t.title, type: "choice", items }] },
      `practice-history/${t.file}`
    );
  }
}

// ---------- czech ----------

const CZECH_SLUGS = {
  "2026-03-31": "ctvrtletni-2026-03-31",
  "4tr-opakovani": "opakovani",
  "4tr-podstatna-jmena": "podstatna-jmena",
};

function czechChoiceItem(it, prompt) {
  return { prompt, options: it.choices.slice(), answer: it.choices[it.correct] };
}

function convertCzechSection(s, idx) {
  const base = clean({ id: "s" + (idx + 1), title: s.title, instructions: s.instructions, pick: s.pick });
  switch (s.type) {
    case "fill-choice":
      return Object.assign(base, {
        type: "choice",
        items: s.items.map((it) => ({ prompt: it.before + "___" + it.after, options: it.choices.slice(), answer: it.correct })),
      });
    case "syllable-split":
    case "match-pair":
      return Object.assign(base, { type: "choice", items: s.items.map((it) => czechChoiceItem(it, it.word)) });
    case "reading-comprehension":
      return Object.assign(base, {
        type: "choice",
        passages: s.passages.map((p) => ({ passage: p.passage, items: p.items.map((it) => czechChoiceItem(it, it.question)) })),
      });
    case "word-order":
      return Object.assign(base, { type: "order", items: s.items.map((it) => ({ words: it.shuffled.slice(), answer: it.correct })) });
    default:
      throw new Error("Unknown czech section type " + s.type);
  }
}

function convertCzech() {
  const dir = path.join(SRC.czech, "data");
  const ctx = { window: {} };
  vm.createContext(ctx);
  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".js")).sort();
  const fileOf = {};
  for (const f of files) {
    const before = (ctx.window.TESTS || []).length;
    vm.runInContext(fs.readFileSync(path.join(dir, f), "utf8"), ctx);
    for (const t of ctx.window.TESTS.slice(before)) fileOf[t.id] = f;
  }
  for (const t of ctx.window.TESTS) {
    const grade = parseInt(t.grade, 10);
    const slug = CZECH_SLUGS[t.id] || t.id;
    emit(
      {
        grade, subject: "cestina", slug, kind: "test", title: t.title,
        description: t.sections.map((s) => s.title).join(", "), icon: "📝",
      },
      { sections: t.sections.map(convertCzechSection) },
      `practice-czech/data/${fileOf[t.id]}`
    );
  }
}

// ---------- english ----------

/** Parse SECTION_META from a practice-test main.js: { id: {icon, image} }. */
function parseSectionMeta(mainJs) {
  const meta = {};
  const re = /["']?([\w-]+)["']?\s*:\s*\{([^}]*icon:[^}]*)\}/g;
  let m;
  while ((m = re.exec(mainJs))) {
    const icon = m[2].match(/icon:\s*"([^"]+)"/);
    const image = m[2].match(/image:\s*IMG\s*\+\s*"([^"]+)"/);
    meta[m[1]] = { icon: icon && icon[1], image: image ? image[1] : undefined };
  }
  return meta;
}

function englishSection(s, prefix, meta) {
  const m = (meta && meta[s.id]) || {};
  const base = clean({
    id: (prefix ? prefix + "-" : "") + s.id,
    title: s.title,
    icon: s.icon || m.icon,
    image: englishImage(s.image || m.image),
    instructions: s.instructions,
  });
  switch (s.type) {
    case "fill-choice":
      return Object.assign(base, {
        type: "choice", pick: "auto",
        items: s.questions.map((q) => clean({ prompt: q.sentence || q.question, options: q.options.slice(), answer: q.answer, explanation: q.explanation })),
      });
    case "reading":
      return Object.assign(base, {
        type: "choice", pick: "auto", passage: s.passage,
        items: s.questions.map((q) => clean({ prompt: q.question || q.sentence, options: q.options.slice(), answer: q.answer, explanation: q.explanation })),
      });
    case "listen-comprehension":
      return Object.assign(base, {
        type: "choice", pick: "auto",
        items: s.questions.map((q) => clean({ prompt: q.question, say: q.sentence, options: q.options.slice(), answer: q.answer, explanation: q.explanation })),
      });
    case "match":
      return Object.assign(base, { type: "match", pick: "auto", items: s.pairs.map((p) => ({ prompt: p.prompt, answer: p.answer })) });
    case "fill-write":
      return Object.assign(base, {
        type: "write", pick: "auto",
        items: s.questions.map((q) => clean({ prompt: q.sentence || q.question, answer: q.answer, accept: q.accept, explanation: q.explanation })),
      });
    case "spell":
      return Object.assign(base, { type: "spell", pick: "auto", items: s.words.map((w) => clean({ word: w.word, hint: w.hint })) });
    case "gap-fill":
      return Object.assign(base, { type: "gap-text", text: s.text, wordBank: s.wordBank.slice(), blanks: s.blanks.slice() });
    default:
      throw new Error("Unknown english section type " + s.type);
  }
}

function convertEnglishTests() {
  const dir = path.join(SRC.english, "modules/practice-tests");
  const tests = fs.readdirSync(dir).filter((d) => fs.existsSync(path.join(dir, d, "data.json"))).sort();
  for (const t of tests) {
    const data = readJSON(path.join(dir, t, "data.json"));
    const mainPath = path.join(dir, t, "main.js");
    const meta = fs.existsSync(mainPath) ? parseSectionMeta(fs.readFileSync(mainPath, "utf8")) : {};
    const sections = data.sections.map((s) => englishSection(s, "", meta));
    const readingCount = data.sections.filter((s) => s.type === "reading").length;
    const content = {};
    if (readingCount > 2) {
      data.sections.forEach((s, i) => { if (s.type === "reading") sections[i].group = "reading"; });
      content.groups = { reading: 2 };
    }
    content.sections = sections;
    const unit = t.match(/^unit(\d+)$/);
    const title = unit ? `Unit ${unit[1]} – test` : t === "review5-9" ? "Opakování Unit 5–9 – test" : data.title;
    emit(
      {
        grade: 4, subject: "anglictina", slug: t + "-test", kind: "test", title,
        description: data.sections.map((s) => s.title).join(", "), icon: "📘",
      },
      content,
      `practice-english/modules/practice-tests/${t}/data.json`
    );
  }
}

const MODULES = [
  { dir: "vocabulary", prefix: "vocab" },
  { dir: "grammar", prefix: "grammar" },
  { dir: "reading", prefix: "reading" },
  { dir: "listening", prefix: "listening" },
  { dir: "spelling", prefix: "spelling" },
];

function convertEnglishPractice() {
  const byUnit = {};
  for (const mod of MODULES) {
    const data = readJSON(path.join(SRC.english, "modules", mod.dir, "data.json"));
    for (const u of data.units) {
      (byUnit[u.id] = byUnit[u.id] || []).push(...u.sections.map((s) => englishSection(s, mod.prefix, null)));
    }
  }
  for (const unitId of Object.keys(byUnit).sort()) {
    const n = unitId.replace("unit", "");
    const sections = byUnit[unitId];
    emit(
      {
        grade: 4, subject: "anglictina", slug: unitId + "-procvicovani", kind: "practice",
        title: `Unit ${n} – procvičování`,
        description: "Slovíčka, gramatika, čtení, poslech a psaní slovíček",
        icon: "🎯",
      },
      { sections },
      MODULES.map((m) => `practice-english/modules/${m.dir}/data.json`).join(", ") + ` (${unitId})`
    );
  }
}

function copyIcons() {
  const dir = path.join(SRC.english, "images/icons");
  fs.mkdirSync(path.join(ROOT, "images/icons"), { recursive: true });
  for (const f of fs.readdirSync(dir)) fs.copyFileSync(path.join(dir, f), path.join(ROOT, "images/icons", f));
}

// ---------- main ----------

convertCzech();
convertHistory();
convertEnglishTests();
convertEnglishPractice();
copyIcons();

catalog.sort((a, b) => a.grade - b.grade || a.subject.localeCompare(b.subject) || a.id.localeCompare(b.id));

write("content/subjects.js", `// Subject definitions. Order = display order.\nSchool.SUBJECTS = ${JSON.stringify(SUBJECTS, null, 2)};\n`);
write("content/catalog.js", `// Metadata for every content item. The dashboard reads only this file;\n// item files are loaded on demand. Validate with: node tools/validate.js\nSchool.CATALOG = ${JSON.stringify(catalog, null, 2)};\n`);

console.log(`Wrote ${catalog.length} items, ${copiedImages.size} images.`);
