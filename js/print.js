/**
 * Printable A4 worksheet for any content item (ported from practice-czech).
 * A fresh random selection is built for every print, with an answer key page.
 */
School.print = (() => {
  const { esc, el, shuffle } = School.util;

  function render(root, content, settings) {
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
