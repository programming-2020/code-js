console.log(`ES6 foreach in sets \n`);

// sets work with foreach

let set = new Set([1, 2, 3]);

// set.forEach((value, key, ownerSet) => {
// 	console.log(` ${key} -> ${value} -> ${ownerSet}`);
// });

let processor = {
	output(value) {
		console.log(value);
	},
	process(dataset) {
		dataset.forEach((value) => {
			this.output(value);
		});
	}
};

processor.process(set);

// if accessing a specific item is needed,
// set should be converted to an array
// duplicate values will be removed

let mySet = new Set([1, 2, 3, 4, 5, 5 , 6, 6, 7, 7, 7, 7]);
let myArray = [...mySet];

console.log(myArray);
