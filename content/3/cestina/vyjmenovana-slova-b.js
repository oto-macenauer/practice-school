// Čeština 3. třída – vyjmenovaná slova po B a slova příbuzná, nástrahy u dvojic s opačným i/y.
School.register({
  id: "3-cestina-vyjmenovana-slova-b",
  sections: [
    {
      id: "rada-b",
      title: "Vyjmenovaná slova po B",
      icon: "🅱️",
      type: "choice",
      instructions: "být, bydlit, obyvatel, byt, příbytek, nábytek, dobytek, obyčej, bystrý, bylina, kobyla, býk, Přibyslav. Které slovo je vyjmenované?",
      pick: "auto",
      items: [
        { prompt: "Které slovo je vyjmenované? (rostlina)", options: ["bylina", "bílý", "bič", "bitva"], answer: "bylina", explanation: "Bylina patří mezi vyjmenovaná slova po B." },
        { prompt: "Které slovo je vyjmenované? (zvíře)", options: ["býk", "bít", "bizon", "bída"], answer: "býk", explanation: "Býk je vyjmenované slovo." },
        { prompt: "Které slovo je vyjmenované? (koňská máma)", options: ["kobyla", "kobliha", "babička", "bicí"], answer: "kobyla", explanation: "Kobyla je vyjmenované slovo." },
        { prompt: "Které slovo je vyjmenované? (zvyk)", options: ["obyčej", "obilí", "obiloviny", "biskup"], answer: "obyčej", explanation: "Obyčej = zvyk, je to vyjmenované slovo." },
        { prompt: "Které slovo je vyjmenované? (chytrý)", options: ["bystrý", "bič", "bitý", "bílý"], answer: "bystrý", explanation: "Bystrý = chytrý, rychlý. Vyjmenované slovo." },
        { prompt: "Které slovo je vyjmenované? (zvířata na statku)", options: ["dobytek", "dobít", "bití", "bič"], answer: "dobytek", explanation: "Dobytek = krávy, koně, ovce. Vyjmenované slovo." },
        { prompt: "Které město je mezi vyjmenovanými slovy?", options: ["Přibyslav", "Brno", "Bílina", "Beroun"], answer: "Přibyslav", explanation: "Přibyslav je jediné město v řadě po B." },
        { prompt: "Kolik je vyjmenovaných slov po B?", options: ["13", "10", "12", "15"], answer: "13", explanation: "být, bydlit, obyvatel, byt, příbytek, nábytek, dobytek, obyčej, bystrý, bylina, kobyla, býk, Přibyslav." },
        { prompt: "Které slovo do řady po B nepatří? (byt, nábytek…)", options: ["bitva", "byt", "nábytek", "příbytek"], answer: "bitva", explanation: "Bitva je od slova bít, píše se s i." },
        { prompt: "Které slovo do řady po B nepatří? (bydlit, být…)", options: ["bílý", "bydlit", "obyvatel", "být"], answer: "bílý", explanation: "Bílý je barva, píše se s í." }
      ]
    },
    {
      id: "slova",
      title: "Doplň i/í, nebo y/ý",
      icon: "✏️",
      type: "choice",
      instructions: "Je to vyjmenované nebo příbuzné slovo? Pak píšeš y/ý.",
      pick: "auto",
      items: [
        { prompt: "ob___vatel", options: ["y", "i"], answer: "y", explanation: "Vyjmenované slovo obyvatel." },
        { prompt: "náb___tek", options: ["y", "i"], answer: "y", explanation: "Vyjmenované slovo nábytek." },
        { prompt: "b___č", options: ["i", "y"], answer: "i", explanation: "Bič není vyjmenované slovo." },
        { prompt: "kob___la", options: ["y", "i"], answer: "y", explanation: "Vyjmenované slovo kobyla." },
        { prompt: "b___tva", options: ["i", "y"], answer: "i", explanation: "Bitva – tam se bije. Od slova bít." },
        { prompt: "b___strý", options: ["y", "i"], answer: "y", explanation: "Vyjmenované slovo bystrý." },
        { prompt: "b___lý", options: ["í", "ý"], answer: "í", explanation: "Bílý je barva, není vyjmenované." },
        { prompt: "b___dliště", options: ["y", "i"], answer: "y", explanation: "Příbuzné k bydlit." },
        { prompt: "zb___tek", options: ["y", "i"], answer: "y", explanation: "Zbytek = co zbylo. Příbuzné k být." },
        { prompt: "ob___čejný", options: ["y", "i"], answer: "y", explanation: "Příbuzné k obyčej." },
        { prompt: "bab___čka", options: ["i", "y"], answer: "i", explanation: "Po č píšeme vždy i." },
        { prompt: "b___ček", options: ["ý", "í"], answer: "ý", explanation: "Malý býk je býček." },
        { prompt: "b___linkový čaj", options: ["y", "i"], answer: "y", explanation: "Příbuzné k bylina." },
        { prompt: "příb___tek", options: ["y", "i"], answer: "y", explanation: "Vyjmenované slovo příbytek." },
        { prompt: "dob___tek", options: ["y", "i"], answer: "y", explanation: "Vyjmenované slovo dobytek." },
        { prompt: "b___tí srdce", options: ["i", "y"], answer: "i", explanation: "Srdce tluče – bití. Od slova bít." },
        { prompt: "b___tový", options: ["y", "i"], answer: "y", explanation: "Bytový dům – příbuzné k byt." },
        { prompt: "zab___dlet se", options: ["y", "i"], answer: "y", explanation: "Příbuzné k bydlit." }
      ]
    },
    {
      id: "ve-vetach",
      title: "Vyjmenovaná slova ve větách",
      icon: "📖",
      type: "choice",
      instructions: "Doplň správné písmeno.",
      pick: "auto",
      items: [
        { prompt: "Naše rodina b___dlí v novém b___tě.", options: ["y, y", "i, i", "y, i", "i, y"], answer: "y, y", explanation: "Bydlí (bydlit) i bytě (byt) jsou vyjmenovaná slova." },
        { prompt: "Na louce se pase kob___la s hříbětem.", options: ["y", "i"], answer: "y", explanation: "Kobyla – vyjmenované slovo." },
        { prompt: "Babička suší b___linky na čaj.", options: ["y", "i"], answer: "y", explanation: "Bylinky – příbuzné k bylina." },
        { prompt: "Býk má b___lou skvrnu na čele.", options: ["í", "ý"], answer: "í", explanation: "Bílou – barva." },
        { prompt: "Ve městě žije hodně ob___vatel.", options: ["y", "i"], answer: "y", explanation: "Obyvatel – vyjmenované slovo." },
        { prompt: "Do pokoje jsme koupili nový náb___tek.", options: ["y", "i"], answer: "y", explanation: "Nábytek – vyjmenované slovo." },
        { prompt: "Pastevec hnal ob___čejně dob___tek na pastvu.", options: ["y, y", "i, y", "y, i", "i, i"], answer: "y, y", explanation: "Obyčejně (obyčej) a dobytek – obě vyjmenovaná." },
        { prompt: "Ten kluk je b___strý, hned to pochopil.", options: ["y", "i"], answer: "y", explanation: "Bystrý – vyjmenované slovo." },
        { prompt: "Vojáci b___li statečně v b___tvě.", options: ["i, i", "y, y", "y, i", "i, y"], answer: "i, i", explanation: "Bili v bitvě – bojovali, tloukli. Od slova bít." },
        { prompt: "Ptáček si postavil příb___tek v dutině stromu.", options: ["y", "i"], answer: "y", explanation: "Příbytek – vyjmenované slovo." }
      ]
    },
    {
      id: "pribuzna",
      title: "Slova příbuzná",
      icon: "🌳",
      type: "choice",
      instructions: "Příbuzná slova mají stejný kořen a podobný význam.",
      pick: "auto",
      items: [
        { prompt: "Které slovo je příbuzné ke slovu být?", options: ["zbytek", "bitva", "bič", "bílý"], answer: "zbytek", explanation: "Zbytek = co zbylo. Ostatní slova s být nesouvisí." },
        { prompt: "Které slovo je příbuzné ke slovu bydlit?", options: ["bydliště", "bidlo", "bít", "bílé tričko"], answer: "bydliště", explanation: "Bydliště = kde bydlíme." },
        { prompt: "Které slovo je příbuzné ke slovu bylina?", options: ["býložravec", "bílý", "bitka", "bílá čepice"], answer: "býložravec", explanation: "Býložravec jí býlí – rostliny, byliny." },
        { prompt: "Které slovo je příbuzné ke slovu byt?", options: ["bytový", "bitý", "bič", "bicí"], answer: "bytový", explanation: "Bytový dům je dům s byty." },
        { prompt: "Které slovo je příbuzné ke slovu býk?", options: ["býček", "bílek", "bidlo", "bič"], answer: "býček", explanation: "Býček je malý býk." },
        { prompt: "Které slovo NENÍ příbuzné k být?", options: ["zbít", "zbytek", "pobyt", "přibýt"], answer: "zbít", explanation: "Zbít = zmlátit, od slova bít." },
        { prompt: "Které slovo NENÍ příbuzné k bydlit?", options: ["bidlo", "bydliště", "obydlí", "bydlení"], answer: "bidlo", explanation: "Bidlo je dlouhá tyč." },
        { prompt: "Které slovo je příbuzné ke slovu obyčej?", options: ["obyčejný", "obilí", "obíhat", "obilná pole"], answer: "obyčejný", explanation: "Obyčejný = běžný, jak je zvykem." }
      ]
    }
  ]
});
