'use strict';

console.log('=== BEHIND THE SCENES: SCOPING & HOISTING ===');

const outerFunction = () => {
  console.log('Outer function start');
  innerFunction();
  console.log('Outer function end');
};

const innerFunction = () => {
  console.log('innerfunction');
  console.trace();
};

outerFunction();

const name = 'GlobalName';

const a = () => {
  //   const name = 'FunctionName';

  const b = () => {
    console.log(name);
  };

  b();
};

a();

// console.log(title);

let title = 'Behind the Scenes';

function outer() {
  const label = 'outer';

  function inner() {
    console.log('scope:', label);
  }

  inner();
}

outer();

function one() {
  two();
}

function two() {
  console.log('stack: two');
}

one();