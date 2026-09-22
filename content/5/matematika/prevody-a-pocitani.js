// Matematika 5. třída – převody jednotek (délka, hmotnost, čas, obsah),
// odhad vzdáleností a početní operace do milionu.
School.register({
  id: "5-matematika-prevody-a-pocitani",
  sections: [
    {
      id: "jednotky-delky",
      title: "Jednotky délky",
      icon: "📏",
      type: "choice",
      instructions: "1 km = 1000 m, 1 m = 100 cm, 1 cm = 10 mm.",
      pick: "auto",
      items: [
        { prompt: "Kolik metrů je 3 km?", options: ["3000 m", "300 m", "30 m", "30 000 m"], answer: "3000 m", explanation: "1 km = 1000 m, takže 3 × 1000 = 3000 m." },
        { prompt: "Kolik centimetrů je 2 m 50 cm?", options: ["250 cm", "2050 cm", "25 cm", "2500 cm"], answer: "250 cm", explanation: "2 m = 200 cm, plus 50 cm = 250 cm." },
        { prompt: "Kolik milimetrů je 7 cm?", options: ["70 mm", "7 mm", "700 mm", "0,7 mm"], answer: "70 mm", explanation: "1 cm = 10 mm, tedy 7 × 10 = 70 mm." },
        { prompt: "Kolik je 1500 m v kilometrech a metrech?", options: ["1 km 500 m", "15 km", "150 km", "1 km 50 m"], answer: "1 km 500 m", explanation: "1500 m = 1000 m + 500 m." },
        { prompt: "Co je delší: 900 cm nebo 9 m?", options: ["jsou stejně dlouhé", "900 cm", "9 m", "nelze porovnat"], answer: "jsou stejně dlouhé", explanation: "9 m = 900 cm." },
        { prompt: "Kolik dm je 4 m?", options: ["40 dm", "4 dm", "400 dm", "0,4 dm"], answer: "40 dm", explanation: "1 m = 10 dm." },
        { prompt: "Který zápis znamená největší vzdálenost?", options: ["3 km", "2500 m", "120 000 cm", "8000 dm"], answer: "3 km", explanation: "3 km = 3000 m, 120 000 cm = 1200 m, 8000 dm = 800 m. Největší je 3 km." },
        { prompt: "Kolik metrů je 25 000 cm?", options: ["250 m", "25 m", "2500 m", "2,5 m"], answer: "250 m", explanation: "Dělíme 100: 25 000 : 100 = 250 m." },
        { prompt: "Sečti 3 m 40 cm + 1 m 80 cm.", options: ["5 m 20 cm", "4 m 20 cm", "5 m 120 cm", "4 m 120 cm"], answer: "5 m 20 cm", explanation: "40 + 80 = 120 cm = 1 m 20 cm, tedy 3 + 1 + 1 = 5 m a 20 cm." },
        { prompt: "Kolik cm chybí 65 cm do 1 m?", options: ["35 cm", "45 cm", "25 cm", "135 cm"], answer: "35 cm", explanation: "100 − 65 = 35 cm." }
      ]
    },
    {
      id: "jednotky-hmotnosti",
      title: "Jednotky hmotnosti a objemu",
      icon: "⚖️",
      type: "choice",
      instructions: "1 t = 1000 kg, 1 kg = 1000 g, 1 l = 1000 ml, 1 hl = 100 l.",
      pick: "auto",
      items: [
        { prompt: "Kolik gramů je 2 kg?", options: ["2000 g", "200 g", "20 g", "20 000 g"], answer: "2000 g", explanation: "1 kg = 1000 g." },
        { prompt: "Kolik kilogramů je 3 t?", options: ["3000 kg", "300 kg", "30 kg", "30 000 kg"], answer: "3000 kg", explanation: "1 tuna = 1000 kg." },
        { prompt: "Kolik je 1250 g?", options: ["1 kg 250 g", "12 kg 50 g", "125 kg", "1 kg 25 g"], answer: "1 kg 250 g", explanation: "1250 g = 1000 g + 250 g." },
        { prompt: "Kolik mililitrů je půl litru?", options: ["500 ml", "50 ml", "5000 ml", "5 ml"], answer: "500 ml", explanation: "1 l = 1000 ml, půlka je 500 ml." },
        { prompt: "Kolik litrů je 2 hl?", options: ["200 l", "20 l", "2000 l", "2 l"], answer: "200 l", explanation: "1 hektolitr = 100 l." },
        { prompt: "Co váží víc: 800 g nebo 1 kg?", options: ["1 kg", "800 g", "váží stejně", "nelze určit"], answer: "1 kg", explanation: "1 kg = 1000 g, a to je víc než 800 g." },
        { prompt: "Kolik dkg je 500 g?", options: ["50 dkg", "5 dkg", "500 dkg", "0,5 dkg"], answer: "50 dkg", explanation: "1 dkg = 10 g, takže 500 : 10 = 50 dkg." },
        { prompt: "Maminka koupila 3 balíčky po 250 g. Kolik to je celkem?", options: ["750 g", "700 g", "1 kg", "500 g"], answer: "750 g", explanation: "3 × 250 = 750 g." },
        { prompt: "V kanystru je 20 l vody. Kolik to je mililitrů?", options: ["20 000 ml", "2000 ml", "200 ml", "200 000 ml"], answer: "20 000 ml", explanation: "20 × 1000 = 20 000 ml." }
      ]
    },
    {
      id: "jednotky-casu",
      title: "Jednotky času",
      icon: "⏰",
      type: "choice",
      instructions: "1 h = 60 min, 1 min = 60 s, 1 den = 24 h.",
      pick: "auto",
      items: [
        { prompt: "Kolik minut je 2 hodiny?", options: ["120 min", "100 min", "60 min", "240 min"], answer: "120 min", explanation: "2 × 60 = 120 minut." },
        { prompt: "Kolik sekund je 5 minut?", options: ["300 s", "500 s", "50 s", "3000 s"], answer: "300 s", explanation: "5 × 60 = 300 sekund." },
        { prompt: "Kolik je 90 minut?", options: ["1 h 30 min", "1 h 9 min", "9 h", "2 h"], answer: "1 h 30 min", explanation: "90 = 60 + 30." },
        { prompt: "Film začal v 17:45 a trval 1 h 30 min. Kdy skončil?", options: ["19:15", "18:15", "19:45", "18:75"], answer: "19:15", explanation: "17:45 + 1 h = 18:45, plus 30 min = 19:15." },
        { prompt: "Kolik hodin je 3 dny?", options: ["72 h", "36 h", "24 h", "48 h"], answer: "72 h", explanation: "3 × 24 = 72 hodin." },
        { prompt: "Vlak jede z Prahy v 8:20 a jízda trvá 2 h 50 min. Kdy přijede?", options: ["11:10", "10:70", "10:10", "11:50"], answer: "11:10", explanation: "8:20 + 2 h = 10:20, plus 50 min = 11:10." },
        { prompt: "Kolik dní má rok, který není přestupný?", options: ["365", "366", "360", "364"], answer: "365", explanation: "Přestupný rok má 366 dní (únor 29)." },
        { prompt: "Přestávka trvá od 9:40 do 9:55. Jak je dlouhá?", options: ["15 min", "20 min", "10 min", "25 min"], answer: "15 min", explanation: "55 − 40 = 15 minut." },
        { prompt: "Kolik minut je čtvrt hodiny?", options: ["15 min", "20 min", "25 min", "30 min"], answer: "15 min", explanation: "60 : 4 = 15 minut." }
      ]
    },
    {
      id: "odhad",
      title: "Odhad vzdáleností a velikostí",
      icon: "👀",
      type: "choice",
      instructions: "Vyber nejrozumnější odhad. Nepočítej – jen si to představ.",
      pick: "auto",
      items: [
        { prompt: "Jak vysoké jsou dveře do třídy?", options: ["asi 2 m", "asi 20 cm", "asi 5 m", "asi 20 m"], answer: "asi 2 m", explanation: "Dveře jsou o něco vyšší než dospělý člověk – kolem 2 metrů." },
        { prompt: "Jak dlouhá je školní třída?", options: ["asi 8 m", "asi 80 cm", "asi 80 m", "asi 800 m"], answer: "asi 8 m", explanation: "Běžná třída má kolem 8 metrů." },
        { prompt: "Jak daleko je Praha od Brna?", options: ["asi 200 km", "asi 20 km", "asi 2000 km", "asi 200 m"], answer: "asi 200 km", explanation: "Po dálnici je to asi 200 kilometrů." },
        { prompt: "Kolik váží tabulka čokolády?", options: ["asi 100 g", "asi 1 kg", "asi 10 g", "asi 10 kg"], answer: "asi 100 g", explanation: "Běžná tabulka má 100 g." },
        { prompt: "Kolik váží dospělý člověk?", options: ["asi 75 kg", "asi 7 kg", "asi 750 kg", "asi 750 g"], answer: "asi 75 kg", explanation: "Dospělí váží kolem 60–90 kg." },
        { prompt: "Kolik vody se vejde do vany?", options: ["asi 150 l", "asi 15 l", "asi 1500 l", "asi 1,5 l"], answer: "asi 150 l", explanation: "Do vany se vejde přes sto litrů." },
        { prompt: "Jak dlouhé je školní pravítko v penálu?", options: ["asi 20 cm", "asi 2 cm", "asi 2 m", "asi 200 cm"], answer: "asi 20 cm", explanation: "Školní pravítko má obvykle 15–30 cm." },
        { prompt: "Jak dlouho jde dospělý člověk 1 km?", options: ["asi 12 minut", "asi 2 minuty", "asi 1 hodinu", "asi 2 hodiny"], answer: "asi 12 minut", explanation: "Chůzí ujdeme přibližně 5 km za hodinu, tedy 1 km asi za 12 minut." },
        { prompt: "Jak vysoká je Sněžka, nejvyšší hora Česka?", options: ["asi 1600 m", "asi 160 m", "asi 16 000 m", "asi 16 m"], answer: "asi 1600 m", explanation: "Sněžka měří 1603 m n. m." },
        { prompt: "Kolik váží školní aktovka s knihami?", options: ["asi 4 kg", "asi 400 g", "asi 40 kg", "asi 40 g"], answer: "asi 4 kg", explanation: "Plná aktovka váží několik kilogramů." }
      ]
    },
    {
      id: "pocetni-operace",
      title: "Početní operace",
      icon: "➗",
      type: "choice",
      instructions: "Počítej pozorně – pozor na pořadí operací.",
      pick: "auto",
      items: [
        { prompt: "Kolik je 3400 + 2750?", options: ["6150", "5150", "6050", "6250"], answer: "6150", explanation: "3400 + 2750 = 6150." },
        { prompt: "Kolik je 8000 − 3460?", options: ["4540", "4640", "5540", "4440"], answer: "4540", explanation: "8000 − 3460 = 4540." },
        { prompt: "Kolik je 240 × 5?", options: ["1200", "1100", "120", "2400"], answer: "1200", explanation: "240 × 5 = 1200." },
        { prompt: "Kolik je 3600 : 9?", options: ["400", "40", "450", "4000"], answer: "400", explanation: "36 : 9 = 4, takže 3600 : 9 = 400." },
        { prompt: "Kolik je 2 + 3 × 4?", options: ["14", "20", "24", "9"], answer: "14", explanation: "Nejdřív násobení: 3 × 4 = 12, pak 2 + 12 = 14." },
        { prompt: "Kolik je (15 − 7) × 3?", options: ["24", "36", "22", "8"], answer: "24", explanation: "Nejdřív závorka: 15 − 7 = 8, pak 8 × 3 = 24." },
        { prompt: "Kolik je 100 − 20 : 4?", options: ["95", "20", "80", "25"], answer: "95", explanation: "Dělení má přednost: 20 : 4 = 5, pak 100 − 5 = 95." },
        { prompt: "Kolik je 125 × 8?", options: ["1000", "900", "1250", "800"], answer: "1000", explanation: "125 × 8 = 1000." },
        { prompt: "Kolik je 7 × 60 + 40?", options: ["460", "400", "490", "700"], answer: "460", explanation: "7 × 60 = 420, plus 40 = 460." },
        { prompt: "Kolik je 84 : 4?", options: ["21", "20", "22", "24"], answer: "21", explanation: "80 : 4 = 20, 4 : 4 = 1, celkem 21." },
        { prompt: "Zaokrouhli 4 762 na stovky.", options: ["4800", "4700", "4760", "5000"], answer: "4800", explanation: "Na stovky rozhoduje číslice desítek: 6 ≥ 5, zaokrouhlujeme nahoru." },
        { prompt: "Zaokrouhli 128 430 na tisíce.", options: ["128 000", "129 000", "128 400", "130 000"], answer: "128 000", explanation: "Na tisíce rozhoduje číslice stovek: 4 < 5, zaokrouhlujeme dolů." }
      ]
    },
    {
      id: "slovni-ulohy",
      title: "Slovní úlohy",
      icon: "🧮",
      type: "write",
      instructions: "Napiš jen číslo (bez jednotky).",
      pick: "auto",
      items: [
        { prompt: "Kolik metrů je 4 km 60 m? Napiš počet metrů.", answer: "4060", explanation: "4 km = 4000 m, plus 60 m = 4060 m." },
        { prompt: "Kolik gramů je 2 kg 300 g?", answer: "2300", explanation: "2 kg = 2000 g, plus 300 g = 2300 g." },
        { prompt: "Kolik minut je 3 hodiny a 25 minut?", answer: "205", explanation: "3 × 60 = 180, plus 25 = 205 minut." },
        { prompt: "V sadu je 6 řad po 24 stromech. Kolik stromů je v sadu?", answer: "144", explanation: "6 × 24 = 144 stromů." },
        { prompt: "Cyklista ujel v pondělí 18 km, v úterý 23 km a ve středu 15 km. Kolik km ujel celkem?", answer: "56", explanation: "18 + 23 + 15 = 56 km." },
        { prompt: "Autobus vezl 48 lidí, na zastávce vystoupilo 19 a nastoupilo 7. Kolik lidí je v autobuse teď?", answer: "36", explanation: "48 − 19 = 29, 29 + 7 = 36 lidí." },
        { prompt: "Sešit stojí 15 Kč. Kolik zaplatíš za 8 sešitů? Napiš počet korun.", answer: "120", explanation: "8 × 15 = 120 Kč." },
        { prompt: "Do 5 stejných krabic se rozdělilo 375 kuliček. Kolik kuliček je v jedné krabici?", answer: "75", explanation: "375 : 5 = 75 kuliček." },
        { prompt: "Maratonec běžel 42 km. Kolik to je metrů?", answer: "42000", accept: ["42 000"], explanation: "42 × 1000 = 42 000 m." },
        { prompt: "Film začal v 18:30 a trval 105 minut. V kolik hodin skončil? Napiš ve formátu 20:15.", answer: "20:15", explanation: "105 min = 1 h 45 min. 18:30 + 1 h 45 min = 20:15." }
      ]
    }
  ]
});
