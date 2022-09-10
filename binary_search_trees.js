// WHAT IS A TREE?
    // A data structure that consists of nodes in a parent/child relationship
    // lists = linear
    // trees = nonlinear(branch; more than one path)
    //ROOT = TOP node in a a tree
    // child = a node directly connected to another node when moving away from the root
    // parent = the converse notion of a child
    // siblings = a group of nodes with the same parent
    // leaf = a node with no children
    // edge = the connection between one node and another

// what are trees used for?
    // HTML DOM(Document Object Model)
    // Network Routing
    // Abstarct Syntax Tree
    // Artifical Intelligence
    // Folders in Operating Systems
    // json




// BINARY SEARCH TREES(tree has to be sorted to be considered a binary search tree)
    // INSERTION - O(log n)
    // SEARCHING - O(log n)
    // HAS AT MOST 2 CHILDREN
    // STORES SORTABLE DATA(COMPARABLE DATA)
    // ALL NUMBERS ON THE LEFT SIDE BRANCH ARE LESS THAN THE PARENT NODE AND RIGHT SIDE HAS GREATER NODES THAN PARENT


class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        var newNode = new Node(value);
        if(this.root === null) {
            this.root = newNode;
            return this;
        } else {
            var current = this.root;
            while(true) {
                if(value === current.value) return undefined;
                // if the current val is less than the current node
                if(val < current.val) {
                    // check if the left is null
                    if(current.left === null) {
                        // place the new node to the left
                        current.left = newNode;
                        return this;
                    } else {
                        // if there is already a node there place it to the left of that one
                        current = current.left;
                    }
                } else if(value > current.value) {
                    if(current.right === null) {
                        current.right = newNode;
                        return this;
                    } else {
                        current = current.right;
                    }
                }
            }
        }
    }
    find(value) {
        if(this.root === null) return false;
        // start current at the root; root is the current node
        var current = this.root,
            found = false;
        // while there is something to loop over and we havent found it
        while(current && !found) {
            if(this.value < current.val) {
                current = current.left
            } else if(value > current.value) {
                current = current.right;
            } else {
                found = true;
            }
        }
        if(!found) return undefined;
        return current;
    }
}

// insert using insrt function
var tree = new BinarySearchTree();
tree.insert(10)
tree.insert(12)
tree.insert(2)
tree.insert(14)
tree.insert(20)


// BASIC INSTERTION IN A BINARY SEARCH TREE
// var tree = new BinarySearchTree();
// tree.root = new Node(10);
// tree.root.right = new Node(15);
// tree.root.left = new Node(7);
// tree.root.left.right = new Node(9);


// TRAVERSING A TREE
    // BREADTH FIRST SEARCH(better use for wider trees)
        // START FROM BEGINNING AND GO ACROSS
        // CREATE A QUEUE(THIS CAN BE AN ARRAY) AND A VARIABLE TO STORE THE VALUES OF NODES LISTED
        // PLACE THE ROOT NODE IN THE QUEUE
        // LOOP AS LONG AS THERE IS ANYTHING IN THE QUEUE
            // DEQUEUE A NODE FROM THE QUEUE AND PUSH VALUE OF THE NODE INTO THE VARIABLE THAT STORES THE NODES
            // IF THERE IS A LEFT PROPERTY ON THE NODE DEQUEUED- ADD IT TO THE QUEUE
            // IF THERE IS A RIGHT PROPERTY ON THE NODE DEQUEUED- ADD IT TO THE QUEUE
        // RETURN THE VARIABLE THAT STORES THE VALUES 

        class BinarySearchTree {
            constructor() {
                this.root = null;
            }
            BFS() {
                var node = this.root
                    data = [],
                    queue = [];
                queue.push(this.root);
                // while there is something in the queue; length is not 0
                while(queue.length) {
                    node = queue.shift();
                    data.push(node);
                    if(node.left) queue.push(node.left);
                    if(node.right) queue.push(node.right);
                }
                return data;
            }
        }
    
    // DEPTH FIRST SEARCH(BETTER USED FOR DEEP TREES): 
        // DFS: IN ORDER
            // START FROM THE BOTTOM AND WORK WAY UP

            class BinarySearchTree {
                constructor() {
                    this.root = null;
                }
                DFSInOrder() {
                    var data = [];
                    function traverse(node) {
                        if(node.left) traverse(node.left);
                        data.push(node.value);
                        if(node.right) traverse(node.right);
                    }
                    traverse(this.root);
                    return data;
                }
            }    
        // DFS: PREORDER
            // WORK LEFT SIDE FIRST THEN GO RIGHT

            // CREATE A VAR TO STORE THE VALUES OF NODES LISTED
            // STORE ROOT OF BST IN A VAR CALLED CURRENT
            // WRITE A HELPER FUNCTION WHICH ACCEPTS A NODE
                // PUSH VALUE OF NODE TO THE VAR THAT STORES THE VALUES
                // IF NODE HAS A LEFT PROPERTY CALL HELPER FUNCTION WITH THE LEFT PROPERTY ON THE NODE
                // IF THE NODE HAS A RIGHT PROPERTY CALL HELPER FUNCTION WITH RIGHT PROPERTY ON THE NODE
            // INVOKE THE HELPER FUNCTION WITH THE CURRENT VAR
            // RETURN ARRAY OF VALUES
            class BinarySearchTree {
                constructor() {
                    this.root = null;
                }
                DFSPreorder() {
                    var data = [];
                    var current = this.root;
                    function traverse(node) {
                        data.push(node.value);
                        if(node.left) traverse(node.left);
                        if(node.right) traverse(node.right);
                    }
                    traverse(this.root);
                    return data;
                }
            }        

        // DFS: POSTORDER
            // START AT TOP NODE GO ALL THE WAY TO THE LEFT UNTIL THERE IS NO MORE LEFT NODES, ADD THAT NODE TO THE LIST THEN GO
            // TO THE RIGHT OF THAT NODE ADD THAT NODE TO THE LIST GO BACK UP; BEFORE REACHING TOP OF LIST GO RIGHT AND DO SAMETHING
            
            class BinarySearchTree {
                constructor() {
                    this.root = null;
                }
                DFSPostOrder() {
                    var data = [];
                    function traverse(node) {
                        if(node.left) traverse(node.left);
                        if(node.right) traverse(node.right);
                    }
                    traverse(this.root);
                    return data;
                }
            }