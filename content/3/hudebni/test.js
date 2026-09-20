// Test pro 3. třídu: čtení not v houslovém klíči, délky, pomlky, tečky.
(() => {
  const treble = (items) => ({ clef: "houslovy", items });
  const read = (note, options, hint) => ({
    prompt: "Jaká je to nota?",
    staff: treble([{ note, dur: "q" }]),
    options,
    answer: note,
    explanation: hint
  });

  School.register({
    id: "3-hudebni-test",
    sections: [
      {
        id: "cteni",
        title: "Čtení not",
        icon: "🎼",
        type: "choice",
        instructions: "Vyber jméno noty.",
        items: [
          read("e1", ["c1", "e1", "g1", "h1"], "e1 sedí na první lince zdola."),
          read("a1", ["g1", "a1", "h1", "c2"], "a1 je ve druhé mezeře zdola."),
          read("d2", ["h1", "c2", "d2", "f2"], "d2 sedí na čtvrté lince zdola."),
          read("c1", ["c1", "d1", "e1", "c2"], "c1 leží na pomocné lince pod osnovou."),
          read("f1", ["e1", "f1", "g1", "a1"], "f1 je v první mezeře zdola."),
          {
            prompt: "Které noty jsou zapsané?",
            staff: treble([{ note: "g1", dur: "q" }, { note: "h1", dur: "q" }, { note: "c2", dur: "q" }]),
            options: ["g1 h1 c2", "g1 a1 h1", "f1 a1 c2", "e1 g1 h1"],
            answer: "g1 h1 c2",
            explanation: "Čti zleva doprava: g1 (2. linka), h1 (3. linka), c2 (3. mezera)."
          }
        ]
      },
      {
        id: "delky",
        title: "Délky not a pomlky",
        icon: "⏱️",
        type: "choice",
        instructions: "Počítej doby.",
        items: [
          { prompt: "Jak se jmenuje tato nota?", staff: treble([{ note: "h1", dur: "h" }]), options: ["celá", "půlová", "čtvrťová", "osminová"], answer: "půlová", explanation: "Prázdné kolečko s nožičkou je půlová nota." },
          { prompt: "Kolik dob trvá celá nota?", options: ["1", "2", "3", "4"], answer: "4", explanation: "Celá nota trvá 4 doby." },
          { prompt: "Kolik čtvrťových not se vejde do půlové noty?", options: ["1", "2", "3", "4"], answer: "2", explanation: "Půlová = 2 čtvrťové." },
          { prompt: "Co je na osnově zapsané?", staff: { clef: "houslovy", items: [{ rest: "q" }] }, options: ["čtvrťová pomlka", "čtvrťová nota", "celá pomlka", "půlová pomlka"], answer: "čtvrťová pomlka", explanation: "Klikatá značka uprostřed osnovy je čtvrťová pomlka." },
          { prompt: "Co znamená pomlka?", options: ["ticho", "hraj nahlas", "hraj rychle", "opakuj"], answer: "ticho", explanation: "Během pomlky se nehraje ani nezpívá." }
        ]
      },
      {
        id: "znacky",
        title: "Klíč a tečky",
        icon: "🎯",
        type: "choice",
        instructions: "Poslední otázky o osnově a značkách.",
        items: [
          { prompt: "Kolik linek má notová osnova?", options: ["4", "5", "6", "7"], answer: "5", explanation: "Pět linek a čtyři mezery." },
          { prompt: "Na které lince je nota g1?", options: ["na první zdola", "na druhé zdola", "na třetí zdola", "na čtvrté zdola"], answer: "na druhé zdola", explanation: "Podle ní se houslový klíč jmenuje G klíč." },
          { prompt: "Kolik dob trvá tato nota?", staff: treble([{ note: "g1", dur: "h", dot: true }]), options: ["1", "2", "3", "4"], answer: "3", explanation: "Půlová s tečkou = 2 + 1 = 3 doby." },
          { prompt: "Co znamená tečka pod notou?", options: ["hraj krátce (staccato)", "prodlouží notu", "hraj potichu", "nota se nehraje"], answer: "hraj krátce (staccato)", explanation: "Tečka nad notou nebo pod notou je staccato." }
        ]
      }
    ]
  });
})();
