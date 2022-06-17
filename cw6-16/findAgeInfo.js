// At the annual family gathering, the family likes to find the oldest living family member’s age and the youngest family member’s age and calculate the difference between them.

// You will be given an array of all the family members' ages, in any order. The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed ‘age’ of 0. Return a new array (a tuple in Python) with [youngest age, oldest age, difference between the youngest and oldest age].

const differenceInAges = array => {
  let oldest = Math.max(...array);
  let youngest = Math.min(...array);
  let data = [youngest, oldest, oldest - youngest];
  return data;
}

const test = [72, 47, 3, 93, 10]

console.log(differenceInAges(test))

// Reminder of how to use destructuring to find min/max values of an array. Must use destructuring to convert the array into distinct variables