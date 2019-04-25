use trivia_questions;
db.dropDatabase();

db.questions.insertMany(
[

{
  category: "Entertainment: Film",
  type: "multiple",
  difficulty: "easy",
  question: "What breed of dog was Marley in the film 'Marley & Me' (2008)?",
  correct_answer: "Labrador Retriever",
  incorrect_answer: [
    "Golden Retriever",
    "Dalmatian",
    "Shiba Inu"
  ]
},
{
  category: "Entertainment: Film",
  type: "multiple",
  difficulty: "easy",
  question: "Which of the following is not the name of a 'Bond Girl'? ",
  correct_answer: "Vanessa Kensington",
  incorrect_answer: [
    "Pam Bouvier",
    "Mary Goodnight",
    "Wai Lin"
  ]
},
{
  category: "Entertainment: Film",
  type: "multiple",
  difficulty: "easy",
  question: "Which of the following was not one of 'The Magnificent Seven'?",
  correct_answer: "Clint Eastwood",
  incorrect_answer: [
    "Steve McQueen",
    "Charles Bronson",
    "Robert Vaughn"
  ]
},
{
  category: "Entertainment: Film",
  type: "multiple",
  difficulty: "easy",
  question: "Which of the following movies was not based on a novel by Stephen King? ",
  correct_answer: "The Thing",
  incorrect_answer: [
    "Carrie",
    "Misery",
    "The Green Mile"
  ]
},
{
  category: "Entertainment: Film",
  type: "multiple",
  difficulty: "easy",
  question: "Which movie released in 2016 features Superman and Batman fighting?",
  correct_answer: "Batman v Superman: Dawn of Justice",
  incorrect_answer: [
    "Batman v Superman: Superapocalypse",
    "Batman v Superman: Black of Knight",
    "Batman v Superman: Knightfall"
  ]
},
{
  category: "Entertainment: Film",
  type: "multiple",
  difficulty: "easy",
  question: "Daniel Radcliffe became a global star in the film industry due to his performance in which film franchise?",
  correct_answer: "Harry Potter",
  incorrect_answer: [
    "Ted",
    "Spy Kids",
    "Pirates of the Caribbean "
  ]
},
{
  category: "Entertainment: Film",
  type: "multiple",
  difficulty: "easy",
  question: "What name did Tom Hanks give to his volleyball companion in the film `Cast Away`?",
  correct_answer: "Wilson",
  incorrect_answer: [
    "Friday",
    "Jones",
    "Billy"
  ]
},
{
  category: "Entertainment: Film",
  type: "multiple",
  difficulty: "easy",
  question: "What is the highest grossing film of all time (without adjusting for inflation)?",
  correct_answer: "Avatar",
  incorrect_answer: [
    "Jurassic World",
    "Star Wars: The Force Awakens",
    "Titanic"
  ]
},
{
  category: "Entertainment: Film",
  type: "multiple",
  difficulty: "easy",
  question: "Which animated movie was first to feature a celebrity as a voice actor?",
  correct_answer: "Aladdin",
  incorrect_answer: [
    "Toy Story",
    "James and the Giant Peach",
    "The Hunchback of Notre Dame"
  ]
},
{
  category: "Entertainment: Film",
  type: "multiple",
  difficulty: "easy",
  question: "When was the movie 'Con Air' released?",
  correct_answer: "1997",
  incorrect_answer: [
    "1985",
    "1999",
    "1990"
  ]
},
{
  category: "Entertainment: Film",
  type: "multiple",
  difficulty: "easy",
  question: "Who wrote and directed the 1986 film 'Platoon'?",
  correct_answer: "Oliver Stone",
  incorrect_answer: [
    "Francis Ford Coppola",
    "Stanley Kubrick",
    "Michael Cimino"
  ]
},
{
  category: "Entertainment: Film",
  type: "multiple",
  difficulty: "easy",
  question: "Who played Deputy Marshal Samuel Gerard in the 1993 film 'The Fugitive'?",
  correct_answer: "Tommy Lee Jones",
  incorrect_answer: [
    "Harrison Ford",
    "Harvey Keitel",
    "Martin Landau"
  ]
},
{
  category: "Entertainment: Film",
  type: "multiple",
  difficulty: "easy",
  question: "Who played the female lead in the 1933 film 'King Kong'?",
  correct_answer: "Fay Wray",
  incorrect_answer: [
    "Jean Harlow",
    "Vivien Leigh",
    "Mae West"
  ]
},
{
  category: "Entertainment: Film",
  type: "multiple",
  difficulty: "easy",
  question: "Which actress danced the twist with John Travolta in 'Pulp Fiction'?",
  correct_answer: "Uma Thurman",
  incorrect_answer: [
    "Kathy Griffin",
    "Pam Grier",
    "Bridget Fonda"
  ]
},
{
  category: "Entertainment: Film",
  type: "multiple",
  difficulty: "easy",
  question: "Who starred in the film 1973 movie 'Enter The Dragon'?",
  correct_answer: "Bruce Lee",
  incorrect_answer: [
    "Jackie Chan",
    "Jet Li",
    "Yun-Fat Chow"
  ]
},
{
  category: "Entertainment: Film",
  type: "multiple",
  difficulty: "easy",
  question: "Which movie contains the quote, 'Say hello to my little friend!'?",
  correct_answer: "Scarface",
  incorrect_answer: [
    "Reservoir Dogs",
    "Heat",
    "Goodfellas"
  ]
},
{
  category: "Entertainment: Film",
  type: "multiple",
  difficulty: "easy",
  question: "Who directed the movies 'Pulp Fiction', 'Reservoir Dogs' and 'Django Unchained'?",
  correct_answer: "Quentin Tarantino",
  incorrect_answer: [
    "Martin Scorcese",
    "Steven Spielberg",
    "James Cameron"
  ]
},
{
  category: "Entertainment: Film",
  type: "multiple",
  difficulty: "easy",
  question: "Who directed the 2015 movie 'The Revenant'?",
  correct_answer: "Alejandro G. Iñârritu",
  incorrect_answer: [
    "Christopher Nolan",
    "David Fincher",
    "Wes Anderson"
  ]
},
{
  category: "Entertainment: Film",
  type: "multiple",
  difficulty: "easy",
  question: "The Queen song `A Kind Of Magic` is featured in which 1986 film?",
  correct_answer: "Highlander",
  incorrect_answer: [
    "Flash Gordon",
    "Labyrinth",
    "Howard the Duck"
  ]
},
{
  category: "Entertainment: Film",
  type: "multiple",
  difficulty: "easy",
  question: "What was the title of the first Bond movie, released in 1962?",
  correct_answer: "Dr. No",
  incorrect_answer: [
    "From Russia with Love",
    "Goldfinger",
    "Thunderball"
  ]
},
{
  category: "Entertainment: Film",
  type: "multiple",
  difficulty: "easy",
  question: "This movie contains the quote, 'I feel the need ... the need for speed!'",
  correct_answer: "Top Gun",
  incorrect_answer: [
    "Days of Thunder",
    "The Color of Money",
    "Cocktail"
  ]
},
{
  category: "Entertainment: Film",
  type: "multiple",
  difficulty: "easy",
  question: "This movie contains the quote, 'Nobody puts Baby in a corner.'",
  correct_answer: "Dirty Dancing",
  incorrect_answer: [
    "Three Men and a Baby",
    "Ferris Bueller's Day Off",
    "Pretty in Pink"
  ]
},
{
  category: "Entertainment: Film",
  type: "multiple",
  difficulty: "easy",
  question: "What is the orange and white bot's name in 'Star Wars: The Force Awakens'?",
  correct_answer: "BB-8",
  incorrect_answer: [
    "BB-3",
    "AA-A",
    "R2-D2"
  ]
},
{
  category: "Entertainment: Film",
  type: "multiple",
  difficulty: "easy",
  question: "What was the first James Bond film?",
  correct_answer: "Dr. No",
  incorrect_answer: [
    "Goldfinger",
    "From Russia With Love",
    "Thunderball"
  ]
},
{
  category: "Entertainment: Film",
  type: "multiple",
  difficulty: "easy",
  question: "Which of these actors/actresses is NOT a part of the cast for the 2016 movie 'Suicide Squad'?",
  correct_answer: "Scarlett Johansson",
  incorrect_answer: [
    "Jared Leto",
    "Will Smith",
    "Margot Robbie"
  ]
},
{
  category: "Entertainment: Film",
  type: "multiple",
  difficulty: "easy",
  question: "Which of these movies did Jeff Bridges not star in?",
  correct_answer: "The Hateful Eight",
  incorrect_answer: [
    "Tron: Legacy",
    "The Giver",
    "True Grit"
  ]
},
{
  category: "Entertainment: Film",
  type: "multiple",
  difficulty: "easy",
  question: "Which movie includes a giant bunny-like spirit who has magic powers including growing trees?",
  correct_answer: "My Neighbor Totoro",
  incorrect_answer: [
    "Hop",
    "Rise of the Guardians",
    "Alice in Wonderland"
  ]
},
{
  category: "Entertainment: Film",
  type: "multiple",
  difficulty: "easy",
  question: "Who plays Alice in the Resident Evil movies?",
  correct_answer: "Milla Jovovich",
  incorrect_answer: [
    "Madison Derpe",
    "Milla Johnson",
    "Kim Demp"
  ]
},
{
  category: "Entertainment: Film",
  type: "multiple",
  difficulty: "easy",
  question: "What is the oldest Disney film?",
  correct_answer: "Snow White and the Seven Dwarfs",
  incorrect_answer: [
    "Pinocchio",
    "Dumbo",
    "Fantasia"
  ]
},
{
  category: "Entertainment: Film",
  type: "multiple",
  difficulty: "easy",
  question: "Who is the main protagonist in, the 1985 film, Back to the Future?",
  correct_answer: "Marty McFly",
  incorrect_answer: [
    "Emmett 'Doc' Brown",
    "Biff Tannen",
    "George McFly"
  ]
},
{
  category: "Entertainment: Film",
  type: "multiple",
  difficulty: "easy",
  question: "In the movie 'Cast Away' the main protagonist's best friend while on the island is named",
  correct_answer: "Wilson",
  incorrect_answer: [
    "Carson",
    "Jackson",
    "Willy"
  ]
},
{
  category: "Entertainment: Film",
  type: "multiple",
  difficulty: "easy",
  question: "Who in Pulp Fiction says 'No, they got the metric system there, they wouldn't know what the fuck a Quarter Pounder is.'",
  correct_answer: "Vincent Vega",
  incorrect_answer: [
    "Jules Winnfield",
    "Jimmie Dimmick",
    "Butch Coolidge"
  ]
},
{
  category: "Entertainment: Film",
  type: "multiple",
  difficulty: "easy",
  question: "In 'Jurassic World', what is the name of the dinosaur that is a genetic hybrid?",
  correct_answer: "Indominus Rex",
  incorrect_answer: [
    "Mosasaurus",
    "Pteranodon",
    "Tyrannosaurus Rex "
  ]
},
{
  category: "Entertainment: Film",
  type: "multiple",
  difficulty: "easy",
  question: "The 2002 film '28 Days Later' is mainly set in which European country?",
  correct_answer: "United Kingdom",
  incorrect_answer: [
    "France",
    "Italy",
    "Germany"
  ]
},
{
  category: "Entertainment: Film",
  type: "multiple",
  difficulty: "easy",
  question: "In the movie 'Spaceballs', what are the Spaceballs attempting to steal from Planet Druidia?",
  correct_answer: "Air",
  incorrect_answer: [
    "The Schwartz",
    "Princess Lonestar",
    "Meatballs"
  ]
},
{
  category: "Entertainment: Film",
  type: "multiple",
  difficulty: "easy",
  question: "In the movie Gremlins, after what time of day should you not feed Mogwai?",
  correct_answer: "Midnight",
  incorrect_answer: [
    "Evening",
    "Morning",
    "Afternoon"
  ]
},
{
  category: "Entertainment: Film",
  type: "multiple",
  difficulty: "easy",
  question: "When does 'Rogue One: A Star Wars Story' take place chronologically in the series?",
  correct_answer: "Between Episode 3 and 4",
  incorrect_answer: [
    "After Episode 6",
    "Before Episode 1",
    "Between Episode 4 and 5"
  ]
},
{
  category: "Entertainment: Film",
  type: "multiple",
  difficulty: "easy",
  question: "'The first rule is: you don't talk about it' is a reference to which movie?",
  correct_answer: "Fight Club",
  incorrect_answer: [
    "The Island",
    "Unthinkable",
    "American Pie"
  ]
},
{
  category: "Entertainment: Film",
  type: "multiple",
  difficulty: "easy",
  question: "In the 2012 film, 'The Lorax', who is the antagonist?",
  correct_answer: "Aloysius O'Hare",
  incorrect_answer: [
    "Ted Wiggins",
    "The Once-Ler",
    "Grammy Norma"
  ]
},
{
  category: "Entertainment: Film",
  type: "multiple",
  difficulty: "easy",
  question: "In the 1992 film 'Army of Darkness', what name does Ash give to his double-barreled shotgun?",
  correct_answer: "Boomstick",
  incorrect_answer: [
    "Bloomstick",
    "Blastbranch",
    "2-Pump Chump"
  ]
},
{
  category: "Entertainment: Film",
  type: "multiple",
  difficulty: "easy",
  question: "At the end of the 2001 film 'Rat Race', whose concert do the contestants crash?",
  correct_answer: "Smash Mouth",
  incorrect_answer: [
    "Bowling for Soup",
    "Sum 41",
    "Linkin Park"
  ]
},
{
  category: "Entertainment: Film",
  type: "multiple",
  difficulty: "easy",
  question: "Who plays the character of Po in the Kung Fu Panda movies?",
  correct_answer: "Jack Black",
  incorrect_answer: [
    "Mirana Jonnes",
    "McConahey Ramses",
    "Jim Petersson"
  ]
},
{
  category: "Entertainment: Film",
  type: "multiple",
  difficulty: "easy",
  question: "In the movie 'Blade Runner', what is the term used for human-like androids ?",
  correct_answer: "Replicants",
  incorrect_answer: [
    "Cylons",
    "Synthetics",
    "Skinjobs"
  ]
},
{
  category: "Entertainment: Film",
  type: "multiple",
  difficulty: "easy",
  question: "In the 1995 film 'Balto', who are Steele's accomplices?",
  correct_answer: "Kaltag, Nikki, and Star",
  incorrect_answer: [
    "Dusty, Kirby, and Ralph",
    "Nuk, Yak, and Sumac",
    "Jenna, Sylvie, and Dixie"
  ]
},
{
  category: "Entertainment: Film",
  type: "multiple",
  difficulty: "easy",
  question: "What is the name of the island that 'Jurassic Park' is built on?",
  correct_answer: "Isla Nublar",
  incorrect_answer: [
    "Isla Sorna",
    "Isla Muerta",
    "Isla Pena"
  ]
},
{
  category: "Entertainment: Film",
  type: "multiple",
  difficulty: "easy",
  question: "What was Bruce Campbell's iconic one-liner after getting a chainsaw hand in Evil Dead 2?",
  correct_answer: "Groovy.",
  incorrect_answer: [
    "Gnarly.",
    "Perfect.",
    "Nice."
  ]
},
{
  category: "Entertainment: Film",
  type: "multiple",
  difficulty: "easy",
  question: "For the film 'Raiders of The Lost Ark', what was Harrison Ford sick with during the filming of the Cairo chase?",
  correct_answer: "Dysentery",
  incorrect_answer: [
    "Anemia",
    "Constipation",
    "Acid Reflux "
  ]
},
{
  category: "Entertainment: Film",
  type: "multiple",
  difficulty: "easy",
  question: "What was the first feature-length computer-animated movie?",
  correct_answer: "Toy Story",
  incorrect_answer: [
    "Tron",
    "Lion king",
    "101 Dalmatians"
  ]
},
{
  category: "Entertainment: Film",
  type: "multiple",
  difficulty: "easy",
  question: "In Big Hero 6, what fictional city is the Big Hero 6 from?",
  correct_answer: "San Fransokyo",
  incorrect_answer: [
    "San Tokyo",
    "Tokysisco",
    "Sankyo"
  ]
},
{
  category: "Entertainment: Film",
  type: "multiple",
  difficulty: "easy",
  question: "Where does the original Friday The 13th movie take place?",
  correct_answer: "Camp Crystal Lake",
  incorrect_answer: [
    "Packanack",
    "Higgins Haven",
    "Camp Forest Green"
  ]
},
{
category: "Entertainment: Film",
type: "multiple",
difficulty: "easy",
question: "Who starred as Bruce Wayne and Batman in Tim Burton's 1989 movie 'Batman'?",
correct_answer: "Michael Keaton",
incorrect_answer: [
"George Clooney",
"Val Kilmer",
"Adam West"
]
},
{
category: "Entertainment: Film",
type: "multiple",
difficulty: "easy",
question: "Who starred in the film 1973 movie 'Enter The Dragon'?",
correct_answer: "Bruce Lee",
incorrect_answer: [
"Jackie Chan",
"Jet Li",
" Yun-Fat Chow"
]
},
{
category: "Entertainment: Film",
type: "multiple",
difficulty: "easy",
question: "What was Dorothy's surname in 'The Wizard Of Oz'?",
correct_answer: "Gale",
incorrect_answer: [
"Perkins",
"Day",
"Parker"
]
},
{
category: "Entertainment: Film",
type: "multiple",
difficulty: "easy",
question: "This movie contains the quote, 'Houston, we have a problem.'",
correct_answer: "Apollo 13",
incorrect_answer: [
"The Right Stuff",
"Capricorn One",
"Marooned"
]
},
{
category: "Entertainment: Film",
type: "multiple",
difficulty: "easy",
question: "What was the first monster to appear alongside Godzilla?",
correct_answer: "Anguirus",
incorrect_answer: [
"King Kong",
"Mothra",
"King Ghidora"
]
},
{
category: "Entertainment: Film",
type: "multiple",
difficulty: "medium",
question: "Which of the following is NOT a quote from the 1942 film Casablanca? ",
correct_answer: "'Frankly, my dear, I don't give a damn.'",
incorrect_answer: [
"'Here's lookin' at you, kid.'",
"`Of all the gin joints, in all the towns, in all the world, she walks into mine!`",
"'Round up the usual suspects.'"
]
},
{
category: "Entertainment: Film",
type: "multiple",
difficulty: "medium",
question: "In the movie `The Iron Giant,` this character is the protagonist.",
correct_answer: "Hogarth Hughes",
incorrect_answer: [
"Kent Mansley",
"Dean McCoppin",
"Annie Hughes"
]
},
{
category: "Entertainment: Film",
type: "multiple",
difficulty: "medium",
question: "What was Marilyn Monroe`s character's first name in the film 'Some Like It Hot'?",
correct_answer: "Sugar",
incorrect_answer: [
"Honey",
"Caramel",
"Candy"
]
},
{
category: "Entertainment: Film",
type: "multiple",
difficulty: "medium",
question: "In which 1973 film does Yul Brynner play a robotic cowboy who malfunctions and goes on a killing\tspree?",
correct_answer: "Westworld",
incorrect_answer: [
"Runaway",
"Android",
"The Terminators"
]
},
{
category: "Entertainment: Film",
type: "multiple",
difficulty: "medium",
question: "Who voiced the character Draco in the 1996 movie 'DragonHeart'?",
correct_answer: "Sean Connery",
incorrect_answer: [
"Dennis Quaid",
"Pete Postlethwaite",
"Brian Thompson"
]
},
{
category: "Entertainment: Film",
type: "multiple",
difficulty: "medium",
question: "In the 1984 movie 'The Terminator', what model number is the Terminator portrayed by Arnold Schwarzenegger?",
correct_answer: "T-800",
incorrect_answer: [
"I-950",
"T-888",
"T-1000"
]
},
{
category: "Entertainment: Film",
type: "multiple",
difficulty: "medium",
question: "What is the name of James Dean's character in the 1955 movie 'Rebel Without a Cause'?",
correct_answer: "Jim Stark",
incorrect_answer: [
"Ned Stark",
"Jim Kane",
"Frank Stark"
]
},
{
category: "Entertainment: Film",
type: "multiple",
difficulty: "medium",
question: "In which 1955 film does Frank Sinatra play Nathan Detroit?",
correct_answer: "Guys and Dolls",
incorrect_answer: [
"Anchors Aweigh",
"From Here to Eternity",
"High Society"
]
},
{
category: "Entertainment: Film",
type: "multiple",
difficulty: "medium",
question: "What is the name of the robot in the 1951 science fiction film classic 'The Day the Earth Stood Still'?",
correct_answer: "Gort",
incorrect_answer: [
"Robby",
"Colossus",
"Box"
]
},
{
category: "Entertainment: Film",
type: "multiple",
difficulty: "medium",
question: "Which of the following James Bond villains is not affiliated with the SPECTRE organization?",
correct_answer: "Auric Goldfinger",
incorrect_answer: [
"Dr. Julius No",
"Rosa Klebb",
"Emilio Largo"
]
},
{
category: "Entertainment: Film",
type: "multiple",
difficulty: "medium",
question: "Who played Batman in the 1997 film 'Batman and Robin'?",
correct_answer: "George Clooney",
incorrect_answer: [
"Michael Keaton",
"Val Kilmer",
"Christian Bale"
]
},
{
category: "Entertainment: Film",
type: "multiple",
difficulty: "medium",
question: "This movie contains the quote, 'I love the smell of napalm in the morning!'",
correct_answer: "Apocalypse Now",
incorrect_answer: [
"Platoon",
"The Deer Hunter",
"Full Metal Jacket"
]
},
{
category: "Entertainment: Film",
type: "multiple",
difficulty: "medium",
question: "This movie contains the quote, 'What we've got here is a failure to communicate.'",
correct_answer: "Cool Hand Luke",
incorrect_answer: [
"Bonnie and Clyde",
"The Graduate",
"In the Heat of the Night"
]
},
{
category: "Entertainment: Film",
type: "multiple",
difficulty: "medium",
question: "In which African country was the 2006 film 'Blood Diamond' mostly set in?",
correct_answer: "Sierra Leone",
incorrect_answer: [
"Liberia",
"Burkina Faso",
"Central African Republic"
]
},
{
category: "Entertainment: Film",
type: "multiple",
difficulty: "medium",
question: "In what year was the first Transformers movie released?",
correct_answer: "1986",
incorrect_answer: [
"2007",
"1984",
"2009"
]
},
{
category: "Entertainment: Film",
type: "multiple",
difficulty: "medium",
question: "What does TIE stand for in reference to the TIE Fighter in 'Star Wars'?",
correct_answer: "Twin Ion Engine",
incorrect_answer: [
"Twin Iron Engine",
"Twin Intercepter Engine",
"Twin Inception Engine"
]
},
{
category: "Entertainment: Film",
type: "multiple",
difficulty: "medium",
question: "Which iconic character is featured in movies such as 'The Enforcer', 'Sudden Impact', and 'The Dead Pool'?",
correct_answer: "Dirty Harry",
incorrect_answer: [
"Indiana Jones",
"James Bond",
"Harry Potter"
]
},
{
category: "Entertainment: Film",
type: "multiple",
difficulty: "medium",
question: "What is the name of the villian in the 2015 Russian-American Sci-Fi Movie 'Hardcore Henry'?",
correct_answer: "Akan",
incorrect_answer: [
"Estelle",
"Jimmy",
"Henry"
]
},
{
category: "Entertainment: Film",
type: "multiple",
difficulty: "medium",
question: "In the 1979 British film 'Quadrophenia' what is the name of the seaside city the mods are visiting?",
correct_answer: "Brighton",
incorrect_answer: [
"Eastbourne",
"Mousehole",
"Bridlington"
]
},
{
category: "Entertainment: Film",
type: "multiple",
difficulty: "medium",
question: "Who played Baron Victor Frankestein in the 1957 Hammer horror film 'The Curse of Frankenstein'?",
correct_answer: "Peter Cushing",
incorrect_answer: [
"Boris Karloff",
"Vincent Price",
"Lon Chaney Jr."
]
},
{
category: "Entertainment: Film",
type: "multiple",
difficulty: "medium",
question: "In the 2010 Nightmare on Elm Street reboot, who played Freddy Kruger?",
correct_answer: "Jackie Earle Haley",
incorrect_answer: [
"Tyler Mane",
"Derek Mears",
"Gunnar Hansen"
]
},
{
category: "Entertainment: Film",
type: "multiple",
difficulty: "medium",
question: "Which one of these actors is said to be cut from the film 'E.T. the Extra-Terrestrial'?",
correct_answer: "Harrison Ford",
incorrect_answer: [
"Michael J. Fox",
"Andy Kaufman",
"Arnold Schwarzenegger"
]
},
{
category: "Entertainment: Film",
type: "multiple",
difficulty: "medium",
question: "What is the correct phrase for the Latin saying 'Romanes Eunt Domus' in Monty Python's Life of Brian?",
correct_answer: "Romani Ite Domum",
incorrect_answer: [
"Romans Go Home",
"Roxani Ite Domum",
"Tomate Ite Domum"
]
},
{
category: "Entertainment: Film",
type: "multiple",
difficulty: "medium",
question: "Who played Sgt. Gordon Elias in 'Platoon' (1986)?",
correct_answer: "Willem Dafoe",
incorrect_answer: [
"Charlie Sheen",
"Matt Damon",
"Johnny Depp"
]
},
{
category: "Entertainment: Film",
type: "multiple",
difficulty: "medium",
question: "Who voices the main character Blu in the 2011 animated film 'Rio'?",
correct_answer: "Jesse Eisenberg",
incorrect_answer: [
"Michael Cera",
"Jonah Hill",
"Zach Galifianakis"
]
},
{
category: "Entertainment: Film",
type: "multiple",
difficulty: "medium",
question: "In what year was the movie 'Police Academy' released?",
correct_answer: "1984",
incorrect_answer: [
"1986",
"1985",
"1983"
]
},
{
category: "Entertainment: Film",
type: "multiple",
difficulty: "medium",
question: "In Back to the Future Part II, Marty and Dr. Emmett Brown go to which future date?",
correct_answer: "October 21, 2015",
incorrect_answer: [
"August 28, 2015",
"July 20, 2015",
"January 25, 2015"
]
},
{
category: "Entertainment: Film",
type: "multiple",
difficulty: "medium",
question: "In the 1999 movie Fight Club, which of these is not a rule of the 'fight club'?",
correct_answer: "Always wear a shirt",
incorrect_answer: [
"You do not talk about FIGHT CLUB",
"Only two guys to a fight",
"Fights will go on as long as they have to"
]
},
{
category: "Entertainment: Film",
type: "multiple",
difficulty: "medium",
question: "Darth Vader's famous reveal to Luke is iconic. But which of these is the right one?",
correct_answer: "'No. I am your father.'",
incorrect_answer: [
"'Luke, I am your father.'",
"'You're wrong. I am your father.'",
"'The truth is that I am your father.'"
]
},
{
category: "Entertainment: Film",
type: "multiple",
difficulty: "medium",
question: "This trope refers to minor characters that are killed off to show how a monster works.",
correct_answer: "Red Shirt",
incorrect_answer: [
"Minions",
"Expendables",
"Cannon Fodder"
]
},
{
category: "Entertainment: Film",
type: "multiple",
difficulty: "medium",
question: "What year did the James Cameron film 'Titanic' come out in theaters?",
correct_answer: "1997",
incorrect_answer: [
"1996",
"1998",
"1999"
]
},
{
category: "Entertainment: Film",
type: "multiple",
difficulty: "medium",
question: "What city did the monster attack in the film, 'Cloverfield'?",
correct_answer: "New York, New York",
incorrect_answer: [
"Las Vegas, Nevada",
"Chicago, Illinois",
"Orlando, Florida"
]
},
{
category: "Entertainment: Film",
type: "multiple",
difficulty: "medium",
question: "What was the name of the protagonist in the movie Commando (1985)?",
correct_answer: "John Matrix",
incorrect_answer: [
"Ben Richards",
"Douglas Quaid",
"Harry Tasker"
]
},
{
category: "Entertainment: Film",
type: "multiple",
difficulty: "medium",
question: "What is the correct spelling of the protagonist of the book in The NeverEnding Story (1984)?",
correct_answer: "Atreyu",
incorrect_answer: [
"Atrayu",
"Atraiyu",
"Atraeyu"
]
},
{
category: "Entertainment: Film",
type: "multiple",
difficulty: "medium",
question: "In which movie does Robin Williams' character have to disguise themselves into a woman?",
correct_answer: "Mrs. Doubtfire",
incorrect_answer: [
"Old Dogs",
"Jumanji",
"Awakenings"
]
},
{
category: "Entertainment: Film",
type: "multiple",
difficulty: "medium",
question: "What type of cheese, loved by Wallace and Gromit, had it's sale prices rise after their successful short films?",
correct_answer: "Wensleydale",
incorrect_answer: [
"Cheddar",
"Moon Cheese",
"Edam"
]
},
{
category: "Entertainment: Film",
type: "multiple",
difficulty: "medium",
question: "Which famous singer was portrayed by actor Kevin Spacey in the 2004 biographical film 'Beyond the Sea'?",
correct_answer: "Bobby Darin",
incorrect_answer: [
"Louis Armstrong",
"Frank Sinatra",
"Dean Martin"
]
},
{
category: "Entertainment: Film",
type: "multiple",
difficulty: "medium",
question: "Who is the director of the 1991 film 'Silence of the Lambs'?",
correct_answer: "Jonathan Demme",
incorrect_answer: [
"Stanley Kubrick",
"Frank Darabont",
"Michael Bay"
]
},
{
category: "Entertainment: Film",
type: "multiple",
difficulty: "medium",
question: "Who was the director of 'Scott Pilgrim vs. the World (2010)'?",
correct_answer: "Edgar Wright",
incorrect_answer: [
"Phil Lord",
"Chris Miller",
"Seth Rogan"
]
},
{
category: "Entertainment: Film",
type: "multiple",
difficulty: "medium",
question: "Leonardo Di Caprio won his first Best Actor Oscar for his performance in which film?",
correct_answer: "The Revenant",
incorrect_answer: [
"The Wolf Of Wall Street",
"Shutter Island",
"Inception"
]
},
{
category: "Entertainment: Film",
type: "multiple",
difficulty: "medium",
question: "Which documentary film maker wrote and starred in the film 'My Scientology Movie' which first debuted in 2015?",
correct_answer: "Louis Theroux",
incorrect_answer: [
"Errol Morris",
"Joe Berlinger",
"Adam Curtis"
]
},
{
category: "Entertainment: Film",
type: "multiple",
difficulty: "medium",
question: "What is the make and model of the tour vehicles in 'Jurassic Park'?",
correct_answer: "1992 Ford Explorer XLT",
incorrect_answer: [
"1992 Toyota Land Cruiser",
"1992 Jeep Wrangler YJ Sahar",
"Mercedes M-Class"
]
},
{
category: "Entertainment: Film",
type: "multiple",
difficulty: "medium",
question: "In 'Jurassic World', which company purchases InGen and creates Jurassic World?",
correct_answer: "Masrani Global Corporation ",
incorrect_answer: [
"Biology Synthetics Technologies",
"International Genetics Incorporated",
"International Genetic Technologies"
]
},
{
category: "Entertainment: Film",
type: "multiple",
difficulty: "medium",
question: "Who directed the movie 'Alien'?",
correct_answer: "Ridley Scott",
incorrect_answer: [
"Christopher Nolan",
"Michael Bay",
"James Cameron"
]
},
{
category: "Entertainment: Film",
type: "multiple",
difficulty: "medium",
question: "Who plays 'Bruce Wayne' in the 2008 movie 'The Dark Knight'?",
correct_answer: "Christian Bale",
incorrect_answer: [
"Michael Caine",
"Ron Dean",
"Heath Ledger"
]
},
{
category: "Entertainment: Film",
type: "multiple",
difficulty: "medium",
question: "Which former Star Trek actor directed Three Men and a Baby (1987)?",
correct_answer: "Leonard Nimoy",
incorrect_answer: [
"William Shatner",
"George Takei",
"James Doohan"
]
},
{
category: "Entertainment: Film",
type: "multiple",
difficulty: "medium",
question: "Which town is the setting for the Disney movie The Love Bug (1968)?",
correct_answer: "San Francisco",
incorrect_answer: [
"Los Angeles",
"Sacramento",
"San Jose"
]
},
{
category: "Entertainment: Film",
type: "multiple",
difficulty: "medium",
question: "Who provided a majority of the songs and lyrics for 'Spirit: Stallion of the Cimarron'?",
correct_answer: "Bryan Adams",
incorrect_answer: [
"Smash Mouth",
"Oasis",
"Air Supply"
]
},
{
category: "Entertainment: Film",
type: "multiple",
difficulty: "medium",
question: "In the Friday The 13th series, what is Jason's mother's first name?",
correct_answer: "Pamela",
incorrect_answer: [
"Mary",
"Christine",
"Angeline"
]
}

]);
