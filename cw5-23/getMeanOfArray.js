// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.

function getAverage(marks){
       let total = marks.reduce((a,b) => a+b);    // get sum of array elements
       return Math.floor(total/marks.length); // divide by array.length and return
}

const test = [1,2,3,4,5]
const test1 = [0,10,25,50]

console.log(getAverage(test))
console.log(getAverage(test1))

// forgot to round down