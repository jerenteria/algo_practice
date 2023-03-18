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

// 1528. Shuffle String
// You are given a string s and an integer array indices of the same length. The string s will be shuffled such that the character 
// at the ith position moves to indices[i] in the shuffled string.
// Return the shuffled string.

var restoreString = function(s, indices) {
    // create an emptry array
    const result = [];
    // loop through string
    for(let i = 0; i < s.length; i++) {
        // fill in the empty arr 'result' and arrange the letters with the proper idx
        result[indices[i]] = s[i]
    }
    // return 'result' and join() concats everything in the arry by removing the commas
    return result.join('');
};


// 1108. Defanging an IP Address
// Given a valid (IPv4) IP address, return a defanged version of that IP address.
// A defanged IP address replaces every period "." with "[.]".

var defangIPaddr = function(address) {
    // inputing a string so use "" instead of [] b/c its not an array
    map = "";

    // loop through string
    for(i = 0; i < address.length; i++) {
        if(address[i] === ".") {
            // add [.] 
            map += "[.]";
        } else {
            map += address[i];
        }
    }
    return map;
};

// 2114. Maximum Number of Words Found in Sentences
// A sentence is a list of words that are separated by a single space with no leading or trailing spaces.
// You are given an array of strings sentences, where each sentences[i] represents a single sentence.
// Return the maximum number of words that appear in a single sentence.

var mostWordsFound = function(sentences) {
    let max = 0;
    let temp = 0;
    for (let i = 0; i < sentences.length; i++) {
        // if you put a space in between the '' in split(' ') then it will return the whole word itself
        // if you dont put a space in split('') then it will return the letter itself unlike above
        // set temp to equal the whole sentence length(basically the whole sentence) and split it into a sub arr
        temp = sentences[i].split(" ").length;
        // compares the temp to the max during each loop
        // if the temp becomes bigger than the max
        if (temp > max) {
            // make the temp the new max
            max = temp;
        }
    }
    // return the max
    return max;
};

// leet code 771. Jewels and Stones
// You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have.
// Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.
// Letters are case sensitive, so "a" is considered a different type of stone from "A".

var numJewelsInStones = function(J, S) {
    var sum = 0;
    for (var i = 0; i < S.length; i++) {
        var sChar = S[i];
        for(var j = 0; j < J.length; j++) {
            var jChar = J[j];
            if (jChar == sChar) {
               sum++;
            }
        }        
    }    
    return sum;
};
// 2418. Sort the People
// Runtime: 135 ms, faster than 65.69% of JavaScript online submissions for Sort the People.
// Memory Usage: 47.4 MB, less than 38.42% of JavaScript online submissions for Sort the People.

var sortPeople = function(names, heights) {
    let length = heights.length;
    let map = new Map();
    for(let i=0; i<length; i++){
        map.set(heights[i], names[i]);
    }
    heights.sort((a,b) => b-a);
    let res = [];
    for(let height of heights){
        res.push(map.get(height));
    }
    return res;
};

// 1859. Sorting the Sentence
// A sentence is a list of words that are separated by a single space with no leading or trailing spaces. Each word consists of lowercase and uppercase English letters.
// A sentence can be shuffled by appending the 1-indexed word position to each word then rearranging the words in the sentence.
// For example, the sentence "This is a sentence" can be shuffled as "sentence4 a3 is2 This1" or "is2 sentence4 This1 a3".
// Given a shuffled sentence s containing no more than 9 words, reconstruct and return the original sentence.


        // 1. create wordArray by splitting s
        // 2. create and orderedSentence Array
        // 3. loop through wordArray
            // a. get index value by slicing the current word by -1. Then minus 1
            // b. update orderedSentence[idx] to current word slice(0, -1)
        // return wordArray

        Input: s = "is2 sentence4 This1 a3"
        Output: "This is a sentence"

