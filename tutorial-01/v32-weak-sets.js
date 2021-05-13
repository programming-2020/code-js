console.log('ES6 - Weak sets');


console.log('The issue: ');
let set = new Set(),
    key = {};

set.add(key);
console.log(set.size);

key = null;

console.log(set.size);
console.log(key);

key = [...set][0];
console.log(key);
console.log();
// one the reference from line 8 hasn't changed its value
// reference hasn't changed

// ES6 - Weak sets - Do not accept primitive value
// Uncaught TypeError: Invalid value used in week set

// WeakSets are not iterable!
// WeakSets do not have size properties!

let weakSet = new WeakSet(),
    key2 = {};

weakSet.add(key2);

console.log(weakSet.has(key2));

weakSet.delete(key2);

console.log(weakSet.has(key2));
console.log();

// Once the the key is deleted, its reference is deleted
