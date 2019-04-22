const Player = function {
  this.points = 0;
};

const team1 = new Player();
const team2 = new Player();


Players.prototype.bindEvents = function () {
  PubSub.subscribe('FormView:player1-selected', (evt) => {
    team1.questionAnswered(evt.detail);
  });

  PubSub.subscribe('FormView:player2-selected', (evt) => {
    team2.questionAnswered(evt.detail);
  });
};

Players.prototype.questionAnswered = function () {
  PubSub.subscribe('FormView:Inputted-answer-trivia', (evt) => {
    this.triviaAddPoints(evt);
  });

  PubSub.subscribe('FormView:Inputted-answer-image', (evt) => {
    this.imageAddPoints(evt);
  });

  PubSub.publish('Players:return-scores', (team1, team2));
  this.checkGamePoints();
};


// Players.prototype.changePlayer = function {
// if (player === this.player1) {
//
// }
// };



Players.prototype.triviaAddPoints = function () {
  PubSub.subscribe('FormView:question-answered', (evt) => {
    const points = this.points;
    this.points = points + 20;
  });
  // return points
};

Players.prototype.imageAddPoints = function () {
  PubSub.subscribe('FormView:question-answered', (evt) => {
    const points = this.points;
    this.points = points + 50;
  });
  // return points
};

Players.prototype.checkGamePoints = function () {
  if (team1.points = 200) {
    PubSub.publish('Players:game-won', 'Player one wins the game')
  } else if (team2.points = 200) {
    PubSub.publish('Players:game-won', 'Player two wins the game')
  }
};
