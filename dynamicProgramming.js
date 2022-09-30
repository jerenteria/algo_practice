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

// fibonacci sequence using recursion
// big O = O(2^n) (pretty bad)
    function fib(n) {
        if(n <= 2) return 1; // base case
        return fib(n-1) + fib(n-2); // start at the last 2 numbers in list and add them together to get next number
    }

// slow because we are repeating things! doing same operations multiple times
// would be a lot faster if you could solve a problem once and store the solution to reuse it for the next problem

// memoization: storing the results of expensive function calls and returning the cached result when the same input occurs

// memo stores the answer of sub problems to reference later
// big O = O(n)
function fib2(n, memo=[]) {
    // if we have already found an answer to that number return the answer that we found before
        // ex. if we are looking for the fib2(20) if we already found fib(10) return the answer for fib(10) and go from there
    if(memo[n] !== undefined) return memo[n];
    if(n <= 2) return 1;
    // pass in memo to all recursive calls to accumulate data
    var res = fib2(n-1, memo) + fib2(n-2, memo);
    // store the answer above in line 37 uner n in our memo
    memo[n] = res;
    // return above line
    return res;
}

// tabulation: storing the result of a previous result in a "table" (usually an array)
// usually done using iteration
// better space complexity can be achieved using tabulation

function fib3(n) {
    if(n <= 2) return 1;
    // start first 3 in arr at [0,1,1] since that's how it will always begin
    var fibNums = [0,1,1];
    // start iterating at index 3 since we already preset the first 2 indeces
    for(var i = 3; i <= n; i++) {
        fibNums[i] = fibNums[i-1] + fibNums[i-2]; // add last 2 indeces in arr to get new number
    }
    return fibNums;
}