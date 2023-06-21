'use strict';

////////////// 🌟slice method🌟////////////////////////

// 📝 Definiton : -> return a new array with the extracted part (not affecting the original array

let arr = ['a', 'b', 'c', 'd', 'e'];
// const slicedArray = arr.slice(undefined,3);
// console.log(slicedArray);
// console.log(arr.slice(3)); // 2 - end
// console.log(arr.slice(2,4)); // 2 - 3
// console.log(arr.slice(-2)); // last two element
// console.log(arr.slice(1, -2)); // start from 1 and and last two now not extracted ['b', 'c']


//////////// 🌟Splice method🌟 /////////////////////

// 📝 Definition : -> it change the original array (remove the element from an array and returned that deleted element)

// console.log(arr.splice(2));
// arr.splice(-1); // delete last element
// arr.splice(1,2); // delete start from 1 index and count 2 element from 1 index and deleted them
// console.log(arr);

//////////// 🌟Reverse method🌟 /////////////////////

// 📝 Definition : -> used to reverse the array and also mutate(change) the original array and return the reference of changed array or original array

// arr.reverse();
// console.log(arr);


//////////// 🌟Concat method🌟 /////////////////////

// 📝 Definition : -> Combines two or more arrays. This method returns a new array without modifying any existing arrays.

// let arr2 = [1, 2, 3];

// const newArray = arr.concat(1);
// console.log(newArray);

// // or
// console.log([...arr, ...arr2]);

//////////// 🌟Join method🌟 /////////////////////

// 📝 Definition : -> A string used to separate one element of the array from the next in the resulting string. If omitted, the array elements are separated with a comma.

console.log(arr.join('-'));

//////////// 🌟at method🌟 /////////////////////

const num = [23,34,52];
console.log(num.at(0)); // same as num[0];
console.log(num[num.length - 1]); // 52
//but if you don't know the length of array
// we can get out the last element using slice method also
console.log(num.slice(-1)[0]); // 52
// or
console.log(num.at(-1)); // 52
console.log('arun kumar'.at(3)); // working on strings