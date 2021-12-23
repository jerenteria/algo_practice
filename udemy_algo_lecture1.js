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