"use strict";

// Logical operators

// || (OR)
console.log(true || true); // true
console.log(false || true); // true
console.log(true || false); // true
console.log(false || false); // false

if (1 || 0) {
  // works just like if( true || false )
  console.log("truthy!");
}

let hour = 9;

if (hour < 10 || hour > 18) {
  console.log("The office is closed.");
}

// OR "||" finds the first truthy value
console.log(1 || 0); // 1 (1 is truthy)

console.log(null || 1); // 1 (1 is the first truthy value)
console.log(null || 0 || 1); // 1 (the first truthy value)

console.log(undefined || null || 0); // 0 (all falsy, returns the last value)

// Short-circuit evaluation.
true || console.log("not printed");
false || console.log("printed");

// && (AND)
console.log(true && true); // true
console.log(false && true); // false
console.log(true && false); // false
console.log(false && false); // false

let hour2 = 12;
let minute = 30;

if (hour2 == 12 && minute == 30) {
  console.log("The time is 12:30");
}

// AND “&&” finds the first falsy value
console.log(1 && 0); // 0
console.log(1 && 5); // 5
console.log(null && 5); // null
console.log(0 && "no matter what"); // 0
console.log(1 && 2 && null && 3); // null
console.log(1 && 2 && 3); // 3, the last one

// ! (NOT)
console.log(!true); // false
console.log(!0); // true

// A double NOT !! is sometimes used for converting a value to boolean
console.log(!!"non-empty string"); // true
console.log(!!null); // false

const age2 = 15;

if (age2 >= 14 && age2 <= 90) {
  console.log("oooolalalala");
} else {
  console.log("not oooolalalala");
}

if (!(age2 >= 14 && age2 <= 90)) {
  console.log("oooolalalala");
} else {
  console.log("not oooolalalala");
}

if (age2 < 14 && age2 > 90) {
  console.log("oooolalalala");
} else {
  console.log("not oooolalalala");
}

if (-1 || 0) console.log("first");
if (-1 && 0) console.log("second");
if (null || (-1 && 1)) console.log("third");

const visitorName = "Admin";
// const visitorName = "Admin2";
// const visitorName = null;
// let visitorName;

const password = "TheMaster";
// const password = "TheMaster2";
// const password = null;
// let password;

if (visitorName === null || visitorName === undefined) {
  console.log("Canceled");
} else if (visitorName !== "Admin") {
  console.log("I don't know you");
} else if (visitorName === "Admin") {
  if (password === null || password === undefined) {
    console.log("Canceled");
  } else if (password !== "TheMaster") {
    console.log("Wrong password");
  } else if (password === "TheMaster") {
    console.log("Welcome!");
  }
}
