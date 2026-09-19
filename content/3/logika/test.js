// Logika – zkušební test pro 3. třídu ve stylu základního kola Logické olympiády (kategorie A).
School.register({
  id: "3-logika-test",
  sections: [
    {
      id: "rady",
      title: "Obrázkové řady",
      icon: "🔁",
      type: "choice",
      instructions: "Co patří místo otazníku?",
      items: [
        { prompt: "Co bude dál?", grid: [["🟢", "🟢", "🔴", "🟢", "🟢", "🔴", "🟢", "🟢", "?"]], options: ["🟢", "🔴", "🔵", "🟡"], answer: "🔴", explanation: "Opakují se dvě zelená a jedno červené kolečko." },
        { prompt: "Kam bude ukazovat další šipka?", grid: [["⬆️", "⬅️", "⬇️", "➡️", "⬆️", "?"]], options: ["⬆️", "➡️", "⬇️", "⬅️"], answer: "⬅️", explanation: "Šipka se otáčí o čtvrt otáčky doleva: nahoru, doleva, dolů, doprava…" },
        { prompt: "Jak bude vypadat další obrázek?", grid: [["🟦", "🟦🟨", "🟦🟨🟦", "?"]], options: ["🟨🟦🟨🟦", "🟦🟨🟦🟨", "🟦🟦🟨🟨", "🟦🟨🟨🟦"], answer: "🟦🟨🟦🟨", explanation: "Na konec se přidá vždy jeden čtvereček, barvy se střídají." }
      ]
    },
    {
      id: "tabulky",
      title: "Tabulky",
      icon: "🔲",
      type: "choice",
      instructions: "Prohlédni si řádky i sloupce. Co patří místo otazníku?",
      items: [
        { prompt: "V každém řádku i sloupci je každé zvíře jen jednou.", grid: [["🐶", "🐱", "🐭"], ["🐭", "🐶", "?"], ["🐱", "🐭", "🐶"]], options: ["🐶", "🐱", "🐭", "🐰"], answer: "🐱", explanation: "Ve druhém řádku chybí kočka." },
        { prompt: "Které číslo chybí?", grid: [["1", "3", "5"], ["2", "4", "6"], ["3", "5", "?"]], options: ["6", "7", "8", "9"], answer: "7", explanation: "V každém řádku se přičítá 2: 3, 5, 7." },
        { prompt: "V každém řádku i sloupci je každý tvar jen jednou.", grid: [["⭐", "🔴", "🔷", "❤️"], ["🔷", "❤️", "⭐", "🔴"], ["❤️", "🔷", "?", "⭐"], ["🔴", "⭐", "❤️", "🔷"]], options: ["⭐", "🔴", "🔷", "❤️"], answer: "🔴", explanation: "Ve třetím řádku chybí červené kolečko." }
      ]
    },
    {
      id: "slova",
      title: "Skrytá slova",
      icon: "🔤",
      type: "choice",
      instructions: "Co se ve slově skrývá?",
      items: [
        { prompt: "Co skrývají písmena E D M?", options: ["jídlo", "zvíře", "barvu", "město"], answer: "jídlo", explanation: "E D M → MED." },
        { prompt: "Co skrývají písmena B A Á N N?", options: ["ovoce", "nábytek", "povolání", "sport"], answer: "ovoce", explanation: "B A Á N N → BANÁN." },
        { prompt: "Doplň všude stejná 3 písmena: ___TEL, ___A, ___MOS. Co je v prvním řádku?", options: ["budova", "zvíře", "jídlo", "barva"], answer: "budova", explanation: "Chybí písmena KOS: KOSTEL, KOSA, KOSMOS. V prvním řádku je KOSTEL." }
      ]
    },
    {
      id: "cisla",
      title: "Číselné řady",
      icon: "🔢",
      type: "choice",
      instructions: "Které číslo patří místo otazníku?",
      items: [
        { prompt: "Které číslo bude dál?", grid: [["1", "2", "4", "8", "16", "?"]], options: ["24", "30", "32", "20"], answer: "32", explanation: "Každé číslo je dvakrát větší: 16 × 2 = 32." },
        { prompt: "Které číslo bude dál?", grid: [["50", "45", "40", "35", "?"]], options: ["25", "30", "32", "34"], answer: "30", explanation: "Pokaždé se odečte 5." },
        { prompt: "Které číslo bude dál?", grid: [["1", "3", "6", "10", "?"]], options: ["13", "14", "15", "16"], answer: "15", explanation: "Přičítá se 2, 3, 4 a pak 5: 10 + 5 = 15." }
      ]
    },
    {
      id: "uvahy",
      title: "Úvahy",
      icon: "🧠",
      type: "choice",
      instructions: "Přečti si úlohu pozorně a přemýšlej.",
      items: [
        { prompt: "Ve třídě je 12 dětí. Dívek je o 2 víc než chlapců. Kolik je chlapců?", options: ["4", "5", "6", "7"], answer: "5", explanation: "5 chlapců a 7 dívek – dohromady 12, dívek je o 2 víc." },
        { prompt: "Za dva dny bude neděle. Jaký den byl včera?", options: ["středa", "čtvrtek", "pátek", "sobota"], answer: "čtvrtek", explanation: "Dnes je pátek (za dva dny neděle), včera byl čtvrtek." },
        { prompt: "Lenka je starší než Míša. Ota je starší než Lenka. Kdo je nejstarší?", options: ["Lenka", "Míša", "Ota", "nejde poznat"], answer: "Ota", explanation: "Ota > Lenka > Míša." }
      ]
    }
  ]
});
