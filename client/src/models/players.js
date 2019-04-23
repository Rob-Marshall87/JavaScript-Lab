const PubSub = require('../helpers/pub_sub.js');
const RequestHelper = require('../helpers/request_helper.js');


const Player = function () {
  this.points = 0;
  //this.name
};

Player.prototype.bindEvents = function () {
  PubSub.subscribe('FilmTriviaForm:team-selected', (evt) => {
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

Player.prototype.triviaAddPoints = function (evt) {
  if (evt.detail) {
    this.points = points + 20;
  }else {
  }
  console.log(this.points);
};

Player.prototype.imageAddPoints = function () {
    const points = this.points;
    this.points = points + 50;
  // return points
};

module.exports = Player;
