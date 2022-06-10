// I would like to be able to pass an array with two elements to my swapValues function to swap the values. However it appears that the values aren't changing.

// Can you figure out what's wrong here?

const swapValues = array => array.reverse()

let test = [1,2]
console.log(swapValues(test));

// Since we are only ever dealing with two values, it seems prudent to just use the reverse method in place