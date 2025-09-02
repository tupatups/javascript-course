// // // // console.log("Part 2: Functions ready!"); 

// // // // // Functions - Declarations - Expressions
// // // // console.log("=== FUNCTIONS ===");

// // // // function logger() {
// // // //   console.log("My name is Christopher");
// // // // }

// // // // logger();
// // // // logger();

// // // // function fruitProcessor(strawberries, bananas) {
// // // //     console.log(strawberries, bananas);
// // // //     const juice = `Juice with ${strawberries} strawberries and  ${bananas} bananas.`;
// // // //     return juice;
// // // // }

// // // // console.log(fruitProcessor(5, 3));

// // // // // const juice1 = `Juice with 5 apples and 0 oranges.`;
// // // // // const juice2 = `Juice with 2 apples and 4 oranges.`;
// // // // // const juice3 = `Juice with 3 apples and 2 oranges.`;
// // // // // console.log(juice1);

// // // // const juice1 = fruitProcessor(5, 0);
// // // // const juice2 = fruitProcessor(2, 4);
// // // // const juice3 = fruitProcessor(3, 2);
// // // // console.log(juice1);

// // // // // Function Expressions
// // // // const calcAge = function (birthYear) {
// // // //     return 2025 - birthYear;
// // // // }; 

// // // // console.log(calcAge(2004));
// // // // console.log(calcAge(1871));

// // // // function introduce(firstName, lastName, age) {
// // // //     const introduction = `Hi, I'm ${firstName} ${lastName}, and I'm ${age} years old.`;
// // // //     return introduction;
// // // // }

// // // // console.log(introduce("Christopher", "Naval", "21"))


// // // // // Return Values and Scope

// // // // function yearsUntilRetirement(birthYear,firstName) {
// // // //     const age = calcAge(birthYear);
// // // //     const retirement = 65 - age;

// // // //     if (retirement > 0) {
// // // //         return `${firstName} retires in ${retirement} years.`;
// // // //     } else {
// // // //         return `${firstName} has already retired.`;
// // // //     }
// // // // }
// // // // console.log(yearsUntilRetirement(2004, "Christopher"));

// // // // // Global scope
// // // // const globalVar = "I am global";

// // // // function testScope() {
// // // //     const localVar = "I am local";
// // // //     console.log(globalVar);
// // // //     console.log(localVar);
// // // // }

// // // // testScope();
// // // // console.log(globalVar); 

// // // // // Coding Challenge #1

// // // // // Function to calculate average of 3 scores
// // // // function calcAverage(score1, score2, score3) {
// // // //     return (score1 + score2 + score3) / 3;
// // // //   // Your code here
// // // // }

// // // // // Function to check winner
// // // // function checkWinner(avgDolphins, avgKoalas) {
// // // //   // Your code here 
// // // //     if (avgDolphins >= 2 * avgKoalas) {
// // // //         return  `Dolphins win (${avgDolphins} vs. ${avgKoalas})`;
// // // // } else if (avgKoalas >= 2 * avgDolphins) {
// // // //      return `Koalas win (${avgKoalas} vs. ${avgDolphins})`;
// // // // } else {
// // // //     return `No team wins. Dolphins (${avgDolphins} vs. ${avgKoalas})`; 
// // // // }
// // // // }

// // // // // test data 1
// // // // let scoreDolphins = calcAverage(44, 23, 71);
// // // // let scoreKoalas = calcAverage(65, 54, 49);
// // // // console.log(checkWinner(scoreDolphins, scoreKoalas));

// // // // // test data 2
// // // // scoreDolphins = calcAverage(21, 21, 32);
// // // // scoreKoalas = calcAverage(123, 284, 397);
// // // // console.log(checkWinner(scoreDolphins, scoreKoalas));

// // // // // test data 3 for dolphins
// // // // scoreDolphins = calcAverage(85, 54, 41);
// // // // scoreKoalas = calcAverage(23, 34, 27);
// // // // console.log(checkWinner(scoreDolphins, scoreKoalas));


// // // const grades = [85, 92, 78, 96, 88];
// // // console.log(grades);

// // // // Arrays - Creation and Access
// // // console.log("=== ARRAYS ===");

