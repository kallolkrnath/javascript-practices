// Data Types
let num = 21; // Number (integer, decimal, negetive, infinity, NaN)
let str = "String"; // String (Strings can use single or double quotes)
let greeting = `My name is John and I am ${num} years old`;
let bool = true; // Boolean
let isAdult = age >= 18;  // This will be true or false based on age
let nul = null; // Null
let undef = undefined; // Undefined (When a variable is declared but not assigned a value)
let sym = Symbol("description"); // Symbol

// Symbols are unique identifiers
let Symbol1 = Symbol("description");
let Symbol2 = Symbol("description");
console.log(Symbol1 === Symbol2);  // Shows: false

// You can check the type of any value using typeof 
console.log(typeof "Hello");     // "string"
console.log(typeof 42);          // "number"
console.log(typeof true);        // "boolean"
console.log(typeof undefined);   // "undefined"
console.log(typeof null);        // "object"
console.log(typeof [1,2,3]);     // "object"
console.log(typeof {name: "John"}); // "object"


