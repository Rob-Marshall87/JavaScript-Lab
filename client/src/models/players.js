const PubSub = require('../helpers/pub_sub.js');
const RequestHelper = require('../helpers/request_helper.js');


const Player = function (name) {
  this.points = 0;
  this.name = name;
};

Player.prototype.bindEvents = function () {
  // PubSub.subscribe('FilmTriviaForm:team-selected', (evt) => {
  //     this.questionAnswered(evt);
  // });
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

Player.prototype.triviaAddPoints = function (answer) {
  this.points = 0;
  if (answer) {
    this.points += 20;
  }else {
  }
  return this.points;
};

Player.prototype.imageAddPoints = function (answer) {
  this.points = 0;
  if (answer) {
    this.points += 100;
  }else {
  }
  return this.points;
};

module.exports = Player;
