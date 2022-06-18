// Find Mean
// Find the mean (average) of a list of numbers in an array.

// Information
// To find the mean (average) of a set of numbers add all of the numbers together and divide by the number of values in the list.

// For an example list of 1, 3, 5, 7

const findAverage = array => array.reduce((a,b) => a+b)/array.length

const test = [1,3,5,7];

console.log(findAverage(test))

// Easy function, and the proper usage of array.reduce() didn't leave my brain since the last time I used it
// DID accidentally use array.length-1 for the divisor initially. This did NOT divide 16 by 3, but instead divided 16 by 4 and then subtracted 1. Gotta remember those parentheses