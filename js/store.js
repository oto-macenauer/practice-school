/**
 * Persistence layer. The rest of the app talks only to `School.Store`,
 * whose methods all return Promises so a server-backed adapter (REST + SQLite)
 * can replace LocalStore without touching the UI.
 *
 * Device-local concerns (active profile, in-progress sessions) always stay
 * in localStorage regardless of adapter.
 */
School.LocalStore = (() => {
  const KEY = "practice-school:v1";
  const ACTIVE_KEY = "practice-school:active-profile";
  const SESSION_PREFIX = "practice-school:session:";

  // confirm: tapping an option only selects it, a "Potvrdit" button evaluates.
  // autoNext: after a correct answer the next question comes by itself.
  const DEFAULT_SETTINGS = { length: 5, speech: true, confirm: false, autoNext: true };

  function load() {
    try {
      const d = JSON.parse(localStorage.getItem(KEY));
      if (d && d.profiles) return d;
    } catch (_) { /* fall through */ }
    return { profiles: {}, progress: {}, settings: {} };
  }

  function save(d) {
    localStorage.setItem(KEY, JSON.stringify(d));
  }

  function emptyProgress() {
    return { xp: 0, items: {} };
  }

  function emptyItem() {
    return { attempts: 0, bestPct: 0, bestGrade: null, lastAt: null, xp: 0, mistakes: [] };
  }

  function itemOf(d, profileId, contentId) {
    d.progress[profileId] = d.progress[profileId] || emptyProgress();
    const p = d.progress[profileId];
    p.items[contentId] = p.items[contentId] || emptyItem();
    return p.items[contentId];
  }

  const api = {
    async listProfiles() {
      const d = load();
      return Object.keys(d.profiles)
        .map((id) => d.profiles[id])
        .sort((a, b) => a.createdAt.localeCompare(b.createdAt));
    },

    async getProfile(id) {
      return load().profiles[id] || null;
    },

    async saveProfile(profile) {
      const d = load();
      const p = Object.assign({}, profile);
      if (!p.id) p.id = School.util.uid();
      if (!p.createdAt) p.createdAt = new Date().toISOString();
      d.profiles[p.id] = p;
      save(d);
      return p;
    },

    async deleteProfile(id) {
      const d = load();
      delete d.profiles[id];
      delete d.progress[id];
      delete d.settings[id];
      save(d);
      if (api.getActiveProfileId() === id) api.setActiveProfileId(null);
      Object.keys(localStorage)
        .filter((k) => k.indexOf(SESSION_PREFIX + id + ":") === 0)
        .forEach((k) => localStorage.removeItem(k));
    },

    getActiveProfileId() {
      return localStorage.getItem(ACTIVE_KEY);
    },

    setActiveProfileId(id) {
      if (id) localStorage.setItem(ACTIVE_KEY, id);
      else localStorage.removeItem(ACTIVE_KEY);
    },

    async getProgress(profileId) {
      return load().progress[profileId] || emptyProgress();
    },

    async addXp(profileId, contentId, n) {
      const d = load();
      const item = itemOf(d, profileId, contentId);
      item.xp += n;
      d.progress[profileId].xp += n;
      save(d);
    },

    /** Persist a mistake immediately so it survives the kid closing the tab. */
    async addMistake(profileId, contentId, key) {
      const d = load();
      const item = itemOf(d, profileId, contentId);
      if (item.mistakes.indexOf(key) === -1) item.mistakes.push(key);
      save(d);
    },

    async removeMistake(profileId, contentId, key) {
      const d = load();
      const item = itemOf(d, profileId, contentId);
      item.mistakes = item.mistakes.filter((m) => m !== key);
      save(d);
    },

    /**
     * run: { score, total, mistakes: [key], grade?, mode: "normal"|"mistakes" }
     * Normal runs replace the mistake list with this run's mistakes;
     * mistakes-mode runs only prune (handled incrementally via removeMistake).
     */
    async recordRun(profileId, contentId, run) {
      const d = load();
      const item = itemOf(d, profileId, contentId);
      item.lastAt = new Date().toISOString();
      if (run.mode !== "mistakes") {
        item.attempts += 1;
        const pct = run.total ? Math.round((run.score / run.total) * 100) : 0;
        if (pct >= item.bestPct) {
          item.bestPct = pct;
          if (run.grade) item.bestGrade = run.grade;
        }
        item.mistakes = run.mistakes.slice();
      }
      save(d);
      return item;
    },

    async getSettings(profileId) {
      return Object.assign({}, DEFAULT_SETTINGS, load().settings[profileId] || {});
    },

    async saveSettings(profileId, settings) {
      const d = load();
      d.settings[profileId] = Object.assign({}, DEFAULT_SETTINGS, settings);
      save(d);
    },

    /** Merge progress from an import (higher value wins, mistakes unioned). */
    async mergeProgress(profileId, incoming) {
      const d = load();
      d.progress[profileId] = d.progress[profileId] || emptyProgress();
      const p = d.progress[profileId];
      p.xp = Math.max(p.xp, incoming.xp || 0);
      Object.keys(incoming.items || {}).forEach((cid) => {
        const src = incoming.items[cid];
        const dst = itemOf(d, profileId, cid);
        dst.attempts = Math.max(dst.attempts, src.attempts || 0);
        if ((src.bestPct || 0) > dst.bestPct) {
          dst.bestPct = src.bestPct;
          if (src.bestGrade) dst.bestGrade = src.bestGrade;
        }
        dst.xp = Math.max(dst.xp, src.xp || 0);
        if (src.lastAt && (!dst.lastAt || src.lastAt > dst.lastAt)) dst.lastAt = src.lastAt;
        (src.mistakes || []).forEach((m) => { if (dst.mistakes.indexOf(m) === -1) dst.mistakes.push(m); });
      });
      save(d);
    },

    // ---------- Sessions (always device-local, synchronous under the hood) ----------

    sessionKey(profileId, contentId, mode) {
      return SESSION_PREFIX + profileId + ":" + contentId + ":" + (mode || "normal");
    },

    async getSession(profileId, contentId, mode) {
      try {
        return JSON.parse(localStorage.getItem(api.sessionKey(profileId, contentId, mode)));
      } catch (_) {
        return null;
      }
    },

    async saveSession(profileId, contentId, mode, state) {
      localStorage.setItem(api.sessionKey(profileId, contentId, mode), JSON.stringify(state));
    },

    async clearSession(profileId, contentId, mode) {
      localStorage.removeItem(api.sessionKey(profileId, contentId, mode));
    },

    async listSessions(profileId) {
      const prefix = SESSION_PREFIX + profileId + ":";
      return Object.keys(localStorage)
        .filter((k) => k.indexOf(prefix) === 0)
        .map((k) => {
          const rest = k.slice(prefix.length).split(":");
          return { contentId: rest[0], mode: rest[1] };
        });
    }
  };

  return api;
})();

School.Store = School.LocalStore;
