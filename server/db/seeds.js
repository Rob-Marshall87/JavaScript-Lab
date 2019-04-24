use trivia_questions;
db.dropDatabase();

db.questions.insertMany([{
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
  correct_answer: "Alejandro G. I&ntilde;&aacute;rritu",
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
}

]);
