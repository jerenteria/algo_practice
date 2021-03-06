// TIME COMPLEXITY

// INSERTION = O(1)
// REMOVAL = O(1)
// SEARCHING = O(N)
// ACCESS = O(N)


class Node{
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedLists {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // pushes new val to end of list 
    push(val) {
        var newNode = new Node(val);
        if(this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            // if there is something already in the list add it to the end
                // ex. 99 -> 100
                    // 99 is in the list and we are adding 100
                    // newNode = 100
            this.tail.next = newNode;
            // the node that was there before is still the current tail
                // ex. 99 -> 100
                //       <- makes the connection from 100 back to 99 and states 99 is still the current tail
            newNode.prev = this.tail;
            // the newNode that we added which is 100 is now the tail
            this.tail = newNode;
        }
        // add the length each time a node is added
        this.length++;
        return this;
    }
    // removes tail
    pop(val) {
        // check if the list is empty
        // if there is no head there is no tail so return undefined
        if(!this.head) {
            return undefined;
        }
        // poppedNode is going to be the tail
        var poppedNode = this.tail;
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            // update the tail
            // the previous node to the node that was popped is now the new tail
            // ex. 1 <-> 3 <-> 7
                // if we pop 7 
                // make 3 the new tail
            this.tail = poppedNode.prev;
            // the new tail is now pointing at null to remove linkage to old node(its good to do this to prevent access to old nodes)
            this.tail.next = null;
            // make the old connection from poppedNode to previous and make it null
            poppedNode.prev = null;
        }
        this.length--;
        return poppedNode;
    }
    // removes the head node
    shift(val) {
        // if the list is empty (no head node)
        if(!this.head) {
            // return undefined
            return undefined;
        }
        var oldHead = this.head;
        // if the length of the list is only one the node is not pointing to anything
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            // the current head is now going to be called the "oldHead" and is turning the next node into the new head node
            this.head = oldHead.next;
            // breaks the pointer from the new and current head node to the previous head
            this.head.prev = null;
            // now it breaks the pointer going to the other side from the original head node to the new head node 
            oldHead.next = null;
        }
        this.length--;
        return oldHead;
    }
    // adds new head
    unShift(val) {
        var newNode = new Node(val)
        // if the list is empty
        if(this.head === 0) {
            // make the new node the head
            this.head = newNode;
            // make the new node the tail
            this.tail = newNode;
        } else {
            // add the new node to the beginning of the list
            this.head.prev = newNode;
            // the previous node is still the head
            newNode.next = this.head;
            // the new node is now the head if the list
            this.head = newNode;
        }
        this.length++;
        return this;
    } 
    // get certain index of list
    get(index){
        // if index is negative or greater than length return null
        if(index < 0 || index >= this.length) return null;
        var count, current;
        // start from beginning
            // if the index is less than half of the length of the list
        if(index <= this.length/2){
            count = 0;
            current = this.head;
            while(count !== index){
                current = current.next;
                count++;
            }
        } else {
            // start from the end
            count = this.length - 1;
            current = this.tail;
            while(count !== index){
                current = current.prev;
                count--;
            }
        }
        return current;
    }
    set(index, val) {
        // var foundNode is the node at the index we are looking for 
        // using the get method above
        var foundNode = this.get(index);
        // if foundNode is not null
        if(foundNode != null) {
            // set the value of the foundNode with the value we are setting
            foundNode.val = val;
            // return true
            return true;
        }
        // else return false
        return false;
    } 
    insert(index, val) {
        // check if index is negative or out of bounds
        if(index < 0 || index >= this.length) return false;
        if(index === 0) return !!this.unShift(val);
        // if the index is the same as the length of list then push new node
        if(index === this.length) return !!this.push(val);

        // new node
        var newNode = new Node(val);
        // get the index of node before the one we are looking for
        var foundNode = this.get(index - 1);
        // ex.  A B C D E F
             // if you try to insert something at idx 3 you will get index 2 due to get(index - 1)
             // var afterNode is getting you the reference between  C and D
        var afterNode = beforeNode.next;
        // beforeNode.next which is what youre inserting becomes the new node
        beforeNode.next = newNode;
        // now you are pointing from the newNode back to the node before it
        // ex. A B C D E F
            // if you insert Hello at idx 3
            // A B C Hello D E F
            // you are now pointing C <-> Hello
        newNode.prev = beforeNode; 
        // connecting newNode(Hello) to afterNode(D)
        // C <- Hello -> D
        newNode.next = afterNode;
        // connecting D back to Hello;
        // C <-> Hello <-> D
        afterNode.prev = newNode;
        this.length++;
        return true;
    }
    remove(index) {
        if(index < 0 || index >= length) return undefined;
        if(index === 0) return this.shift();
        if(index === this.length - 1) return this.pop();

        var removedNode = this.get(index);
        // grabs the node being removed and is making the previous node before it connect to the one after it
        removedNode.prev.next = removedNode.next;
        // making the connection backwards
        removedNode.next.prev = removedNode.prev;
        removedNode.next = null;
        removedNode.prev = null;

        this.length--;
        return removedNode;
    }
}
