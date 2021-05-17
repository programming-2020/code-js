console.log(`ES6 - foreach in Maps`);

let mapA = new Map([['name', 'Adam'], ['year', 2017], ['age', '25']]);

mapA.forEach((value, key, ownerMap) => {
	console.log(`${key} - ${value}`);
	// console.log(ownerMap === mapA);
	// console.log(ownerMap);
	// console.log(ownerMap.get('name'));
	// console.log(ownerMap.get('year'));
	// console.log(ownerMap.get('age'));
});