// // // const friends = ["RJ Abarrientos", "Darren", "Jonel"];
// // // console.log(friends);

// // // const mixed = ["Tupe", 21, true, friends];
// // // console.log(mixed);


// // // const years = new Array(1991, 1984, 2008, 2020);
// // // console.log(years);


// // // console.log(friends[0]);
// // // console.log(friends[1]);
// // // console.log(friends[2]);

// // // console.log(friends.length);

// // // console.log(friends[friends.length - 1]);

// // // friends[1] = "Jay";
// // // console.log(friends);


// // // const firstName = "Christoher";
// // // const tupe = [firstName, "Naval", 2025 - 2004];
// // // console.log(tupe);


// // // const calcAge = function (birthYear) {
// // //   return 2025 - birthYear;
// // // };


// // // const ages = [calcAge(2004), calcAge(2005), calcAge(2012)];
// // // console.log(ages);

// // // Array Methods - adding elements
// // // lesson 2 array data manipulations
// const student1Grade = 85;
// const student2Grade = 92;
// const student3Grade = 78;
 
// // const grades = [85, 92, 78, 96, 88];
// // console.log(grades);
 
// let friends = ["Michael", "Steven", "Peter"];
// console.log(friends);
 
// const mixed = ["Jonas", 27, true, friends];
// console.log(mixed);
 
// const years = new Array(1991, 1984, 2008, 2020);
// console.log(years);
 
// console.log(friends[0])
// console.log(friends[1])
// console.log(friends[2])
 
// console.log(friends.length)
// console.log(friends[friends.length - 1])
 
// friends[1] = 'jay';
// console.log(friends);
 
// const firstName = "RJ"
// const rj = [firstName, "Silagan", 2025 - 2005]
// console.log(rj);
 
// const calcAge = function (birthYear) {
//   return 2025 - birthYear;
// };
 
// const ages = [calcAge(1991), calcAge(1967), calcAge(2002)];
// console.log(ages);
 
// // Array Methods - Adding elements
 
// // Push - add to end
// const newLength = friends.push("Steven");
// console.log(friends); // ['Michael', 'Steven', 'Peter', 'Jay']
// console.log(newLength);
 
// friends.unshift('Maria')
// console.log(friends)
 
// const popped = friends.pop()
// const popped2 = friends.pop()
// console.log(popped)
// console.log(popped2)
// console.log(friends)
 
// const shifted = friends.shift()
// console.log(shifted)
// console.log(friends)
 
// console.log(friends.indexOf('jay'))
 
// console.log(friends.includes('jay'))
 
// ////////////////////////////////////
// // Array Iteration - Loops
 
// friends =  ["Michael", "Steven", "Peter"];
 
// for (let index = 0; index < friends.length; index++) {
//     console.log(friends[index])
// }
 
// friends.forEach((friend, index) => {
//     console.log(`${index}: ${friend}`)
// })
 
// const grades2 = [85, 92, 78, 96, 88, 74]
 
// let total = 0;
// for (let index = 0; index < grades2.length; index++) {
//     total += grades2[index]
// }
 
// const ave = total / grades2.length
// console.log(`Average: ${ave.toFixed(2)}`)
 
// let passedCount = 0;
// grades2.forEach(
//     grade => {
//         if (grade >= 70){
//             passedCount++;
//         }
//     }
// )
// console.log(`${passedCount} out of ${grades2.length} have passed`)

// // Coding Challenge #2 - Student Grade Manager

// const grades = [78, 85, 92, 67, 65, 95, 73, 82];

// // Function to calculate average
// function calculateAverage(grades) {
//     // Your code here
//     // Hint: Sum all grades, then divide by number of grades
//     let total = 0; 
//     for (let i = 0; i < grades.length; i++) {
//         total += grades[i];
//     }
//     return total / grades.length;
// }

// // Function to find highest grade
// function findHighestGrade(grades) {
//   // Your code here
//   // Hint: Start with first grade, compare with each subsequent grade
//     let highest = grades[0];
//     for (let i = 1; i < grades.length; i++) {
//         if (grades[i] > highest) {
//             highest = grades[i];
//         }
//     }
//     return highest;
// }

