"use strict";

// function
function sayHi() {
  console.log("Hello");
}

// function expression
let sayHi2 = function () {
  console.log("Hello");
};

// function is a value(special one)
function sayHi3() {
  console.log("Hello");
}

console.log(sayHi3); // shows the function code

function sayHi4() {
  // (1) create
  console.log("Hello");
}

let func = sayHi4; // (2) copy

func(); // Hello     // (3) run the copy (it works)!
sayHi4(); // Hello    //     this still works too (why wouldn't it)

// Callback functions
function ask(answer, yes, no) {
  if (answer) yes();
  else no();
}

function showOk() {
  console.log("You agreed.");
}

function showCancel() {
  console.log("You canceled the execution.");
}

// usage: functions showOk, showCancel are passed as arguments to ask
ask(true, showOk, showCancel);
ask(false, showOk, showCancel);

// annonymous functions
ask(
  "Do you agree?",
  function () {
    console.log("You agreed.");
  },
  function () {
    console.log("You canceled the execution.");
  }
);

// A Function Expression is created when the execution reaches it and is usable only from that moment.
sayHiTo("John"); // Hello, John
function sayHiTo(name) {
  console.log(`Hello, ${name}`);
}

// A Function Declaration can be called earlier than it is defined.
// sayHiOneMoreTime("John"); // error!
let sayHiOneMoreTime = function (name) {
  // (*) no magic any more
  console.log(`Hello, ${name}`);
};

// In strict mode, when a Function Declaration is within a code block, it’s visible everywhere inside that block. But not outside of it.
let age = 18;

// conditionally declare a function
if (age < 18) {
  function welcome() {
    console.log("Hello!");
  }
} else {
  function welcome() {
    console.log("Greetings!");
  }
}

// ...use it later
// welcome(); // Error: welcome is not defined

let welcome;

if (age < 18) {
  welcome = function () {
    console.log("Hello!");
  };
} else {
  welcome = function () {
    console.log("Greetings!");
  };
}

welcome(); // ok now
