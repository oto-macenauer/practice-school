// Čeština 5. třída – slovní druhy: přehled deseti druhů, určování ve větě,
// ohebné × neohebné, mluvnické kategorie sloves.
School.register({
  id: "5-cestina-slovni-druhy",
  sections: [
    {
      id: "prehled",
      title: "Deset slovních druhů",
      icon: "🔢",
      type: "choice",
      instructions: "Vyber správnou odpověď.",
      pick: "auto",
      items: [
        { prompt: "Kolik slovních druhů má čeština?", options: ["10", "7", "8", "12"], answer: "10", explanation: "Slovních druhů je deset. První čtyři a slovesa jsou ohebné." },
        { prompt: "Který slovní druh je první?", options: ["podstatná jména", "přídavná jména", "slovesa", "zájmena"], answer: "podstatná jména", explanation: "1. podstatná jména, 2. přídavná jména, 3. zájmena, 4. číslovky, 5. slovesa." },
        { prompt: "Který slovní druh je pátý?", options: ["slovesa", "číslovky", "příslovce", "zájmena"], answer: "slovesa", explanation: "Slovesa jsou 5. slovní druh – vyjadřují, co někdo dělá nebo co se děje." },
        { prompt: "Který slovní druh je desátý?", options: ["citoslovce", "částice", "spojky", "předložky"], answer: "citoslovce", explanation: "6. příslovce, 7. předložky, 8. spojky, 9. částice, 10. citoslovce." },
        { prompt: "Které slovní druhy jsou ohebné?", options: ["podstatná a přídavná jména, zájmena, číslovky, slovesa", "jen podstatná jména a slovesa", "příslovce, předložky a spojky", "všechny kromě sloves"], answer: "podstatná a přídavná jména, zájmena, číslovky, slovesa", explanation: "Ohebné = dají se skloňovat nebo časovat. Zbylých pět se nemění." },
        { prompt: "Co znamená, že je slovo NEOHEBNÉ?", options: ["Nemění svůj tvar", "Nedá se vyslovit", "Nemá kořen", "Píše se s velkým písmenem"], answer: "Nemění svůj tvar", explanation: "Příslovce, předložky, spojky, částice a citoslovce mají vždy stejný tvar." },
        { prompt: "Který slovní druh se časuje?", options: ["slovesa", "podstatná jména", "číslovky", "příslovce"], answer: "slovesa", explanation: "Slovesa se časují (jdu, jdeš, jde). Ostatní ohebné druhy se skloňují." },
        { prompt: "Který slovní druh vyjadřuje počet nebo pořadí?", options: ["číslovky", "zájmena", "příslovce", "částice"], answer: "číslovky", explanation: "Číslovky: pět, dvakrát, třetí, mnoho." },
        { prompt: "Který slovní druh zastupuje podstatné jméno?", options: ["zájmena", "číslovky", "spojky", "citoslovce"], answer: "zájmena", explanation: "Zájmeno ukazuje nebo zastupuje: já, ty, on, ten, svůj, kdo." },
        { prompt: "Který slovní druh napodobuje zvuky?", options: ["citoslovce", "částice", "příslovce", "spojky"], answer: "citoslovce", explanation: "Citoslovce: haf, bum, mňau, ach. Oddělujeme je čárkou: Ach, to bolí!" }
      ]
    },
    {
      id: "urci-druh",
      title: "Urči slovní druh",
      icon: "🔍",
      type: "match",
      instructions: "Ke každému slovu vyber správný slovní druh.",
      pick: "auto",
      items: [
        { prompt: "zahrada", answer: "podstatné jméno", explanation: "Je to název věci nebo místa – podstatné jméno." },
        { prompt: "rychlý", answer: "přídavné jméno", explanation: "Říká, jaký někdo nebo něco je." },
        { prompt: "on", answer: "zájmeno", explanation: "Zastupuje podstatné jméno." },
        { prompt: "sedm", answer: "číslovka", explanation: "Vyjadřuje počet." },
        { prompt: "běží", answer: "sloveso", explanation: "Vyjadřuje činnost." },
        { prompt: "rychle", answer: "příslovce", explanation: "Říká, jak se něco děje – patří ke slovesu." },
        { prompt: "pod", answer: "předložka", explanation: "Stojí před podstatným jménem: pod stolem." },
        { prompt: "protože", answer: "spojka", explanation: "Spojuje věty." },
        { prompt: "ano", answer: "částice", explanation: "Uvozuje větu nebo vyjadřuje postoj: ano, kéž, asi." },
        { prompt: "bum", answer: "citoslovce", explanation: "Napodobuje zvuk." },
        { prompt: "učitelka", answer: "podstatné jméno", explanation: "Název osoby." },
        { prompt: "modrá", answer: "přídavné jméno", explanation: "Jaká je? Modrá." },
        { prompt: "náš", answer: "zájmeno", explanation: "Přivlastňovací zájmeno." },
        { prompt: "druhý", answer: "číslovka", explanation: "Řadová číslovka – vyjadřuje pořadí." },
        { prompt: "psát", answer: "sloveso", explanation: "Infinitiv slovesa." },
        { prompt: "včera", answer: "příslovce", explanation: "Příslovce času – kdy?" },
        { prompt: "kvůli", answer: "předložka", explanation: "Kvůli dešti – předložka." },
        { prompt: "a", answer: "spojka", explanation: "Nejčastější spojka." },
        { prompt: "prý", answer: "částice", explanation: "Vyjadřuje, že to říkal někdo jiný." },
        { prompt: "mňau", answer: "citoslovce", explanation: "Zvuk kočky." }
      ]
    },
    {
      id: "ve-vete",
      title: "Slovní druhy ve větě",
      icon: "📖",
      type: "choice",
      instructions: "Urči slovní druh zvýrazněného slova.",
      pick: "auto",
      items: [
        { prompt: "Malý chlapec BĚŽEL do školy. Slovní druh slova BĚŽEL?", options: ["sloveso", "příslovce", "podstatné jméno", "přídavné jméno"], answer: "sloveso", explanation: "Co dělal? Běžel – sloveso." },
        { prompt: "Kniha leží NA stole. Slovní druh slova NA?", options: ["předložka", "spojka", "částice", "příslovce"], answer: "předložka", explanation: "Stojí před podstatným jménem a píše se zvlášť." },
        { prompt: "Venku je DNES chladno. Slovní druh slova DNES?", options: ["příslovce", "podstatné jméno", "zájmeno", "částice"], answer: "příslovce", explanation: "Kdy? Dnes – příslovce času." },
        { prompt: "TEN pes je náš. Slovní druh slova TEN?", options: ["zájmeno", "číslovka", "přídavné jméno", "částice"], answer: "zájmeno", explanation: "Ukazovací zájmeno." },
        { prompt: "Koupili jsme TŘI rohlíky. Slovní druh slova TŘI?", options: ["číslovka", "podstatné jméno", "příslovce", "zájmeno"], answer: "číslovka", explanation: "Kolik? Tři – základní číslovka." },
        { prompt: "Zůstal doma, PROTOŽE byl nemocný. Slovní druh slova PROTOŽE?", options: ["spojka", "předložka", "příslovce", "částice"], answer: "spojka", explanation: "Spojuje dvě věty, před spojkou protože je čárka." },
        { prompt: "ACH, to je krása! Slovní druh slova ACH?", options: ["citoslovce", "částice", "příslovce", "zájmeno"], answer: "citoslovce", explanation: "Vyjadřuje pocit, oddělujeme ho čárkou." },
        { prompt: "V lese roste VYSOKÝ smrk. Slovní druh slova VYSOKÝ?", options: ["přídavné jméno", "příslovce", "podstatné jméno", "sloveso"], answer: "přídavné jméno", explanation: "Jaký smrk? Vysoký." },
        { prompt: "Sešit má MODRÉ desky. Slovní druh slova DESKY?", options: ["podstatné jméno", "přídavné jméno", "sloveso", "zájmeno"], answer: "podstatné jméno", explanation: "Název věci – desky." },
        { prompt: "ASI přijde později. Slovní druh slova ASI?", options: ["částice", "spojka", "předložka", "citoslovce"], answer: "částice", explanation: "Částice vyjadřuje, jak jistý si mluvčí je: asi, snad, jistě." },
        { prompt: "Kolik slovních druhů je ve větě: Pes hlasitě štěká.", options: ["3", "2", "4", "1"], answer: "3", explanation: "Pes = podstatné jméno, hlasitě = příslovce, štěká = sloveso." },
        { prompt: "Ve větě Petr a Jana čtou. Jaký slovní druh je slovo A?", options: ["spojka", "předložka", "částice", "citoslovce"], answer: "spojka", explanation: "Spojuje dva podměty, čárku před ním nepíšeme." }
      ]
    },
    {
      id: "podstatna-pridavna",
      title: "Podstatná a přídavná jména",
      icon: "🏷️",
      type: "choice",
      instructions: "Vyber správnou odpověď.",
      pick: "auto",
      items: [
        { prompt: "Kolik pádů má čeština?", options: ["7", "6", "4", "8"], answer: "7", explanation: "Sedm pádů: kdo/co, koho/čeho, komu/čemu, koho/co, oslovujeme, o kom/o čem, s kým/s čím." },
        { prompt: "Který pád se používá při oslovení?", options: ["5. pád", "1. pád", "4. pád", "7. pád"], answer: "5. pád", explanation: "5. pád (oslovujeme, voláme): Petře! Mami!" },
        { prompt: "Jaký rod má slovo STAVENÍ?", options: ["střední", "mužský", "ženský", "nelze určit"], answer: "střední", explanation: "To stavení – rod střední, vzor stavení." },
        { prompt: "Který vzor patří k rodu ženskému?", options: ["růže", "hrad", "město", "pán"], answer: "růže", explanation: "Ženské vzory: žena, růže, píseň, kost." },
        { prompt: "Jaké je číslo slova STROMY?", options: ["množné", "jednotné", "obojí", "nelze určit"], answer: "množné", explanation: "Stromy = více stromů, číslo množné." },
        { prompt: "Jaký druh je přídavné jméno OTCŮV?", options: ["přivlastňovací", "tvrdé", "měkké", "číselné"], answer: "přivlastňovací", explanation: "Přídavná jména přivlastňovací: otcův, matčin, bratrův." },
        { prompt: "Který tvar přídavného jména je měkký?", options: ["psí", "zdravý", "malý", "dobrý"], answer: "psí", explanation: "Měkká přídavná jména končí v 1. pádě na -í (vzor jarní)." },
        { prompt: "Doplň: V lese rostou vysok___ smrky.", options: ["é", "í", "ý", "ých"], answer: "é", explanation: "Smrky jsou neživotné mužské, 1. pád množného čísla: vysoké smrky." },
        { prompt: "Doplň: Na louce běhal___ koně.", options: ["i", "y", "í", "e"], answer: "i", explanation: "Koně = mužský rod životný, v množném čísle píšeme -i." }
      ]
    },
    {
      id: "slovesa",
      title: "Slovesa – osoba, číslo, čas",
      icon: "🏃",
      type: "choice",
      instructions: "Urči mluvnické kategorie sloves.",
      pick: "auto",
      items: [
        { prompt: "Jaká osoba je ve tvaru ČTETE?", options: ["2. osoba", "1. osoba", "3. osoba", "nelze určit"], answer: "2. osoba", explanation: "Vy čtete – 2. osoba množného čísla." },
        { prompt: "Jaký čas má tvar BUDU PSÁT?", options: ["budoucí", "přítomný", "minulý", "žádný"], answer: "budoucí", explanation: "Budoucí čas se tvoří pomocí budu + infinitiv." },
        { prompt: "Jaký čas má tvar ŠLI JSME?", options: ["minulý", "přítomný", "budoucí", "rozkazovací"], answer: "minulý", explanation: "Minulý čas: šli jsme (my)." },
        { prompt: "Jaké číslo má tvar SPÍM?", options: ["jednotné", "množné", "obojí", "nelze určit"], answer: "jednotné", explanation: "Já spím – 1. osoba čísla jednotného." },
        { prompt: "Který tvar je v rozkazovacím způsobu?", options: ["běž", "běží", "běžel", "běhat"], answer: "běž", explanation: "Rozkazovací způsob: běž, běžme, běžte." },
        { prompt: "Který tvar je infinitiv (neurčitek)?", options: ["mluvit", "mluví", "mluvil", "mluvte"], answer: "mluvit", explanation: "Infinitiv končí na -t (-ti): mluvit, číst, jít." },
        { prompt: "Doplň správně: Kluci si hrál___ na hřišti.", options: ["i", "y", "í", "ý"], answer: "i", explanation: "Podmět kluci je mužský životný → v přísudku -i." },
        { prompt: "Doplň správně: Dívky zpíval___ písničku.", options: ["y", "i", "í", "ý"], answer: "y", explanation: "Podmět dívky je ženský rod → v přísudku -y." },
        { prompt: "Doplň správně: Kotě mňoukal___ celou noc.", options: ["o", "i", "y", "a"], answer: "o", explanation: "Kotě je rod střední, jednotné číslo → mňoukalo." }
      ]
    },
    {
      id: "neohebna",
      title: "Neohebná slova",
      icon: "🧱",
      type: "choice",
      instructions: "Příslovce, předložky, spojky, částice a citoslovce.",
      pick: "auto",
      items: [
        { prompt: "Které slovo je příslovce?", options: ["pomalu", "pomalý", "pomalost", "zpomalit"], answer: "pomalu", explanation: "Příslovce odpovídá na otázky jak, kdy, kde." },
        { prompt: "Které slovo je předložka?", options: ["mezi", "mez", "mezitím", "mezera"], answer: "mezi", explanation: "Mezi domy – předložka stojí před podstatným jménem." },
        { prompt: "Která věta má správně napsanou předložku?", options: ["Šel do školy.", "Šeldo školy.", "Šel doškoly.", "Šel do-školy."], answer: "Šel do školy.", explanation: "Předložka se píše zvlášť, předpona dohromady se slovem." },
        { prompt: "Které slovo je spojka?", options: ["ale", "alej", "alespoň", "alobal"], answer: "ale", explanation: "Spojka ale spojuje věty a píšeme před ní čárku." },
        { prompt: "Před kterou spojkou se čárka NEPÍŠE?", options: ["a", "ale", "protože", "když"], answer: "a", explanation: "Před spojkami a, i, ani, nebo (ve významu slučovacím) čárku nepíšeme." },
        { prompt: "Které slovo je citoslovce?", options: ["haf", "had", "hasič", "hala"], answer: "haf", explanation: "Citoslovce napodobuje zvuk psa." },
        { prompt: "Na jakou otázku odpovídá příslovce místa?", options: ["kde?", "jak?", "kdy?", "proč?"], answer: "kde?", explanation: "Příslovce místa: doma, venku, vlevo." },
        { prompt: "Které slovo je příslovce času?", options: ["zítra", "zítřek", "zítřejší", "zima"], answer: "zítra", explanation: "Kdy? Zítra – příslovce času." },
        { prompt: "Které slovo je částice?", options: ["kéž", "kdo", "který", "kolik"], answer: "kéž", explanation: "Kéž by pršelo! Částice vyjadřuje přání." }
      ]
    }
  ]
});
