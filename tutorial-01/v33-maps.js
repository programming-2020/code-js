console.log('Maps\n');

// Ordered list of key-valye pair

// Construct a map,  set values in a met, get values fom a map, 
// size of the map, if map has a value (returns true or false), 
// delete a value from the map, anc clear is to remove all the values
// from a map



let mapA = new Map();

// set value in a map
mapA.set('name', 'Adam');
mapA.set('year', 2017);

console.log(`${mapA.get('name')} ${mapA.get('year')}\n`);

let keyA = {},
	keyB = {};

mapA.set(keyA, 5);
mapA.set(keyB, 10);


console.log(`${mapA.get('name')} ${mapA.get('year')} ${mapA.get(keyA)} ${mapA.get(keyB)}\n`);

// mapA.size
// mapA.has()
// mapA.delete()
// mapA.clear()


console.log(`${mapA.size} ${mapA.has('name')} ${mapA.has('last')}\n`);
mapA.delete(keyB);

console.log(`${mapA.size} ${mapA.has(keyA)} ${mapA.has(keyB)}\n`);

mapA.clear();
console.log(`mapA.clear() gives ${mapA.size}\n`);

// another way of initalising a map
// passing an array that consists of arrays, 
// each inner array has to have two elements,
// one for key and the other for value 
let someNewMap = new Map([['name', 'Alice'], ['year', 2017], [keyA, 'This is a first key']]);

let message = `${someNewMap.size}, ${someNewMap.get('name')}, ${someNewMap.get('year')}, ${someNewMap.get(keyA)}`;

console.log(message);




