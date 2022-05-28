// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

// Array can contain numbers or strings. X can be either.

// Return true if the array contains the value, false if not.

const check = (a, x) => a.includes(x) ? true : false;

const testArray = [101, 45, 75, 105, 99, 107];
const testValue = 108; // false
const testValue = 107; // true
console.log(check(testArray, testValue))
