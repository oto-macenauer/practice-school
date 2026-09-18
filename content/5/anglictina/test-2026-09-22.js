// Test: may / might + every- / some- / any- / no- (-thing, -body, -one, -where)
// First 5th grade assessment, Tuesday 22 Sept 2026.
School.register({
  id: "5-anglictina-test-2026-09-22",
  sections: [
    {
      id: "may-might-form",
      title: "May / might – the right form",
      icon: "🤔",
      type: "choice",
      instructions: "Choose the correct form.",
      pick: "auto",
      items: [
        { prompt: "Take an umbrella. It ___ later.", options: ["might rain", "might to rain", "might rains"], answer: "might rain", explanation: "might + verb without 'to' and without '-s'." },
        { prompt: "She ___ to the party. She isn't sure yet.", options: ["may come", "may comes", "may to come"], answer: "may come", explanation: "may + verb without 'to'; no '-s' for she." },
        { prompt: "We ___ late because of the traffic.", options: ["might be", "might are", "might being"], answer: "might be", explanation: "After might we use the base form: be." },
        { prompt: "Ask Peter. He ___ the answer.", options: ["may know", "may knows", "may to know"], answer: "may know", explanation: "He may know – no '-s' after may." },
        { prompt: "I ___ go to the cinema tonight. I'm too tired.", options: ["might not", "don't might", "might don't"], answer: "might not", explanation: "Negative: might not + verb." },
        { prompt: "They ___ like the film. It's very long.", options: ["may not", "don't may", "may not to"], answer: "may not", explanation: "Negative: may not + verb." },
        { prompt: "The shop ___ open on Sunday. I'm not sure.", options: ["might be", "might is", "might being"], answer: "might be", explanation: "might + be (base form)." },
        { prompt: "My grandma ___ us next weekend.", options: ["may visit", "may visits", "may to visit"], answer: "may visit", explanation: "may + visit (no '-s')." },
        { prompt: "Be careful! You ___.", options: ["might fall", "might to fall", "might falls"], answer: "might fall", explanation: "might + fall." },
        { prompt: "It's very cold. It ___ tonight.", options: ["may snow", "may snows", "may to snow"], answer: "may snow", explanation: "may + snow." },
        { prompt: "I'm not sure, but I ___ a new bike for my birthday.", options: ["might get", "might to get", "might got"], answer: "might get", explanation: "might + base form get." },
        { prompt: "She looks sad. She ___ want to play.", options: ["might not", "not might", "mights not"], answer: "might not", explanation: "Negative: might not." },
        { prompt: "Don't eat that mushroom! It ___ poisonous.", options: ["may be", "may is", "may to be"], answer: "may be", explanation: "may + be." },
        { prompt: "___ I go to the toilet, please?", options: ["May", "Am", "Does"], answer: "May", explanation: "'May I …?' asks for permission politely." },
        { prompt: "___ I borrow your pencil, please?", options: ["May", "Do", "Is"], answer: "May", explanation: "'May I …?' asks for permission politely." },
        { prompt: "Our teacher ___ us a test on Friday.", options: ["might give", "might gives", "might to give"], answer: "might give", explanation: "might + give." },
        { prompt: "We ___ have time to finish the game.", options: ["may not", "don't may", "may not to"], answer: "may not", explanation: "Negative: may not + verb." },
        { prompt: "Dad ___ home early today.", options: ["might come", "might comes", "might coming"], answer: "might come", explanation: "might + come." }
      ]
    },
    {
      id: "possible-or-certain",
      title: "Possible or certain?",
      icon: "🎲",
      type: "choice",
      instructions: "Is it only possible (maybe), or is it certain (definitely)?",
      pick: "auto",
      items: [
        { prompt: "It might rain this afternoon.", options: ["possible", "certain"], answer: "possible", explanation: "might = maybe." },
        { prompt: "We may go to the zoo on Saturday.", options: ["possible", "certain"], answer: "possible", explanation: "may = maybe." },
        { prompt: "Tom might not come to the party.", options: ["possible", "certain"], answer: "possible", explanation: "might not = maybe not." },
        { prompt: "The test may be difficult.", options: ["possible", "certain"], answer: "possible", explanation: "may = maybe." },
        { prompt: "I might get a dog one day.", options: ["possible", "certain"], answer: "possible", explanation: "might = maybe." },
        { prompt: "My dad may be late tonight.", options: ["possible", "certain"], answer: "possible", explanation: "may = maybe." },
        { prompt: "Tomorrow is Sunday.", options: ["possible", "certain"], answer: "certain", explanation: "This is a fact – no may or might." },
        { prompt: "The film starts at 7 o'clock.", options: ["possible", "certain"], answer: "certain", explanation: "This is a fact – no may or might." },
        { prompt: "My sister is 11 years old.", options: ["possible", "certain"], answer: "certain", explanation: "This is a fact – no may or might." },
        { prompt: "Water boils at 100 °C.", options: ["possible", "certain"], answer: "certain", explanation: "This is a fact – no may or might." },
        { prompt: "I will definitely call you tonight.", options: ["possible", "certain"], answer: "certain", explanation: "'definitely' = for sure." },
        { prompt: "We have the tickets. We are going to Prague tomorrow.", options: ["possible", "certain"], answer: "certain", explanation: "They have the tickets – it's the plan." }
      ]
    },
    {
      id: "every-some-any-no",
      title: "every- / some- / any- / no-",
      icon: "🔎",
      type: "choice",
      instructions: "Choose the correct word.",
      pick: "auto",
      items: [
        { prompt: "There's ___ in my shoe. It hurts!", options: ["something", "anything", "nowhere"], answer: "something", explanation: "Positive sentence → some-. A thing → something." },
        { prompt: "I didn't see ___ at the park. It was empty.", options: ["anybody", "nobody", "somewhere"], answer: "anybody", explanation: "'didn't' is already negative → any-. Not 'didn't … nobody'." },
        { prompt: "I saw ___ at the park. It was empty.", options: ["nobody", "anybody", "everywhere"], answer: "nobody", explanation: "The verb 'saw' is positive, so the negative word is nobody." },
        { prompt: "I can't find my keys ___.", options: ["anywhere", "nowhere", "something"], answer: "anywhere", explanation: "'can't' is negative → any-. A place → anywhere." },
        { prompt: "I've looked ___ for my cat, but I can't find her.", options: ["everywhere", "anywhere", "nothing"], answer: "everywhere", explanation: "I looked in all the places → everywhere." },
        { prompt: "Is there ___ in the classroom? The light is on.", options: ["anybody", "anything", "anywhere"], answer: "anybody", explanation: "A question about a person → anybody." },
        { prompt: "___ in my family likes chocolate. We all love it!", options: ["Everybody", "Nobody", "Anybody"], answer: "Everybody", explanation: "We all love it → everybody. The verb is singular: likes." },
        { prompt: "___ knows the answer. The question is too difficult.", options: ["Nobody", "Everybody", "Anywhere"], answer: "Nobody", explanation: "Too difficult → nobody knows it." },
        { prompt: "I'm bored. There's ___ to do.", options: ["nothing", "anything", "nowhere"], answer: "nothing", explanation: "'There's' is positive, so the negative word is nothing." },
        { prompt: "I'm bored. There isn't ___ to do.", options: ["anything", "nothing", "somewhere"], answer: "anything", explanation: "'isn't' is already negative → anything." },
        { prompt: "Let's go ___ nice for our holiday.", options: ["somewhere", "anywhere", "something"], answer: "somewhere", explanation: "Positive sentence, a place → somewhere." },
        { prompt: "Did you buy ___ at the shop?", options: ["anything", "anywhere", "anybody"], answer: "anything", explanation: "A question about things → anything." },
        { prompt: "Her bag is empty. There is ___ in it.", options: ["nothing", "anything", "everything"], answer: "nothing", explanation: "Empty → nothing. 'There is' stays positive." },
        { prompt: "___ is ready for the trip. Let's go!", options: ["Everything", "Anything", "Nowhere"], answer: "Everything", explanation: "All the things are ready → everything." },
        { prompt: "There's ___ at the door. Can you open it?", options: ["somebody", "anybody", "nowhere"], answer: "somebody", explanation: "Positive sentence, a person → somebody." },
        { prompt: "I have ___ to tell you. It's a secret!", options: ["something", "anything", "nowhere"], answer: "something", explanation: "Positive sentence, a thing → something." },
        { prompt: "We couldn't go ___ because of the rain.", options: ["anywhere", "nowhere", "anything"], answer: "anywhere", explanation: "'couldn't' is negative → anywhere." },
        { prompt: "All the chairs are taken. There is ___ to sit.", options: ["nowhere", "anywhere", "nothing"], answer: "nowhere", explanation: "No place to sit → nowhere." },
        { prompt: "Would you like ___ to drink?", options: ["something", "somewhere", "somebody"], answer: "something", explanation: "In offers we use some-. A drink is a thing → something." },
        { prompt: "___ in my class has a pet. We all have one!", options: ["Everyone", "No one", "Anyone"], answer: "Everyone", explanation: "We all have one → everyone." },
        { prompt: "I called, but ___ answered the phone.", options: ["nobody", "anybody", "everywhere"], answer: "nobody", explanation: "'answered' is positive → nobody." },
        { prompt: "Does ___ want more pizza?", options: ["anyone", "anything", "anywhere"], answer: "anyone", explanation: "A question about people → anyone." }
      ]
    },
    {
      id: "meanings",
      title: "What does it mean?",
      icon: "🧩",
      type: "match",
      instructions: "Choose the word that matches the meaning.",
      pick: "auto",
      items: [
        { prompt: "all the places", answer: "everywhere" },
        { prompt: "not any place", answer: "nowhere" },
        { prompt: "a place, but I don't know which", answer: "somewhere" },
        { prompt: "all the people", answer: "everybody" },
        { prompt: "not one person", answer: "nobody" },
        { prompt: "a person, but I don't know who", answer: "somebody" },
        { prompt: "all the things", answer: "everything" },
        { prompt: "not one thing", answer: "nothing" },
        { prompt: "a thing, but I don't know what", answer: "something" },
        { prompt: "a place (in questions and negatives)", answer: "anywhere" },
        { prompt: "a person (in questions and negatives)", answer: "anybody" },
        { prompt: "a thing (in questions and negatives)", answer: "anything" }
      ]
    },
    {
      id: "write-the-word",
      title: "Write the word",
      icon: "✏️",
      type: "write",
      instructions: "Write every- / some- / any- / no- + thing / body / where. The word in brackets helps you.",
      pick: "auto",
      items: [
        { prompt: "I can't see ___ (thing). It's too dark.", answer: "anything" },
        { prompt: "___ (person) is at the door.", answer: "Somebody", accept: ["Someone"] },
        { prompt: "We looked ___ (place) – in every room – but we didn't find it.", answer: "everywhere" },
        { prompt: "There's ___ (thing) in the box. It's empty.", answer: "nothing" },
        { prompt: "Has ___ (person) seen my pen?", answer: "anybody", accept: ["anyone"] },
        { prompt: "I don't want to go ___ (place) today. I'm staying at home.", answer: "anywhere" },
        { prompt: "___ (person) came to my party. I was very sad.", answer: "Nobody", accept: ["No one", "No-one"] },
        { prompt: "Let's eat ___ (thing). I'm hungry.", answer: "something" },
        { prompt: "___ (person) in the class passed the test. The teacher was happy.", answer: "Everybody", accept: ["Everyone"] },
        { prompt: "My glasses are ___ (place) in this room, but where?", answer: "somewhere" }
      ]
    },
    {
      id: "word-order",
      title: "Make a sentence",
      icon: "🧱",
      type: "order",
      instructions: "Put the words in the correct order.",
      pick: "auto",
      items: [
        { words: ["It", "might", "rain", "tomorrow."], answer: "It might rain tomorrow." },
        { words: ["She", "may", "not", "come", "today."], answer: "She may not come today." },
        { words: ["Nobody", "knows", "the", "answer."], answer: "Nobody knows the answer." },
        { words: ["I", "can't", "find", "my", "keys", "anywhere."], answer: "I can't find my keys anywhere." },
        { words: ["There", "is", "something", "in", "my", "bag."], answer: "There is something in my bag." },
        { words: ["We", "might", "go", "to", "the", "cinema."], answer: "We might go to the cinema." },
        { words: ["May", "I", "open", "the", "window?"], answer: "May I open the window?" },
        { words: ["Everybody", "likes", "ice", "cream."], answer: "Everybody likes ice cream." }
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
        { say: "I might go to the park after school, but I'm not sure.", prompt: "Is he going to the park?", options: ["Maybe.", "Yes, definitely.", "No, never."], answer: "Maybe." },
        { say: "There's nobody in the kitchen.", prompt: "Who is in the kitchen?", options: ["No one.", "Everyone.", "Mum and Dad."], answer: "No one." },
        { say: "I looked everywhere for my cat. She was under the bed.", prompt: "Where was the cat?", options: ["Under the bed.", "In the garden.", "On the sofa."], answer: "Under the bed." },
        { say: "It may snow tonight, so wear your warm coat tomorrow.", prompt: "What might happen tonight?", options: ["It might snow.", "It might rain.", "It might be hot."], answer: "It might snow." },
        { say: "Is there anything in the fridge? No, there's nothing. We need to go shopping.", prompt: "What is in the fridge?", options: ["Nothing.", "Some milk.", "Everything."], answer: "Nothing." },
        { say: "Everybody in my class has a bike, but nobody rides it to school.", prompt: "Who rides a bike to school?", options: ["Nobody.", "Everybody.", "Only Tom."], answer: "Nobody." },
        { say: "May I borrow your ruler, please? Of course, here you are.", prompt: "What does the girl want?", options: ["To borrow a ruler.", "To buy a ruler.", "To find a ruler."], answer: "To borrow a ruler." },
        { say: "We might not go to the seaside this year. It's very expensive.", prompt: "Why might they not go?", options: ["It's expensive.", "It's too cold.", "They are ill."], answer: "It's expensive." }
      ]
    },
    {
      id: "reading-emma",
      title: "Reading: Emma's party",
      icon: "🎉",
      type: "choice",
      instructions: "Read the text and answer the questions.",
      passage:
        "Next Saturday is Emma's birthday. She wants to have a party, but she isn't sure where. It might be at home, or it may be in the park if the weather is nice.\n\n" +
        "Emma has invited everybody from her class. Nobody has said no yet! Her mum is going to make something special – maybe a chocolate cake.\n\n" +
        "Emma's brother Jack is looking everywhere for a present, but he can't find anything she would like. He might buy her a book, or he might make something himself. \"There's nothing more fun than a party!\" says Emma.",
      items: [
        { prompt: "Where might the party be?", options: ["At home or in the park.", "At school in the gym.", "At the cinema in town."], answer: "At home or in the park." },
        { prompt: "Who did Emma invite?", options: ["Everybody from her class.", "Only her best friend Lucy.", "Nobody from her school."], answer: "Everybody from her class." },
        { prompt: "Has anybody said no?", options: ["No, nobody has.", "Yes, everybody has.", "Yes, her brother has."], answer: "No, nobody has." },
        { prompt: "What might Mum make?", options: ["A chocolate cake.", "A big pizza.", "Nothing special."], answer: "A chocolate cake." },
        { prompt: "What is Jack's problem?", options: ["He can't find a present.", "He is ill and stays home.", "He doesn't like parties."], answer: "He can't find a present." },
        { prompt: "What might Jack give Emma?", options: ["A book or a homemade gift.", "A new bike from the shop.", "Nothing, he has no money."], answer: "A book or a homemade gift." }
      ]
    }
  ]
});
