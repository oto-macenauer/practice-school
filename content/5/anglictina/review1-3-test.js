// Test: Review Units 1–3 – going to, past simple / past continuous, present perfect,
// may / might, some- / any- / no-, too / enough; transport, animals, competitions, music.
School.register({
  id: "5-anglictina-review1-3-test",
  sections: [
    {
      id: "which-grammar",
      title: "What's it about? Name the grammar",
      icon: "🧭",
      type: "choice",
      instructions: "Choose the name of the grammar in the sentence.",
      pick: "auto",
      items: [
        { prompt: "We're going to take our bicycles and helmets.", options: ["going to", "past simple", "present perfect"], answer: "going to", explanation: "A plan → going to." },
        { prompt: "This year we're going to go on three holidays.", options: ["going to", "past continuous", "present perfect"], answer: "going to", explanation: "A plan → going to." },
        { prompt: "What did you do on your first night?", options: ["past simple", "present perfect", "going to"], answer: "past simple", explanation: "did + verb → past simple." },
        { prompt: "We arrived at the camp in the evening.", options: ["past simple", "past continuous", "going to"], answer: "past simple", explanation: "arrived (-ed) → past simple." },
        { prompt: "A snake was sitting outside my tent.", options: ["past continuous", "past simple", "present perfect"], answer: "past continuous", explanation: "was + -ing → past continuous." },
        { prompt: "They were looking for koalas when it started to rain.", options: ["past continuous", "going to", "present perfect"], answer: "past continuous", explanation: "were + -ing → past continuous." },
        { prompt: "I've seen a photo of that.", options: ["present perfect", "past simple", "past continuous"], answer: "present perfect", explanation: "have + 3rd form → present perfect." },
        { prompt: "Has anyone ever been skiing?", options: ["present perfect", "past continuous", "going to"], answer: "present perfect", explanation: "has + been → present perfect." },
        { prompt: "It might be cold in the mountains.", options: ["may / might", "going to", "too / enough"], answer: "may / might", explanation: "might = maybe." },
        { prompt: "My mum says I'm not old enough.", options: ["too / enough", "may / might", "going to"], answer: "too / enough", explanation: "old enough = dost starý." }
      ]
    },
    {
      id: "grammar-mix",
      title: "Grammar mix (Units 1–3)",
      icon: "📚",
      type: "choice",
      instructions: "Choose the correct answer.",
      pick: "auto",
      items: [
        { prompt: "We ___ go to the mountains in March. (Unit 1)", options: ["are going to", "have gone to", "were going"], answer: "are going to", explanation: "Plan → are going to + verb." },
        { prompt: "She ___ going to pack her warm coat. (Unit 1)", options: ["is", "are", "has"], answer: "is", explanation: "she → is going to." },
        { prompt: "___ you going to go by train? (Unit 1)", options: ["Are", "Do", "Have"], answer: "Are", explanation: "Are you going to …?" },
        { prompt: "I ___ going to fly. I don't like planes. (Unit 1)", options: ["'m not", "don't", "haven't"], answer: "'m not", explanation: "I'm not going to …" },
        { prompt: "Last weekend I ___ a big fish. (Unit 1)", options: ["caught", "catched", "catch"], answer: "caught", explanation: "catch – caught." },
        { prompt: "Did you ___ any interesting animals? (Unit 2)", options: ["see", "saw", "seen"], answer: "see", explanation: "did + 1st form." },
        { prompt: "We ___ see any snakes. (Unit 2)", options: ["didn't", "weren't", "haven't"], answer: "didn't", explanation: "didn't + 1st form (see)." },
        { prompt: "Miguel ___ teaching the children. (Unit 2)", options: ["was", "were", "did"], answer: "was", explanation: "he → was + -ing." },
        { prompt: "We ___ walking in the forest when we saw a kangaroo. (Unit 2)", options: ["were", "was", "did"], answer: "were", explanation: "we → were + -ing." },
        { prompt: "I was sleeping when a noise ___ me up. (Unit 2)", options: ["woke", "was waking", "has woken"], answer: "woke", explanation: "Short action → past simple (woke)." },
        { prompt: "Have you ever ___ to a carnival? (Unit 3)", options: ["been", "be", "was"], answer: "been", explanation: "have + been." },
        { prompt: "Ivan ___ lifted a sofa. (Unit 3)", options: ["has", "have", "is"], answer: "has", explanation: "he → has." },
        { prompt: "I haven't seen the pyramids ___. (Unit 3)", options: ["yet", "already", "ever"], answer: "yet", explanation: "yet at the end of a negative." },
        { prompt: "I ___ to Brazil last year. (Unit 3)", options: ["went", "have been", "have gone"], answer: "went", explanation: "last year → past simple." },
        { prompt: "Take a coat. It ___ be cold.", options: ["might", "might to", "is might"], answer: "might", explanation: "might + verb without 'to'." },
        { prompt: "Everyone I know ___ swum in the sea.", options: ["has", "have", "are"], answer: "has", explanation: "everyone → has (singular)." },
        { prompt: "I don't know ___ who has been to a desert.", options: ["anyone", "no-one", "everyone"], answer: "anyone", explanation: "Negative with don't → any-." }
      ]
    },
    {
      id: "too-enough",
      title: "too or enough?",
      icon: "🌡️",
      type: "choice",
      instructions: "Choose the correct answer.",
      pick: "auto",
      items: [
        { prompt: "It's ___ hot for me in the desert.", options: ["too", "enough", "very enough"], answer: "too", explanation: "too + adjective = příliš." },
        { prompt: "I'm not ___ to go to a festival.", options: ["old enough", "enough old", "too old enough"], answer: "old enough", explanation: "adjective + enough." },
        { prompt: "I like having ___ to drink.", options: ["enough water", "water enough", "too water"], answer: "enough water", explanation: "enough + noun." },
        { prompt: "This bag is ___ heavy. I can't carry it.", options: ["too", "enough", "not enough"], answer: "too", explanation: "too heavy = příliš těžký." },
        { prompt: "We haven't got ___ for the train.", options: ["enough time", "time too", "too time"], answer: "enough time", explanation: "enough + noun." },
        { prompt: "The water isn't ___ to swim in.", options: ["warm enough", "enough warm", "too enough"], answer: "warm enough", explanation: "adjective + enough." }
      ]
    },
    {
      id: "write-verbs",
      title: "Write the verb",
      icon: "✏️",
      type: "write",
      instructions: "Write the correct form of the verb in brackets.",
      pick: "auto",
      items: [
        { prompt: "Next week we are going to ___ (visit) Grandma.", answer: "visit" },
        { prompt: "Yesterday I ___ (go) to the zoo.", answer: "went" },
        { prompt: "We ___ (see) a camel at the zoo last Sunday.", answer: "saw" },
        { prompt: "I ___ (lose) my jacket on the train last week.", answer: "lost" },
        { prompt: "The children ___ (play) volleyball when it started to rain. (past continuous)", answer: "were playing" },
        { prompt: "She ___ (read) when the phone rang. (past continuous)", answer: "was reading" },
        { prompt: "I have never ___ (see) an octopus.", answer: "seen" },
        { prompt: "Have you ever ___ (be) to Australia?", answer: "been" },
        { prompt: "He has ___ (win) a prize.", answer: "won" },
        { prompt: "They ___ (go) to Spain. They're coming back on Sunday. (present perfect)", answer: "have gone", accept: ["'ve gone"] }
      ]
    },
    {
      id: "vocabulary-transport-animals",
      title: "Vocabulary: transport and animals",
      icon: "🚑",
      type: "match",
      instructions: "Choose the word that matches the meaning.",
      pick: "auto",
      items: [
        { prompt: "a car that takes ill people to hospital", answer: "ambulance" },
        { prompt: "a car you pay to drive you somewhere", answer: "taxi" },
        { prompt: "a big, fast road between cities", answer: "motorway" },
        { prompt: "you ride it and it has two wheels", answer: "bicycle" },
        { prompt: "the place where you wait for a train", answer: "platform" },
        { prompt: "you wear it on your head when you ride a bike", answer: "helmet" },
        { prompt: "a desert animal with one or two humps", answer: "camel" },
        { prompt: "a big white bird that lives on water", answer: "swan" },
        { prompt: "a sea animal with eight arms", answer: "octopus" },
        { prompt: "a slow animal with a hard shell", answer: "tortoise" },
        { prompt: "a big bird that hunts other animals", answer: "eagle" },
        { prompt: "an insect with big, colourful wings", answer: "butterfly" },
        { prompt: "there are very few of these animals left", answer: "endangered" },
        { prompt: "there are no more of these animals", answer: "extinct" }
      ]
    },
    {
      id: "vocabulary-unit3",
      title: "Vocabulary: competitions and music",
      icon: "🏆",
      type: "match",
      instructions: "Choose the word that matches the meaning.",
      pick: "auto",
      items: [
        { prompt: "something you get when you win", answer: "prize" },
        { prompt: "the person who wins", answer: "winner" },
        { prompt: "a game between two teams", answer: "match" },
        { prompt: "a game with questions", answer: "quiz" },
        { prompt: "a show where musicians play music", answer: "concert" },
        { prompt: "an instrument that you hit", answer: "drums" },
        { prompt: "a big celebration, often with music", answer: "festival" },
        { prompt: "the place where musicians stand", answer: "stage" }
      ]
    },
    {
      id: "same-different",
      title: "Same or different?",
      icon: "🦢",
      type: "choice",
      instructions: "Read about the two things. Choose the correct sentence.",
      pick: "auto",
      items: [
        { prompt: "swan and eagle – what is the same?", options: ["They can both fly.", "They both live in the sea.", "They both have eight arms."], answer: "They can both fly." },
        { prompt: "swan and eagle – what is different?", options: ["A swan lives on water.", "An eagle can't fly.", "A swan has a shell."], answer: "A swan lives on water." },
        { prompt: "taxi and ambulance – what is the same?", options: ["They both drive on roads.", "They both fly in the sky.", "They both go on rails."], answer: "They both drive on roads." },
        { prompt: "butterfly and beetle – what is the same?", options: ["They are both insects.", "They are both birds.", "They both live in water."], answer: "They are both insects." },
        { prompt: "tortoise and octopus – what is different?", options: ["A tortoise has a shell.", "An octopus lives on land.", "A tortoise has eight arms."], answer: "A tortoise has a shell." },
        { prompt: "bicycle and train – what is different?", options: ["A train goes on rails.", "A bicycle has an engine.", "A train has two wheels."], answer: "A train goes on rails." }
      ]
    },
    {
      id: "listening",
      title: "Listening",
      icon: "🎧",
      type: "choice",
      instructions: "Listen and answer the question.",
      pick: "auto",
      items: [
        { say: "On my last birthday I went to a concert with my sister. It was great!", prompt: "What did she do on her last birthday?", options: ["She went to a concert.", "She played volleyball.", "She went camping."], answer: "She went to a concert." },
        { say: "My birthday is on the fourteenth of April. This year I'm going to have a party in the park.", prompt: "What is she going to do?", options: ["Have a party in the park.", "Go to a concert in Rio.", "Visit her grandma."], answer: "Have a party in the park." },
        { say: "I was riding my bike when I saw a big eagle in the sky.", prompt: "What was he doing when he saw the eagle?", options: ["Riding his bike.", "Walking his dog.", "Swimming in a lake."], answer: "Riding his bike." },
        { say: "We're going to leave on Friday. We're going to go by train and take our helmets.", prompt: "How are they going to travel?", options: ["By train.", "By plane.", "By taxi."], answer: "By train." },
        { say: "Have you ever seen an octopus? Yes, I have. I saw one at the sea last summer.", prompt: "Where did he see the octopus?", options: ["At the sea.", "At the zoo.", "In a lake."], answer: "At the sea." },
        { say: "I broke my arm in the mountains last winter, so I didn't go skiing again.", prompt: "Where did he break his arm?", options: ["In the mountains.", "At the stadium.", "On the beach."], answer: "In the mountains." },
        { say: "Tasmanian tigers are extinct. Nobody has seen one for many years.", prompt: "What does 'extinct' mean?", options: ["There are no more.", "There are very many.", "They are very big."], answer: "There are no more." },
        { say: "Take some water. It might be hot today, and the journey is long.", prompt: "Why should they take water?", options: ["It might be hot.", "It might rain.", "The shop is closed."], answer: "It might be hot." }
      ]
    },
    {
      id: "reading-david",
      title: "Reading: David's interview",
      icon: "🐢",
      type: "choice",
      instructions: "Read the interview. Is the sentence right or wrong?",
      passage:
        "E: Hi, David. I'm writing a quiz. Can I please ask you some questions? You may win a prize!\n" +
        "D: Sure! Go ahead!\n" +
        "E: Have you ever swum in a lake?\n" +
        "D: No, I haven't. Everyone I know has swum in the sea, but no-one has swum in a lake.\n" +
        "E: Have you ever been to a festival?\n" +
        "D: No, I haven't – not yet! My mum says I'm not old enough to go.\n" +
        "E: Have you ever sent a postcard?\n" +
        "D: Yes, I've just sent one to my cousin to say thank you for looking after my tortoise. Postcards aren't too expensive, so I send them from everywhere I go on holiday.\n" +
        "E: Have you ever been somewhere really hot, like a desert?\n" +
        "D: No, I haven't. It's too hot for me there and I like having enough water to drink!\n" +
        "E: Thanks, David! Hmm … I'm sorry, you only answered 'yes' to one question, so you aren't the winner.\n" +
        "D: Oh no! I've never won a prize!",
      items: [
        { prompt: "David has swum in a lake.", options: ["right", "wrong"], answer: "wrong", explanation: "No, I haven't." },
        { prompt: "David doesn't know anyone who has swum in the sea.", options: ["right", "wrong"], answer: "wrong", explanation: "Everyone he knows has swum in the sea." },
        { prompt: "David's mum thinks David is old enough to go to a festival.", options: ["right", "wrong"], answer: "wrong", explanation: "She says he isn't old enough." },
        { prompt: "David has just sent a postcard to his cousin.", options: ["right", "wrong"], answer: "right" },
        { prompt: "David thinks postcards are too expensive.", options: ["right", "wrong"], answer: "wrong", explanation: "Postcards aren't too expensive." },
        { prompt: "David has been to a desert.", options: ["right", "wrong"], answer: "wrong", explanation: "It's too hot for him there." },
        { prompt: "David has never won a prize.", options: ["right", "wrong"], answer: "right" },
        { prompt: "How many times did David answer 'yes'?", options: ["once", "twice", "never"], answer: "once" }
      ]
    }
  ]
});
