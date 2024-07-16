"use strict";

// The “while” loop
let i = 0;
while (i < 3) {
  // shows 0, then 1, then 2
  console.log(i);
  i++;
}

// The “do…while” loop
let i2 = 0;
do {
  console.log(i2);
  i2++;
} while (i2 < 3);

// The "For" loop
for (let i = 0; i < 3; i++) {
  // shows 0, then 1, then 2
  console.log(i);
}

// Breaking the loop
for (let i = 0; i < 8; i++) {
  console.log(i);
  if (i === 1) break;
}

// Continue to the next iteration
for (let i = 0; i < 10; i++) {
  // if true, skip the remaining part of the body
  if (i % 2 == 0) continue;

  console.log(i); // 1, then 3, 5, 7, 9
}

// Labels for break/continue
outer: for (let i = 0; i < 3; i++) {
  inner: for (let j = 0; j < 3; j++) {
    let input = "some value";

    // if an empty string or canceled, then break out of both loops
    if (!input) break outer; // (*)

    // do something with the value...
  }
}

console.log("Done!");

for (let i = 2; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

let i3 = 0;

while (i3 < 3) {
  console.log(`number ${i3}!`);
  i3++;
}

let n = 10;

nextPrime: for (let i = 2; i <= n; i++) {
  // for each i...

  for (let j = 2; j < i; j++) {
    // look for a divisor..
    if (i % j == 0) continue nextPrime; // not a prime, go next i
  }

  console.log(i); // a prime
}
