// Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.

// Example(Input1, Input2 --> Output)
// [1, 2, 3, 4, 5, 6], 2 --> [2, 4, 6]

function divisibleBy(numbers, divisor){
    let result = [];
    for (let i = 0; i <= numbers.length-1; i++){
        if (numbers[i] % divisor === 0){
            result.push(numbers[i])
        }
    }return result
}


const test1 = [1, 2, 3, 4, 5, 6]
const test2 = 2
console.log(divisibleBy(test1,test2))

///////// Almost first try; used 'i < numbers.length-1' instead of 'i <= numbers.length-1' at first, which caused my loop not to iterate through the last element of the array
