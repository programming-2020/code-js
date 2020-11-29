
// This variable is created globally.
var message = "First message";
console.log(message);

// This variable overrides the previous varible created globally.
var message = "Second message";
console.log(message);

// let variables aren't global.
let letMessage = "First Let Message";
console.log(letMessage);

// Execution error
// let letMessage = "Second Let Message";
// console.log(letMessage);