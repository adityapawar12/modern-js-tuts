"use strict";

let userUsingConstructor = new Object(); // "object constructor" syntax
let userUsingLiteral = {}; // "object literal" syntax

// Literals and properties
let user = {
  // an object
  name: "John", // by key "name" store value "John"
  age: 30, // by key "age" store value 30
  //   "likes birds": true, // multiword property name must be quoted
};

// get property values of the object:
console.log(user.name); // John
console.log(user.age); // 30

// Add a value
user.isAdmin = true;

// Remove a value
delete user.age;

console.log(user);

// square bracket notation
// set
user["likes birds"] = true;

// get
console.log(user["likes birds"]); // true

// delete
delete user["likes birds"];

console.log(user);

let key = "name";
console.log(user[key]); // undefined
console.log(user.key); // undefined

// COMPUTED PROPERTIES
let fruit = "apple";

let bag = {
  [fruit]: 5, // the name of the property is taken from the variable fruit
  [fruit + "Computers"]: 5, // bag.appleComputers = 5
};

console.log(bag.apple); // 5 if fruit="apple"
console.log(bag);

// Property value shorthand
function makeUser(name, age) {
  return {
    // name: name,
    // age: age,
    name, // same as name: name
    // age, // same as age: age
    age: 30,
  };
}

let userShorthand = makeUser("John", 30);
console.log(userShorthand.name); // John

// Property names limitations
// these properties are all right
let obj = {
  for: 1,
  let: 2,
  return: 3,
  0: "test", // same as "0": "test"
};

console.log(obj.for + obj.let + obj.return); // 6

// both alerts access the same property (the number 0 is converted to string "0")
console.log(obj["0"]); // test
console.log(obj[0]); // test (same property)

obj.__proto__ = 5; // assign a number
console.log(obj.__proto__); // [object Object] - the value is an object, didn't work as intended

// Property existence test, “in” operator
let userExistence = {};

console.log(userExistence.noSuchProperty === undefined); // true means "no such property"

userExistence = { name: "John", age: 30, test: undefined };

console.log("age" in userExistence); // true, userExistence.age exists
console.log("blabla" in userExistence); // false, userExistence.blabla doesn't exist

console.log(userExistence.test); // it's undefined, so - no such property?

console.log("test" in userExistence); // true, the property does exist!

// The "for..in" loop
let userForInLoop = {
  name: "John",
  age: 30,
  isAdmin: true,
};

for (let key in userForInLoop) {
  // keys
  console.log(key); // name, age, isAdmin
  // values for the keys
  console.log(userForInLoop[key]); // John, 30, true
}

// Ordered like an object
let codes = {
  49: "Germany",
  41: "Switzerland",
  44: "Great Britain",
  // ..,
  1: "USA",
};

for (let code in codes) {
  console.log(code); // 1, 41, 44, 49
}

// assignment
let userAssign = {};

userAssign.name = "John";
userAssign.surname = "Smith";
userAssign.name = "Pete";
delete userAssign.name;

let schedule = {};

console.log(isEmpty(schedule)); // true

schedule["8:30"] = "get up";

console.log(isEmpty(schedule)); // false

function isEmpty(testObject) {
  for (let key in testObject) {
    return true;
  }

  return false;
}

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

let sum = 0;

for (let salary in salaries) {
  sum += salaries[salary];
}

console.log(sum);

let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

console.log(menu);
multiplyNumeric(menu);
console.log(menu);

function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] == "number") {
      obj[key] *= 2;
    }
  }
}
