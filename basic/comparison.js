console.log(2 > 1); // true because 2 is greater than 1
console.log(2 < 1); // false because 2 is not less than 1
console.log(2 >= 1); // true because 2 is greater than or equal to 1
console.log(2 <= 1);    // false because 2 is not less than or equal to 1           
console.log(2 == 1); // false because 2 is not equal to 1
console.log(2 != 1); // true because 2 is not equal to 1        
console.log(2 === 1); // false because 2 is not strictly equal to 1


console.log("2" > 1); // true because the string "2" is converted to the number 2 before the comparison is made
console.log("2" < 1); // false because the string "2" is converted to the number 2 before the comparison is made
console.log("2" >= 1); // true because the string "2" is converted to the number 2 before the comparison is made
console.log("2" <= 1); // false because the string "2" is converted to the number 2 before the comparison is made 
console.log("2" == 1); // false because the string "2" is converted to the number 2 before the comparison is made



console.log("02" > 1);      // true because the string "02" is converted to the number 2 before the comparison is made
console.log("02" < 1);    // false because the string "02" is converted to the number 2 before the comparison is made 


console.log(null > 0); // false because null is converted to 0 before the comparison is made
console.log(null < 0); // false because null is converted to 0 before the comparison is made                
console.log(null == 0); // false because null is not equal to 0, even though it is converted to 0 before the comparison is made
console.log(null >= 0); // true because null is converted to 0 before the comparison is made, and 0 is greater than or equal to 0
console.log(null <= 0); // true because null is converted to 0 before the comparison is made, and 0 is less than or equal to 0


console.log(undefined > 0); // false because undefined is converted to NaN before the comparison is made, and NaN is not greater than 0
console.log(undefined < 0); // false because undefined is converted to NaN before the comparison is made, and NaN is not less than 0            
console.log(undefined == 0); // false because undefined is not equal to 0, even though it is converted to NaN before the comparison is made
console.log(undefined >= 0); // false because undefined is converted to NaN before the comparison is made, and NaN is not greater than or equal to 0
console.log(undefined <= 0); // false because undefined is converted to NaN before the comparison is made, and NaN is not less than or equal to 0   


// ===


console.log(2 === 2); // true because both the value and the type are the same
console.log(2 === "2"); // false because the value is the same but the type is different (number vs string)
console.log(0 === false); // false because the value is different (0 vs false) and the type is different (number vs boolean)
console.log(null === undefined); // false because the value is different (null vs undefined) and the type is different (object vs undefined)        
console.log(2 == 2); // true because the value is the same, even though the type is not checked
console.log(2 == "2"); // true because the value is the same, even though the type is not checked (the string "2" is converted to the number 2 before the comparison is made)
console.log(0 == false); // true because the value is the same (0 vs false) and the type is not checked (the boolean false is converted to the number 0 before the comparison is made)
console.log(null == undefined); // true because null and undefined are considered equal when using the loose equality operator (==), even though they are of different types (object vs undefined)

