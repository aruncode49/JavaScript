"use strict";

const arr = [1, 2, 3, 4, 5, 6];
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

// Empty array + fill method
const x = new Array(7); // 7 is size of array
console.log(x);

// console.log(x.fill(5)); // mutate the array
console.log(x.fill(5, 1, 4));

arr.fill(88, 2, 3);
console.log(arr);

// Array.from
const y = Array.from({ length: 5 }, () => 1);
console.log(y);

const z = Array.from({ length: 8 }, (_, i) => i + 1);
console.log(z);
