

//TODO: 043 Creating arrays
console.log("Arrays - a\n");

const arrayA = new Array(2);
const arrayB = new Array("2");
const arrayC = new Array(1, 3);
const arrayD = new Array("5", "7");
let tmp = arrayA;
console.log(`Array length: ${tmp.length},\nFirst element:${tmp[0]}\nSecond element:${tmp[1]}`);

const narrayA = Array.of(2);
tmp = narrayA;
console.log(`Array.of => length:${tmp.length}\nFirst element:${tmp[0]}\nSecond element:${tmp[1]}\n\n`);



/** Convert arguments into an array-like structure */

function makeArray (arrayLike) {
  let result = [];
  for (let i = 0; i < arrayLike.length; i++) {
    result.push(arrayLike[i]);
  }
  return result;
}

function doSomething() {
  let args = makeArray.form(arguments);
}

/** New method */

function newDoSometing() {
  let args = Array.form(arguments);
}

let numbers = {
  *[Symbol.iterator](){
    yield 1;
    yield 2;
    yield 3;
  }
}


let numbers2 = Array.from(numbers, value => value + 2);
console.log(numbers2);



