const PubSub = require('../helpers/pub_sub.js');
const Grid = function(){
  this.grid = [true, false, false,
               false, true, false,
               false, false, true];
  this.answers = [{film:'seven', file: '0.png' },
          { film: 'pulp fiction', file:'1.png' },
          { film:'blade runner 2049', file:'2.jpg' },
          { film:'raiders of the lost ark', file:'3.png' },
          { film:'lord of the rings', file:'4.jpg' } ,
          { film:'inglorious bastards', file:'5.png' },
          { film:'empire strikes back', file:'6.png' },
          { film:'alien', file:'7.png' },
          { film:'skyfall', file:'8.png' },
          { film:'temple of doom', file:'9.png' },
          { film:'rogue one', file:'10.jpg' },
          { film:'sin city', file:'11.jpg' },
          { film: 'psycho', file: '12.png' },
          { film: 'ghostbusters 2', file: '13.png' },
          { film: 'the truman show', file: '14.png' },
          { film: 'kill bill volume 1', file: '15.png' },
          { film: 'the shining', file: '16.jpg' },
          { film: 'ghostbusters', file: '17.jpg' },
          { film: 'star wars', file: '18.png' },
          { film: 'lord of the rings', file: '19.png' }
        ],
        this.currentFilm = this.selectRandomFilm();
        this.gameOver = false;

}

Grid.prototype.bindEvents = function() {

  PubSub.subscribe('FilmTrivia: Question-Answered', (evt) => {
    if (evt.detail.toLowerCase() === currentFilm.film ) {
      this.clearGrid();
      this.gameOver = true;
    }
  });
  console.log(this.currentFilm);
}

// Grid.prototype.createRandomiserButton = function () {
//   const button = document.createElement('button');
//   button.classList.add('random-btn');
//   button.value = blah;
//
//   button.addEventListener('click', (evt) => {
//     PubSub.publish('Grid: Randomiser-clicked', evt.target.value);
//   });
//
//   return button;
// };
Grid.prototype.selectRandomFilm = function(){
  filmIndex = this.randomIndex(answers.length);
  return this.answers.splice(filmIndex, 1);
}
Grid.prototype.populate = function() {
    for (i = 0; i < 9; i++) {
      if (this.grid[i]) {
          const box = document.querySelector(`#grid-${i}`);
          // console.log(box);
          box.style.opacity = '0.0';
      }
    }
}
Grid.prototype.reset = function() {
    for (let i = 0; i < 9; i++) {
      this.grid[i] = false;
    }
    this.populate();
}
Grid.prototype.randomiser = function() {
    const active = [];
    for (i = 0; i < 9; i++) {
      if (this.grid[i] === false) { active.push(i) };
    }

    // console.log('Active:', active);
    // let index = 0;
    let box;
    let colour = 'rgba(128, 128, 255, 1.0)'

    index =  this.randomIndex(active.length);
    this.tenTimes(active, active.length, 6);
}
Grid.prototype.clearGrid = function() {
  for (let i = 0; i < 9; i++) {
        const box = document.querySelector(`#grid-${i}`);
        box.style.opacity = '0.0';
    };
  };

Grid.prototype.tenTimes = function(active, len, count){
  this.changeBox(active, len);
  if (count > 0) {
    count--;
    setTimeout(()=>{this.tenTimes(active, len, count)}, 1800);
  }
}



Grid.prototype.changeBox =  function(active, len) {
  index =  this.randomIndex(active.length);
  const box = document.querySelector(`#grid-${active[index]}`);
  this.flash(6, box, 'red');
  if (len > 0) {
    len--;
    setTimeout(()=>{this.changeBox(active, len)}, 300);
  }
}
Grid.prototype.flash = function (times, box, colour) {
  colour = (colour === 'red') ? 'rgba(128, 128, 255, 1.0)' : 'red';
  this.goColour(box, colour);
  if (times > 0) {
    setTimeout(() => {
      this.flash(--times, box, colour);
    }, 100)
  }
};
Grid.prototype.goColour = function(box, colour){
  box.style.backgroundColor = colour;
};
Grid.prototype.randomIndex = function(number){
  return Math.floor(Math.random() * (number));
}

// Grid.prototype.flash = function(box, colour){
//   box.style.backgroundColor = colour;
// }

module.exports = Grid;
