// STACK: DATA COLLECTIONS; ABSTACT DATA STRUCTURES
    // LIFO data structure
    // The last element added to the stack will be the first element removed from the stack
    // the top element gets removed first(which is the last one added)
    // used to manage function invocations(calling functions)
        // undo/redo
        // routing(web history) is treated like a stack


// creating a stack with an array using search history as example

var stack = ["google", "instagram", "youtube"]
// you can use a pop() function to remove the last thing in the array first; that is the only way this is a stack if 
// the first thing you remove is the last thing that was added to the array