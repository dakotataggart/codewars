// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

let test = [1, 2, 3, 4];

const grow = x => x.reduce((a,b) => a*b);

console.log(grow(test));