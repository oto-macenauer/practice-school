// Lesson: may / might + every- / some- / any- / no- (-thing, -body, -one, -where)
// Topic of the first 5th grade assessment, 22 Sept 2026.
School.register({
  id: "5-anglictina-may-might-some-any",
  lesson: [
    {
      type: "text",
      html:
        "<h2>May / might = možná</h2>" +
        "<p>Pomocí <b>may</b> a <b>might</b> říkáme, že se něco <b>možná</b> stane — nejsme si jistí.</p>" +
        "<ul>" +
        "<li><b>It might rain.</b> = Možná bude pršet.</li>" +
        "<li><b>She may come to the party.</b> = Možná přijde na oslavu.</li>" +
        "</ul>" +
        "<p><b>Pravidla:</b></p>" +
        "<ul>" +
        "<li>Po may / might je sloveso <b>bez to</b>: <i>might go</i>, ne <s>might to go</s>.</li>" +
        "<li>Pro všechny osoby stejný tvar, <b>bez -s</b>: <i>he might go</i>, ne <s>he might goes</s>, ne <s>he mights</s>.</li>" +
        "<li>Zápor: <b>may not / might not</b> (možná ne): <i>I might not come.</i> Nikdy <s>don't might</s>.</li>" +
        "<li><b>might</b> je o kousek méně jisté než <b>may</b>, ale obojí znamená „možná“.</li>" +
        "<li><b>May I …?</b> = zdvořilá prosba o dovolení: <i>May I open the window?</i> = Mohu otevřít okno?</li>" +
        "</ul>"
    },
    {
      type: "table",
      head: ["Věta", "Význam"],
      rows: [
        ["It might snow tonight.", "Dnes v noci možná bude sněžit."],
        ["We may go to the zoo.", "Možná půjdeme do zoo."],
        ["Tom might not know the answer.", "Tom možná nezná odpověď."],
        ["May I go to the toilet, please?", "Můžu jít prosím na záchod?"]
      ]
    },
    {
      type: "text",
      html:
        "<h2>every- / some- / any- / no-</h2>" +
        "<p>Začátek slova říká <b>kolik</b>, konec říká <b>co</b>: <b>-thing</b> = věc, <b>-body / -one</b> = člověk, <b>-where</b> = místo.</p>"
    },
    {
      type: "table",
      head: ["", "-thing (věc)", "-body / -one (člověk)", "-where (místo)"],
      rows: [
        ["every-", "everything = všechno", "everybody / everyone = všichni", "everywhere = všude"],
        ["some-", "something = něco", "somebody / someone = někdo", "somewhere = někde"],
        ["any-", "anything = něco / nic", "anybody / anyone = někdo / nikdo", "anywhere = někde / nikde"],
        ["no-", "nothing = nic", "nobody / no one = nikdo", "nowhere = nikde"]
      ]
    },
    {
      type: "text",
      html:
        "<p><b>Pravidla:</b></p>" +
        "<ul>" +
        "<li><b>some-</b> v kladných větách: <i>There is something in my bag.</i> A když něco nabízíme: <i>Would you like something to drink?</i></li>" +
        "<li><b>any-</b> v otázkách a v záporných větách s <i>not</i>: <i>Is there anybody here? I can't find it anywhere.</i></li>" +
        "<li><b>no-</b> už je samo záporné, sloveso zůstává kladné: <i>I know nothing. Nobody came.</i></li>" +
        "<li>⚠️ <b>Pozor na češtinu!</b> Česky říkáme dva zápory (<i>nic nevím</i>), anglicky jen jeden: " +
        "<i>I don't know anything</i> nebo <i>I know nothing</i>, ale nikdy <s>I don't know nothing</s>.</li>" +
        "<li><b>every- / no- / some- / any-</b> + sloveso v <b>jednotném čísle</b>: <i>Everybody <b>is</b> happy. Nobody <b>knows</b>.</i></li>" +
        "</ul>"
    }
  ],
  sections: [
    {
      id: "may-might-check",
      title: "May / might",
      icon: "🤔",
      type: "choice",
      instructions: "Choose the correct form.",
      pick: "auto",
      items: [
        { prompt: "It's cloudy. It ___ later.", options: ["might rain", "might to rain", "might rains"], answer: "might rain", explanation: "After might we use the verb without 'to' and without '-s'." },
        { prompt: "My brother ___ to the cinema with us.", options: ["may come", "may comes", "mays come"], answer: "may come", explanation: "May is the same for all persons – no '-s'." },
        { prompt: "I ___ come to school tomorrow. I feel ill.", options: ["might not", "don't might", "not might"], answer: "might not", explanation: "The negative is 'might not' – never 'don't might'." },
        { prompt: "___ I borrow your rubber, please?", options: ["May", "Do", "Am"], answer: "May", explanation: "'May I …?' is a polite way to ask for permission." },
        { prompt: "Be careful! The dog ___ bite you.", options: ["might", "might to", "mights"], answer: "might", explanation: "might + verb without 'to'." },
        { prompt: "We ___ go to Italy this summer, but we aren't sure.", options: ["may", "may to", "are may"], answer: "may", explanation: "may + verb without 'to'." }
      ]
    },
    {
      id: "some-any-check",
      title: "every- / some- / any- / no-",
      icon: "🔎",
      type: "choice",
      instructions: "Choose the correct word.",
      pick: "auto",
      items: [
        { prompt: "There's ___ under the bed. What is it?", options: ["something", "anything", "nowhere"], answer: "something", explanation: "Positive sentence → some-. It's a thing → something." },
        { prompt: "I can't find my pencil ___.", options: ["anywhere", "nowhere", "anything"], answer: "anywhere", explanation: "Negative with 'can't' → any-. A place → anywhere." },
        { prompt: "___ came to the meeting. The room was empty.", options: ["Nobody", "Anybody", "Everybody"], answer: "Nobody", explanation: "The room was empty → nobody. The verb 'came' stays positive." },
        { prompt: "I don't know ___ about dinosaurs.", options: ["anything", "nothing", "somewhere"], answer: "anything", explanation: "'don't' is already negative, so we use any- (not 'nothing')." },
        { prompt: "___ is ready. We can start the party!", options: ["Everything", "Anything", "Nowhere"], answer: "Everything", explanation: "All the things are ready → everything." },
        { prompt: "Is there ___ at home? The lights are on.", options: ["anybody", "anything", "anywhere"], answer: "anybody", explanation: "A question about a person → anybody." }
      ]
    }
  ]
});
