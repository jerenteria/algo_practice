// what is a graph?
    // collection of nodes and connections between those nodes

// uses for graphs
    // social networking
        // connections between friends on a social site(facebook/instagram)
    // location/mapping
        // shortest path on a map(google maps)
    // routing algorithms
    // visual hierarchy
    // file system optimizations
    // EVERYWHERE

// types of graphs
    // vertex - a node
    // edge - connection between nodes

    // undirected graph = no direction to the edges(2 way connections A -> B & B -> A)
    // directed graph = direction assigned to edge(1 way A -> B is true but B -> A is false)
    // weighted graph = each connection(edge) has a value
    // unweighted graph = connections do not have values


// matrix: 2 dimensional chart with nested arrays

// adding a vertex
    // addVertex()
        // write a method called addVertex, which accepts a name of a vertex
        // it should add a key to the adjacency list with the name of the vertex and set its value to be an empty array


// adding an edge
    // addEdge()
        // should accept two vertices, we can call them vertex1 and vertex2
        // the function should find in the adjacency list the key of vetex1 and push vertex2 to the array
        // the function should find in the adjacency list the key of vetex2 and push vertex1 to the array

// removing an edge
    // removeEdge()
    // this function should accept two vertices, well call them vertex1 and vertex2
    // the function should reassign the key of vertex1 to be an array that does not contain vertex2
    // the function should reassign the key of vertex2 to be an array that does not contain vertex1

// removing a vertex
    // removeVertex()
        // the function should accept a vertex to remove
        // the function should loop as long as there are any other vertices in the adjacency list for that vertex
        // inside of the loop call our removeEdge() with the vertex we are removing and any values in the adjacency list for that vertex
        // delete the key in the adjacency list for that vertex



        // traversing graphs
    // traversal: visiting/updating/checking
    // we need to specify our starting point(no root in graphs)


// graph traversal uses
    // peer to peer networking
    // web crawlers
    // finding "closest"
        // matches/recommendations
    // shortest path problems
        // gps navigation
        // solving mazes
        // AI (shortest path to win a game)

// depth first search: always visit children before visiting siblings

// depth first traversal recursive
    // the function should accept a starting node
    // create a list to store the end result, to be returned at the very end
    // create an object to store visited vertices
    // create helper function which accepts a vertex
        // helper function should return early if the vertex is empty
        // the helper function should place the vertex it accepts into the visited object and push that vertex into the reult array
        // loop over all of the values in the adjacencyList for that vertex
        // if any of those values have not been visited recursively invoke the helper function with that vertex
    // invoke the helper function with the starting vertex
    // return the result array


// depth first search traversal iterative
    // the function should accept a starting node
    // create a stack to help use keep track if vertices(use a list/array)
    // create a list to store the end result, to be returned at the very end
    // create an object to store visited vertices
    // add the starting vertex to the stack, and mark it visited
    // while the stack has something in it:
        // pop the next vetex from the stack
        // if that vertex hasnt been visited yet:
            // mark it as visited
            // add it to the result list
            // push all of its neighbors into the stack
    // return the result array

// breadth first search():
    // function should accept a starting vertex
    // create a queue (you can use an array) and place the starting vertex in it
    // create an array to store nodes visited
    // create an obj to store nodes visited
    // mark the starting vertex as visited
    // loop as long as there is anything in the queue
    // remove the first vertex from the queue and push it into the array that stores nodes visited 
    // loop over each vertex in the adjacency list for the vertex you are visiting
    // loop over each vertex in the adjacency list for the vertex you are visiting
    // if it is not inside the object that stores nodes visited, mark it as visited and enqueue that vertex
    // once you have finished looping, return the array of visited nodes



class Graph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex) {
        // if there isnt any dulicates
        if(!this.adjacencyList[vertex]){
            // create an empty array and that vertex
            this.adjacencyList[vertex] = [];
        }
    }
    addEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2); // find in this adjacency list the key of vertex1 and push vertex2 to the array
        this.adjacencyList[vertex2].push(vertex1); // find in this adjacency list the key of vertex2 and push vertex1 to the array
    }
    removeEdge(vertex1, vertex2) {
        // take current adjacency list of vertex1 and filter it(keep everything that is not equal to vertex2)
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v !== vertex2);
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v !== vertex1);
    }
    removeVertex(vertex) {
        while(this.adjacencyList[vertex].length) {
            const adjacencyVertex = this.adjacencyList[vertex].pop()
            this.removeEdge(vertex, adjacencyVertex);
            }
            delete this.adjacencyList[vertex];
        }
    depthFirstRecursive(start) {
        // result = list
        const result = [];
        // visited = object
        const visited = {};
        // refers to this graph itself
        const adjacencyList = this.adjacencyList;

        // helper function
        (function dfs(vertex) {
            if(!vertex) return null;
            // once that vertex is visited set it to true
            visited[vertex] = true;
            // push that vertex to list result
            result.push(vertex);
            // loop through neightbors with .forEach and repeat dsf() with each one
            adjacencyList[vertex].forEach(neighbor => {
                if(!visited[neighbor]) {
                    return dfs(neighbor)
                }
            });
        })(start)
        return result;
    }
    depthFirstIterative(start) {
        const stack = [start];
        const result = [];
        const visited = {};
        let currentVertex;

        // the start has been visited set it to true
        visited[start] = true;
        // while there is something in the stack
        while(stack.length) {
            // set var currentVertex to popped item
            currentVertex = stack.pop();
            // push current vertex to return at end
            result.push(currentVertex);

            // access the neighbors of the current vertex
            this.adjacencyList[currentVertex].forEach(neighbor => {
                if(!visited[neighbor]) {
                    // if it has not been visited then visit the neighbor; set to true
                    visited[neighbor] = true;
                    // then push neighbor
                    stack.push(neighbor) 
                }
            });
        }
        return result;
    }
    breadthFirst(start) {
        const queue = [start];
        const result = [];
        const visited = {};
        // mark the starting point as visited and set it to true
        visited[start] = true;
        // while there is something in the stack
        while(queue.length) {
            // remove the first thing in the queue with shift; shift = pop; first thing in is first thing out in a queue!
            currentVertex = queue.shift();
            // push the currentVertex after popping it off
            result.push(currentVertex);

            // go to all of the currentVertex neighbors
            this.adjacencyList[currentVertex].forEach(neighbor => {
                if(!visited[neighbor]) {
                    // if it has not been visited mark it as visited
                    visited[neighbor] = true;
                    // push it into the queue
                    queue.push(neighbor);
                }
            });
        }
        return result;
    }
}


// let g = new Graph();
// g.addVertex("Dallas");
// g.addVertex("Tokyo");
// g.addVertex("Aspen");
// g.addEdge("Dallas", "Tokyo")
// g.addEdge("Dallas", "Aspen")


let g = new Graph();

g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")


g.addEdge("A", "B")
g.addEdge("A", "C")
g.addEdge("B","D")
g.addEdge("C","E")
g.addEdge("D","E")
g.addEdge("D","F")
g.addEdge("E","F")
g.depthFirstRecursive("A")

//          A
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//          F



