'use strict';

// conversion
// console.log(Number('23'));
// console.log(+'23'); // + is used to conversion (string -> number)

// Parsing
// console.log(Number.parseInt('30px', 10));   // always start with a number
// console.log(Number.parseInt('e30px', 10)); // NaN

// console.log(Number.parseFloat('  2.5rem', 10)); // 2.5
// console.log(Number.parseInt('  2.5rem', 10)); // 2

// checking if value is a number
// console.log(Number.isFinite(20));  // true
// console.log(Number.isFinite('20')); // false
// console.log(Number.isFinite(+'20')); // true
// console.log(Number.isFinite(20 / 0)); // false

// console.log(Number.isInteger(23));  // true
// console.log(Number.isInteger('23')); // false
// console.log(Number.isInteger(23.0)); // true

////////////////////////////////////////////////////////////////
///////////// Math And Rounding ////////////////////////////////

// Maths
// console.log(Math.sqrt(25)); // square root
// console.log(25 ** (1/2)); // square root
// console.log(8 ** (1/3)); // cubic root

// console.log(Math.max(3,5,6,23,645,34)); // 645
// console.log(Math.max(3,5,6,23,'645',34)); // 645 -> due to coersion
// console.log(Math.max(3,5,6,23,'645px',34)); // NaN (max fn does not parse)
// console.log(Math.min(3,53,2,5,1)); // 1

// console.log(Math.PI); // 3.1415....
// suppose the radius of circle is 10px then find the area of circle
// console.log(Math.PI * Number.parseFloat('10px') ** 2);

// console.log(Math.trunc(Math.random() * 6 + 1)); // 1 - 6
// generalize the random method

// const randomInt = (min, max) => {
//     const num = Math.floor(Math.random() * (max - min) + 1) + min;
//     return num;
// }
// console.log(randomInt(10, 20)); // random number => 10 - 20

//-------------------------------------------------------------------------

// Rounding Integers
// console.log(Math.round(23.4)); // round -> 23
// console.log(Math.round(23.9)); // round -> 24

// console.log(Math.ceil(23.3)); // round-up -> 24
// console.log(Math.ceil(23.9)); // round-up -> 24

// console.log(Math.floor(23.9)); // round-down -> 23
// console.log(Math.floor(23.9)); // round-down -> 23

// console.log(Math.trunc(23.5)); // just remove the decimal part -> 23

// console.log(Math.trunc(-23.7)); // -23
// console.log(Math.floor(-23.7)); // -24

// Rounding Decimals
// console.log((2.7).toFixed(0)); // string -> 3
// console.log((2.7).toFixed(3)); // string -> 2.700
// console.log((2.3457).toFixed(2)); // string -> 2.35
// console.log(+(2.3457).toFixed(2)); // Number -> 2.35

//-----------------------------------------------------------------------

// Remainder Operator
// console.log(5 % 2); // 1
// console.log(4 % 2); // 0

// check a number is even or odd
// const checkEvenOrOdd = function (num) {
//   return num % 2 ? "Odd" : "Even";
// };
// console.log(checkEvenOrOdd(5)); // odd
// console.log(checkEvenOrOdd(8)); // even
// console.log(checkEvenOrOdd(9)); // odd
// console.log(checkEvenOrOdd(92)); // even

//----------------------------------------------------------------------

// Numeric Seperator (Imp)
// const diameter = 287_460_000_000;  // 287,460,000,000 -> underscore is more readable
// console.log(diameter); // 287460000000 underscore are ignored

// const price = 345_34;
// console.log(price); // 34534

// console.log(Number('234000')); // 234000
// console.log(Number('234_000')); // NaN

//-----------------------------------------------------------------
// Big Int (It is used to store a big integer as larage we want)
// console.log(2 ** 53 - 1); // This is the largest number js can store
// console.log(Number.MAX_SAFE_INTEGER); // === 2 ** 53 - 1

// console.log(234395399329499493490333432343343534435n); // big int (n)
// console.log(BigInt(23439535)); // without n , but it work with small integer

// Operation
// console.log(1000n + 10000n);
// console.log(233444333333333333333n * 34000000n);

// const huge = 3345342453254656424n;
// const num = 23;
// console.log(huge * num); // error
// console.log(huge * BigInt(num)); // works fine

// console.log(20n > 18); // true
// console.log(20n === 20); // false (diff data types)

// Divisions
// console.log(10n / 3n); // closest bigInt 3n
// console.log(10 / 3);