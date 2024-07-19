"use strict";

// The “non-existing property” problem
let user = {}; // user has no address

console.log(
  user.address ? (user.address.street ? user.address.street.name : null) : null
);

// Optional chaining
console.log(user?.address?.street); // undefined (no error)

user = null;

// We should use ?. only where it’s ok that something doesn’t exist. Don’t overuse the optional chaining
console.log(user?.address); // undefined
console.log(user?.address.street); // undefined

// The variable before ?. must be declared. ReferenceError: user is not defined
// user2?.address;

// Short-circuiting
let user3 = null;
let x = 0;

user3?.sayHi(x++); // no "user3", so the execution doesn't reach sayHi call and x++

console.log(x); // 0, value not incremented

// Other variants: ?.(), ?.[]
// ?.() is used to call a function that may not exist.
let userAdmin = {
  admin() {
    console.log("I am admin");
  },
};

let userGuest = {};

userAdmin.admin?.(); // I am admin

userGuest.admin?.(); // nothing happens (no such method)

// ?.[] allows to safely read a property from an object that may not exist
let key = "firstName";

let user1 = {
  firstName: "John",
};

let user2 = null;

console.log(user1?.[key]); // John
console.log(user2?.[key]); // undefined

// To delete a property
delete user1?.name;

// We can use ?. for safe reading and deleting, but not writing
