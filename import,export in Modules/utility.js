"use strict";

// Lets take example of import and export
function multiply(a, b, c) {
  return a * b * c;
}

function addition(a, b, c) {
  return a + b + c;
}

export const studentCounts = 23; // property

export { multiply, addition };
// export { multiply as mul, addition as add, subtraction as sub };

// Default export : We can export only one property or method using default export. We can import that function without curly braces.
export default function subtraction(a, b, c) {
  return a - b - c;
}
