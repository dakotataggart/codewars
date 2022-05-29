// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

const simpleMultiplication = x => 
    x % 2 === 0 ?
    8 * x :
    9 * x;


console.log(simpleMultiplication(9))