const PubSub = require('../helpers/pub_sub.js');

const FilmTriviaFormView = function(filmTriviaForm) {
  this.filmTriviaForm = filmTriviaForm;
};

FilmTriviaFormView.prototype.bindEvents = function () {
  PubSub.subscribe('FilmTrivia:items-ready', (evt) => {
    console.log(evt.detail);
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
