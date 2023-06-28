"use strict";

// Create a date

// new Date() -> Date Constructor
// new Date(date string)
// new Date(year,month) -> month in js is 0 based
// new Date(year,month,day)
// new Date(year,month,day,hours)
// new Date(year,month,day,hours,minutes)
// new Date(year,month,day,hours,minutes,seconds)
// new Date(year,month,day,hours,minutes,seconds,ms)

// use new Date() constructor
// const now = new Date(); // 2023-06-25T12:09:47.246Z
console.log(now);
console.log(new Date("2023-06-25T12:09:47.246Z"));
const d = new Date("2022-03-25");
console.log(d);

// or we can pass as new Date(year, )
console.log(new Date(2001, 9, 2, 5, 53));

// working with dates
const future = new Date(2037, 10, 19, 15, 23);
console.log(future);
console.log(future.getFullYear()); // 2037
console.log(future.getDate()); // 19
console.log(future.getDay()); // Thursday (day of the week)
console.log(future.getMonth()); // Nov (0 based)
console.log(future.getHours()); // 15 -> 3hr
console.log(future.getMinutes()); // 23
console.log(future.toISOString()); // 2037-11-19T09:53:00.000Z
console.log(future.getTime()); // 2142237180000 (milli-second)
console.log(new Date(2142237180000)); //same date with ms

console.log(Date.now()); // time stamp for now in m-second

// we can set all these property using set method
future.setFullYear(2040);
console.log(future);

// Operation on Dates
// const future = new Date(2037, 10, 19, 15, 23);

// number of days pass between two dates
const calcDaysPassed = function (date1, date2) {
  return Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);
};

// date2 - date1 = miliseconds
// convert miliseconds to days
// (miliseconds) / (1000 * 60 * 60 * 24)

const calculation = calcDaysPassed(
  new Date(2020, 7, 29),
  new Date(2020, 7, 28)
);

// Internationalizings Dates(INTL) -> Most Important
const now = new Date();

// // const options = {
//   hour: "numeric",
//   minute: "numeric",
//   day: "numeric",
//   month: "long",
//   year: "numeric",
//   weekday: "long",
// };

const locale = navigator.language; // automatic find the language of the user browser
console.log(locale);

labelDate.textContent = new Intl.DateTimeFormat(locale, options).format(now);

// Internationalization Numbers
const num = 234543646.2445;

console.log("US:   ", new Intl.NumberFormat("en-US").format(num));

const options = {
  style: "currency", // style: 'percent', style: 'unit',
  unit: "celsius",
  currency: "INR",
};

console.log("US:   ", new Intl.NumberFormat("en-US", options).format(num));
console.log("US:   ", new Intl.NumberFormat("hi-IN", options).format(num));
console.log("US:   ", new Intl.NumberFormat("de-DE", options).format(num));

////////////////////////////////////////////////////////////////////////////////////
/////////////////// Timers: setTimeout And setInterval (Most Important)

// 1. setTimeout() : The global setTimeout() method sets a timer which executes a function or specified piece of code once the timer expires. And this is known as Asynchronous Javascript

/*
setTimeout(functionRef)
setTimeout(functionRef, delay)
setTimeout(functionRef, delay, param1)
setTimeout(functionRef, delay, param1, param2)
setTimeout(functionRef, delay, param1, param2....paramN), 
*/

///// 1.
setTimeout(() => console.log("Here is your pizza 🍕"), 3000);

/////// 2.
setTimeout(
  (ing1, ing2) => console.log(`Here is your pizza 🍕 with ${ing1} and ${ing2}`),
  3000,
  "olives",
  "spinach"
);
console.log("Waiting....");

//////// 3.
const ingredients = ["olives", "onion", "tomato"];
const timer = setTimeout(
  (ing1, ing2, ing3) =>
    console.log(`Here is your pizza 🍕 with ${ing1} and ${ing2} and ${ing3}`),
  3000,
  ...ingredients
);
console.log("Waiting...."); // run without wait for setTimeout function

if (ingredients.includes("spinach")) clearTimeout(timer);

/*
2. setInterval : The setInterval() method calls a function at specified intervals (in milliseconds).

The setInterval() method continues calling the function until clearInterval() is called, or the window is closed.

1 second = 1000 milliseconds.
*/

// const timer = setInterval(function () {
//   const now = new Date();
//   console.log(now);
// }, 1000);
// clearInterval(timer);

// Challange = print the real clock timer on console
let count = 1; // for stopping the interval

const time = function () {
  let now = new Date();
  let hour = now.getHours();
  let min = now.getMinutes();
  let sec = now.getSeconds();

  let session = "AM";
  if (hour === 0) {
    hour = 12;
  }
  if (hour > 12) {
    hour -= 12;
    session = "PM";
  }

  hour = hour < 10 ? "0" + hour : hour;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;

  console.log(`${hour}:${min}:${sec} ${session}`);

  if (count === 10) {
    clearInterval(clockTimer);
  }

  count++;
};

time();
const clockTimer = setInterval(time, 1000);
