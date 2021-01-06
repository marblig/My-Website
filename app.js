const letters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];
let score = 0;
let highScore = 0;
let time = 20;
let myTimer;
let gameInProgress = false;


function getRandomInt(range) {
  return Math.floor(Math.random() * range);
}

function preGame() {
  document.getElementById('letter').style.visibility = 'hidden';
  showRl();
  time = 20;
  document.getElementById('s2s').style.visibility = 'visible';
  document.addEventListener('keypress', (event) => {
    if (event.code === 'Space') {
      event.preventDefault();
      if (gameInProgress === false) {
        startGame();
      }
    }
  });
  document.getElementById('timer').innerHTML = `<p>Time<br> ${time}</p>`;
  document.getElementById('score').innerHTML = `<p>Score <br> ${score}</p>`;
  document.getElementById(
    'highScore'
  ).innerHTML = `<p>High Score <br> ${highScore}</p>`;
}

function startGame() {
  //Start timer
  //Display score
  document.getElementById('letter').style.visibility = 'visible';
  document.getElementById('s2s').style.visibility = 'hidden';
  score = 0;
  gameInProgress = true;
  myTimer = setInterval(decrementTimer, 1000);
  let letter = showRl();
  document.addEventListener('keypress', (event) => {
    if (gameInProgress === true && event.key.toUpperCase() === letter) {
      incrementCounter();
      if (gameInProgress === true) {
        letter = showRl();
      } else {
        preGame();
      }
    }
  });
}

function endGame() {
  gameInProgress = false;
  clearInterval(myTimer);
  if (score > highScore) {
    highScore = score;
  } else {
    highScore = highScore;
  }
  document.getElementById(
    'highScore'
  ).innerHTML = `<h2>High Score: ${highScore}</h2>`;
  preGame();
}

function showRl() {
  let letter = letters[getRandomInt(letters.length)];
  console.log(letter);
  document.getElementById('letter').innerHTML = `<h1>${letter}</h1>`;

  return letter;
}

function incrementCounter() {
  score++;
  document.getElementById('score').innerHTML = `<h2>Score <br> ${score}</h2>`;
}

var decrementTimer = function () {
  time--;
  if (time === 0) {
    endGame();
  }
  document.getElementById('timer').innerHTML = `<p>Time <br> ${time}</p>`;
};

preGame();

//Problems:

// the scores moves to accomadate the letters once the game has started
