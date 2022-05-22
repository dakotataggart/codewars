// Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

// I love you
// a little
// a lot
// passionately
// madly
// not at all

// Your goal in this kata is to determine which phrase the girls would say for a flower of a given number of petals, where nb_petals > 0.

// function howMuchILoveYou(nbPetals) {
//     // take number of petals
//     // 
// }

// no clue. 
// figured you needed to make an array of the phrases, lets go from there

const phrases = [
    'I love you',
    'a little',
    'a lot',
    'passionately',
    'madly',
    'not at all',
]
// If nbPetals is 3, return 'a lot', [2] of phrases.  // phrases['math to get [2] from nbPetals = 3']

// const howMuchILoveYou = nbPetals => phrases[(nbPetals - 1)]

// console.log(howMuchILoveYou(3))

// if petals is 7, need math to get 1

const howMuchILoveYou = nbPetals => phrases[(nbPetals - 1) % 6]

// the % 6 will give me the leftover value of the max number of phrases, which would be the index of the phrases array we want to access, no matter how many petals