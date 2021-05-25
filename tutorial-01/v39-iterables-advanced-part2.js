
console.log('Iterator advanced functionality');

// Retrun from generators

function *createIterator() {
  yield 1;
  return 4;
  yield 2;
  yield 3;
}

let returnIterator = createIterator();
console.log(returnIterator.next());
console.log(returnIterator.next());
console.log();  

// Delegating iterators

function *createNumberIt() {
  yield 1;
  yield 2;
}

function *createColorIt() {
  yield 'red';
  yield 'green';
}

function *createCombinedIt() {
  yield *createNumberIt();
  yield *createColorIt();
  yield 'Somethin new';
}

let newIt = createCombinedIt();

console.log(newIt.next());
console.log(newIt.next());
console.log(newIt.next());  
console.log(newIt.next());  
console.log(newIt.next());
console.log(newIt.next());
console.log();

// Delegating iterators - 2nd option

function *createNumberIt2() {
  yield 1;
  yield 2;
  return 3;
}

function *createRepeatingIt(count) {
  for (let i = 0; i < count; i++) {
    yield `Repeat - ${i}`;
  }
  // here can be another yield...
}

function *createCombinedIt2() {
  let result = yield *createNumberIt2();
  console.log(result);
  yield *createRepeatingIt(result);
}

let it2 = createCombinedIt2();
console.log(it2.next());
console.log(it2.next());
console.log(it2.next());
console.log(it2.next());
console.log(it2.next());
console.log(it2.next());




