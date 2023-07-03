// Synchronous Code :--------------------->
// 1. Most code is sync
// 2. Synchronous code is executed line by line
// 3. Each line of code waits for previous line to finish.
// 4. long running operation block code execution

// const p = document.querySelector('.p');
// p.textContent = 'MY name is Arun';
// alert('Text');
// console.log("Hello");

// Asynchronous Code :--------------------->
// Async code is executed after a task that run in the 'background' finishes;
// Async code is non-blocking
// Execution does'nt wait for an asynchronous task to finish its work
// Callbacks function alone do NOT make code asynchronous

// const p = document.querySelector('.p');
// setTimeout(() => {
//   p.textContent = "MY name is Arun";
//   alert("Text");
//   console.log("Hello");
// }, 5000);
// ss;

// AJAX :------------------------------>
// Asynchronous Javascript And XML : Allows us to communicate with remote web servers in an asynchronous way. With AJAX calls, we can request data from web servers dynamically.

// client --------->request(get/post/etc)--------------->webserver(usually web API)
// client <---------response<--------------->webserver

// API :--------------------------->
// Application Programming Interface : Piece of software that can be used by another piece of software, in order to allow application to talk to each other.
// There are be many types of API in web development: 1. DOM API, 2. Geolocation API, 3. Own Class API 4. Online API.
// Online API : Applicatio running on a ServiceWorkerRegistration, that receives requests for DataTransfer, and sends data back as Response;
// We can build our own web APIs (required back-end development e.g with node.js) or use 3rd-party APIs.
// JSON is the most popular data format.

'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

// Render function to display data on screen
const render = function (data, className = '') {
  let language;
  if (data.name.common === 'India') {
    language = Object.values(data.languages)[1];
  } else {
    language = Object.values(data.languages)[0];
  }

  const currency = Object.values(data.currencies)[0].name;

  const html = `
    <article class="country ${className}">
          <img class="country__img" src="${data.flags.svg}" />
          <div class="country__data">
          <h3 class="country__name">${data.name.common}</h3>
          <h4 class="country__region">${data.region}</h4>
          <p class="country__row"><span>👫</span>${(
            +data.population / 1000000
          ).toFixed(1)} People</p>
          <p class="country__row"><span>🗣️</span>${language}</p>
          <p class="country__row"><span>💰</span>${currency}</p>
          </div>
      </article>`;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

// Error Handling Function
function renderError(msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
}

// First AJAX Call & XMLHttpRequest : ------------------------>
/*
const getCountryData = function (country) {
  const request = new XMLHttpRequest(); // creating request object
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`); // fetch the url, from where the data get using 'GET'
  request.send(); // sending request the url

  // console.log(this.responseText); // Not working here

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    const language = Object.values(data.languages)[0];
    console.log(language);

    const currency = Object.values(data.currencies)[0].name;

    const html = `
  <article class="country">
        <img class="country__img" src="${data.flags.svg}" />
        <div class="country__data">
        <h3 class="country__name">${data.name.common}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
          +data.population / 10000000
        ).toFixed(1)} People</p>
        <p class="country__row"><span>🗣️</span>${language}</p>
        <p class="country__row"><span>💰</span>${currency}</p>
        </div>
    </article>`;

    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  });
};

getCountryData('usa');
getCountryData('india');
getCountryData('portugal');

*/

/*
const getCountryAndNeighbour = function (country) {
  // AJAX call 1
  const request = new XMLHttpRequest(); // creating request object
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`); // fetch the url, from where the data get using 'GET'
  request.send(); // sending request the url

  // console.log(this.responseText); // Not working here

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    // Render country
    render(data);

    // Get neighbour country (2);
    const [neighbour] = data.borders;

    if (!neighbour) return;

    // AJAX call country 2;
    const request2 = new XMLHttpRequest(); // creating request object
    request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`); // fetch the url, from where the data get using 'GET'
    request2.send();

    request2.addEventListener('load', function () {
      const [data2] = JSON.parse(this.responseText);
      console.log(data2);
      render(data2, 'neighbour');
    });
  });
};

getCountryAndNeighbour('canada');
*/

// Callback Hell : When we have lots of nested callback in execution of asynchronous task, that concept is known as callback hell.

// NOTE : That code which is hard to understand, that is very bad code or may contains many bugs.

// setTimeout(() => {
//   console.log('1 Second passed');
//   setTimeout(() => {
//     console.log('2 Second passed');
//     setTimeout(() => {
//       console.log('3 Second passed');
//     }, 1000);
//   }, 1000);
// }, 1000);

// -> Solution of Callback Hell -> Promises

// New Modern way of HTTP request.
// Fetch API Method : ------------------------>
// For a simple GET request we can use simply

// const request = fetch('https://restcountries.com/v3.1/name/india'); // returned a promise (pending state)
// console.log(request);

// Promise : ---------------------------------->
// 1. An object that is used as a placeholder for the future result of an asynchronous operation.
// 2. A container for an asnynchronous deleivered value.
// 3. A container for the future value. (Eg. Response from AJAX Call);

// Note : We no longer need to rely on evetns and callbacks passed into asynchronous functions to handle asynchronous results.
//  Instead on nesting callbacks, wec can chain promises for a sequence of asynchronous operations: escaping callback hell.

// Consuming Promises :-

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(response => {
//       if (!response.ok) {
//         throw new Error(`${errorMsg} ${response.status}`);
//       }
//       return response.json();
//     })
//     .then(data => {
//       render(data[0]);
//       // Chaining Promises
//       const neighbour = data[0].borders[0];
//       if (!neighbour) throw new Error('No neighbour found!');

//       // Country 2
//       return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`); // always return a chain promise and handle it out of the block, don't here
//     })
//     .then(response => response.json())
//     .then(data => {
//       [data] = data;
//       render(data, 'neighbour');
//     })
//     .catch(err => {
//       console.error(`${err} 👾👾👾`);
//       renderError(`Something went wrong 👾. ${err.message}. Try again!`);
//     });
// };
// getCountryData('germany');

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(`${errorMsg} ${response.status}`);
    }
    return response.json();
  });
};

const getCountryData = function (country) {
  getJSON(
    `https://restcountries.com/v3.1/name/${country}`,
    'Country not found!'
  )
    .then(data => {
      render(data[0]);
      // Chaining Promises
      const neighbour = data[0].borders[0];
      if (!neighbour) throw new Error('No neighbour found!');

      // Country 2
      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`); // always return a chain promise and handle it out of the block, don't here
    })
    .then(response => response.json())
    .then(data => {
      [data] = data;
      render(data, 'neighbour');
    })
    .catch(err => {
      console.error(`${err} 👾👾👾`);
      renderError(`Something went wrong 👾. ${err.message}. Try again!`);
    });
};

// Handling Rejected Promises------------------------->
btn.addEventListener('click', function () {
  getCountryData('india');
});
