const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');
const Player = require('./players.js');
const FilmTriviaFormView = require('../views/film_trivia_form_view.js');

const FilmTrivia = function (url) {
  this.url = url;
  this.request = new RequestHelper(this.url);
  this.buzzedTeam = null;
  this.team1Points = null;
  this.team2Points = null;
  this.triviaTriggered = false;
  this.gridTriggered = false;
};

FilmTrivia.prototype.bindEvents = function () {
  this.teamSelected();
  PubSub.subscribe('FilmTrivia:ResetTriggered', ()=> {
    this.triviaTriggered = false;
    this.gridTriggered = false;
  });
};

FilmTrivia.prototype.getData = function () {
  this.request.get()
    .then( (items) => {
      PubSub.publish('FilmTrivia:items-ready', items); //ask
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
    p.textContent = `Right! Correct answer: ${correctAnswer}`;
    p.classList.add('big-answer-text-green');
  } else {
    p.textContent = `Wrong. Correct answer: ${correctAnswer}`;
    p.classList.add('big-answer-text-red');
  }

  questionDiv.appendChild(p);
};

FilmTrivia.prototype.playAgain = function () {
  this.triviaTriggered = false;
  this.gridTriggered = false;
  const choicesDiv = document.querySelector('#choices-div');
  choicesDiv.innerHTML = '';

  const playAgainButton = document.createElement('input');
  playAgainButton.type = 'submit';
  playAgainButton.value = 'New question';
  playAgainButton.classList.add('new-question');
  playAgainButton.addEventListener('click', () => {
    PubSub.publish('FilmTrivia:reset');
  })
  choicesDiv.appendChild(playAgainButton);

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
    PubSub.publish('FilmTrivia:Question-Answered', answerText);

    PubSub.subscribe('Grid:AnswerCorrect/Incorrect', (evt) => {
      answer = evt.detail;

      const choicesDiv = document.querySelector('#choices-div');
      choicesDiv.innerHTML = '';
      const p = document.createElement('p');

      if (answer.boolean) {

        p.textContent = `100 BONUS POINTS!`;

        const questionDiv = document.querySelector('#question-div');
        questionDiv.innerHTML = '';
        const h1 = document.createElement('h1');

        const capitalTitle = this.capitalize(answer.title);
        h1.textContent = `${capitalTitle}`;
        questionDiv.appendChild(h1);

      } else {
        const capitalTitle = this.capitalize(answer.title);
        p.textContent = `Great guess...but it's not ${capitalTitle}`;

        const questionDiv = document.querySelector('#question-div');
        questionDiv.innerHTML = '';
        const h1 = document.createElement('h1');
        h1.textContent = `Not this time...`;
        questionDiv.appendChild(h1);
      }
      choicesDiv.appendChild(p);
    });
    this.playAgain();

  });

  form.appendChild(textBox);
  //FOR SUBMIT BUTTON
  // form.appendChild(input);

  choicesDiv.appendChild(form);
};

FilmTrivia.prototype.capitalize = function(str) {
   const splitStr = str.toLowerCase().split(' ');
   for (var i = 0; i < splitStr.length; i++) {
       splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
   }
   return splitStr.join(' ');
};

FilmTrivia.prototype.updateScores = function(team) {
  console.log(team);
  if (team.id === team1.id) {

    this.scoreDiv = document.querySelector(`#team1-score`);

    this.scoreDiv.innerHTML = '';
    const p = document.createElement('p');
    p.textContent = this.team1Points;
    this.scoreDiv.appendChild(p);
  } else {
    this.scoreDiv = document.querySelector(`#team2-score`);

    this.scoreDiv.innerHTML = '';
    const p = document.createElement('p');
    p.textContent = this.team2Points;
    this.scoreDiv.appendChild(p);
  };
};

FilmTrivia.prototype.reset = function(questions) {

  const questionDiv = document.querySelector('#question-div');
  questionDiv.innerHTML = '';

  const answersDiv = document.querySelector('#choices-div');
  answersDiv.innerHTML = '';

  const randomObject = this.newQuestion(questions);

  const question = randomObject.question;
  const answers = this.answers(randomObject);
  this.populateQuestion(question);
  this.populateAnswers(answers);

  const correctAnswer = randomObject.correct_answer;
  this.boxes = document.querySelectorAll('.p');

  for (var i = 0; i < this.boxes.length; i++) {
    this.boxes[i].addEventListener('click', (evt) => {
      if (evt.target.innerText === correctAnswer) {
        PubSub.publish('FilmTriviaForm:answer', true);
        filmTrivia.bigAnswerText(correctAnswer, true);
        filmTrivia.textBox();
      } else {
        PubSub.publish('FilmTriviaForm:answer', false);
        filmTrivia.bigAnswerText(correctAnswer, false);
        this.playAgain();
      }
    });
  };
};

FilmTrivia.prototype.teamSelected = function () {
  this.triviaTriggered = false;
  this.gridTriggered = false;
  PubSub.subscribe('FilmTriviaForm:team-selected', (evt) => {
    this.buzzedTeam = evt.detail;
    PubSub.subscribe('FilmTriviaForm:answer', (evt) => {

    const answeredCorrectly = evt.detail;
    if (answeredCorrectly) {
      if (this.buzzedTeam === 'team1') {
        (this.triviaTriggered) ? this.team1Points += 0 : this.team1Points += 20;
        this.updateScores(team1);
        this.triviaTriggered = true;
        PubSub.publish('FilmTrivia:TriggerRandomiser')
      } else {
        (this.triviaTriggered) ? this.team2Points += 0 : this.team2Points += 20;
        this.updateScores(team2);
        this.triviaTriggered = true;
        PubSub.publish('FilmTrivia:TriggerRandomiser')
      };
    }
    else
    {
      this.playAgain();
    }
    });
    PubSub.subscribe('Grid:AnswerCorrect/Incorrect', (evt) => {

      const answeredCorrectly = evt.detail.boolean;
    if (answeredCorrectly) {
      if (this.buzzedTeam === 'team1') {
        (this.gridTriggered) ? this.team1Points += 0 : this.team1Points += 100;
        this.updateScores(team1);
        this.gridTriggered = true;
      } else {
        (this.gridTriggered) ? this.team2Points += 0 : this.team2Points += 100;
        this.updateScores(team2);
        this.gridTriggered = true;
      };
    }
    else
    {
      this.playAgain();
    }
    });
  });
};

FilmTrivia.prototype.gameOver = function (team) {
  const questionDiv = document.querySelector('#question-div');
  questionDiv.innerHTML = '';

  const answersDiv = document.querySelector('#choices-div');
  answersDiv.innerHTML = '';

  const gameOver = document.createElement('h1');
  gameOver.classList.add('game-over-text');
  gameOver.textContent = 'GAME OVER'

  const teamWins = document.createElement('h1');
  teamWins.classList.add('team-wins-text');
  teamWins.textContent = `${team} wins!`

  questionDiv.appendChild(gameOver);
  answersDiv.appendChild(teamWins);
};

module.exports = FilmTrivia;
