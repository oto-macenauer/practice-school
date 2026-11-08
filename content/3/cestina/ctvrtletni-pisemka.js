// Čeština 3. třída – čtvrtletní písemka (listopad): vyjmenovaná slova po B, být × bít,
// tvrdé a měkké souhlásky, párové souhlásky, ú/ů/u, význam slov, slova příbuzná, přísloví.
School.register({
  id: "3-cestina-ctvrtletni-pisemka",
  sections: [
    {
      id: "doplnovacka",
      title: "Doplň i/í, nebo y/ý",
      icon: "✏️",
      type: "choice",
      instructions: "Vyber správné písmeno.",
      items: [
        { prompt: "V naš___ třídě máme nové knížky.", options: ["í", "ý"], answer: "í", explanation: "Po š píšeme í." },
        { prompt: "Děti si prohlížejí obrázk___.", options: ["y", "i"], answer: "y", explanation: "Po k píšeme y." },
        { prompt: "Paní učitelka nám půjčí velk___ atlas zvířat.", options: ["ý", "í"], answer: "ý", explanation: "Po k píšeme ý." },
        { prompt: "Na pastvě se pasou kob___ly.", options: ["y", "i"], answer: "y", explanation: "Kobyla – vyjmenované slovo." },
        { prompt: "Dědeček sbírá léčivé b___liny.", options: ["y", "i"], answer: "y", explanation: "Bylina – vyjmenované slovo." },
        { prompt: "V našem domě b___dlí pět rodin.", options: ["y", "i"], answer: "y", explanation: "Bydlet – vyjmenované slovo." },
        { prompt: "Na stěně visí b___lý obraz.", options: ["í", "ý"], answer: "í", explanation: "Bílý – barva, není vyjmenované." }
      ]
    },
    {
      id: "byt-bit",
      title: "Být, nebo bít?",
      icon: "🔨",
      type: "choice",
      instructions: "Je to bytí, nebo mlácení?",
      items: [
        { prompt: "Hodiny od___ly šest.", options: ["i", "y"], answer: "i", explanation: "Hodiny odbíjejí. Odbily." },
        { prompt: "Vojsko do___lo hrad.", options: ["y", "i"], answer: "y", explanation: "Získalo ho. Dobylo." },
        { prompt: "Z koláče z___l jen kousek.", options: ["y", "i"], answer: "y", explanation: "Zůstal. Zbyl." },
        { prompt: "Táta při___l obraz na zeď.", options: ["i", "y"], answer: "i", explanation: "Přitloukl. Přibil." },
        { prompt: "Kráva je b___ložravec.", options: ["ý", "í"], answer: "ý", explanation: "Jí býlí – rostliny." }
      ]
    },
    {
      id: "parove",
      title: "Párové souhlásky",
      icon: "👂",
      type: "choice",
      instructions: "Doplň správnou souhlásku.",
      items: [
        { prompt: "ledový mrá___", options: ["z", "s"], answer: "z", explanation: "mrazy → mráz" },
        { prompt: "sladký me___", options: ["d", "t"], answer: "d", explanation: "medu → med" },
        { prompt: "čerstvý chlé___", options: ["b", "p"], answer: "b", explanation: "chleba → chléb" },
        { prompt: "vysoká vě___", options: ["ž", "š"], answer: "ž", explanation: "věže → věž" },
        { prompt: "těžký bato___", options: ["h", "ch"], answer: "h", explanation: "batohy → batoh" },
        { prompt: "cihlová ze___", options: ["ď", "ť"], answer: "ď", explanation: "zdi → zeď" }
      ]
    },
    {
      id: "u-u-u",
      title: "ú, ů, u",
      icon: "🔵",
      type: "choice",
      instructions: "Doplň ú, ů, nebo u.",
      items: [
        { prompt: "___směv", options: ["ú", "ů", "u"], answer: "ú", explanation: "Na začátku slova ú." },
        { prompt: "d___m", options: ["ů", "ú", "u"], answer: "ů", explanation: "Uprostřed slova ů." },
        { prompt: "st___l", options: ["ů", "ú", "u"], answer: "ů", explanation: "Uprostřed slova ů." },
        { prompt: "___nor", options: ["ú", "ů", "u"], answer: "ú", explanation: "Na začátku slova ú." },
        { prompt: "r___ka", options: ["u", "ú", "ů"], answer: "u", explanation: "Krátké u." }
      ]
    },
    {
      id: "vyznam",
      title: "Význam slov",
      icon: "💡",
      type: "choice",
      instructions: "Vyber správnou odpověď.",
      items: [
        { prompt: "Které slovo je podřazené ke slovu oblečení?", options: ["tričko", "skříň", "pračka", "šňůra"], answer: "tričko", explanation: "Tričko je druh oblečení." },
        { prompt: "Jaké slovo je protikladné ke slovu tma?", options: ["světlo", "noc", "stín", "večer"], answer: "světlo", explanation: "Opak tmy je světlo." },
        { prompt: "Jaké slovo je souznačné se slovem plakat?", options: ["brečet", "smát se", "volat", "spát"], answer: "brečet", explanation: "Plakat = brečet." },
        { prompt: "Které slovo je příbuzné ke slovu ryba?", options: ["rybník", "rychlík", "rytíř", "rýže"], answer: "rybník", explanation: "Kořen ryb-." },
        { prompt: "Které slovo NENÍ příbuzné ke slovu být?", options: ["bitva", "zbytek", "pobyt", "byl"], answer: "bitva", explanation: "Bitva je od slova bít." }
      ]
    },
    {
      id: "prislovi",
      title: "Přísloví a přirovnání",
      icon: "🦉",
      type: "choice",
      instructions: "Doplň.",
      items: [
        { prompt: "Kdo jinému jámu kopá, sám do ní ___.", options: ["spadne", "skočí", "vleze", "kouká"], answer: "spadne", explanation: "Kdo chce ublížit druhému, ublíží sám sobě." },
        { prompt: "Tichý jako ___.", options: ["myška", "slon", "pes", "kohout"], answer: "myška", explanation: "Myška je potichu." }
      ]
    }
  ]
});
