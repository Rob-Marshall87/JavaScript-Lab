const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');
const Player = require('./players.js');

const FilmTrivia = function (url) {
  this.url = url;
  this.request = new RequestHelper(this.url);
  this.team1 = new Player();
  this.team2 = new Player();
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
  const order = this.questionRandomiser();
    order.forEach((index) => {
    const div = document.createElement('div');
    const p = document.createElement('p');
    div.classList.add('choice-button');
    p.classList.add('p');
    p.textContent = answers[index];
    div.appendChild(p);
    this.answersDiv.appendChild(div);
  });
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
  p.classList.add('question-paragraph');

  p.textContent = question;

  questionDiv.appendChild(p);
};

FilmTrivia.prototype.bigAnswerText = function(correctAnswer, boolean) {
  const questionDiv = document.querySelector('#question-div');
  questionDiv.innerHTML = '';

  const h4 = document.createElement('h4');

  if (boolean) {
    h4.textContent = `Right! Correct answer: ${correctAnswer}.`;
    h4.classList.add('big-answer-text-green');
  } else {
    h4.textContent = `Wrong. Correct answer: ${correctAnswer}.`;
    h4.classList.add('big-answer-text-red');
  }

  questionDiv.appendChild(h4);
};

FilmTrivia.prototype.textBox = function() {
  const choicesDiv = document.querySelector('#choices-div');
  choicesDiv.innerHTML = '';

  const form = document.createElement('form');
  form.classList.add('form');

  const textBox = document.createElement('input');
  textBox.classList.add('text-box')
  textBox.id = 'text-box-id';
  textBox.placeholder = 'Take your guess!';

  const input = document.createElement('input');
  input.classList.add('input');
  input.type = "submit";

  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const answerText = evt.target['text-box-id'].value.toLowerCase();
    PubSub.publish('TextBox:answer-ready', answerText);
  });

  form.appendChild(textBox);
  form.appendChild(input);

  choicesDiv.appendChild(form);
};

FilmTrivia.prototype.updateScores = function(scoresArray) {
  const scoreDivs = document.querySelectorAll('.team-score');

  for (var i = 0; i < scoreDivs.length; i++) {
    scoreDivs[i].innerHTML = '';
    const p = document.createElement('p');
    p.textContent = `Team ${i + 1} score: ${scoresArray[i]}`;
    scoreDivs[i].appendChild(p);
  }
}

module.exports = FilmTrivia;
