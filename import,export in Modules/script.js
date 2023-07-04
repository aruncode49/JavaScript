// JavaScript Modules
// As our programmer grows bigger, it may contain many lines of code, instead of putting everything in a single File, you can use modules to seperate codes in seperate files according to their function. This make our code organized and easier to maintain.

// import { multiply as mul } from "./utility.js"; // relative path of the file which we want to use

import * as utlity from "./utility.js"; // if we want to import all data from the utility file
console.log(utlity.addition(4, 5, 6));
console.log(utlity.multiply(4, 5, 6));
console.log(utlity.studentCounts);

// default import
import sub from "./utility.js";
console.log(sub(8, 2, 6));

// const result = multiply(4, 5, 6);
// console.log(result);

// const result = mul(3, 4, 5);
// console.log(result);
