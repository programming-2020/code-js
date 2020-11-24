/**
 * Template literals - introduced in ES6
 * A string is inside if a `` (backtick) pair
 * let mytext = `some example text ${variableValue}`;
 */


let firstText = `This is my first text`;

let numberFive = 5;
let valueFive = `Value of the variable number_five is ${numberFive}`;
console.log(valueFive);

/**
 * let badMultilineExample = "This \n\
 * is\n\
 * my\n\
 * bad multiline example"
 */

let goodMultilineExample = `This
 is
 my
 good muliline
 example`;
console.log(goodMultilineExample);
console.log(`\nlength ${firstText.length} and ${goodMultilineExample.length}`);