let score = "100"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)  
console.log(typeof valueInNumber);
console.log(valueInNumber)                                                                                         

//33 is a number, but "33" is a string, so we need to convert it to number before we can use it in mathematical operations.
//33abb is not a number, so it will return NaN (Not a Number) when we try to convert it to number.
//true is a boolean, but when we convert it to number, it will return 1, and false will return 0.

let isLoggedIn = "true"
console.log(typeof isLoggedIn);
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(typeof booleanIsLoggedIn);
console.log(booleanIsLoggedIn)

// 1 is a number, but when we convert it to boolean, it will return true, and 0 will return false. Any non-empty string will return true, and an empty string will return false.
// null and undefined will return false when converted to boolean. NaN will also return false when converted to boolean.
// "anurag" => true, "" => false, " " => true (because it is not an empty string)


let someNumber = 33

let stringNumber = String(someNumber)
console.log(typeof stringNumber);
console.log(stringNumber)