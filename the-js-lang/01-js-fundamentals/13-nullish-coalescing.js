"use strict";

let user;

console.log(user ?? "Anonymous"); // Anonymous (user is undefined)

let user2 = "John";

console.log(user2 ?? "Anonymous"); // John (user is not null/undefined)

let firstName = null;
let lastName = null;
let nickName = "Supercoder";

// shows the first defined value:
console.log(firstName ?? lastName ?? nickName ?? "Anonymous"); // Supercoder

// Comparison with ||
// || returns the first truthy value.
// ?? returns the first defined value.
let height = 0;

console.log(height || 100); // 100
console.log(height ?? 100); // 0

// Precedence
let height2 = null;
let width = null;

// important: use parentheses
let area = (height2 ?? 100) * (width ?? 50);

console.log(area); // 5000

// Using ?? with && or ||
// let x = 1 && 2 ?? 3; // Syntax error
let x = (1 && 2) ?? 3; // Works
