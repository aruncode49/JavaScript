"use strict";

const name = "Arun";
const copyName = name; // passing copy of name value in copyName
console.log(copyName);

// Note: All primitive data types are passed by value
// and Non-primitive data types are passed by reference eg, Objects, Arrays

const person = {
  name: "Arun",
};

const secondPerson = person; // pass by reference
person.name = "Amresh";
console.log(secondPerson); // contains amresh not arun

// if we want to pass just properties and methods of objects or array we use destructuring
const thirdPerson = { ...person }; // extract elements from person
person.name = "Ojas";
console.log(thirdPerson); // still print amresh
