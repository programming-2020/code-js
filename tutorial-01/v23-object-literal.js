


function createPersonES5(name, email) {
    return {
        name: name,
        email: email
    };
}

const personES5 = {
    name: "Adam",
    email: "adam@mail.com",
    data: function () {
        return `${this.name} - ${this.email}`;
    }
}



function createPersonES6(name, email) {
    return {
        name,
        email
    };
}

const personES6 = {
    name: "Adam",
    email: "adam@mail.com",
    data() {
        return `Consise method -> ${this.name} - ${this.email}`;
    }
}

console.log(personES6.data());



