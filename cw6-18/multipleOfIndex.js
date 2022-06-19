// Return a new array consisting of elements which are multiple of their own index in input array (length > 1).

// Some cases:
// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]

// [68, -1, 1, -7, 10, 10] => [-1, 10]

// [-56,-85,72,-26,-14,76,-27,72,35,-21,-67,87,0,21,59,27,-92,68] => [-85, 72, 0, 68]

const multipleOfIndex = array => {
  let divisibleVals = []
  array.forEach((element, index) => {
    if (element % index === 0){
      divisibleVals.push(element)
    }
  });
  return divisibleVals
}

const test = [-56,-85,72,-26,-14,76,-27,72,35,-21,-67,87,0,21,59,27,-92,68]

console.log(multipleOfIndex(test))

// First tryyyyy. The forEach() method was easily drawn from memory, though I tend to look for other methods of looping. The one line filter() method does look equally simple, but sometimes I like looking at a few more lines for clarity.
