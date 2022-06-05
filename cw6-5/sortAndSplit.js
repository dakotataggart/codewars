// You will be given a vector of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

// You should not remove or add elements from/to the array.


const twoSort = (arr) => {
    arr.sort();
    return (arr[0].split('')).join('***'); // .join('***')
}
const test = ["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"]

console.log(twoSort(test))
// "a***r***e"


// I needed to explicity state the 'return' in the multiline arrow function to get line 10 to actually function properly. 

// THIS is what I was aiming for: s.sort()[0].split('').join('***'); 
// arr.sort()[0] was the proper syntax for grabbing the 0th index value in one line
