// faster sorts can improve time complexity from O(n^2) to O(n log n)


// MERGE SORT: a combination of two things- merging and sorting
// exploits the fact that arrays of 0 or 1 element are always sorted
// works by decomposing an array into smaller arrays of 0 or 1 elements, then building up a newly sorted array

// CREATE AN EMTPY ARRAY, TAKE A LOOK AT THE SMALLEST VALUES IN EACH INPUT ARRAY
// WHILE THERE ARE STILL VALUES WE HAVEN'T LOOKED AT
    // IF THE VALUE IN FIRST ARRAY IS SMALLER THAN THE VALUE IN THE SECOND ARRAY, PUSH THE VALUE IN THE FIRST ARRAY INTO 
    // OUR RESULTS AND MOVE ON TO NEXT VALUE IN FIRST ARRAY
    // IF THE VALUE IN THE FIRST ARRAY IS LARGER THAN THE VALUE IN THE SECOND ARRAY, PUSH THE VALUE IN THE SECOND ARRAY INTO OUR RESULTS AND MOVE
    // ON TO THE NEXT VALUE IN THE SECOND ARRAY
    // ONCE WE EXHAUST ONE ARRAY, PUSH IN ALL REMAINING VALUES FROM OTHER ARRAY

function merge(arr1, arr2) {
    // store values in empty array in var newArr
    newArr = [];
    let i = 0;
    let j = 0;
    // while i is < arr1 length and j is < arr2 length
    while(i < arr1.length && j < arr2.length) {
        // if value of j in arr2 is > value of i in arr1(we want the smallest values first)
        if(arr2[j] > arr1[i]) {
            // then push it to newArr
            newArr.push(arr1[i]);
            // increment i by one
            i++
        }
        else {
            // if anything else store value of j in newArr
            newArr.push(arr2[j])
            // increment j by one
            j++;
        }
    }
    // if one of the arrays is smaller than the other just push the rest of the values into the newArr
    while(i < arr1.length) {
        newArr.push(arr1[i])
        i++;
    }
    while(j < arr2.length) {
        newArr.push(arr2[j])
        j++;
    }
    return newArr;
}
merge([1,10,50], [2,14,99,100])

// BREAK UP THE ARRAY INTO HALVES UNTIL YOU HAVE ARRAYS THAT ARE EMPTY OR HAVE ONE ELEMENT
// ONCE YOU HAVE SMALLER SORTED ARRAYS MERGE THOSE ARRAYS WITH OTHER SORTED ARRAYS UNTIL YOU ARE BACK AT THE FULL LENGTH OF THE ARRAY
// ONCE THE ARRAY HAS BEEN MERGED BACK TOGETHER RETURN THE MERGE(AND SORTED) ARRAY

function mergeSort(arr) {
    // if arr length <= 1 return arr
    if(arr.length <= 1) return arr; // base case
    // Math.floor()- returns the largest integer less than or equal to a given number.
    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
}