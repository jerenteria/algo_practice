// Create a function that accepts a number as an input.
// Return a new array that counts down by one, from the number (as array’s ‘zeroth’ element) 
// down to 0 (as the last element). How long is this array?



// Your function will receive an array with two numbers. Print the first value, 
// and return the second.

function printReturn() {
    var arr = [1, 2];
    console.log(arr[0]);
    return(arr[1]);
}
printReturn();

console.log("------------")

// Given an array, return the sum of the first value in the array,
// plus the array’s length. What happens if the array’s first value is not a 
//number, but a string (like "what?") or a boolean (like false).

function arraySum() {
    arr = [1, 2, 3, 4, 5]
    console.log(arr[0] + arr.length)
}
arraySum();

function arraySum2() {
    arr = [false, 2, 3, 4, 5]
    console.log(arr[0] + arr.length)
}
arraySum2();

console.log("------------")


// Your function should accept an array. If value at [0] 
// is greater than array’s length, print "Too big!"; if value at [0] 
//is less than array’s length,
// print "Too small!"; otherwise print "Just right!".

function tooBig() {
    var arr = [5, 4, 6, 2, 10]
    if(arr[0] > arr.length) {
        console.log("Too Big!")
    }
    else if(arr[0] < arr.length) {
        console.log("Too Small!")
    }
    else(console.log("Just Right!"))
}
tooBig();

console.log("------------")

// Kelvin wants to convert between temperature scales. 
// Create fahrenheitToCelsius(fDegrees) that accepts a number 
// of degrees in Fahrenheit and returns the equivalent
// temperature as expressed in Celsius degrees. 
// For review, Fahrenheit = (9/5 * Celsius) + 32.




