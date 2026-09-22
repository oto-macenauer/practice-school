// Čeština 5. třída – hláska, slabika, stavba slova (kořen, předpona, přípona),
// slova příbuzná. Navazuje na probranou látku ze září.
School.register({
  id: "5-cestina-stavba-slova",
  sections: [
    {
      id: "hlasky-slabiky",
      title: "Hlásky a slabiky",
      icon: "🔡",
      type: "choice",
      instructions: "Vyber správnou odpověď.",
      pick: "auto",
      items: [
        { prompt: "Kolik hlásek má slovo CHLAPEC?", options: ["5", "6", "7", "8"], answer: "6", explanation: "CH je jedna hláska: ch-l-a-p-e-c = 6 hlásek. Písmen je sedm." },
        { prompt: "Kolik slabik má slovo NEJRYCHLEJŠÍ?", options: ["3", "4", "5", "6"], answer: "4", explanation: "nej-rych-lej-ší = 4 slabiky." },
        { prompt: "Které slovo má jen jednu slabiku?", options: ["vlk", "zahrada", "kolo", "motýl"], answer: "vlk", explanation: "Ve slově VLK je slabikotvorné L – drží celou slabiku, i když tam není samohláska." },
        { prompt: "Kolik slabik má slovo PŘÍRODOVĚDA?", options: ["4", "5", "6", "3"], answer: "5", explanation: "pří-ro-do-vě-da = 5 slabik." },
        { prompt: "Které písmeno není samohláska?", options: ["ř", "é", "ů", "í"], answer: "ř", explanation: "Hlásky dělíme na samohlásky (a, e, i, o, u, y – krátké i dlouhé), dvojhlásky (ou, au, eu) a souhlásky. Ř je souhláska." },
        { prompt: "Které souhlásky jsou obojetné?", options: ["b, f, l, m, p, s, v, z", "h, ch, k, r, d, t, n", "ž, š, č, ř, c, j", "jen b a p"], answer: "b, f, l, m, p, s, v, z", explanation: "Po obojetných souhláskách se v kořeni řídíme vyjmenovanými slovy." },
        { prompt: "Ve kterém slově je tvrdá souhláska hned na začátku?", options: ["kolo", "židle", "čaj", "jelen"], answer: "kolo", explanation: "Tvrdé souhlásky jsou h, ch, k, r, d, t, n. Slovo KOLO začíná na K." },
        { prompt: "Která dvojice hlásek je dvojhláska?", options: ["ou", "eo", "ia", "uo"], answer: "ou", explanation: "Dvojhlásky v češtině jsou ou, au, eu – vyslovují se jedním dechem (mouka, auto)." },
        { prompt: "Kolik hlásek má slovo ŠKOLA?", options: ["4", "5", "6", "3"], answer: "5", explanation: "š-k-o-l-a = 5 hlásek." },
        { prompt: "Které slovo má stejný počet písmen i hlásek?", options: ["strom", "chalupa", "ochrana", "chléb"], answer: "strom", explanation: "Ve slovech s CH je o jednu hlásku méně než písmen. STROM má 5 písmen i 5 hlásek." }
      ]
    },
    {
      id: "koren",
      title: "Kořen slova",
      icon: "🌱",
      type: "choice",
      instructions: "Kořen je společná část slov příbuzných. Najdi kořen.",
      pick: "auto",
      items: [
        { prompt: "Jaký je kořen slova LESNÍK?", options: ["les", "sník", "ník", "lesn"], answer: "les", explanation: "LES-ník. Příbuzná slova: les, lesní, lesník, zalesnit." },
        { prompt: "Jaký je kořen slova PODZEMNÍ?", options: ["zem", "pod", "podzem", "ní"], answer: "zem", explanation: "POD-zem-NÍ: pod- je předpona, -ní přípona, kořen je ZEM." },
        { prompt: "Jaký je kořen slova PŘELETĚT?", options: ["let", "pře", "leť", "přelet"], answer: "let", explanation: "PŘE-let-ĚT. Příbuzná: let, letět, letadlo, přílet." },
        { prompt: "Jaký je kořen slova UČITELKA?", options: ["uč", "učit", "tel", "ka"], answer: "uč", explanation: "UČ-i-tel-ka: kořen uč-, přípony -tel a -ka. Příbuzná: učit, učitel, učebnice, naučit." },
        { prompt: "Jaký je kořen slova VODNÍK?", options: ["vod", "voda", "dník", "ník"], answer: "vod", explanation: "VOD-ník. Kořen se píše bez koncovky: vod- (voda, vodní, povodeň)." },
        { prompt: "Jaký je kořen slova SNĚHULÁK?", options: ["sněh", "sníh", "hulák", "sně"], answer: "sněh", explanation: "SNĚH-ulák. V příbuzných slovech se hláska může měnit: sníh – sněhu – sněhulák." },
        { prompt: "Jaký je kořen slova RYBNÍK?", options: ["ryb", "ryba", "rybn", "ník"], answer: "ryb", explanation: "RYB-ník. Příbuzná slova: ryba, rybář, rybí." },
        { prompt: "Jaký je kořen slova ROZSVÍTIT?", options: ["svít", "roz", "svit", "tit"], answer: "svít", explanation: "ROZ-svít-IT. Příbuzná: svítit, světlo, rozsvícený." },
        { prompt: "Která dvě slova mají stejný kořen?", options: ["kniha – knížka", "kniha – knír", "les – lest", "myš – myšlenka"], answer: "kniha – knížka", explanation: "KNIH-a a KNÍŽ-ka mají společný kořen (h se mění na ž). Ostatní dvojice spolu významem nesouvisí." },
        { prompt: "Co je to kořen slova?", options: ["Společná část slov příbuzných", "První slabika slova", "Část na konci slova", "Celé slovo bez písmen"], answer: "Společná část slov příbuzných", explanation: "Kořen nese hlavní význam a najdeme ho ve všech příbuzných slovech." }
      ]
    },
    {
      id: "predpona",
      title: "Předpony",
      icon: "⬅️",
      type: "choice",
      instructions: "Předpona stojí před kořenem a mění význam slova.",
      pick: "auto",
      items: [
        { prompt: "Jaká předpona je ve slově NADHODIT?", options: ["nad-", "na-", "hod-", "-it"], answer: "nad-", explanation: "NAD-hod-IT. Předpony pod-, nad-, od-, před- se píšou vždy s d, i když slyšíme t." },
        { prompt: "Ve kterém slově je předpona?", options: ["vyletět", "voda", "leták", "dobrý"], answer: "vyletět", explanation: "VY-letět. Ostatní slova předponu nemají." },
        { prompt: "Které slovo je opakem slova PŘILETĚT?", options: ["odletět", "doletět", "vzletět", "letadlo"], answer: "odletět", explanation: "Předpony při- a od- mají opačný význam: přiletět × odletět." },
        { prompt: "Co vznikne, když ke slovu PSÁT přidáš předponu PŘE-?", options: ["přepsat", "přepísat", "přepsať", "přepis"], answer: "přepsat", explanation: "PŘE-psát = napsat znovu. Předpona se píše dohromady se slovem." },
        { prompt: "Doplň správně: Musíš ___hodit míč ze stromu.", options: ["shodit", "zhodit", "schodit", "shoďit"], answer: "shodit", explanation: "Předpona S- znamená pohyb shora dolů nebo dohromady: shodit, sjet, sesbírat." },
        { prompt: "Doplň správně: Nesmíš ___tratit klíče.", options: ["ztratit", "stratit", "sztratit", "ztráťit"], answer: "ztratit", explanation: "Předpona Z- znamená změnu stavu: ztratit, zmoknout, zlepšit." },
        { prompt: "Kolik předpon má slovo NEPŘEDPLATIL?", options: ["2", "1", "3", "žádnou"], answer: "2", explanation: "NE-PŘED-plat-il: předpony jsou ne- a před-, kořen je plat-." },
        { prompt: "Ve kterém slově NENÍ předpona?", options: ["podlaha", "podpis", "podchod", "podzim"], answer: "podlaha", explanation: "PODLAHA je dnes slovo bez předpony – nedá se rozdělit na pod + laha s významem." },
        { prompt: "Jaká předpona je ve slově BEZVĚTŘÍ?", options: ["bez-", "be-", "větr-", "-í"], answer: "bez-", explanation: "BEZ-větř-Í. Předpona bez- znamená, že tam něco není – bezvětří je, když nefouká vítr." },
        { prompt: "Která předpona se hodí: ___jít dokola celé náměstí?", options: ["obe-", "ode-", "vze-", "beze-"], answer: "obe-", explanation: "OBE-jít = jít kolem dokola. Předpona ob-/obe- znamená pohyb okolo." }
      ]
    },
    {
      id: "pripona",
      title: "Přípony a koncovky",
      icon: "➡️",
      type: "choice",
      instructions: "Přípona stojí za kořenem, koncovka je úplně na konci a mění se při skloňování.",
      pick: "auto",
      items: [
        { prompt: "Jaká přípona je ve slově RYBÁŘ?", options: ["-ář", "ryb-", "-ř", "-bář"], answer: "-ář", explanation: "RYB-ář. Přípona -ář/-ař tvoří názvy povolání: rybář, kovář, lékař." },
        { prompt: "Jakou příponou vznikne z LESA název člověka, který se o něj stará?", options: ["-ník", "-ka", "-ec", "-ost"], answer: "-ník", explanation: "les + -ník = LESNÍK. Stejně školník, rybník je ale věc." },
        { prompt: "Které slovo je zdrobnělina?", options: ["kočička", "kočka", "kočkovitý", "kocour"], answer: "kočička", explanation: "Zdrobněliny se tvoří příponami -ka, -ek, -ko, -ička, -eček." },
        { prompt: "Jaká přípona tvoří slovo DOMEČEK?", options: ["-eček", "dom-", "-ček", "-ek"], answer: "-eček", explanation: "DOM-eček. Přípona -eček vznikla ze dvou zdrobnělin: dům → domek → domeček." },
        { prompt: "Co je ve slově ŽENAMI koncovka?", options: ["-ami", "-mi", "-i", "žen-"], answer: "-ami", explanation: "Koncovka se mění při skloňování: žena, ženy, ženám, ženami." },
        { prompt: "Které slovo má příponu -OST?", options: ["radost", "host", "most", "kost"], answer: "radost", explanation: "RAD-ost (od radovat se). HOST, MOST a KOST jsou celé kořeny." },
        { prompt: "Jakou koncovku má přídavné jméno ČESKÝ?", options: ["-ý", "-ský", "-ost", "-ák"], answer: "-ý", explanation: "česk-ý: přípona -sk-, koncovka -ý. Koncovka se při skloňování mění (českého, českému)." },
        { prompt: "Které slovo je tvořeno příponou -ÁRNA (místo)?", options: ["pekárna", "pekař", "peče", "pečivo"], answer: "pekárna", explanation: "Přípona -árna/-írna označuje místo: pekárna, mlékárna, čistírna." },
        { prompt: "Co se ve slově mění při skloňování?", options: ["koncovka", "kořen", "předpona", "přípona"], answer: "koncovka", explanation: "Kořen, předpona i přípona zůstávají – mění se jen koncovka." },
        { prompt: "Rozděl slovo PODVODNÍK. Co je přípona?", options: ["-ník", "pod-", "vod-", "-ík"], answer: "-ník", explanation: "POD-vod-NÍK: předpona pod-, kořen vod-, přípona -ník." }
      ]
    },
    {
      id: "pribuzna-slova",
      title: "Slova příbuzná",
      icon: "👨‍👩‍👧",
      type: "choice",
      instructions: "Které slovo do skupiny nepatří? Pozor na slova, která jen podobně znějí.",
      pick: "auto",
      items: [
        { prompt: "les – lesní – lesník – lest", options: ["lest", "les", "lesní", "lesník"], answer: "lest", explanation: "LEST znamená chytrý trik, s lesem nesouvisí." },
        { prompt: "myš – myška – myší – myšlenka", options: ["myšlenka", "myš", "myška", "myší"], answer: "myšlenka", explanation: "MYŠLENKA je příbuzná se slovem myslet, ne s myší." },
        { prompt: "zub – zubař – zubatý – zubr", options: ["zubr", "zub", "zubař", "zubatý"], answer: "zubr", explanation: "ZUBR je zvíře, jen náhodou zní podobně." },
        { prompt: "voda – vodník – vodní – vodit", options: ["vodit", "voda", "vodník", "vodní"], answer: "vodit", explanation: "VODIT znamená někoho vést, s vodou nesouvisí." },
        { prompt: "sůl – slaný – solnička – solidní", options: ["solidní", "sůl", "slaný", "solnička"], answer: "solidní", explanation: "SOLIDNÍ znamená spolehlivý – je to přejaté slovo." },
        { prompt: "kolo – kolečko – kolotoč – koleno", options: ["koleno", "kolo", "kolečko", "kolotoč"], answer: "koleno", explanation: "KOLENO je část nohy, kořen je jiný." },
        { prompt: "hora – horský – horolezec – horký", options: ["horký", "hora", "horský", "horolezec"], answer: "horký", explanation: "HORKÝ znamená teplý, s horou nemá nic společného." },
        { prompt: "malovat – malíř – malba – malý", options: ["malý", "malovat", "malíř", "malba"], answer: "malý", explanation: "MALÝ je o velikosti, ostatní jsou o malování." },
        { prompt: "chodit – chodník – průchod – chov", options: ["chov", "chodit", "chodník", "průchod"], answer: "chov", explanation: "CHOV je od slova chovat (zvířata)." },
        { prompt: "hrad – hradní – hradby – hrách", options: ["hrách", "hrad", "hradní", "hradby"], answer: "hrách", explanation: "HRÁCH je luštěnina." }
      ]
    },
    {
      id: "tvoreni-slov",
      title: "Tvoř nová slova",
      icon: "✍️",
      type: "write",
      instructions: "Napiš slovo. Diakritiku piš správně.",
      pick: "auto",
      items: [
        { prompt: "Přidej ke kořenu LES příponu -NÍK.", answer: "lesník", explanation: "les + -ník = lesník." },
        { prompt: "Přidej ke slovu PSÁT předponu NA-.", answer: "napsat", explanation: "na- + psát = napsat." },
        { prompt: "Napiš opak slova NADZEMNÍ (s předponou pod-).", answer: "podzemní", explanation: "pod- + zem + -ní = podzemní. Předpona pod- se vždy píše s d." },
        { prompt: "Napiš zdrobnělinu slova STŮL.", answer: "stolek", accept: ["stoleček"], explanation: "stůl → stolek → stoleček. Ve zdrobnělině se ů mění na o." },
        { prompt: "Napiš, jak se jmenuje člověk, který peče pečivo.", answer: "pekař", explanation: "kořen pek- + přípona -ař = pekař." },
        { prompt: "Co dělá lampa? Napiš sloveso v infinitivu se stejným kořenem jako slovo SVĚTLO.", answer: "svítit", accept: ["svítí"], explanation: "Kořeny svět-/svít- jsou příbuzné: světlo, svítit, osvětlení." },
        { prompt: "Napiš, jak se jmenuje místo, kde se peče chleba.", answer: "pekárna", accept: ["pekařství"], explanation: "pek- + -árna = pekárna (přípona -árna označuje místo)." },
        { prompt: "Doplň sloveso s předponou PŘI-: Letadlo už ___ (minulý čas slovesa letět).", answer: "přiletělo", explanation: "při- + letělo = přiletělo. Letadlo je rodu středního, proto -o." }
      ]
    }
  ]
});
