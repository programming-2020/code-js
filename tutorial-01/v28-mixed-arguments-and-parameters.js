
console.log('mixed arguments and parameters');

let a_node = {
    type: 'Identifier',
    name: 'first',
    location: {
        start: {
            line: 1,
            column: 1
        },
        end: {
            line: 2,
            column: 10
        }
    },
    range: [1, 5]
};

// Destructuring a_node

// eslint-disable-next-line no-unused-vars
let { type, name, location: {end}, range: [startIndex] } = a_node;

console.log(end.line);
console.log(end.column);
console.log(startIndex);
console.log();


function setCookieES5(name, value, options) {
    options = options || {};
    let secure = options.secure,
        path = options.path,
        domain = options.domain,
        expires = options.expires;
    
    console.log(`ES5 -> ${secure}, ${path}, ${domain}, ${expires}`);
}

setCookieES5("type", "js", {
    secure: true,
    expires: 6000
});


function setCookieES6(name, value, {secure, path, domain, expires}) {
    console.log(`ES6 -> ${secure}, ${path}, ${domain}, ${expires}`);
}

setCookieES6("type", "js", {
    secure: true,
    expires: 6000
});

// Error: TypeError: Cannot destructure property 'secure' of 'undefined' as it is undefined.
// setCookieES6("type", "js");

// Error fix
function setCookieES6b(name, value, { secure, path, domain, expires } = {}) {
    console.log(`ES6 -> ${secure}, ${path}, ${domain}, ${expires}`);
}

setCookieES6b("type", "js");


function setCookieES6c(name, value, 
    { secure = false, 
    path = "/",
    domain = "abc.com", 
    expires = new Date(Date.now() + 360000) } = {}) {
    console.log(`ES6 -> ${secure}, ${path}, ${domain}, ${expires}`);
}

setCookieES6c("type", "js");

