

console.log("Prototype - ES6 enhancement\n\n");



let Letter = {
	getValue() {
		return 'ABC';
	}
};

let Number = {
	getValue() {
		return 1;
	}
};


let myLetter = Object.create(Letter);
console.log(`my letter -> ${myLetter.getValue()}`);
// console.log(myLetter.getValue());
console.log(Object.getPrototypeOf(myLetter));


Object.setPrototypeOf(myLetter, Number);
console.log(`my letter -> ${myLetter.getValue()}`);






