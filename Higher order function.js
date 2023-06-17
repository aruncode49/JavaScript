"use strict";

const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

// Higher order function (for eg : addEventListner)
const transform = function (str, fun) {
  console.log(`Original String : ${str}`);

  console.log(`Transform String : ${fun(str)}`);

  console.log(`Transform by : ${fun.name}`);
};

// calling for call back function without '()'
// transform("javascript is the best", upperFirstWord);

// function returning a new function

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

//or by using arrow function
// const greet = (greeting) => (name) => console.log(`${greeting} ${name}`);

// const returnedFunction = greet("Hello");
// returnedFunction("Arun");
// returnedFunction("Amresh");

// // or
// greet("Hello")("Ojas");

// The Call and Apply Methods
const indigoFlight = {
  airline: "Indigo",
  iataCode: "IN",
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    console.log(this);
  },
};

// indigoFlight.book(354, 'Arun Kumar');

// Learning of call, apply and bind method()
// call();
let printName = function (address, city) {
  console.log(`${this.first} ${this.last} from ${address} ${city}`);
};

const x = {
  first: "Arun",
  last: "Kumar",
};

const y = {
  first: "Amresh",
  last: "Maurya",
};

// printName.call(y, "Rohtak", 'Sukhpura Chowk');

// apply();
// printName.apply(x, ["Meham", 'Goyat Pana']);

// Note : the only difference between call and apply method is in sending arguments in call the argument are in simple form and in the apply method the  argument in list of array

// bind()
// the bind method is completely same as call but the difference is that is bind the data and send the copy of the function that will be call further for the desired output.

// const fullName = printName.bind(x);
// console.log(fullName);
// fullName('Goyat Pana', 'Meham');

// In just simple way the bind method is just gives the copy of the function, which can be invoked later.

const runOnce = function () {
  console.log("This will never run again");
};

runOnce();

// or -> Immediately Invoked function expresson
(function(){
  console.log("This will never run again");
})();

// or -> for arrow IIFE
(() => console.log("This will never run again"))();
