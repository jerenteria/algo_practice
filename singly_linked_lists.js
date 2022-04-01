// SINGLY LINKED LISTS: A linked list is a data stucture; stores data; no indeces; contains head, tail, and length property
    // consists of nodes, each node has a value and a pointer to another node or null
    // each node is only connected in one direction to next node




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
}

var list = new SinglyLinkedList()
list.push("Hello")
list.push("GOODBYE")
list.push("!")
