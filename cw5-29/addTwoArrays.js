// I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.

const arrayPlusArray = (arr1,arr2) => arr1.reduce((a,b) => a+b) + arr2.reduce((a,b) => a+b)

const test1 = [1, 2, 3];
const test2 = [4, 5, 6];

console.log(arrayPlusArray(test1, test2));