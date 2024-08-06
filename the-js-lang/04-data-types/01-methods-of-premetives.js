"use strict";

// a special “object wrapper” that provides the extra functionality is created, and then is destroyed.
// The “object wrappers” are different for each primitive type and are called: String, Number, Boolean, Symbol and BigInt.

// string method using String Object Wrapper.
let str = "Hello";

console.log(str.toUpperCase()); // HELLO

// number method using Number Object Wrapper.
let n = 1.23456;

console.log(n.toFixed(2)); // 1.23

// Constructors String/Number/Boolean are for internal use only
console.log(typeof 0); // "number"
console.log(typeof new Number(0)); // "object"!

let zero = new Number(0);
if (zero) {
  // zero is true, because it's an object
  console.log("zero is truthy!?!");
}

let num = Number("123"); // convert a string to number

// null/undefined have no methods
console.log(null.test); // error

// assignment
let strTest = "Hello";

strTest.test = 5;

console.log(strTest.test);