var sortSentence = function(s) {
    // create wordArray and split all the words in arr by sperating with commas
        // wordArray = ["is2", "sentence4", "This1, a3"]
    const wordArray = s.split(" ");
    const orderedSentence = [];
    // loop through wordArray
    for(let i = 0; i < wordArray.length; i++) {
        // const idx = get the number at the end of string by using slice() - 1 and minus by 1 b/c we want a 0 index order
        // returns 2, 4, 1, 3 but we minus by 1 to have 0 index order so it returns 1, 3, 0, 2 
        const idx = wordArray[i].slice(-1) -1;
        // put the words in order by the index above then slice it again (0,-1) which returns the words rearranged in order
            // wordArray = ["is2", "sentence4", "This1 a3"] turns into ["This", "is", "a", "sentence"]
        orderedSentence[idx] = wordArray[i].slice(0, -1);
    }
    // return the orderedSetence with .join(" ") to get rid of the commas
    // returns ["This is a sentence"]
    return orderedSentence.join(" ");
}

// 1. Create a new variable for output string
// 2. Loop through the command
    // a. If the value is "G" add "G" to the output
    // b. If the value is "("
        // i. If the next value is ")" add "a" to the output
        // ii. else add "al"

var interpret = function(command) {
    // make output an empty string
    let output = ""
    // loop through string
    for(let i = 0; i < command.length; i++) {
        // if the letter is G
        if(command[i] === "G") {
            // add G to the empty string
            output += "G";
            // if command[i] is (
        } else if (command[i] === "(") {
            // and the next one is )
            if(command[i+1] === ")") {
                // add an o
                output += "o";
                // otherwise just add al
            } else if (command[i+1] === "a") {
                output += "al";
            }
        }
    }
    return output;
};

// 1221. Split a String in Balanced Strings
// Balanced strings are those that have an equal quantity of 'L' and 'R' characters.
// Given a balanced string s, split it into some number of substrings such that:
// Each substring is balanced.
// Return the maximum number of balanced strings you can obtain.

// Input: s = "RLRRLLRLRL"
// Output: 4
// Explanation: s can be split into "RL", "RRLL", "RL", "RL", each substring contains same number of 'L' and 'R'.

// 1. Create count as output var
// 2. Create balance var to keep track of a balance string
// 3. loop through s
    // a. Create condition to see if current index value is R
        // i. if R, increment the balance.
        // ii. else decrement the balance
    // b. Create condition to see if balance is equal to 0
        // i. if true, increment the count
// 4 Return count

var balancedStringSplit = function(s) {
    let count = 0;
    let balance = 0;

    for (let i = 0; i < s.length; i++) {
        if(s[i] === "R") {
            balance++;
        } else {
            balance--;
        } if (balance === 0) {
            count++;
        }
    }
    return count;
};
// 344. Reverse String
// Write a function that reverses a string. The input string is given as an array of characters s.
// You must do this by modifying the input array in-place with O(1) extra memory.

        // Input: s = ["h","e","l","l","o"]
        // Output: ["o","l","l","e","h"]

// easy googled how to reverse string and reverse() allows you to reverse the inputted string and add -1 to have it 
// start from end
var reverseString = function(s) {  
    s.reverse(-1);
};
 // BETTER ANSWER- EXPLAINS MORE
var reverseString2 = function(s) {
    // Loop through 1/2 of s
    for (let i = 0; i < s.length / 2; i++) {
        // Save current val
        let temp = s[i];
        
        // Replace with end of array char
        s[i] = s[s.length - 1 - i];
        
        // Replace end of array letter with current val
        s[s.length - 1 - i] = temp;
    }
};

// 2108. Find First Palindromic String in the Array
// Given an array of strings words, return the first palindromic string in the array. If there is no such string, return an empty string "".
// A string is palindromic if it reads the same forward and backward.

var firstPalindrome = function (words) {
    for (let i of words) {
      let d = i.split("").reverse().join("");
      if (i === d) return d;
    }
    return "";
  };


//   1832. Check if the Sentence Is Pangram
//   A pangram is a sentence where every letter of the English alphabet appears at least once.
// Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise.


//         Input: sentence = "thequickbrownfoxjumpsoverthelazydog"
//         Output: true
//         Explanation: sentence contains at least one of every letter of the English alphabet.

  var checkIfPangram = function(sentence) {
    // create a new set named alpha
        // A JavaScript Set is a collection of unique values. Each value can only occur once in a Set. A Set can hold any value of any data type.
    let alpha = new Set("abcdefghijklmnopqrstuvwxyz")

    // loop through inputed string and switch to lowercase letters 
    for (let c of sentence.toLowerCase()){
        // as you loop delete the letters in the set if they match until you the list is empty
        alpha.delete(c)
        // if the list is empty that means that every letter in the alphabet is in the str so return true
        if (alpha.size == 0) return true
    }
    return false
};

