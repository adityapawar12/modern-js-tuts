// "use strict";

// // JSON.stringify to convert objects into JSON.
// let student = {
//   name: "John",
//   age: 30,
//   isAdmin: false,
//   courses: ["html", "css", "js"],
//   spouse: null,
// };

// let json = JSON.stringify(student);

// console.log(typeof json); // we've got a string!

// console.log(json);

// // a number in JSON is just a number
// console.log(JSON.stringify(1)); // 1

// // a string in JSON is still a string, but double-quoted
// console.log(JSON.stringify("test")); // "test"

// console.log(JSON.stringify(true)); // true

// console.log(JSON.stringify([1, 2, 3])); // [1,2,3]

// // JSON is data-only language-independent specification, so some JavaScript-specific object properties are skipped by JSON.stringify
// // Like Function properties (methods). Symbolic keys and values. Properties that store undefined.
// let user = {
//   sayHi() {
//     // ignored
//     console.log("Hello");
//   },
//   [Symbol("id")]: 123, // ignored
//   something: undefined, // ignored
// };

// console.log(JSON.stringify(user)); // {} (empty object)

// // Nested objects are also stringified automatically.
// let meetup = {
//   title: "Conference",
//   room: {
//     number: 23,
//     participants: ["john", "ann"],
//   },
// };

// console.log(JSON.stringify(meetup));

// // The important limitation: there must be no circular references.
// let room = {
//   number: 23,
// };

// let meetup2 = {
//   title: "Conference",
//   participants: ["john", "ann"],
// };

// meetup2.place = room; // meetup references room
// room.occupiedBy = meetup2; // room references meetup

// // JSON.stringify(meetup2); // Error: Converting circular structure to JSON

// // Excluding and transforming: replacer
// // Full syntax of stringify : let json = JSON.stringify(value[, replacer, space])
// // value : A value to encode.
// // replacer : Array of properties to encode or a mapping function function(key, value).
// // space : Amount of space to use for formatting
// // If we pass an array of properties to it, only these properties will be encoded.
// let room3 = {
//   number: 23,
// };

// let meetup3 = {
//   title: "Conference",
//   participants: [{ name: "John" }, { name: "Alice" }],
//   place: room3, // meetup references room
// };

// room3.occupiedBy = meetup3; // room references meetup

// console.log(JSON.stringify(meetup3, ["title", "participants"]));
// // {"title":"Conference","participants":[{},{}]}
// console.log(
//   JSON.stringify(meetup3, ["title", "participants", "place", "name", "number"])
// );

// console.log(
//   JSON.stringify(meetup3, function replacer(key, value) {
//     console.log(`${key}: ${value}`);
//     return key == "occupiedBy" ? undefined : value;
//   })
// );

// /* key:value pairs that come to replacer:
//   :             [object Object]
//   title:        Conference
//   participants: [object Object],[object Object]
//   0:            [object Object]
//   name:         John
//   1:            [object Object]
//   name:         Alice
//   place:        [object Object]
//   number:       23
//   occupiedBy: [object Object]
//   */

// console.log(JSON.stringify(student, null, 2));

// // Custom “toJSON”
// let room55 = {
//   number: 23,
// };

// let meetup55 = {
//   title: "Conference",
//   date: new Date(Date.UTC(2017, 0, 1)),
//   room55,
// };

// // date (1) became a string. That’s because all dates have a built-in toJSON method which returns such kind of string.
// console.log(JSON.stringify(meetup55));
// /*
//     {
//       "title":"Conference",
//       "date":"2017-01-01T00:00:00.000Z",  // (1)
//       "room": {"number":23}               // (2)
//     }
//   */

// let room56 = {
//   number: 23,
//   toJSON() {
//     return this.number;
//   },
// };

// let meetup56 = {
//   title: "Conference",
//   room56,
// };

// console.log(JSON.stringify(room56)); // 23

// console.log(JSON.stringify(meetup56));

// // JSON.parse : To decode a JSON-string, we need another method named JSON.parse.
// // str : JSON-string to parse.
// // reviver : Optional function(key,value) that will be called for each (key, value) pair and can transform the value.
// // stringified array
// let numbers = "[0, 1, 2, 3]";

// numbers = JSON.parse(numbers);

// console.log(numbers[1]); // 1

// let userData =
//   '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';

// let user3 = JSON.parse(userData);

// console.log(user3.friends[1]); // 1

// // Reviver
// let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

// // let meetup33 = JSON.parse(str);
// let meetup33 = JSON.parse(str, function (key, value) {
//   if (key == "date") return new Date(value);
//   return value;
// });

// console.log(meetup33.date.getDate()); // Error!

// // Assignments
// let user69 = {
//   name: "John Smith",
//   age: 35,
// };

// console.log(user69);

// let user68 = JSON.stringify(user69);

// console.log(user68);
// let user67 = JSON.parse(user68);

// console.log(user67);

let room = {
  number: 23,
};

let meetup = {
  title: "Conference",
  occupiedBy: [{ name: "John" }, { name: "Alice" }],
  place: room,
};

// circular references
room.occupiedBy = meetup;
meetup.self = meetup;

console.log(
  JSON.stringify(meetup, function replacer(key, value) {
    /* your code */
    if (key != "" && value == meetup) return undefined;
    return value;
  })
);
