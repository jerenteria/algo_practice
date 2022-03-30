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
            // head and tail are the same
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
}

// var first = new Node("Hi")
// first.next = new Node("there")
// first.next.next = new Node("how")
// first.next.next.next = new Node("are")
// first.next.next.next.next = new Node("you")

var list = new SinglyLinkedList()
list.push("Hello")
list.push("GOODBYE")
list.push(80)
