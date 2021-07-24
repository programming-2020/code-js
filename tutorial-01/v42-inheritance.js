
console.log(`Inheritance`);


/* ES5 Inheritance */

function Rectangle(length, width) {
  this.length = length;
  this.width = width;
}

Rectangle.prototype.getArea = function() {
  return this.length * this.width;
}

function Square(length) {
  Rectangle.call(this, length, length);
}

Square.prototype = Object.create(Rectangle.prototype, {
  constructor: {
    value: Square,
    enumerable: false,
    writable: true,
    configureble: true
  }
});


var square = new Square(5);
console.log(square.getArea());
console.log(square instanceof Square);
console.log(square instanceof Rectangle);
console.log('\n');


/* ES6 Inheritance*/

class RectangleES6 {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }

  getArea() {
    return this.length * this.width;
  }
}

class SquareES6 extends RectangleES6 {
  // default contructor
  // constructor(...args) {
  //    super(...args);
  //  }
  //

  constructor(length) {
    super(length, length);
  }

  // method overriding
  getArea() {
    console.log(`This is method overriding`);
    return super.getArea();
  }

}

let new_square = new SquareES6(4);
console.log(new_square.getArea());
console.log(square instanceof Square);
console.log(square instanceof Rectangle); 
console.log('\n');


