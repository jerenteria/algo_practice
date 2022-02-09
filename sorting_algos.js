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

// selection sort: similar to bubble sort but instead of first placing large values into sorted position it places small 
// values into sorted position

function selectionSort(arr) {
    for(i = 0; i < arr.length; i++) {
        min = i;
        // loop again but one index in front of i 
        for(j = i + 1; i < arr.length; j++) {
            // if arr[j] is less than the current min? if yes that is now the current min
            if(arr[j] < arr[min]) {
                min = j;
            }
        }
        if(i !== min) {
            // set arr[i] set to var temp3
            temp3 = arr[i];
            // swap arr[i] with min
            arr[i] = arr[min];
            arr[min] = temp3;
        }

    }
    return arr;
}
selectionSort([1,4,6,5,2])

// INSERTION SORT: builds up the sort by gradually creating a larger left half which is always sorted
// START BY PICKING SECOND ELEMENT IN ARRAY
// COMPARE SECOND ELEMENT WITH ONE BEFORE IT AND SWAP IF NECESSARY
// CONTINUE TO NEXT ELEMENT AND IF IT IS IN THE INCORRECT ORDER ITERATE THROUGH THE SORTED PORTION TO PLACE ELEMENT IN CORRECT PLACE
// REPEAT UNTIL ARRAY IS SORTED
// WORKS GOOD FOR PROGRAMS THAT RUN WITH LIVE DATA
// SIMILAR TO BUBBLE SORT

function insertionSort(arr) {
    // loop through array
    for(var i = 0; i < arr.length; i++) {
        // store value of i in var currentVal
        var currentVal = arr[i];
        // loop through arr j - 1; j is >= 0 and arr[j] > the value stored in currentVal; decrease j by 1 each time
        for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            // move the value of j forward one space
            arr[j+1] = arr[j]
        }
        arr[j+1] = currentVal;
    }
    return arr;
}
insertionSort([2,1,9,76,4])



//



