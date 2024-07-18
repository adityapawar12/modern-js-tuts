"use strict";

// no error
let message = "hello";
message = 123456;

// NUMBER
let n = 123;
n = 12.345;

console.log(" n ", n);
console.log(1 / 0);
console.log("not a number" / 2);

// BIGINT
// the "n" at the end means it's a BigInt
const bigInt = 1234567890123456789012345678901234567890n;

console.log(" bigInt ", bigInt);

// STRINGS
let str = "Hello";
let str2 = "Single quotes are ok too";
let phrase = `can embed another ${str}`;

console.log(" phrase ", phrase);

// BOOLEANS
let nameFieldChecked = true; // yes, name field is checked
let ageFieldChecked = false; // no, age field is not checked
let isGreater = 4 > 1;

console.log(" isGreater ", isGreater);

// NULL
let age = null;

console.log(" age ", age);

// UNDEFINED
let age2;

console.log(" age2 ", age2);
