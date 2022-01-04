// QUESTION: WRITE A FUNCTION WHICH TAKES TWO NUMBERS AND RETURNS THEIR SUM
    // 1. can I resintate the problem in my own words?
        // add 2 different numbers
    // 2. what are inputes that go into the problem?
        // 
    // 3. What are the outputs that should come from the solution to the problem?
        // should it be an integer, float, string?
    // 4. Can outputs be determined from the inputs? Do i have enough information to solve the problem?
    // 5. How should I label the import pieces data that are part of the problem?

    
    

// QUESTION: WRITE A FUNCTION WHICH TAKES IN A STRING AND RETURNS COUNTS OF EACH CHARACTER IN THE STRING.
// charCount("aaaa"); // {a:4}
// charCount('hello'); // {h:1, e:1, l:2, o:1}


function charCount(str) {
    // make object to return at end
    var result = {};
    // loop over string, for each character...
        // if char is a number/letter AND is a key in object, add one to count
        for (var i = 0; i < str.length; i++) {
            var char = str[i].toLowerCase()
            if(result[char] > 0) {
                result[char]++;
            }
            // if the char is a number/letter AND is not in object, add it to object and set value to 1
            else {
                result[char] = 1;
            };
        }
            // if character is something else(space, period, etc) dont do anything
    // return object at end
    return result;
}
charCount("hello");

