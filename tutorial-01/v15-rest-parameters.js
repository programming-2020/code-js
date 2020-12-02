/**
 * Rest parameters
 */

function printParams(a, b, c, ...theArgs) {
    console.log(`${a}, ${b}, ${c}, ${theArgs}`);
}

printParams(4, 2, 5, 3, 9, 7);
printParams(4, 3, 5, 2, 6);

function assignToArray(...theArgs) {
    console.log(`\nMy Args: ${theArgs}`);
    let [a, b, c] = theArgs;
    console.log(`${a} -> ${b} -> ${c}\n`);
}

console.log(assignToArray(1));
console.log(assignToArray(1, 3, 4));
console.log(assignToArray(1, 3, 4, 6, 7));

function add(...theArgs) {
    let inc = 1;
    return theArgs.map(function (element) {
        return inc + element;
    });
}

let sum01 = add(1, 2, 5, 6, 4)
console.log(`${sum01}`);

function sortRestArg(...theArgs) {
    return theArgs.sort();
}

console.log(sortRestArg(2, 4, 5, 1, 4, 8, 3));