// // The range itself does not have the next() method.
// // Instead, another object, a so-called “iterator” is created by the call to range[Symbol.iterator](), and its next() generates values for the iteration.
// let range = {
//   from: 1,
//   to: 5,
// };

// // 1. call to for..of initially calls this
// range[Symbol.iterator] = function () {
//   // ...it returns the iterator object:
//   // 2. Onward, for..of works only with the iterator object below, asking it for next values
//   return {
//     current: this.from,
//     last: this.to,

//     // 3. next() is called on each iteration by the for..of loop
//     next() {
//       // 4. it should return the value as an object {done:.., value :...}
//       if (this.current <= this.last) {
//         return { done: false, value: this.current++ };
//       } else {
//         return { done: true };
//       }
//     },
//   };
// };

// // now it works!
// for (let num of range) {
//   console.log(num); // 1, then 2, 3, 4, 5
// }

// // Technically, we may merge them and use range itself as the iterator to make the code simpler.
// let range = {
//   from: 1,
//   to: 5,

//   [Symbol.iterator]() {
//     this.current = this.from;
//     return this;
//   },

//   next() {
//     if (this.current <= this.to) {
//       return { done: false, value: this.current++ };
//     } else {
//       return { done: true };
//     }
//   },
// };

// // The downside is that now it’s impossible to have two for..of loops running over the object simultaneously:
// // they’ll share the iteration state, because there’s only one iterator – the object itself. But two parallel for-ofs is a rare thing, even in async scenarios.
// for (let num of range) {
//   console.log(num); // 1, then 2, 3, 4, 5
// }

// // String is iterable
// for (let char of "test") {
//   // triggers 4 times: once for each character
//   console.log(char); // t, then e, then s, then t
// }

// let str = "𝒳😂";
// for (let char of str) {
//   console.log(char); // 𝒳, and then 😂
// }

// // Calling an iterator explicitly
// let str = "Hello";

// // does the same as
// // for (let char of str) alert(char);

// let iterator = str[Symbol.iterator]();

// while (true) {
//   let result = iterator.next();
//   if (result.done) break;
//   console.log(result.value); // outputs characters one by one
// }

// // Iterables and array-likes
// let arrayLike = {
//   // has indexes and length => array-like
//   0: "Hello",
//   1: "World",
//   length: 2,
// };

// // Error (no Symbol.iterator)
// // for (let item of arrayLike) {
// //   console.log(item);
// // }

// let str = "string";
// // strings are both iterable and array like because they of symbol.iterator and lenght.
// for (const element of str) {
//   console.log(element);
// }

// Array.from
let arrayLike = {
  0: "Hello",
  1: "World",
  length: 2,
};

let arr = Array.from(arrayLike); // (*)
console.log(arr.pop()); // World (method works)
console.log(arr.length);
console.log(arr.pop()); // Hello (method works)
console.log(arr.length);

// assuming that range is taken from the example above
let range = {
  from: 1,
  to: 5,

  [Symbol.iterator]() {
    this.current = this.from;
    return this;
  },

  next() {
    if (this.current <= this.to) {
      return { done: false, value: this.current++ };
    } else {
      return { done: true };
    }
  },
};
let arr2 = Array.from(range);
console.log(arr2); // 1,2,3,4,5 (array toString conversion works)

// square each number
let arr3 = Array.from(range, (num) => num * num);

console.log(arr3); // 1,4,9,16,25

// use Array.from to turn a string into an array of characters
let str = "𝒳😂";

// splits str into array of characters
let chars = Array.from(str);

console.log(chars[0]); // 𝒳
console.log(chars[1]); // 😂
console.log(chars.length); // 2

// Technically here it does the same as:
let chars2 = []; // Array.from internally does the same loop
for (let char of str) {
  chars2.push(char);
}

console.log(chars[0]); // 𝒳
console.log(chars[1]); // 😂
console.log(chars.length); // 2
