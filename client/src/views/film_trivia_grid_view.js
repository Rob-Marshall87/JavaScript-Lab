const Grid = require('../models/grid.js');
const PubSub = require('../helpers/pub_sub.js');

const FilmTriviaGridView = function(filmTriviaGridContainer) {
  this.filmTriviaGridContainer = filmTriviaGridContainer;
};

FilmTriviaGridView.prototype.bindEvents = function () {
    const gridContainer = document.querySelector(this.filmTriviaGridContainer);
    PubSub.subscribe("Grid:NewFilmPicture", (evt) => {
      const currentImage = evt.detail.file;
      const gridURL = `url(./css/img/${currentImage})`;
      gridContainer.style.backgroundImage = gridURL;
    });
}
module.exports = FilmTriviaGridView;
