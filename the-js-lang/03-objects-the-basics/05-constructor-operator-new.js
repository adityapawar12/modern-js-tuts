"use strict";

// Constructor functions. named with capital letter first. executed only with "new" operator.
function User(name) {
  // this = {};  (implicitly)

  // add properties to this
  this.name = name;
  this.isAdmin = false;

  // return this;  (implicitly)
}

let user = new User("Jack");

console.log(user.name); // Jack
console.log(user.isAdmin); // false

// Constructor mode test: new.target
function UserConstruct() {
  console.log(new.target);
}

// without "new":
UserConstruct(); // undefined

// with "new":
new UserConstruct(); // function User { ... }

function UserConstructWithFallback(name) {
  if (!new.target) {
    // if you run me without new
    return new UserConstructWithFallback(name); // ...I will add new for you
  }

  this.name = name;
}

let john = UserConstructWithFallback("John"); // redirects call to new User
console.log(john.name); // John

// Return from constructors
function BigUser() {
  this.name = "John";

  return { name: "Godzilla" }; // <-- returns this object
}

console.log(new BigUser().name); // Godzilla, got that object

function SmallUser() {
  this.name = "John";

  return; // <-- returns this
}

console.log(new SmallUser().name); // John

// let userNew1 = new User; // <-- no parentheses
// same as
// let userNew2 = new User();

// Methods in constructor
function UserWithMethod(name) {
  this.name = name;

  this.sayHi = function () {
    console.log("My name is: " + this.name);
  };
}

let ron = new UserWithMethod("Ron");

ron.sayHi(); // My name is: Ron

// assignment
// function Calculator() {
//   this.num1 = 0;
//   this.num2 = 0;
//   this.sum = function sum() {
//     return Number(this.num1) + Number(this.num2);
//   };
//   this.mul = function mul() {
//     return Number(this.num1) * Number(this.num2);
//   };
//   this.read = function read() {
//     const readline = require("readline").createInterface({
//       input: process.stdin,
//       output: process.stdout,
//     });

//     readline.question("Number 1 and 2(comma seperated) : ", (numbers) => {
//       this.num1 = numbers.split(",")[0];
//       this.num2 = numbers.split(",")[1];
//       readline.close();
//       console.log("calculating...");
//       //   console.log(this.sum());
//       //   console.log(this.mul());
//     });
//   };
// }
// let calculator = new Calculator();
// calculator.read();

// setTimeout(() => {
//   console.log("Sum:", calculator.sum());
//   console.log("Product:", calculator.mul());
// }, 5000); // Timeout to simulate asynchronous behavior

function Accumulator(startingValue) {
  this.value = startingValue;
  this.startingValue = startingValue;

  this.read = () => {
    const readline = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readline.question("Number 1 and 2(comma seperated) : ", (number) => {
      this.value += Number(number);
      readline.close();
    });
  };
}

let accumulator = new Accumulator(4); // initial value 1

accumulator.read(); // adds the user-entered value

setTimeout(() => {
  console.log(accumulator.value); // shows the sum of these values
}, 2000); // Timeout to simulate asynchronous behavior

setTimeout(() => {
  accumulator.read(); // adds the user-entered value
}, 2000); // Timeout to simulate asynchronous behavior

setTimeout(() => {
  console.log(accumulator.value); // shows the sum of these values
}, 2000); // Timeout to simulate asynchronous behavior
