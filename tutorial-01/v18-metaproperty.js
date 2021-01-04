


// first attempt
//function Person(name) {
//	this.name = name;
//}

function Person(name) {
	if (typeof new.target === Person) {
		this.name = name;
	} else {
		throw new Error('new keyword is missing');
	}
}


let person = new Person('Anna');
// let someObject =  Person('Anna');
// let second = Person.call(person, 'John')

console.log(person, " ", someObject );







