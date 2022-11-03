// grabbed from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split#examples
const str = 'The quick brown fox jumps over the lazy dog.';

// if you put a space in between the '' in split(' ') then it will return the whole word itself unlike the next one const chars
const words = str.split(' '); // split() grabs the target and turns it into substring by itself and returns the substring
console.log(words[3]) 

// if you dont put a space in split('') then it will return the letter itself unlike above
const chars = str.split('');
console.log(chars[8]);


// Multi Dimensional Selection

function getMaxProduct(arr) {
    // Write your code here
    let maxMin = 0;
    
    for(let i = 0; i < arr.length; i++) {
        let currentMin = 0;
        for(let j = i + 1; j < arr.length; j++) {
            currentMin -= arr[i][j];
            console.log(currentMin);
            console.log(arr[i]);
            console.log(arr[j] + "---");
        }

        if(currentMin > maxMin) {
            currentMin = maxMin;
        }
    }
    return maxMin;
}