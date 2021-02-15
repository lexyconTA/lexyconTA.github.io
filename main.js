const quoteEl = document.querySelector(".quote");
const quoteContentEl = document.querySelector(".quote-content");
const quoteAuthorEl = document.querySelector(".quote-author");
const quotes = [
  {
    content: `Was für ein geiler Arsch, da möchte ich am liebsten gleich reinficken`,
    author: `Verfechter`,
  },
  {
    content: `Nö. Erwischt, und zwar Dich. Vermutlich hast Du als Kind zu viel aus Plastikflaschen mit BPA getrunken, das verändert die Gehirnstrukturen hin zu weiblich und deswegen spamst Du in einem Thread mit dem schwulen Titel "Zeit der Fühls" rum...

    Und vermutlich nix zu ficken daheim, sonst wärst Du anderweitig beschäftigt.
    
    Ich hab als Kind noch aus Glasflaschen getrunken, und deswegen grad mal 2.500 Beiträge in 15 Jahren. Fakt!`,
    author: `wildsau`,
  },
  {
    content: `Ach du Vogel wenn du nen Problem hast lasse treffen gilt für jeden hier.

    Ihr seid doch scharf drauf mal ein paar auf die Schnauze zu bekommen.
    
    Lasst treffen und klären,scheiss Pisser`,
    author: `Atze`,
  },
  {
    content: `LOL Matze

    Matze das Ding ist klar wie Klosbrühe. Als du noch mit deiner Alten zusammen warst, hattest du ein großes Selbstbewusstsein, deine Freundin hat dich mit Liebe und Loyalität zugeschüttet und dir das Gefühl gegeben du bist ein geiler Stecher und du hast das geglaubt und sie abserviert. Doch Matze, das war fatal! Matze du bist wieder raus in die freie Wildbahn und hast dir einen Korb nach dem Anderen eingeheimst und konntest nicht mehr in deinen sicheren Hafen einlaufen der dein bröckelndes Selbstbewusstsein wieder aufpeppt. Und danach sehnst du dich jetzt wieder Matze! Nicht dieses Gör, nein! Nach einem Confidence-Schub. Und deine Gedanken an diesen neuen Flirt sprechen genau diese Sprache, Matze. Matze hör mir jetzt ganz genau zu! Wenn du das nächste mal in einer Beziehung bist (wie auch immer du das anstellen möchtest), mach erst dann Schluss, wenn du ordentlich Gains auf deine Rippchen gepackt hast. Danach ziehst du ne ordentliche Defi durch und lässt dir ein Bleaching verpassen. Dann Matze, nur dann, kannst du von einer Braut zur nächsten hüpfen. Und immer schön zweigleisig fahren.
    
    Matze, ich weiß was du jetzt denkst. "Scheiße, der Kerl hat mich durchschaut und vor allen Androanern lächerlich gemacht!". Aber so ist das nicht Matze. Matze geh ins Gym mach dein Ding und habe immer meine Worte im Hinterkopf.
    
    Lebe wohl Matze`,
    author: `SanSebastian`,
  },
  {
    content: `Das war bei mir genauso, in den ersten 2,5 Jahren habe ich im Schnitt 5kg pro Jahr zugenommen, das ging mir dann zu langsam und ich habe mir einen Mixer gekauft und alles püriert, was noch ging.

    Da Geld bei mir als Schüler Mangelware war, kaufte ich mir beim Landwirtschaftlichen Bedarf ein Kälberaufzuchtsmittel im 50kg-Sack (stand drauf, für den menschlichen Verzehr nicht geeignet :-) , es hieß F5 :-) ).
    Es kostete nur 25 DM.
    Davon nahm ich dann jeden Tag ein KG zusätzlich zu den normalen Mahlzeiten.
    
    Das Zeug war so eklig, dass ich jedesmal davon kotzen musste, der Plastikbehälter des Mixers fing an zu stinken von dem Zeug, ich musste mir dann einen Mixer mit Glasbehälter zulegen.
    
    Mit solchen Methoden konnte ich dann fast jeden Monat ein KG zulegen.
    
    Zum Glück wurde ich dann bald von meinem Fitness-Studio und später von der Bundeswehr gesponsort und musste das Zeug nicht mehr trinken.`,
    author: `stefanco`,
  },
  {
    content: `ohja so wars:

      wir im urlaub, freundin krank geht um 22.00 schlafen und sagt zu mir, bleib bitte nicht so lang in der disco (clubdisco), ich sturzbesoffen bis 4 uhr geblieben mach die hotelzimmertür auf und musste kacken gehen.
      irgendwie hat das nicht geklappt, bin auf der toilette eingeschlafen (boxershort). um 7 aufgestanden und mich gewundert warum es schon hell ist.
      
      ex freundin schreit mich an wo ich besoffener idiot war, ich guck sie darauf hin völlig verwirrt und immer noch stockbesoffen an und kack einfach los mitten im zimmer (fragt mich nicht was mich dazu geritten hat).
      
      ex freundin fängt an zu weinen und meint das sich krank bin und hilfe brauch, daraufhin habe ich auch fast angefangen zu weinen und habe nen handtuch drüber gelegt und bin pennen gegangen ---> folge übelster knick in der beziehung, hatte lange gedauert bis alles wiede rok war
      
      oh man geile aktion, die werde ich meinen enkeln erzählen`,
    author: `Verfechter`,
  },
  {
    content: `Bei nem dreier Satz Kniebeugen hab ich bei der ersten wdh wad reissen gehört, dachte es wären nur die boxershorts wie schon öfter. Am tiefsten Punkt der 2. Seh ich im Spiegel in voller Pracht meinen Sack rumbaumeln. Aufm Weg nach oben musst ich so lachen, dass ich keinen Millimeter mehr hochkam und musste dann wieder runter und abwerfen bin dabei rückwärts umgefallen und auf der Stange gelandet`,
    author: `RWA-`,
  },
  {
    content: `wurde im lidl angequatscht... von so nem kasachenjullei. Er fragt ob ich bock auf Boxtraining hab... er gibt mir nen Zettel den er durchstreicht und ne Homepage draufschreibt.... und meint im gehen noch, dass ich dann so bxoen könnet wie die Jungs in Matrix.... auf der Homepage ist n youtubevideo bei dem er vor nem Wandtepich steht und einem garantiert, dass man Boxweltmeister durch Selbsthypnose wird....`,
    author: `c0l0rs`,
  },
  {
    content: `Ich heisse Luca und wohne in der Schweiz. hab mich in einem Deutschen forum angemeldet, weil es sehr viel mehr Mitglieder hat, im Forumratgeber ziemlich hoch oben stand und weil ich mir hier auch mehr Hilfe verspreche, als in einem kleineren Forum mit paar Hundert mitgliedern. Was kann ich noch zu mir sagen, ausser das ich aus der CH stamme ... ich bin 17 Jahre, werde nechstes Jahr 18. Mit dem Hanteltraning habe ich völlig unerfahren mit 12 Jahren begonnen und viele Fehler gemacht, wie z.B. jeden Tag Bizepstraning mit 100 Wdh. mit 14 hab ich dann angefangen richtig zu tanieren, hab dann u.a. auch ein Jahr Thaiboxen gemacht und war zweimal über den Sommern für 3 Monaten in einem Fitnesstudio angemeldet. hab auch gute Fortschritte erzielt. Seit September habe ich jetzt eine komplette Pause gehabt, weil ich unter anderem auch viel mit Kollegen aus war und den Körper meines Hundes traniert habe, als eine art Couch. Mittlerweile hat er mehr breite als ich, und meine Muskeln sind sehr zurückgegengen. Jetzt ist es wider Sommerzeit und ich hab beschlossen wider zu tranieren. Hab vor ca. 2 Wochen ein 1 Jahresabo in ein TC gemacht, aber dazu in einem anderen Therad mehr.`,
    author: `DonPitbull`,
  },
  {
    content: `Wir sind dann in einen Club gefahren, wo ich mich mit 10 Südländern angelegt habe. Die dachten wohl, dass die da rumpöbeln können, ohne dass man sich wehrt. Habe mir einen von denen gepackt und die Meinung gesagt. Die anderen waren total verwirrt, das kannten die wohl nicht. Als einer es nochmal versucht habe, habe ich nen Tisch mit leeren Gläsern abgeräumt und gesagt, dass die kommen sollen. Ich meinte, dass ich meine Medikamente abgesetzt habe und nicht weiß, was passieren wird. Das ist natürlich quatsch, aber die haben mir abgekauft, dass ich nicht ganz knusper in der Birne bin. :-)`,
    author: `xXAlucardXx`,
  },
];

function shuffleArray() {
  for (let i = quotes.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i);
    const temp = quotes[i];
    quotes[i] = quotes[j];
    quotes[j] = temp;
  }
}

shuffleArray();

let i = 0;
let intervalId = setInterval(
  (function () {
    quoteEl.classList.remove("run-animation");
    void quoteEl.offsetWidth;
    quoteEl.classList.add("run-animation");
    quoteContentEl.innerText = quotes[i].content;
    quoteAuthorEl.innerText = "— " + quotes[i].author;
    i === quotes.length - 1 ? (i = 0) : i++;
  })(),
  10000
);
