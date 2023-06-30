///////////////////////// //////////////////////////////////////////
////////////////////Selecting, creating and deleting elements

// Selecting Elements
console.log(document.documentElement); // whole html document
console.log(document.head); // html head
console.log(document.body); // html body

document.querySelector(".header");
const allSections = document.querySelectorAll(".section");
console.log(allSections); // nodeList of sections

document.getElementById("section--1");
const allButtons = document.getElementsByTagName("button");
console.log(allButtons); // HTML Collection (live)

const buttons = document.getElementsByClassName("btn");
console.log(buttons); // HTML collections (live)

// Creating and inserting elements
// .insertAdjacentHTML

const message = document.createElement("div"); // Dom element
console.log(message); // <div></div>
message.classList.add("cookie-message");
// message.textContent = 'We use cookied for improved functionality and analytics.';
message.innerHTML =
  'We use cookied for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

// document.querySelector('header').prepend(message); // prepend means => insert before the first child of this element

document.querySelector("header").append(message); // append means => insert after the last child of this element

// document.querySelector('header').append(message.cloneNode(true)); // if we want to make copy of this element and use in the dom everywhere we want

// document.querySelector('header').before(message);
// document.querySelector('header').after(message);

// Delete Elements
document
  .querySelector(".btn--close-cookie")
  .addEventListener("click", function () {
    // message.remove(); // or we can do as well
    message.parentElement.removeChild(message); // dom-traversing
  });

///////////////////////// //////////////////////////////////////////
//////////////////// Styles, Attributes and Classes

// Styles
message.style.backgroundColor = "#37383d";
message.style.width = "110%";

console.log(message.style.height); // can't get if it is not exist or not set by ourself
console.log(message.style.backgroundColor); // accessed

console.log(getComputedStyle(message).height); // 49px
console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).backgroundColor);

// working with css variables : root == document.documentElement
document.documentElement.style.setProperty("--color-primary", "orangered"); // changing the value of a css color variable;

// Attributes
const logo = document.querySelector(".nav__logo");
// standard values which reads by javascript
console.log(logo.alt);
console.log(logo.className);

logo.alt = "Beautiful Minimilast Logo";
// not standard
console.log(logo.designer); // not readable
console.log(logo.getAttribute("designer")); // Arun Kumar
logo.setAttribute("company", "Bankist");

console.log(logo.src); // absolute link or value
console.log(logo.getAttribute("src")); // relative value

// Data Attributes -> special kind of attributes start with data
console.log(logo.dataset.versionNumber);

// Classes
logo.classList.add("c");
logo.classList.remove("c");
logo.classList.toggle("c");
logo.classList.contains("c");

// Don't use
logo.className = "arun";

///////////////////////// //////////////////////////////////////////
//////////////////// Types of Events and Event Handlers

// Using addEventListener :-
// const h1 = document.querySelector("h1");

const alertH1 = function (e) {
  alert("Helooooooooooooooooooooo");
  // h1.removeEventListener('mouseenter', alertH1); // we can remove the event also
};

// h1.addEventListener('click', alertH1);
h1.addEventListener("mouseenter", alertH1);

// or
setTimeout(() => {
  return h1.removeEventListener("mouseenter", alertH1);
}, 3000); // after 3 seconds the event itself remove

//////////////////////////////////////////////////////////////////////
///////////// Event Propagation : Bubbling and Capturing (V-Imp)

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

console.log(randomColor());

document.querySelector(".nav__link").addEventListener("click", function (e) {
  this.style.backgroundColor = randomColor();
  console.log("link", e.target, e.currentTarget);
  console.log(e.currentTarget === this);

  // stop propagation
  // e.stopPropagation(); // but this is not a good idea
});

document.querySelector(".nav__links").addEventListener("click", function (e) {
  this.style.backgroundColor = randomColor();
  console.log("Container", e.target, e.currentTarget);
  console.log(e.currentTarget === this);
});

document.querySelector(".nav").addEventListener("click", function (e) {
  this.style.backgroundColor = randomColor();
  console.log("NAV", e.target, e.currentTarget);
  console.log(e.currentTarget === this);
});

//////////////////////////////////////////////////////////////////////
///////////// Dom Traversing

const h1 = document.querySelector("h1");

// Going downwards : childs
console.log(h1.querySelectorAll(".highlight"));
console.log(h1.childNodes); // direct child
console.log(h1.children); // child elements
h1.firstElementChild.style.color = "#ffff";
h1.lastElementChild.style.color = "orangered";

// Going upwards : parents
console.log(h1.parentNode);
console.log(h1.parentElement);
h1.closest(".header").style.background = "var(--gradient-secondary)"; // closest selector used to select the parent element
h1.closest("h1").style.background = "var(--gradient-primary)";

// Going sideways : siblings
console.log(h1.previousElementSibling); // null
console.log(h1.nextElementSibling); // h4

console.log(h1.previousSibling);
console.log(h1.nextSibling);

console.log(h1.parentElement.children);
[...h1.parentElement.children].forEach(function (e) {
  if (e !== h1) e.style.transform = "scale(0.5)";
});
