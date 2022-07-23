// 217: FIND DUPLICATES
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



// 1365:
// Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. 
// That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].
// Return the answer in an array.

var smallerNumbersThanCurrent = function(nums) {
    // start with empty arr stores how many values are smaller than current value
    let arr = []
    // start count at 0
    let count = 0;
    // iterate through arr one time with i
    for(i = 0; i < nums.length; i++) {
        // iterate again with j
        for(let j = 0; j < nums.length; j++) {
            // if nums[i] > nums[j]
            if(nums[i] > nums[j]) {
                // increment the count by 1
                count++;
            }
        }
        // push the amount of numbers smaller than i into array
        arr.push(count)
        // reset count back to 0 for next number
        count = 0;
    }
    // return new arr that gives number of smaller values
    return arr;
};
smallerNumbersThanCurrent([8,1,2,2,3])

// 268 Missing Number:
// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.
var missingNumber = function(nums) {
    // create sum variable
    let sum = 0;
    for(i = 0; i <= nums.length; i++) {
        // add sum to i
        sum += i;
        if(i < nums.length) {
            sum -= nums[i];
        }
    }
    return sum;
}
missingNumber([3,0,1])

// 349. 
// Intersection of Two Arrays: Given two integer arrays nums1 and nums2, return an array of their intersection. 
// Each element in the result must be unique and you may return the result in any order.

var intersection = function(nums1, nums2) {
    let map = {} 
    let result = []

    // make a hashmap of the first array of nums
    for(let i of nums1) {
        // if number is not in map
        if(!map[i]) {
            // create it and set count to 1
            map[i] = 1;
        } else {
            // if it does exist increment count by 1
            map[i]++;
        }
    }

    for(let i of nums2) {
        // if map value is greater than 0 
        if(map[i] > 0) {
            // push out that value of map
            result.push(i)
            // decrease value by 1
            map[i]--
        }
    }
    return(result)
};

// 888. Fair Candy Swap: 
// Alice and Bob have a different total number of candies. You are given two integer arrays aliceSizes and bobSizes where aliceSizes[i] is 
// the number of candies of the ith box of candy that Alice has and bobSizes[j] is the number of candies of the jth box of candy that Bob has.
// Since they are friends, they would like to exchange one candy box each so that after the exchange, they both have the same total amount of candy. 
// The total amount of candy a person has is the sum of the number of candies in each box they have.
// Return an integer array answer where answer[0] is the number of candies in the box that Alice must exchange, and answer[1] is the number of candies
// in the box that Bob must exchange. If there are multiple answers, you may return any one of them. It is guaranteed that at least one answer exists.

// TotalA - A + B = TotalB - B + A
// 2B + TotalA - A = TotalB + A
// 2B = TotalB - TotalA + 2A
// B = (TotalB - TotalA) / 2 + A

var fairCandySwap = function(aliceSizes, bobSizes) {
    let output = new Array(2);
    let mapB = {}
    let TotalA = 0;
    let TotalB = 0;

    for(i = 0; i < A.length; i++) {
        TotalA += A[i];
    }
    for(i = 0; i < B.length; i++) {
        TotalB += B[i];
        mapB[B[i]] = true;
    }
    let delta = (TotalB - TotalA) / 2;
    for(i = 0; i < A.length; i++) {
        if(mapB[a[i] + delta]) {
            output[0] = A[i];
            output[1] = A[i] + delta
            return output;
        }
    }
}


// 21. Merge Two Sorted Lists:
// You are given the heads of two sorted linked lists list1 and list2.
// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.
// Return the head of the merged linked list.
// ex: 1 --> 2 --> 4
    // 1 --> 3 --> 4
// output: 1 --> 1--> 2 --> 3 --> 4 --> 4

var mergeTwoLists = function(list1, list2) {
    const dummy = new ListNode(-Infinity);
    let prev = dummy;
    
    // while list 1 and list 2 are true check the values
    while(list1 && list2) {
        if(list1.val <= list2.val) {
            prev.next = list1;
            prev = list1;
            list1 = list1.next
        } else {
            prev.next = list2;
            prev = list2;
            list2 = list2.next;
        }
    }
    if(!list1) prev.next = list2;
    if(!list2) prev.next = list1;
    
    return dummy.next;
};
mergeTwoLists([1,2,4],[1,3,4])

// Given the head of a singly linked list, reverse the list, and return the reversed list.
var reverseList = function(head) {
    // curent starts at head
    let current = head;
    // set previous to null so when the first node becomes previous it points to null
    let prev = null;
    let next;

    while(current !== null) {
        // next node is the node next to current node
        next = current.next;
        // current.next breaks the pointer going to next node; then you switch previous to be the current node
        current.next = prev;
        // current is now previous because current and next node has already switched over
        prev = current;
        // current becomes next
        current = next
    }
    return prev;
};

