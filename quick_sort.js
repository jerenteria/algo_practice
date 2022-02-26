// QUICK SORT: TIME COMPLEXITY: BEST CASE = O(log n); O(n) COMPARISONS PER DECOMPISITION;  WORST CASE = O(n^2)
    // EXPLOITS THE FACT THAT ARRAYS OF 0 OR 1 ELEMENTS ARE ALWAYS SORTED
    // WORKS BY SELECTING ONE ELEMENT(CALLED "PIVOT") AND FINDING THE INDEX WHERE THE PIVOT SHOULD END UP IN THE SORTED ARRAY
    // PICK ONE ELEMENT AND PICK ALL NUMBERS SMALLER THAN THAT NUMBER AND MOVE TO LEFT BIGGER NUMBERS TO RIGHT
        // WITHOUT SORTING ALL OF THE NUMBERS
    // REPEAT THE PROCESS ON LEFT SIDE AND RIGHT SIDE OF THAT NUMBER




// GIVEN AN ARRAY THIS HELPER FUNCTION SHOULD DESIGNATE AN ELEMENT AS THE PIVOT
// IT SHOULD THEN REARRANGE ELEMENTS IN THE ARRAY SO THAT ALL VALUES LESS THAN THE PIVOT ARE MOVED TO THE LEFT OF THE PIVOT
// ALL VALUES GREATER THAN THE PIVOT ARE MOVED TO THE RIGHT
// ORDER ON EACH SIDE DOESNT MATTER
// HELPER SHOULD DO IT IN PLACE, IT SHOULD NOT CREATE A NEW ARRAY
// WHEN COMPLETE THE HELPER SHOULD RETURN THE INDEX OF THE PIVOT


// WRITE A FUNCTION THAT ACCEPTS 3 ARGUMENTS: ARRAY, START INDEX, END INDEX,
// GRAB PIVOT FROM START OF ARRAY
// STORE CURRENT PIVOT INDEX IN A VARIABLE
// LOOP THROUGH THE ARRAY FROM START TO END
    // IF THE PIVOT IS GREATER THAN THE CURRENT ELEMENT INCREMENT THE PIVOT INDEX VARIABLE AND SWAP THE CURRENT ELEMENT WITH THE ELEMENT AT THE PIVOT INDEX
// SWAP THE STARTING PIVOT WITH PIVOT INDEX
// RETURN PIVOT INDEX

// function accepts arr, defaults at 0, defaults at end of arr.length+1 
function pivot(arr, start=0, end=arr.length+1) {
    function swap(arr, i, j) {
        var temp = arr[i];
        arr[j] = arr[i];
        arr[j] = temp;
    }
    // pivot = start which defaults to 0
    var pivot = arr[start];
    // swapIdx keeps track of where we are going to swap the 4 at the very end
    var swapIdx = start;
    // no need to start loop at beginning/ compare 4 to itself
    for(i = start + 1; i < arr.length; i++) {
        // if pivot point is lager than [i]
        if(pivot > arr[i]) {
            // increment swapIdx by 1
            swapIdx++;
            // inside the arr swap the values of swapIdx and i
            swap(arr, swapIdx, i)
        }
    }
    swap(arr, start, swapIdx)
    return swapIdx;
}
pivot([4,8,2,1,5,7,6,3])


// CALL THE PIVOT HELPER ON THE ARRAY
// WHEN HELPER RETURNS TO UPDATED PIVOT INDEX, RECURSIVELY CALL THE PIVOT HELPER ON THE SUBARRAY TO THE LEFT OF 
// THAT INDEX AND THE SUBARRAY TO THE RIGHT OF THAT INDEX
// YOUR BASE CASE OCCURS WHEN YOU CONSIDER A SUBARRAY WITH LESS THAN 2 ELEMENTS

// starts at index 0 and right starts at end of arr index 6
function quickSort(arr, left=0, right=arr.length-1) {
    if(left < right){    
        let pivotIndex = pivot(arr, left, right)
        // left side pivotIndex-1 so we dont count current pivotIndex
        quickSort(arr, left, pivotIndex-1)
        // right side
        quickSort(arr, pivotIndex+1, right)
    }
    return arr;
}

quickSort([4,6,9,1,2,5,3])
