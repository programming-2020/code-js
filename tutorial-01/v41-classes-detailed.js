
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