// 876. Middle of the Linked List
// Given the head of a singly linked list, return the middle node of the linked list.
// If there are two middle nodes, return the second middle node.

var middleNode = function(head) {
    // start fast and slow at head node
    let fast = head;
    let slow = head;
    // while fast is true and fast.next is true
    while(fast && fast.next) {
        // move fast pointer up 2 nodes
        fast = fast.next.next;
        // move slow pointer up 1 node
        slow = slow.next;
    }
    // return slow because no matter what slow will be at the middle node
    return slow;
}
middleNode([1,2,3,4,5])

// 83. Remove Duplicates from Sorted List
// Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

var deleteDuplicates = function(head) {
    let dummy = new ListNode(-Infinity, head);
    let current = head;
    let prev = dummy;

    // while current is true    
    while(current) {
        // if current.val is same as prev.val
        if(current.val === prev.val) {
            while(current && current.val === prev.val) {
                current = current.next;
            }
            prev.next = current;
        } else {
            prev = current;
            current = current.next;
        }
    }
    return dummy.next; 
};

// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
// You must implement a solution with a linear runtime complexity and use only constant extra space.

var singleNumber = function(nums) {
    let hash = {};
    for(item of nums) {
        // if item is not in hash add it
        if(!hash[item]) {
            // set value to 1
            hash[item] = 1;
            // if its already there increment by 1
        } else {
            hash[item]++;
        }
        console.log(hash)
    }
    // iterates through hash and finds the value that only appears once and returns it
    // return the key/item of the value that equals one
    return Object.keys(hash).find(key => hash[key] === 1);
};

// 237. Delete Node in a Linked List
// Write a function to delete a node in a singly-linked list. You will not be given access to the head of the list, instead you will be given access to the node to be deleted directly.
// It is guaranteed that the node to be deleted is not a tail node in the list.

var deleteNode = function(node) {
    // takes the node value and points to nodes after
        // 4 -> 5 -> 1 -> 9
        // starts at 5 and instead of 5 pointing to 1 it points to 9
    let next = node.next.next;
    // then you use node.val and change the value of 5 by setting it equal to the value of node to it which is one
    // 4 -> 1 -> 1 -> 9
    node.val = node.next.val;
    // then you just point to the next node after one which is 9 and remove the 5 from the linked list
    // 4 -> 5 -> 9
    node.next = next;
};
deleteNode([4,5,1,9], 5)

// 203. Remove Linked List Elements
// Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head

var removeElements = function(head, val) {
    let dummy = new ListNode(-1);
    dummy.next = head;
    // make prev node the dummy node of -1 in case we have to get rid of first node in list
    let prev = dummy;
    let current = head;
    // while current is true
   while(current) {
        // if the value of current node is the same as the input value
       if(current.val === val) {
           // get rid of that node because that is the node we want to get rid of by pointing the previous node to the node after the target node
           prev.next = current.next;
           // after removing the node, then iterate up the list by 1
           current = current.next;
       } else {
           // incremenet prev by one; current becomes previous
           prev = current;
           // current also moves up by one
           current = current.next;
       }
   }
   return dummy.next;
};
console.log(removeElements([1,2,6,3,4,5,6], 6))


// 2089. Find Target Indices After Sorting Array
// You are given a 0-indexed integer array nums and a target element target.
// A target index is an index i such that nums[i] == target.
// Return a list of the target indices of nums after sorting nums in non-decreasing order. If there are no target indices, return an empty list.
// The returned list must be sorted in increasing order.

var targetIndices = function(nums, target) {
    // this line bascially is just telling the .sort() function to sort the numbers in ascending order
    nums.sort((a,b) => (a-b));
    let map = [];
    for(i = 0; i < nums.length; i++) {
        if(nums[i] == target) {
            map.push(i);
            console.log(map);
            }
        }
    return map;
};

// 1351. Count Negative Numbers in a Sorted Matrix
// Given a m x n matrix grid which is sorted in non-increasing order both row-wise and column-wise, return the number of negative numbers in grid.