// 412. Fizz Buzz

// Given an integer n, return a string array answer (1-indexed) where:
// answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
// answer[i] == "Fizz" if i is divisible by 3.
// answer[i] == "Buzz" if i is divisible by 5.
// answer[i] == i (as a string) if none of the above conditions are true.


        // Input: n = 5
        // Output: ["1","2","Fizz","4","Buzz"]

var fizzBuzz = function(n) {
    return new Array(n).fill(0).map((v, i) => {
        if ((i+1) % 15 === 0)  return 'FizzBuzz'
        if ((i+1) % 3 === 0) return 'Fizz'
        if ((i+1) % 5 === 0) return 'Buzz'
        return `${i+1}`
    })
};

// 1816. Truncate Sentence
// A sentence is a list of words that are separated by a single space with no leading or trailing spaces. Each of the words consists of only uppercase and lowercase English letters (no punctuation).
// For example, "Hello World", "HELLO", and "hello world hello world" are all sentences.
// You are given a sentence s​​​​​​ and an integer k​​​​​​. You want to truncate s​​​​​​ such that it contains only the first k​​​​​​ words. Return s​​​​​​ after truncating it.


        // Input: s = "Hello how are you Contestant", k = 4
        // Output: "Hello how are you"
        // Explanation:
        // The words in s are ["Hello", "how" "are", "you", "Contestant"].
        // The first 4 words are ["Hello", "how", "are", "you"].
        // Hence, you should return "Hello how are you".

var truncateSentence = function(s, k) {
    const arr = s.split(" ", k);
    
    return arr.join(" ");
};

// 709. To Lower Case
// Given a string s, return the string after replacing every uppercase letter with the same lowercase letter.

        // Input: s = "Hello"
        // Output: "hello"

var toLowerCase = function(s) {
    return s.toLowerCase();
};


// 1512. Number of Good Pairs
// Given an array of integers nums, return the number of good pairs.

// A pair (i, j) is called good if nums[i] == nums[j] and i < j.



//         Input: nums = [1,2,3,1,1,3]
//         Output: 4
//         Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.


var numIdenticalPairs = function(nums) {
    pairs = 0;
    
    for(i = 0; i < nums.length; i++) {

    }
    return pairs;
};


// 1672. Richest Customer Wealth
// You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.
// A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.


        // Example 1:

        // Input: accounts = [[1,2,3],[3,2,1]]
        // Output: 6
        // Explanation:
        // 1st customer has wealth = 1 + 2 + 3 = 6
        // 2nd customer has wealth = 3 + 2 + 1 = 6
        // Both customers are considered the richest with a wealth of 6 each, so return 6.

var maximumWealth = function(accounts) {
    let maxWealth = 0;

    for(i = 0; i < accounts.length; i++) {
        let currentWealth = 0;
        for(let j = 0; j < accounts[i].length; j++) {
            currentWealth += accounts[i][j];
        }
        if(currentWealth > maxWealth) {
            maxWealth = currentWealth;
        }
    }
    return maxWealth;
  };

// 1431. Kids With the Greatest Number of Candies
// There are n kids with candies. You are given an integer array candies, where each candies[i] represents the number of candies the ith kid has, and an integer extraCandies, denoting the number of extra candies that you have.
// Return a boolean array result of length n, where result[i] is true if, after giving the ith kid all the extraCandies, they will have the greatest number of candies among all the kids, or false otherwise.  
// Note that multiple kids can have the greatest number of candies.


        // Example 1:

        // Input: candies = [2,3,5,1,3], extraCandies = 3
        // Output: [true,true,true,false,true] 
        // Explanation: If you give all extraCandies to:
        // - Kid 1, they will have 2 + 3 = 5 candies, which is the greatest among the kids.
        // - Kid 2, they will have 3 + 3 = 6 candies, which is the greatest among the kids.
        // - Kid 3, they will have 5 + 3 = 8 candies, which is the greatest among the kids.
        // - Kid 4, they will have 1 + 3 = 4 candies, which is not the greatest among the kids.
        // - Kid 5, they will have 3 + 3 = 6 candies, which is the greatest among the kids

