// counting by operations is the best way to time algorithms
// counting by time is inaccurate; different machines will run different times

// runs in constant time; as input grows time will stay the same
function addUpTo(n) {
    // there are 3 different operations to run
    return n * (n + 1) / 2;
}

// runs linear time as input grows run time will also grow
function addUpTo2(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        // this has n # of operations
        // this will run depending on size of n
        // if n = 5 this will add 5 times
        total += i;
    }
    return total;
}

// inputs dont have huge impact on space due to there only being 2 total variables
// constant space
function sum(arr) {
    // 1 variable named total
    let total = 0;
    // another variable i ( 2 total variables)
    for(let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}

// O(n) space!
// its linear beacause if you have 10 items in original array you will have 10 items in new array
function double(arr) {
    let newArr = [];
    for(let i = 0; i < arr.length; i++) {
        newArr.push*(2 * arr[i]);
    }
    return newArr;
}