var countNegatives = function(grid) {
    let map = [];

    for(i = 0; i < grid.length; i++) {
        for(let j = grid[i].length - 1; j >= 0; j--) {
            if(grid[i][j] <  0) {
                map++;
            }
            break;
        }
    }
};
console.log(countNegatives([[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]));


// Given an integer array nums, move all the even integers at the beginning of the array followed by all the odd integers.
// Return any array that satisfies this condition.

var sortArrayByParity = function(nums) {
    let even = [];
    let odd = [];
    for(i = 0; i < nums.length; i++) {
        if(nums[i] % 2 == 0) {
            even.push(nums[i]);
        }     
        else if(nums[i] % 2 !== 0) {
            odd.push(nums[i]);
        }
    }
    return even.concat(odd);
};



// You are given an array of integers nums. You are also given an integer original which is the first number that needs to be searched for in nums.
// You then do the following steps:
// If original is found in nums, multiply it by two (i.e., set original = 2 * original).
// Otherwise, stop the process.
// Repeat this process with the new number as long as you keep finding the number.
// Return the final value of original.

var findFinalValue = function(nums, original) {
    let target = original;
    for(let i=0; i< nums.length;i++){
        if(nums.includes(target)){
            target*=2;
        }
    }
    return target;
};

// 1464. Maximum Product of Two Elements in an Array.
// Given the array of integers nums, you will choose two different indices i and j of that array. Return the maximum value of (nums[i]-1)*(nums[j]-1).
var maxProduct = function(nums) {
    let max = 1;
    let max2 = 1;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] > max && nums[i] > max2) {
            max2 = max;
            max = nums[i];
        } else if(nums[i] > max2) {
            max2 = nums[i];
        }
    }
    return (max - 1) * (max2 - 1);
};
console.log(maxProduct());

// 1346. Check If N and Its Double Exist
// Given an array arr of integers, check if there exists two integers N and M such that N is the double of M ( i.e. N = 2 * M).
// More formally check if there exists two indices i and j such that :
// i != j
// 0 <= i, j < arr.length
// arr[i] == 2 * arr[j]

var checkIfExist = function(arr) {
    for (let i = 0; i < arr.length; i++) {
        // if number in array ==== 0 skip and move up one
        if (arr[i] === 0) i++;
        // if number * 2 is in array return true
            if (arr.includes(arr[i] * 2)) return true;
    }
    return false;
  };

// 1480. Running Sum of 1d Array
// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
// Return the running sum of nums.


var runningSum = function(nums) {
    for(i = 1; i < nums.length; i++) {
        nums[i] += nums[i - 1];
    }
    return nums;
};

// 1290. Convert Binary Number in a Linked List to Integer
// Given head which is a reference node to a singly-linked list. The value of each node in the linked list is either 0 or 1. 
// The linked list holds the binary representation of a number.
// Return the decimal value of the number in the linked list.

// input:  1 -> 0 -> 1
// output: 5
// explanation: (101) in base 2 = (5) in base 10

// each number has a place 
// 1            0           1
// 4s place     2s place    1s place
// 2^2          2^1         2^0


var getDecimalValue = function(head) {
    let currentNode = head;
    let total = 0;

    while(currentNode) {
        // youre multipling each time by the power of 2 each time and add the val of te current node
        total = total * 2 + currentNode.val;
        // move on to the next node
        currentNode = currentNode.next;
    }
    return total;
};


// 922. Sort Array By Parity II
// Given an array of integers nums, half of the integers in nums are odd, and the other half are even.
// Sort the array so that whenever nums[i] is odd, i is odd, and whenever nums[i] is even, i is even.
// Return any answer array that satisfies this condition.

var sortArrayByParityII = function(nums) {
    let evens = [];
    let odds = [];
    let solutions = [];
    for (let i=0; i<nums.length; i++) {
        if (nums[i] % 2 === 0) {
            evens.push(nums[i]);
        } else {
            odds.push(nums[i]);
        }
    }
    
    for (let j=0; j < (odds.length+evens.length)/2; j++) {
        solutions.push(evens[j]);
        solutions.push(odds[j]);
    }
    
    return solutions
};

// You are given a string array words and a string s, where words[i] and s comprise only of lowercase English letters.
// Return the number of strings in words that are a prefix of s.
// A prefix of a string is a substring that occurs at the beginning of the string.
// A substring is a contiguous sequence of characters within a string.

// EXAMPLE: 
// Input: words = ["a","b","c","ab","bc","abc"], s = "abc"
// Output: 3
// Explanation:
// The strings in words which are a prefix of s = "abc" are:
// "a", "ab", and "abc".
// Thus the number of strings in words which are a prefix of s is 3.

var countPrefixes = function (words, s) {
    let count = 0;
  
    for (let i = 0; i < words.length; i++) {
      if (s.startsWith(words[i])) {
        count++;
      }
    }
  
    return count;
};


// Leetcode 599. Suppose Andy and Doris want to choose a restaurant for dinner, and they both have a list of favorite restaurants represented by 
// strings. You need to help them find out their common interest with the least list index sum. 
// If there is a choice tie between answers, output all of them with no order requirement. 
// You could assume there always exists an answer.

    Input: list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["Piatti","The Grill at Torrey Pines","Hungry Hunter Steakhouse","Shogun"]
    Output: ["Shogun"]
// Explanation: The only restaurant they both like is "Shogun".

