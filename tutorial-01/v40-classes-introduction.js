
console.log('Classes introduction');

console.log('ES5 prototype');

function ItemType(name, value) {
  this.name = name;
  this.value = value;
}

ItemType.prototype.getName = function () {
  return this.name;
}

ItemType.prototype.getValue = function () {
  return this.value;
}

var pen = new ItemType('Faber Castell', 211);
console.log(`${pen.getName()} ${pen.getValue()}`);
console.log(pen instanceof ItemType);
console.log(pen instanceof Object);


console.log('ES6 classes');

class ItemClass {
  // code within the class is in 'strict' mode
  // all the properties should be defined in a constructor
  constructor(name, value) {
    this.name = name;
    this.value = value;
  }
  
  getName() {
    return this.name;
  }

  getValue() {
    return this.value;
  }
}

let newPen = new ItemClass('New Faber Castell', 231);
console.log(`${newPen.getName()} ${newPen.getValue()}`);
console.log(typeof newPen);
console.log(newPen instanceof ItemClass);
console.log(newPen instanceof Object);
console.log(typeof ItemClass.prototype.getName);





