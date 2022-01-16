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