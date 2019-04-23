const Grid = require('../models/grid.js');
const PubSub = require('../helpers/pub_sub.js');

const FilmTriviaGridView = function(filmTriviaGridContainer) {
  this.filmTriviaGridContainer = filmTriviaGridContainer;
};

FilmTriviaGridView.prototype.bindEvents = function () {
    console.log(this.filmTriviaGridContainer)
    const gridContainer = document.querySelector(this.filmTriviaGridContainer);
    PubSub.subscribe("Grid:NewFilmPicture", (evt) => {
      const currentImage = evt.detail.file;
      console.dir(currentImage);
      const gridURL = `url(./css/img/${currentImage})`;
      console.log(gridURL);
      console.dir(gridContainer);
      gridContainer.style.backgroundImage = gridURL;
    });
}
module.exports = FilmTriviaGridView;
