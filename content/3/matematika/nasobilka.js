// Matematika 3. třída – malá násobilka: násobení 2 až 10 a dělení 2 až 10, každé zvlášť.
// Příklady se generují; náhoda je se stálým semínkem, aby prompty i možnosti byly pokaždé stejné
// (prompt je klíč chyby). `drill: true` = tisk jako hustý list příkladů ve sloupcích.
(() => {
  let seed = 3130;
  function rand() {
    seed = (seed + 0x6D2B79F5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  }

  /** Answer + 3 distinct wrong numbers picked from typical slips (neighbours in the table, ±1). */
  function item(prompt, answer, slips) {
    const wrong = [];
    const pool = slips.map((d) => answer + d).filter((n) => n >= 0 && n !== answer);
    while (wrong.length < 3 && pool.length) {
      const n = pool.splice(Math.floor(rand() * pool.length), 1)[0];
      if (wrong.indexOf(n) === -1) wrong.push(n);
    }
    for (let d = 1; wrong.length < 3; d++) {
      [answer + d, answer - d].forEach((n) => {
        if (wrong.length < 3 && n >= 0 && n !== answer && wrong.indexOf(n) === -1) wrong.push(n);
      });
    }
    return { prompt: prompt + " = ___", options: [answer].concat(wrong).map(String), answer: String(answer) };
  }

  /** Násobení n: n · k and k · n for k = 1..10 (n · n only once). */
  function times(n) {
    const items = [];
    const seen = {};
    for (let k = 1; k <= 10; k++) {
      [`${k} · ${n}`, `${n} · ${k}`].forEach((p) => {
        if (!seen[p]) { seen[p] = true; items.push(item(p, k * n, [-n, n, -1, 1])); }
      });
    }
    return items;
  }

  /** Dělení n: (n·k) : n for k = 1..10. */
  function divide(n) {
    const items = [];
    for (let k = 1; k <= 10; k++) items.push(item(`${k * n} : ${n}`, k, [-1, 1, -2, 2]));
    return items;
  }

  const sections = [];
  for (let n = 2; n <= 10; n++) {
    sections.push({
      id: "nasobeni-" + n,
      title: "Násobení " + n,
      icon: "✖️",
      type: "choice",
      drill: true,
      instructions: `Násobilka ${n}. Nezáleží na pořadí: 3 · ${n} = ${n} · 3 = ${3 * n}.`,
      pick: "auto",
      items: times(n)
    });
  }
  for (let n = 2; n <= 10; n++) {
    sections.push({
      id: "deleni-" + n,
      title: "Dělení " + n,
      icon: "➗",
      type: "choice",
      drill: true,
      instructions: `Dělení ${n}. Třeba ${3 * n} : ${n} = 3, protože 3 · ${n} = ${3 * n}.`,
      pick: "auto",
      items: divide(n)
    });
  }

  School.register({ id: "3-matematika-nasobilka", sections });
})();
