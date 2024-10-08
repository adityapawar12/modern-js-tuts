"use strict";

// // Add/remove items
// // arr.push(...items) : adds items to the end,
// // arr.pop() : extracts an item from the end,
// // arr.shift() : extracts an item from the beginning,
// // arr.unshift(...items) : adds items to the beginning.

// // How to delete an element from the array? The arrays are objects, so we can try to use delete:
// let arr = ["I", "go", "home"];

// delete arr[1]; // remove "go"

// console.log(arr[1]); // undefined

// // now arr = ["I",  , "home"];
// // delete obj.key removes a value by the key. It’s all it does. Fine for objects.
// // But for arrays we usually want the rest of the elements to shift and occupy the freed place
// console.log(arr.length); // 3

// // splice
// let arr2 = ["I", "study", "JavaScript"];

// arr2.splice(1, 1); // from index 1 remove 1 element

// console.log(arr2); // ["I", "JavaScript"]

// let arr3 = ["I", "study", "JavaScript", "right", "now"];

// // remove 3 first elements and replace them with another
// arr3.splice(0, 3, "Let's", "dance");

// console.log(arr3); // now ["Let's", "dance", "right", "now"]

// // Splice returns array of removed elements
// let arr4 = ["I", "study", "JavaScript", "right", "now"];

// // remove 2 first elements
// let removed = arr4.splice(0, 2);

// console.log(removed); // "I", "study" <-- array of removed elements

// // The splice method is also able to insert the elements without any removals. For that, we need to set deleteCount to 0
// let arr5 = ["I", "study", "JavaScript"];

// // from index 2
// // delete 0
// // then insert "complex" and "language"
// arr5.splice(2, 0, "complex", "language");

// console.log(arr5); // "I", "study", "complex", "language", "JavaScript"

// // Negative indexes allowed
// let arr6 = [1, 2, 5];

// // from index -1 (one step from the end)
// // delete 0 elements,
// // then insert 3 and 4
// arr6.splice(-1, 0, 3, 4);

// console.log(arr6); // 1,2,3,4,5

// // slice : It returns a new array copying to it all items from index start to end (not including end).
// // Both start and end can be negative, in that case position from array end is assumed.
// let arr7 = ["t", "e", "s", "t"];

// console.log(arr7.slice(1, 3)); // e,s (copy from 1 to 3)

// console.log(arr7.slice(-2)); // s,t (copy from -2 till the end)

// // concat : The method arr.concat creates a new array that includes values from other arrays and additional items
// let arr8 = [1, 2];

// // create an array from: arr and [3,4]
// console.log(arr8.concat([3, 4])); // 1,2,3,4

// // create an array from: arr and [3,4] and [5,6]
// console.log(arr8.concat([3, 4], [5, 6])); // 1,2,3,4,5,6

// // create an array from: arr and [3,4], then add values 5 and 6
// console.log(arr8.concat([3, 4], 5, 6)); // 1,2,3,4,5,6

// let arr9 = [1, 2];

// let arrayLike = {
//   0: "something",
//   length: 1,
// };

// console.log(arr9.concat(arrayLike)); // 1,2,[object Object]

// let arrayLikeConcatSpreadable = {
//   0: "something",
//   1: "else",
//   [Symbol.isConcatSpreadable]: true,
//   length: 2,
// };

// console.log(arr9.concat(arrayLikeConcatSpreadable)); // 1,2,something,else

// // Iterate: forEach
// // for each element call log
// ["Bilbo", "Gandalf", "Nazgul"].forEach((name) => console.log(name));

// ["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
//   console.log(`${item} is at index ${index} in ${array}`);
// });

// // Searching in array
// let arr10 = [1, 0, false];

// // arr.indexOf(item, from) – looks for item starting from index from, and returns the index where it was found, otherwise -1.
// console.log(arr10.indexOf(0)); // 1
// console.log(arr10.indexOf(false)); // 2
// console.log(arr10.indexOf(null)); // -1

// // arr.includes(item, from) – looks for item starting from index from, returns true if found.
// console.log(arr10.includes(1)); // true

// // The method arr.lastIndexOf is the same as indexOf, but looks for from right to left.
// let fruits = ["Apple", "Orange", "Apple"];

// console.log(fruits.indexOf("Apple")); // 0 (first Apple)
// console.log(fruits.lastIndexOf("Apple")); // 2 (last Apple)

// // The includes method handles NaN correctly
// const arr11 = [NaN];
// console.log(arr11.indexOf(NaN)); // -1 (wrong, should be 0)
// console.log(arr11.includes(NaN)); // true (correct)

// // find and findIndex/findLastIndex
// let users = [
//   { id: 1, name: "John" },
//   { id: 2, name: "Pete" },
//   { id: 3, name: "Mary" },
// ];

