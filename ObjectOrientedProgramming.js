"use strict";

//////////////////////////// Object Oriented Programming ////////////////////////////

// OOPS : programming paradigm based on objects
// We use objecs to model (describe) real-world or abstract(HTML component or data structure) feature.
// Objects may contains -> data(properites) and code(method) or behaviour
// In OOP, object are self-contained piece/block of code;

/////////////////////////// Classes and Instances (Traditonal App)////////////////////////////

//➡️ Classes => like a blueprint from which we can create new objects
//➡️ Instances => These are the another name of an objects, we can say that objects are the instance of a class, from a classes we can make many objects as we want.

// How to design a class ? -> The Four Principles of OOP

//➡️ 1. Abstraction : Ignoring or hiding the implementation details that's don't matter.

//➡️ 2. Encapsulation : Keeping properties and methods private inside the class, so they are not accessible from outside the class. Some methods can be exposed as a public interface API.

//➡️ 3. Inheritance : Making all properties and methods of a certain class available to a  child class, forming a  hierarchical relationship between classes. This allow us to reuse common logic and to model real-world relationships.

//➡️ 4. Polymorphism : A child class can overwrite a method it inherited from a parent class.

/////////////////////////// OOP IN JAVASCRIPT : PROTOTYPES ////////////////////////////

// Note : All objects in JS are linked to a prototype object.

//➡️ Prototypal Inheritance : The prototype contains methods (behaviour) that are accessible to all objects linked to that prototype.

// How do we actually create prototypes? or in summary how we implement OOP in js in practice.
// So there are three methods

// 1. Constructor Function
//➡️ Technique to create object from a funciton
//➡️ This is how built-in objects like Arrays,Maps,Sets are actually implemented.

// 2. ES6 Classes
//➡️ Modern alternative to constructor function syntax
//➡️ ES6 does not behave like classes in "classical OOP"

// 3. Object.create()
//➡️ The easies and most straightforward way of linking an object to prototype object

////////////////////////////////////////////////////////////////////////////////////////////////////
// 👉🏻 1. Constuctor Function (by convention name of constructor always start with Capital letter)
/*
const Person = function (firstName, birthYear) {
  // creating constructor function
  this.firstName = firstName;
  this.birthYear = birthYear;

  // We should not create function inside the constructor function, we have to use prototype or prototype inheritance
  //   this.calAge = function () {
  //     console.log(2023 - this.birthYear);
  //   };
};

const arun = new Person("Arun", 2001); // calling a constructor function with new operator
console.log(arun); // Person Object {}

// What is happening behind the scene when we call a c.f using 'new' operator ?
// 1. New empty object {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const amresh = new Person("Amresh", "2001");
const ojas = new Person("Ojas", 2000);
// console.log(amresh, ojas);

console.log(arun instanceof Person); // true

// 👉🏻 ******************************************** Prototype (M.Imp) **********************************************

// All the objects that are created using the constructor function (in our case Person), will inherit or they will get access to all the methods and properties that are defined on this prototype property.

// lets add a method to this prototype property
// Person.prototype.calAge = function () {
//   console.log(2023 - this.birthYear);
// };

console.log(Person.prototype); // {function : **}
arun.calAge(); // printing the age
amresh.calAge();
ojas.calAge();

// we can check that every object is connected with a prototype property
console.log(arun.__proto__); //{ calAge: [Function (anonymous)] }
console.log(amresh.__proto__); //{ calAge: [Function (anonymous)] }
console.log(ojas.__proto__); //{ calAge: [Function (anonymous)] }
console.log(arun.__proto__.__proto__); // Object

//➡️ Note : Person.prototype is not the prototype of Person, infact it is of the Object that are created using Person.
// Lets confirm :
console.log(Person.prototype.isPrototypeOf(arun)); // true
console.log(Person.prototype.isPrototypeOf(ojas)); // true
console.log(Person.prototype.isPrototypeOf(Person)); // false

// prototype on properties
Person.prototype.religion = "Hindu";
console.log(arun.religion);
console.log(arun.hasOwnProperty("religion")); // false , but only access of prototype property

// ➡️ Prototypal Inheritance on Built in Objects
// like Array
const arr = [16, 356, 24, 2, 478, 12]; // new Array === []
console.log(arr.__proto__); // All array methods
console.log(arr.__proto__ === Array.prototype); // true
console.log(arr.__proto__.__proto__); // constructor function

// Set prototype on built in object
Array.prototype.unique = function () {
  return [...new Set(this)];
};
console.log(arr.unique());
const h1 = document.querySelector("h1");
console.dir((x) => x + 1);

// Coding Challange #1

1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

const Car1 = new Car("BMW", 110);
const Car2 = new Car("Mercedes", 110);

Car1.accelerate(); // 120
Car1.accelerate(); // 130
Car1.accelerate(); // 140

Car2.brake(); // 105
Car2.brake(); // 100
Car2.brake(); // 95

// ************************************************** 2. ES6 Classes **************************************************
// New modern way for creating classes

// class expression
// const PersonCl = class {}

// class declaration
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  // that function is automatically added in the prototype property
  calAge() {
    console.log(2023 - this.birthYear);
  }
}

const arunKumar = new PersonCl("Arun Kumar", 2001);
console.log(arunKumar);
arunKumar.calAge();

console.log(arunKumar.__proto__ === PersonCl.prototype); // true

// we can also manually create prototype propery
PersonCl.prototype.greet = function () {
  console.log(`Hey ${this.firstName}`);
};
arunKumar.greet();

// Some Important points about classes :
// 1. classes are not hoisted
// 2. classes are first-class citizens
// 3. classes are executed in strict mode

////////////////////////////////////////////// Setters and Getters   ///////////////////////////////////////////////
const account = {
  owner: "Arun",
  movements: [200, 222, 362, 156, 100],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest); // for getters
account.latest = 45; // for setters
console.log(account.movements);

// ************************************************** 3. Object.create **********************************************

const PersonProto = {
  calAge() {
    console.log(2023 - this.birthYear);
  },
};

const varun = Object.create(PersonProto);
varun.calAge(); // NaN
varun.name = "Varun";
varun.birthYear = 2005;
varun.calAge(); // 18

console.log(varun.__proto__ === PersonProto); //true


// ************************* Inheritance Between "Classes" : Constructor Functions (V.Imp) *****************************

//1. Inheritance using Cosntructor function
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calAge = function () {
  console.log(2023 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// Linking Prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`MY name is ${this.firstName} and I study ${this.course}`);
};

const aarav = new Student("Aarav", 2001, "Computer Science");
aarav.introduce();
aarav.calAge();

console.log(aarav instanceof Student); //true
console.log(aarav instanceof Person); //true
console.log(aarav instanceof Object); //true

console.log(aarav.__proto__);
console.log(aarav.__proto__.__proto__);
console.log(Student.prototype.constructor);


//2. Inheritance using ES6 Classes
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  calAge() {
    console.log(2023 - this.birthYear);
  }
}

// Linking Prototypes
class StudentCl extends PersonCl {
  constructor(firstName, birthYear, course) {
    // here we don't need apply to call method
    // Always need to happen first -> super()
    super(firstName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`MY name is ${this.firstName} and I study ${this.course}`);
  }
}

const tannu = new StudentCl("Tannu", 2010, "6th");
console.log(tannu);
tannu.introduce();
tannu.calAge();
*/
