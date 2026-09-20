/**
 * Hudební notace: kreslí notovou osnovu jako inline SVG.
 * Používá ji engine (položky s `staff`), tisk a výklad v lekcích.
 *
 * Zápis výšky: velká oktáva "C".."H", malá "c".."h", jednočárkovaná "c1".."h1",
 * dvoučárkovaná "c2"… Délky: w = celá, h = půlová, q = čtvrťová,
 * e = osminová, s = šestnáctinová.
 *
 * School.notation.render({
 *   clef: "houslovy" | "basovy",
 *   keySig: { sharps: 2 } | { flats: 1 },
 *   items: [{ note: "c1", dur: "q", acc: "#", dot: true, staccato: true }, { rest: "q" }],
 *   label: "volitelný popisek"
 * })
 */
School.notation = (() => {
  const S = 15;                 // rozestup linek
  const STAFF_H = 4 * S;
  const PAD_TOP = 3.2 * S;      // místo na pomocné linky a praporky
  const PAD_BOTTOM = 3.2 * S;
  const HEIGHT = PAD_TOP + STAFF_H + PAD_BOTTOM;
  const TOP = PAD_TOP;          // y horní linky
  const BOTTOM = TOP + STAFF_H; // y dolní linky
  const HEAD_RX = 0.68 * S;
  const HEAD_RY = 0.5 * S;
  const STEM = 3.3 * S;

  const LETTERS = ["c", "d", "e", "f", "g", "a", "h"];
  // Dolní linka osnovy: houslový klíč e1, basový klíč G (velká oktáva).
  const CLEF_BOTTOM = { houslovy: "e1", basovy: "G" };
  const SHARP_ORDER = ["f", "c", "g", "d", "a", "e", "h"];
  const FLAT_ORDER = ["h", "e", "a", "d", "g", "c", "f"];

  /** "c1" → pořadí stupně (velká oktáva = 2, malá = 3, jednočárkovaná = 4…). */
  function step(note) {
    const m = /^([A-Ha-h])(\d?)$/.exec(note);
    if (!m) throw new Error("neznámá nota: " + note);
    const letter = m[1].toLowerCase();
    const idx = LETTERS.indexOf(letter);
    let octave;
    if (m[1] === m[1].toUpperCase()) octave = 2;          // velká oktáva: C D E F G A H
    else octave = 3 + (m[2] ? parseInt(m[2], 10) : 0);     // malá, jednočárkovaná…
    return octave * 7 + idx;
  }

  function yOf(note, clef) {
    return BOTTOM - (step(note) - step(CLEF_BOTTOM[clef])) * (S / 2);
  }

  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const line = (x1, y1, x2, y2, w) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke-width="${w || 1.3}"/>`;

  // ---------------------------------------------------------------- klíče

  function trebleClef(x) {
    // G klíč: logaritmická spirála se středem na lince g1, nožka přes celou
    // osnovu a ocásek pod ní.
    const cy = yOf("g1", "houslovy");
    const cx = x + 1.35 * S;
    const r0 = 0.1 * S;
    const turns = 2.05;
    const k = Math.log((1.55 * S) / r0) / (turns * 2 * Math.PI);
    const pts = [];
    for (let i = 0; i <= 80; i++) {
      const t = (i / 80) * turns * 2 * Math.PI;
      const r = r0 * Math.exp(k * t);
      // start ve středu, vine se doprava dolů a pak proti směru hodin nahoru
      pts.push([cx + r * Math.sin(t), cy + r * Math.cos(t)]);
    }
    const spiral = "M " + pts.map((p) => p[0].toFixed(1) + " " + p[1].toFixed(1)).join(" L ");
    const end = pts[pts.length - 1];
    const topY = TOP - 0.9 * S;
    const stem =
      ` C ${end[0] - 0.2 * S} ${cy - 2.4 * S} ${cx - 0.35 * S} ${topY} ${cx + 0.15 * S} ${topY}` +
      ` C ${cx + 0.75 * S} ${topY} ${cx + 0.8 * S} ${cy - 1.6 * S} ${cx + 0.1 * S} ${cy - 0.2 * S}` +
      ` C ${cx - 0.3 * S} ${cy + 0.7 * S} ${cx + 0.15 * S} ${BOTTOM + 0.9 * S} ${cx + 0.15 * S} ${BOTTOM + 1.1 * S}` +
      ` C ${cx + 0.15 * S} ${BOTTOM + 1.9 * S} ${cx - 1.1 * S} ${BOTTOM + 1.9 * S} ${cx - 0.95 * S} ${BOTTOM + 1.0 * S}`;
    return `<path d="${spiral}${stem}" fill="none" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>`;
  }

  function bassClef(x) {
    // F klíč: tečka na lince f, oblouk doprava a dolů, dvě tečky vedle.
    const f = yOf("f", "basovy");
    const hx = x + 0.9 * S;
    const p = `M ${hx} ${f - 0.55 * S}` +
      ` C ${hx + 1.1 * S} ${f - 0.8 * S} ${hx + 1.9 * S} ${f + 0.1 * S} ${hx + 1.55 * S} ${f + 1.2 * S}` +
      ` C ${hx + 1.25 * S} ${f + 2.1 * S} ${hx + 0.3 * S} ${f + 2.7 * S} ${hx - 0.9 * S} ${f + 3.05 * S}`;
    const dot = (dy) => `<circle cx="${hx + 2.3 * S}" cy="${f + dy}" r="${0.17 * S}" stroke="none"/>`;
    return `<circle cx="${hx}" cy="${f}" r="${0.52 * S}" stroke="none"/>` +
      `<path d="${p}" fill="none" stroke-width="2.4" stroke-linecap="round"/>` +
      dot(-S / 2) + dot(S / 2);
  }

  // ---------------------------------------------------------------- posuvky

  function sharp(x, y) {
    const w = 0.42 * S, h = 1.5 * S;
    return line(x - w / 2, y - h / 2 + 2, x - w / 2, y + h / 2 + 2, 1.4) +
      line(x + w / 2, y - h / 2 - 2, x + w / 2, y + h / 2 - 2, 1.4) +
      line(x - w, y - 2.5, x + w, y - 4.5, 2.4) +
      line(x - w, y + 4.5, x + w, y + 2.5, 2.4);
  }

  function flat(x, y) {
    const s = S / 10;
    return `<path d="M ${x - 3 * s} ${y - 14 * s} L ${x - 3 * s} ${y + 5 * s}` +
      ` c ${5 * s} ${-7 * s} ${13 * s} ${-2 * s} ${8 * s} ${4 * s}` +
      ` c ${-2 * s} ${3 * s} ${-6 * s} ${5 * s} ${-8 * s} ${6 * s}" fill="none" stroke-width="1.6" stroke-linejoin="round"/>`;
  }

  function natural(x, y) {
    const w = 0.34 * S, h = 1.5 * S;
    return line(x - w, y - h / 2, x - w, y + h / 2 - 3, 1.4) +
      line(x + w, y - h / 2 + 3, x + w, y + h / 2, 1.4) +
      line(x - w, y - 2.5, x + w, y - 4.5, 2.2) +
      line(x - w, y + 4.5, x + w, y + 2.5, 2.2);
  }

  const ACCIDENTALS = { "#": sharp, "b": flat, "n": natural };

  // ---------------------------------------------------------------- noty

  function ledgerLines(x, y, clef) {
    let out = "";
    const w = HEAD_RX + 5;
    for (let ly = BOTTOM + S; ly <= y + 1; ly += S) out += line(x - w, ly, x + w, ly, 1.3);
    for (let ly = TOP - S; ly >= y - 1; ly -= S) out += line(x - w, ly, x + w, ly, 1.3);
    return out;
  }

  function flags(x, y, up, dur) {
    const dir = up ? 1 : -1;
    const tip = up ? y - STEM : y + STEM;
    const s = S / 10;
    let out = "";
    const one = (off) => `<path d="M ${x} ${tip + off * dir} c ${6 * s} ${4 * s * dir} ${9 * s} ${10 * s * dir}` +
      ` ${2 * s} ${16 * s * dir} c ${4 * s} ${-7 * s * dir} ${1 * s} ${-11 * s * dir} ${-2 * s} ${-14 * s * dir} z"` +
      ` stroke-width="1"/>`;
    if (dur === "e" || dur === "s") out += one(0);
    if (dur === "s") out += one(6 * s);
    return out;
  }

  function noteHead(x, y, filled) {
    return `<ellipse cx="${x}" cy="${y}" rx="${HEAD_RX}" ry="${HEAD_RY}" ` +
      `transform="rotate(-20 ${x} ${y})" ${filled ? "" : 'fill="none" '}stroke-width="1.6"/>`;
  }

  function drawNote(it, x, clef) {
    const y = yOf(it.note, clef);
    const dur = it.dur || "q";
    const filled = dur !== "w" && dur !== "h";
    let out = ledgerLines(x, y, clef) + noteHead(x, y, filled);

    if (dur !== "w") {
      const up = y > TOP + STAFF_H / 2;                 // pod prostřední linkou → nožička nahoru
      const sx = x + (up ? HEAD_RX - 0.8 : -HEAD_RX + 0.8);
      out += line(sx, y, sx, up ? y - STEM : y + STEM, 1.6);
      out += flags(sx, y, up, dur);
    }
    if (it.dot) out += `<circle cx="${x + HEAD_RX + 6}" cy="${y % S === 0 ? y - S / 2 : y}" r="2.2" stroke="none"/>`;
    if (it.acc && ACCIDENTALS[it.acc]) out += ACCIDENTALS[it.acc](x - HEAD_RX - 8, y);
    if (it.staccato) {
      const up = y > TOP + STAFF_H / 2;
      out += `<circle cx="${x}" cy="${up ? y + S : y - S}" r="2.2" stroke="none"/>`;
    }
    if (it.tenuto) {
      const up = y > TOP + STAFF_H / 2;
      out += line(x - 6, up ? y + S : y - S, x + 6, up ? y + S : y - S, 1.8);
    }
    return out;
  }

  // ---------------------------------------------------------------- pomlky

  function drawRest(dur, x) {
    const mid = TOP + 2 * S;
    const s = S / 10;
    if (dur === "w" || dur === "h") {
      const y = dur === "w" ? TOP + S : mid;             // celá visí pod 2. linkou, půlová sedí na 3.
      return `<rect x="${x - 7}" y="${dur === "w" ? y : y - 5}" width="14" height="5" stroke="none"/>`;
    }
    if (dur === "q") {
      return `<path d="M ${x - 0.35 * S} ${mid - 1.5 * S}` +
        ` L ${x + 0.3 * S} ${mid - 0.55 * S} L ${x - 0.35 * S} ${mid + 0.15 * S} L ${x + 0.35 * S} ${mid + 1.0 * S}` +
        ` c ${-0.55 * S} ${-0.2 * S} ${-0.95 * S} ${0.25 * S} ${-0.3 * S} ${0.85 * S}"` +
        ` fill="none" stroke-width="2.4" stroke-linejoin="round" stroke-linecap="round"/>`;
    }
    // osminová a šestnáctinová pomlka: šikmá nožka s jedním nebo dvěma praporky
    const top = mid - S;
    let out = line(x + 5, top, x - 4, top + (dur === "s" ? 2.4 * S : 1.8 * S), 1.6);
    out += `<circle cx="${x - 1}" cy="${top + 1}" r="2.6" stroke="none"/>`;
    out += line(x - 1, top + 1, x + 6, top - 1, 1.4);
    if (dur === "s") {
      out += `<circle cx="${x - 4}" cy="${top + S}" r="2.6" stroke="none"/>`;
      out += line(x - 4, top + S, x + 3, top + S - 2, 1.4);
    }
    return out;
  }

  // ---------------------------------------------------------------- osnova

  function keySignature(x, clef, keySig) {
    if (!keySig) return { svg: "", width: 0 };
    const sharps = keySig.sharps || 0;
    const flats = keySig.flats || 0;
    const n = sharps || flats;
    // Výšky předznamenání v houslovém klíči; v basovém o tercii níž.
    const SHARP_NOTES = { houslovy: ["f2", "c2", "g2", "d2", "a1", "e2", "h1"], basovy: ["f", "c", "g", "d", "A", "e", "H"] };
    const FLAT_NOTES = { houslovy: ["h1", "e2", "a1", "d2", "g1", "c2", "f1"], basovy: ["H", "e", "A", "d", "G", "c", "F"] };
    const notes = sharps ? SHARP_NOTES[clef] : FLAT_NOTES[clef];
    const order = sharps ? SHARP_ORDER : FLAT_ORDER;
    let svg = "";
    for (let i = 0; i < Math.min(n, order.length); i++) {
      const y = yOf(notes[i], clef);
      svg += sharps ? sharp(x + i * 11 + 5, y) : flat(x + i * 11 + 5, y);
    }
    return { svg, width: n ? n * 11 + 8 : 0 };
  }

  function render(spec) {
    const clef = spec.clef || "houslovy";
    const items = spec.items || [];
    let x = 10;
    let svg = "";

    svg += clef === "basovy" ? bassClef(x) : trebleClef(x);
    x += clef === "basovy" ? 3.4 * S : 4.2 * S;

    const key = keySignature(x, clef, spec.keySig);
    svg += key.svg;
    x += key.width;

    const gap = items.length > 6 ? 3 * S : 3.8 * S;
    const notes = items.map((it) => {
      const out = it.rest ? drawRest(it.rest, x + gap / 2) : drawNote(it, x + gap / 2, clef);
      x += gap;
      return out;
    }).join("");

    // Popisek nesmí přetéct – osnovu podle něj případně rozšíříme.
    const labelWidth = spec.label ? spec.label.length * 6.8 + 24 : 0;
    const width = Math.max(x + 12, labelWidth, 15 * S);
    let staff = "";
    for (let i = 0; i < 5; i++) staff += line(4, TOP + i * S, width - 4, TOP + i * S, 1.2);
    const label = spec.label
      ? `<text x="${width / 2}" y="${HEIGHT - 4}" text-anchor="middle" font-size="13" stroke="none" class="staff-label">${esc(spec.label)}</text>`
      : "";

    return `<svg class="staff" viewBox="0 0 ${width} ${HEIGHT}" width="${width}" height="${HEIGHT}" ` +
      `role="img" aria-label="${esc(spec.alt || "notová osnova")}" xmlns="http://www.w3.org/2000/svg">` +
      `<g fill="currentColor" stroke="currentColor" stroke-linecap="round">${staff}${svg}${notes}</g>${label}</svg>`;
  }

  /** Klíč pro sledování chyb – dvě různé osnovy nesmí splynout. */
  function key(spec) {
    return (spec.clef || "houslovy") + ":" +
      (spec.keySig ? (spec.keySig.sharps ? "#" + spec.keySig.sharps : "b" + spec.keySig.flats) : "") + ":" +
      (spec.items || []).map((it) => it.rest ? "r" + it.rest : (it.acc || "") + it.note + (it.dur || "q") + (it.dot ? "." : "") + (it.staccato ? "'" : "")).join(",");
  }

  return { render, key, step, LETTERS };
})();
