// Čeština 3. třída – výklad: být × bít a další dvojice s opačným i/y
// (dobýt/dobít, nabýt/nabít, odbýt/odbít, pobýt/pobít, přibýt/přibít, zbýt/zbít, býlí/bílý, bydlo/bidlo).
// Podle prezentace ze školy (23. 10.).
School.register({
  id: "3-cestina-byt-bit",
  lesson: [
    {
      type: "text",
      html:
        "<h2>být, nebo bít?</h2>" +
        "<p><b>bít</b> s měkkým <b>I</b> = někdo někoho nebo něco <b>mlátí, tluče</b>. Je to násilný čin.</p>" +
        "<p><b>být</b> s tvrdým <b>Y</b> = něco nebo někdo se někde <b>vyskytuje</b>, něco <b>získal nebo ztratil</b>, " +
        "něco se <b>objevilo nebo zmizelo</b>. Je to vyjmenované slovo a jeho příbuzná slova píšeme také s Y.</p>" +
        "<p><b>Pomůcka:</b> zkus místo slova říct <i>tlouct</i>. Dává věta smysl? Pak píšeš <b>I</b>.</p>"
    },
    {
      type: "table",
      head: ["s tvrdým Y (být)", "s měkkým I (bít)"],
      rows: [
        ["dobýt – získat (dobýt hrad, dobývat uhlí)", "dobít – doplnit energii nebo kredit (dobít mobil); srdce dobilo = přestalo tlouct; zabít zraněné zvíře"],
        ["nabýt – získat (nabýt odvahy)", "nabít – dát energii do přístroje, náboje do pušky"],
        ["odbýt – udělat něco ledabyle, odbýt prosbu = odmítnout ji", "odbít – hodiny odbíjejí čas; odpálit míč"],
        ["pobýt – někde se zdržet (pobyli jsme u moře)", "pobít – pomlátit (kroupy pobily úrodu)"],
        ["přibýt – přijít, přicestovat, přidat se (přibyl nový žák)", "přibít – přitlouct (přibít poličku)"],
        ["zbýt – zůstat (zbyl kousek dortu)", "zbít – zmlátit"],
        ["býlí – rostliny, plevel (příbuzné k bylina); býložravec", "bílý – barva"],
        ["bydlo – bydlení, živobytí (má dobré bydlo)", "bidlo – dlouhá tyč; ptáci sedí na bidélku"]
      ]
    }
  ],
  sections: [
    {
      id: "dvojice",
      title: "Být, nebo bít?",
      icon: "🔨",
      type: "choice",
      instructions: "Doplň y/ý, nebo i/í. Rozmysli si, jestli jde o mlácení, nebo o bytí.",
      pick: "auto",
      items: [
        { prompt: "Hodiny na věži od___ly poledne.", options: ["i", "y"], answer: "i", explanation: "Hodiny odbíjejí – tlučou čas. Odbily." },
        { prompt: "Úkol jsem od___l, proto je plný chyb.", options: ["y", "i"], answer: "y", explanation: "Odbýt = udělat ledabyle. Odbyl." },
        { prompt: "Myslivec na___l pušku.", options: ["i", "y"], answer: "i", explanation: "Dal do pušky náboje. Nabil." },
        { prompt: "Rytíři do___li hrad.", options: ["y", "i"], answer: "y", explanation: "Hrad získali. Dobyli." },
        { prompt: "V dolech se do___vá uhlí.", options: ["y", "i"], answer: "y", explanation: "Uhlí se získává. Dobývá." },
        { prompt: "Musím si do___t kredit do mobilu.", options: ["i", "y"], answer: "i", explanation: "Kredit doplňujeme. Dobít." },
        { prompt: "O prázdninách jsme po___li u babičky.", options: ["y", "i"], answer: "y", explanation: "Byli jsme tam. Pobyli." },
        { prompt: "Kroupy po___ly úrodu.", options: ["i", "y"], answer: "i", explanation: "Kroupy úrodu potloukly. Pobily." },
        { prompt: "Děda při___l poličku na zeď.", options: ["i", "y"], answer: "i", explanation: "Poličku přitloukl. Přibil." },
        { prompt: "Do naší třídy při___l nový žák.", options: ["y", "i"], answer: "y", explanation: "Žák přišel, přidal se. Přibyl." },
        { prompt: "Z dortu nám z___l jen kousek.", options: ["y", "i"], answer: "y", explanation: "Kousek zůstal. Zbyl." },
        { prompt: "Kůň b___l kopytem do země.", options: ["i", "y"], answer: "i", explanation: "Kůň tloukl kopytem. Bil." },
        { prompt: "Včera jsem b___l v kině.", options: ["y", "i"], answer: "y", explanation: "Byl jsem tam. Být." },
        { prompt: "Táta na___l baterku do fotoaparátu.", options: ["i", "y"], answer: "i", explanation: "Doplnil energii. Nabil." },
        { prompt: "Lev na___l odvahy a vyrazil na lov.", options: ["y", "i"], answer: "y", explanation: "Odvahu získal. Nabyl." },
        { prompt: "Kovář b___je kladivem do železa.", options: ["i", "y"], answer: "i", explanation: "Kovář tluče. Bije." },
        { prompt: "Paní mě od___la, že teď nemá čas.", options: ["y", "i"], answer: "y", explanation: "Odmítla mou prosbu. Odbyla." },
        { prompt: "Brankář od___l míč rukou.", options: ["i", "y"], answer: "i", explanation: "Míč odpálil. Odbil." }
      ]
    },
    {
      id: "byli-bily",
      title: "Býlí, bílý, bydlo, bidlo",
      icon: "🌿",
      type: "choice",
      instructions: "Doplň správné písmeno.",
      pick: "auto",
      items: [
        { prompt: "Sníh je b___lý.", options: ["í", "ý"], answer: "í", explanation: "Bílý = barva, měkké í." },
        { prompt: "Kráva je b___ložravec.", options: ["ý", "í"], answer: "ý", explanation: "Býložravec jí býlí – rostliny. Příbuzné k bylina." },
        { prompt: "Na záhonu roste plevel a b___lí.", options: ["ý", "í"], answer: "ý", explanation: "Býlí = rostliny, plevel." },
        { prompt: "Papoušek sedí na b___délku.", options: ["i", "y"], answer: "i", explanation: "Bidélko je malá tyčka." },
        { prompt: "Peřiny visí na dlouhém b___dle.", options: ["i", "y"], answer: "i", explanation: "Bidlo = dlouhá tyč." },
        { prompt: "Pes má u nás dobré b___dlo.", options: ["y", "i"], answer: "y", explanation: "Bydlo = bydlení, dobře se mu žije." },
        { prompt: "Maminka koupila b___lé tričko.", options: ["í", "ý"], answer: "í", explanation: "Bílé = barva." },
        { prompt: "Převozník odrazil loď b___dlem.", options: ["i", "y"], answer: "i", explanation: "Převozník používá dlouhou tyč – bidlo." }
      ]
    },
    {
      id: "co-to-znamena",
      title: "Co to slovo znamená?",
      icon: "💡",
      type: "choice",
      instructions: "Vyber, co slovo znamená.",
      pick: "auto",
      items: [
        { prompt: "Co znamená slovo zbýt?", options: ["zůstat", "zmlátit", "zbarvit", "zmizet"], answer: "zůstat", explanation: "Zbýt = zůstat. Zbít = zmlátit." },
        { prompt: "Co znamená slovo přibít?", options: ["přitlouct", "přijít", "přibrat", "přidat se"], answer: "přitlouct", explanation: "Přibít hřebíkem. Přibýt = přijít." },
        { prompt: "Co znamená slovo dobýt?", options: ["získat", "doplnit", "dolít", "dotlouct"], answer: "získat", explanation: "Dobýt hrad = získat ho. Dobít mobil = doplnit energii." },
        { prompt: "Co znamená slovo odbýt?", options: ["udělat ledabyle", "odpálit míč", "odtlouct", "odejít"], answer: "udělat ledabyle", explanation: "Odbýt úkol = odfláknout ho. Odbít míč = odpálit ho." },
        { prompt: "Co znamená slovo pobýt?", options: ["někde se zdržet", "pomlátit", "pomoct", "pobavit se"], answer: "někde se zdržet", explanation: "Pobýt u moře. Pobít = pomlátit." },
        { prompt: "Co znamená slovo nabít?", options: ["dát náboje", "získat", "najít", "nabrat"], answer: "dát náboje", explanation: "Nabít pušku nebo baterku. Nabýt = získat." },
        { prompt: "Kdo je býložravec?", options: ["zvíře, které jí rostliny", "bílé zvíře", "zvíře, které bije", "zvíře v bytě"], answer: "zvíře, které jí rostliny", explanation: "Býlí = rostliny. Proto býložravec s ý." },
        { prompt: "Co je bidlo?", options: ["dlouhá tyč", "bydlení", "bílá barva", "bylina"], answer: "dlouhá tyč", explanation: "Bidlo s i je tyč. Bydlo s y je bydlení." }
      ]
    }
  ]
});
