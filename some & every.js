"use strict";

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log(movements);

// Equality
console.log(movements.includes(450));

// If we want to add some condition on them -> some()

// Some : Condition
console.log(movements.some((mov) => mov === -130));

const anyDeposite = movements.some((mov) => mov > 0);
console.log(anyDeposite);

// Every : condition ( if all of the element in the array satisfy to the condition)

console.log(movements.every((mov) => mov > 0)); // false

// Seperate callback
const deposite = (mov) => mov > 0;

console.log(movements.some(deposite));
console.log(movements.every(deposite));
console.log(movements.filter(deposite));
