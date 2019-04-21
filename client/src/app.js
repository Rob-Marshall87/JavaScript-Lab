const FilmTriviaFormView = require('./views/film_trivia_form_view.js');
const FilmTriviaGridView = require('./views/film_trivia_grid_view.js');
const FilmTrivia = require('./models/film_trivia.js');
const Grid = require('./models/grid.js');

document.addEventListener('DOMContentLoaded', () => {
  // const filmTriviaForm = document.querySelector('form#filmTrivia');
  // const filmTriviaFormView = new FilmTriviaFormView(filmTriviaForm);
  // filmTriviaFormView.bindEvents();
  //
  // const filmTriviaGridContainer = document.querySelector('div#filmTrivia');
  // const filmTriviaGridView = new FilmTriviaGridView(filmTriviaGridContainer);
  // filmTriviaGridView.bindEvents();

<<<<<<< HEAD
  // const filmTriviaGridContainer = document.querySelector('div#filmTrivia');
  // const filmTriviaGridView = new FilmTriviaGridView(filmTriviaGridContainer);
  // filmTriviaGridView.bindEvents();

  const url = 'http://localhost:3000/api/questions';
  const filmTrivia = new FilmTrivia(url);
  filmTrivia.bindEvents();
  filmTrivia.getData();
=======
  // const url = 'http://localhost:3000/api/questions';
  // const filmTrivia = new FilmTrivia(url);
  // filmTrivia.bindEvents();
  // filmTrivia.getData();
  const grid = new Grid();
  grid.populate();
  grid.randomiser();
>>>>>>> 046df67334a8c2aadf9e8a6608ae28e8162096d8
});
