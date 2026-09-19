// Logika – zkušební test pro 5. třídu ve stylu základního kola Logické olympiády (kategorie A).
School.register({
  id: "5-logika-test",
  sections: [
    {
      id: "rady",
      title: "Řady",
      icon: "🔁",
      type: "choice",
      instructions: "Co patří místo otazníku?",
      items: [
        { prompt: "Co bude dál?", grid: [["🔴", "🔵", "🔵", "🟢", "🟢", "🟢", "🔴", "🔵", "🔵", "🟢", "🟢", "?"]], options: ["🔴", "🔵", "🟢", "🟡"], answer: "🟢", explanation: "Opakuje se skupina: 1 červená, 2 modré, 3 zelené. Chybí třetí zelená." },
        { prompt: "Které písmeno bude dál (abeceda bez háčků a bez CH)?", grid: [["B", "D", "G", "K", "?"]], options: ["N", "O", "P", "Q"], answer: "P", explanation: "Mezi písmeny se vynechá 1, 2, 3 a pak 4 písmena: K (L M N O) P." },
        { prompt: "Kolik bude hodin na dalších hodinách?", grid: [["🕛", "🕒", "🕕", "?"]], options: ["🕗", "🕘", "🕙", "🕛"], answer: "🕘", explanation: "Každé hodiny jsou o 3 hodiny později: 12, 3, 6 a pak 9." }
      ]
    },
    {
      id: "tabulky",
      title: "Tabulky",
      icon: "🔲",
      type: "choice",
      instructions: "Prohlédni si řádky i sloupce. Co patří místo otazníku?",
      items: [
        { prompt: "Doplň v duchu prázdná políčka. V každém řádku i sloupci je každé ovoce jen jednou.", grid: [["🍎", "", "", "🍒"], ["", "🍒", "🍎", ""], ["🍌", "", "?", ""], ["", "🍐", "", "🍎"]], options: ["🍎", "🍌", "🍐", "🍒"], answer: "🍒", explanation: "Ve třetím řádku: do druhého sloupce patří jablko (hruška a třešně už tam jsou), do čtvrtého hruška (třešně a jablko už tam jsou). Na otazník zbývají třešně." },
        { prompt: "Třetí číslo v řádku vznikne z prvních dvou.", grid: [["2", "5", "10"], ["3", "4", "12"], ["6", "?", "18"]], options: ["2", "3", "12", "24"], answer: "3", explanation: "Třetí číslo je součin prvních dvou: 6 × 3 = 18." },
        { prompt: "Součet v každém řádku, sloupci i na úhlopříčkách je stejný.", grid: [["8", "1", "6"], ["3", "5", "7"], ["4", "?", "2"]], options: ["3", "7", "8", "9"], answer: "9", explanation: "Součet je vždy 15. V posledním řádku: 15 − 4 − 2 = 9." }
      ]
    },
    {
      id: "slova",
      title: "Skrytá slova",
      icon: "🔤",
      type: "choice",
      instructions: "Co se ve slově skrývá?",
      items: [
        { prompt: "Co skrývají písmena F A Ž R I A?", options: ["zvíře", "nábytek", "stát", "jídlo"], answer: "zvíře", explanation: "F A Ž R I A → ŽIRAFA." },
        { prompt: "Doplň všude stejná 3 písmena: P___, ___NÍK, ___K. Co je ve druhém řádku?", options: ["povolání", "zvíře", "rostlina", "jídlo"], answer: "povolání", explanation: "Chybí písmena LES: PLES, LESNÍK, LESK. Ve druhém řádku je LESNÍK." },
        { prompt: "Které slovo se čte stejně zepředu i zezadu?", options: ["motor", "rotor", "robot", "traktor"], answer: "rotor", explanation: "R-O-T-O-R pozpátku je zase ROTOR." }
      ]
    },
    {
      id: "cisla",
      title: "Číselné řady",
      icon: "🔢",
      type: "choice",
      instructions: "Které číslo patří místo otazníku?",
      items: [
        { prompt: "Které číslo bude dál?", grid: [["2", "5", "10", "17", "26", "?"]], options: ["35", "36", "37", "38"], answer: "37", explanation: "Přičítá se 3, 5, 7, 9 a pak 11: 26 + 11 = 37." },
        { prompt: "Které číslo bude dál?", grid: [["1", "2", "4", "7", "11", "16", "?"]], options: ["20", "21", "22", "23"], answer: "22", explanation: "Přičítá se 1, 2, 3, 4, 5 a pak 6: 16 + 6 = 22." },
        { prompt: "Které číslo bude dál?", grid: [["64", "32", "16", "8", "?"]], options: ["2", "4", "6", "0"], answer: "4", explanation: "Každé číslo je polovina předchozího." }
      ]
    },
    {
      id: "uvahy",
      title: "Úvahy",
      icon: "🧠",
      type: "choice",
      instructions: "Přečti si úlohu pozorně. Můžeš si kreslit na papír.",
      items: [
        { prompt: "Maminka je 4× starší než Anička. Za 10 let bude jen 2× starší. Kolik let je Aničce?", options: ["4", "5", "8", "10"], answer: "5", explanation: "Aničce je 5, mamince 20. Za 10 let: 15 a 30 – maminka je 2× starší." },
        { prompt: "V šuplíku je potmě 5 červených a 5 modrých ponožek. Kolik jich musíš vytáhnout, abys měl jistě dvě stejné barvy?", options: ["2", "3", "5", "6"], answer: "3", explanation: "První dvě můžou být různé. Třetí už má stejnou barvu jako jedna z nich." },
        { prompt: "Dnes je pondělí. Jaký den bude za 30 dní?", options: ["pondělí", "úterý", "středa", "čtvrtek"], answer: "středa", explanation: "Za 28 dní (4 týdny) je zase pondělí, pak ještě 2 dny: středa." }
      ]
    }
  ]
});
