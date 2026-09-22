// Test pro 5. třídu: čtení not v obou klíčích, délky, posuvky, stupnice, tempa.
(() => {
  const treble = (items) => ({ clef: "houslovy", items });
  const bass = (items) => ({ clef: "basovy", items });
  const read = (clef, note, options, hint) => ({
    prompt: clef === "basovy" ? "Jaká je to nota? (basový klíč)" : "Jaká je to nota? (houslový klíč)",
    staff: { clef, items: [{ note, dur: "q" }] },
    options,
    answer: note,
    explanation: hint
  });

  School.register({
    id: "5-hudebni-test",
    sections: [
      {
        id: "cteni",
        title: "Čtení not",
        icon: "🎼",
        type: "choice",
        instructions: "Nejdřív se podívej na klíč.",
        items: [
          read("houslovy", "h1", ["g1", "a1", "h1", "d2"], "h1 sedí na prostřední lince."),
          read("houslovy", "e2", ["c2", "d2", "e2", "f2"], "e2 je ve čtvrté mezeře zdola."),
          read("basovy", "c", ["H", "c", "d", "e"], "c je ve druhé mezeře zdola."),
          read("basovy", "a", ["f", "g", "a", "c1"], "a sedí na páté lince."),
          read("basovy", "f", ["d", "e", "f", "g"], "f sedí na čtvrté lince, mezi tečkami klíče."),
          {
            prompt: "Které noty jsou zapsané?",
            staff: bass([{ note: "G", dur: "q" }, { note: "H", dur: "q" }, { note: "d", dur: "q" }]),
            options: ["G H d", "G A H", "H d f", "A c e"],
            answer: "G H d",
            explanation: "V basovém klíči jsou na linkách zdola G H d f a."
          }
        ]
      },
      {
        id: "delky-posuvky",
        title: "Délky a posuvky",
        icon: "♯",
        type: "choice",
        instructions: "Počítej doby a všímej si posuvek.",
        items: [
          { prompt: "Jak se jmenuje tato nota?", staff: treble([{ note: "h1", dur: "s" }]), options: ["šestnáctinová", "osminová", "čtvrťová", "půlová"], answer: "šestnáctinová", explanation: "Dva praporky = šestnáctinová." },
          { prompt: "Kolik dob trvá tato nota?", staff: treble([{ note: "g1", dur: "q", dot: true }]), options: ["1", "1 a půl", "2", "3"], answer: "1 a půl", explanation: "Čtvrťová (1) + polovina = 1 a půl doby." },
          { prompt: "Jak se jmenuje tato nota?", staff: treble([{ note: "f1", dur: "q", acc: "#" }]), options: ["fis1", "f1", "ges1", "fes1"], answer: "fis1", explanation: "Křížek zvýší f o půltón." },
          { prompt: "Jak se jmenuje tato nota?", staff: treble([{ note: "h1", dur: "q", acc: "b" }]), options: ["b1", "h1", "as1", "his1"], answer: "b1", explanation: "Snížené h je v češtině b." },
          { prompt: "Mezi kterými tóny je půltón?", options: ["c–d", "e–f", "g–a", "a–h"], answer: "e–f", explanation: "Půltóny jsou mezi e–f a h–c." }
        ]
      },
      {
        id: "stupnice-tempa",
        title: "Stupnice a tempa",
        icon: "🪜",
        type: "choice",
        instructions: "Předznamenání a italské názvy temp.",
        items: [
          { prompt: "Která stupnice má toto předznamenání?", staff: { clef: "houslovy", keySig: { sharps: 1 }, items: [{ note: "g1", dur: "q" }] }, options: ["G dur", "C dur", "D dur", "F dur"], answer: "G dur", explanation: "Jeden křížek (fis) má G dur." },
          { prompt: "Kolik béček má stupnice F dur?", options: ["žádné", "1", "2", "3"], answer: "1", explanation: "F dur má jedno béčko – b." },
          { prompt: "Do které skupiny patří tempo lento?", options: ["pomalá", "mírná", "rychlá", "velmi rychlá"], answer: "pomalá", explanation: "Lento = zvolna, pomalu." },
          { prompt: "Které tempo je nejrychlejší?", options: ["presto", "allegro", "andante", "adagio"], answer: "presto", explanation: "Presto = velmi rychle." }
        ]
      }
    ]
  });
})();
