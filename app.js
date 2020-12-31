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
let time = 20;
let myTimer;
let gameInProgress = false;

function getRandomInt(range) {
  return Math.floor(Math.random() * range);
}

function preGame() {
  //Give instructions
  time = 20;
  score = 0;
  document.addEventListener('keypress', (event) => {
    if ((event.code = 'Space')) {
      if (gameInProgress === true) {
        //do nothing
      } else {
        startGame();
      }
    }
  });
  document.getElementById('timer').innerHTML = `<p>${time}</p>`;
  document.getElementById('score').innerHTML = `<h2>${score}</h2>`;
}

function startGame() {
  //Start timer
  //Display score
  gameInProgress = true;
  myTimer = setInterval(decrementTimer, 1000);
  let letter = showRl();
  document.addEventListener('keypress', (event) => {
    if (event.key.toUpperCase() === letter) {
      incrementCounter();
      if (gameInProgress) {
        letter = showRl();
      }
    }
  });
}

function endGame() {
  gameInProgress = false;
  clearInterval(myTimer);
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
  document.getElementById('score').innerHTML = `<h2>${score}</h2>`;
}

var decrementTimer = function () {
  time--;
  if (time === 0) {
    endGame();
  }
  document.getElementById('timer').innerHTML = `<p>${time}</p>`;
};

preGame();
