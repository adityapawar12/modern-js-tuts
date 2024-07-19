"use strict";

// copy of message into phrase
let message = "Hello!";
let phrase = message; // copies a duplicate value

// A variable assigned to an object stores not the object itself, but its “address in memory” – in other words “a reference” to it.
// When an object variable is copied, the reference is copied, but the object itself is not duplicated.
let user = {
  name: "John",
};
let admin = user; // copy the reference

admin.name = "Pete"; // changed by the "admin" reference

console.log(user.name); // 'Pete', changes are seen from the "user" reference

// Comparison by reference
let a = {};
let b = a; // copy the reference

console.log(a == b); // true, both variables reference the same object
console.log(a === b); // true

let c = {};
let d = {}; // two independent objects

console.log(c == d); // false

// Const objects can be modified
const constantUser = {
  name: "John",
};

constantUser.name = "Pete"; // (*)

console.log(constantUser.name); // Pete

// Cloning and merging
let userClone = {
  name: "John",
  age: 30,
};

let clone = {}; // the new empty object

// let's copy all userClone properties into it
for (let key in userClone) {
  clone[key] = userClone[key];
}

// now clone is a fully independent object with the same content
clone.name = "Pete"; // changed the data in it

console.log(userClone.name); // still John in the original object

// Object assign
let userAssign = { name: "John" };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

// copies all properties from permissions1 and permissions2 into userAssign
Object.assign(userAssign, permissions1, permissions2);

// now userAssign = { name: "John", canView: true, canEdit: true }
console.log(userAssign.name); // John
console.log(userAssign.canView); // true
console.log(userAssign.canEdit); // true

// If the copied property name already exists, it gets overwritten
Object.assign(userAssign, { name: "Pete" });

console.log(userAssign.name); // now userAssign = { name: "Pete" }

// Object.assign to perform a simple object cloning
let userAssignClone = Object.assign({}, user);

console.log(userAssignClone);

// Nested cloning
let userNested = {
  name: "John",
  sizes: {
    height: 182,
    width: 50,
  },
};

console.log(userNested.sizes.height); // 182

let userNestedClone = Object.assign({}, userNested);

console.log(userNested.sizes === userNestedClone.sizes); // true, same object

// userNested and userNestedClone share sizes
userNested.sizes.width = 80; // change a property from one place
console.log(userNestedClone.sizes.width); // 60, get the result from the other one

// structuredClone
let userNestedStructuredClone = structuredClone(userNested);

console.log(userNested.sizes === userNestedStructuredClone.sizes); // false, different objects

// userNested and userNestedStructuredClone are totally unrelated now
userNested.sizes.width = 70; // change a property from one place
console.log(userNestedStructuredClone.sizes.width); // 50, not related

// error, can solve it using _.cloneDeep(obj) from lodash
// structuredClone({
//   f: function () {},
// });
