console.log("Part 2: Functions ready!"); 

// Functions - Declarations - Expressions
console.log("=== FUNCTIONS ===");

function logger() {
  console.log("My name is Christopher");
}

logger();
logger();

function fruitProcessor(strawberries, bananas) {
    console.log(strawberries, bananas);
    const juice = `Juice with ${strawberries} strawberries and  ${bananas} bananas.`;
    return juice;
}

console.log(fruitProcessor(5, 3));

// const juice1 = `Juice with 5 apples and 0 oranges.`;
// const juice2 = `Juice with 2 apples and 4 oranges.`;
// const juice3 = `Juice with 3 apples and 2 oranges.`;
// console.log(juice1);

const juice1 = fruitProcessor(5, 0);
const juice2 = fruitProcessor(2, 4);
const juice3 = fruitProcessor(3, 2);
console.log(juice1);

// Function Expressions
const calcAge = function (birthYear) {
    return 2025 - birthYear;
}; 

console.log(calcAge(2004));
console.log(calcAge(1871));

function introduce(firstName, lastName, age) {
    const introduction = `Hi, I'm ${firstName} ${lastName}, and I'm ${age} years old.`;
    return introduction;
}

console.log(introduce("Christopher", "Naval", "21"))


// Return Values and Scope

function yearsUntilRetirement(birthYear,firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        return `${firstName} retires in ${retirement} years.`;
    } else {
        return `${firstName} has already retired.`;
    }
}
console.log(yearsUntilRetirement(2004, "Christopher"));

// Global scope
const globalVar = "I am global";

function testScope() {
    const localVar = "I am local";
    console.log(globalVar);
    console.log(localVar);
}

testScope();
console.log(globalVar); 

// Coding Challenge #1

// Function to calculate average of 3 scores
function calcAverage(score1, score2, score3) {
    return (score1 + score2 + score3) / 3;
  // Your code here
}

// Function to check winner
function checkWinner(avgDolphins, avgKoalas) {
  // Your code here 
    if (avgDolphins >= 2 * avgKoalas) {
        return  `Dolphins win (${avgDolphins} vs. ${avgKoalas})`;
} else if (avgKoalas >= 2 * avgDolphins) {
     return `Koalas win (${avgKoalas} vs. ${avgDolphins})`;
} else {
    return `No team wins. Dolphins (${avgDolphins} vs. ${avgKoalas})`; 
}
}

// test data 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(checkWinner(scoreDolphins, scoreKoalas));

// test data 2
scoreDolphins = calcAverage(21, 21, 32);
scoreKoalas = calcAverage(123, 284, 397);
console.log(checkWinner(scoreDolphins, scoreKoalas));

// test data 3 for dolphins
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(checkWinner(scoreDolphins, scoreKoalas));


