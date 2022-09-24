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


// priority queue
class PriorityQueue {
    constructor(){
      this.values = [];
    }
    // adds value
    enqueue(val, priority) {
      this.values.push({val, priority});
      this.sort();
    };
    // removes smallest value first
    dequeue() {
      return this.values.shift();
    };
    // sorts by lowest priority first
    sort() {
      this.values.sort((a, b) => a.priority - b.priority);
    };
  }


class WeightedGraph {
    constructor() {
        adjacencyList = {};
    }
    addVertex(vertex) {
        // if the adjacency list is empty add an empty array
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    addEdge(vertex1, vertex2, weight) {
        // pushing adjencyList as an object 
        this.adjacencyList.push({node:vertex2, weight});
        this.adjacencyList[vertex2].push({node:vertex1, weight});
    }
    dijkstras(start, end) {
        const nodes = new PriorityQueue();
        const distances = {};
        const previous = {};
        let path = [];
        let smallest;

        // build up inital state
        for(let vertex in this.adjacencyList) {
            if(vertex === start) {
                distances[vertex] = 0;
                nodes.enqueue(vertex, 0);
            } else {
                distances[vertex] = Infinity;
                nodes.enqueue(vertex, Infinity);
            }
            previous[vertex] = null;
        }
        // as long as there is something to visit(as long as there is something)
        while(nodes.values.length) {
            smallest = nodes.dequeue().val;
            if(smallest === finish) {
                // we are done
                // need to build up path to return at end
                while(previous[smallest]) {
                    path.push(smallest);
                    smallest = previous[smallest];
                }
                break;
            }
            if(smallest || distances[smallest] !== Infinity) {
                for(let neighbor in this.adjacencyList[smallest]) {
                    // find neighboring node
                    let nextNode = this.adjacencyList[smallest][neighbor];
                    // calculate new distance to neighboring node
                    let nextNeighbor = distance[smallest] + nextNode.weight;
                    // compare to distance that we already have for that node
                    if(candidate < distances[nextNeighbor.node]) {
                        // updating new smallest distance to neighbor
                        distances[nextNeighbor] = candidate;
                        // updating previous - how we got to neighbor
                        previous[nextNeighbor] = smallest;
                        // enqueue in priority queue with new priority
                        nodes.enqueue(nextNeighbor, candidate);
                    }
                }
            }
        }
        return path.concat(smallest).reverse();
    }
}

var graph = new WeightedGraph()
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A","B", 4);
graph.addEdge("A","C", 2);
graph.addEdge("B","E", 3);
graph.addEdge("C","D", 2);
graph.addEdge("C","F", 4);
graph.addEdge("D","E", 3);
graph.addEdge("D","F", 1);
graph.addEdge("E","F", 1);


graph.Dijkstra("A", "E");

// ["A", "C", "D", "F", "E"]