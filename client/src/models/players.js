const PubSub = require('../helpers/pub_sub.js');
const RequestHelper = require('../helpers/request_helper.js');


const Player = function () {
  this.points = 0;
  //this.name
};

Player.prototype.bindEvents = function () {
  PubSub.subscribe('FilmTriviaForm:team-selected', (evt) => {
    console.log(evt.detail);
      this.questionAnswered(evt);
  });
};

Player.prototype.questionAnswered = function () {

  PubSub.subscribe('FilmTriviaForm:answer', (evt) => {
    this.triviaAddPoints(evt);
  });

  // PubSub.subscribe('FilmTriviaForm:Inputted-answer-image', (evt) => {
  //   this.imageAddPoints(evt);
  // });

  // PubSub.publish('Players:return-scores', (team1, team2));
  // this.checkGamePoints();
};


// Players.prototype.changePlayer = function {
// if (player === this.player1) {
//
// }
// };


Player.prototype.triviaAddPoints = function (evt) {
  const points = this.points;
  if (evt.detail) {
    // alert('woo')
    this.points = points + 20;
  }else {
    // alert('boo')
  }
  console.log(this.points);
  // alert('what')
};

// Player.prototype.imageAddPoints = function () {
//   PubSub.subscribe('FormView:question-answered', (evt) => {
//     const points = this.points;
//     this.points = points + 50;
//   });
//   // return points
// };

// Player.prototype.checkGamePoints = function () {
//   if (team1.points = 200) {
//     PubSub.publish('Players:game-won', 'Player one wins the game')
//   } else if (team2.points = 200) {
//     PubSub.publish('Players:game-won', 'Player two wins the game')
//   }
// };


module.exports = Player;
