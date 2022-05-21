// Your task is to find the first element of an array that is not consecutive.
// By not consecutive we mean not exactly 1 larger than the previous element of the array.
// E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number.
// If the whole array is consecutive then return null.
// The array will always have at least 2 elements1 and all elements will be numbers. The numbers will also all be unique and in ascending order. The numbers could be positive or negative and the first non-consecutive could be either too!

// 1 Can you write a solution that will return null for both [] and [ x ] though? (This is an empty array and one with a single number and is not tested for, but you can write your own example test. )

// function firstNonConsecutive (arr) {
//     arr.forEach(num => {
//         if ((num[] + 1) === (  )        
//     });
//     // compare two elements at a time
//     // difference of 1? move to next pair
//     // difference of >1? stop, return second element
// }

// can't use forEach loops to solve all of my problems, as much as I'd like to

function firstNonConsecutive(arr){
    for (let i = 0; i < arr.length - 1; i++){
        if ((arr[i] + 1) != arr[i + 1]){
            return arr[i + 1];
        }
    }return null;
}


// const test = [1, 2, 3, 4, 5, 6, 7, 8]
 const test = [ ]
console.log(firstNonConsecutive(test));


// dont forget that the condition must be arr.length - 1 because we want to include the element at [0] (eliminating the possibility of starting with i = 1), and because making the loop try to run more times than there are elements (such as with i = 0; i < arr.length) would cause it to return undefined on edge cases