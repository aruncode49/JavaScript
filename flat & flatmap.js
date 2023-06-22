"use strict";

const arr = [[1, 2, 3], [4, 5, 6], 7, 8];

// flat() = used to remove nested array (with a specified depth)
// console.log(arr.flat(1)); // [1,2,3,4,5,6,7,8];

const arrDeep = [
  [[1, 2, 3], 4, 5],
  [6, [7, 8]],
];

// console.log(arrDeep.flat(2));

// Lets taking a real world example
const account1 = {
  movements: [1, 2, 3, 4, 5],
};
const account2 = {
  movements: [1, -2, 3, 4, -5],
};
const account3 = {
  movements: [0, 2, 30, 4, 50],
};
const account4 = {
  movements: [11, 22, 33, 44, 55],
};

const accounts = [account1, account2, account3, account4]; // nested array

// Your task : is to take out all the element from this accounts and print the sum of all element from the nested array

// eg : 1
const accountMovement = accounts.map((acc) => acc.movements);
const allMovemetns = accountMovement.flat();
const sum1 = allMovemetns.reduce((acc, mov) => acc + mov, 0);
console.log(sum1);

// eg : 2 => chaining -> Using flat();
const sum2 = accounts
  .map((acc) => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(sum2);

// eg : 3 => flatMap();
const sum3 = accounts
  .flatMap((acc) => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(sum3);
