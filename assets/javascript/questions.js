
//array of question objects
//each question can only have one correct answer, and only 4 choices to display
//also stores an image url during the answer's result screen
//make sure the answer member variable is an exact copy of one of the choices, or else the question will always be counted incorrect/unanswered in the game
//can have add as many questions as you like
//if you are the player and are looking at this, cheater cheater bacon eater
var myQuestions = [
  {
    question: "Which one of these is NOT a member of Chewbacca's family?",
    choices: ["Itchy", "Lumpy", "Malla", "Mermeia"],
    answer: "Mermeia",
    info: "Mermeia is the character Diahann Carroll played as in Itchy's disturbing holotape gift from Saun Dann.",
    image: "./assets/images/mermeia.jpg"
  },
  {
    question: "Which one of these characters did Harvey Korman NOT portray?",
    choices: ["Dromboid", "Krelman", "Gormaanda", "Saun Dann"],
    answer: "Saun Dann",
    info: "Saun Dann was played by Art Carney, not Harvey Korman.",
    image: "./assets/images/notkorman.jpg"
  },
  {
    question: "George Lucas once said \"If I had the time and a sledgehammer, I would track down every copy of that show and smash it.\" How many times did the STAR WARS HOLIDAY SPECIAL air on T.V.?",
    choices: ["Once", "Twice", "4 times", "6 times"],
    answer: "Once",
    info: "The STAR WARS HOLIDAY SPECIAL aired only once. Some contend that was once too many.",
    image: "./assets/images/titleshot.jpg"
  },
  {
    question: "When did the STAR WARS HOLIDAY SPECIAL first air?",
    choices: ["November 17, 1978", "December 10, 1977", "October 21, 1978", "November 21, 1980"],
    answer: "November 17, 1978",
    info: "November 17, 1978, a day that will weigh heavily on the hearts of many.",
    image: "./assets/images/titleshot.jpg"
  },
  {
    question: "What did Saun Dann sell to the imperial guard?",
    choices: ["Nothing", "A groomer", "A miniature fish tank", "Helmet wax"],
    answer: "Nothing",
    info: "The imperial guard took the groomer without paying Saun Dann.",
    image: "./assets/images/groomer.jpg"
  },
  {
    question: "How does Krelman drink?",
    choices: ["With his mouth", "He doesn't", "With a hole on the top of his head", "With a straw"],
    answer: "With a hole on the top of his head",
    info: "And now you have now seen the stupidest thing ever.",
    image: "./assets/images/kerlmandrink.jpg"
  },
  {
    question: "What is the holiday celebrated in the STAR WARS HOLIDAY SPECIAL?",
    choices: ["Life Day", "Christmas", "Thanksgiving", "Festival of Light"],
    answer: "Life Day",
    info: "Life Day is totally not Thanksgiving.  Or Christmas.  Or a cult gathering.  Yep, not any of those things.",
    image: "./assets/images/lifeday1.jpg"
  },
  {
    question: "Why does Carrie Fisher look like she does in her appearances as Princess Leia?",
    choices: ["Drugs, lots of drugs", "Phoning in her performance", "Lack of sleep due to insomnia", "What, she looks fine"],
    answer: "Drugs, lots of drugs",
    info: "Drugs are bad, mmmkay?.",
    image: "./assets/images/leiadrugs2.jpg"
  },
  {
    question: "How does Han Solo take out the storm trooper posted to keep watch on Chewbacca's family?",
    choices: ["Shoots him", "Throws him over the railing", "Distracted him while Chewbacca hits him", "Nothing"],
    answer: "Nothing",
    info: "Well, technically, the storm trooper flung himself over the railing by tripping over some logs when diving for his gun that Han Solo knocked out of his hands.",
    image: "./assets/images/han.gif"
  },
  {
    question: "What happened to Mark Hamill right before filming?",
    choices: ["Had a car wreck", "Got married", "Broke his leg", "Lost a big bet"],
    answer: "Had a car wreck",
    info: "Explains the kabuki makeup Hamill was wearing and is also the source of his chin scar.",
    image: "./assets/images/luke2.jpg"
  },
  {
    question: "According to Cooking with Gormaanda, what is step two in preparing Roast Bantha?",
    choices: ["stir whip stir whip whip whip stir", "stir whip stir whip stir whip stir", "whip stir whip stir whip whip stir", "stir whip whip stir stir whip stir"],
    answer: "stir whip stir whip whip whip stir",
    info: "Cooking is easy when you don't actually cook the ingredients!",
    image: "./assets/images/stirwhip.jpg"
  },
  {
    question: "What planet does the STAR WARS HOLIDAY SPECIAL take place on?",
    choices: ["Kashyyyk", "Kazook", "Kashyook", "Kashyuk"],
    answer: "Kashyyyk",
    info: "This guy doesn't know how to pronouce \"Kashyyyk\"! Nerd! Let us point and laugh at him! Wait...",
    image: "./assets/images/kazook.jpg"
  },
  {
    question: "On what channel did the STAR WARS HOLIDAY SPECAIL air?",
    choices: ["CBS", "FOX", "NBC", "ABC"],
    answer: "CBS",
    info: "Oh how I bet they wished FOX took the bullet for this instead.",
    image: "./assets/images/cbs.jpg"
  }
];


/* blank question template
  {
    question: "",
    choices: ["", "", "", ""],
    answer: "",
    info: "",
    image: ""
  },
*/