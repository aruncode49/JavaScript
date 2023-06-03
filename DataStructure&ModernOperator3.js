"use strict";

// Which data structure to use ?
// 1: for simple lists -> Arrays or Sets
// 2: for key/value pairs -> Objects or Maps

// Arrays Vs Sets

// > Arrays :-
// > Use when you need ordered list of values (might contain duplicate)
// > Use when you need to manipulate data

// > Sets :-
// > Use when you need to work with unique values
// > Use when high-performance is really important
// > Use to remove duplicates from arrays

// Objects Vs Maps

// > Objects :-
// > More 'traditional' key/value store ("abused" objects)
// > Easier to write and access values with . and []
// > Use when you need to include function (methods)
// > Use when working with JSON (can convert to map)

// > Maps :-
// > Better performance
// > Keys can have any data type
// > Easy to iterate
// > Easy to compute size
// > Use when you simply need to map key to value
// > Use when you need keys that are not strings

// <--------------------------Strings--------------------------->

// const airline = "Tap Air India";
// const plane = "I320";

// console.log(airline.length);
// console.log(airline.indexOf('r'));
// console.log(airline.lastIndexOf('i'));
// console.log(airline.slice(4,9)); // (start : not include, end : include)
// console.log(plane.slice(1, plane.indexOf('0')));
// console.log(airline.slice(-2)); // count from end
// console.log(airline.slice(8, -1));

// const checkMiddleSeat = function (seat) {
//   const s = seat.slice(-1);
//   // const s = seat[seat.length - 1];
//   if (s === "B" || s === "E") console.log("You got the middle seat 😂");
//   else console.log("You got lucky 😎");
// };

// checkMiddleSeat("11B");
// checkMiddleSeat("23C");
// checkMiddleSeat("34E");

// string methods
// console.log(airline.toLowerCase()); // return a new string
// console.log(airline.toUpperCase()); // return a new string

// fix capitalization in name
// const passenger = 'aRUn';
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);

// Comparing emails
// const email = 'jangraak008@gmail.com';
// const loginEmail = 'JangrAaK008@Gmail.Com \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim(); // use to remove extra part
// console.log(trimmedEmail);

// const normalizeEmail = loginEmail.toLowerCase().trim();
// console.log(normalizeEmail);

// console.log(email === normalizeEmail);

// Replacing
// const priceIN = '₹288,97';
// const priceUS = priceIN.replace('₹', '$').replace(',','.');
// console.log(priceUS);

// const announcement = 'All passsenger come to boarding door 23. Boarding door 23';
// console.log(announcement.replace('door', 'gate'));
// console.log(announcement.replaceAll('door', 'gate'));
// another method to replace all entries from string
// console.log(announcement.replace(/door/g, 'gate')); // g stands for gloabally

// Booleans
// const plane = "Airbus A3256ne";
// console.log(plane.includes("A325"));
// console.log(plane.includes("to"));

// console.log(plane.startsWith("Air"));

// if (plane.startsWith("Airbus") && plane.endsWith("neo")) {
//   console.log("Part of the new Airbus family");
// }

// Practice exercise
// const checkBaggage = function (item) {
//   const baggage = item.toLowerCase();
//   if (baggage.includes("knife") || baggage.includes("gun")) {
//     console.log("You are not allowed on board");
//   } else {
//     console.log("Welcome aboard!");
//   }
// };

// checkBaggage("I have a laptop, some food and a pocket Knife");
// checkBaggage("Socks and Camera");
// checkBaggage("Got some snacks and a gun for protection");

// Split Method (Most powerful method of string)
// split function return array of data after seprating value by a certain seperator
// console.log('a+very+nice+string'.split('+'));
// console.log('Arun Kumar'.split(' '));

// from here split method is very usefull in destructuring
// const [firstName, lastName] = 'Arun Kumar'.split(' ');
// console.log(firstName,lastName);

// Join Method -> exactly opposite to split method
// const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
// console.log(newName);

// const capitalizeName = function (name) {
//   if we know that name is already in lowercase
//   const names = name.split(" ");
//   const namesUpper = [];

//   for (const n of names) {
//      namesUpper.push(n[0].toUpperCase() + n.slice(1));
//      or
//     namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
//   }
//   console.log(namesUpper.join(" "));
// };

// const passenger = "arun kumar jangra";
// capitalizeName(passenger);


// Padding
// const message = 'Go to gate 23!';
// console.log(message.padStart(20, ' '));
// console.log('Arun'.padStart(10, '-').padEnd(16, '-'));

// some real world example of padding (credit card mask)
// const maskCreditCard = function(number){
//     const str = number + '';
//     const last4Digit = str.slice(-4);
//     return (last4Digit.padStart(str.length, '*'));
// }

// const number = 146465465484134549875n;
// console.log(typeof number);
// console.log(maskCreditCard(number));
// console.log(maskCreditCard('451124546666632662'));

// Repeat Method
// const message = 'Bad weather... All Departures Delayed....';
// console.log(message.repeat(5));

// coding challange
// convert all string into camelCase
// underscore_case -> underscoreCase
// Some_Variable   -> someVariable
//     Calculate_AGE -> calculateAge
// delayed_departure -> delayedDeparture

// const convertToCamelCase = function(str){
//     const [first, second] = str.toLowerCase().trim().split('_');
//     const output = `${first}${second.replace(second[0], second[0].toUpperCase())}`;
//     console.log(output);
// }
// convertToCamelCase('underscore_case');
// convertToCamelCase('Some_Variable   ');
// convertToCamelCase('    Calculate_AGE');
// convertToCamelCase('delayed_departure');
