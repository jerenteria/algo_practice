// STACK: DATA COLLECTIONS; ABSTACT DATA STRUCTURES
    // LIFO data structure
    // The last element added to the stack will be the first element removed from the stack
    // the top element gets removed first(which is the last one added)
    // used to manage function invocations(calling functions)
        // undo/redo
        // routing(web history) is treated like a stack

    // BIG O OF STACKS
    // INSERTION - O(1)
    // REMOVAL - O(1)
    // SEARCHING - O(N)
    // ACCESS - O(N)


// creating a stack with an array using search history as example

var stack = ["google", "instagram", "youtube"]
// you can use a pop() function to remove the last thing in the array first; that is the only way this is a stack if 
// the first thing you remove is the last thing that was added to the array

// how to create own stacks
    // array implementation
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
    
}

// WERE ADDING TO THE END AND REMOVING FROM THE END
// NOT CONSTANT TIME REMOVING FROM THE END BC WE HAD TO ITERATE THROUGH THE WHOLE LIST TO GET TO THE SECOND TO LAST ITEM
// TO SET THAT TO BE THE NEW TAIL  

class Stack{
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push(val) {
        var newNode = new Node(val);
        if(!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            var temp = this.first;
            this.first = newNode;
            this.firs.next = temp;
        }
        // increment the size of stack and return it
        return ++this.size;
    }
    pop(val) {
        if(!this.first) return null;
        var temp = this.first;
        if(this.first === this.last) {
            this.last = null;
        }
            this.first = this.first.next;
            this.size--;
            return temp.value
    }
}

// QUEUES
    // data structure that you add data in and remove data, good for keeping track of order
    // FIFO: FIRST IN FIRST OUT
        // when printing something the first thing that gets printed is the first thing you print other things get stacked on top
        // waiting in line first people to show up are the first people to go in


    // BIG O OF QUEUES
    // INSERTION - O(1)
    // REMOVAL - O(1)
    // SEARCHING - O(N)
    // ACCESS - O(N)

    
// add to the beginning and remove from the end in queue
// building a queue with an array
class Node {
    constructor(value) {
        this.first = null;
        this.last = null;
        this.size;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    enqueue(val) {
        var newNode = new Node(val);
        if(!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }
    dequeue(val) {
        if(!this.first) return null;

        var temp = this.first;
        if(this.first === null.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}

