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
 console.log(`Check button clicked!`);

  const guess = Number(document.querySelector(`.guess`).value);
  console.log(`Player guessed ${guess}`); 

  if (!guess) {
    document.querySelector(`.message`).textContent = `Please input a number`;
    return;
  }

  if (guess < 1 || guess > 20) {
    document.querySelector(
      `.message`
    ).textContent = `Number must be between 1 and 20`;
    return;
  }


  if (guess === secretNumber) {
    console.log(`Correct guess!`);
    // document.querySelector(`.message`).textContent = `Correct Number!`;
    document.querySelector(`.number`).textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector(`.highscore`).textContent = highscore;
      document.querySelector(`.message`).textContent = 'You have won!';
      document.querySelector(`.guess`).disabled = true;
      document.querySelector(`.check`).disabled = true;
      document.body.style.backgroundColor = `green`;
    }
  } else if (guess > secretNumber) {
    console.log(`Too high!`);
    document.querySelector(`.message`).textContent = `Too high`;
    score--;
    document.querySelector(`.score`).textContent = score;
    if (score < 1) {
      document.querySelector(`.number`).textContent = secretNumber;
      document.querySelector('.guess').disabled = true;
      document.querySelector('.check').disabled = true;
      document.body.style.backgroundColor = `green`;
      document.querySelector('.message').textContent = '🎉 Congratulations !';
      document.querySelector('.guess').value = '';  
    }
  } else if (guess < secretNumber) {
    console.log(`Too low`);
    document.querySelector(`.message`).textContent = `Too low`;
    score--;
    document.querySelector(`.score`).textContent = score;
    if (score < 1) {
      document.querySelector(`.message`).textContent = 'You have lost';
      document.querySelector(`.number`).textContent = secretNumber;
      document.querySelector(`.guess`).disabled = true;
      document.querySelector(`.check`).disabled = true;
      document.body.style.backgroundColor = `maroon`;
      document.querySelector('.message').textContent = 'Game Over!';
      document.querySelector('.guess').value = '';
    }
  }
});

document.querySelector(`.again`).addEventListener('click', function () {
  console.log(`Again button is working`);

  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector(`.message`).textContent = `Start guessing ...`;
  console.log("Your new secret number after restart: ", secretNumber);
  document.querySelector(`.number`).textContent = `?`;
  document.querySelector(`.score`).textContent = score;
  document.querySelector(`.guess`).value = ``;

  document.querySelector(`.guess`).disabled = false;
  document.querySelector(`.check`).disabled = false;
  document.body.style.backgroundColor = ``;
});

