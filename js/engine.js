/**
 * Question engine: turns a content item into a serializable "run"
 * (list of cards), renders cards one by one with instant feedback,
 * persists state after every answer and reports results.
 *
 * Section types: choice, match, write, spell, order, gap-text (see docs/PLAN.md §4).
 */
School.engine = (() => {
  const { shuffle, esc, el, normalize, sameSentence, speakButton, plural } = School.util;

  const XP_CORRECT = 10;
  const XP_STREAK_BONUS = 5;
  const MATCH_OPTIONS = 4;

  // ---------------------------------------------------------------- keys

  /**
   * Stable key for mistake tracking (docs/PLAN.md §4): "<sectionId>|<text>".
   * Section prefix keeps identical prompts in different sections apart.
   */
  function itemKey(section, item) {
    let base = item.prompt;
    if (section.type === "spell") base = item.word;
    else if (section.type === "order") base = item.answer;
    return section.id + "|" + base;
  }

  function gapKey(section, n) {
    return section.id + "|#" + n;
  }

  // ---------------------------------------------------------------- building a run

  function resolvePick(section, length) {
    if (section.pick === "auto") return length;
    if (typeof section.pick === "number") return section.pick;
    return Infinity;
  }

  /** Apply `groups` (e.g. {reading: 2}) — keep only N random sections of each group. */
  function selectSections(content, sectionIds) {
    let sections = content.sections.map((s, i) => Object.assign({ _idx: i }, s));
    if (sectionIds && sectionIds.length) {
      sections = sections.filter((s) => sectionIds.indexOf(s.id) !== -1);
    }
    const groups = content.groups || {};
    Object.keys(groups).forEach((g) => {
      const inGroup = sections.filter((s) => s.group === g);
      if (inGroup.length <= groups[g]) return;
      const keep = shuffle(inGroup).slice(0, groups[g]).map((s) => s._idx);
      sections = sections.filter((s) => s.group !== g || keep.indexOf(s._idx) !== -1);
    });
    return sections;
  }

  function prepareCard(section, item, passage, allItems) {
    const card = {
      s: section._idx,
      type: section.type,
      key: itemKey(section, item),
      points: 1,
      item: Object.assign({}, item)
    };
    if (passage) card.passage = passage;

    if (section.type === "choice") {
      card.item.options = shuffle(item.options);
    } else if (section.type === "match") {
      const others = [];
      shuffle(allItems).forEach((o) => {
        if (o.answer !== item.answer && others.indexOf(o.answer) === -1) others.push(o.answer);
      });
      card.item.options = shuffle([item.answer].concat(others.slice(0, MATCH_OPTIONS - 1)));
    } else if (section.type === "order") {
      card.item.words = shuffle(item.words);
    }
    return card;
  }

  function gapCard(section) {
    return {
      s: section._idx,
      type: "gap-text",
      key: gapKey(section, 1),
      keys: section.blanks.map((_, i) => gapKey(section, i + 1)),
      points: section.blanks.length,
      item: { text: section.text, wordBank: shuffle(section.wordBank), blanks: section.blanks }
    };
  }

  /**
   * opts: { mode: "normal"|"mistakes", mistakes: [key], length: 3|5|10, sectionIds?: [id] }
   */
  function buildRun(content, opts) {
    const mistakesMode = opts.mode === "mistakes";
    const mistakeSet = {};
    (opts.mistakes || []).forEach((k) => { mistakeSet[k] = true; });

    const sections = mistakesMode
      ? content.sections.map((s, i) => Object.assign({ _idx: i }, s))
      : selectSections(content, opts.sectionIds);

    let cards = [];
    sections.forEach((section) => {
      if (section.type === "gap-text") {
        const card = gapCard(section);
        if (!mistakesMode || card.keys.some((k) => mistakeSet[k])) cards.push(card);
        return;
      }

      // Reading sections may hold several passages; normally pick one.
      let chunks;
      if (section.passages) {
        chunks = mistakesMode
          ? section.passages
          : [section.passages[Math.floor(Math.random() * section.passages.length)]];
      } else {
        chunks = [{ passage: section.passage, items: section.items }];
      }

      chunks.forEach((chunk) => {
        let items = chunk.items || [];
        if (mistakesMode) {
          items = items.filter((it) => mistakeSet[itemKey(section, it)]);
        } else {
          items = shuffle(items).slice(0, resolvePick(section, opts.length || 5));
        }
        items.forEach((it) => cards.push(prepareCard(section, it, chunk.passage, section.items || chunk.items)));
      });
    });

    return {
      contentId: content.id,
      mode: opts.mode || "normal",
      cards,
      current: 0,
      answered: false,
      score: 0,
      total: cards.reduce((n, c) => n + c.points, 0),
      streak: 0,
      bestStreak: 0,
      xp: 0,
      mistakes: [],
      fixed: [],
      perSection: {},
      version: 1
    };
  }

  // ---------------------------------------------------------------- grading helpers

  function schoolGrade(pct) {
    if (pct >= 90) return 1;
    if (pct >= 75) return 2;
    if (pct >= 60) return 3;
    if (pct >= 30) return 4;
    return 5;
  }

  const GRADE_LABELS = { 1: "výborně", 2: "chvalitebně", 3: "dobře", 4: "dostatečně", 5: "nedostatečně" };

  function stars(pct) {
    return pct >= 90 ? 3 : pct >= 70 ? 2 : pct >= 40 ? 1 : 0;
  }

  function starString(n) {
    return "★★★".slice(0, n) + "☆☆☆".slice(0, 3 - n);
  }

  // ---------------------------------------------------------------- runner

  /**
   * Start or resume a run inside `root`.
   * ctx: { content, profile, settings, mode, young, onExit() }
   */
  async function start(root, ctx) {
    const { content, profile } = ctx;
    const Store = School.Store;
    const mode = ctx.mode || "normal";

    const saved = await Store.getSession(profile.id, content.id, mode);
    if (saved && saved.version === 1 && saved.cards && saved.current < saved.cards.length) {
      return run(root, ctx, saved);
    }
    await Store.clearSession(profile.id, content.id, mode);

    if (mode === "mistakes") {
      const progress = await Store.getProgress(profile.id);
      const entry = progress.items[content.id];
      const state = buildRun(content, { mode, mistakes: entry ? entry.mistakes : [] });
      if (!state.cards.length) return renderNoMistakes(root, ctx);
      return run(root, ctx, state);
    }

    renderIntro(root, ctx);
  }

  function renderIntro(root, ctx) {
    const { content, settings } = ctx;
    const hasAuto = content.sections.some((s) => s.pick === "auto");
    const pickSections = content.kind === "practice" && content.sections.length > 1;

    root.innerHTML = "";
    const card = el("div", "intro-card");
    card.innerHTML =
      `<div class="intro-icon">${esc(content.icon || "📝")}</div>` +
      `<h2>${esc(content.title)}</h2>` +
      (content.description ? `<p class="muted">${esc(content.description)}</p>` : "");

    let checkboxes = [];
    if (pickSections) {
      const box = el("fieldset", "section-picker");
      box.innerHTML = "<legend>Co chceš procvičit?</legend>";
      content.sections.forEach((s) => {
        const label = el("label", "check-row");
        label.innerHTML = `<input type="checkbox" value="${esc(s.id)}" checked> <span>${esc(s.icon || "•")} ${esc(s.title)}</span>`;
        box.appendChild(label);
        checkboxes.push(label.querySelector("input"));
      });
      card.appendChild(box);
    }

    let length = settings.length;
    if (hasAuto) {
      const lens = el("div", "length-picker");
      lens.innerHTML = '<span class="muted">Počet otázek v každé části:</span>';
      [[3, "Krátce"], [5, "Středně"], [10, "Dlouze"]].forEach(([n, label]) => {
        const b = el("button", "chip" + (n === length ? " active" : ""), `${label} (${n})`);
        b.type = "button";
        b.dataset.len = n;
        b.addEventListener("click", () => {
          length = n;
          lens.querySelectorAll(".chip").forEach((c) => c.classList.toggle("active", c === b));
        });
        lens.appendChild(b);
      });
      card.appendChild(lens);
    }

    const actions = el("div", "intro-actions");
    const startBtn = el("button", "btn btn-primary btn-big", "Začít");
    startBtn.id = "start-btn";
    startBtn.addEventListener("click", async () => {
      const sectionIds = checkboxes.filter((c) => c.checked).map((c) => c.value);
      if (pickSections && !sectionIds.length) {
        startBtn.textContent = "Vyber aspoň jednu část";
        return;
      }
      if (hasAuto && length !== settings.length) {
        settings.length = length;
        await School.Store.saveSettings(ctx.profile.id, settings);
      }
      const state = buildRun(content, { mode: "normal", length, sectionIds });
      run(root, ctx, state);
    });
    actions.appendChild(startBtn);
    const printLink = el("a", "btn btn-secondary", "🖨️ Vytisknout");
    printLink.href = "#/print/" + encodeURIComponent(content.id);
    actions.appendChild(printLink);
    card.appendChild(actions);
    root.appendChild(card);
  }

  function renderNoMistakes(root, ctx) {
    root.innerHTML =
      '<div class="results-card">' +
      '<div class="results-emoji">🎉</div>' +
      "<h2>Žádné chyby k procvičení!</h2>" +
      '<p class="muted">Buď jsi všechno zvládl/a, nebo jsi tohle ještě nezkoušel/a.</p>' +
      `<div class="results-buttons"><a class="btn btn-primary" href="#/run/${encodeURIComponent(ctx.content.id)}">Spustit celé</a></div>` +
      "</div>";
  }

  /** Main loop over cards. `state` is mutated and persisted after each answer. */
  function run(root, ctx, state) {
    const { content, profile } = ctx;
    const Store = School.Store;
    const lang = content.subjectInfo.speechLang;
    const young = ctx.young;
    const mistakesMode = state.mode === "mistakes";

    const persist = () => Store.saveSession(profile.id, content.id, state.mode, state);

    if (state.answered) {
      state.current++;
      state.answered = false;
    }
    if (state.current >= state.cards.length) return finish();
    persist();
    renderCard();

    function renderCard() {
      const card = state.cards[state.current];
      const section = content.sections[card.s];
      const n = state.cards.length;

      root.innerHTML = "";

      const toolbar = el("div", "run-toolbar");
      toolbar.innerHTML =
        `<span class="progress-text">Otázka ${state.current + 1} z ${n}` +
        (mistakesMode ? ' <span class="tag tag-warn">Oprava chyb</span>' : "") + "</span>";
      const restart = el("button", "btn btn-small btn-ghost", "Začít znovu");
      restart.id = "restart-btn";
      restart.addEventListener("click", async () => {
        await Store.clearSession(profile.id, content.id, state.mode);
        start(root, ctx);
      });
      toolbar.appendChild(restart);
      root.appendChild(toolbar);

      root.appendChild(el("div", "progress", `<div class="progress-fill" style="width:${(state.current / n) * 100}%"></div>`));

      const hud = el("div", "hud");
      hud.innerHTML = young
        ? `<div class="hud-item"><span class="hud-label">Hvězdičky</span><span class="hud-value" id="hud-score">⭐ ${state.score}</span></div>`
        : `<div class="hud-item"><span class="hud-label">XP</span><span class="hud-value" id="hud-xp">${state.xp}</span></div>` +
          `<div class="hud-item"><span class="hud-label">Správně</span><span class="hud-value" id="hud-score">${state.score}</span></div>` +
          `<div class="hud-item"><span class="hud-label">Série</span><span class="hud-value" id="hud-streak">${state.streak}</span></div>`;
      root.appendChild(hud);

      const qc = el("div", "question-card");
      qc.dataset.type = card.type;
      const head = el("div", "section-head");
      head.innerHTML = `<span class="section-icon">${esc(section.icon || content.subjectInfo.icon)}</span><span>${esc(section.title)}</span>`;
      qc.appendChild(head);
      if (section.instructions) qc.appendChild(el("p", "instructions", esc(section.instructions)));
      if (section.image) {
        const img = el("img", "section-img");
        img.src = section.image;
        img.alt = "";
        img.loading = "lazy";
        qc.appendChild(img);
      }
      if (card.passage) {
        const det = el("details", "passage");
        det.open = true;
        det.innerHTML = "<summary>Text ke čtení</summary>" +
          String(card.passage).split(/\n\s*\n/).map((p) => `<p>${esc(p)}</p>`).join("");
        qc.appendChild(det);
      }

      const body = el("div", "question-body");
      qc.appendChild(body);
      const feedback = el("div", "feedback");
      feedback.id = "feedback";
      qc.appendChild(feedback);
      root.appendChild(qc);

      const next = el("button", "btn btn-primary btn-big next-btn", state.current < n - 1 ? "Další otázka →" : "Zobrazit výsledky");
      next.id = "next-btn";
      next.hidden = true;
      next.addEventListener("click", () => {
        state.current++;
        state.answered = false;
        persist();
        if (state.current < state.cards.length) {
          renderCard();
          window.scrollTo(0, 0);
        } else {
          finish();
        }
      });
      root.appendChild(next);

      RENDERERS[card.type](body, card, { lang, young, section, done });

      /** Called by renderers with points earned (0..card.points) and a correct-answer text. */
      function done(points, correctText) {
        if (state.answered) return;
        state.answered = true;
        const allRight = points === card.points;
        const ps = state.perSection[card.s] || { correct: 0, total: 0 };
        ps.correct += points;
        ps.total += card.points;
        state.perSection[card.s] = ps;
        state.score += points;

        const keys = card.keys || [card.key];
        if (allRight) {
          state.streak++;
          if (state.streak > state.bestStreak) state.bestStreak = state.streak;
          const gained = points * XP_CORRECT + (state.streak > 1 ? state.streak * XP_STREAK_BONUS : 0);
          state.xp += gained;
          Store.addXp(profile.id, content.id, gained);
          popup(qc, young ? "⭐" : "+" + gained + " XP");
          if (mistakesMode) keys.forEach((k) => { state.fixed.push(k); Store.removeMistake(profile.id, content.id, k); });
        } else {
          state.streak = 0;
          const wrongKeys = card.keys ? card.wrongKeys || keys : keys;
          wrongKeys.forEach((k) => {
            if (state.mistakes.indexOf(k) === -1) state.mistakes.push(k);
            Store.addMistake(profile.id, content.id, k);
          });
        }

        feedback.className = "feedback visible " + (allRight ? "ok" : "fail");
        let html = allRight
          ? `<strong>${young ? "Výborně! 🎉" : "Správně!"}</strong>`
          : `<strong>${points ? "Částečně správně." : "Chyba."}</strong>` +
            (correctText ? ` Správně je: <span class="correct-answer">${esc(correctText)}</span>` : "");
        if (card.item.explanation) html += `<div class="explanation">${esc(card.item.explanation)}</div>`;
        feedback.innerHTML = html;

        const hx = document.getElementById("hud-xp");
        const hs = document.getElementById("hud-score");
        const hst = document.getElementById("hud-streak");
        if (hx) hx.textContent = state.xp;
        if (hs) hs.textContent = young ? "⭐ " + state.score : state.score;
        if (hst) hst.textContent = state.streak;

        next.hidden = false;
        next.focus({ preventScroll: true });
        persist();
      }
    }

    async function finish() {
      await Store.clearSession(profile.id, content.id, state.mode);
      const pct = state.total ? Math.round((state.score / state.total) * 100) : 0;
      const grade = content.kind === "test" && !mistakesMode ? schoolGrade(pct) : null;
      await Store.recordRun(profile.id, content.id, {
        score: state.score, total: state.total, mistakes: state.mistakes, grade, mode: state.mode
      });
      renderResults(root, ctx, state, pct, grade);
    }
  }

  function popup(anchor, text) {
    const p = el("div", "xp-popup", esc(text));
    anchor.appendChild(p);
    setTimeout(() => p.remove(), 900);
  }

  function renderResults(root, ctx, state, pct, grade) {
    const { content } = ctx;
    const s = stars(pct);
    const msg = pct === 100 ? ["🏆", "Výborně! Máš všechno správně!"]
      : pct >= 80 ? ["⭐", "Skvělá práce! Jen pár chybiček."]
      : pct >= 60 ? ["👍", "Dobrá práce, zkus to ještě jednou!"]
      : pct >= 40 ? ["💪", "Ještě je co zlepšovat. Nevzdávej to!"]
      : ["📖", "Zkus si učivo projít a pak to zkus znovu."];

    let rows = "";
    Object.keys(state.perSection).forEach((idx) => {
      const ps = state.perSection[idx];
      const sec = content.sections[idx];
      rows += `<div class="result-row"><span>${esc(sec.icon || "")} ${esc(sec.title)}</span><span class="result-row-score">${ps.correct} / ${ps.total}</span></div>`;
    });

    const mistakesLeft = state.mode === "mistakes"
      ? state.mistakes.filter((k) => state.fixed.indexOf(k) === -1).length
      : state.mistakes.length;
    const id = encodeURIComponent(content.id);

    root.innerHTML =
      '<div class="results-card" id="results">' +
      `<div class="results-emoji">${msg[0]}</div>` +
      "<h2>Výsledky</h2>" +
      `<div class="results-stars" aria-label="${s} ${plural(s, "hvězdička", "hvězdičky", "hvězdiček")}">${starString(s)}</div>` +
      `<div class="results-score">${state.score} / ${state.total}</div>` +
      `<div class="results-pct">${pct} %</div>` +
      (grade ? `<div class="results-grade grade-${grade}"><span class="grade-number">${grade}</span> ${GRADE_LABELS[grade]}</div>` : "") +
      (ctx.young ? "" : `<div class="results-xp">+${state.xp} XP</div>`) +
      (state.bestStreak >= 2 ? `<div class="muted">Nejdelší série: ${state.bestStreak}×</div>` : "") +
      `<p class="results-message">${msg[1]}</p>` +
      (rows && Object.keys(state.perSection).length > 1 ? `<div class="result-rows">${rows}</div>` : "") +
      '<div class="results-buttons">' +
      `<button class="btn btn-primary" id="again-btn">Zkusit znovu</button>` +
      (mistakesLeft ? `<a class="btn btn-warning" href="#/run/${id}/mistakes">Procvičit chyby (${mistakesLeft})</a>` : "") +
      `<a class="btn btn-secondary" href="#/g/${content.grade}/${content.subject}">Zpět</a>` +
      "</div></div>";

    root.querySelector("#again-btn").addEventListener("click", () => {
      if (state.mode === "mistakes") location.hash = "#/run/" + id;
      else start(root, Object.assign({}, ctx, { mode: "normal" }));
    });
  }

  // ---------------------------------------------------------------- renderers

  function promptHtml(text) {
    // "___" marks the gap in a sentence (czech i/y, english fill-in).
    return esc(text).replace(/_{2,}/g, '<span class="gap">___</span>');
  }

  function addPrompt(body, text, opts) {
    if (!text) return;
    const row = el("div", "prompt-row");
    row.appendChild(el("div", "prompt", promptHtml(text)));
    if (opts.young && !/_{2,}/.test(text)) row.appendChild(speakButton(text, opts.lang, "Přečíst"));
    body.appendChild(row);
  }

  function fillGap(body, value) {
    const gap = body.querySelector(".gap");
    if (gap) gap.textContent = value;
  }

  function renderOptionButtons(body, options, answer, done) {
    const box = el("div", "answers");
    options.forEach((opt) => {
      const b = el("button", "answer-btn", esc(opt));
      b.type = "button";
      b.addEventListener("click", () => {
        box.querySelectorAll(".answer-btn").forEach((x) => {
          x.disabled = true;
          if (x.textContent === answer) x.classList.add("correct");
        });
        const right = opt === answer;
        if (!right) b.classList.add("incorrect");
        fillGap(body, answer);
        done(right ? 1 : 0, answer);
      });
      box.appendChild(b);
    });
    body.appendChild(box);
  }

  function renderTextInput(body, check, done, placeholder) {
    const form = el("form", "write-form");
    form.innerHTML =
      `<input type="text" class="write-input" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="${esc(placeholder)}">` +
      '<button type="submit" class="btn btn-primary">Zkontrolovat</button>';
    const input = form.querySelector("input");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!input.value.trim()) { input.focus(); return; }
      const res = check(input.value);
      input.disabled = true;
      form.querySelector("button").disabled = true;
      input.classList.add(res.ok ? "correct" : "incorrect");
      done(res.ok ? 1 : 0, res.ok ? "" : res.answer);
    });
    body.appendChild(form);
    setTimeout(() => input.focus({ preventScroll: true }), 0);
  }

  const RENDERERS = {
    choice(body, card, opts) {
      const it = card.item;
      if (it.say) {
        const row = el("div", "listen-row");
        row.appendChild(speakButton(it.say, opts.lang, "Poslechni si"));
        body.appendChild(row);
      }
      addPrompt(body, it.prompt, opts);
      renderOptionButtons(body, it.options, it.answer, opts.done);
    },

    match(body, card, opts) {
      addPrompt(body, card.item.prompt, opts);
      renderOptionButtons(body, card.item.options, card.item.answer, opts.done);
    },

    write(body, card, opts) {
      const it = card.item;
      addPrompt(body, it.prompt, opts);
      renderTextInput(body, (val) => {
        const accepted = [it.answer].concat(it.accept || []);
        return { ok: accepted.some((a) => normalize(a) === normalize(val)), answer: it.answer };
      }, opts.done, "Napiš odpověď…");
    },

    spell(body, card, opts) {
      const it = card.item;
      const row = el("div", "listen-row");
      row.appendChild(speakButton(it.word, opts.lang, "Poslechni si slovo"));
      body.appendChild(row);
      if (it.hint) body.appendChild(el("p", "hint", "💡 " + esc(it.hint)));
      renderTextInput(body, (val) => ({ ok: normalize(val) === normalize(it.word), answer: it.word }), opts.done, "Napiš slovo…");
    },

    order(body, card, opts) {
      const it = card.item;
      const placed = []; // indexes into it.words
      body.appendChild(el("div", "word-label", "Tvoje věta:"));
      const answerArea = el("div", "word-answer");
      body.appendChild(answerArea);
      body.appendChild(el("div", "word-label", "Slova:"));
      const bank = el("div", "word-bank");
      body.appendChild(bank);
      const check = el("button", "btn btn-primary", "Zkontrolovat");
      check.type = "button";
      check.disabled = true;
      body.appendChild(check);
      let locked = false;

      function draw() {
        answerArea.innerHTML = "";
        bank.innerHTML = "";
        placed.forEach((wi, pos) => {
          const chip = el("button", "word-chip in-answer", esc(it.words[wi]));
          chip.type = "button";
          chip.disabled = locked;
          chip.addEventListener("click", () => { placed.splice(pos, 1); draw(); });
          answerArea.appendChild(chip);
        });
        it.words.forEach((w, wi) => {
          const used = placed.indexOf(wi) !== -1;
          const chip = el("button", "word-chip" + (used ? " placed" : ""), esc(w));
          chip.type = "button";
          chip.disabled = used || locked;
          chip.addEventListener("click", () => { placed.push(wi); draw(); });
          bank.appendChild(chip);
        });
        check.disabled = locked || placed.length !== it.words.length;
      }

      check.addEventListener("click", () => {
        locked = true;
        const built = placed.map((i) => it.words[i]).join(" ");
        const ok = sameSentence(built, it.answer);
        answerArea.classList.add(ok ? "correct" : "incorrect");
        draw();
        check.hidden = true;
        opts.done(ok ? 1 : 0, it.answer);
      });
      draw();
    },

    "gap-text"(body, card, opts) {
      const it = card.item;
      const wrap = el("div", "gap-text");
      const selects = [];
      it.text.split(/\{(\d+)\}/).forEach((part, i) => {
        if (i % 2 === 0) {
          part.split("\n").forEach((line, li) => {
            if (li > 0) wrap.appendChild(document.createElement("br"));
            wrap.appendChild(document.createTextNode(line));
          });
        } else {
          const sel = el("select", "gap-select");
          sel.dataset.blank = part;
          sel.innerHTML = '<option value="">…</option>' + it.wordBank.map((w) => `<option value="${esc(w)}">${esc(w)}</option>`).join("");
          selects.push(sel);
          wrap.appendChild(sel);
        }
      });
      body.appendChild(wrap);
      const check = el("button", "btn btn-primary", "Zkontrolovat");
      check.type = "button";
      body.appendChild(check);
      check.addEventListener("click", () => {
        let points = 0;
        card.wrongKeys = [];
        selects.forEach((sel) => {
          const n = parseInt(sel.dataset.blank, 10);
          const ok = normalize(sel.value) === normalize(it.blanks[n - 1]);
          if (ok) points++;
          else card.wrongKeys.push(card.keys[n - 1]);
          sel.disabled = true;
          sel.classList.add(ok ? "correct" : "incorrect");
          if (!ok) sel.title = "Správně: " + it.blanks[n - 1];
        });
        check.hidden = true;
        const missed = selects
          .filter((s) => s.classList.contains("incorrect"))
          .map((s) => s.dataset.blank + ") " + it.blanks[parseInt(s.dataset.blank, 10) - 1]);
        opts.done(points, missed.join(", "));
      });
    }
  };

  return { start, buildRun, itemKey, gapKey, schoolGrade, stars, starString, TYPES: Object.keys(RENDERERS) };
})();
