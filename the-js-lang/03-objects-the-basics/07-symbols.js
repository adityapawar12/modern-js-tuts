"use strict";

// A “symbol” represents a unique identifier. created using Symbol()
let id = Symbol();

// id2 is a symbol with the description "id2"
let id2 = Symbol("id2");

let ida = Symbol("id");
let idb = Symbol("id");

// Symbols are guaranteed to be unique. Even if we create many symbols with exactly the same description, they are different values.
// The description is just a label that doesn’t affect anything.
console.log(ida == idb); // false
console.log(ida === idb); // false

// a symbol is a “primitive unique value” with an optional description

// Symbols don’t auto-convert to a string
let idp = Symbol("idp");
// console.log(idp); // TypeError: Cannot convert a Symbol value to a string
console.log(idp.toString()); // Symbol(idp), now it works
console.log(idp.description); // idp

// “Hidden” properties
let user = {
  // belongs to another code
  name: "John",
};

let idUser = Symbol("idUser");

user[idUser] = 1;

console.log(user[idUser]); // we can access the data using the symbol as the key

// Drawbacks of using string key. Our script uses "id" property
user.id = "Our id value";

// ...Another script also wants "id" for its purposes...

user.id = "Their id value";
// Boom! overwritten by another script!

// Symbols in an object literal
let idD = Symbol("idD");

let user2 = {
  name: "John",
  [idD]: 123, // not "idD": 123
};

// Symbols are skipped by for…in also Object.keys(user) also ignores them
for (let key in user2) console.log(key); // name, age (no symbols)

// the direct access by the symbol works
console.log("Direct: " + user2[idD]); // Direct: 123

// Object.assign copies both string and symbol properties
let idX = Symbol("idX");
let userX = {
  [idX]: 123,
};

let cloneX = Object.assign({}, userX);

console.log(cloneX[idX]); // 123

// Global symbols
// read from the global registry
let idG = Symbol.for("idG"); // if the symbol did not exist, it is created

// read it again (maybe from another part of the code)
let idGAgain = Symbol.for("idG");

// the same symbol
console.log(idG === idGAgain); // true

// Symbol.keyFor

// get symbol by name
let sym = Symbol.for("name");
let sym2 = Symbol.for("id");

// get name by symbol
console.log(Symbol.keyFor(sym)); // name
console.log(Symbol.keyFor(sym2)); // id

let globalSymbol = Symbol.for("name");
let localSymbol = Symbol("name");

console.log(Symbol.keyFor(globalSymbol)); // name, global symbol
console.log(Symbol.keyFor(localSymbol)); // undefined, not global

console.log(localSymbol.description); // name

// System symbols
// Symbol.hasInstance
// Symbol.isConcatSpreadable
// Symbol.iterator
// Symbol.toPrimitive

// Technically, symbols are not 100% hidden. There is a built-in method Object.getOwnPropertySymbols(obj) that allows us to get all symbols.
// Also there is a method named Reflect.ownKeys(obj) that returns all keys of an object including symbolic ones
