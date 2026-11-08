// Matematika 3. třída – geometrie: bod, přímka, úsečka, body na přímce a mimo ni,
// délka úsečky v cm, rýsování.
School.register({
  id: "3-matematika-primka-a-usecka",
  sections: [
    {
      id: "pojmy",
      title: "Přímka, nebo úsečka?",
      icon: "📏",
      type: "choice",
      instructions: "Přímka nemá začátek ani konec. Úsečka má dva krajní body a dá se změřit.",
      pick: "auto",
      items: [
        { prompt: "Co nemá začátek ani konec?", options: ["přímka", "úsečka", "bod", "pravítko"], answer: "přímka", explanation: "Přímka je nekonečná na obě strany. Narýsujeme jen její kousek." },
        { prompt: "Co má dva krajní body?", options: ["úsečka", "přímka", "bod", "kruh"], answer: "úsečka", explanation: "Úsečka KL má krajní body K a L." },
        { prompt: "Co můžeme změřit pravítkem?", options: ["úsečku", "přímku", "bod", "nic"], answer: "úsečku", explanation: "Jen úsečka má délku. Přímka je nekonečná." },
        { prompt: "Jak označujeme body?", options: ["velkými písmeny", "malými písmeny", "čísly", "barvami"], answer: "velkými písmeny", explanation: "Body: A, B, C. Přímky: a, b, p." },
        { prompt: "Jak označujeme přímky?", options: ["malými písmeny", "velkými písmeny", "čísly", "tečkami"], answer: "malými písmeny", explanation: "Přímka a, přímka p." },
        { prompt: "Jak se jmenuje úsečka mezi body K a L?", options: ["KL", "kl", "K", "přímka k"], answer: "KL", explanation: "Úsečku pojmenujeme podle krajních bodů: KL." },
        { prompt: "Kolik přímek vede dvěma body A a B?", options: ["jedna", "dvě", "žádná", "hodně"], answer: "jedna", explanation: "Dvěma body vede jen jedna přímka." },
        { prompt: "Kolik přímek může vést jedním bodem?", options: ["nekonečně mnoho", "jedna", "dvě", "žádná"], answer: "nekonečně mnoho", explanation: "Jedním bodem můžeš vést přímek, kolik chceš." },
        { prompt: "Čím rýsujeme přímku a úsečku?", options: ["pravítkem", "kružítkem", "gumou", "nůžkami"], answer: "pravítkem", explanation: "Rýsujeme ořezanou tužkou podle pravítka." },
        { prompt: "Co znamená zápis |KL| = 5 cm?", options: ["úsečka KL měří 5 cm", "přímka KL měří 5 cm", "bod K je 5 cm velký", "mezi K a L je 5 bodů"], answer: "úsečka KL měří 5 cm", explanation: "Svislé čárky znamenají délku úsečky." }
      ]
    },
    {
      id: "body",
      title: "Body na přímce",
      icon: "📍",
      type: "choice",
      instructions: "Bod leží na přímce, když jím přímka prochází.",
      pick: "auto",
      items: [
        { prompt: "Body A a B leží na přímce a. Co to znamená?", options: ["přímka a prochází body A a B", "body jsou nad přímkou", "body jsou daleko od přímky", "přímka končí v bodech A a B"], answer: "přímka a prochází body A a B", explanation: "Bod na přímce leží přímo na čáře." },
        { prompt: "Bod C neleží na přímce a. Kde je?", options: ["mimo přímku", "na přímce", "uprostřed přímky", "na konci přímky"], answer: "mimo přímku", explanation: "Přímka bodem C neprochází." },
        { prompt: "Narýsuješ přímku a, na ní body A, B a mimo ni body C, D. Kolik bodů leží na přímce a?", options: ["2", "4", "1", "3"], answer: "2", explanation: "Na přímce leží jen A a B." },
        { prompt: "Kolik bodů může ležet na jedné přímce?", options: ["nekonečně mnoho", "jen 2", "jen 1", "nejvýš 10"], answer: "nekonečně mnoho", explanation: "Na přímku můžeš vyznačit bodů, kolik chceš." },
        { prompt: "Body K, L, M leží na jedné přímce, L je mezi K a M. Jak se jmenují dvě úsečky?", options: ["KL a LM", "KM a ML", "KK a LL", "K a M"], answer: "KL a LM", explanation: "Úsečka KL a úsečka LM mají společný bod L." }
      ]
    },
    {
      id: "delky",
      title: "Délky úseček",
      icon: "📐",
      type: "choice",
      instructions: "Délky úseček sčítáme a odčítáme jako čísla. Nezapomeň na jednotku.",
      pick: "auto",
      items: [
        { prompt: "|KL| = 5 cm, |LM| = 3 cm. Kolik cm měří obě úsečky dohromady?", options: ["8 cm", "2 cm", "15 cm", "53 cm"], answer: "8 cm", explanation: "5 + 3 = 8 cm." },
        { prompt: "|KL| = 5 cm, |LM| = 3 cm. O kolik cm je KL delší než LM?", options: ["2 cm", "8 cm", "3 cm", "5 cm"], answer: "2 cm", explanation: "5 − 3 = 2 cm." },
        { prompt: "Úsečka AB měří 7 cm. Úsečka CD je o 4 cm kratší. Kolik měří CD?", options: ["3 cm", "11 cm", "4 cm", "28 cm"], answer: "3 cm", explanation: "7 − 4 = 3 cm." },
        { prompt: "Úsečka AB měří 4 cm. Úsečka CD je dvakrát delší. Kolik měří CD?", options: ["8 cm", "6 cm", "2 cm", "16 cm"], answer: "8 cm", explanation: "4 · 2 = 8 cm." },
        { prompt: "Úsečka měří 9 cm. Rozdělíme ji na 3 stejné díly. Kolik měří jeden díl?", options: ["3 cm", "6 cm", "27 cm", "12 cm"], answer: "3 cm", explanation: "9 : 3 = 3 cm." },
        { prompt: "Kolik centimetrů má 1 decimetr?", options: ["10 cm", "100 cm", "1 cm", "5 cm"], answer: "10 cm", explanation: "1 dm = 10 cm." },
        { prompt: "Kolik centimetrů má 1 metr?", options: ["100 cm", "10 cm", "1000 cm", "50 cm"], answer: "100 cm", explanation: "1 m = 100 cm." },
        { prompt: "Úsečka měří 6 cm. Kde na pravítku začneš rýsovat?", options: ["u nuly", "u jedničky", "u šestky", "kdekoli"], answer: "u nuly", explanation: "Měříme a rýsujeme vždy od 0." }
      ]
    }
  ]
});
