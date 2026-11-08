// Matematika 3. třída – čtvrtletní písemka (listopad), podle opakovacího listu ze školy:
// sčítání a odčítání s přechodem, závorky, násobilka, slovní úlohy, přímka a úsečka.
School.register({
  id: "3-matematika-ctvrtletni-pisemka",
  sections: [
    {
      id: "pocitani",
      title: "Vypočítej",
      icon: "➕",
      type: "choice",
      instructions: "Sčítání a odčítání s přechodem přes desítku.",
      items: [
        { prompt: "64 + 8 = ___", options: ["72", "62", "71", "82"], answer: "72", explanation: "64 + 6 = 70, 70 + 2 = 72." },
        { prompt: "37 + 5 = ___", options: ["42", "32", "41", "52"], answer: "42", explanation: "37 + 3 = 40, 40 + 2 = 42." },
        { prompt: "72 − 6 = ___", options: ["66", "76", "68", "64"], answer: "66", explanation: "72 − 2 = 70, 70 − 4 = 66." },
        { prompt: "50 − 4 = ___", options: ["46", "54", "44", "45"], answer: "46", explanation: "50 − 4 = 46." },
        { prompt: "85 − 48 = ___", options: ["37", "47", "43", "33"], answer: "37", explanation: "85 − 40 = 45, 45 − 8 = 37." }
      ]
    },
    {
      id: "zavorky",
      title: "Příklady se závorkami",
      icon: "🧮",
      type: "choice",
      instructions: "Nejdřív vypočítej, co je v závorce.",
      items: [
        { prompt: "(24 : 4) + 9 = ___", options: ["15", "16", "14", "6"], answer: "15", explanation: "24 : 4 = 6, 6 + 9 = 15." },
        { prompt: "3 · (15 − 8) = ___", options: ["21", "37", "24", "18"], answer: "21", explanation: "15 − 8 = 7, 3 · 7 = 21." },
        { prompt: "40 − (18 : 3) = ___", options: ["34", "6", "36", "24"], answer: "34", explanation: "18 : 3 = 6, 40 − 6 = 34." },
        { prompt: "50 − (20 + 5) = ___", options: ["25", "35", "30", "15"], answer: "25", explanation: "20 + 5 = 25, 50 − 25 = 25." }
      ]
    },
    {
      id: "nasobilka",
      title: "Násobení a dělení",
      icon: "✖️",
      type: "choice",
      instructions: "Malá násobilka.",
      items: [
        { prompt: "6 · 7 = ___", options: ["42", "48", "36", "13"], answer: "42", explanation: "6 · 7 = 42." },
        { prompt: "4 · 8 = ___", options: ["32", "36", "28", "12"], answer: "32", explanation: "4 · 8 = 32." },
        { prompt: "32 : 4 = ___", options: ["8", "7", "9", "6"], answer: "8", explanation: "Protože 8 · 4 = 32." },
        { prompt: "45 : 5 = ___", options: ["9", "8", "7", "40"], answer: "9", explanation: "Protože 9 · 5 = 45." },
        { prompt: "9 · 0 = ___", options: ["0", "9", "1", "90"], answer: "0", explanation: "Cokoli krát 0 je 0." },
        { prompt: "56 : 7 = ___", options: ["8", "7", "9", "6"], answer: "8", explanation: "Protože 8 · 7 = 56." }
      ]
    },
    {
      id: "slovni-ulohy",
      title: "Slovní úlohy",
      icon: "📖",
      type: "choice",
      instructions: "Přečti si úlohu pozorně. Pozor na „o 7 méně“ a „třikrát méně“.",
      items: [
        { prompt: "Na parkovišti stálo 24 červených aut a o 7 méně modrých aut. Kolik modrých aut stálo na parkovišti?", options: ["17", "31", "18", "27"], answer: "17", explanation: "24 − 7 = 17." },
        { prompt: "Babička upekla 27 koláčů. Anička upekla třikrát méně koláčů než babička. Kolik koláčů upekla Anička?", options: ["9", "24", "81", "30"], answer: "9", explanation: "27 : 3 = 9." },
        { prompt: "Do košíku se vejde 7 kg jablek. Kolik kg bude v 8 košících?", options: ["56", "15", "54", "63"], answer: "56", explanation: "8 · 7 = 56 kg." },
        { prompt: "Do kolika košíků po 7 kg rozdělíme 63 kg jablek?", options: ["9", "8", "7", "56"], answer: "9", explanation: "63 : 7 = 9." }
      ]
    },
    {
      id: "geometrie",
      title: "Přímka a úsečka",
      icon: "📏",
      type: "choice",
      instructions: "Vyber správnou odpověď.",
      items: [
        { prompt: "Co se dá změřit pravítkem?", options: ["úsečka", "přímka", "bod", "nic"], answer: "úsečka", explanation: "Přímka nemá konec, nedá se změřit." },
        { prompt: "Narýsuješ přímku a, na ní body A, B a mimo ni body C, D. Které body leží na přímce a?", options: ["A, B", "C, D", "A, C", "všechny"], answer: "A, B", explanation: "C a D jsou mimo přímku." },
        { prompt: "|KL| = 5 cm, |LM| = 3 cm. Kolik cm měří obě úsečky dohromady?", options: ["8 cm", "2 cm", "15 cm", "53 cm"], answer: "8 cm", explanation: "5 + 3 = 8 cm." }
      ]
    }
  ]
});
