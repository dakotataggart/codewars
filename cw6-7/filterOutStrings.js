// Write a function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the 'geese' removed.

// The geese are any strings in the following array, which is pre-populated in your solution:

//   ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]



const test = ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]
//         // ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]

// const gooseFilter = birds => {
//   var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
//   return birds.filter(value => !geese.includes(value))
//   // return an array containing all of the strings in the input array except those that match strings in geese
// }; 

// // couldn't figure out how to compare one element to all the elements of an array
// // Array

// console.log(gooseFilter(test))
// ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]

// and now we do it again

function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  return birds.filter(bird => !geese.includes(bird))
  // return an array containing all of the strings in the input array except those that match strings in geese
};

console.log(gooseFilter(test))