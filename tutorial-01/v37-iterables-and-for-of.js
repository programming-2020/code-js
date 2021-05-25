
console.log("Iterables and for of loop");

// All objects (arrays, string, maps, sets) are iterables
// iteratable works through for-of loop

const values = [1, 2, 3];

for(let item of values) {
  console.log(`item: ${item}`);
}
console.log(`\nWhen/If working with condition is needed, use simple for loop\n`);

let iterator = values[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(`\n`);

const isIterable = (object) => {
  return typeof object [Symbol.iterator] === 'function';
}

console.log(isIterable([1, 2, 3, 4]), '\n');



let collection = {
  items: [],
  *[Symbol.iterator]() {
    for (let item of this.items) {
      yield item;
    }
  }
}

collection.items.push(1);
collection.items.push(2);
collection.items.push(3);
collection.items.push(4);

for (let i of collection) {
  console.log(i);
}

