// WHAT IS A BINARY HEAP?
    // A TREE STRUCTURE BUT HAS DIFFERENT RULES
    // IN A MAXBINARYHEAP, PARENT NODES ARE ALWAYS LARGER THAN CHILD NODES
        // EACH PARENT HAS AT MOST TWO CHILD NODES
        // PARENTS VAL IS GREATER THAN CHILDREN BUT NO GUARANTEES BETWEEN SIBLING NODES
        // A BINARY HEAP IS AS COMPACT AS POSSIBLE. 
        // ALL CHILDREN OF EACH NODE ARE AS FULL AS THEY CAN BE AND LEFT CHILDREN ARE FILL OUT FIRST
        
        // FOR ANY INDEX OF AN ARRAY n 
            // THE LEFT CHILD IS STORED AT 2n+1
            // THE RIGHT CHILD IS STORED AT  2n+2

        // TO FIND PARENT OF CHILD WE DO (n-1)/2 (floored which means drop the decimal)
    
        // IN A MINBINARYHEAP, PARENT NODES ARE AWAYS SMALLER THAN CHILD NODES 

    // ADDING TO A BINARY HEAP
        // ADD TO THE END list.push()
            // THEN BUBBLE UP UNTIL ITS IN THE CORRECT SPOT(COMPARE IT TO THE PARENT IF ITS BIGGER SWAP; REPEAT)

// PUSH THE VALUE INTO THE VALUES PROPERTY ON THE HEAP
// BUBBLE UP:
    // CREATE A VAR CALLED INDEX WHICH IS THE LENGTH OF THE VALUES PROPERTY - 1
    // CREATE A VAR CALLED PARENTINDEX WHICH IS THE FLOOR OF (INDEX-1)/2
    // KEEP LOOPING AS LONG AS THE VALUES ELEMENT AT THE PARENTINDEX IS LESS THAN THE VALUES ELEMENT AT THE CHILD INDEX
        // SWAP THE VALUE OF THE VALUES ELEMENT AT THE PARENTINDEX WITH THE VALUE OF THE ELEMENT PROPERTY AT THE CHILD INDEX
        // SET THE INDEX TO BE THE PARENTINDEX, AND START OVER
        

// REMOVING FROM A HEAP:
    // REMOVE THE ROOT
    // REPLACE WITH THE MOST RECENTLY ADDED ITEM
    // ADJUST(BUBBLE DOWN)
// WHAT IS BUBBLE DOWN?
// THE PROCEDURE FOR DELETING THE ROOT FROM THE HEAP(EFFECTIVELY EXTRACTING THE MAX ELEMENT IN A MAX HEAP OR THE MIN ELEMENT IN A 
// MIN HEAP) AND RESTORING THE PROPERTIES IS CALLED DOWN-HEAP(BUBBLE DOWN)

    // REMOVING(EXTRACTING)
        // SWAP THE FIRST VALUE IN THE VALUES PROPERTY WITH THE LAST ONE
        // POP FROM THE VALUES PROPERTY SO YOU CAN RETURN THE VALUE AT THE END
        // HAVE THE NEW ROOT BUBBLE DOWN TO THE CORRECT SPOT
            // YOUR PARENT INDEX STARTS AT 0(THE ROOT)
            // FIND THE IDX OF THE LEFT CHILD: 2*IDX+1 (MAKE SURE ITS NOT OUT OF BOUNDS)
            // FIND THE IDX OF THE RIGHT CHILD: 2*IDX+2 (MAKE SURE ITS NOT OUT OF BOUNDS)
            // IF THE LEFT OR RIGHT CHILD IS GREATER THAN THE ELEMENT...SWAP, IF BOTH LEFT AND RIGHT CHILDREN ARE LARGER
                // SWAP WITH THE LARGEST CHILD
            // THE CHILD IDX YOU SWAPPED TO NOW BECOMES THE NEW PARENT IDX
            // KEEP LOOPING AND SWAPPING UNTIL NEITHER CHILD IS LARGER THAN THE ELEMENT
            // RETURN THE OLD ROOT

class MaxBinaryHeap {
    constructor() {
        this.values = [41,49,33,18,27,12];
    }
    insert(element) {
        this.values.push(element);
        this.bubbleUp();
    }
    // move new item to where it belongs
    bubbleUp() {
        // keeps tracks of newly added item
        let idx = this.values.length - 1;
        // the element is the item of which index we are on
        const element = this.values[idx];
        // compare new item value to values in heap
        while(true) {
            let parentIdx = Math.floor((idx-1)/2);
            let parent = this.values[parentIdx];
            if(element <= parent) break;
                this.values[parentIdx] = element;
                this.values[idx] = parent;
                idx = parentIdx;
        }
    }
    extractMax() {
        // set var max to be at idx 0 which is always going to be biggest value
        const max = this.value[0];
        // pop the last value and store it in var end
        const end = this.values.pop();
        this.values[0] = end;
        //bubble down
        this.sinkDown();
        return max;
    }
    sinkDown() {
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];
        while(true) {
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild, rightChild;
            let swap = null;

            if(letftChildIdx < length) {
                leftChild = this.values[leftChildIdx];
                if(leftChild > element) {
                    swap = leftChildIdx;
                }
            }
            if(rightChildIdx < length) {
                rightChild = this.values[rightChildIdx];
                if((swap === null && rightChild > element) || (swap !== null && rightChild > leftChild)) {
                    swap = rightChildIdx;
                }
            }
            if(swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;

        }
    }
}
let heap = new MaxBinaryHeap();
heap.insert(55)
heap.insert(65)
heap.insert(38)