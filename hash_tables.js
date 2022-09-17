// WHAT IS A HASH TABLE(HASH MAP): USED TO STORE KEY-VALUE PAIRS; ARE LIKE ARRAYS BUT KEYS ARE NOT ORDERED
    // UNLIKE ARRAYS, HASHTABLES ARE FAST FOR ALL OF THE FOLLOWING OPERATIONS, FINDING VALUES, ADDING NEW VALUES, AND REMOVING VALUES

// BIG O OF HASH TABLES:
    // INSERT - O(1)
    // DELETION - O(1)
    // ACCESS - O(1)

// RECAP: 
    // HASH TABLES ARE COLLECTIONS OF KEY-VALUE PAIRS
    // HASH TABLES CAN FIND VALUES QUICKLY GIVEN A KEY
    // HASH TABLES CAN ADD NEW KEY VALUES QUICKLY
    // HASH TABLES CAN STORE DATA IN A LARGE ARRAY, AND WORK BY HASHING THE KEYS
    // A GOOD HASH SHOULD BE FAST DISTRIBUTE KEYS UNIFORMLY, AND BE DETERMINISTIC
    // SEPERATE CHAINING AND LINEAR PROBING ARE TWO STRATEGIES USED TO DEAL WITH TWO KEYS THAT HASH TO THE SAME INDEX

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
    get(key) {
        let index = this._hash(key);
        if(this.keyMap[index]) {
            // once we found correct spot loop through that specific index
            for(let i = 0; i < this.keyMap[index].length; i++) {
                // if the value at that index is the same as the key
                if(this.keyMap[index][i][0] === key) {
                    // return the value at that index
                    return this.keyMap[index][i][1]
                } 
            }
        }
        return undefined;
    }
    value() {
        let valuesArr = [];
        for(let i = 0; i < this.keyMap.length; i++) {
            if(this.keyMap[i]) {
                // loop thorough all the values and check if there is any duplicates
                for(let j = 0; j < this.keyMap[i].length; j++) {
                    // keeps duplicates out
                    if(!valuesArr.includes(this.keyMap[i][j][i]))
                    // if no duplicates push
                    valuesArr.push(this.keyMap[i][j])
                }
            }
        }
        return valuesArr;
    }
    keys() {
        let valuesArr = [];
        for(let i = 0; i < this.keyMap.length; i++) {
            if(this.keyMap[i]) {
                // loop thorough all the values and check if there is any duplicates
                for(let j = 0; j < this.keyMap[i].length; j++) {
                    // each key is stored at index 0(first val) instead of the the second(idx 1)
                    if(!keysArr.includes(this.keyMap[i][j][0]))
                    // if no duplicates push
                    keysArr.push(this.keyMap[i][j])
                }
            }
        }
        return keysArr;
    }
}
let ht = new HashTable();   
ht.set("green", "#f0000d")
ht.set("red", "#f79874")
ht.set("black", "#f00000")
ht.set("orange", "#f89345")
ht.set("yellow", "#f23487")
ht.set("purple", "#f487529")

