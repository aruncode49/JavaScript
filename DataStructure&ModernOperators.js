"use strict";

// <------------------DESTRUCTURING ARRAYS ---------------------->

// const restaurant = {
//     name : 'Vijay The Dhabba',
//     location : 'Meham',
//     categories : ['veg', 'non-veg', 'chinese'],
//     starterMenu : ['daal', 'roti', 'egg'],
//     mainMenu : ['pizza', 'pasta', 'burger'],

//     order : function(starterIndex, mainIndex){
//         return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//     }
// };

// const arr = [10, 20, 30, 40];

// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// console.log(a,b,c);

// by using destructuring {declaring more than one variable at a time}
// const [x,y,z] = arr; // destructuring assignment (not a array of variable)
// console.log(x,y,z);

// let [first, ,second] = restaurant.categories;
// console.log(first, second);

// Can we swap value of first and second variable
// const temp = first;
// first = second;
// second = temp;

// console.log(first, second);

//  swap using destructuring
// [first, second] = [second, first];
// console.log(first, second);

// Recieve 2 return value from a function
// const [starter, main] = restaurant.order(0,2);
// console.log(starter, main);

// Destructuring in Nested array
// const nested = [2, 4, [5, 6]];
// const [i, ,j] = nested;
// console.log(i, j);

// .........or.........
// nested destructuring
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// Default values
// const [p=1, q=2, r=3] = [8,9];
// console.log(p,q,r);

// <------------------DESTRUCTURING OBJECTS ---------------------->

// const restaurant = {
//   name: "Vijay The Dhabba",
//   location: "Meham",
//   categories: ["veg", "non-veg", "chinese"],
//   starterMenu: ["daal", "roti", "egg"],
//   mainMenu: ["pizza", "pasta", "burger"],

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // open 24 Hours
//       close: 24,
//     },
//   },

//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },

//   // function parameters are destructured so, we have to pass only the object not some specific argument variables
//   orderDelivery: function ({time, address, mainIndex, starterIndex}) {
//     console.log(
//       `Order Recieved ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}, will be delivered to ${address}, at ${time}`
//     );
//   },
// };

// Destructuring using object property as a variable name
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// variable name diffrent from property name
// const {
//   name: restaurantName,
//   openingHours: time,
//   categories: ctgry,
// } = restaurant;

// console.log(restaurantName, time, ctgry);

// default values in object
// const {menu = [], starterMenu : starter = []} = restaurant;
// console.log(menu, starter);

// Mutating Variables
// let a = 100;
// let b = 123;
// const obj = { a: 23, b: 32, c: 50 };
// ({ a, b } = obj);
// console.log(a, b);

// Nested Objects
// const {
//   fri: { open: o, close: c },
// } = restaurant.openingHours;
// console.log(o, c);

// passing objects in function
// restaurant.orderDelivery({
//   time: '23:12',
//   address: "Meham (Rohtak)",
//   mainIndex: 2,
//   starterIndex: 2,
// });

// <----------------------------SPREAD OPERATOR (...) -------------------------->
// const arr = [7, 8, 9];
// const newArr1 = [1, 2, arr[0], arr[1], arr[2]];

// or
// const newArr2 = [1, 2, ...arr];
// (...) => taking all the elements out of the array and write them manually
// console.log(newArr2);

// const arr1 = [1, 2, 3];
// const arr2 = [1, 2, 3];
// const arr3 = [1, 2, 3];

// const newArr3 = [...arr1, ...arr2, ...arr3];
// console.table(newArr3);

// const restaurant = {
//   name: "Vijay The Dhabba",
//   location: "Meham",
//   categories: ["veg", "non-veg", "chinese"],
//   starterMenu: ["daal", "roti", "egg"],
//   mainMenu: ["pizza", "pasta", "burger"],

//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },

//   orderPasta: function (ing1, ing2, ing3) {
//     console.log(`Here is your delecious pasta with ${ing1}, ${ing2}, ${ing3}`);
//   },
// };

// adding a new property using old property element
// restaurant["newMainMenu"] = [...restaurant.mainMenu, 'momoz', 'fingers', 'rissole'];
// console.log(restaurant);

// spread operator is used to make shallow copy or merging arrays
// const mainMenuCopy = [...restaurant.mainMenu]; // shallow copy

// Iterables are : arrays, strings, maps, sets. NOT : Objects
// const str = "Arun Kumar";
// const letters = [...str];
// console.log(letters);

// console.log(...str);
// console.log('A', 'r', 'u', 'n');

// const ingredients = [
//   prompt("Let's make pasta! Ingredients 1?"),
//   prompt("Ingredients 2?"),
//   prompt("Ingredients 3?"),
// ];

// console.log(ingredients);
// restaurant.orderPasta(...ingredients);

// <------------------------------REST OPERATOR-------------------------------------->

// SPREAD , because on Right side of assignment operator (=)
// const example = [1, 2, ...[3, 4]];

// REST , because on left side of assignment operator (=)
// const [a, b, ...others] = [1, 2, 3, 4, 5]; // (now ... is rest not spread)
// console.log(a, b, others);

// rest pattern collects data and create array of that data

// function rest (...num){
//   console.table(num);
// }

// rest(1, 2, 3);

// const add = (...num) => {
//   let sum = 0;
//   for (let i = 0; i < num.length; i++) {
//     sum += num[i];
//   }
//   console.log(sum);
// };

// const x = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// add(...x); // spread 😂

// add(1, 2, 3, 4, 5);
// add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
// add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15);


// <---------------------------SHORT CIRCUITING (&& ,||)----------------------------------->

// use any data type , return any data type, -> short circuiting
// console.log(3 || 'Arun'); // first 3 is true so it returns
// console.log('' || "Arun"); // first '' is false so 'Arun' is true
// console.log(true || 0); // first is true
// console.log(undefined || null); // null should be true than undefined

// console.log(undefined || 0 || '' || null || 23 || "Hello");

// usecase of 'OR' short circuiting -> get rid from ternary operator
// eg

// const testingName = 'HUNNY'; // falsy value 
// const firstName = testingName ? 'HUNNY' : 'ARUN';
// console.log(firstName);

// const firstName = testingName || 'ARUN';
// console.log(firstName);

// NOTE = In OR operator if the first value is true then by shortcircuiting it immedieately return that true value;

// NOTE = In AND operator if the first value is false then by shortcircuiting it immedieately return that falsy value;

//eg ---> it is exactly opposite to 'OR' 

// console.log(0 && 45);
// console.log('arun' && null && 'kumar');
// console.log(true && false);

// if (restaurant.orderPasta) {
//   restaurant.orderPasta('banana', 'apple', 'orange');
// }

// restaurant.orderPasta && restaurant.orderPasta('banana', 'apple', 'orange');
 

// <-------------------THE NULLISH COALESCING OPERATOR (??)--------------------->

// const value = 0;
// let ans = value || 10;
// console.log(ans);

// the nullish operator works on the idea of nullish values (null, undefined) not on falsy value
// ans = value ?? 10;  // 0 -> false
// console.log(ans);


// ans = null ?? value ?? 10;
// console.log(ans);

// <-------------------LOGICAL ASSIGNMENT OPERATOR --------------------->
// const num1 = 10;
// const num2 = 12;

// let num3 = num1 || num2;
// console.log(num3);

// num2 ||= 10; // ----> num3 = num3 || 10
// console.log(num2);

// const str1 = 'arun';

// const str2 = str1 && '<ANONYMOUS>';
// console.log(str2);