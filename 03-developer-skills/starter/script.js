// // Developer Skills Hour 3 - Research Skills & Debugging Fundamentals
// 'use strict';

// console.log('=== HOUR 3: RESEARCH & DEBUGGING MASTERY ===');

// /*
// Random Googling vs Strategic Research:

// RANDOM GOOGLING (Beginner Approach):
// - Search only when completely stuck
// - Use vague search terms like "javascript array problem"
// - Copy-paste first solution found
// - Don't understand what the code does
// - Same problems happen repeatedly

// STRATEGIC RESEARCH (Professional Approach):
// - Research proactively to understand concepts
// - Use specific, targeted search terms
// - Evaluate multiple solutions
// - Understand solutions before implementing
// - Build knowledge for future problems
// */

// console.log(
//   'Goal: Master research and debugging like a professional developer'
// );
// console.log(
//   'Strategic research builds lasting knowledge, not just quick fixes'
// );

// ////////////////////////////////////
// // PROFESSIONAL GOOGLE RESEARCH TECHNIQUES

// /*
// RESEARCH CHALLENGE: Find Maximum Value in Array
// Search progression:
// 1. "javascript maximum value array"
// 2. "javascript Math.max array"
// 3. "javascript Math.max spread operator array"
// 4. "Math.max MDN javascript"
// */

// function demonstrateArrayMax(numbers) {
//   // Method 1 - Using Math.max with spread operator (from research)
//   const method1 = Math.max(...numbers);

//   // Method 2 - Using for loop (traditional approach)
//   let method2 = numbers[0];
//   for (let i = 1; i < numbers.length; i++) {
//     if (numbers[i] > method2) method2 = numbers[i];
//   }

//   // Method 3 - Using reduce method (functional approach)
//   const method3 = numbers.reduce((max, current) =>
//     current > max ? current : max
//   );

//   return { method1, method2, method3 };
// }
// // Test our research with sample data
// const testNumbers = [3, 7, 2, 9, 1, 5];
// const maxResults = demonstrateArrayMax(testNumbers);
// console.log('Multiple approaches from research:', maxResults);

////////////////////////////////////
// SYSTEMATIC DEBUGGING METHODOLOGY

/*
5-STEP DEBUGGING PROCESS:
1. IDENTIFY - Recognize bug exists
2. ISOLATE - Locate where bug happens
3. INVESTIGATE - Understand why bug occurs
4. FIX - Implement correction
5. PREVENT - Add safeguards against similar bugs
*/

// // Buggy function for debugging practice
// function calculateAverageScore(scores) {
//   let total; // BUG: Should be initialized to 0

//   for (let i = 0; i <= scores.length; i++) {
//     // BUG: Should be < not <=
//     total += scores[i];
//   }

//   return total / (scores.length + 1); // BUG: Should be scores.length
// }

// // Test the buggy function
// const testScores = [85, 92, 78, 96, 88];
// const buggyResult = calculateAverageScore(testScores);
// console.log("Buggy result:", buggyResult); // Will show NaN or incorrect value

// ////////////////////////////////////
// // DEBUGGER STATEMENT AND BREAKPOINTS

// function stepThroughDebugging(numbers) {
//   debugger; // This will pause execution in browser dev tools

//   let sum = 0;
//   let count = 0;

//   for (let i = 0; i < numbers.length; i++) {
//     const currentNumber = numbers[i];

//     console.log(`Processing index ${i}: value = ${currentNumber}`);

//     if (typeof currentNumber === 'number') {
//       sum += currentNumber;
//       count++;
//     } else {
//       console.error(`Invalid number at index ${i}:`, currentNumber);
//     }
//   }

//   const average = count > 0 ? sum / count : 0;
//   console.log('Final results:', { sum, count, average });

//   return average;
// }

// // Test debugging function - open dev tools to see debugger in action
// const mixedNumbers = [10, 20, 'error', 30, null, 40];
// const debugResult = stepThroughDebugging(mixedNumbers);
// console.log('Debug session result:', debugResult);

////////////////////////////////////
// SYSTEMATIC BUG FIXING APPLICATION

/*
DEBUGGING PROCESS APPLICATION:

STEP 1: IDENTIFY ✅
- Bug: calculateAverageScore returns NaN or wrong value
- Expected: Average of [85, 92, 78, 96, 88] should be 87.8
- Actual: Getting NaN or incorrect value

STEP 2: ISOLATE ✅
- Bug location: Inside calculateAverageScore function
- Specific issues: initialization, loop condition, division

STEP 3: INVESTIGATE ✅
- total starts as undefined (undefined + number = NaN)
- Loop goes one iteration too far (accesses undefined)
- Division uses wrong denominator

STEP 4: FIX ✅
- Initialize total to 0
- Change <= to < in loop condition
- Remove + 1 from division

STEP 5: PREVENT ✅
- Add input validation
- Add type checking for array elements
*/

function calculateAverageScoreFixed(scores) {
  // STEP 5 - PREVENT: Add input validation
  if (!Array.isArray(scores) || scores.length === 0) {
    console.error('Invalid input: scores must be a non-empty array');
    return 0;
  }


  // STEP 4 - FIX: Proper initialization
  let total = 0; // FIXED: Initialize to 0, not undefined

  // STEP 4 - FIX: Correct loop condition
  for (let i = 0; i < scores.length; i++) {
    // FIXED: < instead of <=
    // STEP 5 - PREVENT: Add type checking
    if (typeof scores[i] === 'number') {
      total += scores[i];
    } else {
      console.warn(`Skipping non-number value at index ${i}:`, scores[i]);
    }
  }

  // STEP 4 - FIX: Correct division
  return total / scores.length; // FIXED: Remove + 1
}

// testScores = [85, 92, 78, 96, 88];



// // Test the fixed function
// const fixedResult = calculateAverageScoreFixed(testScores);
// console.log('Fixed result:', fixedResult); // Should show correct average: 87.8

// Comprehensive debugging verification
console.group('Debugging Verification Tests');

// Test 1 - Normal case
const normalScores = [85, 92, 78, 96, 88];
const normalResult = calculateAverageScoreFixed(normalScores);
console.log('Normal case result:', normalResult);


// Test 2 - Edge case with invalid data
const mixedScores = [85, 'invalid', 92, null, 78];
const mixedResult = calculateAverageScoreFixed(mixedScores);
console.log('Mixed data result:', mixedResult);

// Test 3 - Error case with invalid input
const errorResult = calculateAverageScoreFixed('not an array');
console.log('Error case result:', errorResult);

// Test 4 - Edge case with empty array
const emptyResult = calculateAverageScoreFixed([]);
console.log('Empty array result:', emptyResult);

console.groupEnd();