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

  function speak(text, lang, onEnd) {
    if (!speechSupported || !text) { if (onEnd) onEnd(); return; }
    const synth = window.speechSynthesis;
    synth.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = lang || "cs-CZ";
    u.rate = lang && lang.indexOf("en") === 0 ? 0.85 : 0.95;
    const prefix = u.lang.slice(0, 2);
    const voices = synth.getVoices();
    const voice = voices.find((v) => v.lang === u.lang) || voices.find((v) => v.lang.indexOf(prefix) === 0);
    if (voice) u.voice = voice;
    u.onend = u.onerror = () => { if (onEnd) onEnd(); };
    synth.speak(u);
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

  /** Czech plural helper: plural(3, "otázka", "otázky", "otázek"). */
  function plural(n, one, few, many) {
    if (n === 1) return one;
    if (n >= 2 && n <= 4) return few;
    return many;
  }

  return { shuffle, esc, el, normalize, sameSentence, uid, speak, speakButton, speechSupported, plural };
})();
