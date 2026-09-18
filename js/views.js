/**
 * Page views. Each view renders into #view and returns nothing;
 * the router (app.js) decides which one to call.
 */
School.views = (() => {
  const { esc, el, plural } = School.util;
  const Store = School.Store;
  const catalog = School.catalog;

  const AVATARS = ["🦊", "🐼", "🐸", "🦄", "🐯", "🐙", "🦖", "🐧", "🐝", "🚀", "⚽", "🎨"];
  const XP_PER_LEVEL = 500;

  function view() {
    return document.getElementById("view");
  }

  function setTitle(t) {
    document.title = t ? t + " — Procvičování" : "Procvičování";
  }

  async function activeProfile() {
    const id = Store.getActiveProfileId();
    return id ? Store.getProfile(id) : null;
  }

  /** Header chip + young-mode switch. */
  function applyProfile(profile) {
    document.body.classList.toggle("young", !!profile && profile.grade <= 3);
    const chip = document.getElementById("profile-chip");
    if (!chip) return;
    chip.innerHTML = profile
      ? `<span class="avatar">${esc(profile.avatar)}</span><span class="chip-name">${esc(profile.name)}</span><span class="chip-grade">${profile.grade}.</span>`
      : "Vybrat profil";
  }

  function empty(msg) {
    return `<div class="empty">${msg}</div>`;
  }

  // ---------------------------------------------------------------- profiles

  async function profiles() {
    setTitle("Kdo procvičuje?");
    const list = await Store.listProfiles();
    const root = view();
    root.innerHTML = '<h1 class="page-title">Kdo bude procvičovat?</h1>';

    const grid = el("div", "profile-grid");
    list.forEach((p) => {
      const b = el("button", "profile-card");
      b.type = "button";
      b.dataset.id = p.id;
      b.innerHTML = `<span class="profile-avatar">${esc(p.avatar)}</span><span class="profile-name">${esc(p.name)}</span><span class="muted">${catalog.gradeLabel(p.grade)}</span>`;
      b.addEventListener("click", () => {
        Store.setActiveProfileId(p.id);
        location.hash = "#/";
      });
      grid.appendChild(b);
    });
    const add = el("button", "profile-card profile-add", '<span class="profile-avatar">＋</span><span class="profile-name">Přidat profil</span>');
    add.type = "button";
    add.id = "add-profile";
    add.addEventListener("click", () => profileForm(root, null));
    grid.appendChild(add);
    root.appendChild(grid);

    if (!list.length) profileForm(root, null);
  }

  /** Create (profile = null) or edit a profile. */
  function profileForm(root, profile) {
    const existing = root.querySelector(".profile-form");
    if (existing) existing.remove();

    const p = profile || { name: "", grade: 3, avatar: AVATARS[0] };
    const form = el("form", "profile-form card");
    form.innerHTML =
      `<h2>${profile ? "Upravit profil" : "Nový profil"}</h2>` +
      `<label>Jméno <input name="name" required maxlength="20" value="${esc(p.name)}" autocomplete="off"></label>` +
      '<label>Třída <select name="grade">' +
      [1, 2, 3, 4, 5, 6, 7, 8, 9].map((g) => `<option value="${g}"${g === p.grade ? " selected" : ""}>${catalog.gradeLabel(g)}</option>`).join("") +
      "</select></label>" +
      '<div class="avatar-pick" role="radiogroup" aria-label="Obrázek">' +
      AVATARS.map((a) => `<label><input type="radio" name="avatar" value="${a}"${a === p.avatar ? " checked" : ""}><span>${a}</span></label>`).join("") +
      "</div>" +
      `<button class="btn btn-primary" type="submit">${profile ? "Uložit" : "Vytvořit"}</button>`;
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const saved = await Store.saveProfile(Object.assign({}, profile || {}, {
        name: String(data.get("name")).trim(),
        grade: parseInt(data.get("grade"), 10),
        avatar: data.get("avatar") || AVATARS[0]
      }));
      Store.setActiveProfileId(saved.id);
      location.hash = "#/";
    });
    root.appendChild(form);
    form.querySelector("input[name=name]").focus();
  }

  // ---------------------------------------------------------------- home

  async function home(profile, grade) {
    const root = view();
    const own = grade === profile.grade;
    setTitle(catalog.gradeLabel(grade));
    const progress = await Store.getProgress(profile.id);
    const young = profile.grade <= 3;

    let html = "";
    if (own) {
      const level = Math.floor(progress.xp / XP_PER_LEVEL) + 1;
      const inLevel = progress.xp % XP_PER_LEVEL;
      html += `<div class="hello card"><div><h1>Ahoj, ${esc(profile.name)}! ${esc(profile.avatar)}</h1>` +
        `<p class="muted">${catalog.gradeLabel(grade)} · co si dnes procvičíme?</p></div>` +
        (young
          ? ""
          : `<div class="level"><div class="level-num">Úroveň ${level}</div><div class="progress small"><div class="progress-fill" style="width:${(inLevel / XP_PER_LEVEL) * 100}%"></div></div><div class="muted">${progress.xp} XP</div></div>`) +
        "</div>";
    } else {
      html += `<h1 class="page-title">${catalog.gradeLabel(grade)} <span class="tag">opakování</span></h1>`;
    }
    root.innerHTML = html;

    // Unfinished runs
    if (own) {
      const sessions = (await Store.listSessions(profile.id)).filter((s) => catalog.get(s.contentId));
      if (sessions.length) {
        const box = el("div", "continue card");
        box.innerHTML = "<h2>Rozdělané</h2>";
        sessions.forEach((s) => {
          const c = catalog.get(s.contentId);
          const a = el("a", "continue-link", `${esc(c.icon)} ${esc(c.title)}${s.mode === "mistakes" ? " — oprava chyb" : ""} <span>Pokračovat →</span>`);
          a.href = "#/run/" + encodeURIComponent(c.id) + (s.mode === "mistakes" ? "/mistakes" : "");
          box.appendChild(a);
        });
        root.appendChild(box);
      }
    }

    // Subject tiles
    const tiles = el("div", "subject-grid");
    (School.SUBJECTS || []).forEach((s) => {
      const items = catalog.forSubject(grade, s.id);
      const mistakes = items.reduce((n, c) => n + ((progress.items[c.id] && progress.items[c.id].mistakes.length) || 0), 0);
      const t = el(items.length ? "a" : "div", "subject-tile" + (items.length ? "" : " disabled"));
      if (items.length) t.href = `#/g/${grade}/${s.id}`;
      t.style.setProperty("--accent", s.color);
      t.dataset.subject = s.id;
      t.innerHTML =
        `<span class="subject-icon">${esc(s.icon)}</span>` +
        `<span class="subject-name">${esc(s.name)}</span>` +
        `<span class="muted">${items.length ? items.length + " " + plural(items.length, "položka", "položky", "položek") : "Zatím nic"}</span>` +
        (mistakes ? `<span class="tag tag-warn">${mistakes} ${plural(mistakes, "chyba", "chyby", "chyb")}</span>` : "");
      tiles.appendChild(t);
    });
    root.appendChild(tiles);

    // Other grades
    const grades = catalog.grades().filter((g) => g !== grade);
    if (grades.length || !own) {
      const other = el("div", "grade-switch");
      other.innerHTML = '<span class="muted">Jiné ročníky:</span>';
      if (!own) other.innerHTML += `<a class="chip active" href="#/">${catalog.gradeLabel(profile.grade)} (moje)</a>`;
      grades.filter((g) => g !== profile.grade).forEach((g) => {
        other.innerHTML += `<a class="chip" href="#/g/${g}">${catalog.gradeLabel(g)}</a>`;
      });
      root.appendChild(other);
    }
  }

  // ---------------------------------------------------------------- subject

  async function subject(profile, grade, subjectId) {
    const s = catalog.subject(subjectId);
    setTitle(s.name);
    const items = catalog.forSubject(grade, subjectId);
    const progress = await Store.getProgress(profile.id);
    const root = view();
    root.innerHTML =
      `<a class="back" href="${grade === profile.grade ? "#/" : "#/g/" + grade}">← ${catalog.gradeLabel(grade)}</a>` +
      `<h1 class="page-title" style="--accent:${esc(s.color)}"><span>${esc(s.icon)}</span> ${esc(s.name)}</h1>`;

    if (!items.length) {
      root.innerHTML += empty("Tady zatím nic není.");
      return;
    }

    let lastKind = null;
    let list;
    items.forEach((c) => {
      if (c.kind !== lastKind) {
        root.appendChild(el("h2", "kind-title", esc(catalog.KIND_LABELS[c.kind] || c.kind)));
        list = el("div", "item-list");
        root.appendChild(list);
        lastKind = c.kind;
      }
      const p = progress.items[c.id];
      const id = encodeURIComponent(c.id);
      const card = el("div", "item-card");
      card.dataset.id = c.id;
      card.style.setProperty("--accent", s.color);
      const stats = p && p.attempts
        ? `<span class="stat">Nejlépe ${p.bestPct} %</span>` +
          (p.bestGrade ? `<span class="stat grade-${p.bestGrade}">známka ${p.bestGrade}</span>` : "") +
          `<span class="stat">${p.attempts}× ${plural(p.attempts, "pokus", "pokusy", "pokusů")}</span>`
        : '<span class="stat muted">Zatím nezkoušeno</span>';
      const mistakes = p ? p.mistakes.length : 0;
      card.innerHTML =
        `<div class="item-icon">${esc(c.icon)}</div>` +
        '<div class="item-main">' +
        `<h3>${esc(c.title)}</h3>` +
        (c.description ? `<p class="muted">${esc(c.description)}</p>` : "") +
        `<div class="item-stats">${stats}</div>` +
        '<div class="item-actions">' +
        `<a class="btn btn-primary" href="#/${c.kind === "lesson" ? "lesson" : "run"}/${id}">${c.kind === "lesson" ? "Otevřít" : "Spustit"}</a>` +
        (mistakes ? `<a class="btn btn-warning" href="#/run/${id}/mistakes">Chyby (${mistakes})</a>` : "") +
        `<a class="btn btn-ghost" href="#/print/${id}" title="Vytisknout">🖨️</a>` +
        "</div></div>";
      list.appendChild(card);
    });
  }

  // ---------------------------------------------------------------- run / lesson / print

  function backLink(content) {
    return `<a class="back" href="#/g/${content.grade}/${content.subject}">← ${esc(content.subjectInfo.name)}</a>`;
  }

  async function loadOrFail(id) {
    try {
      return await catalog.load(id);
    } catch (e) {
      view().innerHTML = empty(esc(e.message));
      return null;
    }
  }

  async function run(profile, id, mode) {
    view().innerHTML = '<div class="loading">Načítám…</div>';
    const content = await loadOrFail(id);
    if (!content) return;
    setTitle(content.title);
    const root = view();
    root.innerHTML = backLink(content) + `<h1 class="page-title run-title">${esc(content.icon)} ${esc(content.title)}</h1>`;
    const area = el("div", "run-area");
    area.id = "run-area";
    root.appendChild(area);
    const settings = await Store.getSettings(profile.id);
    School.engine.start(area, { content, profile, settings, mode, young: profile.grade <= 3 });
  }

  async function lesson(profile, id) {
    view().innerHTML = '<div class="loading">Načítám…</div>';
    const content = await loadOrFail(id);
    if (!content) return;
    setTitle(content.title);
    const root = view();
    root.innerHTML = backLink(content) + `<h1 class="page-title">${esc(content.icon)} ${esc(content.title)}</h1>`;
    const art = el("article", "lesson card");
    (content.lesson || []).forEach((b) => {
      if (b.type === "text") art.appendChild(el("div", "lesson-text", b.html));
      else if (b.type === "image") {
        const fig = el("figure", "lesson-figure");
        fig.innerHTML = `<img src="${esc(b.src)}" alt="${esc(b.alt || "")}" loading="lazy">` + (b.alt ? `<figcaption>${esc(b.alt)}</figcaption>` : "");
        art.appendChild(fig);
      } else if (b.type === "table") {
        art.appendChild(el("table", "lesson-table",
          (b.head ? "<thead><tr>" + b.head.map((h) => `<th>${esc(h)}</th>`).join("") + "</tr></thead>" : "") +
          "<tbody>" + b.rows.map((r) => "<tr>" + r.map((c) => `<td>${esc(c)}</td>`).join("") + "</tr>").join("") + "</tbody>"));
      }
    });
    root.appendChild(art);
    if (content.sections && content.sections.length) {
      root.appendChild(el("div", "lesson-cta", `<a class="btn btn-primary btn-big" href="#/run/${encodeURIComponent(id)}">Procvičit ✏️</a>`));
    }
  }

  async function print(profile, id) {
    view().innerHTML = '<div class="loading">Načítám…</div>';
    const content = await loadOrFail(id);
    if (!content) return;
    setTitle(content.title + " (tisk)");
    School.print.render(view(), content, await Store.getSettings(profile.id));
  }

  // ---------------------------------------------------------------- settings

  async function settings(profile) {
    profile = profile || await activeProfile();
    setTitle("Nastavení");
    const root = view();
    const s = await Store.getSettings(profile.id);
    root.innerHTML = '<a class="back" href="#/">← Domů</a><h1 class="page-title">Nastavení</h1>';

    const prefs = el("div", "card settings-block");
    prefs.innerHTML =
      "<h2>Procvičování</h2>" +
      '<label>Počet otázek v části <select id="set-length">' +
      [[3, "Krátce (3)"], [5, "Středně (5)"], [10, "Dlouze (10)"]].map(([n, l]) => `<option value="${n}"${n === s.length ? " selected" : ""}>${l}</option>`).join("") +
      "</select></label>";
    prefs.querySelector("#set-length").addEventListener("change", async (e) => {
      s.length = parseInt(e.target.value, 10);
      await Store.saveSettings(profile.id, s);
    });
    root.appendChild(prefs);

    const edit = el("div", "settings-block");
    root.appendChild(edit);
    profileForm(edit, profile);

    const legacy = School.legacyImport.collect();
    const imp = el("div", "card settings-block");
    imp.innerHTML = "<h2>Staré výsledky</h2>" + (legacy
      ? `<p>Na tomto zařízení jsou výsledky ze starých aplikací (${esc(School.legacyImport.summary(legacy))}).</p><button class="btn btn-secondary" id="import-btn">Importovat do profilu ${esc(profile.name)}</button>`
      : '<p class="muted">Na tomto zařízení nejsou žádné výsledky ze starých aplikací.</p>');
    if (legacy) {
      imp.querySelector("#import-btn").addEventListener("click", async (e) => {
        await Store.mergeProgress(profile.id, legacy);
        e.target.disabled = true;
        e.target.textContent = "Importováno ✓";
      });
    }
    root.appendChild(imp);

    const danger = el("div", "card settings-block danger");
    danger.innerHTML = '<h2>Smazat profil</h2><p class="muted">Smaže profil i všechny výsledky na tomto zařízení.</p><button class="btn btn-danger" id="delete-profile">Smazat profil</button>';
    danger.querySelector("#delete-profile").addEventListener("click", async () => {
      if (!confirm(`Opravdu smazat profil ${profile.name}?`)) return;
      await Store.deleteProfile(profile.id);
      location.hash = "#/profiles";
    });
    root.appendChild(danger);
  }

  return { profiles, home, subject, run, lesson, print, settings, applyProfile, activeProfile };
})();