var kidsWithCandies = function(candies, extraCandies) {
    // goes through all values in candies arr and get the max
    const max = Math.max(...candies);
    let result = [];

    for(let i = 0; i < candies.length; i++) {
        // set currentVal to be current value in arr
        let currentVal = candies[i];
        // push the current value into result and add the extra candies and check if it is greater than or equal to max
        result.push(currentVal + extraCandies >= max)
    }
    
    return result;
};
kidsWithCandies([2,3,5,1,3], 3);

// 1512. Number of Good Pairs
// Given an array of integers nums, return the number of good pairs.
// A pair (i, j) is called good if nums[i] == nums[j] and i < j.

        // Example 1:

        // Input: nums = [1,2,3,1,1,3]
        // Output: 4
        // Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.

var numIdenticalPairs = function(nums) {
    pairs = 0;
    
    for(i = 0; i < nums.length; i++) {
        for(j = i + 1; j < nums.length; j++) {
            if(nums[i] === nums[j]) {
                pairs++;
            }
        }
    }
    return pairs;
};

// 2006. Count Number of Pairs With Absolute Difference K
// Given an integer array nums and an integer k, return the number of pairs (i, j) where i < j such that |nums[i] - nums[j]| == k.
// The value of |x| is defined as:
// x if x >= 0.
// -x if x < 0.

        // Input: nums = [1,2,2,1], k = 1
        // Output: 4
        // Explanation: The pairs with an absolute difference of 1 are:
        // - [1,2,2,1]
        // - [1,2,2,1]
        // - [1,2,2,1]
        // - [1,2,2,1]

var countKDifference = function(nums, k) {
    var pairs = 0; 
     
     for(let i = 0; i < nums.length; i++) {
         for(let j = i + 1; j < nums.length; j++) {
             let absoluteValue = Math.abs(nums[i] - nums[j]);
             if(absoluteValue === k) {
                 pairs++;   
             }
         }
     }
     return pairs;
};



// 832. Flipping an Image
// Given an n x n binary matrix image, flip the image horizontally, then invert it, and return the resulting image.
// To flip an image horizontally means that each row of the image is reversed.
// For example, flipping [1,1,0] horizontally results in [0,1,1].
// To invert an image means that each 0 is replaced by 1, and each 1 is replaced by 0.
// For example, inverting [0,1,1] results in [1,0,0].

        // Example 1:
        // Input: image = [[1,1,0],[1,0,1],[0,0,0]]
        // Output: [[1,0,0],[0,1,0],[1,1,1]]
        // Explanation: First reverse each row: [[0,1,1],[1,0,1],[0,0,0]].
        // Then, invert the image: [[1,0,0],[0,1,0],[1,1,1]]

var flipAndInvertImage = function(image) {
    for(let i = 0 ; i < image.length;i++){
        image[i].reverse();
        for(let j = 0;j<image[i].length;j++){
            if(image[i][j] === 0){
                image[i][j] = 1;
            }else{
              image[i][j] = 0;  
            }
        }
    }
    return image;
};

// 1313 Decompress Run-Length Encoded List
// We are given a list nums of integers representing a list compressed with run-length encoding.
// Consider each adjacent pair of elements [freq, val] = [nums[2*i], nums[2*i+1]] (with i >= 0).  For each such pair, 
// there are freq elements with value val concatenated in a sublist. 
// Concatenate all the sublists from left to right to generate the decompressed list.
// Return the decompressed list.

        // Input: nums = [1,2,3,4]
        // Output: [2,4,4,4]
        // Explanation: The first pair [1,2] means we have freq = 1 and val = 2 so we generate the array [2].
        // The second pair [3,4] means we have freq = 3 and val = 4 so we generate [4,4,4].
        // At the end the concatenation [2] + [4,4,4] is [2,4,4,4].


