// Logika – procvičování pro 3. třídu (příprava na Logickou olympiádu, kategorie A).
// Úlohy jsou inspirované ukázkami na logickaolympiada.cz: obrázkové řady, tabulky
// („co patří místo otazníku“), skrytá slova, číselné řady, úvahy, co nepatří, analogie.
School.register({
  id: "3-logika-procvicovani",
  sections: [
    {
      id: "obrazkove-rady",
      title: "Obrázkové řady",
      icon: "🔁",
      type: "choice",
      instructions: "Najdi pravidlo řady. Co patří místo otazníku?",
      pick: "auto",
      items: [
        { prompt: "Co bude dál?", grid: [["🔴", "🔵", "🔴", "🔵", "🔴", "?"]], options: ["🔵", "🔴", "🟢", "🟡"], answer: "🔵", explanation: "Červená a modrá se pravidelně střídají." },
        { prompt: "Co bude dál?", grid: [["🔺", "🔺", "🔵", "🔺", "🔺", "🔵", "🔺", "🔺", "?"]], options: ["🔺", "🔵", "🟩", "⭐"], answer: "🔵", explanation: "Opakuje se skupina: dva trojúhelníky a kolečko." },
        { prompt: "Co bude dál?", grid: [["⬆️", "➡️", "⬇️", "⬅️", "⬆️", "➡️", "?"]], options: ["⬆️", "➡️", "⬇️", "⬅️"], answer: "⬇️", explanation: "Šipka se pokaždé otočí o čtvrt otáčky doprava (jako ručička hodin)." },
        { prompt: "Kolik koleček bude na dalším obrázku?", grid: [["🟡", "🟡🟡", "🟡🟡🟡", "?"]], options: ["🟡🟡", "🟡🟡🟡🟡", "🟡🟡🟡🟡🟡", "🟡🟡🟡"], answer: "🟡🟡🟡🟡", explanation: "Každý obrázek má o jedno kolečko víc: 1, 2, 3, 4." },
        { prompt: "Které zvířátko bude dál?", grid: [["🐱", "🐶", "🐭", "🐱", "🐶", "🐭", "🐱", "?"]], options: ["🐱", "🐶", "🐭", "🐰"], answer: "🐶", explanation: "Opakuje se kočka, pes, myš." },
        { prompt: "Kam bude ukazovat další šipka?", grid: [["⬆️", "↗️", "➡️", "↘️", "⬇️", "?"]], options: ["↙️", "⬅️", "↖️", "⬆️"], answer: "↙️", explanation: "Šipka se pokaždé otočí o kousek (osminu otáčky) doprava." },
        { prompt: "Který obrázek bude dál?", grid: [["🍎", "🍎", "🍌", "🍎", "🍎", "🍌", "🍎", "?"]], options: ["🍎", "🍌", "🍐", "🍒"], answer: "🍎", explanation: "Opakují se dvě jablka a banán. Po jablku přijde ještě jedno jablko." },
        { prompt: "Jak bude vypadat další obrázek?", grid: [["🔴", "🔴🔵", "🔴🔵🔴", "🔴🔵🔴🔵", "?"]], options: ["🔵🔴🔵🔴🔵", "🔴🔵🔴🔵🔴", "🔴🔵🔴🔵🔵", "🔴🔴🔵🔵🔴"], answer: "🔴🔵🔴🔵🔴", explanation: "Na konec se vždy přidá jedno kolečko a barvy se střídají: červená, modrá, červená…" },
        { prompt: "Kolik bude hodin na dalších hodinách?", grid: [["🕐", "🕑", "🕒", "🕓", "?"]], options: ["🕕", "🕔", "🕒", "🕐"], answer: "🕔", explanation: "Každé hodiny jsou o hodinu později: 1, 2, 3, 4 a pak 5 hodin." },
        { prompt: "Co bude dál?", grid: [["⬛", "⬜", "⬛", "⬜", "⬜", "⬛", "⬜", "⬜", "⬜", "⬛", "?"]], options: ["⬛", "⬜", "🟥"], answer: "⬜", explanation: "Bílých čtverečků mezi černými přibývá: 1, 2, 3… Po černém tedy začíná skupina čtyř bílých." }
      ]
    },
    {
      id: "tabulky",
      title: "Tabulky",
      icon: "🔲",
      type: "choice",
      instructions: "Prohlédni si řádky i sloupce. Co patří místo otazníku?",
      pick: "auto",
      items: [
        { prompt: "V každém řádku i sloupci je každá barva jen jednou.", grid: [["🔴", "🔵", "🟢"], ["🟢", "🔴", "🔵"], ["🔵", "🟢", "?"]], options: ["🔴", "🔵", "🟢", "🟡"], answer: "🔴", explanation: "V posledním řádku chybí červená. Ve sloupci také." },
        { prompt: "V každém řádku i sloupci je každý tvar jen jednou.", grid: [["⭐", "❤️", "🔷"], ["❤️", "?", "⭐"], ["🔷", "⭐", "❤️"]], options: ["⭐", "❤️", "🔷", "🔺"], answer: "🔷", explanation: "Ve druhém řádku je srdce a hvězda – chybí modrý kosočtverec." },
        { prompt: "V každém řádku i sloupci je každé zvíře jen jednou.", grid: [["🐱", "?", "🐭"], ["🐭", "🐱", "🐶"], ["🐶", "🐭", "🐱"]], options: ["🐱", "🐶", "🐭", "🐰"], answer: "🐶", explanation: "V prvním řádku chybí pes." },
        { prompt: "V každém řádku i sloupci je každé ovoce jen jednou.", grid: [["🍎", "🍌", "🍐"], ["?", "🍎", "🍌"], ["🍌", "🍐", "🍎"]], options: ["🍎", "🍌", "🍐", "🍒"], answer: "🍐", explanation: "Ve druhém řádku chybí hruška." },
        { prompt: "V každém řádku i sloupci je jeden tvar jednou, dvakrát a třikrát.", grid: [["🔺", "🔵🔵", "🟩🟩🟩"], ["🔵", "🟩🟩", "🔺🔺🔺"], ["🟩", "🔺🔺", "?"]], options: ["🔵🔵", "🔵🔵🔵", "🔺🔺🔺", "🟩🟩🟩"], answer: "🔵🔵🔵", explanation: "V posledním řádku chybí kolečko a v posledním sloupci jsou vždy tři tvary." },
        { prompt: "Každý řádek je posunutý o jednu šipku.", grid: [["⬆️", "➡️", "⬇️"], ["➡️", "⬇️", "⬅️"], ["⬇️", "⬅️", "?"]], options: ["⬆️", "➡️", "⬇️", "⬅️"], answer: "⬆️", explanation: "Šipky se otáčejí doprava: dolů, doleva a pak nahoru." },
        { prompt: "Které číslo patří místo otazníku?", grid: [["1", "2", "3"], ["2", "4", "6"], ["3", "6", "?"]], options: ["7", "8", "9", "12"], answer: "9", explanation: "Druhý řádek je dvakrát první, třetí je třikrát první: 3 × 3 = 9." },
        { prompt: "Které číslo chybí?", grid: [["2", "4", "6"], ["3", "5", "7"], ["4", "6", "?"]], options: ["7", "8", "9", "10"], answer: "8", explanation: "V každém řádku se přičítá 2: 4, 6, 8." },
        { prompt: "Třetí číslo v řádku vznikne z prvních dvou.", grid: [["1", "2", "3"], ["4", "5", "9"], ["3", "3", "?"]], options: ["6", "9", "3", "33"], answer: "6", explanation: "Třetí číslo je součet prvních dvou: 3 + 3 = 6." },
        { prompt: "V každém řádku i sloupci je každá barva jen jednou.", grid: [["🔴", "🔵", "🟢", "🟡"], ["🟡", "🔴", "🔵", "🟢"], ["🟢", "🟡", "🔴", "🔵"], ["🔵", "🟢", "🟡", "?"]], options: ["🔴", "🔵", "🟢", "🟡"], answer: "🔴", explanation: "V posledním řádku chybí červená. Červená je i na úhlopříčce." }
      ]
    },
    {
      id: "skryta-slova",
      title: "Skrytá slova",
      icon: "🔤",
      type: "choice",
      instructions: "Přeskládej písmena nebo doplň chybějící písmena. Co se ve slově skrývá?",
      pick: "auto",
      items: [
        { prompt: "Co skrývají písmena L N O S?", options: ["zvíře", "jídlo", "barvu", "město"], answer: "zvíře", explanation: "L N O S → SLON." },
        { prompt: "Co skrývají písmena Ř E M K V?", options: ["zeleninu", "zvíře", "nábytek", "barvu"], answer: "zeleninu", explanation: "Ř E M K V → MRKEV." },
        { prompt: "Co skrývají písmena L Ž E I D?", options: ["nábytek", "ovoce", "zvíře", "sport"], answer: "nábytek", explanation: "L Ž E I D → ŽIDLE." },
        { prompt: "Co skrývají písmena Á N Č E R?", options: ["barvu", "zvíře", "město", "nápoj"], answer: "barvu", explanation: "Á N Č E R → ČERNÁ." },
        { prompt: "Co skrývají písmena K O L B A J?", options: ["ovoce", "zvíře", "povolání", "sport"], answer: "ovoce", explanation: "K O L B A J → JABLKO." },
        { prompt: "Co skrývají písmena T S Ů L?", options: ["nábytek", "zvíře", "jídlo", "barvu"], answer: "nábytek", explanation: "T S Ů L → STŮL." },
        { prompt: "Co skrývají písmena Ř K A L É?", options: ["povolání", "zvíře", "ovoce", "město"], answer: "povolání", explanation: "Ř K A L É → LÉKAŘ." },
        { prompt: "Co skrývají písmena O F T L B A?", options: ["sport", "jídlo", "zvíře", "barvu"], answer: "sport", explanation: "O F T L B A → FOTBAL." },
        { prompt: "Co skrývají písmena A H R Á P?", options: ["město", "řeku", "zvíře", "jídlo"], answer: "město", explanation: "A H R Á P → PRAHA." },
        { prompt: "Co skrývají písmena M A Z I?", options: ["roční období", "zvíře", "ovoce", "barvu"], answer: "roční období", explanation: "M A Z I → ZIMA." },
        { prompt: "Doplň všude stejná 2 písmena: __S, __V, __D. Co je ve druhém řádku?", options: ["zvíře", "nábytek", "barva", "jídlo"], answer: "zvíře", explanation: "Chybí písmena LE: LES, LEV, LED. Ve druhém řádku je LEV." },
        { prompt: "Doplň všude stejná 3 písmena: ___O, Š___A, ___ÁČ. Co je ve třetím řádku?", options: ["jídlo", "dopravní prostředek", "budova", "zvíře"], answer: "jídlo", explanation: "Chybí písmena KOL: KOLO, ŠKOLA, KOLÁČ. Ve třetím řádku je KOLÁČ." }
      ]
    },
    {
      id: "ciselne-rady",
      title: "Číselné řady",
      icon: "🔢",
      type: "choice",
      instructions: "Najdi pravidlo. Které číslo patří místo otazníku?",
      pick: "auto",
      items: [
        { prompt: "Které číslo bude dál?", grid: [["2", "4", "6", "8", "?"]], options: ["9", "10", "12", "16"], answer: "10", explanation: "Pokaždé se přičte 2." },
        { prompt: "Které číslo bude dál?", grid: [["1", "3", "5", "7", "?"]], options: ["8", "9", "10", "11"], answer: "9", explanation: "Lichá čísla – pokaždé se přičte 2." },
        { prompt: "Které číslo bude dál?", grid: [["20", "18", "16", "14", "?"]], options: ["10", "12", "13", "15"], answer: "12", explanation: "Pokaždé se odečte 2." },
        { prompt: "Které číslo bude dál?", grid: [["1", "2", "4", "8", "?"]], options: ["10", "12", "14", "16"], answer: "16", explanation: "Každé číslo je dvakrát větší než předchozí: 8 × 2 = 16." },
        { prompt: "Které číslo bude dál?", grid: [["5", "10", "15", "20", "?"]], options: ["21", "25", "30", "24"], answer: "25", explanation: "Pokaždé se přičte 5." },
        { prompt: "Které číslo bude dál?", grid: [["1", "2", "4", "7", "11", "?"]], options: ["14", "15", "16", "18"], answer: "16", explanation: "Přičítá se 1, 2, 3, 4 a pak 5: 11 + 5 = 16." },
        { prompt: "Které číslo bude dál?", grid: [["3", "6", "9", "12", "?"]], options: ["14", "15", "16", "18"], answer: "15", explanation: "Násobky tří – pokaždé se přičte 3." },
        { prompt: "Které číslo bude dál?", grid: [["1", "1", "2", "2", "3", "3", "?"]], options: ["3", "4", "5", "6"], answer: "4", explanation: "Každé číslo je v řadě dvakrát." },
        { prompt: "Které číslo bude dál?", grid: [["10", "9", "7", "4", "?"]], options: ["0", "1", "2", "3"], answer: "0", explanation: "Odečítá se 1, 2, 3 a pak 4: 4 − 4 = 0." },
        { prompt: "Které číslo bude dál?", grid: [["2", "3", "5", "6", "8", "9", "?"]], options: ["10", "11", "12", "13"], answer: "11", explanation: "Střídavě se přičítá 1 a 2: 9 + 2 = 11." },
        { prompt: "Které číslo bude dál?", grid: [["100", "90", "80", "?"]], options: ["60", "70", "75", "79"], answer: "70", explanation: "Pokaždé se odečte 10." }
      ]
    },
    {
      id: "uvahy",
      title: "Úvahy",
      icon: "🧠",
      type: "choice",
      instructions: "Přečti si úlohu pozorně a přemýšlej.",
      pick: "auto",
      items: [
        { prompt: "Adam je vyšší než Bára. Bára je vyšší než Cyril. Kdo je nejmenší?", options: ["Adam", "Bára", "Cyril", "nejde poznat"], answer: "Cyril", explanation: "Adam > Bára > Cyril, takže nejmenší je Cyril." },
        { prompt: "Předevčírem bylo pondělí. Jaký den je dnes?", options: ["úterý", "středa", "čtvrtek", "pondělí"], answer: "středa", explanation: "Předevčírem = před dvěma dny. Pondělí + 2 dny = středa." },
        { prompt: "Zítra bude sobota. Jaký den byl včera?", options: ["čtvrtek", "pátek", "neděle", "středa"], answer: "čtvrtek", explanation: "Dnes je pátek, včera byl čtvrtek." },
        { prompt: "Na dvoře je 1 pes a 4 slepice. Kolik mají dohromady nohou?", options: ["10", "12", "16", "20"], answer: "12", explanation: "Pes má 4 nohy, slepice 2. 4 + 4 × 2 = 12." },
        { prompt: "Petr má 3 sestry. Každá sestra má jednoho bratra. Kolik dětí je v rodině?", options: ["4", "5", "6", "7"], answer: "4", explanation: "Jediný bratr všech sester je Petr. 3 sestry + Petr = 4 děti." },
        { prompt: "Děti stojí v řadě. Eva je třetí zepředu a zároveň třetí zezadu. Kolik dětí stojí v řadě?", options: ["3", "5", "6", "7"], answer: "5", explanation: "Před Evou jsou 2 děti, za ní také 2. 2 + Eva + 2 = 5." },
        { prompt: "Plot je dlouhý 10 metrů. Každé 2 metry stojí sloupek, i na začátku a na konci. Kolik je sloupků?", options: ["5", "6", "10", "11"], answer: "6", explanation: "Sloupky stojí na 0, 2, 4, 6, 8 a 10 metrech – to je 6 sloupků." },
        { prompt: "Tatínek je o 30 let starší než Jana. Janě je 8 let. Kolik let bude tatínkovi, až bude Janě 10?", options: ["30", "38", "40", "48"], answer: "40", explanation: "Rozdíl věku se nemění. 10 + 30 = 40." },
        { prompt: "Mám dvě mince, dohromady 15 Kč. Jedna z nich není desetikoruna. Jaké mince mám?", options: ["10 Kč a 5 Kč", "5 Kč, 5 Kč a 5 Kč", "2 mince po 5 Kč", "20 Kč a 5 Kč"], answer: "10 Kč a 5 Kč", explanation: "Desetikoruna není jen jedna z nich – ta druhá desetikoruna je." },
        { prompt: "Který den v týdnu je přesně uprostřed (od pondělí do neděle)?", options: ["úterý", "středa", "čtvrtek", "pátek"], answer: "čtvrtek", explanation: "Před čtvrtkem jsou 3 dny (po, út, st) a po něm také 3 (pá, so, ne)." },
        { prompt: "Honza přečte 5 stránek denně. Kniha má 42 stránek. Kolik dní mu bude trvat, než ji přečte celou?", options: ["7", "8", "9", "10"], answer: "9", explanation: "Za 8 dní přečte 40 stránek. Zbylé 2 stránky přečte devátý den." },
        { prompt: "Hodiny ukazují 3:00. Kolik budou ukazovat za 10 hodin?", options: ["1:00", "11:00", "12:00", "2:00"], answer: "1:00", explanation: "3 + 10 = 13 hodin. Ručičkové hodiny ukážou 1:00." }
      ]
    },
    {
      id: "co-nepatri",
      title: "Co nepatří mezi ostatní",
      icon: "🙃",
      type: "choice",
      instructions: "Najdi to, co se k ostatním nehodí.",
      pick: "auto",
      items: [
        { prompt: "Který obrázek nepatří mezi ostatní?", grid: [["🍎", "🍌", "🥕", "🍐"]], options: ["🍎", "🍌", "🥕", "🍐"], answer: "🥕", explanation: "Mrkev je zelenina, ostatní je ovoce." },
        { prompt: "Co nepatří mezi ostatní: pes, kočka, kráva, stůl?", options: ["pes", "kočka", "kráva", "stůl"], answer: "stůl", explanation: "Stůl není zvíře." },
        { prompt: "Co nepatří mezi ostatní: 2, 4, 7, 8?", options: ["2", "4", "7", "8"], answer: "7", explanation: "7 je liché číslo, ostatní jsou sudá." },
        { prompt: "Co nepatří mezi ostatní: jaro, léto, leden, zima?", options: ["jaro", "léto", "leden", "zima"], answer: "leden", explanation: "Leden je měsíc, ostatní jsou roční období." },
        { prompt: "Co nepatří mezi ostatní: 11, 22, 35, 44?", options: ["11", "22", "35", "44"], answer: "35", explanation: "Ostatní čísla mají obě číslice stejné." },
        { prompt: "Který tvar nepatří mezi ostatní?", grid: [["🔺", "🟥", "🔷", "🔵"]], options: ["🔺", "🟥", "🔷", "🔵"], answer: "🔵", explanation: "Kruh nemá žádné rohy, ostatní tvary ano." },
        { prompt: "Co nepatří mezi ostatní: Praha, Brno, Vltava, Ostrava?", options: ["Praha", "Brno", "Vltava", "Ostrava"], answer: "Vltava", explanation: "Vltava je řeka, ostatní jsou města." },
        { prompt: "Co nepatří mezi ostatní: čtverec, trojúhelník, kruh, obdélník?", options: ["čtverec", "trojúhelník", "kruh", "obdélník"], answer: "kruh", explanation: "Kruh nemá rohy ani rovné strany." },
        { prompt: "Co nepatří mezi ostatní: 3, 6, 9, 13?", options: ["3", "6", "9", "13"], answer: "13", explanation: "3, 6 a 9 jsou násobky tří, 13 ne." },
        { prompt: "Co nepatří mezi ostatní: kladivo, pila, jablko, šroubovák?", options: ["kladivo", "pila", "jablko", "šroubovák"], answer: "jablko", explanation: "Jablko není nářadí." }
      ]
    },
    {
      id: "analogie",
      title: "Co k čemu patří",
      icon: "🔗",
      type: "choice",
      instructions: "První dvojice má nějaký vztah. Najdi slovo, které má stejný vztah ve druhé dvojici.",
      pick: "auto",
      items: [
        { prompt: "pes → štěně, kočka → ?", options: ["kotě", "myš", "tele", "pes"], answer: "kotě", explanation: "Štěně je mládě psa, kotě je mládě kočky." },
        { prompt: "ruka → rukavice, noha → ?", options: ["ponožka", "čepice", "prst", "kolo"], answer: "ponožka", explanation: "Rukavici oblékáme na ruku, ponožku na nohu." },
        { prompt: "den → noc, léto → ?", options: ["jaro", "zima", "podzim", "slunce"], answer: "zima", explanation: "Jsou to opaky." },
        { prompt: "ryba → plave, pták → ?", options: ["létá", "plave", "leze", "skáče"], answer: "létá", explanation: "Ryba se pohybuje plaváním, pták létáním." },
        { prompt: "2 → 4, 5 → ?", options: ["7", "8", "10", "25"], answer: "10", explanation: "Číslo se zdvojnásobí: 5 × 2 = 10." },
        { prompt: "kráva → mléko, slepice → ?", options: ["vejce", "zrní", "kuře", "peří"], answer: "vejce", explanation: "Kráva nám dává mléko, slepice vejce." },
        { prompt: "malý → velký, krátký → ?", options: ["dlouhý", "nízký", "malý", "úzký"], answer: "dlouhý", explanation: "Jsou to opaky." },
        { prompt: "kniha → číst, píseň → ?", options: ["zpívat", "psát", "kreslit", "počítat"], answer: "zpívat", explanation: "Knihu čteme, píseň zpíváme." },
        { prompt: "trojúhelník → 3, čtverec → ?", options: ["3", "4", "5", "0"], answer: "4", explanation: "Počet rohů: trojúhelník má 3, čtverec 4." },
        { prompt: "učitel → škola, lékař → ?", options: ["nemocnice", "pošta", "obchod", "knihovna"], answer: "nemocnice", explanation: "Učitel pracuje ve škole, lékař v nemocnici." }
      ]
    }
  ]
});
