// 👉🏻 Definition 1 : A closure is the closed-over variable enviourment of the execution context in which a function was created, even after that execution context is gone;

// 👉🏻 Definition 2 : A closure gives a function access to all the variables of its parent function, even after that parent function has returned. The function keeps a reference to its outer scope, which preserves the scope chain throughout time.

// 👉🏻 Definition 1 : A closure makes sure that a function does'nt loose connection to variables that existed at the function's birth place;

// 📝 Note : We do not have to manually create closures, this is a javascript feature that happens automatically. We can't even access closed-over variables explicitly. A closure is NOT a tangible javascript object.

const secureBooking = function () {
  let passengerCount = 0;

  return function booking() {
    passengerCount++;
    console.log(`${passengerCount} : passengers`);
  };
};

const booker = secureBooking();

// booker(); // increase value using closure implemented 1
// booker(); // increase value using closure implemented 2
// booker(); // increase value using closure implemented 3

// console.dir(booker); // where we can see the closure contains the variable enviourment or preserved the secureBooking

// More Closure Examples
// Example-1
let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 23;
  f = function () {
    console.log(b * 8);
  };
};

// g(); // this g() function create a variable execution context for f variable with internal implementation of closure

// f(); // at this point g is no longer in the execution context but the f varible can get executed using closure

// Re-assigning 'f' function

// h(); // this h() function create a variable execution context for f variable with internal implementation of closure

// f(); // at this point h is no longer in the execution context but the f varible can get executed using closure

// Example-2
const boardPassenger = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  // The setTime out function is completely independent from boardPassenger(), that function is run without wait for a time, but the variable enviourment of n, wait, pergroup are preserved in setTimeout function due to the concept of closure.

  console.log(`Will start boarding in ${wait} seconds`);
};

// boardPassenger(180, 3);

// Note : The scope chain has priority over closures
const perGroup = 1000;
boardPassenger(180, 3);