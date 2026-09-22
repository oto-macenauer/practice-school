// Výklad: notová osnova, houslový klíč, noty c1–c2, délky not a pomlky, tečky u noty.
// Obrázky osnovy kreslí School.notation (js/notation.js).
(() => {
  const N = School.notation;
  const staff = (items, opts) => N.render(Object.assign({ clef: "houslovy", items }, opts || {}));
  const q = (note) => ({ note, dur: "q" });

  School.register({
    id: "3-hudebni-noty-v-houslovem-klici",
    lesson: [
      {
        type: "text",
        html:
          "<h2>Notová osnova</h2>" +
          "<p>Noty se píšou do <b>notové osnovy</b>. Má <b>5 linek</b> a <b>4 mezery</b>. Linky se počítají <b>zdola nahoru</b>.</p>" +
          "<p>Nota může sedět <b>na lince</b> (linka jde notou), nebo <b>v mezeře</b> (mezi dvěma linkami).</p>" +
          staff([q("e1"), q("f1"), q("g1"), q("a1")], { label: "na lince – v mezeře – na lince – v mezeře" })
      },
      {
        type: "text",
        html:
          "<h2>Houslový klíč</h2>" +
          "<p><b>Houslový klíč</b> píšeme na začátek osnovy. Říká nám, že na <b>druhé lince zdola</b> bydlí nota <b>g1</b>. " +
          "Proto se mu také říká <b>G klíč</b> – jeho spirála se točí právě kolem téhle linky.</p>" +
          staff([q("g1")], { label: "g1 – druhá linka zdola" })
      },
      {
        type: "text",
        html:
          "<h2>Noty od c1 do c2</h2>" +
          "<p>Noty se jmenují <b>c, d, e, f, g, a, h</b> – pak se jména opakují od začátku. " +
          "Nota <b>c1</b> leží pod osnovou na krátké <b>pomocné lince</b>.</p>" +
          staff([q("c1"), q("d1"), q("e1"), q("f1"), q("g1"), q("a1"), q("h1"), q("c2")], { label: "c1  d1  e1  f1  g1  a1  h1  c2" }) +
          "<p><b>Pomůcka:</b> noty <b>na linkách</b> zdola nahoru jsou <b>e1, g1, h1, d2, f2</b>. " +
          "Noty <b>v mezerách</b> zdola nahoru jsou <b>f1, a1, c2, e2</b>.</p>"
      },
      {
        type: "text",
        html:
          "<h2>Jak dlouho nota zní</h2>" +
          "<p>Podle tvaru poznáš, jak je nota dlouhá. Počítáme na <b>doby</b> (jako když tleskáš).</p>" +
          staff([{ note: "h1", dur: "w" }, { note: "h1", dur: "h" }, { note: "h1", dur: "q" }, { note: "h1", dur: "e" }],
            { label: "celá – půlová – čtvrťová – osminová" })
      },
      {
        type: "table",
        head: ["Nota", "Jak vypadá", "Kolik dob"],
        rows: [
          ["celá", "prázdné kolečko bez nožičky", "4"],
          ["půlová", "prázdné kolečko s nožičkou", "2"],
          ["čtvrťová", "plné kolečko s nožičkou", "1"],
          ["osminová", "plné kolečko s nožičkou a praporkem", "půl doby"]
        ]
      },
      {
        type: "text",
        html:
          "<h2>Pomlky – kdy se mlčí</h2>" +
          "<p><b>Pomlka</b> znamená ticho. Každá nota má svoji pomlku, která trvá stejně dlouho.</p>" +
          staff([{ rest: "w" }, { rest: "h" }, { rest: "q" }, { rest: "e" }],
            { label: "celá – půlová – čtvrťová – osminová pomlka" }) +
          "<p>Celá pomlka je obdélníček, který <b>visí pod čtvrtou linkou</b>, půlová <b>leží na prostřední lince</b>.</p>"
      },
      {
        type: "text",
        html:
          "<h2>Dvě různé tečky</h2>" +
          "<p><b>Tečka vedle noty</b> (za hlavičkou) notu <b>prodlouží o polovinu</b>. " +
          "Půlová s tečkou tedy trvá 2 + 1 = <b>3 doby</b>.</p>" +
          staff([{ note: "g1", dur: "h", dot: true }, { note: "g1", dur: "q", dot: true }],
            { label: "půlová s tečkou = 3 doby, čtvrťová s tečkou = 1 a půl doby" }) +
          "<p><b>Tečka pod notou nebo nad notou</b> je něco jiného! Znamená <b>staccato</b> – " +
          "notu zahraj <b>krátce a odsazeně</b>, jako bys ji uštípl. Délku nemění.</p>" +
          staff([{ note: "e1", dur: "q", staccato: true }, { note: "g1", dur: "q", staccato: true }, { note: "c2", dur: "q", staccato: true }],
            { label: "staccato – krátce" })
      }
    ],
    sections: [
      {
        id: "rychla-kontrola",
        title: "Rychlá kontrola",
        icon: "✅",
        type: "choice",
        instructions: "Ověř si, co sis z výkladu zapamatoval/a.",
        items: [
          { prompt: "Kolik linek má notová osnova?", options: ["4", "5", "6", "7"], answer: "5", explanation: "Osnova má 5 linek a 4 mezery." },
          { prompt: "Na které lince bydlí nota g1?", options: ["na první zdola", "na druhé zdola", "na třetí zdola", "na páté zdola"], answer: "na druhé zdola", explanation: "Kolem druhé linky se točí spirála houslového klíče." },
          { prompt: "Jaká je to nota?", staff: { clef: "houslovy", items: [{ note: "g1", dur: "q" }] }, options: ["e1", "f1", "g1", "a1"], answer: "g1", explanation: "Nota sedí na druhé lince zdola – to je g1." },
          { prompt: "Kolik dob trvá půlová nota?", options: ["1", "2", "3", "4"], answer: "2", explanation: "Celá 4 doby, půlová 2 doby, čtvrťová 1 dobu." },
          { prompt: "Co znamená tečka vedle noty?", options: ["prodlouží ji o polovinu", "zkrátí ji na polovinu", "nota se nehraje", "nota se hraje krátce"], answer: "prodlouží ji o polovinu", explanation: "Půlová s tečkou = 2 + 1 = 3 doby." },
          { prompt: "Co znamená tečka pod notou?", options: ["hraj krátce (staccato)", "hraj dlouze", "prodlouží notu", "nota se opakuje"], answer: "hraj krátce (staccato)", explanation: "Tečka nad nebo pod notou je staccato – krátce a odsazeně." }
        ]
      }
    ]
  });
})();
