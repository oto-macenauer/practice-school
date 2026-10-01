// Matematika 3. třída – sčítání a odčítání do 20 a do 100 (bez přechodu a s přechodem přes desítku).
// Příklady se generují; náhoda je se stálým semínkem, aby prompty i možnosti byly pokaždé stejné
// (prompt je klíč chyby). `drill: true` = tisk jako hustý list příkladů ve sloupcích.
(() => {
  let seed = 3120;
  function rand() {
    seed = (seed + 0x6D2B79F5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  }

  /** Answer + 3 distinct wrong numbers picked from typical slips, all within 0..max. */
  function item(prompt, answer, slips, max) {
    const wrong = [];
    const pool = slips.map((d) => answer + d).filter((n) => n >= 0 && n <= max && n !== answer);
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

  const SLIPS_20 = [-2, -1, 1, 2, 10, -10];
  const SLIPS_100 = [-2, -1, 1, 2, -10, 10, -11, 11, -9, 9];
  const carries = (a, b) => (a % 10) + (b % 10) >= 10;
  const borrows = (a, b) => (a % 10) < (b % 10);

  function adds(from, to, test, slips) {
    const out = [];
    for (let a = 1; a < to; a++) {
      for (let b = 1; a + b <= to; b++) {
        if (a + b > from && test(a, b)) out.push(item(`${a} + ${b}`, a + b, slips, 100));
      }
    }
    return out;
  }

  function subs(from, to, test, slips) {
    const out = [];
    for (let a = from + 1; a <= to; a++) {
      for (let b = 1; b < a; b++) {
        if (test(a, b)) out.push(item(`${a} − ${b}`, a - b, slips, 100));
      }
    }
    return out;
  }

  const any = () => true;

  School.register({
    id: "3-matematika-scitani-a-odcitani",
    sections: [
      {
        id: "scitani-do-20",
        title: "Sčítání do 20",
        icon: "➕",
        type: "choice",
        drill: true,
        instructions: "Sečti čísla. Výsledek není větší než 20.",
        pick: "auto",
        items: adds(0, 20, any, SLIPS_20)
      },
      {
        id: "odcitani-do-20",
        title: "Odčítání do 20",
        icon: "➖",
        type: "choice",
        drill: true,
        instructions: "Odečti čísla. Počítáme s čísly do 20.",
        pick: "auto",
        items: subs(1, 20, any, SLIPS_20)
      },
      {
        id: "scitani-do-100-bez-prechodu",
        title: "Sčítání do 100 bez přechodu přes desítku",
        icon: "➕",
        type: "choice",
        drill: true,
        instructions: "Sečti zvlášť jednotky a zvlášť desítky. Jednotky dají dohromady nejvýš 9.",
        pick: "auto",
        items: adds(20, 100, (a, b) => !carries(a, b), SLIPS_100)
      },
      {
        id: "odcitani-do-100-bez-prechodu",
        title: "Odčítání do 100 bez přechodu přes desítku",
        icon: "➖",
        type: "choice",
        drill: true,
        instructions: "Odečti zvlášť jednotky a zvlášť desítky.",
        pick: "auto",
        items: subs(20, 100, (a, b) => !borrows(a, b), SLIPS_100)
      },
      {
        id: "scitani-do-100-s-prechodem",
        title: "Sčítání do 100 s přechodem přes desítku",
        icon: "🚀",
        type: "choice",
        drill: true,
        instructions: "Jednotky dají víc než 9 – nezapomeň přičíst desítku navíc.",
        pick: "auto",
        items: adds(20, 100, carries, SLIPS_100)
      },
      {
        id: "odcitani-do-100-s-prechodem",
        title: "Odčítání do 100 s přechodem přes desítku",
        icon: "🚀",
        type: "choice",
        drill: true,
        instructions: "Jednotek je málo – rozlož si příklad, třeba 52 − 7 = 52 − 2 − 5.",
        pick: "auto",
        items: subs(20, 100, borrows, SLIPS_100)
      }
    ]
  });
})();
