// Přírodověda 5. třída – živočichové: obratlovci a bezobratlí, pět tříd
// obratlovců, hmyz a další bezobratlí, potravní vztahy a potravní řetězec.
School.register({
  id: "5-prirodoveda-zivocichove",
  sections: [
    {
      id: "obratlovci-bezobratli",
      title: "Obratlovci a bezobratlí",
      icon: "🦴",
      type: "choice",
      instructions: "Obratlovci mají vnitřní kostru s páteří, bezobratlí páteř nemají.",
      pick: "auto",
      items: [
        { prompt: "Co mají všichni obratlovci?", options: ["páteř", "srst", "šest nohou", "plíce už od narození"], answer: "páteř", explanation: "Páteř je z obratlů – proto název obratlovci." },
        { prompt: "Kolik tříd obratlovců rozlišujeme?", options: ["5", "3", "6", "4"], answer: "5", explanation: "Ryby, obojživelníci, plazi, ptáci a savci." },
        { prompt: "Který živočich je bezobratlý?", options: ["žížala", "žába", "ještěrka", "pstruh"], answer: "žížala", explanation: "Žížala je kroužkovec – žádná páteř." },
        { prompt: "Co má hmyz místo vnitřní kostry?", options: ["pevnou vnější schránku", "jen kůži", "chrupavku", "páteř z chitinu"], answer: "pevnou vnější schránku", explanation: "Vnější kostru z chitinu. Při růstu ji hmyz svléká." },
        { prompt: "Kolik nohou má dospělý hmyz?", options: ["6", "8", "4", "10"], answer: "6", explanation: "Tři páry nohou. Pavouci mají osm nohou – nejsou to hmyz." },
        { prompt: "Kolik nohou má pavouk?", options: ["8", "6", "10", "4"], answer: "8", explanation: "Pavoukovci (pavouk, sekáč, klíště) mají čtyři páry nohou." },
        { prompt: "Na kolik částí je rozdělené tělo hmyzu?", options: ["3 – hlava, hruď, břicho", "2 – hlava a tělo", "4 – hlava, hruď, břicho, ocas", "1 – celé tělo je jeden kus"], answer: "3 – hlava, hruď, břicho", explanation: "Nohy a křídla vyrůstají z hrudi." },
        { prompt: "Který živočich je měkkýš?", options: ["šnek", "mravenec", "rak", "ropucha"], answer: "šnek", explanation: "Měkkýši mají měkké tělo, často se schránkou: hlemýžď, slimák, škeble." },
        { prompt: "Kam patří rak a krab?", options: ["mezi korýše", "mezi měkkýše", "mezi hmyz", "mezi obratlovce"], answer: "mezi korýše", explanation: "Korýši mají tvrdý krunýř a žijí většinou ve vodě." },
        { prompt: "Který z těchto živočichů je obratlovec?", options: ["netopýr", "moucha", "pavouk", "hlemýžď"], answer: "netopýr", explanation: "Netopýr je savec – má páteř a mléko pro mladé." }
      ]
    },
    {
      id: "tridy-obratlovcu",
      title: "Pět tříd obratlovců",
      icon: "🐾",
      type: "choice",
      instructions: "Poznávej podle znaků: pokryv těla, dýchání, rozmnožování.",
      pick: "auto",
      items: [
        { prompt: "Čím dýchají ryby?", options: ["žábrami", "plícemi", "kůží", "vzdušnicemi"], answer: "žábrami", explanation: "Žábry berou kyslík rozpuštěný ve vodě." },
        { prompt: "Čím je pokryté tělo ryb?", options: ["šupinami", "srstí", "perím", "hladkou kůží"], answer: "šupinami", explanation: "Šupiny a sliz chrání tělo a zmenšují odpor vody." },
        { prompt: "Co je pro obojživelníky typické?", options: ["Žijí ve vodě i na suchu a prodělávají proměnu", "Mají srst a rodí mladé", "Žijí jen ve vodě celý život", "Mají peří a snášejí vejce"], answer: "Žijí ve vodě i na suchu a prodělávají proměnu", explanation: "Z jikry se vyklube pulec s žábrami, dospělá žába dýchá plícemi a kůží." },
        { prompt: "Který živočich je plaz?", options: ["ještěrka", "žába", "mlok", "čolek"], answer: "ještěrka", explanation: "Plazi: ještěrka, had, želva, krokodýl. Mají suchou šupinatou kůži." },
        { prompt: "Čím je pokryté tělo ptáků?", options: ["perím", "šupinami", "srstí", "slizem"], answer: "perím", explanation: "Peří hřeje a umožňuje let. Ptáci mají také duté kosti a zobák." },
        { prompt: "Co mají všichni savci?", options: ["mléčné žlázy a srst", "šupiny a žábry", "peří a zobák", "vnější kostru"], answer: "mléčné žlázy a srst", explanation: "Samice kojí mladé mlékem." },
        { prompt: "Který savec žije ve vodě a dýchá plícemi?", options: ["delfín", "kapr", "chobotnice", "rak"], answer: "delfín", explanation: "Delfín a velryba jsou savci – musí se nadechnout nad hladinou." },
        { prompt: "Kdo z nich je teplokrevný (má stálou tělesnou teplotu)?", options: ["kos", "ještěrka", "žába", "kapr"], answer: "kos", explanation: "Teplokrevní jsou ptáci a savci. Ryby, obojživelníci a plazi jsou studenokrevní." },
        { prompt: "Jak se rozmnožují ptáci?", options: ["snášejí vejce a sedí na nich", "rodí živá mláďata", "kladou jikry do vody", "prodělávají proměnu"], answer: "snášejí vejce a sedí na nich", explanation: "Zahřívání vajec se říká inkubace neboli sezení na snůšce." },
        { prompt: "Co je to pulec?", options: ["mládě žáby", "mladá ryba", "mládě plaza", "druh hmyzu"], answer: "mládě žáby", explanation: "Pulec žije ve vodě, dýchá žábrami a má ocas." },
        { prompt: "Který z nich snáší vejce, i když je to plaz?", options: ["želva", "netopýr", "ježek", "vydra"], answer: "želva", explanation: "Plazi kladou vejce s pevnou nebo kožovitou schránkou na suchu." },
        { prompt: "Jak se jmenuje zimní spánek některých savců?", options: ["hibernace", "migrace", "metamorfóza", "regenerace"], answer: "hibernace", explanation: "Ježek, netopýr nebo svišť přespí zimu – tělo zpomalí." }
      ]
    },
    {
      id: "potravni-vztahy",
      title: "Potravní vztahy",
      icon: "🍽️",
      type: "choice",
      instructions: "Kdo co jí a jak na sebe navazují potravní řetězce.",
      pick: "auto",
      items: [
        { prompt: "Co je to býložravec?", options: ["Živočich, který se živí rostlinami", "Živočich, který jí jiné živočichy", "Živočich, který jí všechno", "Živočich, který jí zbytky"], answer: "Živočich, který se živí rostlinami", explanation: "Srna, zajíc nebo kráva jsou býložravci." },
        { prompt: "Který živočich je masožravec?", options: ["rys", "srna", "zajíc", "veverka"], answer: "rys", explanation: "Rys, lasička nebo sova loví jiné živočichy." },
        { prompt: "Který živočich je všežravec?", options: ["divočák", "kráva", "ovce", "srna"], answer: "divočák", explanation: "Divočák jí žaludy, kořínky, ale i larvy a mršiny." },
        { prompt: "Čím vždy začíná potravní řetězec?", options: ["rostlinou", "masožravcem", "býložravcem", "houbou"], answer: "rostlinou", explanation: "Rostlina si dokáže vytvořit potravu ze světla – je producent." },
        { prompt: "Který řetězec je správný?", options: ["tráva → zajíc → liška", "zajíc → tráva → liška", "liška → zajíc → tráva", "tráva → liška → zajíc"], answer: "tráva → zajíc → liška", explanation: "Šipka ukazuje, kdo koho sní: trávu sní zajíc, zajíce liška." },
        { prompt: "Jak se říká živočichům, kteří rozkládají odumřelé zbytky?", options: ["rozkladači", "producenti", "predátoři", "opylovači"], answer: "rozkladači", explanation: "Žížaly, bakterie a houby vracejí živiny do půdy." },
        { prompt: "Co se stane, když z lesa zmizí všichni dravci?", options: ["Přemnoží se býložravci a ohlodají mladé stromky", "Nic se nezmění", "Zmizí i rostliny okamžitě", "Přemnoží se rostliny i býložravci současně"], answer: "Přemnoží se býložravci a ohlodají mladé stromky", explanation: "Dravci udržují počty býložravců v rovnováze." },
        { prompt: "Jak se nazývá živočich, který loví jiné živočichy?", options: ["dravec", "parazit", "producent", "rozkladač"], answer: "dravec", explanation: "Dravec neboli predátor: rys, sova, dravé ryby." },
        { prompt: "Kdo je parazit?", options: ["klíště", "srna", "veverka", "sýkora"], answer: "klíště", explanation: "Parazit žije na jiném živočichovi a škodí mu – klíště saje krev." },
        { prompt: "Proč jsou včely pro rostliny důležité?", options: ["Opylují květy", "Zalévají rostliny", "Chrání je před mrazem", "Rozkládají listí"], answer: "Opylují květy", explanation: "Bez opylení by nebyly plody ani semena." }
      ]
    },
    {
      id: "priradovani",
      title: "Do které skupiny patří?",
      icon: "🧩",
      type: "match",
      instructions: "Přiřaď živočicha ke správné skupině.",
      pick: "auto",
      items: [
        { prompt: "kapr", answer: "ryba", explanation: "Žábry a šupiny." },
        { prompt: "skokan hnědý", answer: "obojživelník", explanation: "Z pulce se vyvine žába." },
        { prompt: "zmije obecná", answer: "plaz", explanation: "Suchá šupinatá kůže, jediný jedovatý had u nás." },
        { prompt: "vlaštovka", answer: "pták", explanation: "Peří, zobák, snáší vejce. Na zimu odlétá." },
        { prompt: "srna", answer: "savec", explanation: "Srst a mléko pro mladé." },
        { prompt: "pstruh", answer: "ryba", explanation: "Žije v čisté studené vodě." },
        { prompt: "čolek", answer: "obojživelník", explanation: "Rozmnožuje se ve vodě." },
        { prompt: "želva", answer: "plaz", explanation: "Krunýř a vejce kladená na suchu." },
        { prompt: "sova", answer: "pták", explanation: "Noční dravý pták." },
        { prompt: "netopýr", answer: "savec", explanation: "Jediný savec, který aktivně letí." },
        { prompt: "ještěrka obecná", answer: "plaz", explanation: "Umí odhodit ocas a znovu ho dorostit." },
        { prompt: "ježek", answer: "savec", explanation: "Přes zimu hibernuje." }
      ]
    },
    {
      id: "pojmy",
      title: "Doplň pojem",
      icon: "✍️",
      type: "write",
      instructions: "Napiš jedno slovo.",
      pick: "auto",
      items: [
        { prompt: "Živočichové s páteří se nazývají ___.", answer: "obratlovci", explanation: "Páteř je složená z obratlů." },
        { prompt: "Ryby dýchají ___.", answer: "žábrami", accept: ["žábry"], explanation: "Žábry berou kyslík z vody." },
        { prompt: "Mládě žáby se jmenuje ___.", answer: "pulec", explanation: "Pulec se vyvíjí ve vodě." },
        { prompt: "Živočich, který se živí jen rostlinami, je ___.", answer: "býložravec", explanation: "Například srna nebo zajíc." },
        { prompt: "Zimní spánek ježka se odborně nazývá ___.", answer: "hibernace", accept: ["zimní spánek"], explanation: "Tělo zpomalí a teplota klesne." },
        { prompt: "Kolik nohou má dospělý hmyz? Napiš číslo.", answer: "6", accept: ["šest"], explanation: "Tři páry nohou na hrudi." },
        { prompt: "Klíště, které saje krev, je ___ (jedním slovem, kdo žije na úkor jiného).", answer: "parazit", explanation: "Parazit svému hostiteli škodí." },
        { prompt: "Rak a krab patří mezi ___.", answer: "korýše", accept: ["korýši"], explanation: "Korýši mají krunýř." }
      ]
    }
  ]
});
