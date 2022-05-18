// Can you find the needle in the haystack?

// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle, so:

// findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])
// should return "found the needle at position 5"

const test = ['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk']

const findNeedle = haystack => `found the needle at position ${haystack.indexOf('needle')}`

console.log(findNeedle(test)); // "found the needle at position 5"


// This one was pretty simple, but I guess I am still doing 8kyus here