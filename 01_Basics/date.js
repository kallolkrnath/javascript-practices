let myDate = new Date();
console.log(myDate.toString()); // Mon Dec 16 2026 14:26:50 GMT+0530 (India Standard Time)
console.log(myDate.toDateString()); // Mon Dec 16 2026
console.log(myDate.toLocaleString()); // 16/12/2026, 2:26:50
console.log(typeof myDate); // object


let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(Math.floor(Date.now()/1000));


let newDate = new Date();
console.log(newDate); // 2026-12-16T02:26:50.000Z
console.log(newDate.getMonth() + 1); // 12
console.log(newDate.getDay()); // 1
console.log(newDate.getFullYear()); // 2026