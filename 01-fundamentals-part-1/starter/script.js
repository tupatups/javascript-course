// // // // JavaScript Fundamentals - Part 1
// // // // We'll write our code here!

// // // let js ="amazing";
// // // console.log(40 + 8 + 23 -10);


// // // console.log("=== VARIABLES ===");


// // // let firstName = "Jonas";
// // // console.log(firstName);


// // // let age = 30;
// // // age = 31;
// // // console.log(age);
// // // age = 50;
// // // console.log(age);


// // // const birthYear = 2004;
// // // console.log(birthYear);

// // // const PI = 3.1415;
// // // console.log(PI);

// // // var job ="programmer";
// // // job = "teacher";
// // // console.log(job);

// // // // let lastName = "Naval";
// // // // let myCurrentJob = "programmer";
// // // // console.log(firstName, myCurrentJob)

// // // console.log("=== DATA TYPES ===");

// // // age = 24;
// // // console.log(age);
// // // console.log(typeof age)

// // // let userName = "Tups";
// // // console.log(userName);
// // // console.log(typeof userName)

// // // let javascriptIsFun = true;
// // // console.log(javascriptIsFun);
// // // console.log(typeof javascriptIsFun); 

// // // let year;
// // // console.log(year);
// // // console.log(typeof year);

// // // let dynamicVariable = 23;
// // // console.log(dynamicVariable, typeof dynamicVariable);

// // // dynamicVariable = "Now I'm a string!";
// // // console.log(dynamicVariable, typeof dynamicVariable);

// // // dynamicVariable = true;
// // // console.log(dynamicVariable, typeof dynamicVariable)


// // //////////
// // // Basic Operators - Math Operators 
// // console.log("=== MATH OPERATORS ===");

// // const now = 2037;
// // const ageJonas = now - 1991;
// // const ageSarah = now - 2018;
// // console.log(ageJonas, ageSarah); 

// // console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

// // console.log("Math operations: ");
// // console.log("Addition: ", 10 + 5);
// // console.log("Subtraction: ", 20 - 8);
// // console.log("Multiplication: ", 4 * 7);
// // console.log("Division: ", 15 / 3);
// // console.log("Exponentiation: ", 2 ** 3);

// // // Math with strings!
// // const firstName = "Jonas";
// // const lastName = "Schmedtmann";
// // console.log(firstName + " " + lastName);

// // console.log("Hello " + "World" + "!");
// // console.log("I am " + 25 + " years old")


// // ///////////
// // // Assignment operators
// // console.log("=== ASSIGNMENT OPERATORS ===");

// // let x = 10 + 5;
// // console.log(" x starts as: ", x);

// // x += 10;
// // console.log("After x += 10: ", x);

// // x *= 4; // Same as: x = x * 4 = 100
// // console.log("After x *= 4:", x);

// // x /= 2; // Same as: x = x / 2 = 50
// // console.log("After x /= 2:", x);



// // ///////////////////////////
// // // Comparison Operators
// // console.log("=== COMPARISON OPERATORS ====");

// // console.log("Age comparison: ");
// // console.log(ageJonas > ageSarah);
// // console.log(ageSarah >= 18)
// // console.log(ageJonas < 30);

// // console.log("Number comparisons: ");
// // console.log( 25 > 20);
// // console.log( 15 < 10);
// // console.log( 18 >= 18);
// // console.log( 16 <= 15);

// // const isFullAge = ageSarah >= 18;
// // console.log("Sarah is adult: ", isFullAge);

// // const isJonasOlder = ageJonas > ageSarah;
// // console.log("Jonas is older: ", isJonasOlder);

// // console.log("Complex comparison: ");
// // console.log(now - 1991 > now - 2018);


// // let z, y;
// // z = y = 25 - 10 - 5;
// // console.log(z, y);

// // const averageAge = (ageJonas + ageSarah) / 2;
// // console.log(ageJonas, ageSarah, averageAge); 

// // ////////////////////////////////////
// // // Coding Challenge #1 - BMI Calculator

// // // Test Data 1
// // const massMark = 78;
// // const heightMark = 1.69;
// // const massJohn = 92;
// // const heightJohn = 1.95;

// // // Your code here:
// // // 1. Calculate BMIs

// // let markBMI = massMark / heightMark ** 2;
// // let johnBMI = massJohn / heightJohn ** 2;
// // // 2. Create markHigherBMI variable

// // const markHigherBMI = markBMI > johnBMI; 
// // // 3. Log results to console
// // console.log("=== TEST 1 ===");
// // console.log("Mark;s BMI: ", markBMI);
// // console.log("John's BMI: ", johnBMI);
// // console.log("Mark has higher BMI", markBMI > johnBMI);


