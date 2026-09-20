// Procvičování pro 5. třídu: čtení not v houslovém i basovém klíči,
// délky a pomlky, půltóny a posuvky, stupnice s předznamenáním, tempa.
(() => {
  const treble = (items) => ({ clef: "houslovy", items });
  const bass = (items) => ({ clef: "basovy", items });
  const q = (note) => ({ note, dur: "q" });

  // Opakované noty dostanou jinou délku, aby měly vlastní klíč pro sledování chyb.
  const read = (clef, note, options, hint, dur) => ({
    prompt: clef === "basovy" ? "Jaká je to nota? (basový klíč)" : "Jaká je to nota? (houslový klíč)",
    staff: { clef, items: [{ note, dur: dur || "q" }] },
    options,
    answer: note,
    explanation: hint
  });

  const melody = (clef, notes, options) => ({
    prompt: "Které noty jsou zapsané?",
    staff: { clef, items: notes.split(" ").map(q) },
    options,
    answer: notes,
    explanation: "Čti zleva doprava: " + notes + "."
  });

  School.register({
    id: "5-hudebni-cteni-not",
    sections: [
      {
        id: "houslovy-klic",
        title: "Čtení not – houslový klíč",
        icon: "🎼",
        type: "choice",
        instructions: "Noty na linkách zdola: e1 g1 h1 d2 f2. V mezerách: f1 a1 c2 e2.",
        pick: "auto",
        items: [
          read("houslovy", "c1", ["c1", "d1", "e1", "h1"], "c1 leží na pomocné lince pod osnovou."),
          read("houslovy", "e1", ["c1", "e1", "g1", "h1"], "e1 sedí na první lince zdola."),
          read("houslovy", "f1", ["e1", "f1", "g1", "a1"], "f1 je v první mezeře."),
          read("houslovy", "g1", ["e1", "g1", "h1", "d2"], "g1 sedí na druhé lince – tam se točí houslový klíč."),
          read("houslovy", "a1", ["g1", "a1", "h1", "c2"], "a1 je ve druhé mezeře."),
          read("houslovy", "h1", ["a1", "h1", "c2", "d2"], "h1 sedí na prostřední lince."),
          read("houslovy", "c2", ["h1", "c2", "d2", "e2"], "c2 je ve třetí mezeře."),
          read("houslovy", "d2", ["c2", "d2", "e2", "f2"], "d2 sedí na čtvrté lince."),
          read("houslovy", "e2", ["d2", "e2", "f2", "g2"], "e2 je ve čtvrté mezeře."),
          read("houslovy", "f2", ["e2", "f2", "g2", "a2"], "f2 sedí na páté lince."),
          read("houslovy", "g2", ["f2", "g2", "a2", "e2"], "g2 leží v mezeře nad osnovou."),
          read("houslovy", "a2", ["g2", "a2", "h1", "c2"], "a2 sedí na první pomocné lince nad osnovou."),
          read("houslovy", "h", ["h", "c1", "d1", "h1"], "Malé h visí pod pomocnou linkou c1."),
          read("houslovy", "a", ["a", "h", "c1", "a1"], "Malé a sedí na druhé pomocné lince pod osnovou."),
          read("houslovy", "d1", ["c1", "d1", "e1", "f1"], "d1 visí pod první linkou."),
          read("houslovy", "h1", ["g1", "h1", "d2", "f2"], "h1 sedí na třetí lince zdola.", "h")
        ]
      },
      {
        id: "basovy-klic",
        title: "Čtení not – basový klíč",
        icon: "🎻",
        type: "choice",
        instructions: "Noty na linkách zdola: G H d f a. V mezerách: A c e g.",
        pick: "auto",
        items: [
          read("basovy", "G", ["G", "H", "d", "f"], "G sedí na první lince zdola."),
          read("basovy", "A", ["G", "A", "H", "c"], "A je v první mezeře zdola."),
          read("basovy", "H", ["A", "H", "c", "d"], "H sedí na druhé lince zdola."),
          read("basovy", "c", ["H", "c", "d", "e"], "c je ve druhé mezeře."),
          read("basovy", "d", ["c", "d", "e", "f"], "d sedí na prostřední lince."),
          read("basovy", "e", ["d", "e", "f", "g"], "e je ve třetí mezeře."),
          read("basovy", "f", ["e", "f", "g", "a"], "f sedí na čtvrté lince – mezi tečkami basového klíče."),
          read("basovy", "g", ["f", "g", "a", "c1"], "g je ve čtvrté mezeře."),
          read("basovy", "a", ["g", "a", "H", "c1"], "a sedí na páté lince."),
          read("basovy", "c1", ["a", "H", "c", "c1"], "c1 leží na pomocné lince nad osnovou."),
          read("basovy", "C", ["C", "G", "c", "H"], "C leží na pomocné lince pod osnovou."),
          read("basovy", "E", ["C", "D", "E", "G"], "E visí pod první linkou."),
          read("basovy", "F", ["E", "F", "G", "A"], "F je v mezeře pod první linkou."),
          read("basovy", "d", ["H", "d", "f", "a"], "d sedí na prostřední (třetí) lince.", "h"),
          read("basovy", "f", ["d", "f", "g", "c1"], "f sedí na čtvrté lince zdola.", "h"),
          read("basovy", "H", ["G", "H", "d", "c1"], "H sedí na druhé lince zdola.", "h")
        ]
      },
      {
        id: "melodie",
        title: "Čtení melodie",
        icon: "🎶",
        type: "choice",
        instructions: "Nejdřív se podívej na klíč, pak čti noty zleva doprava.",
        pick: "auto",
        items: [
          melody("houslovy", "c1 e1 g1", ["c1 e1 g1", "c1 d1 e1", "e1 g1 h1", "d1 f1 a1"]),
          melody("houslovy", "g1 h1 d2", ["g1 h1 d2", "g1 a1 h1", "f1 a1 c2", "h1 d2 f2"]),
          melody("houslovy", "f2 e2 d2", ["f2 e2 d2", "d2 e2 f2", "e2 d2 c2", "f2 d2 h1"]),
          melody("houslovy", "a1 c2 e2", ["a1 c2 e2", "g1 h1 d2", "a1 h1 c2", "f1 a1 c2"]),
          melody("basovy", "G H d", ["G H d", "G A H", "H d f", "A c e"]),
          melody("basovy", "c e g", ["c e g", "d f a", "c d e", "H d f"]),
          melody("basovy", "f d H", ["f d H", "H d f", "g e c", "a f d"]),
          melody("basovy", "A c e", ["A c e", "G H d", "c e g", "A H c"])
        ]
      },
      {
        id: "delky-a-pomlky",
        title: "Délky not a pomlky",
        icon: "⏱️",
        type: "choice",
        instructions: "Počítej doby: celá 4, půlová 2, čtvrťová 1, osminová ½, šestnáctinová ¼.",
        pick: "auto",
        items: [
          { prompt: "Jak se jmenuje tato nota?", staff: treble([{ note: "h1", dur: "s" }]), options: ["šestnáctinová", "osminová", "čtvrťová", "půlová"], answer: "šestnáctinová", explanation: "Dva praporky = šestnáctinová nota." },
          { prompt: "Jak se jmenuje tato nota?", staff: treble([{ note: "h1", dur: "e" }]), options: ["osminová", "šestnáctinová", "čtvrťová", "celá"], answer: "osminová", explanation: "Jeden praporek = osminová nota." },
          { prompt: "Kolik dob trvá tato nota?", staff: treble([{ note: "g1", dur: "h", dot: true }]), options: ["2", "2,5", "3", "4"], answer: "3", explanation: "Půlová (2) + tečka (polovina, tedy 1) = 3 doby." },
          { prompt: "Kolik dob trvá tato nota?", staff: treble([{ note: "g1", dur: "q", dot: true }]), options: ["1", "1,5", "2", "3"], answer: "1,5", explanation: "Čtvrťová (1) + polovina (0,5) = 1,5 doby." },
          { prompt: "Kolik šestnáctinových not se vejde do jedné čtvrťové?", options: ["2", "3", "4", "8"], answer: "4", explanation: "Čtvrťová = 2 osminové = 4 šestnáctinové." },
          { prompt: "Kolik osminových not se vejde do celé noty?", options: ["4", "6", "8", "16"], answer: "8", explanation: "Celá = 4 čtvrťové = 8 osminových." },
          { prompt: "Co je na osnově zapsané?", staff: treble([{ rest: "s" }]), options: ["šestnáctinová pomlka", "osminová pomlka", "čtvrťová pomlka", "půlová pomlka"], answer: "šestnáctinová pomlka", explanation: "Pomlka se dvěma praporky je šestnáctinová." },
          { prompt: "Co je na osnově zapsané?", staff: treble([{ rest: "h" }]), options: ["půlová pomlka", "celá pomlka", "čtvrťová pomlka", "osminová pomlka"], answer: "půlová pomlka", explanation: "Obdélníček leží na prostřední lince – půlová pomlka (2 doby)." },
          { prompt: "Co je na osnově zapsané?", staff: treble([{ rest: "w" }]), options: ["celá pomlka", "půlová pomlka", "čtvrťová pomlka", "šestnáctinová pomlka"], answer: "celá pomlka", explanation: "Obdélníček visí pod čtvrtou linkou – celá pomlka (4 doby)." },
          { prompt: "Jak se má zahrát nota s tečkou nad hlavičkou?", staff: treble([{ note: "e2", dur: "q", staccato: true }]), options: ["krátce a odsazeně", "o polovinu delší", "dvakrát", "potichu"], answer: "krátce a odsazeně", explanation: "Tečka nad notou nebo pod notou je staccato – délku nemění." },
          { prompt: "Kde musí být tečka, aby notu prodloužila?", options: ["vedle hlavičky", "nad hlavičkou", "pod hlavičkou", "na nožičce"], answer: "vedle hlavičky", explanation: "Prodlužovací tečka se píše hned za hlavičku noty." }
        ]
      },
      {
        id: "pultony-posuvky",
        title: "Půltóny a posuvky",
        icon: "♯",
        type: "choice",
        instructions: "Křížek zvyšuje o půltón, béčko snižuje, odrážka posuvku ruší.",
        pick: "auto",
        items: [
          { prompt: "Jak se jmenuje tato nota?", staff: treble([{ note: "f1", dur: "q", acc: "#" }]), options: ["fis1", "f1", "fes1", "ges1"], answer: "fis1", explanation: "Křížek zvýší f o půltón – fis." },
          { prompt: "Jak se jmenuje tato nota?", staff: treble([{ note: "c2", dur: "q", acc: "#" }]), options: ["cis2", "c2", "ces2", "des2"], answer: "cis2", explanation: "Křížek zvýší c o půltón – cis." },
          { prompt: "Jak se jmenuje tato nota?", staff: treble([{ note: "e1", dur: "q", acc: "b" }]), options: ["es1", "e1", "eis1", "des1"], answer: "es1", explanation: "Béčko sníží e o půltón – es." },
          { prompt: "Jak se jmenuje tato nota?", staff: treble([{ note: "h1", dur: "q", acc: "b" }]), options: ["b1", "h1", "his1", "as1"], answer: "b1", explanation: "Snížené h se v češtině jmenuje b." },
          { prompt: "Mezi kterými tóny je půltón?", options: ["c–d", "d–e", "h–c", "f–g"], answer: "h–c", explanation: "Půltóny jsou jen mezi e–f a h–c." },
          { prompt: "Kolik půltónů má celý tón?", options: ["1", "2", "3", "4"], answer: "2", explanation: "Celý tón = dva půltóny." },
          { prompt: "Co znamená odrážka ♮ před notou?", options: ["ruší křížek i béčko", "zvýší notu", "sníží notu", "zkrátí notu"], answer: "ruší křížek i béčko", explanation: "Odrážka vrátí notu na původní výšku." },
          { prompt: "Jak se jmenuje tón o půltón výš než g?", options: ["gis", "ges", "as", "fis"], answer: "gis", explanation: "Zvýšení = přípona -is." },
          { prompt: "Jak se jmenuje tón o půltón níž než a?", options: ["as", "ais", "h", "ges"], answer: "as", explanation: "Snížení = přípona -es; z a je as." },
          { prompt: "Kolik černých kláves je mezi e a f na klavíru?", options: ["žádná", "jedna", "dvě", "tři"], answer: "žádná", explanation: "Proto je mezi e a f jen půltón." }
        ]
      },
      {
        id: "stupnice",
        title: "Stupnice a předznamenání",
        icon: "🪜",
        type: "choice",
        instructions: "Předznamenání stojí hned za klíčem a platí pro celou skladbu.",
        pick: "auto",
        items: [
          { prompt: "Kolik křížků nebo béček má předznamenání na této osnově?", staff: { clef: "houslovy", keySig: { sharps: 1 }, items: [{ note: "g1", dur: "q" }] }, options: ["1 křížek", "2 křížky", "1 béčko", "žádné"], answer: "1 křížek", explanation: "Za klíčem je jeden křížek – fis." },
          { prompt: "Která stupnice má toto předznamenání?", staff: { clef: "houslovy", keySig: { sharps: 1 }, items: [{ note: "g1", dur: "q" }] }, options: ["G dur", "C dur", "F dur", "D dur"], answer: "G dur", explanation: "Jeden křížek (fis) má G dur." },
          { prompt: "Která stupnice má toto předznamenání?", staff: { clef: "houslovy", keySig: { flats: 1 }, items: [{ note: "f1", dur: "q" }] }, options: ["F dur", "G dur", "C dur", "B dur"], answer: "F dur", explanation: "Jedno béčko (b) má F dur." },
          { prompt: "Která stupnice má toto předznamenání?", staff: { clef: "houslovy", keySig: { sharps: 2 }, items: [{ note: "d2", dur: "q" }] }, options: ["D dur", "G dur", "A dur", "B dur"], answer: "D dur", explanation: "Dva křížky (fis, cis) má D dur." },
          { prompt: "Kolik předznamenání má stupnice C dur?", options: ["žádné", "1 křížek", "1 béčko", "2 křížky"], answer: "žádné", explanation: "C dur se hraje jen na bílých klávesách." },
          { prompt: "Který křížek se v předznamenání píše jako první?", options: ["fis", "cis", "gis", "dis"], answer: "fis", explanation: "Pořadí křížků: fis, cis, gis, dis…" },
          { prompt: "Které béčko se v předznamenání píše jako první?", options: ["b", "es", "as", "des"], answer: "b", explanation: "Pořadí béček: b, es, as, des…" },
          { prompt: "Kolik tónů má durová stupnice od základního tónu k témuž tónu o oktávu výš?", options: ["5", "7", "8", "9"], answer: "8", explanation: "Například c d e f g a h c – osm tónů." },
          { prompt: "Mezi kterými stupni durové stupnice jsou půltóny?", options: ["3.–4. a 7.–8.", "1.–2. a 5.–6.", "2.–3. a 6.–7.", "4.–5. a 7.–8."], answer: "3.–4. a 7.–8.", explanation: "V C dur to odpovídá e–f a h–c." },
          { prompt: "Pro koho platí předznamenání?", options: ["pro celou skladbu", "jen pro první notu", "jen pro první takt", "jen pro pravou ruku"], answer: "pro celou skladbu", explanation: "Platí ve všech taktech a oktávách, dokud se nezmění." }
        ]
      },
      {
        id: "tempa",
        title: "Tempa",
        icon: "🏃",
        type: "choice",
        instructions: "Tempo říká, jak rychle se skladba hraje.",
        pick: "auto",
        items: [
          { prompt: "Do které skupiny patří tempo adagio?", options: ["pomalá", "mírná", "rychlá", "velmi rychlá"], answer: "pomalá", explanation: "Adagio = pomalu." },
          { prompt: "Do které skupiny patří tempo allegro?", options: ["rychlá", "pomalá", "mírná", "velmi pomalá"], answer: "rychlá", explanation: "Allegro = rychle, vesele." },
          { prompt: "Do které skupiny patří tempo andante?", options: ["mírná", "pomalá", "rychlá", "velmi rychlá"], answer: "mírná", explanation: "Andante = krokem, mírně." },
          { prompt: "Které tempo je nejpomalejší?", options: ["largo", "andante", "moderato", "vivace"], answer: "largo", explanation: "Largo = široce, velmi pomalu." },
          { prompt: "Které tempo je nejrychlejší?", options: ["presto", "allegro", "moderato", "lento"], answer: "presto", explanation: "Presto = velmi rychle." },
          { prompt: "Co znamená moderato?", options: ["středně rychle", "velmi pomalu", "velmi rychle", "postupně zrychlovat"], answer: "středně rychle", explanation: "Moderato = umírněně, středně." },
          { prompt: "Co znamená vivace?", options: ["živě", "smutně", "pomalu", "potichu"], answer: "živě", explanation: "Vivace patří mezi rychlá tempa." },
          { prompt: "Kde se v notách píše označení tempa?", options: ["nad začátkem not", "pod poslední notou", "vedle klíče v osnově", "do každé mezery"], answer: "nad začátkem not", explanation: "Tempo se píše nad osnovu na začátku skladby." }
        ]
      }
    ]
  });
})();
