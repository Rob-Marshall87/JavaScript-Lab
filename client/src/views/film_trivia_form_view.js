const FilmTrivia = require('../models/film_trivia.js');
const PubSub = require('../helpers/pub_sub.js');

const FilmTriviaFormView = function(filmTriviaForm) {
  this.filmTriviaForm = filmTriviaForm;
  this.questions = null;
  filmTrivia = new FilmTrivia('http://localhost:3000/api/questions', this.questions);
};


FilmTriviaFormView.prototype.bindEvents = function () {
  const startButton = document.querySelector('#game-start');
  startButton.classList.add('.mouse-cursor-gradient-tracking');
  startButton.addEventListener('click', () => {
    PubSub.publish('FilmTrivia:NextRound');
    PubSub.publish('FilmTrivia:ResetTriggered');
    filmTrivia.reset(this.questions);

    var btn = document.querySelector('.mouse-cursor-gradient-tracking')
    btn.onmousemove = function(e) {
    var x = e.pageX - btn.offsetLeft - btn.offsetParent.offsetLeft
    var y = e.pageY - btn.offsetTop - btn.offsetParent.offsetTop
    btn.style.setProperty('--x', x + 'px')
    btn.style.setProperty('--y', y + 'px')
  }
  });

  const team1ScoreDiv = document.querySelector('#team1-score');
  const team2ScoreDiv = document.querySelector('#team2-score');

    const p1 = document.createElement('p');
    p1.textContent = 0;
    team1ScoreDiv.appendChild(p1);
    const p2 = document.createElement('p');
    p2.textContent = 0;
    team2ScoreDiv.appendChild(p2);


  PubSub.subscribe('FilmTrivia:items-ready', (evt) => {
    this.questions = evt.detail;
    const randomObject = filmTrivia.newQuestion(this.questions);

    const question = randomObject.question;
    const answers = filmTrivia.answers(randomObject);
    filmTrivia.populateQuestion(question);
    filmTrivia.populateAnswers(answers);

    const teamBuzzers = document.querySelectorAll('.team-buzzer');

     for (var i = 0; i < teamBuzzers.length; i++) {
       teamBuzzers[i].addEventListener('click', (evt) => {
         this.handleClick(evt.target.id);
         PubSub.subscribe('FilmTrivia:reset', (evt) => {
           filmTrivia.reset(this.questions);
         });
       })
     };

    const correctAnswer = randomObject.correct_answer;
    this.boxes = document.querySelectorAll('.p');

    for (var i = 0; i < this.boxes.length; i++) {
      this.boxes[i].addEventListener('click', (evt) => {
        if (evt.target.innerText === correctAnswer) {
          PubSub.publish('FilmTriviaForm:answer', true);
          filmTrivia.bigAnswerText(correctAnswer, true);
          filmTrivia.textBox();
          // filmTrivia.gameOver('Team 1');
        } else {
          PubSub.publish('FilmTriviaForm:answer', false);
          filmTrivia.bigAnswerText(correctAnswer, false);
          filmTrivia.playAgain();
        }
      });
    };
  });
  PubSub.subscribe('Players:return-scores', (team1, team2) => {
    console.log(team1.detail);
    console.log(team2.detail);
  });
};

FilmTriviaFormView.prototype.handleClick = function (evt) {
  const teamSelected = evt;
  PubSub.publish('FilmTriviaForm:team-selected', teamSelected);
  // filmTrivia.reset(this.questions);
};

module.exports = FilmTriviaFormView;
