console.log("TODO sets and maps");

// JS had only one type of collection - Array

// Set is a list of values that can contain duplicates
// Map is collection of keys that correspond to the specific value - fequently used and cache

/** ES5 - workaround */

let set = Object.create(null);

let map = Object.create(null);

let keyOne = {}, 
		keyTwo = {};


set.a = true;

map.a = "something";

map[5] = "fifth element";

map[keyOne] = "Some Text";

if (set.a) {
	console.log(set.a);
	console.log(map.a);
	console.log(map[5]);

	// limitation - treats key type number as key type string
	// that's a problem for maps
	console.log(map["5"]);

	console.log(map[keyOne]);
	console.log(map[keyTwo]);
}

