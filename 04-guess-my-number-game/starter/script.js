// Game Development Hour 1 - Game Foundation & DOM Basics
'use strict';

// Select elements by class name
const messageEl = document.querySelector('.message');
console.log(messageEl); 
console.log(messageEl.textContent);
messageEl.textContent = 'Start guessing...';

console.log(`=== DOM ELEMENT SELECTION ===`);

// const messsageEl = document.querySelector(`.message`);
// const scoreEl = document.querySelector(`.score`);
// const guessEl = document.querySelector(`.guess`);
// const numberEl = document.querySelector(`.number`);
// const highscoreEl = document.querySelector(`.highscore`);

// numberEl.textContent = 15;
// guessEl.value = 50;

// console.log(messsageEl);
// console.log(messsageEl.textContent);
// console.log(`Score element: ${scoreEl}`);
// console.log(`Current Highscore: ${highscoreEl.textContent}`);
// console.log(`Guess input value: ${guessEl.value}`);

// Game State Variables

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);

let score = 20; // this is your current score
let highscore = 0; // tracking high score

document.querySelector(`.score`).textContent = score; // changing the value of score dynamically
document.querySelector(`.highscore`).textContent = highscore; // changing the high score dynamically

console.log(`Game State Initialized`);

//  basic game logic implementation

document.querySelector(`.check`).addEventListener('click', function () {
//  console.log(`Check button clicked!`);

  const guess = Number(document.querySelector(`.guess`).value);
  const message = document.querySelector(`.message`);
  const number = document.querySelector(`.number`);

//   console.log(`Player guessed ${guess}`);

  if (guess === secretNumber) {
    console.log(`Correct guess!!`);
    document.querySelector('.message').textContent = 'CONGRATS !!!';
    document.querySelector('.number').textContent = secretNumber;
  } else if (guess > secretNumber) {
    console.log(`Too High`);
    document.querySelector('.message').textContent = 'Too high!';
  } else if (guess < secretNumber) {
    console.log(`Too Low`);
    document.querySelector('.message').textContent = 'Too low!';
  }
});


