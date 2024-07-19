"use strict";

let user = {
  name: "John",
  age: 30,
};

// Method examples
user.sayHi = function () {
  console.log("Hello!");
};

user.sayHi();

// first, declare
function sayHiAgain() {
  console.log("Hello!");
}

// then add as a method
user.sayHiAgain = sayHiAgain;

user.sayHiAgain(); // Hello!

// Method Shorthand
let goalKeeper = {
  name: "neur",
  sayHi() {
    // same as "sayHi: function(){...}"
    console.log("Hello");
  },
};

// “this” in methods
let walterWhite = {
  name: "Walter",
  sayMyName() {
    console.log(`SAY MY NAME, ${this.name}`);
  },
};

walterWhite.sayMyName();

let userError = {
  name: "John",
  age: 30,

  sayHi() {
    // console.log(userError.name); // leads to an error
    console.log(this.name); // solves an error
  },
};

let admin = userError;
userError = null; // overwrite to make things obvious

admin.sayHi(); // TypeError: Cannot read property 'name' of null

// “this” is not bound
let normalUser = { name: "John" };
let superAdmin = { name: "Admin" };

function sayHiWithThis() {
  console.log(this.name);
}

// use the same function in two objects
normalUser.f = sayHiWithThis;
superAdmin.f = sayHiWithThis;

// these calls have different this
// "this" inside the function is the object "before the dot"
normalUser.f(); // John  (this == normalUser)
superAdmin.f(); // Admin  (this == superAdmin)

superAdmin["f"](); // Admin (dot or square brackets access the method – doesn't matter)

// Calling without an object: this == undefined(in strict mode) and window object in non strict mode which is a legacy behaviour fixed in newer versions.
function sayHello() {
  console.log(this);
}

sayHello(); // undefined

// Arrow functions have no “this”
// here arrow() uses this from the outer user.sayHi() method
let ilyaUser = {
  firstName: "Ilya",
  sayHi() {
    let arrow = () => console.log(this.firstName);
    arrow();
  },
};

ilyaUser.sayHi(); // Ilya

// assignment
function makeUser() {
  return {
    name: "John",
    ref: this,
  };
}

let user25 = makeUser();

// console.log(user.ref.name); // Error: Cannot read property 'name' of undefined

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function () {
    // shows the current step
    console.log(this.step);
    return this;
  },
};
// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep(); // 1
// ladder.down();
// ladder.showStep(); // 0

ladder.up().up().down().showStep().down().showStep();

let calculator = {
  num1: 0,
  num2: 0,
  sum() {
    return Number(this.num1) + Number(this.num2);
  },
  mul() {
    return Number(this.num1) * Number(this.num2);
  },
  read() {
    const readline = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readline.question("Number 1 and 2(comma seperated) : ", (numbers) => {
      this.num1 = numbers.split(",")[0];
      this.num2 = numbers.split(",")[1];
      readline.close();
      console.log(calculator.sum());
      console.log(calculator.mul());
    });
  },
};

calculator.read();
