//Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

//function countSheeps(arrayOfSheep) {
  // TODO May the force be with you
//}


//////// This was the wrong approach; no matter how I changed it it just counter the number of values in the array.
// function countSheeps(array){
//     let counter = 0;
//     array.forEach(sheep => {
//         if (sheep = true){
//             counter += 1;
//         }
//     });
//     return counter;
// }

////////////took some research on this one, need to stay on that Anki
const countSheeps = arr => arr.filter(element => element === true).length

let test = [true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]

console.log(countSheeps(test))

//  17