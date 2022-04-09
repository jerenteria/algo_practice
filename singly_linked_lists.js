// SINGLY LINKED LISTS: A linked list is a data stucture; stores data; no indeces; contains head, tail, and length property
    // consists of nodes, each node has a value and a pointer to another node or null
    // each node is only connected in one direction to next node
    // better alternative to arrays when inserting/deleting at beginning are frequently required
    // Arrays contain index while Linked Lists do not; linked lists are nodes connected to one another with reference/pointer; no index or position; cant access things
    //easily using an index




// This function should accept a value
// Create a new node using the value passed to the function 
// If there is no head property on the list, se the head and tail to be the newly created node
// Otherwise set the next property on the tail to be the new node and set the tail property on the list to be the newly created node 
// increment the length by one

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
class SinglyLinkedList {
    constructor() {
        // start the head as null
        this.head = null;
        // start tail at null
        this.tail = null;
        this.length = 0;
    }
    // push creates new nodes
    push(val) {
        var newNode = new Node(val)
        // if there is no head(empty list)
        if(!this.head) {
            // make head = new node
            this.head = newNode;
            // head and tail are the same; equal to each other
            this.tail = this.head;
        } else {
            // take current tail; take next property and set it to be new node 
            this.tail.next = newNode;
            // new node becomes new tail
            this.tail = newNode;
        }
        // increment length by one
        this.length++;
        return this;
    }
    // pops last node
    pop() {
        // if there is no head value return undefined
        if(!this.head) return undefined;
        // make current value the new head
        var current = this.head;
        // makes current value new tail
        var newTail = current;
        while(current.next) {
            // current becomes new tail
            newTail = current;
            // keep moving current forward one
            current = current.next;
        }
        console.log(current.val)
        console.log(newTail.val)
        // move the tail; this.tail becomes new tail
        // ex: HELLO --> GOODBYE --> !
        //                  nt       c
        this.tail = newTail;
        // makes "GOODBYE" new tail and sets next value to null; blocks connection to value "!"
        this.tail.next = null;
        this.length--;
        // if length = 0
        if(this.length === 0) {
            // null becomes null
            this.head = null;
            // tail becomes null
            this.tail = null;
        }
        return current;
    }
    // removes head of linked list
    shift() {
        // if there is no head return undefined
        if(!this.head) return undefined;
        // store currnet head which in this case is "HELLO" in variable
        var currentHead = this.head;
        // move current head over one and make it the new head
        // goes from "HELLO" being new head to "GOODBYE" being new head
        this.head = currentHead.next;
        // decrease length by 1
        this.length--;
        if(this.length === 0) {
            // tail becomes null
            this.tail = null;
        }
        return currentHead;
    }
    unShift(newNode) {
        var newNode = new Node;
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head
        } else {
        // makes the connection between the newly added node and the current head, but "HELLO" is still currently the HEAD node
        //          HEAD
        // "*" --> "HELLO" --> "GOODBYE"
        newNode.next = this.head;
        // makes the newNode the new head; "*" which is the new node becomes the new head node
        // HEAD
        // "*" --> "HELLO" --> "GOODBYE"
        this.head = newNode;
        }
        this.length++;
        // return the entire list
        return this;
    }
    // searches for certain node; time complexity O(N) 
    get(index) {
        // || means or
        if(index < 0 || index >= this.length) return null;
        // to keep track how many times you have moved up
        var counter = 0;
        // current keeps track of where you are at; starts at head node
        var current = this.head;
        // while counter is not equal to index
        while(counter !== index) {
            // move on to next node
            current = current.next;
            // increment counter by one because you are moving up one spot
            counter++;
        }
    }
    // switches node value to whatever user inputs
    set(index, val) {
        // call get() function and store it in var foundNode
       var foundNode = this.get(index);
       // check if value is found
       if(foundNode) {
           // update the found node value with the value that was passed in
           foundNode.val = val;
           return true;
       }
       return false;
    }
    // inserts new nodes; time complexity = constant O(1)
    insert(index, value) {
        // if its invalid return false;
        if(index < 0 || index > this.length) return false;
        // index is = to length push it to the end; !! converts argument to boolean
        if(index === this.length) return !!this.push(val);
        // if index is 0 call unshift() push to beggining
        if(index === 0) return !!this.unShift(val);


        var newNode = new Node(val);
        // calls the get() function to get index and - 1 to go back one space
        var prev = this.get(index - 1);
        // stores prev.next in var temp to keep connection from new node to node before it 
        var temp = prev.next;
        // place the new node after the previous node 
        prev.next = newNode;
        // stores newNode.next variable in var temp to keep connection from new node to node after it 
        newNode.next = temp;
        this.length++;
        return true;
    }
    // removes node at certain index; time complexity can either be O(1) or O(N); depending where are you removing
    remove(index) {
        if(index < 0 || index > length) return undefined;
        if(index === this.length - 1) return this.pop();
        if(index === 0) this.shift();
        // retrieve the value one before the one we want to remove
        var previousNode = this.get(index -1);
        // store the node next to the current node you are at(previous node) 
        var removed = previousNode.next;
        // links the node previous to node being removed and node that comes after node being removed
        // while removing the node being removed
        previousNode.next = removed.next;
        this.length--;
        return removed;
    }
    reverse() {
        // var node starts at head
        var node = this.head;
        // head now becomes the tail
        this.head = this.tail;
        this.tail = node;
        var next;
        var prev = null;
        for(var i = 0; i < this.length; i++) {
            next = node.next;
            // node.next becomes previous which is now null
            // ex: 100 --> 201 --> 250 --> 350 --> 999 -->
            // now becomes 100 --> null
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }

    print() {
        var arr = [];
        var current = this.head
        while(current) {
            arr.push(current.val)
            current = current.next
        }
        console.log(arr);
    }
}

var list = new SinglyLinkedList()
// list.push("Hello")
// list.push("GOODBYE")
// list.push("!")
// list.push("<3")
// list.push(":)")

    list.push(100)
    list.push(201)
    list.push(250)
    list.push(350)
    list.push(999)


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

    while(current) {
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