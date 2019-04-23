const FilmTrivia = require('../models/film_trivia.js');
const PubSub = require('../helpers/pub_sub.js');

const FilmTriviaFormView = function(filmTriviaForm) {
  this.filmTriviaForm = filmTriviaForm;
  this.questions = null;
  filmTrivia = new FilmTrivia;
};

FilmTriviaFormView.prototype.bindEvents = function () {
  const team1ScoreDiv = document.querySelector('#team1-score');
  const team2ScoreDiv = document.querySelector('#team2-score');

    const p1 = document.createElement('p');
    p1.textContent = `Team 1 score: 0`;
    team1ScoreDiv.appendChild(p1);
    const p2 = document.createElement('p');
    p2.textContent = `Team 2 score: 0`;
    team2ScoreDiv.appendChild(p2);


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
  const teamSelected = evt;
  PubSub.publish('FilmTriviaForm:team-selected', teamSelected);
  filmTrivia.reset(this.questions);
};

module.exports = FilmTriviaFormView;
