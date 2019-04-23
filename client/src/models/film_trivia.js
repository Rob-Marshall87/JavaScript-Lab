const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');
const Player = require('./players.js');

const FilmTrivia = function (url) {
  this.url = url;
  this.request = new RequestHelper(this.url);
  this.buzzedTeam = null;
  this.team1Points = null;
  this.team2Points = null;
};

FilmTrivia.prototype.bindEvents = function () {
  this.teamSelected();
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

  const p = document.createElement('p');

  if (boolean) {
    p.textContent = `Right! Correct answer: ${correctAnswer}.`;
    p.classList.add('big-answer-text-green');
  } else {
    p.textContent = `Wrong. Correct answer: ${correctAnswer}.`;
    p.classList.add('big-answer-text-red');
  }

  questionDiv.appendChild(p);
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

  //FOR SUBMIT BUTTON
  // const input = document.createElement('input');
  // input.classList.add('input');
  // input.type = "submit";

  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const answerText = evt.target['text-box-id'].value.toLowerCase();
    PubSub.publish('TextBox:answer-ready', answerText);

    PubSub.subscribe('answer:correct/incorrect', (evt) => {
      answer = evt.detail;

      const choicesDiv = document.querySelector('#choices-div');
      choicesDiv.innerHTML = '';
      const p = document.createElement('p');

      if (answer) {
        p.textContent = `Right! Correct answer: ${answer}!`;
      } else {
        p.textContent = `Wrong...answer is not ${answer}.`;
        this.reset();
      }
      choicesDiv.appendChild(p);
    });

  });

  form.appendChild(textBox);
  //FOR SUBMIT BUTTON
  // form.appendChild(input);

  choicesDiv.appendChild(form);
};

FilmTrivia.prototype.updateScores = function(team) {
  if (team.id === team1.id) {

    this.scoreDiv = document.querySelector(`#team1-score`);

    this.scoreDiv.innerHTML = '';
    const p = document.createElement('p');
    p.textContent = `Team 1 score: ${this.team1Points}`;
    this.scoreDiv.appendChild(p);
  } else {
    this.scoreDiv = document.querySelector(`#team2-score`);

    this.scoreDiv.innerHTML = '';
    const p = document.createElement('p');
    p.textContent = `Team 2 score: ${this.team2Points}`;
    this.scoreDiv.appendChild(p);
  };
};

FilmTrivia.prototype.reset = function() {
  const questionDiv = document.querySelector('#question-div');
  questionDiv.innerHTML = '';

  const answersDiv = document.querySelector('#choices-div');
  answersDiv.innerHTML = '';

  this.populateQuestion();
  this.populateAnswers();
};
>>>>>>> develop

FilmTrivia.prototype.teamSelected = function () {
  PubSub.subscribe('FilmTriviaForm:team-selected', (evt) => {
    this.buzzedTeam = new Player(evt.detail);

    PubSub.subscribe('FilmTriviaForm:answer', (evt) => {
      const boolean = evt.detail;
      const points = this.buzzedTeam.triviaAddPoints(boolean);

      if (this.buzzedTeam.name === team1.id) {
        this.team1Points += points;
        this.updateScores(team1);
      } else {
        this.team2Points += points;
        this.updateScores(team2);
      };
    })
  });
};

module.exports = FilmTrivia;
