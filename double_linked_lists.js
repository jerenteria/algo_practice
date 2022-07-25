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
            // the new tail is now pointing at null to remove linkage to old node
            this.tail.next = null;
            // make the old connection from poppedNode to previous and make it null
            poppedNode.prev = null;
        }
        this.length--;
        return poppedNode;
    }
}
