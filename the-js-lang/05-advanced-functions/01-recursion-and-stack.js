"use strict";

// // when a function calls itself. That’s called recursion.
// // Iterative thinking: the for loop:
// function powIter(x, n) {
//   let result = 1;

//   // multiply result by x n times in the loop
//   for (let i = 0; i < n; i++) {
//     result *= x;
//   }

//   return result;
// }

// console.log(powIter(2, 3)); // 8

// function powRecur(x, n) {
//   if (n == 1) {
//     return x;
//   } else {
//     return x * powRecur(x, n - 1);
//   }
// }

// console.log(powRecur(2, 3)); // 8

// // Recursive traversals
// let company = {
//   // the same object, compressed for brevity
//   sales: [
//     { name: "John", salary: 1000 },
//     { name: "Alice", salary: 1600 },
//   ],
//   development: {
//     sites: [
//       { name: "Peter", salary: 2000 },
//       { name: "Alex", salary: 1800 },
//     ],
//     internals: [{ name: "Jack", salary: 1300 }],
//   },
// };

// // The function to do the job
// function sumSalaries(department) {
//   if (Array.isArray(department)) {
//     // case (1)
//     return department.reduce((prev, current) => prev + current.salary, 0); // sum the array
//   } else {
//     // case (2)
//     let sum = 0;
//     for (let subdep of Object.values(department)) {
//       sum += sumSalaries(subdep); // recursively call for subdepartments, sum the results
//     }
//     return sum;
//   }
// }

// console.log(sumSalaries(company));

// // Recursive structures
// // A recursive (recursively-defined) data structure is a structure that replicates itself in parts.
// // For web-developers there are much better-known examples: HTML and XML documents.
// // In the HTML document, an HTML-tag may contain a list of: Text pieces. HTML-comments. Other HTML-tags (that in turn may contain text pieces/comments or other tags etc).

// // Linked list
// // let list = {
// //   value: 1,
// //   next: {
// //     value: 2,
// //     next: {
// //       value: 3,
// //       next: {
// //         value: 4,
// //         next: null,
// //       },
// //     },
// //   },
// // };

// let list = { value: 1 };
// list.next = { value: 2 };
// list.next.next = { value: 3 };
// list.next.next.next = { value: 4 };
// list.next.next.next.next = null;

// // The list can be easily split into multiple parts and later joined back:
// let secondList = list.next.next;
// list.next.next = null;

// // To join
// list.next.next = secondList;

// // prepend the new value to the list
// list = { value: "new item", next: list };

// // To remove a value from the middle, change next of the previous one:
// list.next = list.next.next;

// assignments
// function sumTo(n) {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     sum += i;
//   }
//   return sum;
// }

// function sumTo(n) {
//   if (n == 1) return 1;
//   return n + sumTo(n - 1);
// }

// function sumTo(n) {
//   return (n * (n + 1)) / 2;
// }

// console.log(sumTo(100)); // 5050

// function factorial(n) {
//   if (n === 1) {
//     return n;
//   } else {
//     return n * factorial(n - 1);
//   }
// }

// console.log(factorial(5));

// // extremely unoptimized for large number of n.
// // function fibonacci(n) {
// //   if (n <= 1) {
// //     return n;
// //   } else {
// //     const num = fibonacci(n - 1) + fibonacci(n - 2);
// //     console.log(num);
// //     return num;
// //   }
// // }

// function fibonacci(n) {
//   let a = 1;
//   let b = 1;
//   for (let i = 3; i <= n; i++) {
//     let c = a + b;
//     console.log(b);
//     a = b;
//     b = c;
//   }
//   return b;
// }
// console.log(fibonacci(77));

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

function iterateList(linkedList) {
  let tmp = list;

  while (tmp) {
    console.log(tmp.value);
    tmp = tmp.next;
  }
}

iterateList(list);

function printList(list) {
  console.log(list.value); // output the current item

  if (list.next) {
    printList(list.next); // do the same for the rest of the list
  }
}

printList(list);

function printReverseList(list) {
  if (list.next) {
    printReverseList(list.next);
  }

  console.log(list.value);
}

printReverseList(list);

function iterateReverseList(list) {
  let arr = [];
  let tmp = list;

  while (tmp) {
    arr.push(tmp.value);
    tmp = tmp.next;
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
  }
}

iterateReverseList(list);
