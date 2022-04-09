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