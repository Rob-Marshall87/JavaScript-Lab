const FilmTrivia = require('../models/film_trivia.js');
const PubSub = require('../helpers/pub_sub.js');

const FilmTriviaFormView = function(filmTriviaForm) {
  this.filmTriviaForm = filmTriviaForm;
  filmTrivia = new FilmTrivia;
};

FilmTriviaFormView.prototype.bindEvents = function () {
  PubSub.subscribe('FilmTrivia:items-ready', (evt) => {
    this.questions = evt.detail;
    // const newQuestion = filmTrivia.newQuestion(this.questions);
    const randomObject = filmTrivia.newQuestion(this.questions);

    const question = randomObject.question;
    const correctAnswer = randomObject.correct_answer;
    const answers = filmTrivia.answers(randomObject)

    filmTrivia.populateQuestion(question);
    filmTrivia.populateAnswers(answers);
  })
};

  //subs to data-ready
  // grabs display div
  //calls populateQuestion function
  //calls generate answer box
  //calls multiply boxes
  //adds event listeners to each box (click)
  //sends correct/incorrect to film_trivia.js

module.exports = FilmTriviaFormView;
