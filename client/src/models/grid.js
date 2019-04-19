const Grid = function(){
  this.grid = [false, false, false,
               false, false, false,
               false, true, false]
}

Grid.prototype.populate = function() {
    for (i = 0; i < 9; i++) {
      if (this.grid[i]) {
          const box = document.querySelector(`#grid-${i}`);
          console.log(box);
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
    // for (i = 0; i < 9; i++) {
    //   this.grid[i] = false;
    // }
    // this.populate();
}

module.exports = Grid;
