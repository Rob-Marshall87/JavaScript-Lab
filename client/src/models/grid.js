const PubSub = require('../helpers/pub_sub.js');
const Grid = function(){
  this.grid = [false, false, false,
               false, false, false,
               false, false, false];
  this.answers = [{film:'seven', file: '0.png' },
          { film: 'pulp fiction', file:'1.png' },
          { film:'blade runner 2049', file:'2.jpg' },
          { film:'raiders of the lost ark', file:'3.png' },
          { film:'lord of the rings', file:'4.jpg' } ,
          { film:'inglourious basterds', file:'5.png' },
          { film:'empire strikes back', file:'6.png' },
          { film:'alien', file:'7.png' },
          { film:'skyfall', file:'8.png' },
          { film:'temple of doom', file:'9.png' },
          { film:'rogue one', file:'10.jpg' },
          { film:'sin city', file:'11.png' },
          { film: 'psycho', file: '12.png' },
          { film: 'ghostbusters 2', file: '13.png' },
          { film: 'the truman show', file: '14.png' },
          { film: 'kill bill', file: '15.png' },
          { film: 'the shining', file: '16.jpg' },
          { film: 'ghostbusters', file: '17.jpg' },
          { film: 'star wars', file: '18.png' },
          { film: 'lord of the rings', file: '19.png' }
        ],
        // this.currentFilm = this.selectRandomFilm();
        this.gameOver = false;
        this.howManyMoreBlinks = 0;
        this.buttonPressed = false;
        this.currentFilm;

}

Grid.prototype.bindEvents = function() {

  this.currentFilm = this.selectRandomFilm();
  // console.log(this.currentFilm);
  // console.log(this.answers);
  PubSub.publish("Grid:NewFilmPicture", this.currentFilm);
  // console.log(this.currentFilm.film);
  // PubSub.subscribe('FilmTrivia: Question-Answered', (evt) => {
  //   if (evt.detail.toLowerCase() === currentFilm.film ) {
  //     this.clearGrid();
  //     this.gameOver = true;
  //   }
  // });
  // console.log(this.currentFilm);
  PubSub.subscribe('finished-blink', ()=>{
    this.blinkAgainIfNeeded();
  });
  PubSub.subscribe('FilmTrivia:Question-Answered', (evt)=> {
    const title = evt.detail.toLowerCase();
    if (title === this.currentFilm.film) {
      this.clearGrid();
      PubSub.publish('Grid:AnswerCorrect/Incorrect', {title: title, boolean: true});
    }
    else {
      PubSub.publish('Grid:AnswerCorrect/Incorrect', {title: title, boolean: false});
    }
  });
  PubSub.subscribe('FilmTrivia:NextRound', ()=> {
    this.reset();
    this.currentFilm = this.selectRandomFilm();
    PubSub.publish("Grid:NewFilmPicture", this.currentFilm);
  });
  PubSub.subscribe('FilmTrivia:TriggerRandomiser', () => {
    this.startBlinking();
  });
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
  filmIndex = this.randomIndex(this.answers.length);
  const filmRandom = this.answers.splice(filmIndex, 1);
  return filmRandom[0];
}
Grid.prototype.populate = function() {
    for (let i = 0; i < 9; i++) {
      const box = document.querySelector(`#grid-${i}`);
      (this.grid[i]) ? box.style.opacity = '0.0' : box.style.opacity = '1.0'
    }
}
// Grid.prototype.dePopulate = function() {
//     for (i = 0; i < 9; i++) {
//           const box = document.querySelector(`#grid-${i}`);
//           box.style.opacity = '1.0';
//     }
// }
Grid.prototype.reset = function() {
    for (let i = 0; i < 9; i++) {
      this.grid[i] = false;
    }
    this.populate();
}

Grid.prototype.startBlinking = function() {
  this.howManyMoreBlinks = 15;
  this.blinkAgainIfNeeded()
}

Grid.prototype.blinkAgainIfNeeded = function() {
  if ((this.howManyMoreBlinks >= 0 ) || (this.buttonPressed)) {
    this.howManyMoreBlinks -= 1;
    const randomActiveIndex = this.randomActiveIndex()
    const box = document.querySelector(`#grid-${randomActiveIndex}`);
    this.blinkAgain(box);
  }else{
    this.removeBox(randomActiveIndex)
  }
}

Grid.prototype.blinkAgain = function(box){
  this.goColour(box, 'yellow');
  setTimeout(()=>{
    this.goColour(box, '');
    PubSub.publish('finished-blink');
  }, 200);
}

Grid.prototype.removeBox = function(index){
  this.grid[index] = true;
  this.populate();
}

// Grid.prototype.randomiser = function() {
//     const active = [];
//     for (i = 0; i < 9; i++) {
//       if (this.grid[i] === false) { active.push(i) };
//     }
//
//     // console.log('Active:', active);
//     // let index = 0;
//     let box;
//     let colour = 'rgba(128, 128, 255, 1.0)'
//
//     // const index =  this.randomIndex(active.length);
//     this.tenTimes(active, active.length, 6);
// }
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
  const index =  this.randomIndex(active.length);
  const box = document.querySelector(`#grid-${active[index]}`);
  this.flash(6, box, 'red');
  if (len > 0) {
    len--;
    setTimeout(()=>{this.changeBox(active, len)}, 300);
  }
}

Grid.prototype.flash = function (times, box, colour) {
  colour = (colour === 'red') ? 'rgba(246, 179, 51, 1.0)' : 'red';
  this.goColour(box, colour);
  if (times > 0) {
    setTimeout(() => {
      this.flash(--times, box, colour);
    }, 100)
  }
};

Grid.prototype.randomActiveIndex = function() {
  //cleanup actives:
  // [true, false,false, true,false...]
  const justActiveIndexesWithUndefines = this.grid.map((item, index) => {
    return (item === true)? undefined : index ;
  })
  // [undefined, 1, 2, undefined, 4]
  const justActiveIndexes = justActiveIndexesWithUndefines.filter((undefOrIndex) => {return undefOrIndex !== undefined; })
  // [1,2,4]
  return randomActiveIndex = this.randomObjectInArray(justActiveIndexes)
}

Grid.prototype.goColour = function(box, colour){
  box.style.backgroundColor = colour;
};
Grid.prototype.randomIndex = function(number){
  return Math.floor(Math.random() * (number));
}
Grid.prototype.randomObjectInArray = function(array){
  const index = Math.floor(Math.random() * (array.length));
  return array[index];
}
// Grid.prototype.flash = function(box, colour){
//   box.style.backgroundColor = colour;
// }

module.exports = Grid;
