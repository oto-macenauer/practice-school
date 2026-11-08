// Matematika 3. třída – příklady se závorkami: nejdřív počítáme v závorce.
// Příklady se generují; náhoda je se stálým semínkem, aby prompty i možnosti byly pokaždé stejné
// (prompt je klíč chyby). `drill: true` = tisk jako hustý list příkladů ve sloupcích.
(() => {
  let seed = 3140;
  function rand() {
    seed = (seed + 0x6D2B79F5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  }
  const int = (lo, hi) => lo + Math.floor(rand() * (hi - lo + 1));

  /**
   * Answer + 3 distinct wrong numbers. `trap` = result when the brackets are ignored
   * (computed left to right) – the typical slip, used first when it differs.
   */
  function item(prompt, answer, trap) {
    const wrong = [];
    if (Number.isInteger(trap) && trap >= 0 && trap !== answer) wrong.push(trap);
    const pool = [-1, 1, -2, 2, -10, 10].map((d) => answer + d).filter((n) => n >= 0 && n !== answer && wrong.indexOf(n) === -1);
    while (wrong.length < 3 && pool.length) wrong.push(pool.splice(Math.floor(rand() * pool.length), 1)[0]);
    return { prompt: prompt + " = ___", options: [answer].concat(wrong).map(String), answer: String(answer) };
  }

  /** Calls make() until `count` distinct prompts are collected; make returns null to retry. */
  function collect(count, make) {
    const out = [];
    const seen = {};
    for (let tries = 0; out.length < count && tries < count * 50; tries++) {
      const it = make();
      if (it && !seen[it.prompt]) { seen[it.prompt] = true; out.push(it); }
    }
    return out;
  }

  // + a −: všechno do 100, mezivýsledky nezáporné
  const plusMinus = [
    () => { const a = int(10, 60), b = int(2, 30), c = int(2, a + b); return a + b > 100 ? null : item(`(${a} + ${b}) − ${c}`, a + b - c, null); },
    () => { const b = int(2, 30), c = int(2, 20), a = int(b + c, 100); return item(`${a} − (${b} + ${c})`, a - b - c, a - b + c); },
    () => { const c = int(2, 20), b = int(c + 1, 50), a = int(5, 50); return a + b - c > 100 ? null : item(`${a} + (${b} − ${c})`, a + b - c, null); },
    () => { const c = int(2, 30), b = int(c + 1, 60), a = int(b, 100); return item(`${a} − (${b} − ${c})`, a - (b - c), a - b + c > 100 ? null : a - b + c); },
    () => { const a = int(20, 100), b = int(2, a - 1), c = int(2, 40); return a - b + c > 100 ? null : item(`(${a} − ${b}) + ${c}`, a - b + c, null); }
  ];

  // · a : (malá násobilka) spolu s + a −
  const timesDivide = [
    () => { const b = int(2, 10), k = int(1, 10), c = int(1, 30); return item(`(${b * k} : ${b}) + ${c}`, k + c, null); },
    () => { const a = int(2, 10), c = int(1, 9), d = int(1, 10 - Math.min(c, 9)), b = c + d; return item(`${a} · (${b} − ${c})`, a * d, a * b - c); },
    () => { const c = int(2, 10), k = int(1, 10), a = int(k, 60); return item(`${a} − (${c * k} : ${c})`, a - k, (a - c * k) % c === 0 && a >= c * k ? (a - c * k) / c : null); },
    () => { const a = int(2, 10), b = int(1, 5), c = int(1, 10 - b); return item(`${a} · (${b} + ${c})`, a * (b + c), a * b + c); },
    () => { const c = int(2, 10), k = int(2, 10), b = int(1, c * k - 1), a = c * k - b; return item(`(${a} + ${b}) : ${c}`, k, b % c === 0 ? a + b / c : null); },
    () => { const c = int(2, 10), d = int(1, 10), b = int(1, 20), a = b + d; return a * c > 100 ? null : item(`(${a} − ${b}) · ${c}`, d * c, a - b * c >= 0 ? a - b * c : null); },
    () => { const b = int(2, 10), c = int(2, 10), a = int(1, 30); return a + b * c > 100 ? null : item(`${a} + (${b} · ${c})`, a + b * c, (a + b) * c <= 100 ? (a + b) * c : null); }
  ];

  const pickFrom = (makers) => () => makers[Math.floor(rand() * makers.length)]();

  School.register({
    id: "3-matematika-zavorky",
    sections: [
      {
        id: "zavorky-plus-minus",
        title: "Závorky se sčítáním a odčítáním",
        icon: "🧮",
        type: "choice",
        drill: true,
        instructions: "Nejdřív vypočítej, co je v závorce. Třeba 50 − (20 + 5) = 50 − 25 = 25.",
        pick: "auto",
        items: collect(80, pickFrom(plusMinus))
      },
      {
        id: "zavorky-nasobeni-deleni",
        title: "Závorky s násobením a dělením",
        icon: "✖️",
        type: "choice",
        drill: true,
        instructions: "Nejdřív vypočítej, co je v závorce. Třeba 3 · (15 − 8) = 3 · 7 = 21.",
        pick: "auto",
        items: collect(80, pickFrom(timesDivide))
      }
    ]
  });
})();
