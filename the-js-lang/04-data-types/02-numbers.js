// "use strict";

// let billion = 1000000000;

// // We also can use underscore _ as the separator
// let billionWithUnderscores = 1_000_000_000;

// console.log(billion);
// console.log(billionWithUnderscores);

// // In JavaScript, we can shorten a number by appending the letter "e" to it and specifying the zeroes count
// let billionShorthand = 1e9; // 1 billion, literally: 1 and 9 zeroes
// console.log(7.3e9); // 7.3 billions (same as 7300000000 or 7_300_000_000)

// // e multiplies the number by 1 with the given zeroes count.
// 1e3 === 1 * 1000; // e3 means *1000
// 1.23e6 === 1.23 * 1000000; // e6 means *1000000

// let mcs = 0.000001;

// let mcsShorthand = 1e-6; // five zeroes to the left from 1

// // a negative number after "e" means a division by 1 with the given number of zeroes
// // -3 divides by 1 with 3 zeroes
// 1e-3 === 1 / 1000; // 0.001

// // -6 divides by 1 with 6 zeroes
// 1.23e-6 === 1.23 / 1000000; // 0.00000123

// // an example with a bigger number
// 1234e-2 === 1234 / 100; // 12.34, decimal point moves 2 times

// // Hex, binary and octal numbers
// console.log(0xff); // 255
// console.log(0xff); // 255 (the same, case doesn't matter)

// // Binary
// let a = 0b11111111; // binary form of 255

// // Octal
// let b = 0o377; // octal form of 255

// // Hex
// let c = 0xff; // hex form of 255

// console.log(a == b); // true, the same number 255 at both sides
// console.log(a == c); // true, the same number 255 at both sides

// // toString(base) returns a string representation of num in the numeral system with the given base.
// let num2 = 255;

// // base=16 is used for hex colors, character encodings etc
// console.log(num2.toString(16)); // ff
// // base=2 is mostly for debugging bitwise operations, digits can be 0 or 1.
// console.log(num2.toString(2)); // 11111111
// // base=36 is the maximum, digits can be 0..9 or A..Z. The whole Latin alphabet is used to represent a number.
// console.log(num2.toString(36)); // 73

// // Two dots to call a method
// // JavaScript syntax implies the decimal part after the first dot. And if we place one more dot, then JavaScript knows that the decimal part is empty
// // console.log(123456..toString(36)); // 2n9c
// console.log((123456).toString(36)); // 2n9c

// // Rounding
// const roundingNumber1 = 3.1;
// const roundingNumber2 = 3.6;
// const roundingNumber3 = -3.1;
// const roundingNumber4 = -3.6;

// // Rounds down the number
// console.log(
//   Math.floor(roundingNumber1),
//   Math.floor(roundingNumber2),
//   Math.floor(roundingNumber3),
//   Math.floor(roundingNumber4)
// );

// // Rounds up the number
// console.log(
//   Math.ceil(roundingNumber1),
//   Math.ceil(roundingNumber2),
//   Math.ceil(roundingNumber3),
//   Math.ceil(roundingNumber4)
// );

// // Rounds to the nearest number
// console.log(
//   Math.round(roundingNumber1),
//   Math.round(roundingNumber2),
//   Math.round(roundingNumber3),
//   Math.round(roundingNumber4)
// );

// // Removes anything after the decimal point without rounding
// console.log(
//   Math.trunc(roundingNumber1),
//   Math.trunc(roundingNumber2),
//   Math.trunc(roundingNumber3),
//   Math.trunc(roundingNumber4)
// );

// // toFixed(n) rounds the number similar to Math.round to n digits after the point and returns a string
// console.log(roundingNumber1.toFixed(1)); // "3.1"
// // If the decimal part is shorter than required, zeroes are appended to the end:
// console.log(roundingNumber2.toFixed(4)); // "3.6000"

// // Imprecise calculations
// // Internally, a number is represented in 64-bit format IEEE-754, so there are exactly 64 bits to store a number:
// // 52 of them are used to store the digits, 11 of them store the position of the decimal point, and 1 bit is for the sign.

// // If a number is really huge, it may overflow the 64-bit storage and become a special numeric value Infinity
// console.log(1e500); // Infinity

// // loss of precision
// console.log(0.1 + 0.2 == 0.3); // false
// console.log(0.1 + 0.2); // 0.30000000000000004

// // A number is stored in memory in its binary form, a sequence of bits – ones and zeroes.
// // But fractions like 0.1, 0.2 that look simple in the decimal numeric system are actually unending fractions in their binary form.
// console.log((0.1).toString(2)); // 0.0001100110011001100110011001100110011001100110011001101
// console.log((0.2).toString(2)); // 0.001100110011001100110011001100110011001100110011001101
// console.log((0.1 + 0.2).toString(2)); // 0.0100110011001100110011001100110011001100110011001101

// // There’s just no way to store exactly 0.1 or exactly 0.2 using the binary system, just like there is no way to store one-third as a decimal fraction
// // The numeric format IEEE-754 solves this by rounding to the nearest possible number.
// // These rounding rules normally don’t allow us to see that “tiny precision loss”, but it exists.
// console.log((0.1).toFixed(20)); // 0.10000000000000000555

