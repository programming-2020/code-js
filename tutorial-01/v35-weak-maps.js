console.log('ES6 weak maps');

// WeakMap is a small subset of map.
// Keys are weakly referenced, 
// so it can be non-primitive only. 
// If there are no reference to the object keys, 
// it will be subject to garbage collection.
//  not iterable
//  every key is object type
// The WeakMap will allow garbage collection if the key has no reference. 

let mapA = new  WeakMap();
let keyA = {};

mapA.set(keyA, 'My A value');
console.log(mapA.get(keyA));

let key1 = {},
	key2 = {},
	mapB = new WeakMap([[key1, 'Adam'], [key2, 'Smith']]);

console.log(mapB.has(key1));
console.log(mapB.get(key1));
console.log(mapB.has(key2));
console.log(mapB.get(key2));

console.log(mapB.has(key1));

