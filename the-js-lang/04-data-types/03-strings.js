"use strict";

let single = "single-quoted";
let double = "double-quoted";

let backticks = `backticks`;

// Backticks allow us to embed any expression into the string, by wrapping it in ${…}
function sum(a, b) {
  return a + b;
}

console.log(`1 + 2 = ${sum(1, 2)}.`); // 1 + 2 = 3.

let guestList = `Guests:
 * John
 * Pete
 * Mary
`;

console.log(guestList); // a list of guests, multiple lines

// Tagged templates
const person = "Mike";
const age = 28;

function myTag(strings, personExp, ageExp) {
  const str0 = strings[0]; // "That "
  const str1 = strings[1]; // " is a "
  const str2 = strings[2]; // "."

  const ageStr = ageExp < 100 ? "youngster" : "centenarian";

  // We can even return a string built using a template literal
  return `${str0}${personExp}${str1}${ageStr}${str2}`;
}

const output = myTag`That ${person} is a ${age}.`;

console.log(output);
// That Mike is a youngster.

// Special characters
let newGuestList = "Guests:\n * John\n * Pete\n * Mary";

console.log(newGuestList); // a multiline list of guests, same as above

let str1 = "Hello\nWorld"; // two lines using a "newline symbol"

// two lines using a normal newline and backticks
let str2 = `Hello
World`;

console.log(str1 == str2); // true

console.log(`The backslash: \\`); // The backslash(aka escape character): \

// console.log( 'I\'m the Walrus!' ); // I'm the Walrus!

console.log("I'm the Walrus!"); // I'm the Walrus!

// String length
console.log(`My\n`.length); // 3

// Accessing characters
let str = `Hello`;

// the first character
console.log(str[0]); // H
console.log(str.at(0)); // H

// the last character
console.log(str[str.length - 1]); // o
console.log(str.at(-1));

console.log(str[-2]); // undefined
console.log(str.at(-2)); // l

// We can also iterate over characters using for..of
for (let char of "Hello") {
  console.log(char); // H,e,l,l,o (char becomes "H", then "e", then "l" etc)
}

// Strings are immutable
let strImmutable = "Hi";

// strImmutable[0] = "h"; // error
// console.log(strImmutable[0]); // doesn't work

// workaround

strImmutable = "h" + strImmutable[1]; // replace the string

console.log(strImmutable); // hi

// Changing the case
console.log("Interface".toUpperCase()); // INTERFACE
console.log("Interface".toLowerCase()); // interface

// Searching for a substring
let strIndexOf = "Widget with id";

console.log(strIndexOf.indexOf("Widget")); // 0, because 'Widget' is found at the beginning
console.log(strIndexOf.indexOf("widget")); // -1, not found, the search is case-sensitive

console.log(strIndexOf.indexOf("id")); // 1, "id" is found at the position 1 (..idget with id)

// second parameter allows us to start searching from a given position
console.log(strIndexOf.indexOf("id", 2)); // 12

let strAllIndexOf = "As sly as a fox, as strong as an ox";

let target = "as"; // let's look for it

let pos = 0;
while (pos <= strAllIndexOf.length) {
  let foundPos = strAllIndexOf.indexOf(target, pos);
  if (foundPos == -1) break;

  console.log(`Found at ${foundPos}`);
  pos = foundPos + 1; // continue the search from the next position
}

// drawback of indexof
let strDrawback = "Widget with id";

if (strDrawback.indexOf("Widget")) {
  console.log("We found it"); // doesn't work!
}

if (strDrawback.indexOf("Widget") != -1) {
  console.log("We found it"); // works now!
}

// includes, startsWith, endsWith
console.log("Widget with id".includes("Widget")); // true
console.log("Hello".includes("Bye")); // false
console.log("Widget".includes("id", 3)); // false, from position 3 there is no "id"

console.log("Widget".startsWith("Wid")); // true, "Widget" starts with "Wid"
console.log("Widget".endsWith("get")); // true, "Widget" ends with "get"

// Getting a substring
// str.slice(start [, end]) : Returns the part of the string from start to (but not including) end.
let strSliced = "stringify";
console.log(strSliced.slice(0, 5)); // 'strin', the substring from 0 to 5 (not including 5)
console.log(strSliced.slice(0, 1)); // 's', from 0 to 1, but not including 1, so only character at 0

console.log(strSliced.slice(2)); // 'ringify', from the 2nd position till the end

// start at the 4th position from the right, end at the 1st from the right
console.log(strSliced.slice(-4, -1)); // 'gif'

// str.substring(start [, end]) : Returns the part of the string between start and end (not including end)
// This is almost the same as slice, but it allows start to be greater than end (in this case it simply swaps start and end values).
let strSubString = "stringify";
// these are same for substring
// Negative arguments are (unlike slice) not supported, they are treated as 0
console.log(strSubString.substring(2, 6)); // "ring"
console.log(strSubString.substring(6, 2)); // "ring"

// ...but not for slice:
console.log(strSubString.slice(2, 6)); // "ring" (the same)
console.log(strSubString.slice(6, 2)); // "" (an empty string)

// str.substr(start [, length]) : Returns the part of the string from start, with the given length. DEPRECATED
let strSubStr = "stringify";
console.log(strSubStr.substr(2, 4)); // 'ring', from the 2nd position get 4 characters

// The first argument may be negative, to count from the end
console.log(strSubStr.substr(-4, 2)); // 'gi', from the 4th position get 2 characters

// Comparing strings
// A lowercase letter is always greater than the uppercase
console.log("a" > "Z"); // true

// Letters with diacritical marks are “out of order”
console.log("Österreich" > "Zealand"); // true

// str.codePointAt(pos) : Returns a decimal number representing the code(UTF-16) for the character at position pos
// different case letters have different codes
console.log("Z".codePointAt(0)); // 90
console.log("z".codePointAt(0)); // 122
console.log("z".codePointAt(0).toString(16)); // 7a (if we need a hexadecimal value)

// String.fromCodePoint(code) : Creates a character by its numeric code
console.log(String.fromCodePoint(90)); // Z
console.log(String.fromCodePoint(0x5a)); // Z (we can also use a hex value as an argument)

let strFromCodes = "";

for (let i = 65; i <= 220; i++) {
  strFromCodes += String.fromCodePoint(i);
}
console.log(strFromCodes);
// Output:
// ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~
// ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜ

// Correct comparisons
// str.localeCompare(str2) returns an integer indicating whether str is less, equal or greater than str2 according to the language rules
console.log("Österreich".localeCompare("Zealand")); // -1

// assignment
console.log(ucFirst("john") == "John");

function ucFirst(str) {
  return str[0].toUpperCase() + str.slice(1);
}

console.log(checkSpam("buy ViAgRA now"));
console.log(checkSpam("free xxxxx"));
console.log(checkSpam("innocent rabbit"));

function checkSpam(str) {
  if (str.toLowerCase().includes("viagra")) {
    return true;
  }
  if (str.toLowerCase().includes("xxx")) {
    return true;
  }
  return false;
}

console.log(
  truncate("What I'd like to tell on this topic is:", 20) ==
    "What I'd like to ..."
);

console.log(truncate("Hi everyone!", 6) == "Hi ...");

function truncate(str, maxLength) {
  if (str.length > maxLength) {
    console.log(str.slice(0, maxLength - 3) + "...");
    return str.slice(0, maxLength - 3) + "...";
  }
  return str;
}

console.log(extractCurrencyValue("$120") === 120); // true

function extractCurrencyValue(moneyString) {
  return Number(moneyString.slice(1));
}
