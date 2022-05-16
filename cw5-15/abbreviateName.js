// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

function abbrevName(name){
    return (`${name[0]}.${name[name.indexOf(' ')+1]}`).toUpperCase();
}


console.log(abbrevName('Sam Harris'))



//this is some really nasty code, I'm sorry
