// What is sorting?
// Sorting is the rearranging the items in a collection(array) so that the items are in some order

function sort(arr) {
    return arr
}
sort([23,45,6,12,13])

function numberCompare(num1, num2) {
    return num1 - num2;
}
[6,4,16,10].sort(numberCompare);

function compareByLen(str1, str2) {
    return str1.length - str2.length;
}
["Steele", "Colt", "Data Structures", "Algorithms"].sort(compareByLen);

// Bubble sort: a sorting algorithm where the largest values bubble to the top

// function swap has an array and 2 indeces that we want to swap
function swap(arr, idx1, idx2) {
    // temp variable to store first index
    var temp = arr[idx1];
    // we change what was in index 1 to be in index 2
    arr[idx1] = arr[idx2];
    // we use temp variable to update what was in index 2
    arr[idx2] = temp;
}

// define a function called bubbleSort that takes an array all numbers
// start looping with variable called i at the end of the array towards the beginning
// start an inner loop with a variable called j from the beginning -1
// if arr[j] is greater than arr[j+1], swap values
// return sorted array

function bubbleSort(arr, idx1, idx2){
    temp2 = arr[idx1];

    for(i = 0; i < arr.length; i++) {
        for(j = 1; j < arr.length; i++) {
            if(arr[j] > arr[j+1]) {
                arr[idx1] = arr[idx2];
                arr[idx2] = temp2;
            }
        }
    }
    return arr;
}