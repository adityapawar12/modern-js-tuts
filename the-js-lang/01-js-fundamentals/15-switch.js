"use strict";

let a = 2 + 2;

switch (a) {
  case 3:
    console.log("Too small");
    break;
  case 4:
    console.log("Exactly!");
    break;
  case 5:
    console.log("Too big");
    break;
  default:
    console.log("I don't know such values");
}

switch (a) {
  case 3:
    console.log("Too small");
  case 4:
    console.log("Exactly!");
  case 5:
    console.log("Too big");
  default:
    console.log("I don't know such values");
}

// Grouping of “case”
let a2 = 3;

switch (a2) {
  case 4:
    console.log("Right!");
    break;

  case 3: // (*) grouped two cases
  case 5:
    console.log("Wrong!");
    console.log("Why don't you take a math class?");
    break;

  default:
    console.log("The result is strange. Really.");
}

// Type matters
let arg = "3";
switch (arg) {
  case "0":
  case "1":
    console.log("One or zero");
    break;

  case "2":
    console.log("Two");
    break;

  case 3:
    console.log("Never executes!");
    break;
  default:
    console.log("An unknown value");
}

let browser = "Firefox";

switch (browser) {
  case "Edge":
    console.log("You've got the Edge!");
    break;

  case "Chrome":
  case "Firefox":
  case "Safari":
  case "Opera":
    console.log("Okay we support these browsers too");
    break;

  default:
    console.log("We hope that this page looks ok!");
}

if (browser === "Edge") {
  console.log("You've got the Edge!");
} else if (
  browser === "Chrome" ||
  browser === "Firefox" ||
  browser === "Safari" ||
  browser === "Opera"
) {
  console.log("Okay we support these browsers too");
} else {
  console.log("We hope that this page looks ok!");
}

let a3 = 0;

if (a3 == 0) {
  console.log(0);
}
if (a3 == 1) {
  console.log(1);
}

if (a3 == 2 || a3 == 3) {
  console.log("2,3");
}

switch (a3) {
  case 0:
    console.log(0);
    break;

  case 1:
    console.log(1);
    break;

  case 2:
  case 3:
    console.log("2,3");
    break;
}
