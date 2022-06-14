// Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.

// E.g.

// arrayMadness([4, 5, 6], [1, 2, 3]); // returns true since 4 ** 2 + 5 ** 2 + 6 ** 2 > 1 ** 3 + 2 ** 3 + 3 ** 3

function arrayMadness(a,b){
  // square all values in 'a' and add them
  a = a.map((el) => el**2);
  a = a.reduce((add1,add2) => add1+add2)
  // cube all values in 'b' and add them
  b = b.map((el2) => el2**3);
  b = b.reduce((add1,add2) => add1+add2)
  // compare a <> b; return true if a > b
  if (a>b){
    return true
  }else {
    return false
  }
}

test1 = [5,6,8]
test2 = [4,5,6]
console.log(arrayMadness(test1,test2))

// So difference between map/filter does not matter here, but a and b both need to be reassigned for each operation on the arrays, at least with the syntax I am currently using

// const arrayMadness = (a, b) => a.reduce((acc, x) => acc + x**2, 0) > b.reduce((acc, x) => acc + x**3, 0) 

// function arrayMadness(a, b) {
//   return a.reduce( (sum, el) => sum + el ** 2, 0) >
//          b.reduce( (sum, el) => sum + el ** 3, 0);
// }