// ////////////////////////////////////
// // Strings and Template Literals
// // const firstName = "Jonas";
// // const job = "teacher";
// // const birthYear = 1991;
// // const year = 2037;

// // const jonas =
// //   "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
// // console.log(jonas);

// // const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
// // console.log(jonasNew);

// // console.log(`I'm ${2037 - 1991} year old`);
// // console.log(`Math works: ${2 + 3} equals five`);
// // console.log(`Comparisons too: ${5 > 3}`);

// // console.log(`Just a regular string...`);

// // console.log(`String 
// //   multiple
// //   lines`);

// // Create variables for:
// const myName = "Tupe"; // Your name
// const myAge = 21; // Your age
// const myJob = "Undergrad"; // Your job/student status
// const currentYear = 2025;

// // Use template literals to create:
// // "Hi, I'm [name], a [age] year old [job]!"
// // Log it to the console
// const introduction = `Hi, I'm ${myName}, a ${myAge} year old ${myJob}!`;
// console.log(introduction);

// // Create a template literal that:
// // 1. Calculates your birth year: currentYear - myAge
// // 2. Shows a calculation: 10 * 5
// // 3. Includes a comparison: myAge >= 18
// // Example: "Born in ${}, 10*5 = ${}, Adult: ${}"

// const yearBorn = currentYear - myAge;
// console.log(yearBorn); // changed the variable name to avoid confusion on the previous example

// const calculation = `Born in ${yearBorn}, 10 * 5 = ${10 * 5}, Adult: ${myAge >= 18}`;
// console.log(calculation);

// const comparisonAge = `Is ${myName} an adult? ${myAge >= 18}`;
// console.log(comparisonAge); 


// ////////////////
// // Taking decisions : if/else statements

// const age = 15;

// if (age >= 18) {
//   console.log("Sarah can start driving license 🚗"); 
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`Sarah is too young. wait for another ${yearsLeft} years :)`); 
// }

// const birthYear = 2012;

// let century;
// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }
// console.log(century); 

// const score = 45;

// if (score >= 60) {
//   console.log(`You passed with ${score} points!`);
//   console.log("Congratulations!");
// } else {
//   const pointsNeeded = 60 - score;
//   console.log(`You failed. need ${pointsNeeded} more points.`);
// }

// // Create a grade calculator:
// const testScore = 58; // Change this to test different scores

// // Use if/else to determine:
// // 90+: "Excellent! Grade A"
// // 80-89: "Good job! Grade B"
// // 70-79: "Not bad! Grade C"
// // 60-69: "You passed! Grade D"
// // Below 60: "You failed! Study harder"

// // Your code here...

// if (testScore >= 90) {
//   console.log("Excellent! Grade A");
// } else if (testScore >= 80) {
//   console.log("Good job! Grade B");
// } else if (testScore >= 70) {
//   console.log("Not bad! Grade C");
// } else if (testScore >= 60) {
//   console.log("You passed! Grade D");
// } else {
//   console.log("You failed! Study harder");
// }

// // Create an age verification system:
// const userAge = 20; // Change this to test

// // Rules:
// // - 18+: "Welcome! You can access all content"
// // - 13-17: "Welcome! Restricted content only"
// // - Under 13: "Sorry, you're too young"

// // Your code here...
// const userAGe = 9; // Change this to test

// if (userAGe >= 18) {
//   console.log("Welcome! You can access all content");
// } else if (userAge >= 13) {
//   console.log("Welcome! Restricted content only");
// } else {
//   console.log("Sorry, you're too young");
// }

// ////////////////////////////////////
// // Truthy and Falsy Values

// // 5 falsy values: 0, '', undefined, null, NaN
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean("Jonas")); 
// console.log(Boolean({}));
// console.log(Boolean(""));

// const money = 0;
// if (money) {
//   console.log("Don't spend it all ;)");
// } else {
//   console.log("You should get a job!");
// }

// let height  = 0;
// if (height) {
//   console.log("YAY! Height is defined");
// } else {
//   console.log("Height is UNDEFINED");
// }

// if (height !== undefined) {
//   console.log("Height is defined");
// }

// const values = [0, 1, "", "hello", undefined, null, NaN, {}, []];

// values.forEach((num) => {
//   console.log("Value:", num);
//   console.log("Boolean:", Boolean(num));

//   if (num) {
//     console.log("Truthy!");
//   } else {
//     console.log("Falsy!");
//   }
//   console.log("------");
// });

// ////////////////////////////////////
// // Coding Challenge #2

// // Reuse your BMI calculation from Challenge #1
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// console.log(BMIMark, BMIJohn);

