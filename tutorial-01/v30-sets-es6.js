// Used when value is unique
console.log(`Sets ES6\n\n`);

let set = new Set();

set.add(5);
set.add("5");

console.log(set.size);

let keyOne = {},
	keyTwo = {};

set.add(keyOne);
set.add(keyTwo);

console.log(set.size);

set.add(5);

console.log(set.size);

let myFirstSet = new Set([1, 2, 3, 4, 5, 5, 5, 5, 6, 6, 7, 7, 7, 7]);

console.log(myFirstSet.size);
console.log(myFirstSet.has(2));
console.log(myFirstSet.has(8));

myFirstSet.delete(5);

console.log(myFirstSet.size);
console.log(myFirstSet.has(5));

console.log(myFirstSet.keys());
console.log(myFirstSet.values());


myFirstSet.clear();
console.log(myFirstSet.size);