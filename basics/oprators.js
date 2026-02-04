// Logical Operators
console.log(true && false); // Logical AND: false
console.log(true || false); // Logical OR: true
console.log(!true); // Logical NOT: false

// Bitwise Operators
console.log(a & b); // Bitwise AND: 0
console.log(a | b); // Bitwise OR: 7
console.log(a ^ b); // Bitwise XOR: 7
console.log(~a); // Bitwise NOT: -6
console.log(a << b); // Left shift: 20
console.log(a >> b); // Right shift: 1

// Assignment Operators
let x = 10;

x += 5; // Addition assignment: x = x + 5, now x is 15
x -= 3; // Subtraction assignment: x = x - 3, now x is 12
x *= 2; // Multiplication assignment: x = x * 2, now x is 24
x /= 4; // Division assignment: x = x / 4, now x is 6
x %= 3; // Modulus assignment: x = x % 3, now x is 0
x **= 2; // Exponentiation assignment: x = x ** 2, now x is 0

// Arithmetic Operators
let a = 5, b = 2;

console.log(a + b); // Addition: 7
console.log(a - b); // Subtraction: 3
console.log(a * b); // Multiplication: 10
console.log(a / b); // Division: 2.5
console.log(a % b); // Modulus (remainder): 1
console.log(a ** b); // Exponentiation: 25

// Comparison Operators
console.log(a == b); // Equal value: false
console.log(a === b); // Equal value and type: false
console.log(a != b); // Not equal value: true
console.log(a !== b); // Not equal value or type: true
console.log(a > b); // Greater than: true
console.log(a < b); // Less than: false
console.log(a >= b); // Greater than or equal: true
console.log(a <= b); // Less than or equal: false

// Ternary (Conditional) Operator
let isAdult = (age >= 18) ? "Yes" : "No";

// Type Operators
console.log(typeof "Hello"); // typeof: string
console.log(typeof 5); // typeof: number
console.log(5 instanceof Number); // instanceof: false for primitive types

// Spread Operator (...)
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5]; // Spreads arr1 into a new array with additional elements

// Destructuring Assignment
let [first, second] = [1, 2, 3]; // first = 1, second = 2
let { name, age } = { name: "Alice", age: 25 }; // name = "Alice", age = 25

// Nullish Coalescing Operator (??)
let foo = null ?? "default string"; // foo = "default string"

// Optional Chaining (?.)
let user = {};
console.log(user?.name); // Safe access to 'name', returns undefined if user is null/undefined