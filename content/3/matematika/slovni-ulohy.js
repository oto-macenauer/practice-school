// Matematika 3. třída – slovní úlohy: o n více / méně, n-krát více / méně,
// násobení a dělení (kg, Kč), úlohy na dva kroky a výběr správného výpočtu.
School.register({
  id: "3-matematika-slovni-ulohy",
  sections: [
    {
      id: "o-vice-mene",
      title: "O kolik více, o kolik méně",
      icon: "➕",
      type: "choice",
      instructions: "„O 7 více“ = přičítám 7. „O 7 méně“ = odčítám 7.",
      pick: "auto",
      items: [
        { prompt: "Na parkovišti stálo 24 červených aut a o 7 méně modrých aut. Kolik modrých aut stálo na parkovišti?", options: ["17", "31", "18", "27"], answer: "17", explanation: "O 7 méně → 24 − 7 = 17. Na parkovišti stálo 17 modrých aut." },
        { prompt: "Petr má 15 Kč. Jana má o 8 Kč více. Kolik Kč má Jana?", options: ["23", "7", "22", "13"], answer: "23", explanation: "O 8 více → 15 + 8 = 23 Kč." },
        { prompt: "Na hromadě bylo 85 kg písku. Pan Pilný naložil 48 kg do vozíku. Kolik kg písku zbylo na hromadě?", options: ["37", "47", "43", "133"], answer: "37", explanation: "85 − 48 = 37 kg." },
        { prompt: "Ve třídě je 13 chlapců a o 4 dívky více. Kolik je ve třídě dívek?", options: ["17", "9", "16", "27"], answer: "17", explanation: "O 4 více → 13 + 4 = 17 dívek." },
        { prompt: "Strom je vysoký 32 m. Dům je o 9 m nižší. Jak vysoký je dům?", options: ["23", "41", "24", "33"], answer: "23", explanation: "O 9 méně → 32 − 9 = 23 m." },
        { prompt: "Tonda přečetl 46 stran. Eva přečetla o 15 stran více. Kolik stran přečetla Eva?", options: ["61", "31", "51", "60"], answer: "61", explanation: "46 + 15 = 61 stran." },
        { prompt: "Kniha stojí 90 Kč, sešit o 65 Kč méně. Kolik stojí sešit?", options: ["25", "35", "155", "15"], answer: "25", explanation: "90 − 65 = 25 Kč." },
        { prompt: "Míša má 28 kuliček, Ondra 36. O kolik kuliček má Ondra více?", options: ["8", "64", "12", "18"], answer: "8", explanation: "36 − 28 = 8. Ondra má o 8 kuliček více." },
        { prompt: "V košíku je 54 jablek a 39 hrušek. O kolik je hrušek méně než jablek?", options: ["15", "93", "25", "13"], answer: "15", explanation: "54 − 39 = 15." }
      ]
    },
    {
      id: "krat-vice-mene",
      title: "Kolikrát více, kolikrát méně",
      icon: "✖️",
      type: "choice",
      instructions: "„Třikrát více“ = násobím třemi. „Třikrát méně“ = dělím třemi.",
      pick: "auto",
      items: [
        { prompt: "Babička upekla 27 koláčů. Anička upekla třikrát méně koláčů než babička. Kolik koláčů upekla Anička?", options: ["9", "24", "81", "30"], answer: "9", explanation: "Třikrát méně → 27 : 3 = 9 koláčů." },
        { prompt: "Jirka má 6 autíček. Bráška má dvakrát více. Kolik autíček má bráška?", options: ["12", "8", "3", "4"], answer: "12", explanation: "Dvakrát více → 6 · 2 = 12." },
        { prompt: "Pastelka stojí 8 Kč. Fix je čtyřikrát dražší. Kolik stojí fix?", options: ["32", "12", "2", "4"], answer: "32", explanation: "Čtyřikrát více → 8 · 4 = 32 Kč." },
        { prompt: "Na zahradě roste 40 tulipánů a pětkrát méně narcisů. Kolik je narcisů?", options: ["8", "35", "45", "200"], answer: "8", explanation: "Pětkrát méně → 40 : 5 = 8." },
        { prompt: "Maminka koupila 7 rohlíků a třikrát více housek. Kolik housek koupila?", options: ["21", "10", "4", "24"], answer: "21", explanation: "Třikrát více → 7 · 3 = 21 housek." },
        { prompt: "Tatínek je vysoký 18 dm, Kuba je dvakrát menší. Jak vysoký je Kuba?", options: ["9", "16", "36", "20"], answer: "9", explanation: "Dvakrát menší → 18 : 2 = 9 dm." },
        { prompt: "Kapr váží 5 kg. Sumec je šestkrát těžší. Kolik kg váží sumec?", options: ["30", "11", "25", "35"], answer: "30", explanation: "Šestkrát více → 5 · 6 = 30 kg." },
        { prompt: "Lucka má 36 nálepek, Tereza čtyřikrát méně. Kolik nálepek má Tereza?", options: ["9", "32", "40", "8"], answer: "9", explanation: "Čtyřikrát méně → 36 : 4 = 9." },
        { prompt: "Na stromě sedí 9 vrabců a o 3 více sýkorek. Kolik je sýkorek?", options: ["12", "27", "6", "3"], answer: "12", explanation: "Pozor, tady je „o 3 více“, ne „třikrát“: 9 + 3 = 12." },
        { prompt: "Na stromě sedí 9 vrabců a třikrát více sýkorek. Kolik je sýkorek?", options: ["27", "12", "3", "6"], answer: "27", explanation: "Třikrát více → 9 · 3 = 27." }
      ]
    },
    {
      id: "nasobeni-deleni",
      title: "Násobení a dělení v úlohách",
      icon: "🍎",
      type: "choice",
      instructions: "Kolik je v několika stejných skupinách? Násobíme. Kolik skupin? Nebo kolik v jedné? Dělíme.",
      pick: "auto",
      items: [
        { prompt: "Tomáš trhal jablka. Do košíku se vešlo 7 kg. Kolik kg jablek bude v 8 košících?", options: ["56", "15", "54", "63"], answer: "56", explanation: "8 · 7 = 56 kg." },
        { prompt: "Do kolika košíků po 7 kg rozdělíme 63 kg jablek?", options: ["9", "8", "7", "56"], answer: "9", explanation: "63 : 7 = 9 košíků." },
        { prompt: "1 kg jablek stojí 7 Kč. V košíku je 7 kg. Kolik Kč stojí jeden košík jablek?", options: ["49", "14", "42", "56"], answer: "49", explanation: "7 · 7 = 49 Kč." },
        { prompt: "V jedné krabici je 6 vajec. Kolik vajec je v 5 krabicích?", options: ["30", "11", "36", "25"], answer: "30", explanation: "5 · 6 = 30 vajec." },
        { prompt: "24 dětí se rozdělilo do 4 stejných družstev. Kolik dětí je v jednom družstvu?", options: ["6", "8", "20", "28"], answer: "6", explanation: "24 : 4 = 6 dětí." },
        { prompt: "Jeden lístek do kina stojí 9 Kč. Kolik zaplatí 6 dětí?", options: ["54", "15", "45", "63"], answer: "54", explanation: "6 · 9 = 54 Kč." },
        { prompt: "Máma rozdělila 35 bonbonů mezi 5 dětí rovným dílem. Kolik dostal každý?", options: ["7", "6", "30", "40"], answer: "7", explanation: "35 : 5 = 7 bonbonů." },
        { prompt: "Koloběžka má 2 kolečka. Kolik koleček má 8 koloběžek?", options: ["16", "10", "18", "6"], answer: "16", explanation: "8 · 2 = 16 koleček." },
        { prompt: "Kolik týdnů je 42 dní? (Týden má 7 dní.)", options: ["6", "7", "5", "35"], answer: "6", explanation: "42 : 7 = 6 týdnů." },
        { prompt: "Pytel brambor váží 10 kg. Kolik kg váží 4 pytle?", options: ["40", "14", "6", "30"], answer: "40", explanation: "4 · 10 = 40 kg." }
      ]
    },
    {
      id: "dva-kroky",
      title: "Úlohy na dva kroky",
      icon: "🪜",
      type: "choice",
      instructions: "Nejdřív spočítej, co chybí, a pak odpověz na otázku.",
      pick: "auto",
      items: [
        { prompt: "Petr má 15 Kč, Jana o 8 Kč více. Kolik Kč mají dohromady?", options: ["38", "23", "22", "30"], answer: "38", explanation: "Jana: 15 + 8 = 23 Kč. Dohromady: 15 + 23 = 38 Kč." },
        { prompt: "Na parkovišti stálo 24 červených aut a o 7 méně modrých. Kolik aut stálo na parkovišti celkem?", options: ["41", "17", "31", "48"], answer: "41", explanation: "Modrých: 24 − 7 = 17. Celkem: 24 + 17 = 41 aut." },
        { prompt: "Babička upekla 27 koláčů, Anička třikrát méně. Kolik koláčů upekly dohromady?", options: ["36", "9", "30", "18"], answer: "36", explanation: "Anička: 27 : 3 = 9. Dohromady: 27 + 9 = 36." },
        { prompt: "Koupil jsem 3 sešity po 8 Kč. Platil jsem padesátikorunou. Kolik Kč mi vrátí?", options: ["26", "24", "42", "34"], answer: "26", explanation: "3 · 8 = 24 Kč. Vrátí 50 − 24 = 26 Kč." },
        { prompt: "V autobusu jelo 30 lidí. Na zastávce 12 vystoupilo a 5 nastoupilo. Kolik lidí jede teď?", options: ["23", "13", "37", "18"], answer: "23", explanation: "30 − 12 = 18, pak 18 + 5 = 23." },
        { prompt: "Ve 4 krabicích je po 9 pastelkách. Děti 6 pastelek ztratily. Kolik pastelek zbylo?", options: ["30", "36", "7", "42"], answer: "30", explanation: "4 · 9 = 36, pak 36 − 6 = 30." }
      ]
    },
    {
      id: "jaky-vypocet",
      title: "Jaký je výpočet?",
      icon: "🧮",
      type: "choice",
      instructions: "Nepočítej, jen vyber správný výpočet.",
      pick: "auto",
      items: [
        { prompt: "Na parkovišti stálo 24 červených aut a o 7 méně modrých. Kolik je modrých?", options: ["24 − 7", "24 + 7", "24 · 7", "24 : 7"], answer: "24 − 7", explanation: "O 7 méně → odčítám." },
        { prompt: "Babička upekla 27 koláčů, Anička třikrát méně. Kolik upekla Anička?", options: ["27 : 3", "27 − 3", "27 · 3", "27 + 3"], answer: "27 : 3", explanation: "Třikrát méně → dělím." },
        { prompt: "Jirka má 6 autíček, bráška o 2 více. Kolik má bráška?", options: ["6 + 2", "6 · 2", "6 − 2", "6 : 2"], answer: "6 + 2", explanation: "O 2 více → přičítám." },
        { prompt: "Jirka má 6 autíček, bráška dvakrát více. Kolik má bráška?", options: ["6 · 2", "6 + 2", "6 : 2", "6 − 2"], answer: "6 · 2", explanation: "Dvakrát více → násobím." },
        { prompt: "Do kolika košíků po 7 kg rozdělíme 63 kg jablek?", options: ["63 : 7", "63 − 7", "63 · 7", "63 + 7"], answer: "63 : 7", explanation: "Kolik skupin po 7 → dělím." },
        { prompt: "Kolik kg jablek je v 8 košících po 7 kg?", options: ["8 · 7", "8 + 7", "8 : 7", "7 − 8"], answer: "8 · 7", explanation: "8 stejných skupin po 7 → násobím." },
        { prompt: "Míša má 28 kuliček, Ondra 36. O kolik má Ondra více?", options: ["36 − 28", "36 + 28", "36 : 28", "28 · 36"], answer: "36 − 28", explanation: "O kolik více → odčítám menší od většího." }
      ]
    }
  ]
});
