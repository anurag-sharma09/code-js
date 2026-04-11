// primitive

//7types of primitive data types
//1. string
//2. number
//3. boolean
//4. null
//5. undefined
//6. symbol
//7. bigint


const score = 100                                   
const scoreValue = 100.5           
const isLoggedIn = false       
const outsideTemp = null     
let userEmail; // undefined                         
  
const id = Symbol("123")               
const anotherId = Symbol("123")            
           
console.log(id === anotherId) // false, because each symbol is unique

const bigNumber = 9007199254740991n 
// bigint is used to represent numbers larger than 2^53 - 1, which is the maximum safe integer in JavaScript. It is denoted by appending 'n' at the end of the number.



// non-primitive data types (reference data types)
//1. object
//2. array
//3. function


const heros = ["ironman", "spiderman", "thor"] // array is a type of object
let myObj = {
    name: "anurag",
    age: 30,
    isLoggedIn: true
} // object

const myFunction = function() {
    console.log("hello world")
} // function is also a type of object, but it is callable, which means we can invoke it using parentheses.

console.log(typeof heros); // object
console.log(typeof myObj); // object
console.log(typeof myFunction); // function 
console.log(typeof null); // object (this is a bug in JavaScript, but it is kept for backward compatibility)
console.log(typeof undefined); // undefined
console.log(typeof 100); // number
console.log(typeof "anurag");// string
console.log(typeof true); // boolean
console.log(typeof Symbol("123")); // symbol
console.log(typeof 9007199254740991n); // bigint    
console.log(typeof NaN); // number (NaN stands for Not a Number, but it is of type number)
console.log(typeof Infinity); // number (Infinity is a special value that represents infinity, and it is of type number)
console.log(typeof outsideTemp); // object (null is of type object, but it is not an object, it is a primitive value that represents the absence of any object value)
console.log(typeof userEmail); // undefined (undefined is a primitive value that represents the absence of a value, and it is of type undefined)
console.log(typeof isLoggedIn); // boolean
console.log(typeof score); // number
console.log(typeof scoreValue); // number
console.log(typeof heros); // object
console.log(typeof bigNumber); // bigint
console.log(typeof myFunction); // function



// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN
// https://262.ecma-international.org/5.1/#sec-11.4.3   
