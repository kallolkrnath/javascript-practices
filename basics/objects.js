const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
console.log(JsUser);



const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

console.log(tinderUser); // { id: '123abc', name: 'Sammy', isLoggedIn: false }

const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstname: "hitesh",
      lastname: "choudhary",
    },
  },
};

console.log(regularUser.fullname.userfullname.firstname); // hitesh


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor); // hitesh