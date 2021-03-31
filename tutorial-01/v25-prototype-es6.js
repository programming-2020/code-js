
console.log("Prototype - ES6 enhancement\n\n");



let Letter = {
	getValue() {
		return 'ABC';
	}
};

let NumberValue = {
	getValue() {
		return 3;
	}
};

//ES5 syntax
let myLetter = Object.create(Letter);
console.log(`my letter -> ${myLetter.getValue()}`);
// console.log(myLetter.getValue());
console.log(Object.getPrototypeOf(myLetter));
console.log(Object.getPrototypeOf(myLetter) === Letter);


Object.setPrototypeOf(myLetter, NumberValue);
console.log(`my letter -> ${myLetter.getValue()}`);

// ES5 syntax

let myNewLetter = Object.create(Letter);

let newLetter = {
	getValue() {
		return Object.getPrototypeOf(this).getValue(this) + " ES5";
	}
};


Object.setPrototypeOf(newLetter, myNewLetter);
console.log(newLetter.getValue());




//TODO -> ES6 syntax
// Access the parent properties
let myLetterES6 = Object.create(Letter);

let newLetterES6 = {
	getValue() {
		return super.getValue() + " ES6";
	}
};


Object.setPrototypeOf(newLetterES6, myLetterES6);
console.log(newLetterES6.getValue());