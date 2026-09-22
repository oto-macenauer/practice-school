// Čeština 5. třída – test ze září: hláska a slabika, stavba slova,
// slova příbuzná, slovní druhy, shoda podmětu s přísudkem.
School.register({
  id: "5-cestina-test-zari",
  sections: [
    {
      id: "hlaska-slabika",
      title: "Hláska a slabika",
      icon: "🔡",
      type: "choice",
      instructions: "Vyber správnou odpověď.",
      pick: 5,
      items: [
        { prompt: "Kolik hlásek má slovo CHOVATEL?", options: ["7", "8", "6", "9"], answer: "7", explanation: "ch-o-v-a-t-e-l = 7 hlásek (CH je jedna hláska)." },
        { prompt: "Kolik slabik má slovo NEJZAJÍMAVĚJŠÍ?", options: ["6", "5", "7", "4"], answer: "6", explanation: "nej-za-jí-ma-věj-ší = 6 slabik." },
        { prompt: "Které slovo má slabikotvornou souhlásku?", options: ["krk", "kráva", "koza", "klas"], answer: "krk", explanation: "Ve slově KRK drží slabiku souhláska R." },
        { prompt: "Která hláska je dvojhláska?", options: ["au", "ai", "oi", "ue"], answer: "au", explanation: "Dvojhlásky jsou ou, au, eu." },
        { prompt: "Které písmeno je obojetná souhláska?", options: ["s", "k", "č", "ř"], answer: "s", explanation: "Obojetné: b, f, l, m, p, s, v, z." },
        { prompt: "Kolik písmen a kolik hlásek má slovo CHLADNO?", options: ["7 písmen, 6 hlásek", "6 písmen, 6 hlásek", "7 písmen, 7 hlásek", "6 písmen, 7 hlásek"], answer: "7 písmen, 6 hlásek", explanation: "CH se píše dvěma písmeny, ale je to jedna hláska." },
        { prompt: "Které slovo má tři slabiky?", options: ["motýli", "les", "kolo", "pes"], answer: "motýli", explanation: "mo-tý-li = 3 slabiky." }
      ]
    },
    {
      id: "stavba-slova",
      title: "Stavba slova",
      icon: "🌱",
      type: "choice",
      instructions: "Urči kořen, předponu nebo příponu.",
      pick: 6,
      items: [
        { prompt: "Jaký je kořen slova PODMOŘSKÝ?", options: ["moř", "pod", "podmoř", "ský"], answer: "moř", explanation: "POD-moř-SKÝ." },
        { prompt: "Jaká je předpona ve slově ODPOČÍTAT?", options: ["od-", "o-", "poč-", "-tat"], answer: "od-", explanation: "OD-počítat. Předpona od- se píše s d." },
        { prompt: "Jaká je přípona ve slově ZAHRADNÍK?", options: ["-ník", "za-", "hrad-", "-ík"], answer: "-ník", explanation: "ZA-hrad-NÍK." },
        { prompt: "Které slovo nepatří ke slovu MRÁZ?", options: ["mrak", "mrazivý", "zmrzlý", "mrazík"], answer: "mrak", explanation: "MRAK je na nebi, s mrazem nesouvisí." },
        { prompt: "Kolik má slovo NEPŘEHLEDNÝ předpon?", options: ["2", "1", "3", "žádnou"], answer: "2", explanation: "NE-PŘE-hled-NÝ: předpony ne- a pře-." },
        { prompt: "Doplň správně: Voda ___tekla z hrnce dolů.", options: ["stekla", "ztekla", "sctekla", "stékla"], answer: "stekla", explanation: "Předpona s- = pohyb shora dolů." },
        { prompt: "Doplň správně: Klíče se mi ___tratily.", options: ["ztratily", "stratily", "ztrátily", "sztratily"], answer: "ztratily", explanation: "Předpona z- = změna stavu." },
        { prompt: "Co se ve slově mění při skloňování?", options: ["koncovka", "kořen", "předpona", "přípona"], answer: "koncovka", explanation: "Kořen, předpona ani přípona se nemění." }
      ]
    },
    {
      id: "urcuj-druhy",
      title: "Urči slovní druh",
      icon: "🔍",
      type: "match",
      instructions: "Přiřaď každému slovu slovní druh.",
      pick: 8,
      items: [
        { prompt: "hory", answer: "podstatné jméno", explanation: "Název míst." },
        { prompt: "zelený", answer: "přídavné jméno", explanation: "Jaký? Zelený." },
        { prompt: "my", answer: "zájmeno", explanation: "Osobní zájmeno." },
        { prompt: "pátý", answer: "číslovka", explanation: "Řadová číslovka." },
        { prompt: "skáče", answer: "sloveso", explanation: "Co dělá? Skáče." },
        { prompt: "vlevo", answer: "příslovce", explanation: "Kde? Vlevo." },
        { prompt: "nad", answer: "předložka", explanation: "Nad stolem." },
        { prompt: "protože", answer: "spojka", explanation: "Spojuje věty." },
        { prompt: "snad", answer: "částice", explanation: "Vyjadřuje nejistotu." },
        { prompt: "haf", answer: "citoslovce", explanation: "Zvuk psa." },
        { prompt: "písnička", answer: "podstatné jméno", explanation: "Název věci." },
        { prompt: "běhat", answer: "sloveso", explanation: "Infinitiv." }
      ]
    },
    {
      id: "druhy-ve-vete",
      title: "Slovní druhy ve větě",
      icon: "📖",
      type: "choice",
      instructions: "Urči slovní druh zvýrazněného slova.",
      pick: 5,
      items: [
        { prompt: "Sova loví V noci. Slovní druh slova V?", options: ["předložka", "spojka", "částice", "příslovce"], answer: "předložka", explanation: "Stojí před podstatným jménem." },
        { prompt: "Čtyři děti šly DOMŮ. Slovní druh slova DOMŮ?", options: ["příslovce", "podstatné jméno", "předložka", "zájmeno"], answer: "příslovce", explanation: "Kam? Domů – příslovce místa." },
        { prompt: "ČTYŘI děti šly domů. Slovní druh slova ČTYŘI?", options: ["číslovka", "podstatné jméno", "zájmeno", "příslovce"], answer: "číslovka", explanation: "Kolik? Čtyři." },
        { prompt: "Ta kniha je MOJE. Slovní druh slova MOJE?", options: ["zájmeno", "přídavné jméno", "částice", "podstatné jméno"], answer: "zájmeno", explanation: "Přivlastňovací zájmeno." },
        { prompt: "Kolik ohebných slov je ve větě: Malá kočka spí?", options: ["3", "2", "1", "žádné"], answer: "3", explanation: "Malá (přídavné jméno), kočka (podstatné jméno) a spí (sloveso) – všechna tři patří k ohebným slovním druhům." },
        { prompt: "Který slovní druh je neohebný?", options: ["příslovce", "sloveso", "zájmeno", "číslovka"], answer: "příslovce", explanation: "Neohebné: příslovce, předložky, spojky, částice, citoslovce." },
        { prompt: "Ve větě Pes a kočka spí. Který slovní druh je slovo A?", options: ["spojka", "předložka", "částice", "citoslovce"], answer: "spojka", explanation: "Spojuje dva podměty." }
      ]
    },
    {
      id: "shoda",
      title: "Shoda podmětu s přísudkem",
      icon: "✔️",
      type: "choice",
      instructions: "Doplň i/y v příčestí minulém.",
      pick: 5,
      items: [
        { prompt: "Chlapci si hrál___ na dvoře.", options: ["i", "y", "í", "ý"], answer: "i", explanation: "Mužský rod životný → -i." },
        { prompt: "Stromy se ohýbal___ ve větru.", options: ["y", "i", "í", "a"], answer: "y", explanation: "Mužský rod neživotný → -y." },
        { prompt: "Kočky spal___ na okně.", options: ["y", "i", "í", "a"], answer: "y", explanation: "Ženský rod → -y." },
        { prompt: "Kuřata pípal___ v kurníku.", options: ["a", "i", "y", "o"], answer: "a", explanation: "Střední rod v množném čísle → -a." },
        { prompt: "Děti se smál___ vtipu.", options: ["y", "i", "a", "í"], answer: "y", explanation: "Slovo děti je ženského rodu (ta děti = pomnožné) → -y." },
        { prompt: "Auta zastavil___ před přechodem.", options: ["a", "y", "i", "o"], answer: "a", explanation: "Střední rod množné číslo → -a." },
        { prompt: "Ptáci odlétal___ na jih.", options: ["i", "y", "a", "í"], answer: "i", explanation: "Mužský rod životný → -i." }
      ]
    },
    {
      id: "napis",
      title: "Napiš slovo",
      icon: "✍️",
      type: "write",
      instructions: "Napiš jedno slovo se správnou diakritikou.",
      pick: 4,
      items: [
        { prompt: "Napiš kořen slova PŘESTAVBA (samotný kořen).", answer: "stav", explanation: "PŘE-stav-BA." },
        { prompt: "Přidej ke slovu ŠKOLA příponu -NÍK a napiš vzniklé slovo.", answer: "školník", explanation: "škol- + -ník = školník." },
        { prompt: "Napiš zdrobnělinu slova KVĚT.", answer: "kvíteček", accept: ["kvítek", "květinka"], explanation: "květ → kvítek → kvíteček." },
        { prompt: "Jak se nazývá 5. slovní druh? (dvě slova nebo jedno slovo)", answer: "slovesa", accept: ["sloveso"], explanation: "1. podstatná jména, 2. přídavná jména, 3. zájmena, 4. číslovky, 5. slovesa." },
        { prompt: "Napiš opak slova ODJÍT (s předponou při-).", answer: "přijít", explanation: "při- + jít = přijít." },
        { prompt: "Doplň správně: Sestry si spolu hrál__ .", answer: "hrály", explanation: "Ženský rod v množném čísle → hrály." }
      ]
    }
  ]
});
