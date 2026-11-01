// Matematika 5. třída – čtvrtletní písemka: písemné násobení a dělení,
// geometrie – rovinné obrazce (trojúhelníky, čtyřúhelníky, kruh, obvod).
School.register({
  id: "5-matematika-ctvrtletni-pisemka",
  sections: [
    {
      id: "nasobeni",
      title: "Písemné násobení",
      icon: "✖️",
      type: "choice",
      instructions: "Vypočítej písemně na papír a vyber výsledek.",
      pick: 6,
      items: [
        { prompt: "Kolik je 2346 × 7?", options: ["16 422", "14 422", "16 322", "15 422"], answer: "16 422", explanation: "6 × 7 = 42, píšu 2, pamatuji 4; 4 × 7 + 4 = 32, píšu 2, pamatuji 3; 3 × 7 + 3 = 24, píšu 4, pamatuji 2; 2 × 7 + 2 = 16." },
        { prompt: "Kolik je 1058 × 6?", options: ["6348", "6048", "6338", "6448"], answer: "6348", explanation: "8 × 6 = 48, 5 × 6 + 4 = 34, 0 × 6 + 3 = 3, 1 × 6 = 6 → 6348." },
        { prompt: "Kolik je 437 × 23?", options: ["10 051", "2185", "9 051", "10 041"], answer: "10 051", explanation: "437 × 3 = 1311, 437 × 2 = 874 (posunuto o místo doleva) → 1311 + 8740 = 10 051." },
        { prompt: "Kolik je 609 × 45?", options: ["27 405", "27 305", "5481", "26 405"], answer: "27 405", explanation: "609 × 5 = 3045, 609 × 4 = 2436 (posunuto) → 3045 + 24 360 = 27 405." },
        { prompt: "Kolik je 3125 × 8?", options: ["25 000", "24 000", "25 800", "24 100"], answer: "25 000", explanation: "5 × 8 = 40, 2 × 8 + 4 = 20, 1 × 8 + 2 = 10, 3 × 8 + 1 = 25 → 25 000." },
        { prompt: "Kolik je 254 × 36?", options: ["9144", "9044", "2286", "9154"], answer: "9144", explanation: "254 × 6 = 1524, 254 × 3 = 762 (posunuto) → 1524 + 7620 = 9144." },
        { prompt: "Kolik je 1207 × 9?", options: ["10 863", "10 763", "9 863", "10 873"], answer: "10 863", explanation: "7 × 9 = 63, 0 × 9 + 6 = 6, 2 × 9 = 18, 1 × 9 + 1 = 10 → 10 863." },
        { prompt: "Kolik je 812 × 54?", options: ["43 848", "43 748", "7308", "42 848"], answer: "43 848", explanation: "812 × 4 = 3248, 812 × 5 = 4060 (posunuto) → 3248 + 40 600 = 43 848." },
        { prompt: "Proč se při násobení dvojciferným číslem druhý řádek posouvá o jedno místo doleva?", options: ["Násobíme desítkami", "Aby se vešel na papír", "Násobíme stovkami", "Kvůli lepší úpravě"], answer: "Násobíme desítkami", explanation: "Např. u × 23 násobíme ve druhém řádku 2 desítkami, tedy dvaceti." }
      ]
    },
    {
      id: "deleni",
      title: "Písemné dělení",
      icon: "➗",
      type: "choice",
      instructions: "Vyděl písemně jednociferným dělitelem a vyber výsledek.",
      pick: 6,
      items: [
        { prompt: "Kolik je 4872 : 6?", options: ["812", "802", "811", "821"], answer: "812", explanation: "48 : 6 = 8, 7 : 6 = 1 zbytek 1, 12 : 6 = 2 → 812. Zkouška: 812 × 6 = 4872." },
        { prompt: "Kolik je 3925 : 5?", options: ["785", "775", "795", "685"], answer: "785", explanation: "39 : 5 = 7 zb. 4, 42 : 5 = 8 zb. 2, 25 : 5 = 5 → 785." },
        { prompt: "Kolik je 7248 : 8?", options: ["906", "96", "960", "916"], answer: "906", explanation: "72 : 8 = 9, 4 : 8 = 0 zb. 4 (nulu nezapomeň napsat!), 48 : 8 = 6 → 906." },
        { prompt: "Kolik je 2961 : 7?", options: ["423", "413", "433", "323"], answer: "423", explanation: "29 : 7 = 4 zb. 1, 16 : 7 = 2 zb. 2, 21 : 7 = 3 → 423." },
        { prompt: "Kolik je 5436 : 9?", options: ["604", "64", "614", "640"], answer: "604", explanation: "54 : 9 = 6, 3 : 9 = 0 zb. 3, 36 : 9 = 4 → 604." },
        { prompt: "Kolik je 845 : 4?", options: ["211 zbytek 1", "211 zbytek 2", "212 zbytek 1", "210 zbytek 5"], answer: "211 zbytek 1", explanation: "8 : 4 = 2, 4 : 4 = 1, 5 : 4 = 1 zb. 1. Zkouška: 211 × 4 + 1 = 845." },
        { prompt: "Kolik je 2019 : 6?", options: ["336 zbytek 3", "336 zbytek 2", "335 zbytek 9", "337 zbytek 3"], answer: "336 zbytek 3", explanation: "20 : 6 = 3 zb. 2, 21 : 6 = 3 zb. 3, 39 : 6 = 6 zb. 3 → 336 zbytek 3." },
        { prompt: "Kolik je 1000 : 8?", options: ["125", "120", "150", "1250"], answer: "125", explanation: "10 : 8 = 1 zb. 2, 20 : 8 = 2 zb. 4, 40 : 8 = 5 → 125." },
        { prompt: "Jak provedeš zkoušku výpočtu 936 : 4 = 234?", options: ["234 × 4", "936 × 4", "234 : 4", "936 − 234"], answer: "234 × 4", explanation: "Podíl vynásobíme dělitelem: 234 × 4 = 936." },
        { prompt: "Kolik číslic má podíl 3528 : 7?", options: ["3", "4", "2", "5"], answer: "3", explanation: "35 : 7 = 5, začínáme od stovek → 504, tři číslice." }
      ]
    },
    {
      id: "obrazce",
      title: "Geometrické obrazce",
      icon: "🔺",
      type: "choice",
      instructions: "Trojúhelníky, čtyřúhelníky, kruh a kružnice.",
      pick: 7,
      items: [
        { prompt: "Jak se jmenuje trojúhelník, který má všechny tři strany stejně dlouhé?", options: ["rovnostranný", "rovnoramenný", "pravoúhlý", "různostranný"], answer: "rovnostranný", explanation: "Rovnostranný = všechny strany stejné." },
        { prompt: "Jak se jmenuje trojúhelník, který má jen dvě strany stejně dlouhé?", options: ["rovnoramenný", "rovnostranný", "pravoúhlý", "různostranný"], answer: "rovnoramenný", explanation: "Dvě stejné strany jsou ramena, třetí je základna." },
        { prompt: "Který trojúhelník má jeden pravý úhel?", options: ["pravoúhlý", "rovnostranný", "tupoúhlý", "ostroúhlý"], answer: "pravoúhlý", explanation: "Pravý úhel má 90°." },
        { prompt: "Lze sestrojit trojúhelník se stranami 3 cm, 4 cm a 9 cm?", options: ["ne", "ano", "jen pravoúhlý", "jen rovnoramenný"], answer: "ne", explanation: "Součet dvou kratších stran musí být větší než třetí strana: 3 + 4 = 7 < 9." },
        { prompt: "Čím se čtverec liší od obdélníku?", options: ["Má všechny strany stejné", "Má čtyři pravé úhly", "Má čtyři vrcholy", "Má dvě úhlopříčky"], answer: "Má všechny strany stejné", explanation: "Pravé úhly, čtyři vrcholy i dvě úhlopříčky má obdélník i čtverec." },
        { prompt: "Jaké jsou úhlopříčky čtverce?", options: ["stejně dlouhé a kolmé", "různě dlouhé a kolmé", "rovnoběžné", "stejně dlouhé, ne kolmé"], answer: "stejně dlouhé a kolmé", explanation: "Úhlopříčky čtverce jsou shodné a protínají se v pravém úhlu." },
        { prompt: "Jaký je obvod čtverce se stranou 7 cm?", options: ["28 cm", "14 cm", "49 cm", "21 cm"], answer: "28 cm", explanation: "o = 4 × a = 4 × 7 = 28 cm." },
        { prompt: "Trojúhelník má strany 5 cm, 6 cm a 8 cm. Jaký má obvod?", options: ["19 cm", "18 cm", "240 cm", "13 cm"], answer: "19 cm", explanation: "o = a + b + c = 5 + 6 + 8 = 19 cm." },
        { prompt: "Obdélník má strany 12 cm a 5 cm. Jaký má obvod?", options: ["34 cm", "17 cm", "60 cm", "29 cm"], answer: "34 cm", explanation: "o = 2 × (a + b) = 2 × 17 = 34 cm." },
        { prompt: "Obvod čtverce je 36 cm. Jak dlouhá je jeho strana?", options: ["9 cm", "6 cm", "18 cm", "12 cm"], answer: "9 cm", explanation: "a = o : 4 = 36 : 4 = 9 cm." },
        { prompt: "Jaký je rozdíl mezi kružnicí a kruhem?", options: ["Kruh je kružnice i s vnitřkem", "Kruh je menší", "Kružnice je plná", "Žádný rozdíl"], answer: "Kruh je kružnice i s vnitřkem", explanation: "Kružnice je jen čára, kruh je celá plocha uvnitř ní." },
        { prompt: "Kolik úhlopříček má obdélník?", options: ["2", "4", "1", "žádnou"], answer: "2", explanation: "Spojují protější vrcholy: AC a BD." },
        { prompt: "Průměr kruhu je 10 cm. Jaký je jeho poloměr?", options: ["5 cm", "20 cm", "10 cm", "2 cm"], answer: "5 cm", explanation: "Poloměr je polovina průměru." }
      ]
    },
    {
      id: "slovni-ulohy",
      title: "Slovní úlohy",
      icon: "🧮",
      type: "write",
      instructions: "Vypočítej písemně a napiš jen číslo.",
      pick: 5,
      items: [
        { prompt: "Škola koupila 28 lavic po 1450 Kč. Kolik korun zaplatila?", answer: "40600", accept: ["40 600"], explanation: "1450 × 28 = 40 600 Kč." },
        { prompt: "Kniha má 216 stran. Ema čte 9 stran denně. Za kolik dní knihu přečte?", answer: "24", explanation: "216 : 9 = 24 dní." },
        { prompt: "Sedm krabic má po 125 bonbonech. Bonbony se rozdělí rovným dílem mezi 5 tříd. Kolik bonbonů dostane každá třída?", answer: "175", explanation: "7 × 125 = 875, 875 : 5 = 175." },
        { prompt: "Kolik metrů pletiva je potřeba na plot kolem obdélníkové zahrady 18 m × 7 m?", answer: "50", explanation: "2 × (18 + 7) = 50 m." },
        { prompt: "Obvod čtverce je 64 cm. Kolik centimetrů měří jeho strana?", answer: "16", explanation: "64 : 4 = 16 cm." },
        { prompt: "Rovnostranný trojúhelník má stranu 13 cm. Kolik centimetrů je jeho obvod?", answer: "39", explanation: "3 × 13 = 39 cm." },
        { prompt: "Rovnoramenný trojúhelník má základnu 6 cm a rameno 9 cm. Kolik centimetrů je jeho obvod?", answer: "24", explanation: "6 + 9 + 9 = 24 cm." },
        { prompt: "Na výlet jede 336 žáků. Do jednoho autobusu se vejde 48 žáků. Kolik autobusů je potřeba?", answer: "7", explanation: "336 : 48 = 7 (zkouška: 48 × 7 = 336)." }
      ]
    }
  ]
});
