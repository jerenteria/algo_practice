// setting and swapping
// set myNumber to 42. Set myName to your name. Now swap myNumber into myName and vice versa



// Print integers from -52 to 1066 using a FOR loop.
for(i = -52; i <= 1066; i++) {
    console.log(i)
}

console.log("------------")

// Create beCheerful(). Within it,
//console.log string "good morning!" Call it 98 times.

function beCheerful() {
    for(let goodMorning = 0; goodMorning <= 98; goodMorning++) {
        console.log("Good morning!")
    }
}
beCheerful();

console.log("------------")

// Using FOR, print multiples of 3 from -300 to 0. Skip -3 and -6.
for(i = -300; i <= 3; i++) {
    if(i % 3 == 0) {
        console.log(i)
    }
// add later on to skip -3 and -6
}
console.log("------------")

// Print integers from 2000 to 5280, using a WHILE.
var num = 2000
while(num <= 5280) {
    console.log(num)
    num = num + 1
}
console.log("------------")
// If 2 given numbers represent your birth month and day 
// in either order, log "How did you know?", 
// else log "Just another day...." 




// Print all integer multiples of 5,
// from 512 to 4096. Afterward, also log how many there were.

for(i = 512; i <= 4096; i++) {
    if(i % 5 == 0) {
        console.log(i, "There were ")
    }
}

console.log("------------")

// Print multiples of 6 up to 60,000, using a WHILE.
var nums = 0
while(nums <= 60000) {
    if(nums % 6 == 0) {
        console.log(nums)
    }
    nums = nums + 1
}

// Print integers 1 to 100. If divisible by 5, print "Coding" instead.
// If by 10, also print " Dojo".

function countingDojo() {
    for(i = 1; i <= 100; i++) {
        if(i % 5 == 0) {
            console.log("Coding");
        }
        else if(i % 10 == 0) {
            console.log("Dojo");
        }
        else {
            console.log(i)
        }
    }
}
countingDojo()

// Your function will be given an input parameter incoming.
// Please console.log this value.

function incoming(incoming) {
    console.log("incoming")
}
incoming();

