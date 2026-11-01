// Přírodověda 5. třída – čtvrtletní písemka: živá a neživá příroda,
// houby a rostliny.
School.register({
  id: "5-prirodoveda-ctvrtletni-pisemka",
  sections: [
    {
      id: "ziva-neziva",
      title: "Živá a neživá příroda",
      icon: "🌍",
      type: "choice",
      instructions: "Vyber správnou odpověď.",
      pick: 6,
      items: [
        { prompt: "Co patří do neživé přírody?", options: ["voda, vzduch, kameny", "houby, mechy, ptáci", "stromy, keře, byliny", "hmyz, ryby, plazi"], answer: "voda, vzduch, kameny", explanation: "Neživá příroda: voda, vzduch, světlo, teplo, horniny, nerosty a půda." },
        { prompt: "Co platí jen pro živé organismy?", options: ["Rostou a rozmnožují se", "Mění se vlivem počasí", "Mají hmotnost", "Mohou se pohybovat"], answer: "Rostou a rozmnožují se", explanation: "Organismy dýchají, přijímají potravu, rostou, rozmnožují se a umírají. Pohybovat se může i voda nebo vítr." },
        { prompt: "Které podmínky potřebuje život na Zemi?", options: ["vodu, vzduch, světlo, teplo", "jen vodu a půdu", "jen světlo", "horniny a nerosty"], answer: "vodu, vzduch, světlo, teplo", explanation: "Bez vody, vzduchu, světla a tepla by život nebyl možný." },
        { prompt: "Odkud pochází na Zemi světlo a teplo?", options: ["ze Slunce", "z Měsíce", "z nitra Země", "z oceánů"], answer: "ze Slunce", explanation: "Slunce je hvězda – zdroj světla a tepla." },
        { prompt: "Kterého plynu je ve vzduchu nejvíc?", options: ["dusíku", "kyslíku", "oxidu uhličitého", "vodní páry"], answer: "dusíku", explanation: "Dusík tvoří asi 4/5 vzduchu, kyslík asi 1/5." },
        { prompt: "Jak vzniká půda?", options: ["zvětráváním hornin a z tlejících zbytků", "jen z písku", "z roztátého sněhu", "jen z listí"], answer: "zvětráváním hornin a z tlejících zbytků", explanation: "Horniny se rozpadají a odumřelé části rostlin a živočichů tvoří humus." },
        { prompt: "Co je žula?", options: ["hornina", "nerost", "živočich", "rostlina"], answer: "hornina", explanation: "Žula je hornina složená z několika nerostů (křemen, živec, slída)." },
        { prompt: "Který nerost se používá v kuchyni?", options: ["sůl kamenná", "křemen", "slída", "grafit"], answer: "sůl kamenná", explanation: "Kuchyňská sůl je nerost halit – sůl kamenná." },
        { prompt: "V jakých skupenstvích se vyskytuje voda?", options: ["pevném, kapalném, plynném", "jen kapalném", "kapalném a plynném", "jen pevném"], answer: "pevném, kapalném, plynném", explanation: "Led, voda a vodní pára." }
      ]
    },
    {
      id: "ziva-nebo-neziva",
      title: "Kam patří?",
      icon: "🔍",
      type: "match",
      instructions: "Přiřaď: rostlina, houba, živočich, nebo neživá příroda.",
      pick: 8,
      items: [
        { prompt: "kámen", answer: "neživá příroda", explanation: "Hornina." },
        { prompt: "smrk", answer: "rostlina", explanation: "Jehličnatý strom." },
        { prompt: "muchomůrka", answer: "houba", explanation: "Jedovatá houba." },
        { prompt: "žížala", answer: "živočich", explanation: "Bezobratlý živočich." },
        { prompt: "vzduch", answer: "neživá příroda", explanation: "Směs plynů." },
        { prompt: "mech", answer: "rostlina", explanation: "Výtrusná rostlina." },
        { prompt: "led", answer: "neživá příroda", explanation: "Voda v pevném skupenství." },
        { prompt: "hřib", answer: "houba", explanation: "Jedlá houba s rourkami." },
        { prompt: "kapradina", answer: "rostlina", explanation: "Výtrusná rostlina." },
        { prompt: "plíseň", answer: "houba", explanation: "Mikroskopická houba." },
        { prompt: "slimák", answer: "živočich", explanation: "Měkkýš." },
        { prompt: "písek", answer: "neživá příroda", explanation: "Rozdrobená hornina." },
        { prompt: "sýkora", answer: "živočich", explanation: "Pták." }
      ]
    },
    {
      id: "houby",
      title: "Houby",
      icon: "🍄",
      type: "choice",
      instructions: "Vyber správnou odpověď.",
      pick: 6,
      items: [
        { prompt: "Proč houby nepatří mezi rostliny?", options: ["Nemají chlorofyl", "Nerostou v lese", "Nemají buňky", "Neumí se rozmnožovat"], answer: "Nemají chlorofyl", explanation: "Bez chlorofylu nedokážou samy vyrábět živiny fotosyntézou." },
        { prompt: "Která houba je smrtelně jedovatá?", options: ["muchomůrka zelená", "hřib smrkový", "bedla vysoká", "liška obecná"], answer: "muchomůrka zelená", explanation: "Muchomůrka zelená je nejjedovatější houba u nás." },
        { prompt: "Co je podhoubí?", options: ["síť vláken v půdě", "spodní strana klobouku", "kořen houby", "mladá houba"], answer: "síť vláken v půdě", explanation: "Podhoubí je hlavní část houby; nad zem vyrůstá jen plodnice." },
        { prompt: "Čím se houby rozmnožují?", options: ["výtrusy", "semeny", "hlízami", "cibulkami"], answer: "výtrusy", explanation: "Výtrusy se tvoří v rourkách nebo na lupenech klobouku." },
        { prompt: "Jak houby pomáhají v přírodě?", options: ["Rozkládají odumřelé zbytky", "Vyrábějí kyslík", "Opylují květy", "Zadržují sníh"], answer: "Rozkládají odumřelé zbytky", explanation: "Houby jsou rozkladači – z listí a dřeva vzniká humus." },
        { prompt: "Která houba se používá při pečení chleba?", options: ["kvasinky", "plíseň", "hřib", "pečárka"], answer: "kvasinky", explanation: "Droždí jsou kvasinky – kypří těsto." },
        { prompt: "Co je lišejník?", options: ["soužití houby a řasy", "druh mechu", "mladá kapradina", "plíseň na stromě"], answer: "soužití houby a řasy", explanation: "Houba dodává vodu, řasa vyrábí živiny." },
        { prompt: "Jakou houbu najdeme na starém chlebu?", options: ["plíseň", "kvasinky", "lišku", "hlívu"], answer: "plíseň", explanation: "Plesnivé potraviny nejíme." },
        { prompt: "Co uděláš, když houbu neznáš?", options: ["Nesbírám ji", "Ochutnám ji", "Uvařím ji déle", "Usuším ji"], answer: "Nesbírám ji", explanation: "Sbíráme jen houby, které bezpečně poznáme." }
      ]
    },
    {
      id: "rostliny",
      title: "Rostliny",
      icon: "🌿",
      type: "choice",
      instructions: "Vyber správnou odpověď.",
      pick: 7,
      items: [
        { prompt: "Co rostlina potřebuje k fotosyntéze?", options: ["světlo, vodu a oxid uhličitý", "jen půdu a tmu", "kyslík a dusík", "jen hnojivo a půdu"], answer: "světlo, vodu a oxid uhličitý", explanation: "Z vody a oxidu uhličitého vyrobí za světla cukr a uvolní kyslík." },
        { prompt: "Kde se v rostlině nachází zelené barvivo chlorofyl?", options: ["hlavně v listech", "hlavně v kořenech", "hlavně v semenech", "jen v květech"], answer: "hlavně v listech", explanation: "Proto jsou listy zelené." },
        { prompt: "Která část rostliny vede vodu z kořene do listů?", options: ["stonek", "květ", "plod", "semeno"], answer: "stonek", explanation: "Stonek nebo kmen vede vodu a živiny." },
        { prompt: "Jak se liší keř od stromu?", options: ["Větví se už od země", "Nemá dřevnatý stonek", "Nikdy nekvete", "Nemá žádné kořeny"], answer: "Větví se už od země", explanation: "Strom má jeden kmen a korunu, keř má více stonků od země." },
        { prompt: "Co je bylina?", options: ["rostlina s nedřevnatým stonkem", "malý strom s kmenem", "druh houby", "rostlina bez kořene a listů"], answer: "rostlina s nedřevnatým stonkem", explanation: "Např. pampeliška, kopretina, pšenice." },
        { prompt: "Které rostliny se rozmnožují výtrusy?", options: ["mechy a kapradiny", "jabloně a hrušně", "smrky a borovice", "tulipány a pampelišky"], answer: "mechy a kapradiny", explanation: "Výtrusné rostliny nekvetou." },
        { prompt: "Co je samičí část květu?", options: ["pestík", "tyčinka", "korunní plátek", "kališní lístek"], answer: "pestík", explanation: "V pestíku je semeník, z něj vznikne plod. Tyčinky tvoří pyl." },
        { prompt: "Co je opylení?", options: ["přenesení pylu na bliznu", "zalévání rostlin vodou", "padání listí na podzim", "klíčení semene"], answer: "přenesení pylu na bliznu", explanation: "Pyl přenáší hmyz nebo vítr." },
        { prompt: "Proč jsou rostliny důležité pro živočichy?", options: ["Vyrábějí kyslík a potravu", "Vyrábějí oxid uhličitý", "Ohřívají vzduch v zimě", "Rozkládají kameny"], answer: "Vyrábějí kyslík a potravu", explanation: "Rostliny jsou na začátku každého potravního řetězce." }
      ]
    },
    {
      id: "napis",
      title: "Napiš pojem",
      icon: "✍️",
      type: "write",
      instructions: "Napiš jedno slovo se správnou diakritikou.",
      pick: 4,
      items: [
        { prompt: "Jak se jmenuje zelené barvivo v listech?", answer: "chlorofyl", explanation: "Chlorofyl zachycuje sluneční světlo." },
        { prompt: "Jak se jmenuje děj, při kterém rostlina vyrábí za světla cukr?", answer: "fotosyntéza",explanation: "Při fotosyntéze vzniká také kyslík." },
        { prompt: "Jak se jmenuje síť vláken houby v půdě?", answer: "podhoubí", explanation: "Nad zem vyrůstá plodnice." },
        { prompt: "Jak se jmenuje tmavá úrodná vrstva půdy z tlejících zbytků?", answer: "humus", explanation: "Vzniká rozkladem listí, dřeva a těl živočichů." },
        { prompt: "Jak se nazývá rozpadání hornin vlivem vody, mrazu a větru?", answer: "zvětrávání", explanation: "Ze zvětralých hornin vzniká půda." },
        { prompt: "Jak se jmenuje organismus, který vzniká soužitím houby a řasy?", answer: "lišejník", explanation: "Lišejníky rostou na kůře stromů i na kamenech." }
      ]
    }
  ]
});
