let value = 3 
let negValue = -value
//console.log(value);
console.log(negValue);

/*
console.log(3 + 2);
console.log(3 - 2);
console.log(3 * 2);
console.log(3 / 2);
console.log(3 % 2); // modulus operator gives the remainder of the division
console.log(3 ** 2); // exponentiation operator gives the result of raising the first operand to the power of the second operand
*/

let str1 = "Hello"
let str2 = "World"

let str3 = str1 + str2
console.log(str3);

/*console.log("1" + 2); // "12" because the number 2 is converted to a string and concatenated with "1"
console.log(1 + "2"); // "12" because the number 1 is converted to a string and concatenated with "2"
console.log("1" + 2 + 2); // "122" because the number 2 is converted to a string and concatenated with "1" and then another "2"
console.log(1 + 2 + "2"); // "32" because the numbers 1 and 2 are added together first to get 3, and then the result is converted to a string and concatenated with "2" 
*/

//  console.log((3 + 4) * 5 % 3);

console.log(+true); // 1 because true is converted to 1 when using the unary plus operator
// console.log(+false); // 0 because false is converted to 0 when using the unary plus operator
console.log(+""); // 0 because an empty string is converted to 0 when using the unary plus operator
// console.log(+"33"); // 33 because the string "33" is converted to the number 33 when using the unary plus operator
// console.log(+"33abc"); // NaN because the string "33abc" cannot be converted to a number when using the unary plus operator         

let num1, num2, num3
num1 = num2 = num3 = 2 + 2  // right to left evaluation, so 2 + 2 is evaluated first and then assigned to num3, then num2, and finally num1


let gamecounter = 100
gamecounter++
++gamecounter  
// mdn web docs say that the post-increment operator (gamecounter++) returns the value of gamecounter before it is incremented, while the pre-increment operator (++gamecounter) returns the value of gamecounter after it is incremented. So in this case, gamecounter will be incremented to 101 after the post-increment operator is used, and then incremented again to 102 after the pre-increment operator is used. However, since we are only logging gamecounter once at the end, it will show 101 because the post-increment operator increments the value of gamecounter after it is used in the expression.  
console.log(gamecounter); // 101 because the post-increment operator increments the value of gamecounter after it is used in the expression 
