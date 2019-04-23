const PubSub = require('../helpers/pub_sub.js');
const RequestHelper = require('../helpers/request_helper.js');


const Player = function () {
  this.points = 0;
};

const team1 = new Player();
const team2 = new Player();


Player.prototype.bindEvents = function () {
  PubSub.subscribe('FilmTriviaForm:team-selected', (evt) => {
    // console.log(evt.detail);
    if (evt.detail === team1) {
      team1.questionAnswered(evt.detail);
    }else {
      team2.questionAnswered(evt.detail);
    };
  });
};

Player.prototype.questionAnswered = function () {

  PubSub.subscribe('FilmTriviaForm:answer', (evt) => {
    this.triviaAddPoints(evt);
  });

  // PubSub.subscribe('FilmTriviaForm:Inputted-answer-image', (evt) => {
  //   this.imageAddPoints(evt);
  // });

  PubSub.publish('Players:return-scores', (team1, team2));
  this.checkGamePoints();
};


// Players.prototype.changePlayer = function {
// if (player === this.player1) {
//
// }
// };


Player.prototype.triviaAddPoints = function (evt) {
  if (evt.detail) {
    // alert('woo')
    this.points += 20;
  }else {
    // alert('boo')
    this.points -= 20;
  }
  // alert('what')
};

// Player.prototype.imageAddPoints = function () {
//   PubSub.subscribe('FormView:question-answered', (evt) => {
//     const points = this.points;
//     this.points = points + 50;
//   });
//   // return points
// };

Player.prototype.checkGamePoints = function () {
  if (team1.points = 200) {
    PubSub.publish('Players:game-won', 'Player one wins the game')
  } else if (team2.points = 200) {
    PubSub.publish('Players:game-won', 'Player two wins the game')
  }
};


module.exports = Player;
