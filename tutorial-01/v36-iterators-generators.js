
console.log('ES6 Functions - Iterators and Generators\n\n\n');


const colors = ['red', 'green', 'blue'];
for (let i = 0; i < colors.length; i++) {
	console.log(colors[i]);
}

console.log('\nES5 - Iterator: ');

function es5CreateIterator(items) {
	var i = 0;
	return {
		next: function () {
			var done = (i >= items.length);
			var value = !done ? items[i++] : undefined;
			return {
				done: done,
				value: value,
				length: items.length
			};
		}
	};
}

var es5iterator = es5CreateIterator([1, 2, 3]);

console.log(es5iterator.next());
console.log(es5iterator.next());
console.log(es5iterator.next());
console.log(es5iterator.next());

// Potential issue
// while (!es5iterator.next().done) {
//	console.log(es5iterator.next());
// }


// Potential issue
// for (var j = 0; j < es5iterator.next().length; j+= 1) {
//	console.log(es5iterator.next());
//} 


console.log('\nES6 - Iterator - Simple example: ');

function* es6SimpleIterator() {
	yield 1;
	yield 2;
	yield 3;
}

let simple = es6SimpleIterator();

console.log(simple.next());
console.log(simple.next());
console.log(simple.next());
console.log(simple.next());


console.log('\nES6 - Iterator - Simple loop example: ');

// 'yield' works only in function, cannot work in nested function!!!
function* es6SimpleLoop(array) {
	for (let i = 0; i < array.length; i++) {
		yield array[i];
	}
}

let simpleLoop = es6SimpleLoop([1, 2, 3]);

console.log(simpleLoop.next());
console.log(simpleLoop.next());
console.log(simpleLoop.next());
console.log(simpleLoop.next());

// using the generator as a object property
let object = {
	*createIterator(items) {
		for (let i = 0; i < items.length; i++) {
			yield items[i];
		}
	}
}

let it2 = object.createIterator([1, 2, 3]);

console.log(it2.next());
console.log(it2.next());
console.log(it2.next());
console.log(it2.next());