var findRestaurant = function(list1, list2) {
    const map = {}
    for(let i=0;i<list1.length;i++) {
        const e = list1[i]
        const index = list2.indexOf(e)
        if(index>-1) {
            if (map[index+i]) {
                map[index+i].push(e)
            }else{
                map[index+i] = [e]
            }
        }
    }
    return Object.values(map)[0]
};

// You are given an array items, where each items[i] = [typei, colori, namei] describes the type, color, 
// and name of the ith item. You are also given a rule represented by two strings, ruleKey and ruleValue.

// ruleKey == "type" and ruleValue == typei.
// ruleKey == "color" and ruleValue == colori.
// ruleKey == "name" and ruleValue == namei.

    Input: items = [["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]], ruleKey = "color", ruleValue = "silver"
    Output: 1
// Explanation: There is only one item matching the given rule, which is ["computer","silver","lenovo"].

var countMatches = function(items, ruleKey, ruleValue) {
    let count = 0;
    for(let i = 0; i < items.length; ++i) {
        // set rulekey equal to type
        if(ruleKey === 'type') {
            // type is set to index 0 in items            
            if(ruleValue === items[i][0]) count++;
        }
        else if(ruleKey === 'color') {
            if(ruleValue === items[i][1]) count++;
        }
        else {
            if(ruleValue === items[i][2]) count++;
        }
    }
    return count;
};

// 2011. Final Value of Variable After Performing Operations
// There is a programming language with only four operations and one variable X:

// ++X and X++ increments the value of the variable X by 1.
// --X and X-- decrements the value of the variable X by 1.
// Initially, the value of X is 0.

// Given an array of strings operations containing a list of operations, 
// return the final value of X after performing all the operations.

var finalValueAfterOperations = function(operations) {
    let x = 0;
    for (let i = 0; i < operations.length; i++) {
        if (operations[i].includes("+")) {
            x++;
        } else {
            x--;
        }
    }
    return x;
};

// 283. Move Zeroes
// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
// Note that you must do this in-place without making a copy of the array.

var moveZeroes = function(nums) {
    for(i = 0; i < nums.length; i++) {
        let j = nums[i] + 1;
        if(nums[i] !== 0) {
            temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
            j++;
        }
    }
    return nums;
};

// 496. Next Greater Element I
// The next greater element of some element x in an array is the first greater element that is to the right of x in the same array.
// You are given two distinct 0-indexed integer arrays nums1 and nums2, where nums1 is a subset of nums2.
// For each 0 <= i < nums1.length, find the index j such that nums1[i] == nums2[j] and determine the next greater element of nums2[j]
//  in nums2. If there is no next greater element, then the answer for this query is -1.
// Return an array ans of length nums1.length such that ans[i] is the next greater element as described above.
var nextGreaterElement = function(nums1, nums2) {
    /*
    [4,1,2] - nums1 
    [1,3,4,2] - nums2
    //iterare over nums2 (as it has all the values)
    //put the first item in the stack
    //when putting next item in stack compare with last item in stack - ex 3>1 = yes then pop 1 and map it to 3  and keep going
    map 
    {'1':3,
    '3':4}
    stack - remaining items 
    [4, 2]
    //map the remining items to -1 
    final map
   { '1': 3, '2': -1, '3': 4, '4': -1 }
    //now iterate through nums1 and get the mapping for each element
    //push into res arr  
   [-1,3,-1]
    */ 
    
    
    var stack = [];
    var map = {};
    var res = [];
    
    for (var i = 0; i < nums2.length; i++) {
        while(stack.length > 0 && nums2[i] > stack[stack.length -1]){          
            var lastEl = stack.pop();
            map[lastEl] = nums2[i];
            
        }
        //first element and elements that are < stack elements 
        stack.push(nums2[i]);
    }
    
    while(stack.length > 0){  
        var remaining = stack.pop();
        map[remaining] = -1;
    }
    
    for(var i=0; i<nums1.length; i++){
        var nums = map[nums1[i]];
        res.push(nums)
    }
    
    return res;
};


// 1089. Duplicate Zeros
// Given a fixed-length integer array arr, duplicate each occurrence of zero, shifting the remaining elements to the right.
// Note that elements beyond the length of the original array are not written. Do the above modifications to the input array 
// in place and do not return anything.

var duplicateZeros = function(arr) {
    // loop through arr
    for(i = 0; i < arr.length; i++) {
        // if arr[i] = 0
        if(arr[i] === 0) {
            // splice the array at index i and add a 0
            // arr.splice(index, 0, item); will insert item into arr at the specified index 
            // (deleting 0 items first, that is, it's just an insert).
            arr.splice(i, 0, 0);
            // increase i by one to skip the 0 you just added or else the process will just repeat itself and keep adding 0
            i++;
            // pop the end of the array to keep the array the same length
            arr.pop();
        }
    }
};