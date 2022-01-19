// create a linear search function that returns index of number
function search(num, arr) {
    for(i = 0; i < arr.length; i++) {
        if(arr[i] === num) {
            return i;
        }
    }
    return -1;
}
search([1,2,4,5,6,7],3)

// create a function that accepts a sorted array and value
// create a left pointer at start of array and right pointer at end of array
function binarySearch(arr, val) {
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end) / 2);

    while(arr[middle] !== val && start <= end) { 
        console.log(start, middle, end)
        // if middle number is less than val shift end
        if(val < arr[middle]) {
            // shift the end to be middle - 1 so one number left of what the middle was before
            end = middle - 1;
        }
        else {
            // else go up one value from middle and that is the new start
            start = middle + 1;
        }
        middle = Math.floor((start + end) / 2);
    }
    console.log(start, middle, end)
    // if the middle is the same as value we are looking for
    if(arr[middle] == val) {
        // return middle
        return middle;
    }
    // otherwise return -1;
    return -1;
}
binarySearch([2,5,6,9,13,15,28,30], 50)