// Čeština 5. třída – čtvrtletní písemka: slovní druhy, diktát
// (s/z, i/y, ě/je, mě/mně) a shoda podmětu s přísudkem.
School.register({
  id: "5-cestina-ctvrtletni-pisemka",
  sections: [
    {
      id: "urcuj-druhy",
      title: "Urči slovní druh",
      icon: "🔤",
      type: "match",
      instructions: "Přiřaď každému slovu slovní druh.",
      pick: 8,
      items: [
        { prompt: "řeka", answer: "podstatné jméno", explanation: "Název věci." },
        { prompt: "statečný", answer: "přídavné jméno", explanation: "Jaký? Statečný." },
        { prompt: "oni", answer: "zájmeno", explanation: "Osobní zájmeno." },
        { prompt: "sedm", answer: "číslovka", explanation: "Kolik? Sedm." },
        { prompt: "plaval", answer: "sloveso", explanation: "Co dělal? Plaval." },
        { prompt: "zítra", answer: "příslovce", explanation: "Kdy? Zítra." },
        { prompt: "pod", answer: "předložka", explanation: "Pod mostem." },
        { prompt: "ale", answer: "spojka", explanation: "Spojuje věty: Chtěl jsem, ale nešlo to." },
        { prompt: "ať", answer: "částice", explanation: "Uvozuje přání: Ať se ti daří." },
        { prompt: "bum", answer: "citoslovce", explanation: "Napodobuje zvuk." },
        { prompt: "radost", answer: "podstatné jméno", explanation: "Název vlastnosti / pocitu." },
        { prompt: "jejich", answer: "zájmeno", explanation: "Přivlastňovací zájmeno." },
        { prompt: "třetí", answer: "číslovka", explanation: "Řadová číslovka." },
        { prompt: "rychle", answer: "příslovce", explanation: "Jak? Rychle." }
      ]
    },
    {
      id: "druhy-ve-vete",
      title: "Slovní druhy ve větě",
      icon: "📖",
      type: "choice",
      instructions: "Urči slovní druh slova napsaného velkými písmeny.",
      pick: 6,
      items: [
        { prompt: "Pes spal POD stolem. Slovní druh slova POD?", options: ["předložka", "příslovce", "spojka", "částice"], answer: "předložka", explanation: "Stojí před podstatným jménem." },
        { prompt: "Pes spal DOLE. Slovní druh slova DOLE?", options: ["příslovce", "předložka", "přídavné jméno", "zájmeno"], answer: "příslovce", explanation: "Kde? Dole – příslovce místa." },
        { prompt: "Venku je KRÁSNĚ. Slovní druh slova KRÁSNĚ?", options: ["příslovce", "přídavné jméno", "sloveso", "podstatné jméno"], answer: "příslovce", explanation: "Jak? Krásně. Přídavné jméno by bylo krásný." },
        { prompt: "Máme KRÁSNOU zahradu. Slovní druh slova KRÁSNOU?", options: ["přídavné jméno", "příslovce", "zájmeno", "podstatné jméno"], answer: "přídavné jméno", explanation: "Jakou zahradu? Krásnou." },
        { prompt: "Přišlo PĚT kamarádů. Slovní druh slova PĚT?", options: ["číslovka", "podstatné jméno", "příslovce", "zájmeno"], answer: "číslovka", explanation: "Kolik? Pět." },
        { prompt: "KÉŽ by už byly prázdniny! Slovní druh slova KÉŽ?", options: ["částice", "citoslovce", "spojka", "příslovce"], answer: "částice", explanation: "Částice uvozuje přací větu." },
        { prompt: "AU, to bolí! Slovní druh slova AU?", options: ["citoslovce", "částice", "spojka", "zájmeno"], answer: "citoslovce", explanation: "Vyjadřuje bolest." },
        { prompt: "Šel bych ven, KDYBY nepršelo. Slovní druh slova KDYBY?", options: ["spojka", "předložka", "částice", "příslovce"], answer: "spojka", explanation: "Spojuje dvě věty." },
        { prompt: "Kolik slovních druhů je neohebných?", options: ["5", "4", "6", "10"], answer: "5", explanation: "Příslovce, předložky, spojky, částice a citoslovce." },
        { prompt: "Který slovní druh je ohebný?", options: ["zájmeno", "příslovce", "spojka", "předložka"], answer: "zájmeno", explanation: "Zájmena se skloňují: já, mě, mně, mnou." }
      ]
    },
    {
      id: "s-z",
      title: "Diktát: s, z",
      icon: "🅢",
      type: "choice",
      instructions: "Doplň s, nebo z (se, ze).",
      pick: 6,
      items: [
        { prompt: "Kamení ___padalo ze skály dolů.", options: ["s", "z"], answer: "s", explanation: "Shora dolů → s-: spadalo." },
        { prompt: "Mléko na sluníčku ___kyslo.", options: ["z", "s"], answer: "z", explanation: "Změna stavu → z-: zkyslo." },
        { prompt: "Děti ___bíraly kaštany.", options: ["s", "z"], answer: "s", explanation: "Dohromady → s-: sbíraly." },
        { prompt: "Voda v kaluži ___mrzla na led.", options: ["z", "s"], answer: "z", explanation: "Změna stavu → z-: zmrzla." },
        { prompt: "Starý dům úplně ___hořel.", options: ["s", "z"], answer: "s", explanation: "Ustálená předpona s-: shořet." },
        { prompt: "Kniha mi ___padla ___e stolu.", options: ["s, z", "z, s", "s, s", "z, z"], answer: "s, z", explanation: "Spadla (shora dolů), ze stolu (odkud? → 2. pád → z/ze)." },
        { prompt: "Šli jsme do kina ___ kamarády.", options: ["s", "z"], answer: "s", explanation: "S kým? → 7. pád → předložka s." },
        { prompt: "Vrátili jsme se ___ výletu.", options: ["z", "s"], answer: "z", explanation: "Odkud? → 2. pád → předložka z." },
        { prompt: "Chlapec ___bavil kamaráda strachu.", options: ["z", "s"], answer: "z", explanation: "Zbavit = změna stavu → z-." },
        { prompt: "Pomalu ___lezl ze stromu.", options: ["s", "z"], answer: "s", explanation: "Shora dolů → slezl." }
      ]
    },
    {
      id: "i-y",
      title: "Diktát: i, y",
      icon: "✏️",
      type: "choice",
      instructions: "Doplň i/í, nebo y/ý. Mysli na vyjmenovaná slova.",
      pick: 7,
      items: [
        { prompt: "Stěhujeme se do nového b___tu.", options: ["y", "i"], answer: "y", explanation: "Byt – vyjmenované slovo po b." },
        { prompt: "Na zahradě rostou b___liny.", options: ["y", "i"], answer: "y", explanation: "Bylina – vyjmenované slovo po b." },
        { prompt: "V lese se schovává l___ška.", options: ["i", "y"], answer: "i", explanation: "Liška není vyjmenované slovo." },
        { prompt: "Dědeček je úplně l___sý.", options: ["y", "i"], answer: "y", explanation: "Lysý – vyjmenované slovo po l." },
        { prompt: "Umyj si ruce m___dlem.", options: ["ý", "í"], answer: "ý", explanation: "Mýdlo – příbuzné k mýt." },
        { prompt: "Naše babička je velmi m___lá.", options: ["i", "y"], answer: "i", explanation: "Milý – není vyjmenované slovo (na rozdíl od mýlit se)." },
        { prompt: "Na krmítko přiletěla s___kora.", options: ["ý", "í"], answer: "ý", explanation: "Sýkora – vyjmenované slovo po s." },
        { prompt: "Venku fouká silný v___tr.", options: ["í", "ý"], answer: "í", explanation: "Vítr – po v píšeme i, kromě vyjmenovaných slov." },
        { prompt: "Na louce se pásl b___k.", options: ["ý", "í"], answer: "ý", explanation: "Býk – vyjmenované slovo po b." },
        { prompt: "Pes celou noc v___l.", options: ["y", "i"], answer: "y", explanation: "Výt – vyjmenované slovo po v." },
        { prompt: "Páv je p___šný pták.", options: ["y", "i"], answer: "y", explanation: "Pyšný – vyjmenované slovo po p." },
        { prompt: "Kluci hráli z___mní hry.", options: ["i", "y"], answer: "i", explanation: "Zimní – po z píšeme i, kromě vyjmenovaných slov (brzy, jazyk, nazývat…)." }
      ]
    },
    {
      id: "e-je",
      title: "Diktát: ě, je, mě, mně",
      icon: "🖊️",
      type: "choice",
      instructions: "Doplň správně ě, je, nebo mě / mně.",
      pick: 6,
      items: [
        { prompt: "K ob___du byla polévka.", options: ["ě", "je"], answer: "ě", explanation: "Oběd – předpona ob- tu není." },
        { prompt: "Kolumbus ob___vil Ameriku.", options: ["je", "ě"], answer: "je", explanation: "Ob-jevit: předpona ob- + kořen jev." },
        { prompt: "Auto zastavilo u v___zdu do garáže.", options: ["je", "ě"], answer: "je", explanation: "V-jezd: předpona v- + kořen jezd." },
        { prompt: "Bydlíme ve velkém ___stě.", options: ["mě", "mně"], answer: "mě", explanation: "Město – mě." },
        { prompt: "Zapo___l jsem si svačinu.", options: ["mně", "mě"], answer: "mně", explanation: "Zapomněl – příbuzné ke vzpomenout, mn." },
        { prompt: "Podej ___ prosím tužku.", options: ["mně", "mě"], answer: "mně", explanation: "Komu? Mně (3. pád)." },
        { prompt: "Maminka ___ v parku hledala.", options: ["mě", "mně"], answer: "mě", explanation: "Koho? Mě (4. pád)." },
        { prompt: "Tatínek ___ o tom vyprávěl.", options: ["mně", "mě"], answer: "mně", explanation: "Komu vyprávěl? Mně (3. pád)." },
        { prompt: "Krabice má velký ob___m.", options: ["je", "ě"], answer: "je", explanation: "Ob-jem: předpona ob- + kořen jem." },
        { prompt: "Ve škole jsme měli p___t hodin.", options: ["ě", "je"], answer: "ě", explanation: "Pět." },
        { prompt: "Ten úkol mi nedělá žádný probl___m.", options: ["é", "ě"], answer: "é", explanation: "Problém – cizí slovo, píše se é." }
      ]
    },
    {
      id: "shoda",
      title: "Shoda podmětu s přísudkem",
      icon: "✔️",
      type: "choice",
      instructions: "Doplň koncovku příčestí minulého.",
      pick: 7,
      items: [
        { prompt: "Psi a kočky se honil___ po zahradě.", options: ["i", "y", "a"], answer: "i", explanation: "Je-li v několikanásobném podmětu rod mužský životný, píšeme -i." },
        { prompt: "Ovce se pásl___ na louce.", options: ["y", "i", "a"], answer: "y", explanation: "Ženský rod → -y." },
        { prompt: "Kola se točil___ dokola.", options: ["a", "y", "i"], answer: "a", explanation: "Střední rod v množném čísle → -a." },
        { prompt: "Rybníky v zimě zamrzl___.", options: ["y", "i", "a"], answer: "y", explanation: "Mužský rod neživotný → -y." },
        { prompt: "Učitelé nás pochválil___.", options: ["i", "y", "a"], answer: "i", explanation: "Mužský rod životný → -i." },
        { prompt: "Hory a řeky se ztrácel___ v mlze.", options: ["y", "i", "a"], answer: "y", explanation: "Ženský rod (hory, řeky) → -y." },
        { prompt: "Vrány a kosi seděl___ na plotě.", options: ["i", "y", "a"], answer: "i", explanation: "Kosi jsou rodu mužského životného → -i." },
        { prompt: "Děti si stavěl___ hrad z písku.", options: ["y", "i", "a"], answer: "y", explanation: "Děti (ty děti) → -y." },
        { prompt: "Kuřata a housata běhal___ po dvoře.", options: ["a", "y", "i"], answer: "a", explanation: "Střední rod v množném čísle → -a." },
        { prompt: "Stromy a keře rozkvetl___.", options: ["y", "i", "a"], answer: "y", explanation: "Stromy i keře jsou rodu mužského neživotného → -y." },
        { prompt: "Lvi lovil___ v noci.", options: ["i", "y", "a"], answer: "i", explanation: "Mužský rod životný → -i." },
        { prompt: "Maminka a babička vařil___ oběd.", options: ["y", "i", "a"], answer: "y", explanation: "Ženský rod → -y." }
      ]
    },
    {
      id: "diktat",
      title: "Doplň diktát",
      icon: "📝",
      type: "gap-text",
      instructions: "Doplň slova z nabídky. Pozor na i/y, s/z a ě/je.",
      text: "O prázdninách jsme {1} na chatě. Kluci {2} na rybník a holky {3} houby. Jednou jsme všichni {4} na kopec a dlouho jsme se {5} do údolí. Večer nám babička {6} ke stolu borůvkové knedlíky. Psi {7} u ohně a všichni jsme si {8} o pohádkách.",
      wordBank: ["byli", "bili", "chodili", "chodily", "sbíraly", "zbíraly", "vylezli", "vilezli", "dívali", "dívaly", "přinesla", "přinesli", "leželi", "ležely", "povídali", "povídaly"],
      blanks: ["byli", "chodili", "sbíraly", "vylezli", "dívali", "přinesla", "leželi", "povídali"]
    }
  ]
});
