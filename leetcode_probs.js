// FIND DUPLICATES
var containsDuplicate = function(nums) {
    var i = 0
    for(j = 0; j < nums.length; j++) {
        if(nums[i] == nums[j]) {
            return true;
        }
        return false;
    }
};