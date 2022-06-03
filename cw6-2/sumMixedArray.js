// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

const sumMix = x => Number(x.reduce((a,b) => Number(a)+Number(b)));

const test = ['9']// 3, '7', '3']

console.log(sumMix(test))


// Had to figure out where to use the Number() method. Accounted for edge cases of array containing just a single string.
