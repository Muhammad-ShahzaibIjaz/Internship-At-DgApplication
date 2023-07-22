// Check the datatypes of variables, print the output, of this statement and describe
// the reason. if I want both answers to be equal, write will be the method?
var a = 3 + "7";
var b = 3 + 7;

console.log(a);
console.log(b);

var c = 3 + parseInt("7");
console.log(c);


// The output of both variable not equal. Because as we know that when we perform addition operation with string data type with any other datatype except symbol it perform as a concatenation operation. So that's why both output are not equal. if we want to output of the both variable should be equal then we convert the string into Int or Number. For that we use parseInt that convert string into number.