// Čeština 3. třída – opakování před čtvrtletkou (podle listu ze školy, 27. 10.):
// i/y po tvrdých a měkkých souhláskách, párové souhlásky, ú/ů/u, význam slov,
// slova příbuzná, přísloví a přirovnání.
School.register({
  id: "3-cestina-opakovani",
  sections: [
    {
      id: "tvrde-mekke",
      title: "Tvrdé a měkké souhlásky",
      icon: "✏️",
      type: "choice",
      instructions: "Po tvrdých souhláskách (h, ch, k, r, d, t, n) píšeme y/ý. Po měkkých (ž, š, č, ř, c, j) píšeme i/í. Dí, tí, ní vyslovujeme měkce.",
      pick: "auto",
      items: [
        { prompt: "V naš___ třídě máme nové knížky.", options: ["í", "ý"], answer: "í", explanation: "Po š píšeme vždy í: naší." },
        { prompt: "Máme nové kn___žky.", options: ["í", "ý"], answer: "í", explanation: "Vyslovujeme měkce [kňížky], proto í." },
        { prompt: "Děti si prohlížejí obrázk___.", options: ["y", "i"], answer: "y", explanation: "Po k píšeme y: obrázky." },
        { prompt: "Paní učitelka nám půjčí velk___ atlas.", options: ["ý", "í"], answer: "ý", explanation: "Po k píšeme ý: velký." },
        { prompt: "Na stromě sed___ ptáček.", options: ["í", "ý"], answer: "í", explanation: "Vyslovujeme měkce [seďí], proto í." },
        { prompt: "ch___tat míč", options: ["y", "i"], answer: "y", explanation: "Ch je tvrdá souhláska: chytat." },
        { prompt: "č___slo", options: ["í", "ý"], answer: "í", explanation: "Č je měkká souhláska: číslo." },
        { prompt: "r___ba", options: ["y", "i"], answer: "y", explanation: "R je tvrdá souhláska: ryba." },
        { prompt: "ž___rafa", options: ["i", "y"], answer: "i", explanation: "Ž je měkká souhláska: žirafa." },
        { prompt: "c___bule", options: ["i", "y"], answer: "i", explanation: "C je měkká souhláska: cibule." },
        { prompt: "k___tara", options: ["y", "i"], answer: "y", explanation: "K je tvrdá souhláska: kytara." },
        { prompt: "ř___ká", options: ["í", "ý"], answer: "í", explanation: "Ř je měkká souhláska: říká." },
        { prompt: "h___bat se", options: ["ý", "í"], answer: "ý", explanation: "H je tvrdá souhláska: hýbat." },
        { prompt: "j___dlo", options: ["í", "ý"], answer: "í", explanation: "J je měkká souhláska: jídlo." },
        { prompt: "Kluci ch___tají ryb___.", options: ["y, y", "i, i", "y, i", "i, y"], answer: "y, y", explanation: "Chytají – po ch píšeme y. Ryby – jedna ryba, dvě ryby." }
      ]
    },
    {
      id: "parove",
      title: "Párové souhlásky",
      icon: "👂",
      type: "choice",
      instructions: "Na konci slova slyšíme jinak, než píšeme. Řekni si slovo v jiném tvaru: mráz → mrazy.",
      pick: "auto",
      items: [
        { prompt: "ledový mrá___", options: ["z", "s"], answer: "z", explanation: "mrazy → mráz" },
        { prompt: "sladký me___", options: ["d", "t"], answer: "d", explanation: "medu → med" },
        { prompt: "čerstvý chlé___", options: ["b", "p"], answer: "b", explanation: "chleba → chléb" },
        { prompt: "vysoká vě___", options: ["ž", "š"], answer: "ž", explanation: "věže → věž" },
        { prompt: "těžký bato___", options: ["h", "ch"], answer: "h", explanation: "batohy → batoh" },
        { prompt: "cihlová ze___", options: ["ď", "ť"], answer: "ď", explanation: "zdi → zeď" },
        { prompt: "starý hra___", options: ["d", "t"], answer: "d", explanation: "hrady → hrad" },
        { prompt: "mohutný du___", options: ["b", "p"], answer: "b", explanation: "duby → dub" },
        { prompt: "dřevěný plo___", options: ["t", "d"], answer: "t", explanation: "ploty → plot" },
        { prompt: "ostrý nů___", options: ["ž", "š"], answer: "ž", explanation: "nože → nůž" },
        { prompt: "kozí ro___", options: ["h", "ch"], answer: "h", explanation: "rohy → roh" },
        { prompt: "tenký ple___", options: ["ch", "h"], answer: "ch", explanation: "plechy → plech" },
        { prompt: "krásný obra___", options: ["z", "s"], answer: "z", explanation: "obrazy → obraz" },
        { prompt: "dlouhý no___", options: ["s", "z"], answer: "s", explanation: "nosy → nos" },
        { prompt: "bolavý zu___", options: ["b", "p"], answer: "b", explanation: "zuby → zub" },
        { prompt: "kluzký le___", options: ["d", "t"], answer: "d", explanation: "ledy, ledu → led" }
      ]
    },
    {
      id: "u-u-u",
      title: "ú, ů, nebo u?",
      icon: "🔵",
      type: "choice",
      instructions: "ú píšeme na začátku slova (a po předponě), ů uprostřed a na konci slova. Krátké u slyšíme krátce.",
      pick: "auto",
      items: [
        { prompt: "___směv", options: ["ú", "ů", "u"], answer: "ú", explanation: "Na začátku slova píšeme ú." },
        { prompt: "d___m", options: ["ů", "ú", "u"], answer: "ů", explanation: "Uprostřed slova píšeme ů: dům (domy)." },
        { prompt: "st___l", options: ["ů", "ú", "u"], answer: "ů", explanation: "Uprostřed slova: stůl (stoly)." },
        { prompt: "___nor", options: ["ú", "ů", "u"], answer: "ú", explanation: "Na začátku slova píšeme ú." },
        { prompt: "r___ka", options: ["u", "ú", "ů"], answer: "u", explanation: "Ruka – krátké u." },
        { prompt: "k___ň", options: ["ů", "ú", "u"], answer: "ů", explanation: "Uprostřed slova: kůň (koně)." },
        { prompt: "___kol", options: ["ú", "ů", "u"], answer: "ú", explanation: "Na začátku slova píšeme ú." },
        { prompt: "s___l", options: ["ů", "ú", "u"], answer: "ů", explanation: "Uprostřed slova: sůl (soli)." },
        { prompt: "jdeme dom___", options: ["ů", "ú", "u"], answer: "ů", explanation: "Na konci slova píšeme ů: domů." },
        { prompt: "ne___spěch", options: ["ú", "ů", "u"], answer: "ú", explanation: "Po předponě ne- píšeme ú: úspěch → neúspěch." },
        { prompt: "p___da", options: ["ů", "ú", "u"], answer: "ů", explanation: "Uprostřed slova: půda." },
        { prompt: "___terý", options: ["ú", "ů", "u"], answer: "ú", explanation: "Na začátku slova píšeme ú." },
        { prompt: "h___l", options: ["ů", "ú", "u"], answer: "ů", explanation: "Uprostřed slova: hůl (hole)." },
        { prompt: "kr___h", options: ["u", "ů", "ú"], answer: "u", explanation: "Kruh – krátké u." },
        { prompt: "___stní voda", options: ["ú", "ů", "u"], answer: "ú", explanation: "Na začátku slova: ústa, ústní." }
      ]
    },
    {
      id: "nadrazena",
      title: "Slova nadřazená a podřazená",
      icon: "🧺",
      type: "choice",
      instructions: "Nadřazené slovo je společný název (ovoce). Podřazená slova jsou jeho druhy (jablko, hruška).",
      pick: "auto",
      items: [
        { prompt: "Které slovo je podřazené ke slovu oblečení?", options: ["svetr", "nábytek", "hračka", "jídlo"], answer: "svetr", explanation: "Svetr je druh oblečení." },
        { prompt: "Které slovo patří mezi oblečení?", options: ["kalhoty", "talíř", "kolo", "skříň"], answer: "kalhoty", explanation: "Kalhoty jsou oblečení." },
        { prompt: "Jaké je nadřazené slovo: jablko, hruška, švestka?", options: ["ovoce", "zelenina", "strom", "zahrada"], answer: "ovoce", explanation: "Všechno jsou druhy ovoce." },
        { prompt: "Jaké je nadřazené slovo: pes, kočka, kráva?", options: ["zvířata", "ptáci", "rostliny", "hračky"], answer: "zvířata", explanation: "Pes, kočka i kráva jsou zvířata." },
        { prompt: "Jaké je nadřazené slovo: stůl, židle, postel?", options: ["nábytek", "nářadí", "oblečení", "nádobí"], answer: "nábytek", explanation: "Stůl, židle i postel jsou nábytek." },
        { prompt: "Jaké je nadřazené slovo: mrkev, cibule, okurka?", options: ["zelenina", "ovoce", "květiny", "houby"], answer: "zelenina", explanation: "Všechno je zelenina." },
        { prompt: "Které slovo je podřazené ke slovu nádobí?", options: ["hrnec", "kladivo", "čepice", "pero"], answer: "hrnec", explanation: "Hrnec je nádobí." },
        { prompt: "Které slovo je podřazené ke slovu nářadí?", options: ["pila", "lžíce", "šála", "pastelka"], answer: "pila", explanation: "Pila je nářadí." }
      ]
    },
    {
      id: "protiklady",
      title: "Slova protikladná a souznačná",
      icon: "↔️",
      type: "choice",
      instructions: "Protikladné slovo znamená opak (tma – světlo). Souznačné slovo znamená totéž (plakat – brečet).",
      pick: "auto",
      items: [
        { prompt: "Jaké slovo je protikladné ke slovu tma?", options: ["světlo", "noc", "stín", "černo"], answer: "světlo", explanation: "Opak tmy je světlo." },
        { prompt: "Jaké slovo je souznačné se slovem plakat?", options: ["brečet", "smát se", "zpívat", "křičet"], answer: "brečet", explanation: "Plakat a brečet znamená totéž." },
        { prompt: "Jaké slovo je protikladné ke slovu velký?", options: ["malý", "vysoký", "silný", "tlustý"], answer: "malý", explanation: "Opak velkého je malý." },
        { prompt: "Jaké slovo je protikladné ke slovu rychle?", options: ["pomalu", "hbitě", "brzy", "hned"], answer: "pomalu", explanation: "Opak rychle je pomalu." },
        { prompt: "Jaké slovo je protikladné ke slovu plný?", options: ["prázdný", "těžký", "celý", "velký"], answer: "prázdný", explanation: "Opak plného je prázdný." },
        { prompt: "Jaké slovo je protikladné ke slovu den?", options: ["noc", "ráno", "týden", "slunce"], answer: "noc", explanation: "Opak dne je noc." },
        { prompt: "Jaké slovo je souznačné se slovem běžet?", options: ["utíkat", "stát", "sedět", "ležet"], answer: "utíkat", explanation: "Běžet a utíkat znamená skoro totéž." },
        { prompt: "Jaké slovo je souznačné se slovem mluvit?", options: ["hovořit", "mlčet", "psát", "spát"], answer: "hovořit", explanation: "Mluvit a hovořit znamená totéž." },
        { prompt: "Jaké slovo je souznačné se slovem hezký?", options: ["pěkný", "ošklivý", "starý", "malý"], answer: "pěkný", explanation: "Hezký a pěkný znamená totéž." },
        { prompt: "Jaké slovo je souznačné se slovem malý?", options: ["drobný", "velký", "široký", "hrubý"], answer: "drobný", explanation: "Malý a drobný znamená skoro totéž." }
      ]
    },
    {
      id: "pribuzna",
      title: "Slova příbuzná",
      icon: "🌳",
      type: "choice",
      instructions: "Příbuzná slova mají stejný kořen: ryb- → ryba, rybník, rybář.",
      pick: "auto",
      items: [
        { prompt: "Které slovo je příbuzné ke slovu ryba?", options: ["rybník", "rychlý", "rytíř", "rýma"], answer: "rybník", explanation: "Rybník má kořen ryb-." },
        { prompt: "Kdo chytá ryby? Najdi příbuzné slovo.", options: ["rybář", "rýže", "rýt", "rys"], answer: "rybář", explanation: "Rybář chytá ryby, kořen ryb-." },
        { prompt: "Které slovo je příbuzné ke slovu les?", options: ["lesník", "lehký", "lev", "lepidlo"], answer: "lesník", explanation: "Lesník se stará o les." },
        { prompt: "Které slovo je příbuzné ke slovu voda?", options: ["vodník", "vozík", "volat", "vosa"], answer: "vodník", explanation: "Vodník bydlí ve vodě." },
        { prompt: "Které slovo je příbuzné ke slovu zahrada?", options: ["zahradník", "zahrát", "zámek", "zabít"], answer: "zahradník", explanation: "Zahradník pracuje na zahradě." },
        { prompt: "Které slovo je příbuzné ke slovu škola?", options: ["školák", "šála", "škoda", "šnek"], answer: "školák", explanation: "Školák chodí do školy." },
        { prompt: "Které slovo NENÍ příbuzné ke slovu les?", options: ["lesk", "lesník", "lesní", "lesík"], answer: "lesk", explanation: "Lesk = když se něco leskne. S lesem nesouvisí." },
        { prompt: "Které slovo NENÍ příbuzné ke slovu ryba?", options: ["rychle", "rybka", "rybník", "rybí"], answer: "rychle", explanation: "Rychle s rybou nesouvisí." }
      ]
    },
    {
      id: "prislovi",
      title: "Přísloví a přirovnání",
      icon: "🦉",
      type: "choice",
      instructions: "Doplň přísloví nebo přirovnání.",
      pick: "auto",
      items: [
        { prompt: "Kdo jinému jámu kopá, sám do ní ___.", options: ["spadne", "skočí", "vleze", "kouká"], answer: "spadne", explanation: "Kdo chce ublížit druhému, ublíží nakonec sám sobě." },
        { prompt: "Tichý jako ___.", options: ["myška", "slon", "pes", "kohout"], answer: "myška", explanation: "Myška je potichu." },
        { prompt: "Pracovitý jako ___.", options: ["včelička", "kocour", "lenochod", "motýl"], answer: "včelička", explanation: "Včely pořád pracují." },
        { prompt: "Mazaný jako ___.", options: ["liška", "ovce", "kráva", "slepice"], answer: "liška", explanation: "Liška je v pohádkách chytrá a mazaná." },
        { prompt: "Hladový jako ___.", options: ["vlk", "kapr", "motýl", "hlemýžď"], answer: "vlk", explanation: "Hladový jako vlk = má velký hlad." },
        { prompt: "Pomalý jako ___.", options: ["šnek", "zajíc", "gepard", "vítr"], answer: "šnek", explanation: "Šnek leze pomalu." },
        { prompt: "Bílý jako ___.", options: ["sníh", "uhel", "krev", "tráva"], answer: "sníh", explanation: "Sníh je bílý." },
        { prompt: "Bez práce nejsou ___.", options: ["koláče", "boty", "hory", "kočky"], answer: "koláče", explanation: "Když chceš něco mít, musíš pro to pracovat." },
        { prompt: "Lež má krátké ___.", options: ["nohy", "uši", "vlasy", "ruce"], answer: "nohy", explanation: "Lež se brzy prozradí." },
        { prompt: "Komu se nelení, tomu se ___.", options: ["zelení", "lení", "nedaří", "zdá"], answer: "zelení", explanation: "Kdo pracuje, tomu se daří." },
        { prompt: "Ranní ptáče dál ___.", options: ["doskáče", "doletí", "uteče", "zpívá"], answer: "doskáče", explanation: "Kdo začne brzy, dojde dál." },
        { prompt: "Opakování je matka ___.", options: ["moudrosti", "lenosti", "zábavy", "pohody"], answer: "moudrosti", explanation: "Kdo opakuje, ten si pamatuje." }
      ]
    }
  ]
});
