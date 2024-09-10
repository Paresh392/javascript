const accountId = 223344
let accountEmail = "paresh@google.com"
var accountPassword = "12345"
accountCity = "patna"
let accountState;

// accountId = 2 // not allowed


accountEmail = "pk@pk.com"
accountPassword = "2345678"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])