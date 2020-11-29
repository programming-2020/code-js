
function example01() {
    // The issue with using the var keyword
    // variable i is shared across the loop
    console.log(`Using "var"\n`);
    var arrayFirst = [];
    for (var index = 0; index < 10; index++) {
        arrayFirst.push(function () {
            console.log(index);
        });
    }
    arrayFirst.forEach(function (bar) {
        bar();
    });
}

function example02() {
    // To fix the issue form example01()
    // immediately invoked function (expression) -> iif / iife
    console.log(`\nUsing "iif"\n`);
    var arraySecond = [];
    for (var index = 0; index < 10; index++) {
        // immediately invoked functions expresssion -> iife
        arraySecond.push(function (value) {
            return function () {
                console.log(value);
            }
        }(index));
    }
    arraySecond.forEach(function (bar) {
        bar();
    });
}

function example03() {
    let arrayThird = [];
    for (let index = 0; index < 10; index++) {
        arrayThird.push(function () {
            console.log(index);
        });
    }
    // Arrow syntax - ES6
    arrayThird.forEach(function (element) {
        element();
    });
}

function example04() {
    // "For each" example
}

// example01();
// example02();
example03();