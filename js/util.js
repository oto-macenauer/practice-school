/**
 * Shared helpers. Everything hangs off the global `School` namespace.
 */
window.School = window.School || {};

School.util = (() => {
  /** Fisher-Yates on a copy. */
  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  /** Escape text for safe insertion into innerHTML. */
  function esc(str) {
    return String(str == null ? "" : str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  /** Create an element with optional class and innerHTML. */
  function el(tag, cls, html) {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html !== undefined) e.innerHTML = html;
    return e;
  }

  /** Compare typed answers: case, whitespace and apostrophe style insensitive. */
  function normalize(str) {
    return String(str || "")
      .toLowerCase()
      .replace(/[‘’`]/g, "'")
      .replace(/\s+/g, " ")
      .replace(/[.!?]+$/, "")
      .trim();
  }

  /** Sentence comparison for word ordering (ignores trailing punctuation). */
  function sameSentence(a, b) {
    return normalize(a) === normalize(b);
  }

  function uid() {
    return Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
  }

  // ---------- Speech ----------

  const speechSupported = "speechSynthesis" in window;

  // Referenced while speaking: Chrome may garbage-collect a playing utterance and drop its events.
  let utterance = null;

  function findVoice(voices, lang) {
    // Android reports "en_GB"; normalize before matching.
    const norm = (l) => String(l || "").replace("_", "-").toLowerCase();
    const want = norm(lang);
    return voices.find((v) => norm(v.lang) === want) ||
      voices.find((v) => norm(v.lang).slice(0, 2) === want.slice(0, 2));
  }

  function speak(text, lang, onEnd) {
    let finished = false;
    const finish = () => { if (!finished) { finished = true; if (onEnd) onEnd(); } };
    if (!speechSupported || !text) { finish(); return; }
    const synth = window.speechSynthesis;
    lang = lang || "cs-CZ";

    const say = (retry) => {
      const u = new SpeechSynthesisUtterance(text);
      u.lang = lang;
      u.rate = lang.indexOf("en") === 0 ? 0.85 : 0.95;
      const voice = findVoice(synth.getVoices(), lang);
      if (voice) u.voice = voice;
      let started = false;
      u.onstart = () => { started = true; };
      u.onend = u.onerror = () => { if (utterance === u) utterance = null; finish(); };
      utterance = u;
      if (synth.paused) synth.resume();
      synth.speak(u);
      // Chrome sometimes queues an utterance that never starts; kick it once.
      setTimeout(() => {
        if (started || finished || utterance !== u) return;
        synth.cancel();
        if (retry) setTimeout(() => say(false), 100);
        else finish();
      }, 1500);
    };

    // cancel() immediately followed by speak() drops the utterance on Chrome/Android,
    // so only cancel when something is playing and give it a moment. The first call
    // stays synchronous — iOS only allows speech started directly from a tap.
    if (synth.speaking || synth.pending) {
      synth.cancel();
      setTimeout(() => say(true), 100);
    } else {
      say(true);
    }
  }

  /** Button that speaks `text` when clicked. */
  function speakButton(text, lang, label) {
    const btn = el("button", "listen-btn", `<span aria-hidden="true">🔊</span> ${esc(label || "Poslechni si")}`);
    btn.type = "button";
    if (!speechSupported) btn.disabled = true;
    btn.addEventListener("click", () => {
      btn.classList.add("speaking");
      speak(text, lang, () => btn.classList.remove("speaking"));
    });
    return btn;
  }

  /**
   * Picture grid for logic puzzles: rows of short cells (emoji, letters, numbers).
   * A "?" cell is the one to find; an empty string leaves the cell blank.
   */
  function gridHtml(grid) {
    const cols = Math.max(...grid.map((r) => r.length));
    return `<table class="puzzle-grid" style="--cols:${cols}"><tbody>` +
      grid.map((row) => "<tr>" + row.map((c) =>
        `<td${c === "?" ? ' class="grid-q"' : ""}>${esc(c)}</td>`).join("") + "</tr>").join("") +
      "</tbody></table>";
  }

  /** Czech plural helper: plural(3, "otázka", "otázky", "otázek"). */
  function plural(n, one, few, many) {
    if (n === 1) return one;
    if (n >= 2 && n <= 4) return few;
    return many;
  }

  return { shuffle, esc, el, normalize, sameSentence, uid, speak, speakButton, speechSupported, gridHtml, plural };
})();
