const PubSub = require('../helpers/pub_sub.js');
const Grid = function(){
  this.grid = [true, false, false,
               false, true, false,
               false, false, true]
}
// Grid.prototype.bindEvents = funtion() {
//   PubSub.subscribe('FilmTrivia: Randomiser-clicked', () => {
//
//   })
// }

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
    for (i = 0; i < 9; i++) {
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

      // for (let x = 0; x < 20; x++){
        index =  this.randomIndex(active.length);
        // box = document.querySelector(`#grid-${active[index]}`);
        // (colour === 'red') ? colour = 'rgba(128, 128, 255, 1.0)': colour = 'red';
        // setInterval(this.goColour(box, 'red'),500);
        //
        // setInterval(this.goColour(box, 'rgba(128, 128, 255, 1.0)'),500);

        // const interval = setInterval(() => {
        //   colour = (colour === 'red') ? 'rgba(128, 128, 255, 1.0)' : 'red';
        //   this.goColour(box, colour);
        //
        // }, 1000);

        this.tenTimes(active, active.length, 6);

        // setTimeout(()=> {console.log('Banana!');}, 2500);
        // this.goColour(box, colour);


}

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
