console.log('ES6 weak maps');

// Every key has to non-object
// 

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

mapB.delete(key1);
console.log(mapB.has(key1));