var decompressRLElist = function(nums) {
    const result = []
    
    // use 2 because we are going in pairs([i] will always be the frequency); jump up 2 and get the next frequency
    for(let i=0; i < nums.length; i+=2) {
        // frequency is nums[i]
        const frequency = nums[i]
        // value is the value infront of nums[i]
        const value = nums[i+1]
        // push into result and create new Array 
        // (...new Array(frequency) creates the number of slots and .fill(value)) fills in the slots with the value
        result.push(...new Array(frequency).fill(value));
    }
    return result
};


// 557. Reverse Words in a String III
// Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order

// Example 1:

//         Input: s = "Let's take LeetCode contest"
//         Output: "s'teL ekat edoCteeL tsetnoc"


var reverseWords = function(s) {
    let word = s.split(" ");
    let reverseWord = word.map(elem => elem.split("").reverse().join(""));
    return reverseWord.join(" ");
};

// 35. Search Insert Position
// Given a sorted array of distinct integers and a target value, return the index if the target is found. 
// If not, return the index where it would be if it were inserted in order.
// You must write an algorithm with O(log n) runtime complexity.

        // Example 1:

        // Input: nums = [1,3,5,6], target = 5
        // Output: 2

var searchInsert = function(nums, target) {
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] >= target) {
            return i;
        }
    }
    return nums.length;
};

// 278. First Bad Version
// You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your 
// product fails the quality check. Since each version is developed based on the previous version, all the versions
// after a bad version are also bad. Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, 
// which causes all the following ones to be bad.You are given an API bool isBadVersion(version) which returns whether version is bad.
// Implement a function to find the first bad version. You should minimize the number of calls to the API.

        // Example 1:

        // Input: n = 5, bad = 4
        // Output: 4
        // Explanation:
        // call isBadVersion(3) -> false
        // call isBadVersion(5) -> true
        // call isBadVersion(4) -> true
        // Then 4 is the first bad version.

var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        // binary search
       var start = 1, end = n;
       while(start < end){
           var mid = Math.floor(start + (end-start) / 2);
           if(isBadVersion(mid)){
                end = mid; // look on left side of mid
           }else{
               start = mid+1; // look on the right side of mid
           }
       }
       return start;
    };
};


// 977. Squares of a Sorted Array
// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

        // Example 1:
        // Input: nums = [-4,-1,0,3,10]
        // Output: [0,1,9,16,100]
        // Explanation: After squaring, the array becomes [16,1,0,9,100].
        // After sorting, it becomes [0,1,9,16,100].

var sortedSquares = function(nums) {
    // fill the new result arr with the values
    const result = new Array(nums.length).fill(0);
    // start the left pointer at 0
    let left = 0; 
    // start the right pointer at the end of arr
    let right = nums.length - 1;
    // resultIdx will start filling the results from the end of arr(filling from right to left)
    let resultIdx = nums.length - 1;

    while(left <= right) {
        // square the left value and store it in leftVal
        let leftVal = Math.pow(nums[left], 2);
        // square the right value and store it in rightVal 
        let rightVal = Math.pow(nums[right], 2);

        // check if leftVal squared is less than rightVal squared
        if(leftVal <= rightVal) {
            // if it is then push the rightVal to resultIdx into the current position in resultIdx arr because we want
            // the bigger value first since we are going from right to left
            result[resultIdx] = rightVal;
            // move the right index down one to the next spot
            right--;
        } else {
            // set our result at our resultIdx to the leftVal
            result[resultIdx] = leftVal;
            left++;
        }
        // keep moving resultIdx down one
        resultIdx--;
    }
    // return result
    return result;
};

// 189. Rotate Array
// Given an array, rotate the array to the right by k steps, where k is non-negative.

        // Example 1:

        // Input: nums = [1,2,3,4,5,6,7], k = 3
        // Output: [5,6,7,1,2,3,4]
        // Explanation:
        // rotate 1 steps to the right: [7,1,2,3,4,5,6]
        // rotate 2 steps to the right: [6,7,1,2,3,4,5]
        // rotate 3 steps to the right: [5,6,7,1,2,3,4]


var rotate = function(nums, k) {

  // reverse helper function
  function reverse(arr, start, end) {
    while (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
    }
  }

  k %= nums.length;

  reverse(nums, 0, (nums.length - 1));
  reverse(nums, 0, (k - 1));
  reverse(nums, k, (nums.length - 1));

  return nums;
};


