console.log("\n Destructuring arrays \n");

let colors = ['red', 'green', 'blue'];
console.log(`\t${colors}\n`);

let [firstColor, secondColor] = colors;
console.log(`\t${firstColor}, ${secondColor}\n`);

let [, , thirdColor] = colors;
console.log(`\t${thirdColor}\n`);


let blackColor = "black";
let whiteColor = "white";

console.log(`\t${blackColor} ${whiteColor}\n`);

[blackColor, whiteColor] = colors;
console.log(`\t${blackColor} ${whiteColor}\n`);

const break2 = "swap values";
console.log(`${break2}`);
let a = 3, b = 5;
console.log(`\ta=${a} b=${b}\n`);
[a, b] = [b, a];
console.log(`\ta=${a} b=${b}\n`);

const break3 = "food";
console.log(`${break3}\n`);

let food = ["Burger"];
let [firstFood, secondFood = "Pizza"] = food;

console.log(`\ta= ${firstFood} b= ${secondFood}\n`);


let smallArray = [2, 4];
let bigArray = [1, smallArray, 5];
console.log(`\t${bigArray}`);

let [one, ...restOfTheArray] = bigArray;
console.log(`\tone = ${one} \ttheRestOfTheArray = ${restOfTheArray}`);


