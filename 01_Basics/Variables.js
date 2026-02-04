// console.log() is used to print something to the console
console.log("Hello World!");

// You can also show alerts in the browser
alert("Hello World!");


// Use `const` by default. (for values that won't change)
// Use `let` when you need to reassign values.
// Avoid using `var` in modern JavaScript.

const accountId = "DecodeNight"
let accountEmail = "kallol@google.com"
var accountPassword = "12345"
let accountState;

// accountId = 23545 // not allowed
accountEmail = "hc@hc.com"
accountPassword = "21212121"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountState])