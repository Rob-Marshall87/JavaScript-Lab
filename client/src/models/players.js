const Player = function{
  this.player1 = 0;
  this.player2 = 0
};


Players.prototype.bindEvents = function () {
  PubSub.subscribe('FormView:player1-selected', (evt) => {
    this.playerSelected(evt.detail);
  });

  PubSub.subscribe('FormView:player2-selected', (evt) => {
    this.playerSelected(evt.detail);
  });
};




Players.prototype.playerSelected = function () {
  if (evt.detail === player1) {
    player = this.player1;
  }else {
    player = this.player2;
  }
  player.addPoints(evt.detail)
};


Players.prototype.changePlayer = function {
if (player === this.player1) {

}
};



Players.prototype.addPoints = function {
  PubSub.subscribe('FormView:question-answered', (evt) => {
    if (true) {
      player = player + points
    } else {

    }
  });
};
