// Promises :------------------------------------------------->
// In js a promise is a good way to handle asynchronous operaton. It is used to find out if the asynchronous operation is successfully completed or not
// A promises have three states.
// 1. Pending
// 2. Fulfilled
// 3. Rejected

//    Promise(Pending)-------------------fulfilled----------------> .then
//    Promise(Pending)-------------------rejected----------------> .catch

// To create a promise object, we use the Promise() Constructor
// let promise = new Promise(function(resolve, rejected){
//     // code something
// })

// The promise() constructor takes a function as an argument. the function is also accepts two function resolve() and reject().
// If promise return successfully, the resolve(), function is called , and if the error occurs, the reject() function is called

// .then() => then() method is used with the callback when the promise is successfuly fullfiled or resolved

// .catch() => catch() method is used with the callback when the promise is rejected or if an error occurs.

// .finally() => method gets executed when the promise is either resolved successfuly or rejected.(work for both)

// Synchronous Example
// const ticket = new Promise(function (resolve, reject) {
//   const isBoarded = true;
//   if (isBoarded) {
//     resolve("You are not in the Flight");
//   } else {
//     reject("Your flight has been cancelled");
//   }
// });

// ticket
//   .then((data) => console.log("We are in 'then' function", data))
//   .catch((data) => console.log("We are in catch funciton", data))
//   .finally((data) => console.log("We are in finally function"));

// Asynchronous Example
function getCheese() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const cheese = "🧀";
      resolve(cheese);
    }, 2000);
  });
}

function makeDough(cheese) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dough = cheese + "🍩";
      resolve(dough);
      //reject("Bad Cheese");
    }, 2000);
  });
}

function bakePizza(dough) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const pizza = dough + "🍕";
      resolve(pizza);
    }, 2000);
  });
}

//now make call on three promises
//now in this way we get rid from callback hell or nested callbacks.

// getCheese() // returned a promise
//   .then((cheese) => {
//     console.log("Here is the cheese", cheese);
//     return makeDough(cheese); //returned a promise
//   })
//   .then((dough) => {
//     console.log("Here is the dough", dough);
//     return bakePizza(dough); //returned a promise
//   })
//   .then((pizza) => {
//     console.log("Here is the pizza", pizza);
//   })
//   .catch((data) => console.log("Error Occur", data)); // if any of the function promise is rejected or any error occur happen then this catch method invoked.

// Async & Await :---------------------------------------->
// The another method for handling promises.
async function orderPizza() {
  try {
    const cheese = await getCheese(); // return promise then use await.
    console.log("Here is the cheese", cheese);
    const dough = await makeDough(cheese); // again return promise then use await on it.
    console.log("Here is the dough", dough);
    const pizza = await bakePizza(dough); // again return promise then use await on it.
    console.log("Here is the pizza", pizza);
  } catch (err) {
    console.log(err);
  }
}
orderPizza();
