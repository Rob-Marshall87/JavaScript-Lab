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
  this.request.get()
    .then( (items) => {
      PubSub.publish('FilmTrivia:items-ready', items);
    })
    .catch(console.error);
};

FilmTrivia.prototype.newQuestion = function(questions) {
  const randomQuestion = questions[Math.floor(Math.random() * questions.length)];
  return randomQuestion;
};

FilmTrivia.prototype.answers = function(randomObject) {
  const answers = [];

  answers.push(randomObject.correct_answer)
  for (var i = 0; i < randomObject.incorrect_answer.length; i++) {
    answers.push(randomObject.incorrect_answer[i]);
  }
  return answers;
};

FilmTrivia.prototype.populateAnswers = function(answers) {
  this.answersDiv = document.querySelector('#choices-div');

  const letters = ["A", "B", "C", "D"];
  console.log(answers);
  for (var i = 0; i < answers.length; i++) {
    const div = document.createElement('div');
    const p = document.createElement('p');
    div.classList.add('boxes');
    p.classList.add('p');
    p.textContent = `${letters[i]}: ${answers[i]}`;
    div.appendChild(p);
    this.answersDiv.appendChild(div);
  }
};

FilmTrivia.prototype.questionRandomiser = function(){
  const possibilities = [[0,1,2,3], [0,2,3,1], [0,3,2,1], [0,3,1,2], [0,1,3,2], [0,2,1,3],
                         [1,2,3,0], [1,2,0,3], [1,0,2,3], [1,0,3,2], [1,3,2,0], [1,3,0,2],
                         [2,1,0,3], [2,1,3,0], [2,0,1,3], [2,0,3,1], [2,3,1,0], [2,3,0,1],
                         [3,0,1,2], [3,0,2,1], [3,1,2,0], [3,1,0,2], [3,2,0,1], [3,2,1,0]];
  const index = Math.floor(Math.random() * (possibilities.length));
  return possibilities[index];
}

FilmTrivia.prototype.populateQuestion = function(question) {
  const questionDiv = document.querySelector('#question-div');
  const p = document.createElement('p');

  p.textContent = question;

  questionDiv.appendChild(p);
};

module.exports = FilmTrivia;
