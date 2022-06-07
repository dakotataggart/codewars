// For every good kata idea there seem to be quite a few bad ones!

// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

// Create counter for number of 'good' cases
// Need to loop through array -- Test each element to see if it matches 'good'
// If good --> add to counter
// Conditional for counter: 
//      counter > 2, return 'I smell a series!'
//      counter > 0, return 'Publish!' 
//      else return 'Fail!'

// const well = x => {
//     let count = 0;
//     for (let i = 0; i < x.length; i++){
//         if (x[i] === 'good'){
//             count ++;
//         }
//     }if (count > 2){
//         return 'I smell a series!'
//     }else if(count > 0){
//         return 'Publish!'
//     }else {
//         return 'Fail!'
//     }
// }

const test1 = ['bad', 'bad', 'bad']  //  'Fail!'
const test2 = ['good', 'bad', 'bad', 'bad', 'bad'] //   'Publish!'
const test3 = ['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']  // 'I smell a series!'


// FIRST TRYYYYYYYYYYYYYY, but very clunky solution. WET code everywhere.


const well = x => {
  const good_count = x.filter(x => x == 'good').length;  // Okay I think I get it, the filter using just 'x' throws every value from the array of 'x' into a callback that checks if that value == 'good'
  return good_count < 1 ? 'Fail!' :         // This is basically saying "if good_count < 1, return 'Fail!', ELSE IF good_count < 3, return 'Publish!', ELSE return 'I smell a series!'"  Just an else if chain
         good_count < 3 ? 'Publish!' : 'I smell a series!';
}


console.log(well(test1), well(test2), well(test3))

// const well = x => {
//     let count = 0;
//     for (let i = 0; i < x.length; i++){
//         if (x[i] === 'good'){
//             count ++;
//         }
//     }if (count > 2){
//         return 'I smell a series!'
//     }else if(count > 0){
//         return 'Publish!'
//     }else {
//         return 'Fail!'
//     }
// }