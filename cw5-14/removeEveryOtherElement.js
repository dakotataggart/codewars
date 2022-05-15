// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// Example:

// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

function removeEveryOther(arr){
    return arr.filter(function(value, index){
        return index % 2 === 0;
    })
}

//so I learned that you can reference "value" without needing to call it. I'm sure there's a reason why.


//Wait I think I know the reason. It's the "index" OF THAT "value", so technically the value is getting referenced?