/**
 * let and const in a block level scope
 * Why not to use var.
 * Use let / const.
 * const declaration prevents reference changing, not the value itself.
 */

function getValueVar(condition) {
    if (condition) {
        var text = "my text";
        return text;
    } else {
        // This text value is undefined, but it in the scope (it shouldn't be).
        console.log(text);
        return null;
    }
}

// This is how getValueVar(condition) acts:
// function getValueVar(condition) {
//     var text;
//     if (condition) {
//         text = "my text";
//         return text;
//     } else {
//         console.log(text);
//         return null;
//     }
// }


console.log(getValueVar(false));

// block level declaration - block level scope
function getValueLet(condition) {
    if (condition) {
        let text = "my text";
        return text;
    } else {
        // This breaks the execution.
        // ReferenceError: text is not defined
        // error: console.log(text);
        return null;
    }
}

console.log(getValueLet(false));