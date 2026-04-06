const accountId = 758385
let accountEmail = "anuragsharma@gmail.com"
var accountPassword = "12345"
accountCity = "Indore"
let accountState;
// accountId = 2 // not allowed

accountEmail = "anu@gmail.com"
accountPassword = "7894587"
accountCity = "dewas"


/*
Prefer not to use var 
because of issue in block scope and functional scope
*/
console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
