//




//TODO: bind function and its arrow replacement


const firstFunc = (a, b, c) => {

    const second = (a, b) => (a + b);

    const third = (c) => {
        console.log(a);
        console.log(b);
        console.log(c);
        return (c) => {
            second + c;
        }
    };

    return third(c);

}

