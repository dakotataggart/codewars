// Your task is to sum the differences between consecutive pairs in the array in descending order.

// For example:

// [2, 1, 10]  ->  9
// In descending order: [10, 2, 1]

// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

function sumOfDifferences(arr){
    let newArr = arr.sort((a,b) => b-a);
}
let test = [2, 1, 10];
// console.log(test.sort((a,b) => b-a))
// console.log(test)

// okay I've got a working mental example of what should be going on, just need to come back and "sort" out the code for it haha