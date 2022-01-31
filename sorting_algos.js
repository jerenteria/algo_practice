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
// bubble sort is n^2 time complexity

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

// beginner solution
function bubbleSort(arr){
    for(i = 0; i < arr.length; i++) {
        for(j = 0; j < arr.length; j++) {
            if(arr[j] > arr[j+1]) {
                temp2 = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp2;
            }
        }
    }
    return arr;
}
bubbleSort([47,45,29,8])

// better solution
function bubbleSort2(arr) {
    // we can use i in defintion of j
    for(i = arr.length; i > 0; i--) {
        for(j = 0; j < i - 1; j++) {
            if(arr[j] > arr[j+1]) {
                temp2 = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp2;
            }
        }
    }
    return arr;
}
bubbleSort2([47,45,29,8])

/// some review


