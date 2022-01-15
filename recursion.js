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

// write a recursion function that returns odd values 
function collectOddValues(arr){
    let newArr = [];
    
    if(arr.length === 0) {
        return newArr;
    }
        
    if(arr[0] % 2 !== 0){
        newArr.push(arr[0]);
    }
        
    newArr = newArr.concat(collectOddValues(arr.slice(1)));
    return newArr;
}

collectOddValues([1,2,3,4,5])

// write a recursive function which takes in an array of numbers and returns the product of them all
function productOfArray(str) {
    if(arr.length === 0) {
        return 1;
    }
    return arr[0] * productOfArray(arr.slice(1));
}