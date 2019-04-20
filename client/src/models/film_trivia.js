const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const FilmTrivia = function (url) {
  this.url = url;
  this.request = new RequestHelper(this.url);
};

FilmTrivia.prototype.bindEvents = function () {
  //subscribes to FilmTriviaFormView
  //calls request.get on
};

FilmTrivia.prototype.getData = function () {
  const request = new Request(this.url);
  request.get()
    .then( (items) => {
      PubSub.publish('FilmTrivia:items-ready', items);
    })
    .catch(console.error);
};

module.exports = FilmTrivia;
