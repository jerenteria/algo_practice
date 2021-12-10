function sayMyName() {
    console.log("My name is Juan");
}
sayMyName();


for(i = 1; i <= 1000; i++) {
    console.log(i)
}
console.log("------------------------")

for(var num = 10; num > 2; num = num - 1)
{
    console.log('num is currently', num);
}

console.log("------------------------")

// code stops when reaching number 3
var num = 1;
while(num < 5) 
{
    if(num == 3) // causes code to break when reaching number 3
    {
        break; // exits the loop and enters the following loop
    }
    console.log("Im counting! The number is ", num);
    num = num + 1;
}

console.log("-------------------------------------")

// skips the number 3
for(var nums = 1; nums < 5; nums += 1) {
    if(nums == 3) {
        continue;
    }
    console.log("Im counting! The number is ", nums);
}

