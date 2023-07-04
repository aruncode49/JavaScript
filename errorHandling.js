"use strict";
// ********************************************************//
// console.log(age); // error: 'Reference Error': age is not defined;

// const important = 4*6;
// console.log(important); // not execute because of the above error occus

// ********************************************************//
// then catch this error:------> using try and catch block
try {
  console.log(age);
} catch (err) {
  // In catch block by-default we get two thing name & message
  console.log(err.name); // ReferenceError
  console.log(err.message); // age is not defined
}

const important = 4 * 6;
console.log(important); // now this code is executed because the error is caught

// ********************************************************//
// throw custom errors and finally block
try {
    const res = prompt('Are you a robot');
    if(res == 'Y'){
        // throw new Error('Robot found'); // error
        // throw anything; // throw any value
        // throw {error : any}; // throw an object
    }
} catch (error) {
    console.log(error);
} finally{
    console.log("Always executed code whenever try or catch present or not");
}
