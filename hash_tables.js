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
// faster
function hash2(key, arrayLen) {
    let total = 0;
    let WEIRD_PRIME = 31;
    // if there is a huge amount of values, we will only look at the first 100
    for(let i = 0; i < Math.min(key.length, 100); i++) {
        let char = key[i]
        let value = char.charCodeAt(0) - 96
        total = (total + WEIRD_PRIME + value) % arrayLen;
    }
    return total;
}

// dealing with collisions
    // seperate chaining(store things together): at each index in our array we store values using more 
    // sophisticated data structure(array/linked list)
        // allows us to store multiple key value pairs at the same index(position)
    // linear probing(store things seperately "one item per slot"): when we fined a collision we search through the array to 
    // find the next empty slot
        // unlike seperate chaining this allows us to store a single key value pair
    
class HashTable {
    constructor(size = 53) {
        this.keyMap = new Array(size);
    }
    _hash(key) {
        let total = 0;
        let WEIRD_PRIME = 31;
        for(let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }
        return total;
    }
    set(key, val) {
        let index = this._hash(key);
        // if there is nothing in keyMap at that index that was returned; if 11 was returned check if there was nothing there
        if(!this.keyMap[index]) {
            // if the space at that index is empty, create a new empty array in that space
            this.keyMap[index] = [];
        }
        // if there is something there then create a new array in that space and push the key and value into that new array
        // which becomes the child to the parent array that was already there
        this.keyMap[index].push([key, value]);
    }
     
}
let ht = new HashTable();   
ht.set("hellow world", "goodbye!!")

