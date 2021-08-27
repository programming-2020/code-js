
console.log('Array new methods');


let numbers = [25, 30, 35, 40, 45, 50];

console.log(numbers.find(n => n > 32));
console.log(numbers.findIndex(n => n > 32));


numbers.fill(2);
console.log(numbers.toString());

numbers = [1, 2, 3, 4, 5];
numbers.fill(1, 2); // start filling the value 1 from the index
console.log(numbers.toString()); 


numbers = [1, 2, 3, 4, 5];
numbers.fill(0, 1, 3);
console.log(numbers.toString());

numbers = [1, 2, 3, 4, 5];
numbers.copyWithin(0, 2);
console.log(numbers.toString());



