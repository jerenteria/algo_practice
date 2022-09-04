// function print() {
//     var x = '5';
//     alert(x+y);
// }
// var x = 3;
// var y = 2;
// print()
// alert(x+y);

function isAlmostPalindrome(string1, string2) {
    let map = [];
    let counter = 0;
    for(i = 0; i < string1.length; i++) {
        for(j = 0; j < string2.length; i++) {
            if(string1.length !== string2.length) {
                return false;
            }
            if(string1 === string2) {
                return true;
            }
        }
    }
}
isAlmostPalindrome('abccba', 'abccfb')


// hello