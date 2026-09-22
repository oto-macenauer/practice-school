// Přírodověda 5. třída – test ze září: rostliny, houby a živočichové.
School.register({
  id: "5-prirodoveda-test-zari",
  sections: [
    {
      id: "rostliny",
      title: "Rostliny",
      icon: "🌿",
      type: "choice",
      instructions: "Vyber správnou odpověď.",
      pick: 6,
      items: [
        { prompt: "Ve které části rostliny probíhá fotosyntéza?", options: ["v listech", "v kořenech", "v plodech", "v semenech"], answer: "v listech", explanation: "V listech je chlorofyl." },
        { prompt: "Co rostlina při fotosyntéze vydává do vzduchu?", options: ["kyslík", "oxid uhličitý", "vodní páru a cukr", "dusík"], answer: "kyslík", explanation: "Rostliny proto čistí vzduch." },
        { prompt: "Co dělá kořen?", options: ["Nasává vodu a drží rostlinu", "Vyrábí cukry", "Tvoří pyl", "Chrání semena"], answer: "Nasává vodu a drží rostlinu", explanation: "Kořen rostlinu ukotví a nasává vodu s minerály." },
        { prompt: "Která rostlina se rozmnožuje výtrusy?", options: ["kapradina", "jabloň", "smrk", "pšenice"], answer: "kapradina", explanation: "Výtrusné rostliny: mechy, kapradiny, plavuně." },
        { prompt: "Kam patří smrk?", options: ["mezi nahosemenné", "mezi krytosemenné", "mezi výtrusné", "mezi byliny"], answer: "mezi nahosemenné", explanation: "Semena leží volně v šiškách." },
        { prompt: "Který jehličnan shazuje jehličí na zimu?", options: ["modřín", "smrk", "borovice", "jedle"], answer: "modřín", explanation: "Modřín na zimu zežloutne a opadá." },
        { prompt: "Co je plodem dubu?", options: ["žalud", "šiška", "bukvice", "oříšek"], answer: "žalud", explanation: "Dub má žaludy." },
        { prompt: "Kam patří hrách a fazole?", options: ["mezi luštěniny", "mezi obiloviny", "mezi okopaniny", "mezi olejniny"], answer: "mezi luštěniny", explanation: "Semena v luscích, hodně bílkovin." }
      ]
    },
    {
      id: "houby",
      title: "Houby",
      icon: "🍄",
      type: "choice",
      instructions: "Vyber správnou odpověď.",
      pick: 5,
      items: [
        { prompt: "Proč houby nejsou rostliny?", options: ["Nemají chlorofyl", "Nemají žádné buňky", "Nerozmnožují se", "Nerostou v zemi"], answer: "Nemají chlorofyl", explanation: "Bez chlorofylu nemohou fotosyntetizovat." },
        { prompt: "Jak se jmenuje podzemní část houby?", options: ["podhoubí", "kořen", "třeň", "plodnice"], answer: "podhoubí", explanation: "Z podhoubí vyrůstají plodnice." },
        { prompt: "Čím se houby rozmnožují?", options: ["výtrusy", "semeny", "šiškami", "pylem"], answer: "výtrusy", explanation: "Výtrusy jsou pod kloboukem v rourkách nebo lupenech." },
        { prompt: "Která houba je smrtelně jedovatá?", options: ["muchomůrka zelená", "hřib dubový", "žampion", "liška obecná"], answer: "muchomůrka zelená", explanation: "Nejnebezpečnější houba u nás." },
        { prompt: "Co je lišejník?", options: ["Soužití houby a řasy", "Mladá houba", "Druh mechu", "Nemoc dřeva"], answer: "Soužití houby a řasy", explanation: "Lišejníky jsou citlivé na znečištěný vzduch." },
        { prompt: "Jak se houby správně sbírají?", options: ["Vykroutit nebo odříznout", "Vyhrabat s podhoubím", "Vykopat rýčem", "Vytrhnout i s mechem"], answer: "Vykroutit nebo odříznout", explanation: "Podhoubí musí zůstat v zemi." }
      ]
    },
    {
      id: "zivocichove",
      title: "Živočichové",
      icon: "🐾",
      type: "choice",
      instructions: "Vyber správnou odpověď.",
      pick: 6,
      items: [
        { prompt: "Co mají všichni obratlovci?", options: ["páteř", "srst", "šupiny", "plíce"], answer: "páteř", explanation: "Páteř z obratlů." },
        { prompt: "Kolik nohou má dospělý hmyz?", options: ["6", "8", "4", "10"], answer: "6", explanation: "Tři páry nohou na hrudi." },
        { prompt: "Čím dýchají ryby?", options: ["žábrami", "plícemi", "kůží", "vzdušnicemi"], answer: "žábrami", explanation: "Žábry berou kyslík z vody." },
        { prompt: "Který živočich je obojživelník?", options: ["skokan", "ještěrka", "kapr", "netopýr"], answer: "skokan", explanation: "Skokan i čolek se rozmnožují ve vodě." },
        { prompt: "Co je typické pro savce?", options: ["kojí mláďata mlékem", "snášejí vejce s tvrdou skořápkou", "mají žábry", "mají vnější kostru"], answer: "kojí mláďata mlékem", explanation: "Savci mají také srst." },
        { prompt: "Kdo je teplokrevný?", options: ["ptáci a savci", "plazi a ryby", "obojživelníci a plazi", "všichni živočichové"], answer: "ptáci a savci", explanation: "Mají stálou tělesnou teplotu." },
        { prompt: "Který potravní řetězec je správný?", options: ["obilí → myš → sova", "myš → obilí → sova", "sova → myš → obilí", "obilí → sova → myš"], answer: "obilí → myš → sova", explanation: "Šipka ukazuje, kdo koho sní." },
        { prompt: "Který živočich je bezobratlý?", options: ["hlemýžď", "ježek", "žába", "zmije"], answer: "hlemýžď", explanation: "Hlemýžď je měkkýš – nemá páteř." }
      ]
    },
    {
      id: "priradovani",
      title: "Přiřaď skupinu",
      icon: "🧩",
      type: "match",
      instructions: "Ke každému organismu vyber skupinu.",
      pick: 8,
      items: [
        { prompt: "kapr", answer: "ryba", explanation: "Šupiny a žábry." },
        { prompt: "čolek", answer: "obojživelník", explanation: "Ve vodě i na suchu." },
        { prompt: "zmije", answer: "plaz", explanation: "Šupinatá suchá kůže." },
        { prompt: "sýkora", answer: "pták", explanation: "Peří a zobák." },
        { prompt: "srna", answer: "savec", explanation: "Srst, mláďata kojená mlékem." },
        { prompt: "hřib smrkový", answer: "houba", explanation: "Plodnice s rourkami." },
        { prompt: "kapradina", answer: "rostlina", explanation: "Výtrusná rostlina." },
        { prompt: "želva", answer: "plaz", explanation: "Krunýř, vejce na suchu." },
        { prompt: "pstruh", answer: "ryba", explanation: "Čistá studená voda." },
        { prompt: "muchomůrka červená", answer: "houba", explanation: "Jedovatá plodnice s lupeny." },
        { prompt: "netopýr", answer: "savec", explanation: "Letící savec." },
        { prompt: "smrk", answer: "rostlina", explanation: "Nahosemenná dřevina." }
      ]
    },
    {
      id: "pojmy",
      title: "Doplň pojem",
      icon: "✍️",
      type: "write",
      instructions: "Napiš jedno slovo.",
      pick: 5,
      items: [
        { prompt: "Zelené barvivo v listech je ___.", answer: "chlorofyl", explanation: "Zachycuje světlo." },
        { prompt: "Podzemní část houby je ___.", answer: "podhoubí", accept: ["mycelium"], explanation: "Síť vláken v půdě." },
        { prompt: "Živočichové s páteří jsou ___.", answer: "obratlovci", explanation: "Páteř je z obratlů." },
        { prompt: "Mládě žáby se jmenuje ___.", answer: "pulec", explanation: "Dýchá žábrami." },
        { prompt: "Živočich, který jí jen rostliny, je ___.", answer: "býložravec", explanation: "Srna, zajíc, kráva." },
        { prompt: "Soužití, ze kterého mají prospěch oba organismy, je ___.", answer: "symbióza", explanation: "Houba a strom, houba a řasa." },
        { prompt: "Tvorba cukrů z vody a oxidu uhličitého pomocí světla se nazývá ___.", answer: "fotosyntéza", explanation: "Probíhá v listech." }
      ]
    }
  ]
});
