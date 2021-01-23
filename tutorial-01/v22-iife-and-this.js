//

let person = (function (name) {
    console.log("This name parameter is private");
    return {
        getName: function () {
            return name;
        }
    }
})("Adam Smith I");

let personArrow = ((name) => {
    console.log("This name parameter is private");
    return {
        getName: function () {
            return name;
        }
    }
})("Adam Smith I Arrow");

// console.log(person.getName());
// console.log(personArrow.getName());


const PageHandler = {
    id: '213',


    // this won't work
    init: (value) => {
        setTimeout(() => this.do(value), 2000); // this.do is not a function
    },

    // this won't work
    do: (type) => {
        console.log(`Handling ${type} for ${this.id}`);
    },

    initFunction: function (value) {
        setTimeout(() => this.doFunction(value, this.id), 2000);
    },

    doFunction: function (a, b) {
        console.log(`Handling ${a} for ${b}`);
    },

};

PageHandler.initFunction("ABC");

//const myType = () => { };
// const myObject = new myType(); // TypeError: myType is not a constructor