// // if true is returned, item is returned and iteration is stopped for falsy scenario returns undefined
// let user = users.find((item) => item.id == 1);

// console.log(user.name); // John

// // Find the index of the first John
// console.log(users.findIndex((user) => user.name == "John")); // 0

// // Find the index of the last John
// console.log(users.findLastIndex((user) => user.name == "John")); // 3

// // filter : if true item is pushed to results and the iteration continues returns empty array if nothing found
// // returns array of the first two users
// let someUsers = users.filter((item) => item.id < 3);

// console.log(someUsers.length); // 2

// // Transform an array
// // map : It calls the function for each element of the array and returns the array of results.
// let lengths = ["Bilbo", "Gandalf", "Nazgul"].map((item) => item.length);
// console.log(lengths); // 5,7,6

// // sort(fn) : The call to arr.sort() sorts the array in place, changing its element order.
// let arr12 = [1, 2, 15];

// // the method reorders the content of arr12
// arr12.sort();

// console.log(arr12); // 1, 15, 2

// // For instance, to sort as numbers:
// function compareNumeric(a, b) {
//   if (a > b) return 1;
//   if (a == b) return 0;
//   if (a < b) return -1;
// }

// let arr13 = [1, 2, 15];

// arr13.sort(compareNumeric);

// console.log(arr13); // 1, 2, 15

// // reverse : The method arr.reverse reverses the order of elements in arr.
// let arr14 = [1, 2, 3, 4, 5];
// arr14.reverse();

// console.log(arr14); // 5,4,3,2,1

// // split : It splits the string into an array by the given delimiter delim
// let names = "Bilbo, Gandalf, Nazgul";

// let arr15 = names.split(", ");

// for (let name of arr15) {
//   console.log(`A message to ${name}.`); // A message to Bilbo  (and other names)
// }

// // Split into letters
// let str = "test";

// console.log(str.split("")); // t,e,s,t

// // Join : It creates a string of arr items joined by glue between them.
// let arr16 = ["Bilbo", "Gandalf", "Nazgul"];

// let str2 = arr16.join(";"); // glue the array into a string using ;

// console.log(str2); // Bilbo;Gandalf;Nazgul

// // reduce/reduceRight : used to calculate a single value based on the array.
// let arr17 = [1, 2, 3, 4, 5];

// let result = arr17.reduce((sum, current) => sum + current, 0);
// console.log(result); // 15

// // removed initial value from reduce (no 0)
// // The method arr.reduceRight does the same but goes from right to left.
// let result2 = arr17.reduce((sum, current) => sum + current);
// console.log(result2); // 15

// // Array.isArray
// // Arrays do not form a separate language type. They are based on objects.
// console.log(typeof {}); // object
// console.log(typeof []); // object (same)

// console.log(Array.isArray({})); // false
// console.log(Array.isArray([])); // true

// // Most methods support “thisArg” : find, filter, map except sort
// let army = {
//   minAge: 18,
//   maxAge: 27,
//   canJoin(user) {
//     return user.age >= this.minAge && user.age < this.maxAge;
//   },
// };

// let users2 = [{ age: 16 }, { age: 20 }, { age: 23 }, { age: 30 }];

// // find users2, for who army.canJoin returns true
// let soldiers = users2.filter(army.canJoin, army);

// console.log(soldiers.length); // 2
// console.log(soldiers[0].age); // 20
// console.log(soldiers[1].age); // 23

// // assignment
// console.log(camelize("background-color") == "backgroundColor");
// console.log(camelize("list-style-image") == "listStyleImage");
// console.log(camelize("-webkit-transition") == "WebkitTransition");

// function camelize(string) {
//   const splitString = string
//     .split("-")
//     .map((elem, index) =>
//       index == 0 ? elem : elem.charAt(0).toUpperCase() + elem.slice(1)
//     )
//     .join("");
//   return splitString;
// }

// let arr = [5, 3, 8, 1, 33, 4, 2, 5, 23, 5, 3, 1];

// let filtered = filterRange(arr, 1, 4);

// console.log(filtered); // 3,1 (matching values)

// console.log(arr); // 5,3,8,1 (not modified)

// function filterRange(array, num1, num2) {
//   return array.filter((num) => num >= num1 && num <= num2);
// }

// let arr = [5, 3, 8, 1];

// filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4

// console.log(arr); // [3, 1]

// function filterRangeInPlace(array, num1, num2) {
//   for (let i = 0; i < array.length; i++) {
//     const num = array[i];

//     if (num < num1 || num > num2) {
//       array.splice(i, 1);
//       i--;
//     }
//   }
// }

// let arr = [5, 2, 1, -10, 8];

// arr.sort((a, b) => {
//   console.log(a, b);
//   // if (a < b) return 1;
//   // if (a == b) return 0;
//   // if (a > b) return -1;

//   return b - a;
// });

