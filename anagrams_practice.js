// anagram: 2 string that have same characters no matter the order

// construct an algorithm that tells you whether an anagram is true or false

// function anagram takes in 2 parameters first, second
function validAnagram(first, second) {
    // if first string length is not the same as second string length then we already know its false
    if(first.length !== second.length) {
        // return false
        return false;
    }
    // counter lookup that is breakdown of first string
    const lookup = {};
    

    for(let i = 0; i < first.length; i++) {
        // set variable letter equal to first[i]
        let letter = first[i];
        // if letter exists, increment by 1, otherwise set to 1
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }
    console.log(lookup)

    // loop through second string
    for (let i = 0; i < second.length; i++) {
        // stores individual letter
        let letter = second[i];
        // if letter is not in there
        if (!lookup[letter]) {
            // return false
            return false;
        }
        else {
            // remove 1 from counter if letters match
            lookup[letter] -= 1;
        }
    }
    return true;
}
validAnagram('anagram', 'nagaram')