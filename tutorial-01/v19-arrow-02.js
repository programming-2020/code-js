




const values = [2, 5, 1, 2, 9, 4, 3, 6];

const result = values.sort((a, b) => a - b);
console.log(result);



function first(name) {
    console.log(name);
    return () => arguments[0];
}

const firstVal = first('Alice');
console.log(firstVal());

const someOther = () => { };

console.log(typeof someOther);
console.log(someOther instanceof Function);



