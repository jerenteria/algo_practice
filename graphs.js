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
        const result = [];
        const visited = {};
        const adjacencyList = this.adjacencyList;

        (function dfs(vertex) {
            if(!vertex) return null;
            visited[vertex] = true;
            result.push(vertex);
            adjacencyList[vertex].forEach(neighbor => {
                if(!visited[neighbor]) {
                    return dfs(neighbor)
                }
            });
        })(start)
        return result;
    }
}


let g = new Graph();
g.addVertex("Dallas");
g.addVertex("Tokyo");
g.addVertex("Aspen");
g.addEdge("Dallas", "Tokyo")
g.addEdge("Dallas", "Aspen")


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

// depth first traversal
// the function should accept a starting node
// create a list to store the end result, to be returned at the very end
// create an object to store visisted vertices
// create helper function which accepts a vertex
    // helper function should return early if the vertex is empty
    // the helper function should place the vertex it accepts into the visited object and push that vertex into the reult array
    // loop over all of the values in the adjacencyList for that vertex
    // if any of those values have not been visited recursively invoke the helper function with that vertex
// invoke the helper function with the starting vertex
// return the result array
