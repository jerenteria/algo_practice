// What is Dijkstra's algorithm?
    // it finds the shortest path

// Who was Dijkstra?
    // Edgar Dijkstra was a Dutch programmer, physicist, essayist
    // helped to advance the field of computer science from an "art" to an adacademic discipline
    // many if his discoveries and algos are used to this day

// why is still useful?
    // gps - fastest route
    // networking routing
    // biology - used to model the spread of viruses
    // airline ticket - finding cheapest route to destination

class WeightedGraph {
    constructor() {
        adjacencyList = {};
    }
    addVertex(vertex) {
        if(!this.adjacencyList[vertex])  this.adjacencyList[vertex] = [];
    }
    addEdge(vertex1, vertex2, weight) {
        this.adjacencyList.push({node:vertex2, weight});
        this.adjacencyList[vertex2].push({node:vertex1, weight});
    }
}