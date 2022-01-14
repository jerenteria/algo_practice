// RECURSION: a function that calls itself

function countDown(num) {
    if(num <= 0) {
        console.log("All done!");
        return;
    }
    console.log(num);
    num--;
    countDown(num);
}
countDown(3)

function sumRange(num) {
    if(num === 1) return 1; // base case
    return num + sumRange(num - 1); 
}

function factorial(num) {
    let total = 1;
    for(let i = num; i > 0; i--) {
        total *= i;
    }
    return total;
}
factorial(4)

// factorial but recursive
function factorial(num) {
    if(num === 1) return 1; // base case
    return num * factorial(num - 1)
}