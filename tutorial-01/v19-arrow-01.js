


const reflect = value => value;
console.log(reflect(4));


const sum = (a, b) => a + b;
console.log(`Sum = ${sum(3, 5)}`);


const getName = () => "Test Name";
console.log(getName());


const expandedAdd = (a, b) => {
    const two = 2;
    return two * (a + b);
}
console.log(`${expandedAdd(2, 4)}`);


const Person = (name, email) => ({
    name: name,
    email: email
});

const p = Person("Adam", "asmith@mail.com");
console.log(`${p.name} ${p.email}`);

