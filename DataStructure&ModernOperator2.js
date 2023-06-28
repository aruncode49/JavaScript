"use strict";

// <-------for of--------------->
// const restaurant = {
//   name: "sher-e-punjab",
//   location: "meham",
//   starter: ["ice-cream", "salad", "daal", "soft-drink"],
//   mainMenu: ["roti", "meggi", "pasta", "pizza"],

// };

// const foodItem = [...restaurant.starter, ...restaurant.mainMenu];

// for (const item of foodItem) {
//   console.log(item);
// }

// for (const [i, el] of foodItem.entries()){
//     console.log(`${i + 1} : ${el}`);
// }

// console.log(...foodItem.entries());

// <-------Enhanced Object Literal---------------->

// const openingHours = {
//   thu: {
//     open: 12,
//     close: 22,
//   },
//   fri: {
//     open: 11,
//     close: 23,
//   },
//   sat: {
//     open: 0, // open 24 Hours
//     close: 24,
//   },
// };

// const restaurant = {
//   name: "sher-e-punjab",
//   location: "meham",
//   starter: ["ice-cream", "salad", "daal", "soft-drink"],
//   mainMenu: ["roti", "meggi", "pasta", "pizza"],

//   // ES6 Enhanced Object Literal
//   openingHours,

//   // ES6 Enhanced Object Literal (new way for methods)
//   order(starterIndex, mainIndex) {
//     return [this.starter[starterIndex], this.mainMenu[mainIndex]];
//   },

//   orderDelivery({ time, address, mainIndex, starterIndex }) {
//     console.log(
//       `Order Recieved ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}, will be delivered to ${address}, at ${time}`
//     );
//   },
// };



// <---------------Maps------------------------->
// Map is a data structure which is used to map values with keys, in objects the key is only type of string, but in maps the key is of any type

// eg
// const rest = new Map();
// rest.set("name", "Sher-e-punjab");
// rest.set(1, "Meham");
// // console.log(rest.set(2, "Rohtak"));
// rest
//   .set("categories", ["ice-cream", "salad", "daal", "soft-drink"])
//   .set("mainMenu", ["roti", "meggi", "pasta", "pizza"])
//   .set("open", 11)
//   .set("close", 12)
//   .set(true, "We are open")
//   .set(false, "We are close");

// console.log(rest.get("name"));
// console.log(rest.get(true));
// console.log(rest.get(2));
// console.log(rest.get("categories"));

// methods available in maps
// console.log(rest.has('categories'));
// rest.delete(1);
// console.log(rest.has(1));
// console.log(rest.size);
// rest.clear();

// const arr = [1, 2];
// rest.set(arr, 'Array');
// console.log(rest.get(arr));

// rest.set(document.querySelector('h1', 'Heading'));
// console.log(rest);

// Maps Iteration
// const question = new Map([
//   ['question', 'What is the best programming language in the world?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'JavaScript'],
//   [4, 'C++'],
//   ['Correct', 3],
//   [true, 'Correct 🥳'],
//   [false, 'Try again'],
// ]);
// console.log(question);

// convert object to maps
// console.log(Object.entries(openingHours));
// const hourMap = new Map(Object.entries(openingHours));
// console.log(hourMap);

// for (const [key, value] of question){
//   if(typeof key === 'number')
//     console.log(`Answer ${key} : ${value}`);
// }

// convert map to array 
// console.log(...question);
// console.log(...question.entries());
// console.log(...question.keys());
// console.log(...question.values());

// <------------------Sets--------------------------->

// Sets is just a collection of unique values

// const ordersSet = new Set(["Pasta", "Pizza", "Pizza", "Rissole", "Pasta"]);

// console.log(ordersSet);
// console.log(ordersSet.size);  // consider only unique elements
// console.log(ordersSet.has('Pizza'));
// ordersSet.add('Burger');
// ordersSet.add('Burger');
// console.log(ordersSet);
// ordersSet.delete('Pizza');
// ordersSet.clear(); // delete all elements
// console.log(ordersSet);

// for (const item of ordersSet){
//   console.log(item);
// }

// Example (use case)
// const staff = ['a', 'b', 'c', 'a', 'b'];
// const staffUnique = [...new Set(staff)];
// console.log(staffUniqu);

// <----------Looping Objects------------------->

// Property values
// const properties = Object.values(openingHours);
// console.log(properties);

// Entries object
// const entries = Object.entries(openingHours);
// console.log(entries);

// for (const [day, {open, close}] of entries) {
//   console.log(`${day} -> open at ${open} & close at ${close}`);
// }

// console.log(restaurant.order(1,2));

// const user = [{ name: "arun", email: "jangraak008@gmail.com" }];

// if (user[0]){
//   console.log(user[0].name);
// }

// by optional chaining (?.)
// console.log(user[0] ?. name || 'User array Empty');
