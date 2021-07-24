
console.log('Classes in detail');


class AValue {
  constructor(value) { this.value = value; }
  getValue() { return this.value; }
}

const aInst = new AValue(5);
console.log(aInst.getValue());
/******************************/

function createObject(classDefinition) {
  return new classDefinition();
}

let bVar = createObject(class {
  getValue() {
    return 'b variable';
  }
});

console.log(bVar.getValue());

/*******************************/

let cVar = new class {
  constructor(value) {
    this.value = value;
  }
  getValue() {
    return this.value;
  }
}("c value");

console.log(cVar.getValue());

/*******************************/


class dValue {
  constructor(element) { this.element = element; }
  get value() { return this.element }
  set value(element) { this.element = element; }
}

var dPrototype = Object.getOwnPropertyDescriptor(dValue.prototype, "value");
console.log(dPrototype);
console.log("get" in dPrototype);
console.log("set" in dPrototype);
console.log(dPrototype.enumerable);


/********************************/

// NOT WORKING
// TODO: FIX

let methodName = "printValue";
let propertyName = "value";

class eValue {
  constructor(value) { this.value = value; }
  [methodName]() { console.log(`Current value ${this.value}`); }
  // get [propertyName]() { return this.value; }
  set [propertyName](v) { v }
}

let evar = new eValue(3);
evar.printValue();





console.log('Class in detail');





/* pass class as an argument */


function createObject(classDefinition) {
  return new classDefinition();
}

let objectC = createObject(class {
  getName(name) {
    return name;
  }
});

console.log(`\n${objectC.getName("Adam Smith")}`);



/* creating singletons when invoking class onstructor  */


let objectD = new class {
  constructor(name) {
    this.name = name;
  }
  printName() {
    return this.name;
  }
}("John");

console.log(`\n${objectD.printName()}`);


/* getter and setter  */

class SomeValue { 
  
  constructor(value) {
    this.element = value;
  }

  get element() { return this.element; }
  set element(value) { this.element = value; }
}

let descriptor = Object.getOwnPropertyDescriptor(SomeValue.prototype, "element");

console.log(`descriptor -> ${descriptor.get}`);
console.log('get' in descriptor); // true
console.log('set' in descriptor); // true
console.log(descriptor.enumerable); // false


/* computed names - expression that resolves into name  */

let methodName = "personalMethod";
let propertyName = "name"; 

class PersonClassX {
  constructor(name) {
    this.name = name;
  }

  [methodName]() {
    return this.name;
  }
  
  get [propertyName]() {
    console.log("Getter function");
  }

  set [propertyName](value) {
    console.log(`${value}`);
  }

}

let me = new PersonClassX("Daniel");
console.log(`\n${me.personalMethod()}`);


