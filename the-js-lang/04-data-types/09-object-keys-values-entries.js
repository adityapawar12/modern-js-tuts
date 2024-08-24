"use strict";

// For plain objects, the following methods are available:
// Object.keys(obj) – returns an array of keys.
// Object.values(obj) – returns an array of values.
// Object.entries(obj) – returns an array of [key, value] pairs.

// The first difference is that we have to call Object.keys(obj), and not obj.keys()
// The second difference is that Object.* methods return “real” array objects, not just an iterable. That’s mainly for historical reasons.
let user = {
  name: "John",
  age: 30,
};

// loop over values
for (let value of Object.values(user)) {
  console.log(value); // John, then 30
}

// Transforming objects
let prices = {
  banana: 1,
  orange: 2,
  meat: 4,
};

let doublePrices = Object.fromEntries(
  // convert prices to array, map each key/value pair into another pair
  // and then fromEntries gives back the object
  Object.entries(prices).map((entry) => [entry[0], entry[1] * 2])
);

console.log(prices);
console.log(doublePrices);

// assignment
let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

console.log(sumSalaries(salaries)); // 650

function sumSalaries(salaries) {
  let salariesTotal = 0;
  for (const salary of Object.keys(salaries)) {
    console.log(salaries[salary]);

    salariesTotal = Number(salariesTotal) + Number(salaries[salary]);
  }

  return salariesTotal;
}

let user2 = {
  name: "John",
  age: 30,
};

console.log(count(user2)); // 2

function count(users) {
  return Object.entries(users).length;
}
