

// ES5 syntax
function olderWay(url, timeout, callback) {
    // if timeout is 0 than that counts as false
    // typeof has to be used
    // timeout = timeout || 3000;
    timeout = (typeof timeout !== "undefined") ? timeout : 3000;
    // callback = callback || function () { console.log("ES5 syntax"); };
    callback = (typeof callback !== "undefined") ? callback : function () {
        console.log("ES5 syntax");
    };
}

'use strict';
function newerWay(url, timeout = 3000, callback = function () { console.log("default"); }) {

    console.log(url, timeout, callback);
    console.log();
}

newerWay("/a");
newerWay("/a", 3);
newerWay("/a", 3, function () { console.log("invoke"); });

// Arguments object is always updated in a non-strict mode in ES5
function notStrict(first, second) {
    console.log(arguments.length);
    console.log(`first ${first} === arguments[0] ${arguments[0]} => ${first === arguments[0]}`);
    console.log(`second ${second} === arguments[1] ${arguments[1]} => ${second === arguments[1]}`);
    first = "c";
    second = "d";
    console.log(`first ${first} === arguments[0] ${arguments[0]} => ${first === arguments[0]}`);
    console.log(`second ${second} === arguments[1] ${arguments[1]} => ${second === arguments[1]}\n`);
}

notStrict("a", "b");

function useStrict(first, second) {
    'use strict'
    console.log(arguments.length);
    console.log(`first ${first} === arguments[0] ${arguments[0]} => ${first === arguments[0]}`);
    console.log(`second ${second} === arguments[1] ${arguments[1]} => ${second === arguments[1]}`);
    first = "c";
    second = "d";
    console.log(`first ${first} === arguments[0] ${arguments[0]} => ${first === arguments[0]}`);
    console.log(`second ${second} === arguments[1] ${arguments[1]} => ${second === arguments[1]}`);
}

useStrict("a", "b");