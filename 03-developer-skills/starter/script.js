// Developer Skills Hour 4 - Advanced Problem-Solving & Real-World Challenges
'use strict';

console.log('=== HOUR 4: ADVANCED PROBLEM-SOLVING MASTERY ===');

/*
Your Developer Transformation Today:
Hour 1: Professional tools and environment ✅
Hour 2: Problem-solving framework and mindset ✅  
Hour 3: Research and debugging mastery ✅
Hour 4: Apply everything to real challenges

You're now solving unfamiliar problems independently.
*/

console.log('Ready to tackle complex problems using systematic approaches');
console.log('Challenge: Build solutions that work under pressure');

////////////////////////////////////
// MAIN CHALLENGE: Weather Forecast String Builder

/*
WEATHER FORECAST CHALLENGE:
Apply 4-step framework systematically:
1. UNDERSTAND: Transform array to formatted string with day numbering
2. DIVIDE: String building + formatting + day calculation + separators
3. RESEARCH: String concatenation and template literals
4. IMPLEMENT: Step-by-step solution building
*/

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

function printForecast(arr) {
  let string = '';

  for (let i = 0; i < arr.length; i++) {
    string += `${arr[i]} °C in ${i + 1} days ... `;
  }

  console.log('...' + string);
}

printForecast(data1);
printForecast(data2);

console.log('Weather forecast formatter working correctly!');

////////////////////////////////////
// TIME-PRESSURED CHALLENGE: Work Hours Analyzer

/*
JOB INTERVIEW SIMULATION:
10-minute challenge to analyze freelancer work week
Stay systematic even under pressure!
*/

function analyzeWorkWeek(dailyHours) {
  const totalHours = dailyHours.reduce((sum, hours) => sum + hours, 0);

  const averageHours = Math.round((totalHours / dailyHours.length) * 10) / 10;

  const mostHours = Math.max(...dailyHours);
  const maxDayIndex = dailyHours.indexOf(mostHours);
  const days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];
  const maxDay = days[maxDayIndex];

  const daysWorked = dailyHours.filter(hours => hours > 0).length;

  const isFullTime = totalHours >= 35;

  return {
    totalHours,
    averageHours,
    maxDay,
    daysWorked,
    isFullTime,
  };
}

// Test the solution
const weeklyHours = [7.5, 8, 6.5, 0, 8.5, 4, 0];
const analysis = analyzeWorkWeek(weeklyHours);
console.log('Work week analysis:', analysis);

console.log('Challenge completed under time pressure!');

//////
// FINAL INTEGRATION: Debug and Enhance Legacy Code

// Here's the buggy legacy code you need to fix
function legacyForecastFunction(temperatures) {
  // Multiple bugs hidden in this code!
  if (!Array.isArray(temperatures) || temperatures.length === 0) {
    console.error('Invalid input: temperatures is not a valid Array!');

    return;
  }

  var result = '';
  for (var i = 0; i < temperatures.length; i++) {
    result += `${temperatures[i]}°C in day ${i + 1} ...`;
  }
  return '...' + result;
}

// Test the buggy function to see what goes wrong
const testData = [15, 18, 22, 19];
console.log('Buggy function output:', legacyForecastFunction(testData));

console.log('🎯 Complete developer skills successfully applied!');
console.log('Legacy code debugged, fixed, and enhanced systematically');