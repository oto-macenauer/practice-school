// Procvičování: čtení not v houslovém klíči (c1–c2), délky not, pomlky, tečky.
(() => {
  const treble = (items) => ({ clef: "houslovy", items });
  const one = (note, dur) => treble([{ note, dur: dur || "q" }]);

  /** Jedna nota na osnově → jak se jmenuje. Opakované noty mají jinou délku,
      aby šlo rozlišit, na které otázce se chyba stala. */
  const read = (note, options, hint, dur) => ({
    prompt: "Jaká je to nota?",
    staff: one(note, dur),
    options,
    answer: note,
    explanation: hint
  });

  /** Krátká melodie → které noty jsou zapsané. */
  const melody = (notes, options) => ({
    prompt: "Které noty jsou zapsané?",
    staff: treble(notes.split(" ").map((n) => ({ note: n, dur: "q" }))),
    options,
    answer: notes,
    explanation: "Čti zleva doprava: " + notes + "."
  });

  School.register({
    id: "3-hudebni-cteni-not",
    sections: [
      {
        id: "cteni-not",
        title: "Čtení not (c1–c2)",
        icon: "🎼",
        type: "choice",
        instructions: "Podívej se, kde nota leží, a vyber její jméno.",
        pick: "auto",
        items: [
          read("c1", ["c1", "d1", "e1", "h1"], "c1 leží pod osnovou na pomocné lince."),
          read("d1", ["c1", "d1", "e1", "f1"], "d1 visí pod první linkou."),
          read("e1", ["c1", "e1", "g1", "h1"], "e1 sedí na první lince zdola."),
          read("f1", ["e1", "f1", "g1", "a1"], "f1 je v první mezeře zdola."),
          read("g1", ["e1", "f1", "g1", "h1"], "g1 sedí na druhé lince – tam se točí houslový klíč."),
          read("a1", ["g1", "a1", "h1", "c2"], "a1 je ve druhé mezeře zdola."),
          read("h1", ["g1", "a1", "h1", "d2"], "h1 sedí na prostřední (třetí) lince."),
          read("c2", ["a1", "h1", "c2", "d2"], "c2 je ve třetí mezeře zdola."),
          read("d2", ["h1", "c2", "d2", "e2"], "d2 sedí na čtvrté lince."),
          read("e2", ["c2", "d2", "e2", "f2"], "e2 je ve čtvrté mezeře."),
          read("f2", ["d2", "e2", "f2", "g2"], "f2 sedí na páté (nejvyšší) lince."),
          read("e1", ["d1", "e1", "f1", "g1"], "e1 sedí na první lince zdola.", "h"),
          read("g1", ["f1", "g1", "a1", "c2"], "g1 sedí na druhé lince zdola.", "h"),
          read("h1", ["a1", "h1", "c2", "e2"], "h1 sedí na prostřední lince.", "h"),
          read("d2", ["c2", "d2", "f2", "a1"], "d2 sedí na čtvrté lince zdola.", "h"),
          read("f1", ["d1", "f1", "h1", "d2"], "f1 je v první mezeře zdola.", "h"),
          read("a1", ["c1", "e1", "a1", "f2"], "a1 je ve druhé mezeře zdola.", "h"),
          read("c2", ["c1", "g1", "c2", "e2"], "c2 je ve třetí mezeře – o oktávu výš než c1.", "h"),
          read("c1", ["c1", "e1", "g1", "c2"], "c1 má vlastní pomocnou linku pod osnovou.", "w"),
          read("e2", ["e1", "g1", "e2", "f2"], "e2 je ve čtvrté mezeře zdola.", "h")
        ]
      },
      {
        id: "linky-a-mezery",
        title: "Linky a mezery",
        icon: "📏",
        type: "choice",
        instructions: "Linky i mezery počítáme vždy zdola nahoru.",
        pick: "auto",
        items: [
          { prompt: "Která nota sedí na první lince zdola?", options: ["c1", "d1", "e1", "g1"], answer: "e1", explanation: "Na linkách jsou zdola: e1, g1, h1, d2, f2." },
          { prompt: "Která nota sedí na druhé lince zdola?", options: ["e1", "f1", "g1", "h1"], answer: "g1", explanation: "Druhá linka je g1 – podle ní se jmenuje G klíč." },
          { prompt: "Která nota sedí na prostřední lince?", options: ["g1", "a1", "h1", "c2"], answer: "h1", explanation: "Třetí (prostřední) linka je h1." },
          { prompt: "Která nota je v první mezeře zdola?", options: ["e1", "f1", "g1", "a1"], answer: "f1", explanation: "V mezerách jsou zdola: f1, a1, c2, e2." },
          { prompt: "Která nota je ve druhé mezeře zdola?", options: ["g1", "a1", "h1", "c2"], answer: "a1", explanation: "V mezerách jsou zdola: f1, a1, c2, e2." },
          { prompt: "Kolik mezer má notová osnova?", options: ["3", "4", "5", "6"], answer: "4", explanation: "Pět linek a mezi nimi čtyři mezery." },
          { prompt: "Kde leží nota c1?", options: ["na pomocné lince pod osnovou", "na první lince zdola", "v první mezeře", "nad osnovou"], answer: "na pomocné lince pod osnovou", explanation: "Pro c1 se kreslí krátká pomocná linka." },
          { prompt: "Co nám říká houslový klíč?", options: ["že na druhé lince je g1", "že na první lince je c1", "jak rychle hrát", "jak nahlas hrát"], answer: "že na druhé lince je g1", explanation: "Houslový klíč = G klíč, jeho spirála obtáčí linku g1." }
        ]
      },
      {
        id: "delky-not",
        title: "Délky not",
        icon: "⏱️",
        type: "choice",
        instructions: "Podle tvaru noty poznáš, jak dlouho zní.",
        pick: "auto",
        items: [
          { prompt: "Jak se jmenuje tato nota?", staff: one("h1", "w"), options: ["celá", "půlová", "čtvrťová", "osminová"], answer: "celá", explanation: "Prázdné kolečko bez nožičky je celá nota (4 doby)." },
          { prompt: "Jak se jmenuje tato nota?", staff: one("h1", "h"), options: ["celá", "půlová", "čtvrťová", "osminová"], answer: "půlová", explanation: "Prázdné kolečko s nožičkou je půlová nota (2 doby)." },
          { prompt: "Jak se jmenuje tato nota?", staff: one("h1", "q"), options: ["celá", "půlová", "čtvrťová", "osminová"], answer: "čtvrťová", explanation: "Plné kolečko s nožičkou je čtvrťová nota (1 doba)." },
          { prompt: "Jak se jmenuje tato nota?", staff: one("h1", "e"), options: ["celá", "půlová", "čtvrťová", "osminová"], answer: "osminová", explanation: "Plné kolečko s nožičkou a praporkem je osminová nota (půl doby)." },
          { prompt: "Kolik dob trvá tato nota?", staff: one("g1", "w"), options: ["1", "2", "3", "4"], answer: "4", explanation: "Celá nota trvá 4 doby." },
          { prompt: "Kolik dob trvá tato nota?", staff: one("g1", "h"), options: ["1", "2", "3", "4"], answer: "2", explanation: "Půlová nota trvá 2 doby." },
          { prompt: "Kolik dob trvá tato nota?", staff: one("g1", "q"), options: ["1", "2", "3", "4"], answer: "1", explanation: "Čtvrťová nota trvá 1 dobu." },
          { prompt: "Kolik čtvrťových not se vejde do jedné celé noty?", options: ["2", "3", "4", "8"], answer: "4", explanation: "Celá = 4 čtvrťové." },
          { prompt: "Kolik osminových not se vejde do jedné čtvrťové?", options: ["1", "2", "3", "4"], answer: "2", explanation: "Osminová je poloviční oproti čtvrťové." },
          { prompt: "Která nota je nejdelší?", options: ["celá", "půlová", "čtvrťová", "osminová"], answer: "celá", explanation: "Celá nota trvá 4 doby – nejdéle." },
          { prompt: "Která nota je nejkratší?", options: ["celá", "půlová", "čtvrťová", "osminová"], answer: "osminová", explanation: "Osminová trvá půl doby." }
        ]
      },
      {
        id: "pomlky",
        title: "Pomlky",
        icon: "🤫",
        type: "choice",
        instructions: "Pomlka znamená ticho. Trvá stejně dlouho jako stejně pojmenovaná nota.",
        pick: "auto",
        items: [
          { prompt: "Co je na osnově zapsané?", staff: { clef: "houslovy", items: [{ rest: "q" }] }, options: ["čtvrťová pomlka", "čtvrťová nota", "půlová pomlka", "celá pomlka"], answer: "čtvrťová pomlka", explanation: "Klikatá značka uprostřed osnovy je čtvrťová pomlka – ticho na 1 dobu." },
          { prompt: "Co je na osnově zapsané?", staff: { clef: "houslovy", items: [{ rest: "h" }] }, options: ["půlová pomlka", "celá pomlka", "čtvrťová pomlka", "osminová pomlka"], answer: "půlová pomlka", explanation: "Obdélníček ležící na prostřední lince je půlová pomlka (2 doby)." },
          { prompt: "Co je na osnově zapsané?", staff: { clef: "houslovy", items: [{ rest: "w" }] }, options: ["celá pomlka", "půlová pomlka", "čtvrťová pomlka", "osminová pomlka"], answer: "celá pomlka", explanation: "Obdélníček visící pod čtvrtou linkou je celá pomlka (4 doby)." },
          { prompt: "Co je na osnově zapsané?", staff: { clef: "houslovy", items: [{ rest: "e" }] }, options: ["osminová pomlka", "čtvrťová pomlka", "půlová pomlka", "celá pomlka"], answer: "osminová pomlka", explanation: "Pomlka s jedním praporkem je osminová (půl doby)." },
          { prompt: "Co děláš, když je v notách pomlka?", options: ["mlčíš", "hraješ potichu", "hraješ nahlas", "hraješ rychleji"], answer: "mlčíš", explanation: "Pomlka je ticho – nehraje se a nezpívá se." },
          { prompt: "Kolik dob trvá čtvrťová pomlka?", options: ["1", "2", "3", "4"], answer: "1", explanation: "Stejně jako čtvrťová nota – 1 dobu." },
          { prompt: "Kolik dob trvá celá pomlka?", options: ["1", "2", "3", "4"], answer: "4", explanation: "Stejně jako celá nota – 4 doby." }
        ]
      },
      {
        id: "tecky",
        title: "Tečky u noty",
        icon: "🎯",
        type: "choice",
        instructions: "Pozor: tečka vedle noty a tečka pod notou znamenají něco jiného.",
        pick: "auto",
        items: [
          { prompt: "Kolik dob trvá tato nota?", staff: treble([{ note: "h1", dur: "h", dot: true }]), options: ["2", "3", "4", "1"], answer: "3", explanation: "Půlová (2 doby) s tečkou se prodlouží o polovinu: 2 + 1 = 3 doby." },
          { prompt: "Co znamená tečka vedle noty?", options: ["prodlouží ji o polovinu", "zkrátí ji na polovinu", "znamená ticho místo noty", "hraj krátce"], answer: "prodlouží ji o polovinu", explanation: "Tečka za hlavičkou přidá polovinu původní délky." },
          { prompt: "Co znamená tečka pod notou nebo nad notou?", options: ["hraj krátce (staccato)", "prodlouží notu o polovinu", "hraj nahlas", "nota se nehraje"], answer: "hraj krátce (staccato)", explanation: "Je to staccato – krátce a odsazeně." },
          { prompt: "Jak se hraje tato nota?", staff: { clef: "houslovy", items: [{ note: "g1", dur: "q", staccato: true }] }, options: ["krátce a odsazeně", "dlouze a vázaně", "třikrát hned za sebou", "vůbec se nehraje"], answer: "krátce a odsazeně", explanation: "Tečka pod notou = staccato." },
          { prompt: "Kolik dob trvá čtvrťová nota s tečkou?", options: ["1", "1,5", "2", "3"], answer: "1,5", explanation: "1 doba + polovina (0,5) = 1,5 doby." },
          { prompt: "Mění tečka pod notou délku noty?", options: ["ne, mění jen způsob hraní", "ano, prodlouží ji o polovinu", "ano, zkrátí ji na polovinu", "ano, zdvojnásobí ji"], answer: "ne, mění jen způsob hraní", explanation: "Staccato délku nemění – nota se jen zahraje krátce." }
        ]
      },
      {
        id: "melodie",
        title: "Čtení melodie",
        icon: "🎶",
        type: "choice",
        instructions: "Přečti noty zleva doprava.",
        pick: "auto",
        items: [
          melody("c1 e1 g1", ["c1 e1 g1", "c1 d1 e1", "e1 g1 h1", "c1 f1 a1"]),
          melody("g1 a1 h1", ["g1 a1 h1", "g1 h1 d2", "f1 g1 a1", "a1 h1 c2"]),
          melody("e1 f1 g1", ["e1 f1 g1", "e1 g1 h1", "d1 e1 f1", "f1 g1 a1"]),
          melody("h1 a1 g1", ["h1 a1 g1", "g1 a1 h1", "c2 h1 a1", "h1 g1 e1"]),
          melody("c2 h1 a1", ["c2 h1 a1", "h1 a1 g1", "c2 a1 f1", "a1 h1 c2"]),
          melody("d1 f1 a1", ["d1 f1 a1", "c1 e1 g1", "d1 e1 f1", "f1 a1 c2"]),
          melody("g1 e1 c1", ["g1 e1 c1", "c1 e1 g1", "a1 f1 d1", "g1 f1 e1"]),
          melody("f1 a1 c2", ["f1 a1 c2", "e1 g1 h1", "f1 g1 a1", "d1 f1 a1"])
        ]
      }
    ]
  });
})();
