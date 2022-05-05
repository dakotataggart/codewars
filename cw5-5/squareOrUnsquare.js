// Write a method, that will get an integer array as parameter and will process every number from this array.

// Return a new array with processing every number of the input-array like this:

// If the number has an integer square root, take this, otherwise square the number.

// Example
// [4,3,9,7,2,1] -> [2,9,3,49,4,1]
// Notes
// The input array will always contain only positive numbers, and will never be empty or null.

// function squareOrSquareRoot(array) {
//     for (i = 0; i < array.length; i++){
//         if (Math.sqrt(num) % 1 === 0){
//             num = Math.sqrt(num);
//         }else {
//             num ** 2;
//         }
//     }return array;
// } 
//     array.forEach(num => {
//         if (Math.sqrt(num) % 1 === 0){
//             num = Math.sqrt(num);
//         }else {
//             num ** 2;
//         }
//     })
// }

// const test = [4,3,9,7,2,1]
// console.log(squareOrSquareRoot(test))

// Gave up on this one, completely forgot about ternaries and array.map()

const squareOrSquareRoot = array => array.map(num => Math.sqrt(num) % 1 == 0 ? Math.sqrt(num) : num ** 2);

// For each num element within the array passed into the function, if the square root of that number is a whole integer, reassign that number to be it's square root. Otherwise, reassign it to be the number squared.

const test = [4,3,9,7,2,1]
console.log(squareOrSquareRoot(test))