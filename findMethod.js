"use strict";

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// The find method return a first element which match the condition; (not return an array)
// the goal of find() method is just to find the first element

const firstWithdrawal = movements.find((mov) => mov < 0);
console.log(firstWithdrawal);

// lets take a real world example
const obj1 = {
  name: "arun",
  age: 22,
};

const obj2 = {
  name: "amresh",
  age: 21,
};

const obj3 = {
  name: "ojas",
  age: 24,
};

const accounts = [obj1, obj2, obj3];
const findArunAcc = accounts.find((acc) => acc.name === "amresh");
console.log(findArunAcc); // obj2

// and the same example with for-of loop
for (const acc of accounts) {
  if (acc.name === "amresh") {
    console.log(acc);
  }
}
