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

  PubSub.subscribe('FilmTriviaForm:Inputted-answer-image', (evt) => {
    this.imageAddPoints(evt);
  });
};

Player.prototype.triviaAddPoints = function (answer) {
  this.points = 0;
  if (answer) {
    this.points += 20;
    PubSub.publish('FilmTrivia:TriggerRandomiser')
  }else {
  }
  return this.points;
};

Player.prototype.imageAddPoints = function (answer) {
  this.points = 0;
  if (answer) {
    this.points += 50;
  }else {
  }
  return this.points;
};

module.exports = Player;
