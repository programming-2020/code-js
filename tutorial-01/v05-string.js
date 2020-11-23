/**
 * String Method Additions
*/

// ES5 got a trim method
// ES6 includes includes(), startsWith(), endswith() -> case sensitive

let message = "Nice and sunny day."

console.log(`1 - ${message.startsWith("Nice")}`); // if so returns true
console.log(`2 - ${message.endsWith(".")}`); // if so returns true
console.log(`3 - ${message.includes("n")}`); // if so returns true
//
console.log(`4 - ${message.startsWith("y")}`); // if so returns false
console.log(`5 - ${message.endsWith("Nice")}`); // if so returns false
console.log(`6 - ${message.includes("w")}`); // if so returns false
//
console.log(`7 - ${message.startsWith("y", 13)}`); // character "y" at position 13
console.log(`8 - ${message.endsWith("y", 18)}`); // character "y" at position 18
console.log(`9 - ${message.includes("n", 6)}`);
//
console.log("my Text\ ".repeat(3));
//
//
let indent = " ".repeat(4);
let indentLevel = 0;

let newIndent = indent.repeat(indentLevel + 1);
