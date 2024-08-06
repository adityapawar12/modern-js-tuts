"use strict";

// Declaration
let arr = new Array();
let arr2 = [];

let fruits = ["Apple", "Orange", "Plum"];

// We can get an element by its number in square brackets
console.log(fruits[0]); // Apple
console.log(fruits[1]); // Orange
console.log(fruits[2]); // Plum

// We can replace an element
fruits[2] = "Pear"; // now ["Apple", "Orange", "Pear"]

// add a new one to the array:
fruits[3] = "Lemon"; // now ["Apple", "Orange", "Pear", "Lemon"]

// The total count of the elements in the array is its length
console.log(fruits.length); // 3

// We can also use console.log to show the whole array
console.log(fruits);

// mix of values
let arr3 = [
  "Apple",
  { name: "John" },
  true,
  function () {
    console.log("hello");
  },
];

// get the object at index 1 and then show its name
console.log(arr3[1].name); // John

// get the function at index 3 and run it
arr3[3](); // hello

// Get last elements with “at”
console.log(fruits[fruits.length - 1]); // Lemon
console.log(fruits.at(-1)); // Lemon

// Methods pop/push, shift/unshift

// Methods that work with the end of the array:
// pop : Extracts the last element of the array and returns it:
console.log(fruits.pop()); // remove "Lemon" and console.log it
console.log(fruits); // Apple, Orange

// push : Append the element to the end of the array:
fruits.push("Lemon");
console.log(fruits); // Apple, Orange, Lemon

// Methods that work with the beginning of the array:
// shift : Extracts the first element of the array and returns it:
console.log(fruits.shift()); // remove Apple and console.log it
console.log(fruits); // Orange, Pear

// unshift : Add the element to the beginning of the array:
fruits.unshift("Apple");
console.log(fruits); // Apple, Orange, Pear

// Methods push and unshift can add multiple elements at once:
fruits.push("Orange", "Peach");
fruits.unshift("Pineapple", "Lemon");

// ["Pineapple", "Lemon", "Apple", "Orange", "Peach"]
console.log(fruits);

// Internals. An array is a special kind of object. The square brackets used to access a property arr[0] actually come from the object syntax.
let fruits2 = ["Banana"];

let arr4 = fruits2; // copy by reference (two variables reference the same array)

console.log(arr4 === fruits2); // true

arr4.push("Pear"); // modify the array by reference

console.log(fruits2); // Banana, Pear - 2 items now

// Internal optimizations fail if we try to do something like this cause arrays are objects at the end.
let fruits3 = []; // make an array

// The ways to misuse an array:
// Make holes, like: add arr[0] and then arr[1000] (and nothing between them).
// Fill the array in the reverse order, like arr[1000], arr[999] and so on.
fruits3[99999] = 5; // assign a property with the index far greater than its length

// Add a non-numeric property like arr.test = 5.
fruits3.age = 25; // create a property with an arbitrary name

// Performance. Methods push/pop run fast, while shift/unshift are slow.
// The shift operation must do 3 things:
// Remove the element with the index 0.
// Move all elements to the left, renumber them from the index 1 to 0, from 2 to 1 and so on.
// Update the length property.
// The more elements in the array, the more time to move them, more in-memory operations.
// The pop method does not need to move anything, because other elements keep their indexes. That’s why it’s blazingly fast. The similar thing with the push method.

// Loops
let arr5 = ["Apple", "Orange", "Pear"];

for (let i = 0; i < arr5.length; i++) {
  console.log(arr5[i]);
}

// But for arrays there is another form of loop, for..of
let fruits6 = ["Apple", "Orange", "Plum"];
for (let fruit of fruits6) {
  console.log(fruit);
}

// Technically, because arrays are objects, it is also possible to use for..in
let arr6 = ["Apple", "Orange", "Pear"];

// The loop for..in iterates over all properties, not only the numeric ones.
// The for..in loop is optimized for generic objects, not arrays, and thus is 10-100 times slower.
for (let key in arr6) {
  console.log(arr6[key]); // Apple, Orange, Pear
}

// A word about “length”
// To be precise, length is actually not the count of values in the array, but the greatest numeric index plus one.
let fruits7 = [];
fruits7[123] = "Apple";