// 88. Merge Sorted Array
// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n,
// representing the number of elements in nums1 and nums2 respectively.
// Merge nums1 and nums2 into a single array sorted in non-decreasing order.
// The final sorted array should not be returned by the function, but instead be stored inside the array nums1. 
// To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, 
// and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

        // Example 1:

        // Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
        // Output: [1,2,2,3,5,6]
        // Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
        // The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.

var merge = function(nums1, m, nums2, n) {
    // set the first pointer to be at idx whatever m minues one
    // [1,2,3,0,0,0] in this case the first pointer would be at idx 2 which has a value of 3
    let first = m - 1;
    let second = n - 1;
    // i would be at idx 5
    let i = m + n - 1;

    while(second >= 0) {
        // set fVal to be the first ponter in nums1 arr which in this case would be 3 (m - 1)
        let fVal = nums1[first];
        // set sVal to be the second pointer in nums2
        let sVal = nums2[second];
        // if the first value is greater than the second value
        if(fVal > sVal) {
            // set the the [i] val to be whatver the first value is
            nums1[i] = fVal;
            // move [i] down one
            i--;
            // move first value down one
            first--;
        } else {
            // if second val is greater just set the [i] value to be whatever the second value is
            nums1[i] = sVal;
            i--;
            second--;
        }
    }
};

// 121. Best Time to Buy and Sell Stock
// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the 
// future to sell that stock.
// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

//     Example 1:
//     Input: prices = [7,1,5,3,6,4]
//     Output: 5
//     Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
//     Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.


var maxProfit = function(prices) {
    let sellIdx = prices.length - 1;
    let profit = 0;

    // as long as buy idx is >= 0 decrement from the end of arr
    for(let buyIdx = prices.length - 1; buyIdx >= 0; buyIdx--) {
        // let buyVal = prices at buyIdx
        let buyVal = prices[buyIdx];
        // let sellVal = prices at sellIdx
        let sellVal = prices[sellIdx];

        // check if at buyVal - sellVal >= 0
        if(buyVal - sellVal >= 0) {
            // set sellIdx to buyIdx(basically just decrementing sellIdx to keep comparing vals)
            sellIdx = buyIdx;
        }
        else {
            // set price = sellVal - buyVal
            let price = sellVal - buyVal;
            // profit is going to be the max of profit and the price
            profit = Math.max(profit, price);
        }
    }
    return profit;
};

// 238. Product of Array Except Self
// Given an integer array nums, return an array answer such that
// answer[i] is equal to the product of all the elements of nums except nums[i].
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
// You must write an algorithm that runs in O(n) time and without using the division operation.

    // Example 1:

    // Input: nums = [1,2,3,4]
    // Output: [24,12,8,6]
    // Example 2:

    // Input: nums = [-1,1,0,-3,3]
    // Output: [0,0,9,0,0]

var productExceptSelf = function(nums) {
    const left = new Array(nums.length).fill(0);
    left[0] = 1;
    const right = new Array(nums.length).fill(0);
    right[right.length - 1] = 1;

    for(let i = 1; i < nums.length; i++) {
        left[i] = nums[i - 1] * left[i - 1];
    }
    for(let i = right.length - 2; i >= 0; i--) {
        right[i] = nums[i + 1] * right[i + 1];
    }

    for(let i = 0; i < nums.length; i++) {
        nums[i] = left[i] * right[i];
    }
    return nums;
};

// 33. Search in Rotated Sorted Array
// There is an integer array nums sorted in ascending order (with distinct values).
// Prior to being passed to your function, nums is possibly rotated at an unknown pivot index 
// k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed).
// For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].
// Given the array nums after the possible rotation and an integer target,
//  return the index of target if it is in nums, or -1 if it is not in nums.
// You must write an algorithm with O(log n) runtime complexity.

//     Example 1:

//     Input: nums = [4,5,6,7,0,1,2], target = 0
//     Output: 4
//     Example 2:

//     Input: nums = [4,5,6,7,0,1,2], target = 3
//     Output: -1

var search = function(nums, target) {
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === target) {
            return i;
        }
    }
    return -1;
};