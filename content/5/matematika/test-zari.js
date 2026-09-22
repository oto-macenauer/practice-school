// Matematika 5. třída – test ze září: převody jednotek, odhady, početní operace,
// geometrie (přímky, úsečky, vzájemná poloha).
School.register({
  id: "5-matematika-test-zari",
  sections: [
    {
      id: "prevody",
      title: "Převody jednotek",
      icon: "📏",
      type: "choice",
      instructions: "Vyber správný převod.",
      pick: 6,
      items: [
        { prompt: "Kolik metrů je 5 km 20 m?", options: ["5020 m", "520 m", "5200 m", "50 020 m"], answer: "5020 m", explanation: "5 km = 5000 m, plus 20 m." },
        { prompt: "Kolik centimetrů je 1 m 5 cm?", options: ["105 cm", "15 cm", "150 cm", "1005 cm"], answer: "105 cm", explanation: "1 m = 100 cm, plus 5 cm." },
        { prompt: "Kolik gramů je půl kilogramu?", options: ["500 g", "50 g", "5000 g", "5 g"], answer: "500 g", explanation: "1 kg = 1000 g, polovina je 500 g." },
        { prompt: "Kolik minut je 1 hodina 45 minut?", options: ["105 min", "145 min", "85 min", "115 min"], answer: "105 min", explanation: "60 + 45 = 105 minut." },
        { prompt: "Kolik mm je 12 cm?", options: ["120 mm", "12 mm", "1200 mm", "112 mm"], answer: "120 mm", explanation: "1 cm = 10 mm." },
        { prompt: "Která hmotnost je největší?", options: ["1 t", "900 kg", "50 000 g", "9000 dag"], answer: "1 t", explanation: "1 t = 1000 kg, 50 000 g = 50 kg, 9000 dag = 90 kg." },
        { prompt: "Kolik litrů je 3 hl?", options: ["300 l", "30 l", "3000 l", "3 l"], answer: "300 l", explanation: "1 hl = 100 l." },
        { prompt: "Kolik hodin je 240 minut?", options: ["4 h", "3 h", "2 h 40 min", "24 h"], answer: "4 h", explanation: "240 : 60 = 4 hodiny." }
      ]
    },
    {
      id: "odhady",
      title: "Odhady",
      icon: "👀",
      type: "choice",
      instructions: "Vyber nejrozumnější odhad.",
      pick: 4,
      items: [
        { prompt: "Jak vysoký je dospělý člověk?", options: ["asi 175 cm", "asi 17 cm", "asi 17 m", "asi 1750 cm"], answer: "asi 175 cm", explanation: "To je 1 m a 75 cm." },
        { prompt: "Jak dlouhá je školní chodba?", options: ["asi 30 m", "asi 3 m", "asi 300 m", "asi 30 cm"], answer: "asi 30 m", explanation: "Chodba má několik desítek metrů." },
        { prompt: "Kolik váží litr vody?", options: ["asi 1 kg", "asi 100 g", "asi 10 kg", "asi 1 g"], answer: "asi 1 kg", explanation: "Litr vody váží přibližně 1 kilogram." },
        { prompt: "Jak dlouho trvá vyučovací hodina?", options: ["45 minut", "45 sekund", "45 hodin", "4 minuty"], answer: "45 minut", explanation: "Hodina má 45 minut, přestávka 10–20 minut." },
        { prompt: "Jak daleko dojdeš pěšky za hodinu?", options: ["asi 5 km", "asi 50 km", "asi 500 m", "asi 50 m"], answer: "asi 5 km", explanation: "Pěšky ujdeš asi 5 km za hodinu." }
      ]
    },
    {
      id: "pocitani",
      title: "Početní operace",
      icon: "➗",
      type: "choice",
      instructions: "Počítej pozorně, pozor na pořadí operací.",
      pick: 6,
      items: [
        { prompt: "Kolik je 4520 + 3680?", options: ["8200", "7200", "8100", "8300"], answer: "8200", explanation: "4520 + 3680 = 8200." },
        { prompt: "Kolik je 7003 − 2458?", options: ["4545", "4555", "4645", "4445"], answer: "4545", explanation: "7003 − 2458 = 4545." },
        { prompt: "Kolik je 306 × 7?", options: ["2142", "2042", "2152", "2132"], answer: "2142", explanation: "300 × 7 = 2100, 6 × 7 = 42, dohromady 2142." },
        { prompt: "Kolik je 4550 : 5?", options: ["910", "900", "91", "955"], answer: "910", explanation: "4550 : 5 = 910." },
        { prompt: "Kolik je 5 + 6 × 2?", options: ["17", "22", "16", "13"], answer: "17", explanation: "Nejdřív 6 × 2 = 12, pak 5 + 12 = 17." },
        { prompt: "Kolik je (40 − 16) : 8?", options: ["3", "38", "24", "5"], answer: "3", explanation: "Závorka: 40 − 16 = 24, pak 24 : 8 = 3." },
        { prompt: "Zaokrouhli 36 481 na tisíce.", options: ["36 000", "37 000", "36 500", "40 000"], answer: "36 000", explanation: "Číslice stovek je 4 < 5 → dolů." },
        { prompt: "Kolik je 125 × 4?", options: ["500", "400", "525", "450"], answer: "500", explanation: "125 × 4 = 500." }
      ]
    },
    {
      id: "geometrie",
      title: "Geometrie",
      icon: "📐",
      type: "choice",
      instructions: "Přímky, úsečky a jejich vzájemná poloha.",
      pick: 6,
      items: [
        { prompt: "Co je úsečka?", options: ["Část přímky mezi dvěma body", "Nekonečná čára", "Čára s jedním koncem", "Obvod obrazce"], answer: "Část přímky mezi dvěma body", explanation: "Úsečka má dva krajní body a dá se změřit." },
        { prompt: "Co znamená zápis p ⊥ q?", options: ["Přímky jsou kolmé", "Přímky jsou rovnoběžné", "Přímky jsou totožné", "Přímky se nesetkají"], answer: "Přímky jsou kolmé", explanation: "Kolmice svírají pravý úhel 90°." },
        { prompt: "Kolik průsečíků mají rovnoběžky?", options: ["žádný", "jeden", "dva", "nekonečně mnoho"], answer: "žádný", explanation: "Rovnoběžky se nikdy neprotnou." },
        { prompt: "Bod B leží mezi A a C, |AB| = 5 cm a |BC| = 7 cm. Kolik měří úsečka AC?", options: ["12 cm", "2 cm", "35 cm", "6 cm"], answer: "12 cm", explanation: "5 + 7 = 12 cm." },
        { prompt: "Kolik přímek prochází dvěma různými body?", options: ["jedna", "dvě", "žádná", "nekonečně mnoho"], answer: "jedna", explanation: "Dvěma body vede právě jedna přímka." },
        { prompt: "Obdélník má strany 8 cm a 3 cm. Jaký je obvod?", options: ["22 cm", "24 cm", "11 cm", "16 cm"], answer: "22 cm", explanation: "2 × (8 + 3) = 22 cm." },
        { prompt: "Poloměr kružnice je 6 cm. Jaký je průměr?", options: ["12 cm", "3 cm", "6 cm", "18 cm"], answer: "12 cm", explanation: "Průměr = 2 × poloměr." },
        { prompt: "Jak se značí bod?", options: ["velkým písmenem", "malým písmenem", "číslem", "svislými čárkami"], answer: "velkým písmenem", explanation: "Body A, B, C; přímky p, q, r." }
      ]
    },
    {
      id: "slovni-ulohy",
      title: "Slovní úlohy",
      icon: "🧮",
      type: "write",
      instructions: "Napiš jen číslo. U času napiš čas ve tvaru 14:05.",
      pick: 5,
      items: [
        { prompt: "Kolik metrů je 7 km 350 m?", answer: "7350", accept: ["7 350"], explanation: "7000 + 350 = 7350 m." },
        { prompt: "Kolik minut je 2 hodiny 40 minut?", answer: "160", explanation: "120 + 40 = 160 minut." },
        { prompt: "V knihovně je 9 polic, na každé 45 knih. Kolik knih je celkem?", answer: "405", explanation: "9 × 45 = 405 knih." },
        { prompt: "Zahrada má tvar obdélníku se stranami 25 m a 15 m. Kolik metrů plotu je potřeba na obvod?", answer: "80", explanation: "2 × (25 + 15) = 80 m." },
        { prompt: "Čtyři bratři si rozdělili 2400 Kč rovným dílem. Kolik korun dostal každý?", answer: "600", explanation: "2400 : 4 = 600 Kč." },
        { prompt: "Úsečka měří 14 cm. Kolik cm je od krajního bodu do jejího středu?", answer: "7", explanation: "14 : 2 = 7 cm." },
        { prompt: "Vlak vyjel v 9:35 a jel 1 hodinu 50 minut. Kdy přijel? Napiš ve tvaru 14:05.", answer: "11:25", explanation: "9:35 + 1 h = 10:35, plus 50 min = 11:25." }
      ]
    }
  ]
});
