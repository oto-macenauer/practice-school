// Přírodověda 5. třída – rostliny (části, fotosyntéza, dělení) a houby
// (stavba, jedlé × jedovaté, soužití se stromy, lišejníky).
School.register({
  id: "5-prirodoveda-rostliny-a-houby",
  sections: [
    {
      id: "casti-rostlin",
      title: "Části rostlin a jejich úkoly",
      icon: "🌱",
      type: "choice",
      instructions: "Vyber správnou odpověď.",
      pick: "auto",
      items: [
        { prompt: "Co dělá kořen?", options: ["Nasává vodu a živiny a drží rostlinu v zemi", "Vytváří cukry ze světla", "Přitahuje opylovače", "Rozšiřuje semena"], answer: "Nasává vodu a živiny a drží rostlinu v zemi", explanation: "Kořen rostlinu ukotví a nasává vodu s minerálními látkami." },
        { prompt: "Co dělá stonek?", options: ["Rozvádí vodu a nese listy a květy", "Nasává vodu z půdy", "Tvoří semena", "Chrání plod"], answer: "Rozvádí vodu a nese listy a květy", explanation: "Stonek (u dřevin kmen) je vodivá a nosná část." },
        { prompt: "V které části rostliny probíhá fotosyntéza?", options: ["v listech", "v kořenech", "v plodu", "v semenech"], answer: "v listech", explanation: "V listech je zelené barvivo chlorofyl, které zachycuje světlo." },
        { prompt: "K čemu slouží květ?", options: ["k rozmnožování", "k dýchání", "k nasávání vody", "k ukotvení rostliny"], answer: "k rozmnožování", explanation: "V květu jsou tyčinky (pyl) a pestík se semeníkem – po opylení vznikne plod se semeny." },
        { prompt: "Co vzniká z pestíku po opylení?", options: ["plod se semeny", "nový list", "další květ", "kořen"], answer: "plod se semeny", explanation: "Ze semeníku v pestíku vyroste plod. Chrání semena a pomáhá jejich rozšíření." },
        { prompt: "Co rostlina při fotosyntéze vyrábí?", options: ["cukry a kyslík", "vodu a půdu", "chlorofyl a pyl", "oxid uhličitý"], answer: "cukry a kyslík", explanation: "Z vody, oxidu uhličitého a světla vznikají cukry; kyslík rostlina vydává." },
        { prompt: "Co rostlina při fotosyntéze potřebuje?", options: ["světlo, vodu a oxid uhličitý", "světlo, kyslík a cukr", "teplo, tmu a vodu", "jen vodu"], answer: "světlo, vodu a oxid uhličitý", explanation: "Bez světla fotosyntéza neprobíhá." },
        { prompt: "Jak se jmenuje zelené barvivo v listech?", options: ["chlorofyl", "kolagen", "chitin", "chlorid"], answer: "chlorofyl", explanation: "Chlorofyl zachycuje energii ze slunce." },
        { prompt: "Co přenášejí včely z květu na květ?", options: ["pyl", "semena", "vodu", "plody"], answer: "pyl", explanation: "Přenos pylu = opylení. Pomáhá také vítr." },
        { prompt: "Proč jsou květy barevné a vonné?", options: ["Aby přilákaly opylovače", "Aby se chránily před sluncem", "Aby nasávaly vodu", "Aby zůstaly teplé"], answer: "Aby přilákaly opylovače", explanation: "Barva, vůně a nektar přivolají včely, čmeláky a motýly." }
      ]
    },
    {
      id: "deleni-rostlin",
      title: "Jak rostliny dělíme",
      icon: "🌳",
      type: "choice",
      instructions: "Byliny, keře a stromy; výtrusné a semenné rostliny.",
      pick: "auto",
      items: [
        { prompt: "Která z těchto rostlin má dřevnatý kmen a korunu?", options: ["strom", "bylina", "keř", "mech"], answer: "strom", explanation: "Strom má jeden kmen, keř se větví hned u země, bylina je nedřevnatá." },
        { prompt: "Čím se keř liší od stromu?", options: ["Větví se hned u země, nemá kmen", "Je vždy vyšší", "Nemá listy", "Nekvete"], answer: "Větví se hned u země, nemá kmen", explanation: "Například růže šípková, rybíz nebo černý bez." },
        { prompt: "Které z nich je bylina?", options: ["kopretina", "dub", "líska", "smrk"], answer: "kopretina", explanation: "Byliny mají nedřevnatý stonek: kopretina, sedmikráska, pampeliška." },
        { prompt: "Které rostliny se rozmnožují výtrusy?", options: ["mechy a kapradiny", "jehličnany", "listnaté stromy", "obiloviny"], answer: "mechy a kapradiny", explanation: "Výtrusné rostliny nemají květy ani semena." },
        { prompt: "Jak se nazývají rostliny se semeny v šiškách?", options: ["nahosemenné", "krytosemenné", "výtrusné", "bezcévné"], answer: "nahosemenné", explanation: "Nahosemenné jsou jehličnany – semena leží volně v šiškách." },
        { prompt: "Kam patří jabloň?", options: ["mezi krytosemenné", "mezi nahosemenné", "mezi výtrusné", "mezi houby"], answer: "mezi krytosemenné", explanation: "Semena jsou chráněná v plodu (jablku)." },
        { prompt: "Který strom je jehličnatý?", options: ["smrk", "bříza", "javor", "lípa"], answer: "smrk", explanation: "Smrk, jedle, borovice a modřín jsou jehličnany." },
        { prompt: "Který jehličnan na zimu shazuje jehličí?", options: ["modřín", "smrk", "jedle", "borovice"], answer: "modřín", explanation: "Modřín je jediný náš jehličnan, který na zimu zežloutne a opadá." },
        { prompt: "Co je plodem dubu?", options: ["žalud", "šiška", "bukvice", "oříšek"], answer: "žalud", explanation: "Dub má žaludy, buk bukvice, líska lískové oříšky." },
        { prompt: "Kam patří pšenice, žito a oves?", options: ["mezi obiloviny", "mezi luštěniny", "mezi okopaniny", "mezi keře"], answer: "mezi obiloviny", explanation: "Obiloviny jsou trávy pěstované na zrno." },
        { prompt: "Kam patří hrách, fazole a čočka?", options: ["mezi luštěniny", "mezi obiloviny", "mezi okopaniny", "mezi olejniny"], answer: "mezi luštěniny", explanation: "Luštěniny mají semena v luscích a jsou bohaté na bílkoviny." },
        { prompt: "Co je to okopanina?", options: ["Rostlina pěstovaná pro podzemní části, třeba brambor", "Rostlina, která roste v okopu", "Keř s bobulemi", "Rostlina bez listů"], answer: "Rostlina pěstovaná pro podzemní části, třeba brambor", explanation: "Okopaniny: brambory nebo řepa – kolem nich se okopává půda." }
      ]
    },
    {
      id: "houby",
      title: "Houby",
      icon: "🍄",
      type: "choice",
      instructions: "Houby nejsou rostliny – nemají chlorofyl a nedokážou fotosyntézu.",
      pick: "auto",
      items: [
        { prompt: "Proč houby nejsou rostliny?", options: ["Nemají chlorofyl a neumí fotosyntézu", "Nemají žádné buňky", "Rostou jen v zimě", "Mají kořeny a listy"], answer: "Nemají chlorofyl a neumí fotosyntézu", explanation: "Houby si nevyrábějí cukry samy – živiny berou z odumřelých zbytků nebo od jiných organismů." },
        { prompt: "Jak se jmenuje podzemní část houby?", options: ["podhoubí", "kořen", "třeň", "plodnice"], answer: "podhoubí", explanation: "Podhoubí (mycelium) je síť tenkých vláken v půdě." },
        { prompt: "Co sbíráme v lese, když sbíráme houby?", options: ["plodnice", "podhoubí", "výtrusy", "kořeny"], answer: "plodnice", explanation: "Plodnice (klobouk a třeň) vyrůstá z podhoubí a tvoří výtrusy." },
        { prompt: "Čím se houby rozmnožují?", options: ["výtrusy", "semeny", "šiškami", "květy"], answer: "výtrusy", explanation: "Výtrusy se tvoří na spodní straně klobouku – v rourkách nebo lupenech." },
        { prompt: "Která houba je jedovatá?", options: ["muchomůrka zelená", "hřib smrkový", "žampion", "křemenáč"], answer: "muchomůrka zelená", explanation: "Muchomůrka zelená je smrtelně jedovatá – nejnebezpečnější houba u nás." },
        { prompt: "Jak se říká soužití houby a stromu, kdy oba získávají?", options: ["symbióza", "parazitismus", "fotosyntéza", "opylení"], answer: "symbióza", explanation: "Podhoubí dodá stromu vodu a minerály, strom houbě cukry. Proto hřiby rostou u určitých stromů." },
        { prompt: "Co je lišejník?", options: ["Soužití houby a řasy", "Mladý mech", "Nemoc stromů", "Druh kapradiny"], answer: "Soužití houby a řasy", explanation: "Řasa fotosyntetizuje, houba drží vodu. Lišejníky rostou i na skalách a jsou citlivé na znečištěný vzduch." },
        { prompt: "Která houba je parazit stromů?", options: ["choroš", "bedla", "liška", "žampion"], answer: "choroš", explanation: "Choroš prorůstá do živého stromu, bere si z něj živiny a škodí mu. Dřevo pak rozkládá dál i po odumření stromu." },
        { prompt: "Jak se má houba sbírat?", options: ["Vykroutit nebo odříznout a nepoškodit podhoubí", "Vyhrabat s celým podhoubím", "Utrhnout jen klobouk a třeň zašlápnout", "Rozkopat trávník okolo"], answer: "Vykroutit nebo odříznout a nepoškodit podhoubí", explanation: "Podhoubí zůstane v zemi a příští rok narostou nové houby." },
        { prompt: "Co uděláš, když si u houby nejsi jistý?", options: ["Nesbírám ji", "Sním jen malý kousek", "Uvařím ji dlouho, tím se jed zničí", "Dám ji zvířatům"], answer: "Nesbírám ji", explanation: "Vařením se jedy muchomůrky nezničí. Neznámé houby se nesbírají." },
        { prompt: "Kde se tvoří výtrusy u hřibu?", options: ["v rourkách pod kloboukem", "v lupenech pod kloboukem", "na třeni", "v podhoubí"], answer: "v rourkách pod kloboukem", explanation: "Hřiby mají rourky, bedly a muchomůrky lupeny." },
        { prompt: "Kde v domácnosti využíváme houby?", options: ["při pečení chleba (droždí)", "při výrobě soli", "při čištění vody", "při vaření brambor"], answer: "při pečení chleba (droždí)", explanation: "Droždí je kvasinka – jednobuněčná houba. Plísně se využívají i na sýry a na léky (penicilin)." }
      ]
    },
    {
      id: "poznavani",
      title: "Poznávání rostlin a hub",
      icon: "🔎",
      type: "match",
      instructions: "Přiřaď, kam který organismus patří.",
      pick: "auto",
      items: [
        { prompt: "smrk", answer: "jehličnatý strom", explanation: "Jehličnan s šiškami, nahosemenná rostlina." },
        { prompt: "bříza", answer: "listnatý strom", explanation: "Listnatý strom s bílou borkou." },
        { prompt: "kapradina", answer: "výtrusná rostlina", explanation: "Nekvete, rozmnožuje se výtrusy." },
        { prompt: "muchomůrka zelená", answer: "jedovatá houba", explanation: "Smrtelně jedovatá." },
        { prompt: "hřib smrkový", answer: "jedlá houba", explanation: "Rourkatá jedlá houba, roste v symbióze se smrkem." },
        { prompt: "borovice", answer: "jehličnatý strom", explanation: "Jehlice po dvou ve svazečku." },
        { prompt: "dub", answer: "listnatý strom", explanation: "Plodem je žalud." },
        { prompt: "mech", answer: "výtrusná rostlina", explanation: "Nemá pravé kořeny ani květy." },
        { prompt: "žampion", answer: "jedlá houba", explanation: "Pěstuje se ve žampionárnách." },
        { prompt: "muchomůrka červená", answer: "jedovatá houba", explanation: "Červený klobouk s bílými puntíky – jedovatá." },
        { prompt: "modřín", answer: "jehličnatý strom", explanation: "Na zimu shazuje jehličí." },
        { prompt: "lípa", answer: "listnatý strom", explanation: "Náš národní strom, kvete v červnu." }
      ]
    },
    {
      id: "pojmy",
      title: "Doplň pojem",
      icon: "✍️",
      type: "write",
      instructions: "Napiš jedno slovo.",
      pick: "auto",
      items: [
        { prompt: "Zelené barvivo v listech se jmenuje ___.", answer: "chlorofyl", explanation: "Chlorofyl zachycuje světlo pro fotosyntézu." },
        { prompt: "Podzemní část houby se jmenuje ___.", answer: "podhoubí", accept: ["mycelium"], explanation: "Z podhoubí vyrůstají plodnice." },
        { prompt: "Proces, kterým rostlina ze světla, vody a oxidu uhličitého tvoří cukry, se jmenuje ___.", answer: "fotosyntéza", explanation: "Při fotosyntéze rostlina vydává kyslík." },
        { prompt: "Přenos pylu z tyčinky na pestík se jmenuje ___.", answer: "opylení", accept: ["opylování"], explanation: "Opylení zajišťuje hmyz nebo vítr." },
        { prompt: "Soužití dvou organismů, ze kterého mají prospěch oba, se jmenuje ___.", answer: "symbióza", explanation: "Například houba a strom nebo houba a řasa v lišejníku." },
        { prompt: "Část rostliny, která nasává vodu z půdy, je ___.", answer: "kořen", accept: ["kořeny"], explanation: "Kořen rostlinu také ukotví." },
        { prompt: "Houby se rozmnožují ___ (co se tvoří pod kloboukem).", answer: "výtrusy", accept: ["spory"], explanation: "Výtrusy roznáší vítr." },
        { prompt: "Rostlina s nedřevnatým stonkem se nazývá ___.", answer: "bylina", accept: ["byliny"], explanation: "Byliny × keře × stromy." }
      ]
    }
  ]
});