console.log(fruits7.length); // 124

let arr8 = [1, 2, 3, 4, 5];

arr8.length = 2; // truncate to 2 elements
console.log(arr8); // [1, 2]

arr8.length = 5; // return length back
console.log(arr8[3]); // undefined: the values do not return

// new Array()
let arr9 = new Array("Apple", "Pear", "etc");

// Let’s see how one can shoot themselves in the foot:
let arr10 = new Array(2); // will it create an array of [2] ?

console.log(arr10[0]); // undefined! no elements.

console.log(arr10.length); // length 2

// Multidimensional arrays
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(matrix[0][3]); // 3, the third value of the first inner array

// toString : Arrays have their own implementation of toString method that returns a comma-separated list of elements.
let arr11 = [1, 2, 3];

console.log(arr11); // 1,2,3
console.log(String(arr11) === "1,2,3"); // true

console.log([] + 1); // "1"
console.log([1] + 1); // "11"
console.log([1, 2] + 1); // "1,21"

// Don’t compare arrays with ==
console.log([] == []); // false
console.log([0] == [0]); // false

// after [] was converted to ''
console.log(0 == ""); // true, as '' becomes converted to number 0

console.log("0" == ""); // false, no type conversion, different strings

// assignment
let fruits44 = ["Apples", "Pear", "Orange"];

// push a new value into the "copy"
let shoppingCart = fruits44;
shoppingCart.push("Banana");

// what's in fruits44?
console.log(fruits44.length); // 4

const styles = ["Jazz", "Blues"];
console.log(styles);

styles.push("Rock-n-Roll");
console.log(styles);

styles[Math.trunc(styles.length / 2)] = "Classics";
console.log(styles);

console.log(styles.shift());
console.log(styles);

styles.unshift("Rap", "Reggae");
console.log(styles);

let arr55 = ["a", "b"];

arr55.push(function () {
  console.log(this);
});

arr55[2](); // ?

// console.log(sumInput());

// function sumInput() {
//   let allInputs = [];

//   const readline = require("readline").createInterface({
//     input: process.stdin,
//     output: process.stdout,
//   });

//   readline.question("Number (comma seperated) : ", (numbers) => {
//     allInputs = numbers.split(",");
//     let sumOfAllInputs = 0;

//     for (let input of allInputs) {
//       sumOfAllInputs += Number(input);
//     }

//     console.log(sumOfAllInputs);

//     readline.close();
//     // return allInputs;
//     return sumOfAllInputs;
//   });
// }

console.log(getMaxSubSum([-1, 2, 3, -9]) == 5);
console.log(getMaxSubSum([2, -1, 2, 3, -9]) == 6);
console.log(getMaxSubSum([-1, 2, 3, -9, 11]) == 11);
console.log(getMaxSubSum([-2, -1, 1, 2]) == 3);
console.log(getMaxSubSum([100, -9, 2, -3, 5]) == 100);
console.log(getMaxSubSum([1, 2, 3]) == 6);

// function getMaxSubSum(inputArray) {
//   let sumOfArray = 0;
//   let lenOfArray = inputArray.length;
//   for (let i = 0; i < lenOfArray; i++) {
//     for (let j = 0; j < inputArray.length; j++) {
//       console.log(inputArray[j]);
//     }
//   }

//   //   console.log(sumOfArray);

//   return sumOfArray;
// }

// function getMaxSubSum(arr) {
//   let maxSum = 0; // if we take no elements, zero will be returned

//   for (let i = 0; i < arr.length; i++) {
//     let sumFixedStart = 0;
//     for (let j = i; j < arr.length; j++) {
//       sumFixedStart += arr[j];
//       maxSum = Math.max(maxSum, sumFixedStart);
//     }
//   }

//   return maxSum;
// }
function getMaxSubSum(arr) {
  let maxSum = 0;
  let partialSum = 0;

  for (let item of arr) {
    // for each item of arr
    partialSum += item; // add it to partialSum
    maxSum = Math.max(maxSum, partialSum); // remember the maximum
    if (partialSum < 0) partialSum = 0; // zero if negative
  }

  return maxSum;
}
