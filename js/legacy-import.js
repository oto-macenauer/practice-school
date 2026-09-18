/**
 * Import progress from the old apps. All of them were served from
 * oto-macenauer.github.io, so their localStorage is readable here.
 *   practice-history: "history-practice-stats"
 *   practice-english: "scores"  ({ "practice-tests/unit5/_total": {score,total,grade,date} })
 */
School.legacyImport = (() => {
  const HISTORY_MAP = {
    habsburkove: "4-vlastiveda-habsburkove",
    "husitske-valky": "4-vlastiveda-husitske-valky",
    lucemburkove: "4-vlastiveda-lucemburkove",
    "voda-a-podnebi": "4-vlastiveda-voda-a-podnebi"
  };
  const HISTORY_SECTION = "otazky";

  function read(key) {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (_) {
      return null;
    }
  }

  /** Returns { xp, items } in Store progress shape, or null when nothing to import. */
  function collect() {
    const out = { xp: 0, items: {} };
    let found = false;

    const h = read("history-practice-stats");
    if (h && h.tests) {
      found = true;
      out.xp += h.totalXp || 0;
      Object.keys(h.tests).forEach((oldId) => {
        const id = HISTORY_MAP[oldId];
        if (!id) return;
        const t = h.tests[oldId];
        out.items[id] = {
          attempts: t.attempts || 0,
          bestPct: t.bestPct || 0,
          xp: t.xp || 0,
          lastAt: t.lastAttempt || null,
          mistakes: (t.mistakes || []).map((q) => HISTORY_SECTION + "|" + q)
        };
      });
    }

    const e = read("scores");
    if (e) {
      Object.keys(e).forEach((k) => {
        const m = /^practice-tests\/([^/]+)\/_total$/.exec(k);
        if (!m) return;
        const id = "4-anglictina-" + m[1] + "-test";
        if (!School.catalog.get(id)) return;
        const s = e[k];
        found = true;
        out.items[id] = {
          attempts: 1,
          bestPct: s.total ? Math.round((s.score / s.total) * 100) : 0,
          bestGrade: s.grade || null,
          lastAt: s.date || null,
          mistakes: []
        };
      });
    }

    return found ? out : null;
  }

  function summary(data) {
    const n = Object.keys(data.items).length;
    return `${n} ${School.util.plural(n, "test", "testy", "testů")}, ${data.xp} XP`;
  }

  return { collect, summary };
})();
