// Test: present perfect only (I have been, I have seen …) – extra practice for the Unit 3 test.
School.register({
  id: "5-anglictina-unit3-present-perfect-test",
  sections: [
    {
      id: "past-participle",
      title: "The 3rd form",
      icon: "🔤",
      type: "choice",
      instructions: "Choose the correct past participle (3rd form).",
      pick: "auto",
      items: [
        { prompt: "My uncle has ___ to Japan. (be)", options: ["been", "was", "be"], answer: "been", explanation: "be – was/were – been" },
        { prompt: "Have you ___ my new bike? (see)", options: ["seen", "saw", "seed"], answer: "seen", explanation: "see – saw – seen" },
        { prompt: "I've ___ all the pizza. Sorry! (eat)", options: ["eaten", "ate", "eated"], answer: "eaten", explanation: "eat – ate – eaten" },
        { prompt: "We have ___ across the river. (swim)", options: ["swum", "swam", "swimmed"], answer: "swum", explanation: "swim – swam – swum" },
        { prompt: "He has ___ all the milk. (drink)", options: ["drunk", "drank", "drinked"], answer: "drunk", explanation: "drink – drank – drunk" },
        { prompt: "Have you ever ___ a competition? (win)", options: ["won", "win", "winned"], answer: "won", explanation: "win – won – won" },
        { prompt: "I've ___ my keys. (lose)", options: ["lost", "losed", "lose"], answer: "lost", explanation: "lose – lost – lost" },
        { prompt: "Dad has ___ a new car. (buy)", options: ["bought", "buyed", "buy"], answer: "bought", explanation: "buy – bought – bought" },
        { prompt: "Who has ___ my pencil? (take)", options: ["taken", "took", "taked"], answer: "taken", explanation: "take – took – taken" },
        { prompt: "Grandma has ___ a cake for us. (make)", options: ["made", "maked", "make"], answer: "made", explanation: "make – made – made" },
        { prompt: "Have you ___ your homework? (do)", options: ["done", "did", "doed"], answer: "done", explanation: "do – did – done" },
        { prompt: "I've never ___ this song before. (hear)", options: ["heard", "hear", "heared"], answer: "heard", explanation: "hear – heard – heard" },
        { prompt: "She has ___ a story about a dragon. (write)", options: ["written", "wrote", "writed"], answer: "written", explanation: "write – wrote – written" },
        { prompt: "Have you ever ___ a camel? (ride)", options: ["ridden", "rode", "rided"], answer: "ridden", explanation: "ride – rode – ridden" },
        { prompt: "The bird has ___ away. (fly)", options: ["flown", "flew", "flied"], answer: "flown", explanation: "fly – flew – flown" },
        { prompt: "Who has ___ the window? (break)", options: ["broken", "broke", "breaked"], answer: "broken", explanation: "break – broke – broken" },
        { prompt: "We've ___ this song at school. (sing)", options: ["sung", "sang", "singed"], answer: "sung", explanation: "sing – sang – sung" },
        { prompt: "I've ___ a famous footballer! (meet)", options: ["met", "meeted", "meet"], answer: "met", explanation: "meet – met – met" },
        { prompt: "Mum has ___ me a present. (give)", options: ["given", "gave", "gived"], answer: "given", explanation: "give – gave – given" },
        { prompt: "Have you ___ this book? (read)", options: ["read", "readed", "red"], answer: "read", explanation: "read – read – read (vyslov 'red')" },
        { prompt: "They have ___ in a big city. (live)", options: ["lived", "live", "livd"], answer: "lived", explanation: "Regular verb: live → lived." },
        { prompt: "He has ___ the door. (open)", options: ["opened", "open", "opend"], answer: "opened", explanation: "Regular verb: open → opened." },
        { prompt: "We've ___ the bus. Let's walk. (miss)", options: ["missed", "miss", "mist"], answer: "missed", explanation: "Regular verb: miss → missed." },
        { prompt: "She has ___ the tree. (climb)", options: ["climbed", "climb", "clumb"], answer: "climbed", explanation: "Regular verb: climb → climbed." }
      ]
    },
    {
      id: "have-has",
      title: "have or has?",
      icon: "✅",
      type: "choice",
      instructions: "Choose the correct form.",
      pick: "auto",
      items: [
        { prompt: "My friends ___ been to London.", options: ["have", "has", "are"], answer: "have", explanation: "they → have." },
        { prompt: "Our teacher ___ seen a whale.", options: ["has", "have", "is"], answer: "has", explanation: "he / she → has." },
        { prompt: "I ___ never flown in a plane.", options: ["have", "has", "am"], answer: "have", explanation: "I → have." },
        { prompt: "The cat ___ eaten its food.", options: ["has", "have", "is"], answer: "has", explanation: "it → has." },
        { prompt: "We ___ finished the puzzle!", options: ["have", "has", "are"], answer: "have", explanation: "we → have." },
        { prompt: "Everybody ___ heard the news.", options: ["has", "have", "are"], answer: "has", explanation: "everybody → has (singular)." },
        { prompt: "You ___ grown a lot!", options: ["have", "has", "are"], answer: "have", explanation: "you → have." },
        { prompt: "My brother and I ___ climbed a mountain.", options: ["have", "has", "is"], answer: "have", explanation: "we → have." },
        { prompt: "She ___ = She has", options: ["'s", "'ve", "'re"], answer: "'s", explanation: "has → 's." },
        { prompt: "They ___ = They have", options: ["'ve", "'s", "'re"], answer: "'ve", explanation: "have → 've." }
      ]
    },
    {
      id: "questions-short-answers",
      title: "Questions and short answers",
      icon: "❓",
      type: "choice",
      instructions: "Choose the correct answer.",
      pick: "auto",
      items: [
        { prompt: "___ you ever been to a zoo?", options: ["Have", "Has", "Did"], answer: "Have", explanation: "Have you ever …?" },
        { prompt: "___ your sister ever played the violin?", options: ["Has", "Have", "Does"], answer: "Has", explanation: "your sister = she → Has." },
        { prompt: "___ they finished the race?", options: ["Have", "Has", "Are"], answer: "Have", explanation: "they → Have." },
        { prompt: "Have you ever met a famous person? – Yes, I ___.", options: ["have", "did", "met"], answer: "have", explanation: "Yes, I have." },
        { prompt: "Has your dad ever been to Africa? – No, he ___.", options: ["hasn't", "haven't", "didn't"], answer: "hasn't", explanation: "he → hasn't." },
        { prompt: "Have your parents seen the film? – Yes, they ___.", options: ["have", "has", "did"], answer: "have", explanation: "they → have." },
        { prompt: "Has the dog eaten its dinner? – No, it ___.", options: ["hasn't", "haven't", "isn't"], answer: "hasn't", explanation: "it → hasn't." },
        { prompt: "Have you and Tom won a prize? – Yes, we ___.", options: ["have", "has", "did"], answer: "have", explanation: "we → have." },
        { prompt: "I ___ seen that film. Is it good?", options: ["haven't", "hasn't", "didn't"], answer: "haven't", explanation: "I → haven't." },
        { prompt: "My grandpa ___ used a computer. He doesn't like them.", options: ["hasn't", "haven't", "doesn't"], answer: "hasn't", explanation: "he → hasn't." },
        { prompt: "Correct question?", options: ["Has he ever eaten sushi?", "Has he ever ate sushi?", "Have he ever eaten sushi?"], answer: "Has he ever eaten sushi?", explanation: "Has + he + ever + 3rd form." },
        { prompt: "Correct negative?", options: ["We haven't been to Rome.", "We hasn't been to Rome.", "We haven't be to Rome."], answer: "We haven't been to Rome.", explanation: "we → haven't + been." },
        { prompt: "Correct sentence with never?", options: ["She has never seen snow.", "She hasn't never seen snow.", "She has never saw snow."], answer: "She has never seen snow.", explanation: "never is already negative – no 'not'." }
      ]
    },
    {
      id: "time-words",
      title: "ever / never / just / already / yet",
      icon: "⏱️",
      type: "choice",
      instructions: "Choose the best word.",
      pick: "auto",
      items: [
        { prompt: "Have you ___ eaten snails?", options: ["ever", "yet", "never"], answer: "ever", explanation: "Have you ever …? = Už jsi někdy …?" },
        { prompt: "I've ___ been on a boat. I'd like to try it.", options: ["never", "ever", "yet"], answer: "never", explanation: "never = nikdy." },
        { prompt: "Is the film good? – I don't know. I haven't seen it ___.", options: ["yet", "already", "just"], answer: "yet", explanation: "Negative + yet at the end." },
        { prompt: "Look! It has ___ started to snow.", options: ["just", "yet", "ever"], answer: "just", explanation: "just = právě teď / před chvílí." },
        { prompt: "Do you want to read this book? – No, thanks. I've ___ read it.", options: ["already", "yet", "ever"], answer: "already", explanation: "already = už." },
        { prompt: "Have you done your homework ___?", options: ["yet", "already", "never"], answer: "yet", explanation: "Question + yet at the end = už?" },
        { prompt: "The bus has ___ left. We're too late!", options: ["just", "yet", "ever"], answer: "just", explanation: "just = právě." },
        { prompt: "She has ___ won a race. She's not very fast.", options: ["never", "ever", "yet"], answer: "never", explanation: "never = nikdy." },
        { prompt: "We've ___ packed our bags. We're ready to go!", options: ["already", "yet", "ever"], answer: "already", explanation: "already = už." },
        { prompt: "Has the parcel arrived ___?", options: ["yet", "just", "already"], answer: "yet", explanation: "Question + yet." },
        { prompt: "Where does 'just' go?", options: ["Between have and the 3rd form.", "At the end of the sentence.", "At the start of the sentence."], answer: "Between have and the 3rd form.", explanation: "I have just finished." },
        { prompt: "Which word do we use in negatives and questions, at the end?", options: ["yet", "just", "already"], answer: "yet", explanation: "I haven't finished yet. Have you finished yet?" }
      ]
    },
    {
      id: "been-gone",
      title: "been or gone?",
      icon: "🧳",
      type: "choice",
      instructions: "Choose been (went and came back) or gone (went and is still there).",
      pick: "auto",
      items: [
        { prompt: "Where's Dad? – He's ___ to work.", options: ["gone", "been"], answer: "gone", explanation: "Dad isn't here → gone." },
        { prompt: "I've ___ to the dentist. My teeth are OK!", options: ["been", "gone"], answer: "been", explanation: "I'm back → been." },
        { prompt: "Have you ever ___ to Prague Castle?", options: ["been", "gone"], answer: "been", explanation: "Experience → been." },
        { prompt: "Lucy can't play. She's ___ to her piano lesson.", options: ["gone", "been"], answer: "gone", explanation: "She is at the lesson now → gone." },
        { prompt: "We've ___ to the beach every day this week.", options: ["been", "gone"], answer: "been", explanation: "Went and came back → been." },
        { prompt: "The children aren't here. They've ___ home.", options: ["gone", "been"], answer: "gone", explanation: "They are at home now → gone." },
        { prompt: "My aunt has ___ to Canada three times.", options: ["been", "gone"], answer: "been", explanation: "Experience → been." },
        { prompt: "Sorry, Mr Brown has ___ out. Can you call back later?", options: ["gone", "been"], answer: "gone", explanation: "He isn't here now → gone." }
      ]
    },
    {
      id: "perfect-or-past",
      title: "Present perfect or past simple?",
      icon: "📅",
      type: "choice",
      instructions: "When we say WHEN (yesterday, last week, in 2020, ago), we use the past simple.",
      pick: "auto",
      items: [
        { prompt: "I ___ a dolphin last summer.", options: ["saw", "have seen", "have saw"], answer: "saw", explanation: "last summer → past simple." },
        { prompt: "I ___ a dolphin. It was amazing!", options: ["have seen", "has seen", "have saw"], answer: "have seen", explanation: "Experience, no time → present perfect." },
        { prompt: "She ___ her leg two weeks ago.", options: ["broke", "has broken", "have broken"], answer: "broke", explanation: "two weeks ago → past simple." },
        { prompt: "Have you ever ___ a horse?", options: ["ridden", "rode", "ride"], answer: "ridden", explanation: "Have you ever + 3rd form." },
        { prompt: "We ___ to Italy in 2024.", options: ["went", "have been", "have gone"], answer: "went", explanation: "in 2024 → past simple." },
        { prompt: "We ___ to Italy twice.", options: ["have been", "went in", "are been"], answer: "have been", explanation: "Experience (how many times) → present perfect." },
        { prompt: "Did you see the match yesterday? – No, I ___.", options: ["didn't", "haven't", "hasn't"], answer: "didn't", explanation: "Question with did → answer with didn't." },
        { prompt: "Have you ever seen a match at a stadium? – No, I ___.", options: ["haven't", "didn't", "hasn't"], answer: "haven't", explanation: "Question with have → answer with haven't." },
        { prompt: "yesterday: which sentence is wrong?", options: ["I have met him yesterday.", "I met him yesterday.", "I have met him before."], answer: "I have met him yesterday.", explanation: "yesterday → past simple: I met him yesterday." },
        { prompt: "last week: which sentence is wrong?", options: ["She has lost her bag last week.", "She lost her bag last week.", "She has lost her bag."], answer: "She has lost her bag last week.", explanation: "last week → past simple." }
      ]
    },
    {
      id: "write-present-perfect",
      title: "Write the present perfect",
      icon: "✏️",
      type: "write",
      instructions: "Write have / has + the 3rd form of the verb in brackets. You can use short forms ('ve, 's, haven't, hasn't).",
      pick: "auto",
      items: [
        { prompt: "I ___ (be) to the seaside.", answer: "have been", accept: ["'ve been"] },
        { prompt: "My mum ___ (see) the new film.", answer: "has seen", accept: ["'s seen"] },
        { prompt: "We ___ (eat) Chinese food.", answer: "have eaten", accept: ["'ve eaten"] },
        { prompt: "He ___ (win) three medals.", answer: "has won", accept: ["'s won"] },
        { prompt: "They ___ (buy) a new house.", answer: "have bought", accept: ["'ve bought"] },
        { prompt: "She ___ (write) a letter.", answer: "has written", accept: ["'s written"] },
        { prompt: "You ___ (break) my pencil!", answer: "have broken", accept: ["'ve broken"] },
        { prompt: "I ___ (not / finish) my book yet.", answer: "haven't finished", accept: ["have not finished"] },
        { prompt: "Tom ___ (not / be) to Spain.", answer: "hasn't been", accept: ["has not been"] },
        { prompt: "We ___ (never / swim) in a lake.", answer: "have never swum", accept: ["'ve never swum"] },
        { prompt: "My sister ___ (just / go) to bed.", answer: "has just gone", accept: ["'s just gone"] },
        { prompt: "I ___ (already / do) my homework.", answer: "have already done", accept: ["'ve already done"] },
        { prompt: "Have you ever ___ (fly) in a helicopter?", answer: "flown" },
        { prompt: "Has she ever ___ (ride) a camel?", answer: "ridden" }
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
        { words: ["Have", "you", "ever", "seen", "a", "whale?"], answer: "Have you ever seen a whale?" },
        { words: ["She", "has", "never", "been", "to", "Paris."], answer: "She has never been to Paris." },
        { words: ["I", "have", "just", "eaten", "my", "lunch."], answer: "I have just eaten my lunch." },
        { words: ["They", "haven't", "arrived", "yet."], answer: "They haven't arrived yet." },
        { words: ["Has", "your", "brother", "ever", "won", "a", "prize?"], answer: "Has your brother ever won a prize?" },
        { words: ["We've", "already", "seen", "this", "film."], answer: "We've already seen this film." },
        { words: ["My", "dad", "has", "gone", "to", "work."], answer: "My dad has gone to work." },
        { words: ["I've", "been", "to", "London", "twice."], answer: "I've been to London twice." }
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
        { say: "I've been to France and Germany, but I've never been to England.", prompt: "Where has he never been?", options: ["England", "France", "Germany"], answer: "England" },
        { say: "Where's Anna? She's gone to the library to get a book.", prompt: "Where is Anna now?", options: ["At the library.", "At home.", "At the park."], answer: "At the library." },
        { say: "Have you finished your homework yet? No, not yet. I've only done the maths.", prompt: "What has he done?", options: ["The maths homework.", "All his homework.", "Nothing at all."], answer: "The maths homework." },
        { say: "My cousin has seen a bear in the mountains. I haven't seen one yet.", prompt: "Who has seen a bear?", options: ["His cousin.", "He has.", "Nobody."], answer: "His cousin." },
        { say: "I've just made some pancakes. Would you like one?", prompt: "When did she make the pancakes?", options: ["A moment ago.", "Yesterday.", "Last week."], answer: "A moment ago." },
        { say: "We've already bought the tickets, so we can go to the concert tonight.", prompt: "Have they got the tickets?", options: ["Yes, they have.", "No, they haven't.", "Not yet."], answer: "Yes, they have." },
        { say: "Have you ever ridden a horse? No, I haven't, but I've ridden a camel in Egypt.", prompt: "What animal has she ridden?", options: ["A camel.", "A horse.", "An elephant."], answer: "A camel." },
        { say: "Has anyone seen my phone? I've lost it again!", prompt: "What has happened?", options: ["He has lost his phone.", "He has broken his phone.", "He has bought a phone."], answer: "He has lost his phone." },
        { say: "My grandma has never used a computer, but she has written a lot of letters.", prompt: "What has Grandma never done?", options: ["Used a computer.", "Written a letter.", "Read a book."], answer: "Used a computer." },
        { say: "I went to Rome last year. I've been there three times now.", prompt: "How many times has he been to Rome?", options: ["Three times.", "Once.", "Twice."], answer: "Three times." }
      ]
    },
    {
      id: "reading-max",
      title: "Reading: Max's list",
      icon: "📋",
      type: "choice",
      instructions: "Read the text and answer the questions.",
      passage:
        "Hi! I'm Max and I'm 11. I've made a list of things I want to do before I'm 15. I've already done some of them!\n\n" +
        "I've been to the mountains and I've climbed a big hill with my dad. I've also swum in the sea – in Croatia last summer. It was cold, but fun!\n\n" +
        "I haven't flown in a plane yet. My sister has flown to London, but I've never been on a plane. I haven't seen a whale yet, either. Whales are my favourite animals.\n\n" +
        "Last week I made a cake for my mum's birthday. It was my first cake! So now I've made a cake, too. Next on my list: learning to play the drums. I've just bought some drumsticks!",
      items: [
        { prompt: "Has Max been to the mountains?", options: ["Yes, he has.", "No, he hasn't.", "Not yet."], answer: "Yes, he has." },
        { prompt: "Where has Max swum in the sea?", options: ["In Croatia", "In London", "In Italy"], answer: "In Croatia" },
        { prompt: "Who has flown in a plane?", options: ["His sister", "Max", "His dad"], answer: "His sister" },
        { prompt: "What hasn't Max seen yet?", options: ["A whale", "The sea", "A hill"], answer: "A whale" },
        { prompt: "When did Max make a cake?", options: ["Last week", "Last summer", "Yesterday"], answer: "Last week", explanation: "last week → past simple: I made a cake." },
        { prompt: "What has Max just bought?", options: ["Drumsticks", "A drum", "A cake"], answer: "Drumsticks" }
      ]
    }
  ]
});
