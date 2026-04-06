"use strict" //treats all JS code as newer version
// alert (3 + 3) // we are using node js, not browser, so alert is not defined

console.log(3 
    + 
    3) // this will print 3 + 3 as string

    // code readability is important, so we should write code in a way that is easy to read and understand


    // https://tc39.es/ecma262/ important link for JS specification 😎

console.log("anurag") 

let name = "anurag"
let age = 21
let isLoggedIn = false
let state; 


// number => 2 to power 53 
// bigint
// string => ""
// boolean => true/false
// null => standalone value that represents nothing
// undefined => variable that is declared but not assigned a value
// symbol => unique identifier
// object => key value pair, used to store data in structured way

console.log(typeof name) // string
console.log(typeof age) // number
console.log(typeof isLoggedIn) // boolean
console.log(typeof state) // undefined


console.log(typeof null) // object (this is a bug in JS, but we have to live with it)
console.log(typeof undefined) // undefined
console.log(typeof Symbol("id")) // symbol
console.log(typeof {}) // object