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

  // const letters = ["A", "B", "C", "D"];

  for (var i = 0; i < answers.length; i++) {
    const div = document.createElement('div');
    const p = document.createElement('p');
    div.classList.add('boxes');
    p.classList.add('p');
    p.textContent = answers[i];
    div.appendChild(p);
    this.answersDiv.appendChild(div);
  }
};

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
  textBox.placeholder = 'Take your guess!';

  const input = document.createElement('input');
  input.classList.add('input');
  input.type = "submit";

  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    alert('SUBMITTED ANSWER GOES HERE');
  });

  form.appendChild(textBox);
  form.appendChild(input);

  choicesDiv.appendChild(form);
};

module.exports = FilmTrivia;
