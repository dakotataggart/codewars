// Wolves have been reintroduced to Great Britain. You are a sheep farmer, and are now plagued by wolves which pretend to be sheep. Fortunately, you are good at spotting them.

// Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at the front of the queue which is at the end of the array:

// [sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]      (YOU ARE HERE AT THE FRONT OF THE QUEUE)
//    7      6      5      4      3            2      1
// If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position in the queue.

// Note: there will always be exactly one wolf in the array.

// Examples
// Input: ["sheep", "sheep", "sheep", "wolf", "sheep"]
// Output: "Oi! Sheep number 1! You are about to be eaten by a wolf!"

// Input: ["sheep", "sheep", "wolf"]
// Output: "Pls go away and stop eating my sheep"


//  need to determine length of array (array.length)
//  loop through and find which element is the wolf
//  will need (array.length - (i + 1)) to determine wolf's spot in queue
//  if wolfSpot != 1, return "Oi! Sheep number ${wolfSpot-1}! You are about to be eaten by a wolf!"
//  if wolfSpot = 1, return "Pls go away and stop eating my sheep"
// /////////////////// QUEUE = array of sheep

const warnTheSheep = queue => {
  // return queue.find((value) => value == "wolf").findIndex
  // return queue.findIndex((element) => element == "wolf")
  let wolfSpot = queue.reverse().findIndex((sheep) => sheep === "wolf");
  if (wolfSpot === 0){
    return "Pls go away and stop eating my sheep";
  }else {
    return `Oi! Sheep number ${wolfSpot}! You are about to be eaten by a wolf!`;
  }
}
// Changed paths, think this way ended up being simpler that whatever pseudo-code I did beforehand

// Now we try in one line: 
// const warnTheSheep = queue => queue.reverse().findIndex((element) => element === "wolf") === 0 ? "Pls go away and stop eating my sheep" : `Oi! Sheep number ${(queue.reverse().findIndex((element) => element === "wolf"))}! You are about to be eaten by a wolf!`;

// Unsuccessful

const test1 = ["sheep", "sheep", "sheep", "wolf", "sheep"]
const test2 = ["sheep", "sheep", "wolf"]
console.log(warnTheSheep(test1))
console.log(warnTheSheep(test2))