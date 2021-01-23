



const first = { a: 1 };
const copyFirst = Object.assign({}, first);
// console.log(copyFirst);



const oFirst = { a: 1 };
const oSecond = { b: 2 };
const oThird = { c: 3 };
const copyO = Object.assign({}, oFirst, oSecond, oThird);
// console.log(copyO);



const obFirst = { a: 1, b: 2, c: 1 };
const obSecond = { b: 2, c: 2 };
const obThird = { c: 3 };
const copyOb = Object.assign({}, oFirst, oSecond, oThird);
// The next value will override the provious
console.log(copyOb);



