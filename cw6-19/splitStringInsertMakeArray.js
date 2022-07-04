// What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?

// Example(Input --> Output)

// "apple ban" --> ["apple 5", "ban 3"]
// "you will win" -->["you 3", "will 4", "win 3"]
// Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .

// Note: String will have at least one element; words will always be separated by a space.

const addLength = str => {
  // need to separate string words into an array
  str = str.split(' ');
  // take element.length and add after word+spacea
  str = str.map(el =>
    `${el} ${el.length}`);
  // return the words as an array
  return str
}

let test = "apple ban"
// addLength(test)
console.log(addLength(test))

// MEGA yikes. Okay. Remember, when you want to obtain a modified form of the previous array, you use Array.prototype.map(). Otherwise, you would use the forEach() method, which does not technically return anything. 