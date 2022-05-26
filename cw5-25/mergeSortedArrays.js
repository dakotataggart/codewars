// You are given two sorted arrays that both only contain integers. Your task is to find a way to merge them into a single one, sorted in asc order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.

// You don't need to worry about validation, since arr1 and arr2 must be arrays with 0 or more Integers. If both arr1 and arr2 are empty, then just return an empty array.

// Note: arr1 and arr2 may be sorted in different orders. Also arr1 and arr2 may have same integers. Remove duplicated in the returned result.

// Examples (input -> output)
// * [1, 2, 3, 4, 5], [6, 7, 8, 9, 10] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// * [1, 3, 5, 7, 9], [10, 8, 6, 4, 2] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// * [1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12] -> [1, 2, 3, 4, 5, 7, 9, 10, 11, 12]

// let test0 = [1,2,3,4,5];
// let test1 = [6,6,6,9,10];
// let test2 = test1.concat(test0).sort((a,b) => a-b);
// let noDupe = [...new Set(test2)];
// console.log(test2); 
// console.log(noDupe);
// let test3 = [];
// let test4 = [];
// let test5 = test3.concat(test4).sort((a,b) => a-b);
// console.log(test5);
// okay, figured out the array math and whatnot
let arr1 = [1,2,3,4,5];
let arr2 = [6,6,6,9,10];
const mergeArrays = (arr1,arr2) => [...new Set(arr1.concat(arr2).sort((a,b) => a-b))];
console.log(mergeArrays(arr1,arr2));

// need to hit up those Array.from() and Set() methods