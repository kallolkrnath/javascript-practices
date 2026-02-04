// Different ways to create strings
let firstName = "John"; // Using double quotes
let lastName = "Doe"; // Using single quotes
let fullName = `${firstName} ${lastName}`; // Using template literals

// Multi-line strings
let message = `
    Hello,
    This is a multi-line
    string using template literals
`;

// length property
let text = "JavaScript";
console.log(text.length); // 10

// toUpperCase and toLowerCase methods
console.log(text.toUpperCase()); // "JAVASCRIPT"
console.log(text.toLowerCase()); // "javascript"

// indexOf and lastIndexOf method
let str = "Hello, world!";
console.log(str.indexOf("o")); // 4
console.log(str.lastIndexOf("o")); // 8

// Accessing characters
console.log(text[0]);      // "H"
console.log(text[1]);      // "e"

// Substring and slice methods
console.log(str.substring(7, 12)); // "world"
console.log(str.slice(0, 5)); // "Hello"

// Replace and replaceAll method
let sentence = "I love coding. Coding is fun!";
console.log(sentence.replace("Coding", "JavaScript")); // "I love coding. JavaScript is fun!"
console.log(sentence.replaceAll("Coding", "JavaScript")); // "I love JavaScript. JavaScript is fun!"

// trim method
let spaced = "   Hello, world!   ";
console.log(spaced.trim()); // "Hello, world!"

// split method
let fruits = "apple, banana, cherry";
let fruitArray = fruits.split(", ");
console.log(fruitArray); // ["apple", "banana", "cherry"]

// charAt and charCodeAt method
console.log(str.charAt(1)); // "e"
console.log(str.charCodeAt(1)); // 101

// includes and startsWith and endsWith methods
console.log(str.includes("world")); // true
console.log(str.startsWith("Hello")); // true
console.log(str.endsWith("!")); // true

// Combining Methods
let phrase = "   JavaScript is amazing!   ";
let cleanPhrase = phrase.trim().toUpperCase();
console.log(cleanPhrase); // "JAVASCRIPT IS AMAZING!"

/*
- `length` : Returns the number of characters in a string.
- `toUpperCase()` : Converts the string to uppercase.
- `toLowerCase()` : Converts the string to lowercase.
- `indexOf()` : Finds the position of the first occurrence of a specified value.
- `lastIndexOf()` : Finds the position of the last occurrence of a specified value.
- `slice()`: Extracts a part of a string and returns it as a new string. It takes a start index and an optional end index (not inclusive).
- `substring()` : Similar to **slice()**, but it does not accept negative indices.
- `replace()` : Replaces the first occurrence of a specified value with another value.
- `replaceAll()` : Replaces all occurrences of a specified value.
- `trim()` : Removes whitespace from both ends of a string.
- `trimStart()` : Removes whitespace from the start of a string. 
- `trimEnd()` : Removes whitespace from both the end of a string.
- `split()` : Splits a string into an array of substrings based on a specified separator.
- `charAt()` : Returns the character at a specified index.
- `charCodeAt()` : Returns the Unicode of the character at a specified index.
- `includes()` : Checks if a string contains a specified value.
- `startsWith()` : Checks if a string starts with a specified value.
- `endsWith()` : Checks if a string ends with a specified value.
*/