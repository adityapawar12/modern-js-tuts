"use strict";

// IF STATEMENT
// let year = 2033;
let year = 2015;

if (year == 2015) console.log("You are right!");

if (year == 2015) {
  console.log("You are right!");
  console.log("And smart!");
}

// A number 0, an empty string "", null, undefined, and NaN all become false
if (0) {
  // 0 is falsy
  console.log("ALWAYS FALSY");
}

if (1) {
  // 1 is truthy
  console.log("ALWAYS TRUTHY");
}

// ELSE BLOCK
if (year == 2015) {
  console.log("You guessed it right!");
} else {
  console.log("How can you be so wrong?"); // any value except 2015
}

// ELSE IF BLOCK
if (year < 2015) {
  console.log("Too early...");
} else if (year > 2015) {
  console.log("Too late");
} else {
  console.log("Exactly!");
}

// TERNARY OPERATOR
let age = 19;

let accessAllowed = age > 18 ? true : false;

// MULTIPLE TERNARY OPERATORS
let message =
  age < 3
    ? "Hi, baby!"
    : age < 18
    ? "Hello!"
    : age < 100
    ? "Greetings!"
    : "What an unusual age!";

console.log(message);

// assignment
let answer = "ECMAScript";

if (answer === "ECMAScript") {
  console.log("Right!");
} else {
  console.log("You don’t know? ECMAScript!");
}

let answer2 = 4;

if (answer2 < 0) {
  console.log("-1");
} else if (answer2 > 0) {
  console.log("1");
} else {
  console.log("0");
}

// let result = a + b < 4 ? "Below" : "Over";

// let message2 =
//   login == "Employee"
//     ? "Hello"
//     : login == "Director"
//     ? "Greetings"
//     : login == ""
//     ? "No login"
//     : "";
