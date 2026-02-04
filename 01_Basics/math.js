console.log(Math); // run into console
console.log(Math.abs(-4)); // 4
console.log(Math.round(4.6)); // 5
console.log(Math.ceil(4.2)); // 5
console.log(Math.floor(4.9)); // 4
console.log(Math.min(4, 3, 6, 8)); // 3
console.log(Math.max(4, 3, 6, 8)); // 8

console.log(Math.random()); // 0.3446444347193577
console.log((Math.random()*10) + 1); // 8.10199375997105
console.log(Math.floor(Math.random()*10) + 1); // 10


const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)