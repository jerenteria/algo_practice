// write a function called sumZero which accepts a sorted array of integers
// The function should find the first pair where the sum is 0
// Return an array that includes both values that sum to 0 or undefined if a pair
// does not exist

function sumZero(arr){
    // start left pointer at index 0
    let left = 0;
    // start right pointer at end of array
    let right = arr.length - 1;
    // while left side of array is less than the right
    while(left < right) {
        // sum up left and right pointers
        let sum = arr[left] + arr[right];
        // if the sum = 0
        if(sum === 0) {
            // return both characters
            console.log([arr[left], arr[right]]); // could use "return [arr[left], arr[right]];" but nothing was printing in console
            break;
        }
        // if sum is less than 0 
        else if(sum > 0) {
            // drop move the right pointer left one
            right--;
        }
        else {
            // else move the left up one
            left++;
        }
    }
}
sumZero([-4,-3,-2,-1,0,1,2,3,10])

// implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array
// there can be negative numbers in the array but it will be sorted

function countUniqueValues(arr) {
    var i = 0;
    for(var j = 1; j < arr.length; j++) {
       if(arr[i] !== arr[j]) {
           i++;
           arr[i] = arr[j]
       }
       console.log(i,j);
    }
    return i + 1;
}
countUniqueValues([1,1,2,3,3,4,5,6,6,7])