// Test: Unit 3 "Let's celebrate!" – mostly present perfect (I have been, I have seen …),
// plus competitions / music vocabulary and the unit's reading texts. Test date: Tuesday 24 Nov 2026.
School.register({
  id: "5-anglictina-unit3-test",
  sections: [
    {
      id: "past-participle",
      title: "Present perfect – the 3rd form",
      icon: "🔤",
      type: "choice",
      instructions: "Choose the correct past participle (3rd form).",
      pick: "auto",
      items: [
        { prompt: "I have ___ to Spain. (be)", options: ["been", "was", "be"], answer: "been", explanation: "be – was/were – been" },
        { prompt: "We have ___ this film twice. (see)", options: ["seen", "saw", "seed"], answer: "seen", explanation: "see – saw – seen" },
        { prompt: "Have you ever ___ black beans? (eat)", options: ["eaten", "ate", "eated"], answer: "eaten", explanation: "eat – ate – eaten" },
        { prompt: "She has never ___ in the sea. (swim)", options: ["swum", "swam", "swimmed"], answer: "swum", explanation: "swim – swam – swum" },
        { prompt: "Have you ever ___ juice out of a coconut? (drink)", options: ["drunk", "drank", "drinked"], answer: "drunk", explanation: "drink – drank – drunk" },
        { prompt: "Our team has ___ the match! (win)", options: ["won", "win", "winned"], answer: "won", explanation: "win – won – won" },
        { prompt: "Oh dear, I've ___ the game. (lose)", options: ["lost", "losed", "lose"], answer: "lost", explanation: "lose – lost – lost" },
        { prompt: "I've ___ four ice creams for you. (buy)", options: ["bought", "buyed", "buy"], answer: "bought", explanation: "buy – bought – bought" },
        { prompt: "I've ___ Jim's queen. (take)", options: ["taken", "took", "taked"], answer: "taken", explanation: "take – took – taken" },
        { prompt: "They've ___ a 'little' ice cream for me. (make)", options: ["made", "maked", "make"], answer: "made", explanation: "make – made – made" },
        { prompt: "You've ___ stranger things than that. (do)", options: ["done", "did", "doed"], answer: "done", explanation: "do – did – done" },
        { prompt: "I've ___ it's Rio Carnival next weekend. (hear)", options: ["heard", "hear", "heared"], answer: "heard", explanation: "hear – heard – heard" },
        { prompt: "Have you ever ___ the day at the beach? (spend)", options: ["spent", "spend", "spended"], answer: "spent", explanation: "spend – spent – spent" },
        { prompt: "He has ___ huge rocks. (carry)", options: ["carried", "carryed", "carry"], answer: "carried", explanation: "carry → carried (y → ied)." },
        { prompt: "Have you ever ___ a horse? (ride)", options: ["ridden", "rode", "rided"], answer: "ridden", explanation: "ride – rode – ridden" },
        { prompt: "I have ___ a letter to my grandma. (write)", options: ["written", "wrote", "writed"], answer: "written", explanation: "write – wrote – written" },
        { prompt: "Have you ever ___ in a plane? (fly)", options: ["flown", "flew", "flied"], answer: "flown", explanation: "fly – flew – flown" },
        { prompt: "Oh no! I've ___ my glasses. (break)", options: ["broken", "broke", "breaked"], answer: "broken", explanation: "break – broke – broken" }
      ]
    },
    {
      id: "have-has",
      title: "Present perfect – have or has?",
      icon: "✅",
      type: "choice",
      instructions: "Choose the correct form.",
      pick: "auto",
      items: [
        { prompt: "I ___ been to a carnival.", options: ["have", "has", "am"], answer: "have", explanation: "I → have." },
        { prompt: "Ivan ___ pulled a plane.", options: ["has", "have", "is"], answer: "has", explanation: "he → has." },
        { prompt: "My parents ___ been to Australia.", options: ["have", "has", "is"], answer: "have", explanation: "they → have." },
        { prompt: "Jenny ___ taken Jim's queen.", options: ["has", "have", "did"], answer: "has", explanation: "she → has." },
        { prompt: "We ___ won our match!", options: ["'ve", "'s", "'re"], answer: "'ve", explanation: "We've = We have." },
        { prompt: "He ___ gone to get the volleyball.", options: ["'s", "'ve", "'re"], answer: "'s", explanation: "He's = He has." },
        { prompt: "My dog ___ eaten my homework!", options: ["has", "have", "is"], answer: "has", explanation: "it → has." },
        { prompt: "You ___ done stranger things than that.", options: ["have", "has", "are"], answer: "have", explanation: "you → have." },
        { prompt: "She ___ seen a photo of that.", options: ["has", "have", "is"], answer: "has", explanation: "she → has." },
        { prompt: "Pablo and Jenny ___ played chess.", options: ["have", "has", "is"], answer: "have", explanation: "they → have." }
      ]
    },
    {
      id: "negatives-questions",
      title: "Questions, negatives and short answers",
      icon: "❓",
      type: "choice",
      instructions: "Choose the correct answer.",
      pick: "auto",
      items: [
        { prompt: "___ you ever danced samba?", options: ["Have", "Has", "Did"], answer: "Have", explanation: "Have you ever + 3rd form?" },
        { prompt: "___ Ivan ever lifted a castle?", options: ["Has", "Have", "Is"], answer: "Has", explanation: "Has he ever …?" },
        { prompt: "___ anyone decided which costume to wear?", options: ["Has", "Have", "Is"], answer: "Has", explanation: "anyone → has." },
        { prompt: "Have you ever been to Brazil? – Yes, I ___.", options: ["have", "did", "has"], answer: "have", explanation: "Short answer: Yes, I have." },
        { prompt: "Has Ivan pulled a plane? – Yes, he ___.", options: ["has", "have", "did"], answer: "has", explanation: "Short answer: Yes, he has." },
        { prompt: "Have the Friendly family been to Australia? – No, they ___.", options: ["haven't", "hasn't", "didn't"], answer: "haven't", explanation: "they → haven't." },
        { prompt: "Has she ever eaten mango ice cream? – No, she ___.", options: ["hasn't", "haven't", "didn't"], answer: "hasn't", explanation: "she → hasn't." },
        { prompt: "He ___ lifted a castle. Nobody can!", options: ["hasn't", "haven't", "didn't"], answer: "hasn't", explanation: "he → hasn't + 3rd form." },
        { prompt: "We've taken his queen, but we ___ finished.", options: ["haven't", "hasn't", "don't"], answer: "haven't", explanation: "we → haven't." },
        { prompt: "Which question is correct?", options: ["Have you ever seen a camel?", "Have you ever saw a camel?", "Did you ever seen a camel?"], answer: "Have you ever seen a camel?", explanation: "Have + you + ever + 3rd form (seen)." },
        { prompt: "never: which sentence is correct?", options: ["I have never been to Rio.", "I haven't never been to Rio.", "I have never be to Rio."], answer: "I have never been to Rio.", explanation: "never is already negative – no 'not'." },
        { prompt: "she: which sentence is correct?", options: ["She has seen the pyramids.", "She have seen the pyramids.", "She has saw the pyramids."], answer: "She has seen the pyramids.", explanation: "she → has + seen." }
      ]
    },
    {
      id: "ever-never-just-already-yet",
      title: "ever / never / just / already / yet",
      icon: "⏱️",
      type: "choice",
      instructions: "Choose the best word.",
      pick: "auto",
      items: [
        { prompt: "Have you ___ been to a carnival?", options: ["ever", "yet", "never"], answer: "ever", explanation: "Have you ever …? = Už jsi někdy …?" },
        { prompt: "I have ___ been to a desert. It's too hot for me.", options: ["never", "ever", "yet"], answer: "never", explanation: "never = nikdy." },
        { prompt: "I haven't seen the pyramids ___.", options: ["yet", "already", "just"], answer: "yet", explanation: "yet at the end of a negative sentence." },
        { prompt: "We've ___ finished in Brazil. We finished five minutes ago.", options: ["just", "yet", "ever"], answer: "just", explanation: "just = právě před chvílí." },
        { prompt: "I've ___ taken more than 100 photos – and it's only Monday!", options: ["already", "yet", "ever"], answer: "already", explanation: "already = už (dřív, než se čekalo)." },
        { prompt: "Have they been to Italy ___?", options: ["yet", "already", "never"], answer: "yet", explanation: "yet at the end of a question = už?" },
        { prompt: "Yes, they've ___ been there.", options: ["already", "yet", "ever"], answer: "already", explanation: "already in positive sentences." },
        { prompt: "No, they haven't been there ___.", options: ["yet", "already", "just"], answer: "yet", explanation: "Negative + yet = ještě ne." },
        { prompt: "Has anyone ___ been skiing?", options: ["ever", "yet", "never"], answer: "ever", explanation: "Has anyone ever …?" },
        { prompt: "Oh no! I've ___ won a prize.", options: ["never", "ever", "yet"], answer: "never", explanation: "never = nikdy." },
        { prompt: "Yes, I've ___ sent one to my cousin. I sent it this morning.", options: ["just", "yet", "never"], answer: "just", explanation: "just = právě." },
        { prompt: "Where does 'yet' go?", options: ["At the end of the sentence.", "Between have and the verb.", "At the start of the sentence."], answer: "At the end of the sentence.", explanation: "I haven't finished yet." }
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
        { prompt: "Where's Ivan? – He's ___ to get the volleyball.", options: ["gone", "been"], answer: "gone", explanation: "Ivan isn't here now → gone." },
        { prompt: "I've ___ to Paris three times. I loved it!", options: ["been", "gone"], answer: "been", explanation: "I went and came back → been." },
        { prompt: "Mum isn't at home. She's ___ to the shop.", options: ["gone", "been"], answer: "gone", explanation: "She is at the shop now → gone." },
        { prompt: "Have you ever ___ to a music festival?", options: ["been", "gone"], answer: "been", explanation: "Experience → been." },
        { prompt: "Grandpa has ___ to Spain. He's coming back next week.", options: ["gone", "been"], answer: "gone", explanation: "He is still in Spain → gone." },
        { prompt: "The Friendly family have ___ to Australia. Now they're home again.", options: ["been", "gone"], answer: "been", explanation: "They are back → been." }
      ]
    },
    {
      id: "perfect-or-past",
      title: "Present perfect or past simple?",
      icon: "📅",
      type: "choice",
      instructions: "When we say WHEN (yesterday, last year, in 2020), we use the past simple.",
      pick: "auto",
      items: [
        { prompt: "I ___ to Brazil last summer.", options: ["went", "have been", "have gone"], answer: "went", explanation: "last summer → past simple." },
        { prompt: "I ___ to Brazil. It's a beautiful country.", options: ["have been", "went last", "am be"], answer: "have been", explanation: "Experience, no time → present perfect." },
        { prompt: "We ___ the match yesterday.", options: ["won", "have won", "has won"], answer: "won", explanation: "yesterday → past simple." },
        { prompt: "Have you ever ___ a castle?", options: ["seen", "saw", "see"], answer: "seen", explanation: "Have you ever + 3rd form." },
        { prompt: "She ___ samba two years ago.", options: ["danced", "has danced", "have danced"], answer: "danced", explanation: "two years ago → past simple." },
        { prompt: "My brother ___ never eaten sushi.", options: ["has", "did", "was"], answer: "has", explanation: "never + present perfect." },
        { prompt: "on Monday: which sentence is correct?", options: ["I saw that film on Monday.", "I have seen that film on Monday.", "I have saw that film on Monday."], answer: "I saw that film on Monday.", explanation: "on Monday → past simple." },
        { prompt: "no time word: which sentence is correct?", options: ["I have been to a concert.", "I have been to a concert yesterday.", "I was to a concert ever."], answer: "I have been to a concert.", explanation: "No time word → present perfect." }
      ]
    },
    {
      id: "write-present-perfect",
      title: "Write the present perfect",
      icon: "✏️",
      type: "write",
      instructions: "Write have / has + the 3rd form of the verb in brackets. You can use short forms ('ve, 's).",
      pick: "auto",
      items: [
        { prompt: "I ___ (see) a samba parade.", answer: "have seen", accept: ["'ve seen"] },
        { prompt: "She ___ (be) to Brazil.", answer: "has been", accept: ["'s been"] },
        { prompt: "We ___ (win) the quiz!", answer: "have won", accept: ["'ve won"] },
        { prompt: "Ivan ___ (lift) a sofa with four people on it.", answer: "has lifted", accept: ["'s lifted"] },
        { prompt: "They ___ (eat) black beans.", answer: "have eaten", accept: ["'ve eaten"] },
        { prompt: "My sister ___ (swim) in a lake.", answer: "has swum", accept: ["'s swum"] },
        { prompt: "I ___ (not / finish) the puzzle yet.", answer: "haven't finished", accept: ["have not finished"] },
        { prompt: "He ___ (not / lift) a castle.", answer: "hasn't lifted", accept: ["has not lifted"] },
        { prompt: "My friends aren't here. They ___ (go) to the concert.", answer: "have gone", accept: ["'ve gone"] },
        { prompt: "I have never ___ (be) to a carnival.", answer: "been" },
        { prompt: "Have you ever ___ (drink) coconut juice?", answer: "drunk" },
        { prompt: "We've ___ (buy) tickets for the concert.", answer: "bought" }
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
        { words: ["Have", "you", "ever", "been", "to", "Rio?"], answer: "Have you ever been to Rio?" },
        { words: ["I", "have", "never", "seen", "a", "castle."], answer: "I have never seen a castle." },
        { words: ["She", "has", "just", "won", "a", "prize."], answer: "She has just won a prize." },
        { words: ["We", "haven't", "finished", "the", "game", "yet."], answer: "We haven't finished the game yet." },
        { words: ["Has", "Ivan", "ever", "lifted", "a", "car?"], answer: "Has Ivan ever lifted a car?" },
        { words: ["I've", "already", "taken", "100", "photos."], answer: "I've already taken 100 photos." },
        { words: ["They", "have", "been", "to", "a", "festival."], answer: "They have been to a festival." },
        { words: ["He's", "gone", "to", "get", "the", "ball."], answer: "He's gone to get the ball." }
      ]
    },
    {
      id: "vocabulary",
      title: "Vocabulary: competitions, music and festivals",
      icon: "🏆",
      type: "match",
      instructions: "Choose the word that matches the meaning.",
      pick: "auto",
      items: [
        { prompt: "a group of players who play together", answer: "team" },
        { prompt: "a big place where people watch sport", answer: "stadium" },
        { prompt: "the number of points in a game", answer: "score" },
        { prompt: "a game between two teams", answer: "match" },
        { prompt: "something you get when you win", answer: "prize" },
        { prompt: "a game with questions", answer: "quiz" },
        { prompt: "a board game with a king and a queen", answer: "chess" },
        { prompt: "a competition: who is the fastest?", answer: "race" },
        { prompt: "the person who wins", answer: "winner" },
        { prompt: "people who play music", answer: "musicians" },
        { prompt: "a show where musicians play music for people", answer: "concert" },
        { prompt: "the place where musicians stand at a concert", answer: "stage" },
        { prompt: "an instrument with four strings that you play with a bow", answer: "violin" },
        { prompt: "an instrument that you hit", answer: "drums" },
        { prompt: "a big celebration, often with music", answer: "festival" },
        { prompt: "the music of a song that you can whistle", answer: "tune" }
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
        { say: "I've been to Italy and Spain, but I haven't been to Greece yet.", prompt: "Which country hasn't she been to?", options: ["Greece", "Italy", "Spain"], answer: "Greece" },
        { say: "Tom isn't here. He's gone to the stadium to watch the match.", prompt: "Where is Tom now?", options: ["At the stadium.", "At home.", "At school."], answer: "At the stadium." },
        { say: "Have you ever eaten black beans? Yes, I have. I ate them in Brazil.", prompt: "Has the boy eaten black beans?", options: ["Yes, he has.", "No, he hasn't.", "We don't know."], answer: "Yes, he has." },
        { say: "Our team has won three matches, but we haven't won a prize yet.", prompt: "What hasn't the team won yet?", options: ["A prize.", "A match.", "A race."], answer: "A prize." },
        { say: "I've never played the violin, but I've played the drums at a concert.", prompt: "Which instrument has she played?", options: ["The drums.", "The violin.", "The guitar."], answer: "The drums." },
        { say: "I've just finished my puzzle. It took me two hours!", prompt: "When did he finish the puzzle?", options: ["A moment ago.", "Last week.", "He hasn't finished."], answer: "A moment ago." },
        { say: "My grandma has been to a lot of festivals. She has danced samba at the Rio Carnival.", prompt: "What has Grandma done?", options: ["Danced samba in Rio.", "Played chess in Rio.", "Won a race in Rio."], answer: "Danced samba in Rio." },
        { say: "Have you seen my flag? I've looked everywhere, but I haven't found it.", prompt: "What is the problem?", options: ["She can't find her flag.", "She has lost her drum.", "She hasn't got a ticket."], answer: "She can't find her flag." },
        { say: "We went to a rock concert last Saturday. It was amazing!", prompt: "When did they go to the concert?", options: ["Last Saturday.", "Yesterday.", "They haven't been."], answer: "Last Saturday." },
        { say: "Has anyone ever swum in the sea in winter? No, nobody has. It's too cold!", prompt: "Who has swum in the sea in winter?", options: ["Nobody.", "Everybody.", "Only one boy."], answer: "Nobody." }
      ]
    },
    {
      id: "reading-music-history",
      title: "Reading: Making music history",
      icon: "🎸",
      type: "choice",
      instructions: "Read the text and answer the questions.",
      passage:
        "The guitar is one of the most popular musical instruments in the world. Many different cultures have played instruments like the guitar for over 3,000 years. The oldest instrument that we can see today comes from Ancient Egypt. You can see this guitar in a museum in Cairo. It belonged to a singer who sang for the Egyptian queen Hatshepsut. This type of guitar had a long neck and only three strings.\n\n" +
        "The lute is also an ancient instrument similar to a guitar, but it has a short neck and a body like half a pear. It usually had more strings than a guitar and they were in pairs. From 1100–1500, travelling singers and story tellers played the lute to accompany their songs.\n\n" +
        "Guitars sometimes had pairs of strings like the lute, but the guitar changed over time to use single strings. People used guitars with six single strings for the first time in the 1600s in Italy, but the most important change happened in the 1850s. The Spanish guitar maker Antonio Torres Jurado made the guitar's body bigger. His idea made the sound of the guitar louder and better.\n\n" +
        "The first electric guitars appeared in the 1930s. The electric guitar has a solid body and can make many different sounds.",
      items: [
        { prompt: "Where is the oldest guitar from?", options: ["Ancient Egypt", "Ancient Greece", "Italy"], answer: "Ancient Egypt" },
        { prompt: "Where can you see it today?", options: ["In a museum in Cairo", "In a museum in Rome", "In a shop in Spain"], answer: "In a museum in Cairo" },
        { prompt: "How many strings did the oldest guitar have?", options: ["three", "six", "twelve"], answer: "three" },
        { prompt: "What does the body of a lute look like?", options: ["half a pear", "a big box", "a long stick"], answer: "half a pear" },
        { prompt: "When did people first play guitars with six single strings?", options: ["In the 1600s", "In the 1850s", "In the 1930s"], answer: "In the 1600s" },
        { prompt: "What did Antonio Torres Jurado do?", options: ["Made the body bigger.", "Made the first electric guitar.", "Added three more strings."], answer: "Made the body bigger." },
        { prompt: "When did the first electric guitars appear?", options: ["In the 1930s", "In the 1850s", "In the 1100s"], answer: "In the 1930s" }
      ]
    },
    {
      id: "reading-rebeca",
      title: "Reading: The local football hero",
      icon: "⚽",
      type: "choice",
      instructions: "Read the text and answer the questions.",
      passage:
        "My name is Rebeca and I'm 11. I'm from beautiful Brazil! But my family live in a poor area, and life isn't easy. My parents work hard and so my brother and I can go to school, and we always come straight home after school to help with the housework. But I have a passion … football! And I want to tell you how football has changed my life.\n\n" +
        "My dad wanted my big brother to be a professional football player, but he didn't like training. I loved football and when I played I felt happy and I forgot about everything around me. My mum said, 'Football isn't for girls.' The boys at school didn't want to play with a girl either, but when they saw I was good, they picked me for their team.\n\n" +
        "One day a teacher told me about a football team just for girls. They were amazing. They told me that they were preparing for a competition in March. I really wanted to be part of the team and I decided to try my hardest.\n\n" +
        "When I told my dad and brother, they were very happy. My mum still didn't like the idea. 'It isn't going to be easy for you because football is a boy's sport,' she said. But she said nothing after that, and my dad and brother trained with me every day for six months. Finally, in February the coach told us which players were in the team for the competition. When I heard my name, I jumped in the air and I screamed with excitement.\n\n" +
        "Our team travelled to Rio de Janeiro in March and we won the competition – it was amazing! Since then we've won a lot more matches, but more importantly, I've made lots of new friends and I've become more confident about myself.\n\n" +
        "When I get older, I want to be a professional football player. Lots of my football idols have learnt English. For me, it's important to speak English just like them and study hard so I can travel round the world and talk to people from different countries.",
      items: [
        { prompt: "How old is Rebeca?", options: ["11", "12", "10"], answer: "11" },
        { prompt: "Who didn't think Rebeca should play football?", options: ["Her mum", "Her dad", "Her brother"], answer: "Her mum" },
        { prompt: "How did football make Rebeca feel?", options: ["Happy", "Tired", "Bored"], answer: "Happy" },
        { prompt: "Who told Rebeca about the girls' team?", options: ["A teacher", "Her mum", "A coach"], answer: "A teacher" },
        { prompt: "Who trained with her every day for six months?", options: ["Her dad and brother", "Her mum and dad", "The boys at school"], answer: "Her dad and brother" },
        { prompt: "Where did the team win the competition?", options: ["In Rio de Janeiro", "In São Paulo", "At her school"], answer: "In Rio de Janeiro" },
        { prompt: "What has Rebeca done since the competition? (present perfect!)", options: ["She's made new friends.", "She's stopped playing.", "She's moved to England."], answer: "She's made new friends." },
        { prompt: "Why does Rebeca want to learn English?", options: ["To talk to people abroad.", "Because her mum wants it.", "To become a teacher."], answer: "To talk to people abroad." }
      ]
    }
  ]
});
