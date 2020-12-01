

function getValue(myVal) {
    return myVal + 2;
}

function addA(a, b = a) {
    return a + b;
}

function addB(a, b = getValue(a)) {
    return a + b;
}

console.log(addA(3));
console.log(addA(3, 4));

console.log(addB(3));
console.log(addB(3, 4));