// WHAT IS A HASH TABLE(HASH MAP): USED TO STORE KEY-VALUE PAIRS; ARE LIKE ARRAYS BUT KEYS ARE NOT ORDERED
    // UNLIKE ARRAYS, HASHTABLES ARE FAST FOR ALL OF THE FOLLOWING OPERATIONS, FINDING VALUES, ADDING NEW VALUES, AND REMOVING VALUES

// PYTHON HAS DICTIONARIES
// JAVASCRIPT HAS OBJECTS AND MAPS
// JAVA, GO, & SCALA HAVE MAPS
// RUBY HAS HASHES



// easier to read [green, black, red] instead of [#f0003, #f4356, #f4958]
// in order to look up values by key, we need a way to convert keys into valid array indices
// a function that performs this task is called a has function

// what makes a good hash?
    // Fast(i.e constant time)
    // Doenst cluster outputs at specific indices, but distributes uniformly
    // Deterministic(same input yields same output)

function hash(key, arrayLen) {
    let total = 0;
    for(let char of key) {
        // map 'a' to 1, 'b' to 2, 'c' to 3
        let value = char.charCodeAt(0) - 96
        total = (total + value) % arrayLen;
    }
    return total;
}