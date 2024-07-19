"use strict";

const obj = {};
const anotherObj = {};

// Hints

// "string"
// output
console.log(obj);

// using object as a property key
anotherObj[obj] = 123;

// "number"
// explicit conversion
let num = Number(obj);

// maths (except binary plus)
let n = +obj; // unary plus
// let delta = date1 - date2;

// less/greater comparison
// let greater = user1 > user2;

// "default"
const obj1 = {};
const obj2 = {};
const user2 = {};
// binary plus uses the "default" hint
let total = obj1 + obj2;

// obj == number uses the "default" hint
if (user2 == 1) {
}

// Symbol.toPrimitive
let user = {
  [Symbol.toPrimitive](hint) {
    console.log(`hint: ${hint}`);
    return hint == "string" ? `{name: "${this.name}"}` : this.money;
  },

  name: "John",
  money: 1000,
};

// conversions demo:
console.log(String(user)); // hint: string -> {name: "John"}
console.log(+user); // hint: number -> 1000
console.log(user + 500); // hint: default -> 1500

// toString/valueOf
let userJohhn = { name: "John" };

// The toString method returns a string
console.log(String(userJohhn)); // [object Object]
// The valueOf method returns the object itself.
console.log(userJohhn.valueOf() === userJohhn); // true

let userNew = {
  name: "John",
  money: 1000,

  // for hint="string"
  toString() {
    return `{name: "${this.name}"}`;
  },

  // for hint="number" or "default"
  valueOf() {
    return this.money;
  },
};

console.log(String(userNew)); // toString -> {name: "John"}
console.log(+userNew); // valueOf -> 1000
console.log(userNew + 500); // valueOf -> 1500

// In the absence of Symbol.toPrimitive and valueOf, toString will handle all primitive conversions.
let userNew2 = {
  name: "John",

  toString() {
    return this.name;
  },
};
console.log(String(userNew2)); // toString -> John
console.log(userNew2 + 500); // toString -> John500

// A conversion can return any primitive type
let obj2r = {
  // toString handles all conversions in the absence of other methods
  toString() {
    return "2";
  },
};

console.log(obj2r * 2); // 4, object converted to primitive "2", then multiplication made it a number

let obj3r = {
  toString() {
    return "2";
  },
};

console.log(obj3r + 2); // "22" ("2" + 2), conversion to primitive returned a string => concatenation