// // Your if/else statement here:
// if (BMIMark > BMIJohn) {
//   console.log(`Mark's BMI ${BMIMark.toFixed(1)} is higher than John's ${BMIJohn.toFixed(1)}`);
// } else if (BMIJohn > BMIMark) {
//   console.log(`John's BMI ${BMIJohn.toFixed(1)} is higher than Mark's ${BMIMark.toFixed(1)}`);
// } else {
//   console.log(`Wow! Mark and John have the same BMI ${BMIMark.toFixed(1)}!`);
// }

 // Type Conversion and Coercion
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Jonas"));
console.log(typeof NaN);

console.log(String(23), 23); 
console.log(typeof String(23));


// Automatic Type Coercion
console.log("I am " + 23 + " years old");
console.log("23" - "10" - 3);
console.log("23" / "2");
console.log("23" * "2");

let n = "1" + 1;
console.log(n);

n = n - 1;
console.log(n);

console.log(2 + 3 + 4 + "5"); // Try to guess!
console.log("10" - "4" - "3" - 2 + "5"); // This one's tricky!

// Equality - Strict 

// const age = "18";
// if (age === 18) console.log("You just became an adult :D (strict)");
// if (age == 18) console.log("You just became an adult :D (loose)");

// console.log("18" === 18);
// console.log("18" == 18); //coercion happens
// console.log(18 === 18);

// // why == can be dangerous
// console.log("0" == 0);
// console.log(0 == false);
// console.log("0" == false);
// console.log(null == undefined);

// console.log("" == 0);
// console.log("   " == 0);

// best practice

// const favourite = Number(prompt("What's your favourite number?"));
// console.log(favourite);
// console.log(typeof favourite);

// if (favourite === 23) {
//   console.log("Cool! 23 is an amazing number!");
// } else if (favourite === 7) {
//   console.log("7 is also a cool number");
// } else if (favourite === 9) {
//   console.log("9 is also a cool number");
// } else {
//   console.log("Number is not 23 or 7 or 9");
// }

// if (favourite !== 23) console.log("Why not 23?");

// // This login system has bugs - fix them!
// const username = prompt("Username:");
// const password = prompt("Password:");

// // Bugs: using == instead of ===
// if (username == "admin" && password == "1234") {
//   console.log("Welcome admin!");
// } else {
//   console.log("Access denied");
// }

// // Fix using strict equality
// // Your code here...
// const username = prompt("Username:");
// const password = prompt("Password:");

// // Use === for strict equality
// if (username === "admin" && password === "1234") {
//   console.log("Welcome admin!");
// } else {
//   console.log("Access denied");
// }

// Logical Operators


const hasDriversLicense = false;
const hasGoodVision = false;

console.log (`AND OPERATOR: ${hasDriversLicense && hasGoodVision}`);
console.log (`OR OPERATOR: ${hasDriversLicense || hasGoodVision}`);
console.log (`NOT OPERATOR: ${!hasDriversLicense}`);

const isTired = true;
console.log(hasDriversLicense && hasGoodVision && !isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Tupe is able to drive!");
} else {
  console.log("Someone else should drive...");
}   

// // more complex scenarios
// const age = 20;
// const hasPermission = true;
// const hasExperience = false;

// if ((age >= 18 || hasPermission) && hasExperience) {
//   console.log("Approved to drive");
// } else {
//   console.log("Not approved to drive");
// }

// Create a club entry system with these rules:
// Entry allowed if: (age >= 21 AND hasID) OR isVIP

// const age = 23; // Try different values
// const hasID = true; // Try different values
// const isVIP = false; // Try different values

// // Your logic here:
// // if (...) {
// //   console.log('Welcome to the club!');
// // } else {
// //   console.log('Sorry, you cannot enter');
// // }

// if ((age >= 21 && hasID) || isVIP) {
//   console.log("Welcome to the club!");
// } else {
//   console.log("Sorry, you cannot enter");
// }

// The Conditional (Ternary) Operator

const age = 17;

const drink = age >= 18 ? `wine` : `water`;
console.log(drink);

//if esle statement
let drink2;
if (age >= 18) {
  drink2 = `wine`;
} else {
  drink2 = `water`;
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? `wine` : `water`}`);

////////////////////////////////////
// Coding Challenge #4

const bill = 275; // Test with 275, 40, and 430

// Step 1: Create the tip calculation using ternary operator
// Rule: 15% if between 50-300, otherwise 20% 
// Hint: bill >= 50 && bill <= 300

const tip = (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.20; // Your ternary operator here

// Step 2: Create beautiful output with template literal
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);
// Expected outputs:
// Bill 275: "The bill was 275, the tip was 41.25, and the total value 316.25"
// Bill 40:  "The bill was 40, the tip was 8, and the total value 48"
// Bill 430: "The bill was 430, the tip was 86, and the total value 516"