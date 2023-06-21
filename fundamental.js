"use strict"; // we have to use strict mode always in all script files
/*
// function declaration -> function that can be used before it's declared

function fruitCount(apple, oranges)
{
   return `In this bucket there is ${apple} apple and ${oranges} oranges`; 
}

const calcFruit1 = fruitCount(5,6);
console.log(calcFruit1);

// function expression -> return value (anonymous function) -> essentialy a function value stored in a variable

const fruitCount2 = function(apple, oranges)
{
   return `In this bucket there is ${apple} apple and ${oranges} oranges`; 
}

// now we can treat fruitCount2 keyword as a function 
console.log(fruitCount2(10,30)); 

// Arrow function -> great for  quick one -line function that has no this keyword (more later)....

// const addTwoValue = () => 45 + 54;
// console.log(addTwoValue());

// middle name
function middleName(mid)
{
    return mid;
}

// function calling other function
function myName(first, last)
{
    const middle = middleName('Kumar'); // <---- calling
    const addName = `${first} ${middle} ${last}`;
    return addName;
}

const fullName = myName('Arun','Jangra');
console.log(fullName); 


// <---------------Arrays------------------------------>

// created array statically
const age = [12,13,15,64];
console.log(age);

age[2] = 17;
console.log(age);

// created array dynamically
const myNewArray = new Array('arun', 'kumar', 'jangra');
console.log(myNewArray);

console.log(age[age.length - 1]);

const firstName = 'Arun';
const arun = [firstName, 'kumar', age]; //<-- array inside a array
console.log(arun); 

// Some basic array methods

const friends = new Array('arun', 'amresh', 'ojas');

// 1. push() method -> returns lenght of the new array
friends.push('manish'); // <-- add in the end of array
console.log(friends);

// 2. pop() method -> to delete/ remove the last index value
friends.pop();  
console.log(friends);

// 3. unshift() -> to add the value at the beginning and also return the length of the array after adding the value
const newLength = friends.unshift("Manish");
console.log(friends);
console.log(newLength);

// 4. shift() -> to remove the element from the beginning index
const poppedElement = friends.shift();
console.log(friends);
console.log(poppedElement);

// 5. indexOf() -> returns the index of element
console.log(friends.indexOf('ojas'));   
console.log(friends.indexOf(34)); // if element not present then it return -1

// 6. includes() -> returns true if the element present or returns false if the element not present

console.log(friends.includes('manish'));
console.log(friends.includes('amresh')); 

const arun = [  // Array with all type of data
    'Arun',
    'Kumar',
    21,
    ['Amresh', 'Ojas', 'Manish']
] 

< -------------------------Objecs---------------------------- >

// objects -> also a data sturcture in js -> store data in key value pair

const Arun = {  // also known as object literals and this is the best method to initialize the objects
    firstName : 'Arun',
    lastName : 'Jangra',
    age : 21,
    friends : ['Amresh', 'Ojas', 'Manish']
}

// difference between dot and [] to retrieve the data from object

// 1. Using dot notation 
//console.log(detailsObject.lastName);

// 2. Using brackets
//console.log(detailsObject['lastName']); // write the key in bracket always in the string format

// const nameKey = 'Name';
// const dost = 'friends';
// console.log(detailsObject['first' + nameKey]);
// console.log(detailsObject['last' + nameKey]);
// console.log(detailsObject[dost]);   // without string if it is a variable and consist a property name of string type;

// -> Change any property of object and add new property with key 
// detailsObject.middleName = 'Kumar';
// console.log(detailsObject);

console.log(`${Arun.firstName} has ${Arun.friends.length} friends, and his best friend is called ${Arun.friends[0]}`);


// objects methods
const arun = {  
    firstName : 'Arun',
    lastName : 'Jangra',
    birthYear : 2001,
    friends : ['Amresh', 'Ojas', 'Manish'],
    hasDriverLicence : false,

    // calcAge : function(){  // now calcAge is property not a regular variable
    //     console.log(this);
    //     return 2023 - this.birthYear;
    // }   

    calcAge : function(){
        this.age = 2023 - this.birthYear;
        return this.age;
    }
};

console.log(arun.calcAge());
// console.log(arun['calcAge']());

console.log(arun.age);

console.log(`${arun.firstName} is a ${arun.age}-year old student, and he has ${arun.hasDriverLicence ? 'a' : 'no'} driver's license.
`)


//<-------------------------Loops----------------------------->

// for loop
for( let rep = 1; rep <= 10; rep++){
    console.log(`Hello ${rep}`);
} */

// Looping Array, Breaking and Continue
// const arun = [  
//     'Arun',
//     'Kumar',
//     21,
//     'student',
//     // ['Amresh', 'Ojas', 'Manish']
// ]

// console.table(arun);
// console.warn(arun);
// console.error(arun);

// const type = [];    // --> empty array

// console.log(type);  // --> printing empty array

// for(let i = 0; i < arun.length; i++){
    // console.log(arun[i] + " --> " +  typeof arun[i]);

    // insert the type of each data of arun array in type array
    // 1. way
    // type[i] = typeof arun[i];

    //2. 2nd way by push method
//     type.push(typeof arun[i]);
// }

// console.log(type);



// // while loop
// let i = 1;
// while(i <= 10){
//     console.log(`HELLO ${i}`);
//     i++;
// }   

// let dice = Math.floor(Math.random() * 6) + 1;

// while(dice !== 6){
//     console.log(`You rolled ${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1;
// } 

const measureKelvin = function () {
  const measurement = {
    type : 'temp',
    unit : 'celcius',
    value : prompt('Degrees celcius : ')    // prompt function always return string
  };
  console.table(measurement);
  const kelvin = Number(measurement.value) + 273;
  return kelvin;
};


// challange for printing values in different ways
const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = function(x){
    let str = '';
    for(let i = 0; i < x.length; i++){
        str += `${x[i]}°C in ${i+1} days ... `;
    }
    console.log(`... ` + str);
}
printForecast(data1);
