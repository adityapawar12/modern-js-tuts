"use strict";

// functions
function showMessage() {
  console.log("Hello everyone!");
}
showMessage();

// local variables
function showMessage2() {
  let message = "Hello, I'm JavaScript!"; // local variable
  console.log(message);
}
showMessage2();
// console.log(message); // <-- Error! The variable is local to the function

// Outer variables
let userName = "John";
function showMessage3() {
  userName = "Bob"; // (1) changed the outer variable
  //   let userName = "Bob"; // declare a local variable which will shadow the outer one
  let message = "Hello, " + userName;
  console.log(message);
}
console.log(userName); // John before the function call
showMessage3();
console.log(userName); // Bob, the value was modified by the function

// Parameters
function showMessage4(from, text) {
  // parameters: from, text
  console.log(from + ": " + text);
}
showMessage4("Ann", "Hello!"); // Ann: Hello! (*)
showMessage4("Ann", "What's up?"); // Ann: What's up? (**)

function showMessage5(from, text) {
  from = "*" + from + "*"; // make "from" look nicer
  console.log(from + ": " + text);
}
let from = "Ann";
showMessage5(from, "Hello"); // *Ann*: Hello
// the value of "from" is the same, the function modified a local copy
console.log(from); // Ann

// Default parameter
function showMessage6(from, text = "no text given") {
  console.log(from + ": " + text);
}

showMessage6("Ann"); // Ann: no text given

// Returning a value
function sum(a, b) {
  return a + b;
}

let result = sum(1, 2);
console.log(result); // 3

function checkAge(age) {
  // There may be many occurrences of return in a single function
  if (age >= 18) {
    return true;
  } else {
    return confirm("Do you have permission from your parents?");
  }
}

let age = 18;

if (checkAge(age)) {
  console.log("Access granted");
} else {
  console.log("Access denied");
}

function showMovie(age) {
  if (!checkAge(age)) {
    return;
  }

  console.log("Showing you the movie"); // (*)
}

// A function with an empty return or without it returns undefined
function doNothing() {
  /* empty */
}

console.log(doNothing() === undefined); // true

function doNothing2() {
  return;
}

console.log(doNothing2() === undefined); // true

// FUNCTION NAMING
// showMessage(..)     // shows a message
// getAge(..)          // returns the age (gets it somehow)
// calcSum(..)         // calculates a sum and returns the result
// createForm(..)      // creates a form (and usually returns it)
// checkPermission(..) // checks a permission, returns true/false

// SELF DESCRIBING FUNCTIONS == COMMENTS
function showPrimes(n) {
  nextPrime: for (let i = 2; i < n; i++) {
    for (let j = 2; j < i; j++) {
      if (i % j == 0) continue nextPrime;
    }

    alert(i); // a prime
  }
}

function showPrimes2(n) {
  for (let i = 2; i < n; i++) {
    if (!isPrime(i)) continue;

    alert(i); // a prime
  }
}

function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i == 0) return false;
  }
  return true;
}

// assignments
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return false;
  }
}

function checkAge2(age) {
  return age > 18 ? true : false;
}

function checkAge2(age) {
  return age > 18 || false;
}

function min(firstNumber, secondNumber) {
  if (firstNumber < secondNumber) {
    return firstNumber;
  }

  return secondNumber;
}

let minValue;
minValue = min(2, 5);
console.log(minValue);
minValue = min(3, -1);
console.log(minValue);
minValue = min(1, 1);
console.log(minValue);

function pow(x, n) {
  return x ** n;
}

let powValue;
powValue = pow(3, 2);
console.log(powValue);
powValue = pow(3, 3);
console.log(powValue);
powValue = pow(1, 100);
console.log(powValue);
