"use strict";

// UNARY OPERATOR
let x = 1;

x = -x;
console.log(x);

// BINARY OPERATOR
let z = 1,
  y = 3;
console.log(y - z); // 2, binary minus subtracts values

// BASIC MATH OPERATIONS
console.log(5 + 2);
console.log(5 - 2);
console.log(5 * 2);
console.log(5 / 2);
console.log(5 % 2); // Remainder %
console.log(5 ** 2); // Exponentiation **
console.log(4 ** (1 / 2));

// String concatenation with binary +
let s = "my" + "string";
console.log(s);

console.log("1" + 2); // "12"
console.log(2 + "1"); // "21"

console.log(2 + 2 + "1"); // "41" and not "221"
console.log("1" + 2 + 2); // "122" and not "14"

// UNARY PLUS
// Converts non-numbers
console.log(+true); // 1
console.log(+""); // 0

// ASSIGNMENT OPERATOR
// Assignment = returns a value
let a = 1;
let b = 2;

let c = 3 - (a = b + 1);

console.log(a); // 3
console.log(c); // 0

// CHAINING ASSIGNMENTS
let p, q, r;

p = q = r = 2 + 2;

console.log(p, q, r);

// Modify-in-place

let n = 2;
n = n + 5;
n = n * 2;

let n2 = 2;
n2 += 5; // now n = 7 (same as n = n + 5)
n2 *= 2; // now n = 14 (same as n = n * 2)
n2 *= 3 + 5; // right part evaluated first, same as n *= 8

// Increment/decrement
let counter = 2;
counter++;
console.log(counter);
counter--;
console.log(counter);

// to increase a value and immediately use prefix
counter = 0;
console.log(++counter); // 1
// to increase a value and immediately use postfix
counter = 0;
console.log(counter++); // 0

// COMMA OPERATOR
let comma = (1 + 2, 3 + 4);

console.log(comma); // 7 (the result of 3 + 4)