// // Function to find lowest grade
// function findLowestGrade(grades) {
//     let lowest = grades[0];
//     for (let i= 1; i < grades.length; i++) {
//         if (grades[i] < lowest) {
//             lowest = grades[i];
//         }
//     }
//     return lowest;
// }

// // Function to count passing students
// function countPassing(grades, passingGrade) {
//   // Your code here
//   let count = 0;
//   for (let i = 0; i <grades.length; i++) {
//     if (grades[i] >= passingGrade) {
//         count++;
//     }
//   }
//   return count;
//   // Hint: Counter pattern - increment when condition is met
// }

// // Generate complete report
// const average = calculateAverage(grades);
// const highest = findHighestGrade(grades);
// const lowest = findLowestGrade(grades);
// const passing = countPassing(grades, 70);

// console.log("=== GRADE REPORT ===");
// console.log(`Average: ${average.toFixed(2)}`);
// console.log(`Highest: ${highest}`);
// console.log(`Lowest: ${lowest}`);
// console.log(`Passing students: ${passing} out of ${grades.length}`);


// ///////////////////////////////////
// // Problems with Arrays
// const ChristoherArray = [
//   "Christopher",
//   "Naval",
//   2025 - 2004,
//   "teacher",
//   ["Michael", "Peter", "Steven"],
// ];

// console.log(ChristoherArray[0]); 
// console.log(ChristoherArray[1]);

// const christopherObject = {
//     firstName: 'Christopher',
//     lastName: 'Naval',
//     age: 2025 - 2004,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven']
// }
// console.log(christopherObject);

// // Dot Notation
// console.log(christopherObject.firstName);
// console.log(christopherObject.lastName);
// console.log(christopherObject.age);

// // Bracket Notation
// console.log(christopherObject['firstName']);
// console.log(christopherObject['lastName']);
// console.log(christopherObject['age']);

// const nameKey = 'Name';
// console.log(christopherObject['first' + nameKey]);

// // Modifying exisiting properties
// christopherObject.job = 'programmer';
// christopherObject['age'] = 30;
// console.log(christopherObject);

// // add new properties
// christopherObject.location = 'Philippines';
// christopherObject['twitter'] = '@naval_rj';
// christopherObject.hasDriversLicense = true;
// console.log(christopherObject);

// // Objects vs Arrays Decision Making    
// // Arrays 
// const listOfYears = [1991, 1984, 2008, 2020];
// const shoppingList = ["apples", "bananas", "milk", "bread"];
// const testScores = [85, 92, 78, 96];

// // Objects
// const person = {
//   name: "Jonas",
//   age: 46,
//   occupation: "teacher",
// };

// const car = {
//   brand: "Toyota",
//   model: "Camry",
//   year: 2020,
//   color: "blue",
// };


// // Objects can contain arrays, arrays can contain objects
// const student = {
//   name: "Sarah",
//   grades: [85, 92, 78], 
//   address: {
//     street: "123 Main St",
//     city: "New York",
//   },
// };

// console.log(student.grades[0]);
// console.log(student.address.city);

// // object Methods

// const john = {
//   firstName: "John",
//   lastName: "Doe",
//   birthYear: 1991,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
//   hasDriversLicense: true,

//   calcAge: function (birthYear) {
//     return 2025 - birthYear;
//   },
// }

// console.log(john.calcAge(2004));

// const johnimproved = {
//   firstName: "John",
//   lastName: "Doe",
//   birthYear: 1991,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
//   hasDriversLicense: true,

//   calcAge: function () {
//     this.age = 2025 - this.birthYear;
//     return this.age;
//   },

// getSummary: function () {
//     return `${this.firstName} is a ${this.calcAge()}-year old ${
//         this.job
//     }, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`;
//   },
// };

// console.log(johnimproved.calcAge());
// console.log(johnimproved.age);
// console.log(johnimproved.getSummary());

// // Coding Challenge #3 - User Profile System

// const user = {
//   firstName: "Sarah",
//   lastName: "Johnson",
//   birthYear: 1995,
//   location: "New York",
//   interests: ["photography", "travel", "coding"],
//   friends: [
//     { name: "Michael", status: "active" },
//     { name: "Emma", status: "inactive" },
//     { name: "David", status: "active" },
//   ],
//   isActive: true,

