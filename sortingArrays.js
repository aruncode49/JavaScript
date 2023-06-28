"use strict";

// sort(); -> used to sort the array and also mutate the original array

// strings
const owners = ["manish", "arun", "ojas", "varun", "bhanu"];
console.log(owners.sort());

// Numbers
// if(a > b) return > 0 => B, A (switch order)
// if(a < b) return < 0 => A, B (keep order)

const numbers1 = [4, 633, 6, 2, 6, 577, 3, 1];
const numbers2 = [4, 633, 6, 2, 6, 577, 3, 1];

// Sort in Ascending Order
// const sortAscending = numbers1.sort((a, b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;
// });

// or
const sortAscending = numbers1.sort((a, b) => a - b);

// Sort in Descending Order
// const sortDescending = numbers2.sort((a, b) => {
//   if (a > b) return -1;
//   if (a < b) return 1;
// });

// or
const sortDescending = numbers2.sort((a, b) => b - a);

console.log(sortAscending);
console.log(sortDescending);
