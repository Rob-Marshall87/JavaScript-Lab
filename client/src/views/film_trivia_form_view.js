const FilmTrivia = require('../models/film_trivia.js');
const PubSub = require('../helpers/pub_sub.js');

const FilmTriviaFormView = function(filmTriviaForm) {
  this.filmTriviaForm = filmTriviaForm;
  filmTrivia = new FilmTrivia;
};

FilmTriviaFormView.prototype.bindEvents = function () {
  const scoreDivs = document.querySelectorAll('.team-score');
  for (var i = 0; i < scoreDivs.length; i++) {
    const p = document.createElement('p');
    p.textContent = `Team ${i + 1} score: 0`;
    scoreDivs[i].appendChild(p);
  }

  PubSub.subscribe('FilmTrivia:items-ready', (evt) => {
    this.questions = evt.detail;
    // const newQuestion = filmTrivia.newQuestion(this.questions);
    const randomObject = filmTrivia.newQuestion(this.questions);

    const question = randomObject.question;
    const answers = filmTrivia.answers(randomObject);
    filmTrivia.populateQuestion(question);
    filmTrivia.populateAnswers(answers);

    const teamBuzzers = document.querySelectorAll('.team-buzzer');

     for (var i = 0; i < teamBuzzers.length; i++) {
       teamBuzzers[i].addEventListener('click', (evt) => {
         this.handleClick(evt.target.id);
       })
     };

    const correctAnswer = randomObject.correct_answer;
    this.boxes = document.querySelectorAll('.p');

    for (var i = 0; i < this.boxes.length; i++) {
      this.boxes[i].addEventListener('click', (evt) => {
        if (evt.target.innerText === correctAnswer) {
          PubSub.publish('FilmTriviaForm:answer', true);
          filmTrivia.bigAnswerText(correctAnswer, true);
          filmTrivia.textBox();
        } else {
          PubSub.publish('FilmTriviaForm:answer', false);
          filmTrivia.bigAnswerText(correctAnswer, false);
        }
      });
    };
  });
  PubSub.subscribe('Players:return-scores', (team1, team2) => {
    console.log(team1.detail);
    console.log(team2.detail);
  });
};

FilmTriviaFormView.prototype.handleClick = function (evt) {
  // evt.preventDefault();
  const teamSelected = evt;
  console.log(teamSelected);
  // console.log(teamSelected);

  PubSub.publish('FilmTriviaForm:team-selected', teamSelected);
  // evt.target.reset();
};

module.exports = FilmTriviaFormView;