//   // Calculate age method
//   calcAge: function () {
//     // Calculate age and store as this.age
//     // Hint: Use new Date().getFullYear() for current year
//     // Your code here
//     this.age = new Date().getFullYear() - this.birthYear;
//     return this.age;
//   },

//   // Add friend method
//   addFriend: function (name, status = "active") {
//     // Add new friend object to this.friends array
//     // Return the new length of friends array
//     // Your code here
//     this.friends.push({ name: name, status: status });
//     return this.friends.length; 
//   },

//   // Get active friends count
//   getActiveFriends: function () {
//     // Filter friends array to count only active friends
//     // Hint: use this.friends.filter()
//     // Your code here
//     const activeFriends = this.friends.filter(friend => friend.status === "active");
//     return activeFriends.length;
//   },

//   // Toggle active status
//   toggleStatus: function () {
//     // Switch this.isActive between true and false
//     // Return the new status
//     // Your code here
//     this.isActive = !this.isActive;
//     return this.isActive;
//   },

//   // Generate profile summary
//   getSummary: function () {
//     // Create a social media style profile summary
//     // Include: name, age, location, status, friend counts, interests
//     // Use template literals for nice formatting
//     // Your code here
//     const age = this.calcAge();
//     const activeFriends = this.getActiveFriends();
//     const status = this.isActive ? "active" : "away";

//     return `${this.firstName} ${this.lastName}, age ${age}, from ${this.location}
//     Currently ${status}
//     ${activeFriends} active friends out of ${this.friends.length} total
//     Interests: ${this.interests.join(", ")}
//     Connected and sharing life's adventures!`;
//   },
// };

// // Test your user profile system
// console.log(user.getSummary());
// user.addFriend("Alex", "active");
// user.toggleStatus();
// console.log(`\nAfter updates:`);
// console.log(user.getSummary());

// ///////
// querySelector - uses css selector

// const message = document.querySelector(".message");
// console.log(message);

// const button = document.querySelector("#btn");
// console.log(button);

// const heading = document.querySelector("h1");
// console.log(heading);
// // query selector returns the first matching element

// console.log(message.textContent);
// console.log(button.id);
// console.log(heading.tagName);
// console.log(heading.textContent);

// // getElementById 
// const buttonById = document.getElementById("btn");
// console.log(buttonById);
// console.log(buttonById === button);

// // querySelectorAll 
// const allParagraphs = document.querySelectorAll("p");
// console.log(allParagraphs);
// console.log(allParagraphs[0]); 
// console.log(allParagraphs.length); 



// Modifying Element Content

const message = document.querySelector(".message");

// text content
console.log(message.textContent); 
message.textContent = "Hello from JavaScript!";
console.log(message.textContent);


// inner html 
message.innerHTML = "<strong>Bold text from JS!</strong>";

// inner text
console.log(message.innerText);


// Input elements values
const input = document.querySelector(".guess");

console.log(input.value); 
input.value = "Default text"; 

const heading = document.querySelector("h1");

heading.style.color = "red";
heading.style.backgroundColor = "yellow";
heading.style.fontSize = "3rem";

const button = document.querySelector("#btn");
heading.style.padding = "20px";
heading.style.borderRadius = "10px";


// event istener - user interactions
button.addEventListener("click", function () {
  console.log("Button was clicked!");
  message.textContent = "You clicked the button!";
  message.style.color = "green";
});

let clickCount = 0;

button.addEventListener("click", function () {
  clickCount++;
  button.textContent = `Clicked ${clickCount} times`;
  button.style.backgroundColor = `hsl(${clickCount * 30}, 70%, 50%)`;
});

// input events

const display = document.querySelector(".message");
input.addEventListener("input", function () {
  const userText = input.value;
  display.textContent = input.value;
  message.style.fontSize = `${userText.length + 10}px`;
});

// keyboard events - respond to specific keys
input.addEventListener("keydown", function (event) {
  console.log(`Key pressed: ${event.key}`);

  if (event.key === "Enter") {
    message.textContent = `You pressed Enter! Text was: ${input.value}`;
    input.value = ""; 
  }
});

