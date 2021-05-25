
console.log(`ES6 Iterbles advanced`);

function *createIterator() {
  let first = yield 1;
  let second = yield first + 2;
  yield second + 3;
}

let iterator = createIterator();

console.log(iterator.next());
console.log(iterator.next(4));
console.log(iterator.next(5));
console.log(iterator.next());
console.log();


function *createIteratorB() {
  let first = yield 1;
  let second; 
  try {
    yield first + 2;
  } catch (exception) {
    second = 6;
  }
  yield second + 3;
}

let iteratorB = createIteratorB();

console.log(iteratorB.next());
console.log(iteratorB.next(4));
console.log(iteratorB.throw(new Error('An error has occurred')));
console.log(iteratorB.next());

