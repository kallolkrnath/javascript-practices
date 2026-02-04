const score = 400
console.log(score); // 400 

const balance = new Number(100)
console.log(balance); // [Number: 100]

console.log(balance.toString().length); // 3 
console.log(balance.toFixed(2)); // 100.00

const otherNumber = 123.8966

console.log(otherNumber.toPrecision(4)); // 123.9

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')); // 10,00,000