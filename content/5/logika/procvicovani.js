// Logika – procvičování pro 5. třídu (příprava na Logickou olympiádu, kategorie A).
// Těžší varianty úloh z ukázek na logickaolympiada.cz: řady, tabulky s prázdnými
// políčky, skrytá slova, číselné řady, úvahy, co nepatří, analogie.
School.register({
  id: "5-logika-procvicovani",
  sections: [
    {
      id: "rady",
      title: "Obrázkové a písmenné řady",
      icon: "🔁",
      type: "choice",
      instructions: "Najdi pravidlo řady. Co patří místo otazníku?",
      pick: "auto",
      items: [
        { prompt: "Kam bude ukazovat další šipka?", grid: [["⬆️", "↘️", "⬅️", "↗️", "⬇️", "?"]], options: ["↖️", "↙️", "➡️", "⬆️"], answer: "↖️", explanation: "Šipka se pokaždé otočí doprava o tři osminy otáčky (o 135°). Od šipky dolů je to šipka nahoru doleva." },
        { prompt: "Jak bude vypadat další obrázek?", grid: [["🔴", "🔴🔵", "🔴🔵🔵", "🔴🔵🔵🔵", "?"]], options: ["🔴🔴🔵🔵🔵", "🔴🔵🔵🔵🔵", "🔵🔵🔵🔵🔵", "🔴🔵🔴🔵🔵"], answer: "🔴🔵🔵🔵🔵", explanation: "Červené kolečko zůstává na začátku a přibývá jedno modré." },
        { prompt: "Kolik bude hodin na dalších hodinách?", grid: [["🕐", "🕒", "🕔", "🕖", "?"]], options: ["🕗", "🕘", "🕙", "🕖"], answer: "🕘", explanation: "Každé hodiny jsou o 2 hodiny později: 1, 3, 5, 7 a pak 9." },
        { prompt: "Co bude dál?", grid: [["🟥", "🟦", "🟦", "🟥", "🟥", "🟥", "🟦", "🟦", "🟦", "🟦", "?"]], options: ["🟥", "🟦", "🟩"], answer: "🟥", explanation: "Skupiny se střídají a pokaždé jsou o jednu delší: 1 červený, 2 modré, 3 červené, 4 modré, pak 5 červených." },
        { prompt: "Které písmeno bude dál?", grid: [["A", "C", "E", "G", "?"]], options: ["H", "I", "J", "K"], answer: "I", explanation: "Vždy se jedno písmeno abecedy vynechá: A (B) C (D) E (F) G (H) I." },
        { prompt: "Které písmeno bude dál?", grid: [["Z", "X", "V", "T", "?"]], options: ["S", "R", "Q", "U"], answer: "R", explanation: "Abeceda pozpátku, vždy se jedno písmeno vynechá: T (S) R." },
        { prompt: "Co bude dál?", grid: [["🌑", "🌓", "🌕", "🌗", "🌑", "🌓", "?"]], options: ["🌑", "🌓", "🌕", "🌗"], answer: "🌕", explanation: "Opakují se čtyři obrázky měsíce: nov, první čtvrť, úplněk, poslední čtvrť." },
        { prompt: "Co bude dál?", grid: [["AB", "CD", "EF", "?"]], options: ["FG", "GH", "HI", "EG"], answer: "GH", explanation: "Dvojice písmen jdou po sobě v abecedě." },
        { prompt: "Co bude dál?", grid: [["🍎", "🍌", "🍌", "🍐", "🍐", "🍐", "🍎", "🍌", "🍌", "🍐", "🍐", "?"]], options: ["🍎", "🍌", "🍐", "🍒"], answer: "🍐", explanation: "Opakuje se skupina: 1 jablko, 2 banány, 3 hrušky. Chybí třetí hruška." },
        { prompt: "Co bude dál?", grid: [["1A", "2B", "3C", "4D", "?"]], options: ["5E", "6E", "5F", "4E"], answer: "5E", explanation: "Číslo roste o 1 a písmeno se posune v abecedě o 1." }
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
        { prompt: "V každém řádku i sloupci je každá barva jen jednou.", grid: [["🔴", "🔵", "🟢", "🟡"], ["🟢", "?", "🔴", "🔵"], ["🔵", "🔴", "🟡", "🟢"], ["🟡", "🟢", "🔵", "🔴"]], options: ["🔴", "🔵", "🟢", "🟡"], answer: "🟡", explanation: "Ve druhém řádku chybí žlutá." },
        { prompt: "Doplň v duchu prázdná políčka. V každém řádku i sloupci je každý tvar jen jednou.", grid: [["⭐", "❤️", "🔷", ""], ["", "🔷", "❤️", "⭐"], ["❤️", "", "?", ""], ["🔷", "🔶", "", "❤️"]], options: ["⭐", "❤️", "🔷", "🔶"], answer: "🔶", explanation: "V posledním řádku chybí hvězda – patří do třetího sloupce. Ve třetím sloupci pak zbývá jen oranžový kosočtverec." },
        { prompt: "Třetí číslo v řádku vznikne z prvních dvou.", grid: [["2", "3", "6"], ["4", "5", "20"], ["3", "7", "?"]], options: ["10", "17", "21", "24"], answer: "21", explanation: "Třetí číslo je součin prvních dvou: 3 × 7 = 21." },
        { prompt: "Které číslo chybí?", grid: [["8", "4", "2"], ["12", "6", "3"], ["20", "10", "?"]], options: ["4", "5", "6", "8"], answer: "5", explanation: "V každém řádku se číslo dělí dvěma: 10 : 2 = 5." },
        { prompt: "Které číslo chybí?", grid: [["3", "4", "5"], ["6", "8", "10"], ["9", "12", "?"]], options: ["13", "14", "15", "16"], answer: "15", explanation: "Druhý řádek je dvakrát první, třetí je třikrát první: 5 × 3 = 15." },
        { prompt: "V každém řádku i sloupci je jeden tvar jednou, dvakrát a třikrát.", grid: [["🔴", "🔴🔴", "🔴🔴🔴"], ["🟦🟦", "🟦🟦🟦", "🟦"], ["🔺🔺🔺", "?", "🔺🔺"]], options: ["🔺", "🔺🔺", "🔴", "🟦🟦🟦"], answer: "🔺", explanation: "V posledním řádku jsou trojúhelníky a chybí jeden kus. Ve sloupci jsou 2 a 3, chybí 1." },
        { prompt: "Součet v každém řádku, sloupci i na úhlopříčkách je stejný.", grid: [["2", "7", "6"], ["9", "5", "1"], ["4", "3", "?"]], options: ["6", "7", "8", "9"], answer: "8", explanation: "Součet je vždy 15 (2 + 7 + 6). V posledním řádku: 15 − 4 − 3 = 8." },
        { prompt: "Třetí číslo v řádku vznikne z prvních dvou.", grid: [["5", "3", "8"], ["2", "6", "8"], ["7", "?", "16"]], options: ["8", "9", "10", "23"], answer: "9", explanation: "Třetí číslo je součet prvních dvou: 7 + 9 = 16." },
        { prompt: "Každý řádek je posunutý o jednu šipku.", grid: [["⬆️", "➡️", "⬇️", "⬅️"], ["➡️", "⬇️", "⬅️", "⬆️"], ["⬇️", "⬅️", "⬆️", "?"]], options: ["⬆️", "➡️", "⬇️", "⬅️"], answer: "➡️", explanation: "Šipky se v řádku otáčejí doprava: dolů, doleva, nahoru, doprava." },
        { prompt: "Doplň v duchu prázdná políčka. V každém řádku i sloupci jsou čísla 1–4, každé jen jednou.", grid: [["1", "", "", "4"], ["", "4", "1", ""], ["2", "", "", "3"], ["", "3", "?", ""]], options: ["1", "2", "3", "4"], answer: "2", explanation: "V prvním sloupci chybí 3 a 4; 3 už je v posledním řádku, takže vlevo dole je 4. V posledním řádku pak chybí 1 a 2 – a 1 už je ve sloupci s otazníkem. Zbývá 2." }
      ]
    },
    {
      id: "skryta-slova",
      title: "Skrytá slova",
      icon: "🔤",
      type: "choice",
      instructions: "Přeskládej písmena, doplň chybějící písmena nebo hledej slovo schované ve větě.",
      pick: "auto",
      items: [
        { prompt: "Co skrývají písmena D O L K Ý R O K?", options: ["zvíře", "rostlinu", "povolání", "město"], answer: "zvíře", explanation: "D O L K Ý R O K → KROKODÝL." },
        { prompt: "Co skrývají písmena L K E Č I A U T?", options: ["povolání", "zvíře", "ovoce", "stát"], answer: "povolání", explanation: "L K E Č I A U T → UČITELKA." },
        { prompt: "Co skrývají písmena M O C L O U O?", options: ["město", "řeku", "horu", "zvíře"], answer: "město", explanation: "M O C L O U O → OLOMOUC." },
        { prompt: "Co skrývají písmena N Č O M R A P E?", options: ["ovoce", "zeleninu", "nápoj", "barvu"], answer: "ovoce", explanation: "N Č O M R A P E → POMERANČ." },
        { prompt: "Co skrývají písmena V O K S N E L O S?", options: ["stát", "město", "řeku", "sport"], answer: "stát", explanation: "V O K S N E L O S → SLOVENSKO." },
        { prompt: "Co skrývají písmena N E B U B?", options: ["hudební nástroj", "zvíře", "jídlo", "nábytek"], answer: "hudební nástroj", explanation: "N E B U B → BUBEN." },
        { prompt: "Doplň všude stejná 3 písmena: S___ÍK, ___INA, ___ICE. Co je v prvním řádku?", options: ["pták", "nábytek", "rostlina", "jídlo"], answer: "pták", explanation: "Chybí písmena LAV: SLAVÍK, LAVINA, LAVICE. V prvním řádku je SLAVÍK." },
        { prompt: "Doplň všude stejná 3 písmena: ___INA, ___ÍŘ, ___ÍČEK. Co je ve druhém řádku?", options: ["povolání", "ovoce", "část těla", "zvíře"], answer: "povolání", explanation: "Chybí písmena MAL: MALINA, MALÍŘ, MALÍČEK. Ve druhém řádku je MALÍŘ." },
        { prompt: "Ve které větě se skrývá zvíře (přes mezeru mezi slovy)?", options: ["Vzala mapu.", "Viděla dům.", "Snědla chléb.", "Kreslila strom."], answer: "Vzala mapu.", explanation: "vzaLA MApu → LAMA." },
        { prompt: "Které slovo se čte stejně zepředu i zezadu?", options: ["kajak", "kanoe", "lodička", "veslo"], answer: "kajak", explanation: "K-A-J-A-K pozpátku je zase KAJAK." }
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
        { prompt: "Které číslo bude dál?", grid: [["1", "4", "9", "16", "25", "?"]], options: ["30", "34", "36", "49"], answer: "36", explanation: "1×1, 2×2, 3×3, 4×4, 5×5 a pak 6×6 = 36." },
        { prompt: "Které číslo bude dál?", grid: [["1", "1", "2", "3", "5", "8", "?"]], options: ["11", "12", "13", "16"], answer: "13", explanation: "Každé číslo je součtem dvou předchozích: 5 + 8 = 13." },
        { prompt: "Které číslo bude dál?", grid: [["2", "6", "12", "20", "30", "?"]], options: ["36", "38", "40", "42"], answer: "42", explanation: "Přičítá se 4, 6, 8, 10 a pak 12: 30 + 12 = 42." },
        { prompt: "Které číslo bude dál?", grid: [["3", "5", "9", "17", "?"]], options: ["25", "31", "33", "34"], answer: "33", explanation: "Číslo se zdvojnásobí a odečte se 1: 17 × 2 − 1 = 33. (Také: přičítá se 2, 4, 8, 16.)" },
        { prompt: "Které číslo bude dál?", grid: [["96", "48", "24", "12", "?"]], options: ["2", "4", "6", "8"], answer: "6", explanation: "Každé číslo je polovina předchozího." },
        { prompt: "Které číslo bude dál?", grid: [["2", "3", "5", "7", "11", "?"]], options: ["12", "13", "14", "15"], answer: "13", explanation: "Prvočísla – dělí se jen jedničkou a sama sebou. Po 11 je 13." },
        { prompt: "Které číslo bude dál?", grid: [["1", "2", "6", "24", "?"]], options: ["48", "72", "96", "120"], answer: "120", explanation: "Násobí se 2, 3, 4 a pak 5: 24 × 5 = 120." },
        { prompt: "Které číslo bude dál?", grid: [["7", "10", "8", "11", "9", "?"]], options: ["10", "11", "12", "13"], answer: "12", explanation: "Střídavě +3 a −2: 9 + 3 = 12." },
        { prompt: "Které číslo bude dál?", grid: [["81", "27", "9", "3", "?"]], options: ["0", "1", "2", "3"], answer: "1", explanation: "Každé číslo se dělí třemi: 3 : 3 = 1." },
        { prompt: "Které číslo bude dál?", grid: [["1", "3", "7", "15", "?"]], options: ["23", "29", "30", "31"], answer: "31", explanation: "Číslo se zdvojnásobí a přičte se 1: 15 × 2 + 1 = 31." },
        { prompt: "Které číslo bude dál?", grid: [["4", "5", "7", "10", "14", "?"]], options: ["17", "18", "19", "20"], answer: "19", explanation: "Přičítá se 1, 2, 3, 4 a pak 5: 14 + 5 = 19." }
      ]
    },
    {
      id: "uvahy",
      title: "Úvahy",
      icon: "🧠",
      type: "choice",
      instructions: "Přečti si úlohu pozorně. Můžeš si kreslit na papír.",
      pick: "auto",
      items: [
        { prompt: "Závod běželo 5 dětí. Tom doběhl před Evou, ale za Janem. Petra doběhla hned za Tomem. Eva nebyla poslední. Běžel i Dan. Kdo byl poslední?", options: ["Dan", "Eva", "Petra", "Jan"], answer: "Dan", explanation: "Jan je před Tomem, Petra hned za Tomem a Eva až za nimi. Aby Eva nebyla poslední, musí za ní doběhnout Dan." },
        { prompt: "Babička má 3 vnučky. Každá vnučka má 2 bratry. Kolik vnoučat může babička mít nejméně?", options: ["5", "6", "8", "9"], answer: "5", explanation: "Nejméně, když jsou všechny sourozenci: 3 dívky a 2 chlapci – ti 2 chlapci jsou bratři všech tří." },
        { prompt: "Za 3 roky bude Karlovi dvakrát tolik let, kolik mu bylo před 3 lety. Kolik je mu teď?", options: ["3", "6", "9", "12"], answer: "9", explanation: "Před 3 lety mu bylo 6, za 3 roky mu bude 12 – to je dvakrát víc." },
        { prompt: "Šnek leze po zdi vysoké 5 m. Ve dne vyleze 3 m, v noci sklouzne o 2 m. Kolikátý den bude nahoře?", options: ["2.", "3.", "4.", "5."], answer: "3.", explanation: "Po 1. noci je na 1 m, po 2. noci na 2 m. Třetí den vyleze 3 m a je na 5 m – nahoře." },
        { prompt: "Tři krabičky mají nálepky „jablka“, „hrušky“ a „obojí“. Všechny nálepky jsou špatně. Ze které krabičky stačí vytáhnout jedno ovoce, abys věděl obsah všech?", options: ["s nálepkou obojí", "s nálepkou jablka", "s nálepkou hrušky", "musím otevřít všechny"], answer: "s nálepkou obojí", explanation: "Krabička „obojí“ obsahuje jen jeden druh. Když vytáhneš třeba jablko, jsou v ní jablka. Pak už ostatní dvě krabičky odvodíš." },
        { prompt: "Hodiny se každou hodinu zpozdí o 2 minuty. V poledne byly nařízené správně. Kolik ukážou, když bude přesně 18:00?", options: ["17:48", "17:52", "17:58", "18:12"], answer: "17:48", explanation: "Za 6 hodin se zpozdí o 6 × 2 = 12 minut. 18:00 − 12 min = 17:48." },
        { prompt: "Aleš, Bořek a Cyril mají každý jiné zvíře: psa, kočku a rybičky. Aleš nemá psa. Bořek nemá kočku ani psa. Kdo má psa?", options: ["Aleš", "Bořek", "Cyril", "nejde poznat"], answer: "Cyril", explanation: "Bořek má rybičky. Aleš nemá psa, má tedy kočku. Na Cyrila zbývá pes." },
        { prompt: "Součet teček na protilehlých stěnách hrací kostky je vždy 7. Nahoře jsou 2 tečky. Kolik teček je dole?", options: ["2", "4", "5", "6"], answer: "5", explanation: "7 − 2 = 5." },
        { prompt: "Na ostrově žijí rytíři, kteří vždy mluví pravdu, a padouši, kteří vždy lžou. Kdo z nich může říct větu „Jsem padouch“?", options: ["nikdo", "jen rytíř", "jen padouch", "oba"], answer: "nikdo", explanation: "Rytíř by lhal (není padouch) a padouch by mluvil pravdu (je padouch). Ani jeden to říct nemůže." },
        { prompt: "Honza má dvakrát víc kuliček než Petr. Když dá Honza Petrovi 6 kuliček, budou mít stejně. Kolik kuliček má Petr?", options: ["6", "12", "18", "24"], answer: "12", explanation: "Petr 12, Honza 24. Po předání mají oba 18." },
        { prompt: "Autobus jezdí každých 20 minut, první odjíždí v 6:10. Kolik autobusů odjede do 8:00?", options: ["5", "6", "7", "9"], answer: "6", explanation: "6:10, 6:30, 6:50, 7:10, 7:30, 7:50 – to je 6 autobusů. Další jede až v 8:10." },
        { prompt: "Dnes je středa. Jaký den bude za 100 dní?", options: ["středa", "čtvrtek", "pátek", "sobota"], answer: "pátek", explanation: "Každých 7 dní je zase středa. 100 = 14 × 7 + 2, takže je to středa + 2 dny = pátek." }
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
        { prompt: "Co nepatří mezi ostatní: 16, 25, 36, 42?", options: ["16", "25", "36", "42"], answer: "42", explanation: "16 = 4×4, 25 = 5×5, 36 = 6×6. 42 takhle nevznikne." },
        { prompt: "Co nepatří mezi ostatní: Vltava, Labe, Morava, Sněžka?", options: ["Vltava", "Labe", "Morava", "Sněžka"], answer: "Sněžka", explanation: "Sněžka je hora, ostatní jsou řeky." },
        { prompt: "Co nepatří mezi ostatní: kilogram, metr, litr, teploměr?", options: ["kilogram", "metr", "litr", "teploměr"], answer: "teploměr", explanation: "Teploměr je přístroj, ostatní jsou jednotky." },
        { prompt: "Co nepatří mezi ostatní: 12, 18, 24, 27, 30?", options: ["12", "18", "24", "27", "30"], answer: "27", explanation: "Ostatní jsou násobky šesti (a jsou sudé)." },
        { prompt: "Co nepatří mezi ostatní: velryba, žralok, delfín, tuleň?", options: ["velryba", "žralok", "delfín", "tuleň"], answer: "žralok", explanation: "Žralok je ryba, ostatní jsou savci." },
        { prompt: "Co nepatří mezi ostatní: čtverec, obdélník, kosočtverec, trojúhelník?", options: ["čtverec", "obdélník", "kosočtverec", "trojúhelník"], answer: "trojúhelník", explanation: "Trojúhelník má 3 strany, ostatní 4." },
        { prompt: "Co nepatří mezi ostatní: pondělí, úterý, březen, pátek?", options: ["pondělí", "úterý", "březen", "pátek"], answer: "březen", explanation: "Březen je měsíc, ostatní jsou dny v týdnu." },
        { prompt: "Co nepatří mezi ostatní: ANNA, OTTO, EMA, BOB?", options: ["ANNA", "OTTO", "EMA", "BOB"], answer: "EMA", explanation: "Ostatní jména se čtou stejně zepředu i zezadu." },
        { prompt: "Co nepatří mezi ostatní: sova, orel, netopýr, vrána?", options: ["sova", "orel", "netopýr", "vrána"], answer: "netopýr", explanation: "Netopýr je savec, ostatní jsou ptáci." }
      ]
    },
    {
      id: "analogie",
      title: "Co k čemu patří",
      icon: "🔗",
      type: "choice",
      instructions: "První dvojice má nějaký vztah. Najdi, co má stejný vztah ve druhé dvojici.",
      pick: "auto",
      items: [
        { prompt: "2 → 4, 3 → 9, 5 → ?", options: ["10", "15", "20", "25"], answer: "25", explanation: "Číslo se násobí samo sebou: 5 × 5 = 25." },
        { prompt: "strom → les, ovce → ?", options: ["stádo", "vlna", "louka", "beran"], answer: "stádo", explanation: "Hodně stromů je les, hodně ovcí je stádo." },
        { prompt: "hodina → minuta, minuta → ?", options: ["sekunda", "den", "týden", "hodina"], answer: "sekunda", explanation: "Hodina má 60 minut, minuta má 60 sekund." },
        { prompt: "spisovatel → kniha, skladatel → ?", options: ["skladba", "obraz", "socha", "zahrada"], answer: "skladba", explanation: "Spisovatel píše knihy, skladatel skládá hudbu." },
        { prompt: "teploměr → teplota, váha → ?", options: ["hmotnost", "délka", "čas", "rychlost"], answer: "hmotnost", explanation: "Teploměrem měříme teplotu, váhou hmotnost." },
        { prompt: "ABC → CBA, KLM → ?", options: ["KML", "LMK", "MLK", "MKL"], answer: "MLK", explanation: "Písmena se napíšou pozpátku." },
        { prompt: "pták → hnízdo, včela → ?", options: ["úl", "med", "květ", "les"], answer: "úl", explanation: "Pták bydlí v hnízdě, včela v úlu." },
        { prompt: "sever → jih, východ → ?", options: ["západ", "sever", "jih", "střed"], answer: "západ", explanation: "Jsou to protilehlé světové strany." },
        { prompt: "jaro → březen, podzim → ?", options: ["říjen", "červenec", "leden", "únor"], answer: "říjen", explanation: "Březen je jarní měsíc, říjen je podzimní." },
        { prompt: "pravý → levý, horní → ?", options: ["dolní", "vysoký", "boční", "zadní"], answer: "dolní", explanation: "Jsou to opaky." }
      ]
    }
  ]
});
