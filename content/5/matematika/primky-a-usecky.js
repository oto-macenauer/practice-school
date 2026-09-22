// Matematika 5. třída – geometrie: bod, přímka, polopřímka, úsečka,
// značení, vzájemná poloha přímek (rovnoběžky, různoběžky, kolmice), délky úseček.
School.register({
  id: "5-matematika-primky-a-usecky",
  sections: [
    {
      id: "pojmy",
      title: "Bod, přímka, polopřímka, úsečka",
      icon: "📐",
      type: "choice",
      instructions: "Vyber správnou odpověď.",
      pick: "auto",
      items: [
        { prompt: "Co je přímka?", options: ["Nekonečná čára bez začátku a konce", "Čára mezi dvěma body", "Čára, která má začátek", "Zakřivená linka"], answer: "Nekonečná čára bez začátku a konce", explanation: "Přímka je nekonečná v obou směrech. Narýsujeme jen její část." },
        { prompt: "Co je úsečka?", options: ["Část přímky mezi dvěma body", "Nekonečná čára", "Bod na přímce", "Čára s jedním koncem"], answer: "Část přímky mezi dvěma body", explanation: "Úsečka má dva krajní body a měřitelnou délku." },
        { prompt: "Co má polopřímka?", options: ["počátek, ale žádný konec", "dva krajní body", "ani počátek, ani konec", "jen délku"], answer: "počátek, ale žádný konec", explanation: "Polopřímka začíná v počátku a pokračuje nekonečně jedním směrem." },
        { prompt: "Kolik přímek prochází dvěma různými body?", options: ["jedna", "dvě", "žádná", "nekonečně mnoho"], answer: "jedna", explanation: "Dvěma body vede vždy právě jedna přímka." },
        { prompt: "Kolik přímek může procházet jedním bodem?", options: ["nekonečně mnoho", "jedna", "dvě", "čtyři"], answer: "nekonečně mnoho", explanation: "Jedním bodem lze vést libovolně mnoho přímek." },
        { prompt: "Co z uvedeného se dá změřit pravítkem?", options: ["úsečka", "přímka", "polopřímka", "bod"], answer: "úsečka", explanation: "Jen úsečka má konečnou délku." },
        { prompt: "Jak se značí body?", options: ["velkými písmeny: A, B, C", "malými písmeny: a, b, c", "čísly: 1, 2, 3", "řeckými písmeny"], answer: "velkými písmeny: A, B, C", explanation: "Body velkými písmeny, přímky malými." },
        { prompt: "Co znamená zápis |AB| = 5 cm?", options: ["Úsečka AB je dlouhá 5 cm", "Přímka AB je dlouhá 5 cm", "Bod A je 5 cm velký", "Polopřímka AB má 5 cm"], answer: "Úsečka AB je dlouhá 5 cm", explanation: "Svislé čáry znamenají délku (velikost) úsečky." },
        { prompt: "Co znamená zápis C ∈ p?", options: ["Bod C leží na přímce p", "Bod C neleží na přímce p", "Přímka C je rovnoběžná s p", "Bod C je uprostřed p"], answer: "Bod C leží na přímce p", explanation: "Znak ∈ znamená „leží na“, znak ∉ znamená „neleží na“." },
        { prompt: "Kolik krajních bodů má úsečka?", options: ["2", "1", "žádný", "nekonečně mnoho"], answer: "2", explanation: "Úsečka AB má krajní body A a B." }
      ]
    },
    {
      id: "poloha",
      title: "Vzájemná poloha přímek",
      icon: "✖️",
      type: "choice",
      instructions: "Rovnoběžky se nikdy nesetkají, různoběžky mají průsečík, kolmice se protínají v pravém úhlu.",
      pick: "auto",
      items: [
        { prompt: "Jak se nazývají přímky, které se nikdy neprotnou?", options: ["rovnoběžky", "různoběžky", "kolmice", "polopřímky"], answer: "rovnoběžky", explanation: "Rovnoběžky mají všude stejnou vzdálenost. Značíme p ∥ q." },
        { prompt: "Co mají různoběžky?", options: ["průsečík", "stejnou délku", "stejný směr", "dva počátky"], answer: "průsečík", explanation: "Různoběžky se protínají v jednom bodě – průsečíku." },
        { prompt: "Jaký úhel svírají kolmice?", options: ["pravý (90°)", "ostrý", "tupý", "přímý (180°)"], answer: "pravý (90°)", explanation: "Kolmice značíme p ⊥ q a pravý úhel v obrázku značíme tečkou nebo čtverečkem." },
        { prompt: "Kolik průsečíků mají dvě rovnoběžné přímky?", options: ["žádný", "jeden", "dva", "nekonečně mnoho"], answer: "žádný", explanation: "Rovnoběžky se nikdy neprotnou." },
        { prompt: "Co znamená zápis a ∥ b?", options: ["Přímka a je rovnoběžná s přímkou b", "Přímka a je kolmá na b", "Přímky a, b jsou různoběžné", "Přímky a, b jsou totožné"], answer: "Přímka a je rovnoběžná s přímkou b", explanation: "Dvě svislé čárky = rovnoběžnost." },
        { prompt: "Co znamená zápis a ⊥ b?", options: ["Přímka a je kolmá na přímku b", "Přímka a je rovnoběžná s b", "Přímka a je delší než b", "Přímky se nesetkají"], answer: "Přímka a je kolmá na přímku b", explanation: "Kolmice se protínají v pravém úhlu." },
        { prompt: "Jsou kolmice zároveň různoběžky?", options: ["Ano, protínají se v jednom bodě", "Ne, nikdy se neprotnou", "Ano, ale nemají průsečík", "Jen někdy"], answer: "Ano, protínají se v jednom bodě", explanation: "Kolmice jsou zvláštní případ různoběžek – jejich úhel je pravý." },
        { prompt: "Které strany čtverce jsou k sobě kolmé?", options: ["sousední strany", "protilehlé strany", "žádné", "všechny navzájem"], answer: "sousední strany", explanation: "U čtverce a obdélníku jsou protilehlé strany rovnoběžné a sousední kolmé." },
        { prompt: "Kolik rovnoběžek s danou přímkou prochází bodem mimo ni?", options: ["jedna", "žádná", "dvě", "nekonečně mnoho"], answer: "jedna", explanation: "Bodem mimo přímku vede jediná rovnoběžka." },
        { prompt: "Čím rýsujeme kolmici?", options: ["trojúhelníkem s ryskou", "kružítkem", "provázkem", "jen pravítkem bez rysky"], answer: "trojúhelníkem s ryskou", explanation: "Ryska na trojúhelníku ukazuje pravý úhel." }
      ]
    },
    {
      id: "delky-usecek",
      title: "Délky úseček",
      icon: "📏",
      type: "choice",
      instructions: "Počítej s délkami úseček. Pomůže ti obrázek v hlavě nebo náčrtek na papír.",
      pick: "auto",
      items: [
        { prompt: "Bod B leží mezi A a C. |AB| = 4 cm, |BC| = 3 cm. Jak dlouhá je úsečka AC?", options: ["7 cm", "1 cm", "12 cm", "34 cm"], answer: "7 cm", explanation: "Délky se sčítají: 4 + 3 = 7 cm." },
        { prompt: "|AC| = 10 cm, bod B leží mezi A a C, |AB| = 6 cm. Jak dlouhá je úsečka BC?", options: ["4 cm", "16 cm", "6 cm", "5 cm"], answer: "4 cm", explanation: "10 − 6 = 4 cm." },
        { prompt: "Bod S je střed úsečky KL, |KL| = 8 cm. Jak dlouhá je KS?", options: ["4 cm", "8 cm", "16 cm", "3 cm"], answer: "4 cm", explanation: "Střed dělí úsečku na dvě stejné poloviny: 8 : 2 = 4 cm." },
        { prompt: "|MN| = 60 mm. Kolik je to centimetrů?", options: ["6 cm", "60 cm", "600 cm", "16 cm"], answer: "6 cm", explanation: "10 mm = 1 cm, tedy 60 mm = 6 cm." },
        { prompt: "Obdélník má strany 6 cm a 4 cm. Jaký je jeho obvod?", options: ["20 cm", "24 cm", "10 cm", "16 cm"], answer: "20 cm", explanation: "Obvod = 2 × (6 + 4) = 20 cm." },
        { prompt: "Čtverec má stranu 7 cm. Jaký je jeho obvod?", options: ["28 cm", "14 cm", "49 cm", "21 cm"], answer: "28 cm", explanation: "Obvod čtverce = 4 × 7 = 28 cm." },
        { prompt: "Trojúhelník má strany 5 cm, 6 cm a 8 cm. Jaký je obvod?", options: ["19 cm", "18 cm", "20 cm", "11 cm"], answer: "19 cm", explanation: "5 + 6 + 8 = 19 cm." },
        { prompt: "Úsečka je dlouhá 12 cm. Rozdělíme ji na 4 stejné části. Jak dlouhá je jedna část?", options: ["3 cm", "4 cm", "6 cm", "48 cm"], answer: "3 cm", explanation: "12 : 4 = 3 cm." },
        { prompt: "Obdélník má obvod 30 cm a jednu stranu 10 cm. Jak dlouhá je druhá strana?", options: ["5 cm", "10 cm", "20 cm", "15 cm"], answer: "5 cm", explanation: "30 : 2 = 15 cm je součet délek dvou sousedních stran, 15 − 10 = 5 cm." }
      ]
    },
    {
      id: "kruznice-a-rysovani",
      title: "Kružnice a rýsování",
      icon: "⭕",
      type: "choice",
      instructions: "Vyber správnou odpověď.",
      pick: "auto",
      items: [
        { prompt: "Čím narýsujeme kružnici?", options: ["kružítkem", "pravítkem", "trojúhelníkem", "úhloměrem"], answer: "kružítkem", explanation: "Kružítko drží pořád stejnou vzdálenost od středu." },
        { prompt: "Co je to poloměr kružnice?", options: ["Úsečka od středu k bodu na kružnici", "Úsečka přes celý kruh", "Délka celé kružnice", "Bod uprostřed"], answer: "Úsečka od středu k bodu na kružnici", explanation: "Poloměr značíme r, průměr d = 2 × r." },
        { prompt: "Poloměr kružnice je 3 cm. Jaký je průměr?", options: ["6 cm", "3 cm", "9 cm", "12 cm"], answer: "6 cm", explanation: "Průměr je dvojnásobek poloměru." },
        { prompt: "Průměr kružnice je 10 cm. Jaký je poloměr?", options: ["5 cm", "20 cm", "10 cm", "15 cm"], answer: "5 cm", explanation: "10 : 2 = 5 cm." },
        { prompt: "Jak označíme kružnici se středem S a poloměrem 4 cm?", options: ["k(S; 4 cm)", "S(k; 4 cm)", "|S4|", "k = S + 4"], answer: "k(S; 4 cm)", explanation: "Nejdřív název kružnice, pak střed a poloměr." },
        { prompt: "Leží střed S na kružnici k?", options: ["Ne, leží uvnitř", "Ano, leží na ní", "Leží mimo kruh", "Kružnice nemá střed"], answer: "Ne, leží uvnitř", explanation: "Kružnice je jen ta čára. Střed leží uvnitř, ale ne na kružnici." },
        { prompt: "Jaký je rozdíl mezi kružnicí a kruhem?", options: ["Kruh je i vnitřní plocha", "Žádný, je to totéž", "Kružnice je vždy větší", "Kruh se rýsuje pravítkem"], answer: "Kruh je i vnitřní plocha", explanation: "Kružnice = čára, kruh = čára i celá plocha uvnitř." },
        { prompt: "Čím měříme velikost úhlu?", options: ["úhloměrem", "kružítkem", "pravítkem", "kalkulačkou"], answer: "úhloměrem", explanation: "Úhloměr měří ve stupních (°)." },
        { prompt: "Jak velký je pravý úhel?", options: ["90°", "45°", "180°", "100°"], answer: "90°", explanation: "Pravý úhel = 90°, přímý = 180°." }
      ]
    },
    {
      id: "zapis",
      title: "Zápis a značení",
      icon: "✏️",
      type: "write",
      instructions: "Napiš krátkou odpověď (číslo nebo jedno slovo).",
      pick: "auto",
      items: [
        { prompt: "Bod B leží mezi A a C. |AB| = 25 mm, |BC| = 45 mm. Kolik mm je |AC|?", answer: "70", explanation: "25 + 45 = 70 mm." },
        { prompt: "Jak se jmenují přímky, které se nikdy neprotnou? (jedno slovo)", answer: "rovnoběžky", explanation: "Rovnoběžky, značíme ∥." },
        { prompt: "Jak se jmenují přímky, které se protínají v pravém úhlu? (jedno slovo)", answer: "kolmice", explanation: "Kolmice, značíme ⊥." },
        { prompt: "Kolik centimetrů má poloměr kružnice, jejíž průměr je 14 cm?", answer: "7", explanation: "14 : 2 = 7 cm." },
        { prompt: "Kolik stupňů má pravý úhel? Napiš číslo.", answer: "90", explanation: "Pravý úhel má 90°." },
        { prompt: "Čtverec má stranu 9 cm. Kolik cm je jeho obvod?", answer: "36", explanation: "4 × 9 = 36 cm." },
        { prompt: "Jak se jmenuje bod, ve kterém se protnou dvě různoběžky? (jedno slovo)", answer: "průsečík", explanation: "Průsečík." },
        { prompt: "Úsečka KL má 8 cm. Kolik cm je od K do jejího středu?", answer: "4", explanation: "8 : 2 = 4 cm." }
      ]
    }
  ]
});
