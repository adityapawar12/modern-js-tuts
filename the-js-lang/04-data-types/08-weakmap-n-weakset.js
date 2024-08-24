"use strict";

// let john = { name: "John" };

// // the object can be accessed, john is the reference to it
// // overwrite the reference
// john = null;
// // the object will be removed from memory

// let john = { name: "John" };
// let array = [john];

// john = null; // overwrite the reference
// // the object previously referenced by john is stored inside the array
// // therefore it won't be garbage-collected
// // we can get it as array[0]

//  if we use an object as the key in a regular Map, then while the Map exists, that object exists as well.
// It occupies memory and may not be garbage collected.
// let john = { name: "John" };

// let map = new Map();
// map.set(john, "...");

// john = null; // overwrite the reference
// // john is stored inside the map,
// // we can get it by using map.keys()

// // WeakMap
// // WeakMap is fundamentally different in this aspect. It doesn’t prevent garbage-collection of key objects.
// let weakMap = new WeakMap();

// let obj = {};

// weakMap.set(obj, "ok"); // works fine (object key)
// console.log(weakMap);

// // can't use a string as the key
// // weakMap.set("test", "Whoops"); // Error, because "test" is not an object

// let john = { name: "John" };

// let weakMap = new WeakMap();
// weakMap.set(john, "...");

// john = null; // overwrite the reference
// // john is removed from memory!
// // WeakMap has only the following methods:
// // weakMap.set(key, value)
// // weakMap.get(key)
// // weakMap.delete(key)
// // weakMap.has(key)

// let john = { name: "John" };

// let weakMap = new WeakMap();
// weakMap.set(john, "secret documents");
// console.log(weakMap.get(john));

// john = null;
// console.log(weakMap.get(john));
// // if john dies, secret documents will be destroyed automatically

// // 📁 visitsCount.js MAP
// let visitsCountMap = new Map(); // map: user => visits count

// // increase the visits count
// function countUser(user) {
//   let count = visitsCountMap.get(user) || 0;
//   visitsCountMap.set(user, count + 1);
//   return count + 1;
// }

// // 📁 visitsCount.js
// let visitsCountMap = new WeakMap(); // weakmap: user => visits count

// // increase the visits count
// function countUser(user) {
//   if (user) {
//     let count = visitsCountMap.get(user) || 0;
//     visitsCountMap.set(user, count + 1);
//     return count + 1;
//   } else {
//     return 0;
//   }
// }

// // 📁 main.js
// let john = { name: "John" };

// console.log(countUser(john)); // count his visits

// // later john leaves us
// john = null;

// console.log(countUser(john));

// Use case: caching
// // 📁 cache.js
// let cache = new Map();
// cached object will be removed when all other its unreachable
// let cache = new WeakMap();

// // calculate and remember the result
// function process(obj) {
//   if (!cache.has(obj)) {
//     let result = /* calculations of the result for */ obj;

//     cache.set(obj, result);
//     return result;
//   }

//   return cache.get(obj);
// }

// // Now we use process() in another file:
// // 📁 main.js
// let obj = {
//   /* let's say we have an object */
// };

// let result1 = process(obj); // calculated

// // ...later, from another place of the code...
// let result2 = process(obj); // remembered result taken from cache

// // ...later, when the object is not needed any more:
// obj = null;

// console.log(cache.size); // 1 (Ouch! The object is still in cache, taking memory!)

// // WeakSet
// // WeakSet behaves similarly:
// // It is analogous to Set, but we may only add objects to WeakSet (not primitives).
// // An object exists in the set while it is reachable from somewhere else.
// // Like Set, it supports add, has and delete, but not size, keys() and no iterations.
// let visitedSet = new WeakSet();

// let john = { name: "John" };
// let pete = { name: "Pete" };
// let mary = { name: "Mary" };

// visitedSet.add(john); // John visited us
// visitedSet.add(pete); // Then Pete
// visitedSet.add(john); // John again

// // visitedSet has 2 users now

// // check if John visited?
// console.log(visitedSet.has(john)); // true

// // check if Mary visited?
// console.log(visitedSet.has(mary)); // false

// john = null;
// console.log(visitedSet.has(john)); // true

// // visitedSet will be cleaned automatically

// assignment
// let messages = [
//   { text: "Hello", from: "John" },
//   { text: "How goes?", from: "John" },
//   { text: "See you soon", from: "Alice" },
// ];

// let readMessages = new WeakSet();

// // two messages have been read
// readMessages.add(messages[0]);
// readMessages.add(messages[1]);
// // readMessages has 2 elements

// // ...let's read the first message again!
// readMessages.add(messages[0]);
// // readMessages still has 2 unique elements

// // answer: was the message[0] read?
// alert("Read message 0: " + readMessages.has(messages[0])); // true

// messages.shift();
// // now readMessages has 1 element (technically memory may be cleaned later)

// let messages = [
//   { text: "Hello", from: "John" },
//   { text: "How goes?", from: "John" },
//   { text: "See you soon", from: "Alice" },
// ];

// let readMap = new WeakMap();

// readMap.set(messages[0], new Date(2017, 1, 1));
// // Date object we'll study later
