// Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection.

// For example: ["3:1", "2:2", "0:1", ...]

// Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:

// if x > y: 3 points
// if x < y: 0 point
// if x = y: 1 point
// Notes:

// there are 10 matches in the championship
// 0 <= x <= 4
// 0 <= y <= 4

const points = array => {
  let total = 0 
  array.forEach((element) => {
    if (Number(element[0]) > Number(element[2])){
      total += 3
    }else if (Number(element[0]) === Number(element[2])){
      total += 1
    }
  });
  // get number value of each pair
  // compare values in pairs + assign them result value (0/1/3)
    console.log(total)
}

const test = ['1:0','2:0','3:0','4:0','2:1','3:1','4:1','3:2','4:2','4:3']
const test2 = ['1:1','2:2','3:3','4:4','2:2','3:3','4:4','3:3','4:4','4:4']
points(test)
points(test2)


// ASSIGNMENT != EQUIVALENCE 
// Other than that, got it all on my own. We love that 