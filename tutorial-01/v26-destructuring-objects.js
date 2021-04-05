console.log("\n Destructuring objects \n");

let options = {
    repeat: true,
    save: true
}

let repeat_es5 = options.repeat;
let save_es5 = options.save;
console.log(`ES5 ${repeat_es5} and ${save_es5}\n`);


let { repeat, save } = options;
console.log(`ES6 ${repeat} and ${save}\n`);



