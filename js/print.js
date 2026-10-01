/**
 * Printable A4 worksheet for any content item (ported from practice-czech).
 * A fresh random selection is built for every print, with an answer key page.
 *
 * Content whose sections are all `drill` (generated math examples) prints as
 * full A4 pages of examples in columns instead — see renderDrill.
 */
School.print = (() => {
  const { esc, el, shuffle } = School.util;

  const DRILL_COLS = 3;
  const DRILL_ROWS = 17;

  function render(root, content, settings) {
    if (content.sections.length && content.sections.every((s) => s.drill)) return renderDrill(root, content);
    const run = School.engine.buildRun(content, { mode: "normal", length: settings.length });
    root.innerHTML = "";

    const bar = el("div", "print-toolbar no-print");
    bar.innerHTML =
      `<a class="btn btn-secondary" href="#/run/${encodeURIComponent(content.id)}">← Zpět</a>` +
      '<label class="check-row"><input type="checkbox" id="print-key"> Přidat řešení</label>' +
      '<button class="btn btn-primary" id="print-btn">🖨️ Tisknout</button>';
    root.appendChild(bar);

    const sheet = el("div", "print-sheet");
    sheet.innerHTML =
      `<h1>${esc(content.title)}</h1>` +
      '<div class="print-header">' +
      "<div>Jméno: <span></span></div><div>Datum: <span></span></div>" +
      `<div>Třída: <span>${esc(School.catalog.gradeLabel(content.grade))}</span></div>` +
      "</div>";

    const key = el("div", "print-key");
    key.innerHTML = "<h2>Řešení</h2>";
    const keyList = el("ol", "print-key-list");
    key.appendChild(keyList);

    // Group cards back into sections (keeping run order).
    const bySection = [];
    run.cards.forEach((c) => {
      let g = bySection[bySection.length - 1];
      if (!g || g.s !== c.s || g.passage !== c.passage) {
        g = { s: c.s, passage: c.passage, cards: [] };
        bySection.push(g);
      }
      g.cards.push(c);
    });

    let num = 1;
    bySection.forEach((g) => {
      const section = content.sections[g.s];
      const sec = el("section", "print-section");
      sec.innerHTML = `<h3>${esc(section.title)}</h3>` +
        (section.instructions ? `<p class="print-instr">${esc(section.instructions)}</p>` : "");
      if (g.passage) sec.appendChild(el("div", "print-passage", esc(g.passage).replace(/\n\s*\n/g, "<br><br>")));

      if (section.type === "match") {
        const answers = shuffle(g.cards.map((c) => c.item.answer));
        const cols = el("div", "print-match");
        cols.innerHTML =
          "<ol>" + g.cards.map((c) => `<li>${esc(c.item.prompt)} <span class="print-blank short"></span></li>`).join("") + "</ol>" +
          '<ul class="letters">' + answers.map((a, i) => `<li><b>${String.fromCharCode(65 + i)}</b> ${esc(a)}</li>`).join("") + "</ul>";
        sec.appendChild(cols);
        g.cards.forEach((c) => {
          keyList.appendChild(el("li", "", `${String.fromCharCode(65 + answers.indexOf(c.item.answer))} — ${esc(c.item.answer)}`));
          num++;
        });
      } else {
        g.cards.forEach((c) => {
          sec.appendChild(printItem(c, num, content));
          keyList.appendChild(el("li", "", esc(answerOf(c))));
          num++;
        });
      }
      sheet.appendChild(sec);
    });

    root.appendChild(sheet);
    root.appendChild(key);
    key.hidden = true;

    bar.querySelector("#print-key").addEventListener("change", (e) => { key.hidden = !e.target.checked; });
    bar.querySelector("#print-btn").addEventListener("click", () => window.print());
  }

  // ---------------------------------------------------------------- drill sheets

  /**
   * `count` examples from the chosen sections, taking turns so every section gets its share.
   * An example repeats only once all distinct ones are used (tables share e.g. 5 · 7).
   */
  function pickDrill(sections, count) {
    const pools = sections.map(() => []);
    const distinct = new Set([].concat(...sections.map((s) => s.items.map((it) => it.prompt)))).size;
    const used = new Set();
    const out = [];
    for (let i = 0; out.length < count; i++) {
      const k = i % sections.length;
      if (!pools[k].length) pools[k] = shuffle(sections[k].items);
      const it = pools[k].pop();
      if (used.size >= distinct) used.clear();
      if (used.has(it.prompt)) continue;
      used.add(it.prompt);
      out.push(it);
    }
    return shuffle(out);
  }

  function drillItem(it, num, withAnswer) {
    const fill = withAnswer ? `<b>${esc(it.answer)}</b>` : '<span class="drill-box"></span>';
    return `<div class="drill-item"><span class="drill-num">${num}.</span>` +
      `<span>${esc(it.prompt).replace(/_{2,}/, fill)}</span></div>`;
  }

  function renderDrill(root, content) {
    root.innerHTML = "";
    const bar = el("div", "print-toolbar drill-toolbar no-print");
    bar.innerHTML =
      `<a class="btn btn-secondary" href="#/run/${encodeURIComponent(content.id)}">← Zpět</a>` +
      '<fieldset class="drill-sections"><legend>Příklady</legend>' +
      // Sections are usually difficulty levels, so only the first one is ticked to start with.
      content.sections.map((s, i) =>
        `<label class="check-row"><input type="checkbox" value="${esc(s.id)}"${i ? "" : " checked"}> ${esc(s.icon || "")} ${esc(s.title)}</label>`
      ).join("") + "</fieldset>" +
      '<label>Stránek: <select id="drill-pages">' + [1, 2, 3, 4].map((n) => `<option>${n}</option>`).join("") + "</select></label>" +
      '<button class="btn btn-secondary" id="drill-new">🔄 Jiné příklady</button>' +
      '<label class="check-row"><input type="checkbox" id="print-key"> Přidat řešení</label>' +
      '<button class="btn btn-primary" id="print-btn">🖨️ Tisknout</button>';
    root.appendChild(bar);

    const out = el("div", "drill-out");
    root.appendChild(out);
    const boxes = [...bar.querySelectorAll(".drill-sections input")];
    const pagesSel = bar.querySelector("#drill-pages");
    const keyBox = bar.querySelector("#print-key");

    function build() {
      const chosen = content.sections.filter((s) => boxes.some((b) => b.checked && b.value === s.id));
      out.innerHTML = "";
      if (!chosen.length) {
        out.appendChild(el("p", "muted", "Vyber aspoň jeden druh příkladů."));
        return;
      }
      const perPage = DRILL_COLS * DRILL_ROWS;
      const pages = parseInt(pagesSel.value, 10);
      const items = pickDrill(chosen, perPage * pages);
      const subtitle = chosen.map((s) => esc(s.title)).join(" · ");

      const key = el("div", "print-key drill-key");
      key.innerHTML = "<h2>Řešení</h2>";
      for (let p = 0; p < pages; p++) {
        const slice = items.slice(p * perPage, (p + 1) * perPage);
        const nums = slice.map((_, i) => p * perPage + i + 1);
        const sheet = el("div", "print-sheet drill-page");
        sheet.innerHTML =
          `<h1>${esc(content.title)}</h1>` +
          `<p class="drill-subtitle">${subtitle}</p>` +
          '<div class="print-header">' +
          "<div>Jméno: <span></span></div><div>Datum: <span></span></div>" +
          (pages > 1 ? `<div class="drill-pageno">Strana ${p + 1} z ${pages}</div>` : "") +
          "</div>" +
          '<div class="drill-grid">' + slice.map((it, i) => drillItem(it, nums[i], false)).join("") + "</div>";
        out.appendChild(sheet);
        key.insertAdjacentHTML("beforeend",
          (pages > 1 ? `<h3>Strana ${p + 1}</h3>` : "") +
          '<div class="drill-grid">' + slice.map((it, i) => drillItem(it, nums[i], true)).join("") + "</div>");
      }
      key.hidden = !keyBox.checked;
      out.appendChild(key);
    }

    const fieldset = bar.querySelector(".drill-sections");
    fieldset.insertBefore(School.util.bulkButtons(boxes, build), fieldset.children[1]);
    boxes.forEach((b) => b.addEventListener("change", build));
    pagesSel.addEventListener("change", build);
    bar.querySelector("#drill-new").addEventListener("click", build);
    keyBox.addEventListener("change", () => {
      const key = out.querySelector(".drill-key");
      if (key) key.hidden = !keyBox.checked;
    });
    bar.querySelector("#print-btn").addEventListener("click", () => window.print());
    build();
  }

  function answerOf(c) {
    if (c.type === "spell") return c.item.word;
    if (c.type === "gap-text") return c.item.blanks.map((b, i) => (i + 1) + ") " + b).join(", ");
    return c.item.answer;
  }

  function printItem(c, num, content) {
    const it = c.item;
    const div = el("div", "print-item");
    const n = `<span class="print-num">${num}.</span> `;
    const gap = (s) => esc(s).replace(/_{2,}/g, '<span class="print-blank short"></span>');

    if (c.type === "choice") {
      const listen = it.say ? `<em>(poslech: „${esc(it.say)}“)</em><br>` : "";
      div.innerHTML = n + listen + gap(it.prompt || "") +
        (it.grid ? School.util.gridHtml(it.grid) : "") +
        (it.staff ? School.notation.render(it.staff) : "") +
        '<div class="print-options">' + it.options.map((o, i) => `<span>${String.fromCharCode(97 + i)}) ${esc(o)}</span>`).join("") + "</div>";
    } else if (c.type === "write") {
      div.innerHTML = n + gap(it.prompt) + (/_{2,}/.test(it.prompt) ? "" : '<div class="print-line"></div>');
    } else if (c.type === "spell") {
      div.innerHTML = n + `<em>Diktát:</em> ${esc(it.hint || "")} <span class="print-blank"></span>`;
    } else if (c.type === "order") {
      div.innerHTML = n + it.words.map(esc).join(" &nbsp;/&nbsp; ") + '<div class="print-line"></div>';
    } else if (c.type === "gap-text") {
      div.innerHTML = n + '<div class="print-bank">' + it.wordBank.map(esc).join(" · ") + "</div>" +
        esc(it.text).replace(/\{(\d+)\}/g, '<sup>$1</sup><span class="print-blank"></span>').replace(/\n/g, "<br>");
    }
    return div;
  }

  return { render };
})();
