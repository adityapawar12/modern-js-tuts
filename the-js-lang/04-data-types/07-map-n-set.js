// "use strict";

// // Map
// // Map is a collection of keyed data items, just like an Object. But the main difference is that Map allows keys of any type.
// // Methods and properties are:

// // new Map() – creates the map.
// // map.set(key, value) – stores the value by the key.
// // map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
// // map.has(key) – returns true if the key exists, false otherwise.
// // map.delete(key) – removes the element (the key/value pair) by the key.
// // map.clear() – removes everything from the map.
// // map.size – returns the current element count.

// let map = new Map();

// map.set("1", "str1"); // a string key
// map.set(1, "num1"); // a numeric key
// map.set(true, "bool1"); // a boolean key

// // Every map.set call returns the map itself, so we can “chain” the calls:
// map.set("1", "str1").set(1, "num1").set(true, "bool1");

// // remember the regular Object? it would convert keys to string
// // Map keeps the type, so these two are different:
// console.log(map.get(1)); // 'num1'
// console.log(map.get("1")); // 'str1'

// console.log(map.size); // 3

// // Map can also use objects as keys.
// let john = { name: "John" };
// let ben = { name: "Ben" };

// // for every user, let's store their visits count
// let visitsCountMap = new Map();

// // john is the key for the map
// visitsCountMap.set(john, 123);
// visitsCountMap.set(ben, 234);

// // Using objects as keys is one of the most notable and important Map features.
// // The same does not count for Object. String as a key in Object is fine, but we can’t use another Object as a key in Object.
// console.log(visitsCountMap.get(john)); // 123
// console.log(visitsCountMap.get(ben)); // 234

// let visitsCountObj = {}; // try to use an object

// visitsCountObj[ben] = 234; // try to use ben object as the key
// visitsCountObj[john] = 123; // try to use john object as the key, ben object will get replaced

// // That's what got written!
// // As visitsCountObj is an object, it converts all Object keys, such as john and ben above, to same string "[object Object]". Definitely not what we want.
// console.log(visitsCountObj["[object Object]"]); // 123

// // Iteration over Map
// // For looping over a map, there are 3 methods:
// // map.keys() – returns an iterable for keys,
// // map.values() – returns an iterable for values,
// // map.entries() – returns an iterable for entries [key, value], it’s used by default in for..of.
// let recipeMap = new Map([
//   ["cucumber", 500],
//   ["tomatoes", 350],
//   ["onion", 50],
// ]);

// // iterate over keys (vegetables)
// for (let vegetable of recipeMap.keys()) {
//   console.log(vegetable); // cucumber, tomatoes, onion
// }

// // iterate over values (amounts)
// for (let amount of recipeMap.values()) {
//   console.log(amount); // 500, 350, 50
// }

// // iterate over [key, value] entries
// for (let entry of recipeMap) {
//   // the same as of recipeMap.entries()
//   console.log(entry); // cucumber,500 (and so on)
// }

// // Besides that, Map has a built-in forEach method, similar to Array:
// recipeMap.forEach((value, key, map) => {
//   console.log(`${key}: ${value}`); // cucumber: 500 etc
// });

// // Object.entries: Map from Object
// // array of [key, value] pairs
// let map2 = new Map([
//   ["1", "str1"],
//   [1, "num1"],
//   [true, "bool1"],
// ]);

// console.log(map2.get("1")); // str1

// let obj = {
//   name: "John",
//   age: 30,
// };

// let map3 = new Map(Object.entries(obj));

// console.log(map3.get("name")); // John

// // Object.fromEntries: Object from Map
// let prices = Object.fromEntries([
//   ["banana", 1],
//   ["orange", 2],
//   ["meat", 4],
// ]);

// // now prices = { banana: 1, orange: 2, meat: 4 }
// console.log(prices.orange); // 2

// let map4 = new Map();
// map4.set("banana", 1);
// map4.set("orange", 2);
// map4.set("meat", 4);

// let obj2 = Object.fromEntries(map4.entries()); // make a plain object (*)

// // done!
// // obj2 = { banana: 1, orange: 2, meat: 4 }
// console.log(obj2.orange); // 2

// // Set
// // A Set is a special type collection – “set of values” (without keys), where each value may occur only once.
// // Its main methods are:
// // new Set([iterable]) – creates the set, and if an iterable object is provided (usually an array), copies values from it into the set.
// // set.add(value) – adds a value, returns the set itself.
// // set.delete(value) – removes the value, returns true if value existed at the moment of the call, otherwise false.
// // set.has(value) – returns true if the value exists in the set, otherwise false.
// // set.clear() – removes everything from the set.
// // set.size – is the elements count.
// let set = new Set();

// let john2 = { name: "John" };
// let pete = { name: "Pete" };
// let mary = { name: "Mary" };

// // visits, some users come multiple times
// set.add(john2);
// set.add(pete);
// set.add(mary);
// set.add(john2);
// set.add(mary);

// // set keeps only unique values
// console.log(set.size); // 3

// for (let user of set) {
//   console.log(user.name); // John (then Pete and Mary)
// }

// // Iteration over Set
// let set2 = new Set(["oranges", "apples", "bananas"]);

// for (let value of set2) console.log(value);

// // the same with forEach:
// set2.forEach((value, valueAgain, set) => {
//   console.log(value);
// });

// // The same methods Map has for iterators are also supported:
// // set.keys() – returns an iterable object for values,
// // set.values() – same as set.keys(), for compatibility with Map,
// // set.entries() – returns an iterable object for entries [value, value], exists for compatibility with Map.

// // assignments
// function unique(arr) {
//   return Array.from(new Set(arr));
// }

// let values = [
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

// console.log(unique(values)); // Hare, Krishna, :-O

let arr2 = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// function aclean(array) {
//   const processed = array.map((arr) => {
//     console.log(arr.toLowerCase().split("").sort().join(""));
//     return arr.toLowerCase().split("").sort().join("");
//   });
//   console.log(processed);
//   return Array.from(new Set(processed));
// }

// console.log(aclean(arr2)); // "nap,teachers,ear" or "PAN,cheaters,era"

// function aclean(arr) {
//   let map = new Map();

//   for (let word of arr) {
//     // split the word by letters, sort them and join back
//     let sorted = word.toLowerCase().split("").sort().join(""); // (*)
//     map.set(sorted, word);
//   }

//   return Array.from(map.values());
// }

// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// console.log(aclean(arr));

let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());
console.log(keys);

// Error: keys.push is not a function
keys.push("more");
console.log(keys);
