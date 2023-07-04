"use strict";

// ES6 way to create classes or inheritance in javascript
class Human {
  constructor() {
    this.gender = "Male"; // creating a new property
  }

  printGender() {
    // creating a function
    console.log(this.gender);
  }
}

class Person extends Human {
  // extends keyword for inheriting the property and method of parent class Human

  constructor() {
    super(); // super function is must for initializing inheritance
    this.name = "Arun";
  }

  printName() {
    console.log(this.name);
  }
}

const person = new Person(); // creating person object of class Person
person.printGender(); // Male
person.printName(); // Arun

// ES7 (new modern) way to create classes or inheritance in javascript
class Car {
  // No need to apply constructor function
  companyName = "TATA";

  // we can use arrow function without any problem of this keyword
  printCompanyName = () => console.log(this.companyName);
}

class CarModel extends Car {
  // without use of super() function
  carName = "Punch";

  printCarName = () => console.log(this.carName);
}

const car = new CarModel();
car.printCarName(); // Punch
car.printCompanyName(); // Tata
