// what is dynamic programming?
    //  "A method for solving a complex problem by breaking it down into a collection of simpler subproblems, solving each of those
    // subproblems just once, and storing their solutions"
    // an approach for solving some problems 

// overlapping subproblems:
    // small problems that can be reused


// optimal substructure:
    // a problem is said to have optimal substructure if an optimal solution can be
    // constructred from optimal solutions of its subproblems

    // ex shortest path from one point to another you can find shortest path from other points

    // simple longest path: simple means no repeats

// fibonacci sequence using recurssion

    function fib(n) {
        if(n <= 2) return 1; // base case
        return fib(n-1) + fib(n-2);
    }