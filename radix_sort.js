// RADIX SORT: doesn't make direct comparisons; works on base 10 numbers; exploits the fact that information about the size of a number 
// is encoded in the number of digits
    // more digits = bigger number(we know that 100 > 1 because 100 has more digits)

function getDigit(num, i) {
                                        // 10 to the i power in this case it would be 2 because that's the position we are looking for in input
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}
getDigit(7323, 2)

function digitCount() {
    if(num === 0) return 1;
    // Math.log10 then floor that number and then add 1 and you get the answer
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}
digitCount(423)

function mostDigits(nums) {
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
        // Math.max returns largest number
      maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
  }
  
  mostDigits([23,567,89,12234324,90])

// RADIX SORT: DEFINE A FUNCTION THAT ACCEPTS A LIST OF NUMBERS; FUGURE OUT HOW MANY DIGITS ARE IN THE LARGEST NUMBER; LOOP FROM K = 0 TO THIS LARGEST NUMBER
// OF DIGITS FOR EACH ITERATION OF THE LOOP:
  // CREATE BUCKETS FOR EACH DIGIT(0 TO 9)
  // PLACE ECAH NUMBER IN THE CORRESPONDING BUCKET BASES ON Kth DIGIT
// REPLACE OUT EXISTING ARRAY WITH VALUES IN OUR BUCKETS, STARTING WITH 0 AND GOING UP TO 9
// RETURN LIST AT THEN END

function radixSort(nums) {
    let maxDigitCount = mostDigits(nums);
    for (let k = 0; k < maxDigitCount; k++) {
        // create an array called digitBuckets of 10 value and store them in an empty array
        let digitBuckets = Array.from({length: 10}, () => [])
        for(let i = 0; i < nums.length; i++) {
            // get the digit and current position k
            let digit = getDigit(nums[i], k);
            // push the number into correct bucket
            digitBuckets[digit].push(nums[i]);
        }
        console.log(digitBuckets);
        nums = [].concat(...digitBuckets);
    }
    return nums;
}

radixSort([23,345,5467,12,2345,9852])