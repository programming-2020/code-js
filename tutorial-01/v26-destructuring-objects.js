console.log("\n Destructuring objects \n");

let options = {
    repeat: true,
    save: true
}

let repeat_es5 = options.repeat;
let save_es5 = options.save;
console.log(`ES5 ${repeat_es5} and ${save_es5}\n`);


let { repeat, save } = options;
console.log(`ES6 ${repeat} and ${save}\n`);


let node = {
    type: 'My type',
    mark: 'My mark'
};
let type = "My other type";
let mark = 11;

// SyntaxError: Identifier 'type' has already been declared
// let { type, name } = node;
// console.log(`ES6 ${type} and ${name}\n`);

// Solution 
({ type, mark } = node); // Keeps the initial value
console.log(`ES6 ${type} and ${mark}\n`);


let item = {
    id: 'My 1 id',
    label: 'My 1 label'
};
let id = "My other id";
let label = "Label 11";

function myFunction(value) {
    console.log(value);
}

myFunction({ id, label } = item); // assigned value cannot be null or undefined
console.log(`ES6 ${id} and ${label}\n`);

myFunction({ id, label, isValid } = item);
myFunction({ id, label, isValid: localValid = false } = item);



console.log(`\nES6 nested structure \n\n`);

const mainObject = {
    first: "My First Property",
    second: "My second Property",
    third: {
        start: {
            line: 1,
            column: 2
        },
        end: {
            line: 4,
            column: 4
        }
    }
}

let { third: { start } } = mainObject;
console.log(`ES6 nested 1st - ${start.line} and ${start.column}`);


let { third: { end: { line, column } } } = mainObject;
console.log(`ES6 nested 2nd - ${line} and ${column}`);


