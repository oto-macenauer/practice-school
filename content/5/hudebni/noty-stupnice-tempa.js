// Výklad pro 5. třídu: basový klíč, délky not, půltóny a posuvky,
// stupnice s předznamenáním, pomlky a tempa.
(() => {
  const N = School.notation;
  const staff = (items, opts) => N.render(Object.assign({ clef: "houslovy", items }, opts || {}));
  const bass = (items, opts) => N.render(Object.assign({ clef: "basovy", items }, opts || {}));
  const q = (note) => ({ note, dur: "q" });

  School.register({
    id: "5-hudebni-noty-stupnice-tempa",
    lesson: [
      {
        type: "text",
        html:
          "<h2>Dva klíče</h2>" +
          "<p><b>Houslový klíč</b> (G klíč) se používá pro vyšší tóny. Říká, že na druhé lince zdola je <b>g1</b>.</p>" +
          staff([q("e1"), q("g1"), q("h1"), q("d2"), q("f2")], { label: "houslový klíč – noty na linkách: e1 g1 h1 d2 f2" }) +
          "<p><b>Basový klíč</b> (F klíč) se používá pro hlubší tóny. Jeho dvě tečky obklopují <b>čtvrtou linku</b>, na které je nota <b>f</b>.</p>" +
          bass([q("G"), q("H"), q("d"), q("f"), q("a")], { label: "basový klíč – noty na linkách: G H d f a" }) +
          "<p>V mezerách basového klíče jsou zdola <b>A, c, e, g</b>. Stejná nota se tedy v každém klíči píše jinde – proto je vždy nutné nejdřív podívat se na klíč.</p>"
      },
      {
        type: "table",
        head: ["Kde", "Houslový klíč", "Basový klíč"],
        rows: [
          ["na linkách (zdola)", "e1 g1 h1 d2 f2", "G H d f a"],
          ["v mezerách (zdola)", "f1 a1 c2 e2", "A c e g"],
          ["pomocná linka pod osnovou", "c1", "C"]
        ]
      },
      {
        type: "text",
        html:
          "<h2>Délky not a pomlky</h2>" +
          "<p>Každá kratší nota je vždy polovinou té předchozí.</p>" +
          staff([{ note: "h1", dur: "w" }, { note: "h1", dur: "h" }, { note: "h1", dur: "q" }, { note: "h1", dur: "e" }, { note: "h1", dur: "s" }],
            { label: "celá 4 – půlová 2 – čtvrťová 1 – osminová ½ – šestnáctinová ¼ doby" }) +
          staff([{ rest: "w" }, { rest: "h" }, { rest: "q" }, { rest: "e" }, { rest: "s" }],
            { label: "stejně dlouhé pomlky (ticho)" }) +
          "<p><b>Tečka vedle noty</b> prodlouží notu o polovinu: půlová s tečkou = 3 doby, čtvrťová s tečkou = 1,5 doby. " +
          "<b>Tečka nad notou nebo pod notou</b> je <b>staccato</b> – nota se zahraje krátce a odsazeně, délka se nemění.</p>" +
          staff([{ note: "g1", dur: "h", dot: true }, { note: "g1", dur: "q", staccato: true }, { note: "g1", dur: "q", tenuto: true }],
            { label: "půlová s tečkou – staccato – tenuto (drž plnou délku)" })
      },
      {
        type: "text",
        html:
          "<h2>Půltón a celý tón</h2>" +
          "<p><b>Půltón</b> je nejmenší vzdálenost mezi dvěma tóny – na klavíru jsou to dvě sousední klávesy (i s černými). " +
          "Dva půltóny dávají <b>celý tón</b>.</p>" +
          "<p>V řadě <b>c d e f g a h c</b> jsou půltóny jen mezi <b>e–f</b> a <b>h–c</b> (tam chybí černá klávesa). Všude jinde je celý tón.</p>" +
          staff([q("e1"), q("f1"), q("h1"), q("c2")], { label: "e1–f1 a h1–c2 jsou půltóny" })
      },
      {
        type: "text",
        html:
          "<h2>Posuvky: křížek, béčko, odrážka</h2>" +
          "<ul>" +
          "<li><b>Křížek ♯</b> zvýší notu o půltón. K názvu se přidá <b>-is</b>: c → <b>cis</b>, f → <b>fis</b>, g → <b>gis</b>.</li>" +
          "<li><b>Béčko ♭</b> sníží notu o půltón. K názvu se přidá <b>-es</b>: d → <b>des</b>, e → <b>es</b>, a → <b>as</b>. Z noty <b>h</b> se stane <b>b</b>.</li>" +
          "<li><b>Odrážka ♮</b> posuvku zruší – nota se vrátí na původní výšku.</li>" +
          "</ul>" +
          staff([{ note: "f1", dur: "q", acc: "#" }, { note: "h1", dur: "q", acc: "b" }, { note: "f1", dur: "q", acc: "n" }],
            { label: "fis1 – b1 – f1 (odrážka zruší křížek)" })
      },
      {
        type: "text",
        html:
          "<h2>Stupnice a předznamenání</h2>" +
          "<p><b>Stupnice</b> je řada osmi tónů od základního tónu k témuž tónu o oktávu výš. V durové stupnici jsou půltóny vždy mezi <b>3.–4.</b> a <b>7.–8.</b> stupněm.</p>" +
          staff([q("c1"), q("d1"), q("e1"), q("f1"), q("g1"), q("a1"), q("h1"), q("c2")], { label: "C dur – bez předznamenání" }) +
          "<p><b>Předznamenání</b> je skupina křížků nebo béček hned za klíčem. Platí pro celou skladbu a pro všechny oktávy.</p>" +
          staff([q("g1"), q("a1"), q("h1"), q("c2"), q("d2"), q("e2"), q("f2"), q("g2")], { keySig: { sharps: 1 }, label: "G dur – 1 křížek (fis)" }) +
          staff([q("f1"), q("g1"), q("a1"), q("h1"), q("c2"), q("d2"), q("e2"), q("f2")], { keySig: { flats: 1 }, label: "F dur – 1 béčko (b)" }) +
          "<p>Křížky přibývají v pořadí <b>fis, cis, gis, dis</b>…, béčka v pořadí <b>b, es, as, des</b>…</p>"
      },
      {
        type: "table",
        head: ["Stupnice", "Předznamenání", "Které tóny se mění"],
        rows: [
          ["C dur", "žádné", "–"],
          ["G dur", "1 křížek", "fis"],
          ["D dur", "2 křížky", "fis, cis"],
          ["F dur", "1 béčko", "b (snížené h)"],
          ["B dur", "2 béčka", "b, es"]
        ]
      },
      {
        type: "text",
        html:
          "<h2>Tempo – jak rychle hrát</h2>" +
          "<p>Tempo je rychlost skladby. Označuje se italskými slovy hned nad začátkem not.</p>"
      },
      {
        type: "table",
        head: ["Skupina", "Italsky", "Česky"],
        rows: [
          ["pomalá", "largo", "široce, velmi pomalu"],
          ["pomalá", "adagio", "pomalu"],
          ["pomalá", "lento", "zvolna"],
          ["mírná", "andante", "krokem, mírně"],
          ["mírná", "moderato", "středně, umírněně"],
          ["rychlá", "allegro", "rychle, vesele"],
          ["rychlá", "vivace", "živě"],
          ["rychlá", "presto", "velmi rychle"]
        ]
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
          { prompt: "Jaká je to nota?", staff: { clef: "basovy", items: [{ note: "f", dur: "q" }] }, options: ["d", "f", "a", "c"], answer: "f", explanation: "Čtvrtá linka v basovém klíči mezi dvěma tečkami je nota f." },
          { prompt: "Mezi kterými tóny je půltón?", options: ["c–d", "e–f", "f–g", "g–a"], answer: "e–f", explanation: "Půltóny jsou jen mezi e–f a h–c." },
          { prompt: "Co udělá křížek před notou?", options: ["zvýší ji o půltón", "sníží ji o půltón", "prodlouží ji", "zkrátí ji"], answer: "zvýší ji o půltón", explanation: "Z f se stane fis." },
          { prompt: "Kolik křížků má stupnice G dur?", options: ["žádný", "1", "2", "3"], answer: "1", explanation: "G dur má jeden křížek – fis." },
          { prompt: "Které tempo je nejrychlejší?", options: ["largo", "andante", "allegro", "presto"], answer: "presto", explanation: "Presto = velmi rychle." },
          { prompt: "Kolik dob trvá šestnáctinová nota, když čtvrťová trvá jednu dobu?", options: ["čtvrtinu doby", "půl doby", "jednu dobu", "dvě doby"], answer: "čtvrtinu doby", explanation: "Šestnáctinová je polovina osminové, tedy čtvrtina čtvrťové." }
        ]
      }
    ]
  });
})();
