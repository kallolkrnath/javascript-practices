/* 
1. Declare an array named `teaFlavors` that contains the strings `"green tea"`, `"black tea"`, and `"oolong tea"`. 
   Access the first element of the array and store it in a variable named `firstTea`.
*/

let teaFlavors = ["green tea", "black tea", "oolong tea"];

const firstTea = teaFlavors[0];

/* 
2. Declare an array named `cities` containing `"London"`, `"Tokyo"`, `"Paris"`, and `"New York"`. 
   Access the third element in the array and store it in a variable named `favoriteCity`.
*/

let cities = ["London", "Tokyo", "Paris", "New York"];
const favoriteCity = cities[2];

/* 
3. You have an array named `teaTypes` containing `"herbal tea"`, `"white tea"`, and `"masala chai"`. 
   Change the second element of the array to `"jasmine tea"`.
*/

let teaTypes = ["herbel tea", "white tea", "masala chai"];
teaTypes[1] = "jasmine tea";
console.log(teaTypes); 

/* 
4. Declare an array named `citiesVisited` containing `"Mumbai"` and `"Sydney"`. 
   Add `"Berlin"` to the array using the `push` method.
*/

let citiesVisited = ["Mumbai", "Sydney"];
citiesVisited.push("Berlin");
console.log(citiesVisited);

/* 
5. You have an array named `teaOrders` with `"chai"`, `"iced tea"`, `"matcha"`, and `"earl grey"`. 
   Remove the last element of the array using the `pop` method and store it in a variable named `lastOrder`.
*/

let teaOrders = ["chai", "iced tea", "matcha", "earl grey"];
const lastOrder = teaOrders.pop();
console.log(teaOrders);
console.log(lastOrder);

/* 
6. You have an array named `popularTeas` containing `"green tea"`, `"oolong tea"`, and `"chai"`. 
   Create a soft copy of this array named `softCopyTeas`.
*/

let popularTeas = ["green tea", "oolong tea", "chai"];
let softCopyTeas = popularTeas;
console.log(softCopyTeas);

popularTeas.pop(); // soft copy means if you change the original array it will also affect the soft copy.
console.log(softCopyTeas);
console.log(popularTeas);

/* 
7. You have an array named `topCities` containing `"Berlin"`, `"Singapore"`, and `"New York"`. 
   Create a hard copy of this array named `hardCopyCities`.
*/

let topCities = ["Berlin", "Singapore", "New York"];
let hardCopyCities = [...topCities];
// let hardCopyCities = topCities.slice(); // another way
topCities.pop(); // hard copy means if you change the original array it will not affect the hard copy.
console.log(topCities);
console.log(hardCopyCities);

/* 
8. You have two arrays: `europeanCities` containing `"Paris"` and `"Rome"`, and `asianCities` containing `"Tokyo"` and `"Bangkok"`. 
   Merge these two arrays into a new array named `worldCities`.
*/

let europeanCities = ["Paris", "Rome"];
let asianCities = ["Tokyo", "Bangkok"];
let worldCities = europeanCities.concat(asianCities);

console.log(worldCities); 

/* 
9. You have an array named `teaMenu` containing `"masala chai"`, `"oolong tea"`, `"green tea"`, and `"earl grey"`. 
   Find the length of the array and store it in a variable named `menuLength`.
*/

let teaMenu = ["Masala chai", "oolong tea", "green tea", "earl grey"];

let menuLength = teaMenu.length;
console.log(menuLength);

/* 
10. You have an array named `cityBucketList` containing `"Kyoto"`, `"London"`, `"Cape Town"`, and `"Vancouver"`. 
    Check if `"London"` is in the array and store the result in a variable named `isLondonInList`.
*/

let cityBucketList = ["Kyoto", "London", "Cape Town", "Vancouver"];

let isLondonInList = cityBucketList.includes("London");
console.log(isLondonInList);

/*
11.Write a function that takes an array of numbers and returns the largest number.
*/ 

function findLargestNumber(arr) {
  let largest = arr[0];  // Assume first element is the largest
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];  // Update largest if current element is bigger
    }
  }
  return largest;
}

let numbers = [12, 34, 56, 1, 99];
console.log(findLargestNumber(numbers));  // Output: 99

/*
12. Write a function that takes an array and returns a new array that is the reverse of the original.
*/

function reverseArray(arr) {
  let reversed = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);  // Add elements in reverse order
  }
  return reversed;
}

let letters = ['a', 'b', 'c', 'd'];
console.log(reverseArray(letters));  // Output: ['d', 'c', 'b', 'a']

/* 
13. Write a function that calculates the sum of all the numbers in an array
*/

function sumArray(arr) {
  let sum = 0;
  arr.forEach(function(num) {
    sum += num;
  });
  return sum;
}

let nums = [5, 10, 15, 20];
console.log(sumArray(nums));  // Output: 50

/* 
14. Write a function that returns the index of a specific element in an array. If the element is not found, return -1.
*/

function findIndex(arr, element) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
      return i;
    }
  }
  return -1;  // If the element is not found
}

let fruits = ["apple", "banana", "cherry"];
console.log(findIndex(fruits, "banana"));  // Output: 1
console.log(findIndex(fruits, "grape"));   // Output: -1

/*
15. Write a function that takes an array of numbers and returns a new array containing only the even numbers.
*/

function filterEvenNumbers(arr) {
  let evenNumbers = [];
  arr.forEach(function(num) {
    if (num % 2 === 0) {
      evenNumbers.push(num);
    }
  });
  return evenNumbers;
}

let number = [1, 2, 3, 4, 5, 6];
console.log(filterEvenNumbers(number));  // Output: [2, 4, 6]