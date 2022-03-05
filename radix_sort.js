// RADIX SORT: doesn't make direct comparisons; works on base 10 numbers; exploits the fact that information about the size of a number 
// is encoded in the number of digits
    // more digits = bigger number(we know that 100 > 1 because 100 has more digits)

function getDigit(num, i) {
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
      maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
  }
  
  mostDigits([23,567,89,12234324,90])
  