// console.log(arr); // 8, 5, 2, 1, -10

// let arr = ["HTML", "JavaScript", "CSS"];

// let sorted = copySorted(arr);

// console.log(sorted); // CSS, HTML, JavaScript
// console.log(arr); // HTML, JavaScript, CSS (no changes)

// function copySorted(array) {
//   return array.slice().sort((str1, str2) => str1.localeCompare(str2));
// }

// let calc = new Calculator();

// console.log(calc.calculate("3 + 7"));

// function Calculator() {
//   this.methods = {
//     "-": (a, b) => a - b,
//     "+": (a, b) => a + b,
//   };

//   this.calculate = function (str) {
//     let split = str.split(" "),
//       a = +split[0],
//       op = split[1],
//       b = +split[2];

//     if (!this.methods[op] || isNaN(a) || isNaN(b)) {
//       return NaN;
//     }

//     return this.methods[op](a, b);
//   };

//   this.addMethod = function (name, func) {
//     this.methods[name] = func;
//   };
// }

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let users = [john, pete, mary];

// let names = users.map((user) => user.name);

// console.log(names); // John, Pete, Mary
// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };

// let users = [john, pete, mary];

// let usersMapped = users.map((user) => {
//   return { fullName: user.name + " " + user.surname, id: user.id };
// });

// /*
// usersMapped = [
//   { fullName: "John Smith", id: 1 },
//   { fullName: "Pete Hunt", id: 2 },
//   { fullName: "Mary Key", id: 3 }
// ]
// */

// console.log(usersMapped[0].id); // 1
// console.log(usersMapped[0].fullName); // John Smith

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let arr = [pete, john, mary];

// sortByAge(arr);

// function sortByAge(array) {
//   array.sort((a, b) => a.age - b.age);
// }

// // now: [john, mary, pete]
// console.log(arr[0].name); // John
// console.log(arr[1].name); // Mary
// console.log(arr[2].name); // Pete

// let arr = [1, 2, 3];

// shuffle(arr);
// console.log(arr);
// // arr = [3, 2, 1]

// shuffle(arr);
// console.log(arr);
// // arr = [2, 1, 3]

// shuffle(arr);
// console.log(arr);
// // arr = [3, 1, 2]

// function shuffle(array) {
//   array.sort(() => Math.random() - 0.5);
// }

// function shuffle(array) {
//   array.sort(() => Math.random() - 0.5);
// }

// // counts of appearances for all possible permutations
// let count = {
//   123: 0,
//   132: 0,
//   213: 0,
//   231: 0,
//   321: 0,
//   312: 0,
// };

// for (let i = 0; i < 1000000; i++) {
//   let array = [1, 2, 3];
//   shuffle(array);
//   count[array.join("")]++;
// }

// // show counts of all possible permutations
// for (let key in count) {
//   console.log(`${key}: ${count[key]}`);
// }

// function shuffle(array) {
//   for (let i = array.length - 1; i > 0; i--) {
//     let j = Math.floor(Math.random() * (i + 1));
//     [array[i], array[j]] = [array[j], array[i]];
//   }
// }

// // counts of appearances for all possible permutations
// let count = {
//   123: 0,
//   132: 0,
//   213: 0,
//   231: 0,
//   321: 0,
//   312: 0,
// };

// for (let i = 0; i < 1000000; i++) {
//   let array = [1, 2, 3];
//   shuffle(array);
//   count[array.join("")]++;
// }

// // show counts of all possible permutations
// for (let key in count) {
//   console.log(`${key}: ${count[key]}`);
// }

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 29 };

// let arr = [john, pete, mary];

// console.log(getAverageAge(arr)); // (25 + 30 + 29) / 3 = 28

// function getAverageAge(array) {
//   return (
//     array.reduce((accumulator, next, index) => accumulator + next.age, 0) /
//     array.length
//   );
// }

// function unique(arr) {
//   return arr.reduce((accumulator, next, index) => {
//     if (accumulator.includes(next)) {
//       return accumulator;
//     }

//     return [...accumulator, next];
//   }, []);
// }

// let strings = [
//   "Hare",
//   "Krishna",
//   "Hare",
//   "Krishna",
//   "Krishna",
//   "Krishna",
//   "Hare",
//   "Hare",
//   ":-O",
// ];

// console.log(unique(strings)); // Hare, Krishna, :-O

let users = [
  { id: "john", name: "John Smith", age: 20 },
  { id: "ann", name: "Ann Smith", age: 24 },
  { id: "pete", name: "Pete Peterson", age: 31 },
];

let usersById = groupById(users);

function groupById(array) {
  return array.reduce(
    (accumulator, next) => ({ ...accumulator, [next.id]: next }),
    {}
  );
}

console.log("usersById >>> ", usersById);

/*
// after the call we should have:

usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/
