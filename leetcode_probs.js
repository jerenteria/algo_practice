// FIND DUPLICATES
var containsDuplicate = function(nums) {
    let map = {}
    for(i = 0; i < nums.length; i++) {
        if(nums[i] in map) {
            return true;
        } else {
            map[nums[i]] = i;
        }
    }
    return false;
};
containsDuplicate([1,2,3,4])

// TWO SUM: Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.
var twoSum = function(nums, target) {
    // set variable to empty array to keep track of previous values
    previousValues = {}
    // iterate through array
    for(i = 0; i < nums.length; i++) {
        // current number is index of i in nums array
        const currentNumber = nums[i]
        // variable neededValue is value we need which is target - currentNumber
        const neededValue = target - currentNumber
        // check if we have a key of neededValue at that index
        const index2 = previousValues[neededValue]
        // if index2 is not null then we have something for that equals that target
        if(index2 != null) {
            return [index2, i]
        }
        else {
            // store the current number in i if we dont have value that = target
            previousValues[currentNumber] = i
        }
    }
};
twoSum([2,7,11,15],9)

// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

var isAnagram = function(s, t) {
    if(s.length !== t.length) {
        return false;
    }
    var map = {};
    for(i = 0; i < s.length; i++) {
    let letter = s[i];
        map[letter] ? map[letter] +=1 : map[letter] = 1;
    }
    for(i = 0; i < t.length; i++) {
        let letter = t[i];
        if(!map[letter]) {
            return false;
        } else {
            map[letter] -= 1;
        }
    }
    return true;
};
isAnagram("anagram","nagaram")

// You are given a positive integer num consisting of exactly four digits. Split num into two new integers new1 and new2 by using the digits found in num. 
// Leading zeros are allowed in new1 and new2, and all the digits found in num must be used.
// For example, given num = 2932, you have the following digits: two 2's, one 9 and one 3. 
// Some of the possible pairs [new1, new2] are [22, 93], [23, 92], [223, 9] and [2, 329].
// Return the minimum possible sum of new1 and new2.

