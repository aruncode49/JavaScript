"use strict";

// <---------Default values in function------------>

// const bookings = []; // creating array
// const createBooking = function (flightNum, numPassengers = 1, price = 199) {
  // In ES5 default values
  // numPassengers = numPassengers || 1;
  // price = price || 199;

//   const booking = {
//     flightNum, // by using enhanced object literals
//     numPassengers,
//     price,
//   };

//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking("LH123", 5, 200);

// <-----------How passing arguments works: value vs reference--------->

const flight = "LH234";
const arun = {
  name: "Arun Kumar",
  passport: 44343664757,
};

const checkIn = function (flightNum, passenger) {
  flightNum = "LH999"; // flightNum contains copy of flight not a actual variable
  passenger.name = "Mr. " + passenger.name; // passing reference to the passenger

  if (passenger.passport === 44343664757) {
    console.log("Checked In");
  } else {
    console.log("Wrong Passport");
  }
};

checkIn(flight, arun);
console.log(flight);
console.log(arun);

