"use strict";

// Array destructuring
// we have an array with a name and surname
let arr = ["John", "Smith"];

// destructuring assignment
// sets firstName = arr[0]
// and surname = arr[1]
let [firstName, surname] = arr;

console.log(firstName); // John
console.log(surname); // Smith

// use case with split
let [firstName2, surname2] = "John Smith".split(" ");
console.log(firstName2); // John
console.log(surname2); // Smith

// Ignore elements using commas
// second element is not needed
let [firstName3, , title] = [
  "Julius",
  "Caesar",
  "Consul",
  "of the Roman Republic",
];

console.log(title); // Consul

// Works with any iterable on the right-side
// That works, because internally a destructuring assignment works by iterating over the right value.
// It’s a kind of syntax sugar for calling for..of over the value to the right of = and assigning the values.
let [a, b, c] = "abc"; // ["a", "b", "c"]
let [one, two, three] = new Set([1, 2, 3]);

// Assign to anything at the left-side
let user = {};
[user.name, user.surname] = "John Smith".split(" ");

console.log(user.name); // John
console.log(user.surname); // Smith

// Looping with .entries()
let user2 = {
  name: "John",
  age: 30,
};

// loop over the keys-and-values
for (let [key, value] of Object.entries(user2)) {
  console.log(`${key}:${value}`); // name:John, then age:30
}

// Swap variables trick
let guest = "Jane";
let admin = "Pete";

// Let's swap the values: make guest=Pete, admin=Jane
[guest, admin] = [admin, guest];

console.log(`${guest} ${admin}`); // Pete Jane (successfully swapped!)

// The rest ‘…’
let [name1, name2, ...rest] = [
  "Julius",
  "Caesar",
  "Consul",
  "of the Roman Republic",
];

// rest is an array of items, starting from the 3rd one
console.log(rest[0]); // Consul
console.log(rest[1]); // of the Roman Republic
console.log(rest.length); // 2

// Default values
let [firstName4, surname4] = [];

console.log(firstName4); // undefined
console.log(surname4); // undefined
let [name5 = "Guest", surname5 = "Anonymous"] = ["Julius"];

console.log(name5); // Julius (from array)
console.log(surname5); // Anonymous (default used)

// Object destructuring
let options = {
  title2: "Menu",
  width: 100,
  height: 200,
};

let { title2, width, height } = options;

console.log(title2); // Menu
console.log(width); // 100
console.log(height); // 200

let { width: w, height: h } = options;

// width -> w
// height -> h

console.log(w); // 100
console.log(h); // 200

// set default values using "="
let options2 = {
  title3: "Menu",
};

let { width3 = 100, height3 = 200, title3 } = options2;

console.log(title3); // Menu
console.log(width3); // 100
console.log(height3); // 200

// The rest pattern “…”
let options4 = {
  title: "Menu",
  height: 200,
  width: 100,
};

// title = property named title
// rest = object with the rest of properties
let { title5, ...rest2 } = options4;

// now title="Menu", rest={height: 200, width: 100}
console.log(rest2.height); // 200
console.log(rest2.width); // 100

// Complex destructuring
let options6 = {
  size: {
    width4: 100,
    height4: 200,
  },
  items: ["Cake", "Donut"],
  extra: true,
};

// destructuring assignment split in multiple lines for clarity
let {
  size: {
    // put size here
    width4,
    height4,
  },
  items: [item1, item2], // assign items here
  title4 = "Menu", // not present in the object (default value is used)
} = options6;

console.log(title4); // Menu
console.log(width4); // 100
console.log(height4); // 200
console.log(item1); // Cake
console.log(item2); // Donut

// Using destructuring for function parameters
let options7 = {
  title: "My menu",
  items: ["Item1", "Item2"],
};

function showMenu({
  title = "Untitled",
  width: w = 100, // width goes to w
  height: h = 200, // height goes to h
  items: [item1, item2], // items first element goes to item1, second to item2
}) {
  console.log(`${title} ${w} ${h}`); // My Menu 100 200
  console.log(item1); // Item1
  console.log(item2); // Item2
}

showMenu(options7);

// assignment
let user7 = { nameUser: "John", years: 30 };

// your code to the left side:
// ... = user
let { nameUser, years: age, isAdmin = false } = user7;

console.log(nameUser); // John
console.log(age); // 30
console.log(isAdmin); // false

let salaries = {
  John: 100,
  Pete: 300,
  Pete2: 300,
  Pete3: 320,
  Pete4: 3050,
  Pete5: 30220,
  Mary: 250,
};

console.log(topSalary(salaries));

function topSalary(salariesArray) {
  return Object.entries(salariesArray).reduce(
    ([topName, topSalary], [name, salary]) => {
      if (salary > topSalary) {
        [topName, topSalary] = [name, salary];
      }
      return [topName, topSalary];
    },
    ["", 0]
  );
}
