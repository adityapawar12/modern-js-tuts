"use strict";

let sum = (a, b) => a + b;

/* This arrow function is a shorter form of:

let sum = function(a, b) {
  return a + b;
};
*/

console.log(sum(1, 2)); // 3

// If we have only one argument, then parentheses around parameters can be omitted
let double = (n) => n * 2;
// roughly the same as: let double = function(n) { return n * 2 }

console.log(double(3)); // 6

// If there are no arguments, parentheses are empty, but they must be present
let sayHi = () => console.log("Hello!");

sayHi();

let age = 18;

let welcome =
  age < 18 ? () => console.log("Hello!") : () => console.log("Greetings!");

welcome();

// multiline Arrow functions
let sum2 = (a, b) => {
  // the curly brace opens a multiline function
  let result = a + b;
  return result; // if we use curly braces, then we need an explicit "return"
};

console.log(sum2(1, 2)); // 3

function ask(answer, yes, no) {
  if (answer) yes();
  else no();
}

ask(
  true,
  () => {
    console.log("You agreed.");
  },
  () => {
    console.log("You canceled the execution.");
  }
);
