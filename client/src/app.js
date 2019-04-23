const FilmTriviaFormView = require('./views/film_trivia_form_view.js');
const FilmTriviaGridView = require('./views/film_trivia_grid_view.js');
const FilmTrivia = require('./models/film_trivia.js');
const Grid = require('./models/grid.js');
const Player = require('./models/players.js')

document.addEventListener('DOMContentLoaded', () => {
  const filmTriviaForm = document.querySelector('#question-box');
  const filmTriviaFormView = new FilmTriviaFormView(filmTriviaForm);
  filmTriviaFormView.bindEvents();

  // const filmTriviaGridContainer = document.querySelector('div#filmTrivia');
  // const filmTriviaGridView = new FilmTriviaGridView(filmTriviaGridContainer);
  // filmTriviaGridView.bindEvents();

  const url = 'http://localhost:3000/api/questions';
  const filmTrivia = new FilmTrivia(url);
  filmTrivia.bindEvents();
  filmTrivia.getData();

  const grid = new Grid();
  grid.populate();
  grid.randomiser();

  const team1 = new Player();
  const team2 = new Player();
  console.log(team1);
  team1.bindEvents();
  team2.bindEvents();
});
