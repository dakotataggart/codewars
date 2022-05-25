// Sentence Smash
// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

// Example
// ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'


    // add each word + space to a new array
    // no space after last word
    // combine array elements into string 'sentence'
    // return 'sentence'
function smash (words) {
    let sentence = [];
    // need to loop through array
    for (let i = 0; i < words.length; i++){
        if (i < words.length - 1){
            sentence.push(`${words[i]} `)
        }else {
            sentence.push(`${words[i]}`)
        }
    } return sentence.join('') // need to use join instead of toString() because otherwise you will get commas separating the array values
};

const test = ['hello', 'world', 'this', 'is', 'great'];
console.log(smash(test));