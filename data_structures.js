// WHAT ARE DATA STRUCTURES? 
    // DATA STRUCTURES ARE A COLLECTION OF VALUES, THE RELATIONSHIPS AMONG THEM, AND THE FUNCTIONS OR OPERATIONS THAT CAN BE APPLIED TO THE DATA
// WHY SO MANY DATA STRUCTURES?
    // DIFF DATA STRUCTURES EXCEL AT DIFF THINGS. SOME ARE HIGHLY SPECIALIZED, WHILE OTHERS(LIKE ARRAYS) ARE MORE GENERALLY USED




// ES2015 CLASS SYNTAX 
class Student {
    // constructor is used to instantiate new user/ add properties to new users
    constructor(firstName, lastName, year) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.year = year;
        this.tardies = 0;
        this.scores = [];
    }
    // instance methods; what should each object created from this class be able to do?
    fullName() {
        return `Your full name is ${this.firstName} ${this.lastName}`;
    }
    markLate() {
        this.tardies += 1;
        if(this.tardies >= 3) {
            return "YOU ARE EXPELLED!"
        }
        return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`;
    }
    addScore(score) {
        this.scores.push(score);
        return this.scores
    }
    calculateAverage() {
        this.scores.reduce(function(a,b){return a+b})
        return sum/this.score.length;
    }
    // static functions do not use single individual objects
        // not relevant to an individual instance
    static enrollStudents(...students) {
        return "Enrolling Students!"
    }
}

// creates new students
let firstStudent = new Student("Colt", "Steele", 4);
let secondStudent = new Student("Blue", "Steele", 2);
console.log(firstStudent)
console.log(secondStudent)
// Prints fullName()
console.log(firstStudent.fullName())
console.log(firstStudent.markLate())
console.log(firstStudent.addScore())