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
    // starts at index 0
    var start = 0;
    // starts at end of array
    var end = arr.length - 1;
    // gets the average of start and end points; ((start + end) / 2)
    // Math.floor rounds number down to the nearest integer if number is 5.97 Math.floor outputs 5
    var middle = Math.floor((start + end) / 2);

    // while middle value is not equal to value we're looking for
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


// write a function called linearSearch which accepts an array and a value and returns the index at which the value exists
// if the value does not exist in the array, return -1

function linearSearch(arr, val){
    for(i = 0; i < arr.length; i++) {
        if(val === arr[i]) {
            return i;
        }
    }
    return -1;
  }
  linearSearch([10,15,20,25,30], 15)


// define a function that takes 2 strings; the long string and short string and check if they match
// if characters dont match break out of inner loop
// if charaters match keep going
// if you get a match increment the number of matches
// return count

function naiveSearch(str1, str2){
    // set variable count to 0
    var count = 0;

    // loop throught first string
    for(var i = 0; i < str1.length; i++) {
        // loop through second string
        for(var j = 0; j < str2.length; j++) {
            console.log(str2[j], str1[i+j])
            // if [j] in string 2 does not equal string 1 i+j
            if(str2[j] !== str1[i+j]) {
                // print break
                console.log("BREAK!")
                // break out of loop
                break;
            }
            // if j does equal string 2 length 
            if(j === str2.length - 1) {
                // print found one
                console.log("FOUND ONE!")
                // add count +1 
                count++;
            }
        }
    }
    return count;
}
naiveSearch("lorie loled", "lol")