// // the most reliable method is to round the result with the help of a method toFixed(n):
// let sum = 0.1 + 0.2;
// console.log(sum.toFixed(2)); // "0.30"

// // The funny thing
// // Hello! I'm a self-increasing number!
// console.log(9999999999999999); // shows 10000000000000000

// // Two zeroes, That’s because a sign is represented by a single bit, so it can be set or not set for any number including a zero.
// console.log(0);
// console.log(-0);

// // Tests: isFinite and isNaN

// // Infinity (and -Infinity) is a special numeric value that is greater (less) than anything.
// // NaN represents an error.

// // isNaN(value) converts its argument to a number and then tests it for being NaN
// console.log(isNaN(NaN)); // true
// console.log(isNaN("str")); // true

// console.log(NaN === NaN); // false

// // isFinite(value) converts its argument to a number and returns true if it’s a regular number, not NaN/Infinity/-Infinity
// console.log(isFinite("15")); // true
// console.log(isFinite("str")); // false, because a special value: NaN
// console.log(isFinite(Infinity)); // false, because a special value: Infinity

// // Number.isNaN and Number.isFinite
// // These methods are the more “strict” versions of isNaN and isFinite functions. They do not autoconvert their argument into a number
// console.log(Number.isNaN(NaN)); // true
// console.log(Number.isNaN("str" / 2)); // true

// // Note the difference:
// console.log(Number.isNaN("str")); // false, because "str" belongs to the string type, not the number type
// console.log(isNaN("str")); // true, because isNaN converts string "str" into a number and gets NaN as a result of this conversion

// console.log(Number.isFinite(123)); // true
// console.log(Number.isFinite(Infinity)); // false
// console.log(Number.isFinite(2 / 0)); // false

// // Note the difference:
// console.log(Number.isFinite("123")); // false, because "123" belongs to the string type, not the number type
// console.log(isFinite("123")); // true, because isFinite converts string "123" into a number 123

// // Comparison with Object.is compares values like ===, but is more reliable for two edge cases:
// console.log(Object.is(NaN, NaN) === true);
// console.log(Object.is(0, -0) === false);

// // parseInt and parseFloat
// // Numeric conversion using a plus + or Number() is strict. If a value is not exactly a number, it fails
// console.log(+"100px"); // NaN

// // parseInt and parseFloat “read” a number from a string until they can’t. In case of an error, the gathered number is returned
// console.log(parseInt("100px")); // 100
// console.log(parseFloat("12.5em")); // 12.5

// console.log(parseInt("12.3")); // 12, only the integer part is returned
// console.log(parseFloat("12.3.4")); // 12.3, the second point stops the reading

// console.log(parseInt("a123")); // NaN, the first symbol stops the process

// // The second argument of parseInt(str, radix)
// console.log(parseInt("0xff", 16)); // 255
// console.log(parseInt("ff", 16)); // 255, without 0x also works

// console.log(parseInt("2n9c", 36)); // 123456

// // Math.random() : Returns a random number from 0 to 1 (not including 1).
// alert(Math.random()); // 0.1234567894322
// alert(Math.random()); // 0.5435252343232
// alert(Math.random()); // ... (any random numbers)

// // Math.max(a, b, c...) and Math.min(a, b, c...) : Returns the greatest and smallest from the arbitrary number of arguments.
// alert(Math.max(3, 5, -10, 0, 1)); // 5
// alert(Math.min(1, 2)); // 1

// // Math.pow(n, power) : Returns n raised to the given power.
// alert(Math.pow(2, 10)); // 2 in power 10 = 1024

// const sum = () => {
//   const readline = require("readline").createInterface({
//     input: process.stdin,
//     output: process.stdout,
//   });

//   readline.question("Number 1 and 2(comma seperated) : ", (numbers) => {
//     this.num1 = numbers.split(",")[0];
//     this.num2 = numbers.split(",")[1];
//     readline.close();

//     console.log(Number(this.num1) + Number(this.num2));
//     return;
//   });
// };
// sum();

// const enterValidNumber = () => {
//   const readline = require("readline").createInterface({
//     input: process.stdin,
//     output: process.stdout,
//   });

//   readline.question("Enter a number : ", (number) => {
//     const theNumber = Number(number);

//     if (isNaN(theNumber)) {
//       readline.close();
//       enterValidNumber();
//     } else {
//       readline.close();
//       console.log(theNumber);
//     }
//     return;
//   });
// };
// enterValidNumber();

function randomFloat(min, max) {
  // const randomNum = Math.random() * 5 + 1;
  // return randomNum;
  return min + Math.random() * (max - min);
}

console.log(randomFloat(1, 5)); // 1.2345623452
console.log(randomFloat(1, 5)); // 3.7894332423
console.log(randomFloat(1, 5)); // 4.3435234525

function randomInt(min, max) {
  // const randomNum = Math.random() * 5 + 1;
  // return Math.trunc(randomNum);

  // let rand = min + Math.random() * (max - min);
  // return Math.round(rand);
  // here rand is from min to (max+1)
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

console.log(randomInt(1, 5)); // 1.2345623452
console.log(randomInt(1, 5)); // 3.7894332423
console.log(randomInt(1, 5)); // 4.3435234525
