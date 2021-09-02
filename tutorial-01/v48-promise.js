

const p1 = new Promise((resolve, reject) => {
	resolve(11);
});

const p2 = new Promise((resolve, reject) => {
	resolve(22);
});

const p3 = new Promise((resolve, reject) => {
	resolve(33);
});

const p4 = Promise.all([p1, p2, p3]);

p4.then((value) => {
	console.log(Array.isArray(value));
	console.log(value[0]);
	console.log(value[1]);
	console.log(value[2]);
});
 

const p5 = Promise.race([p1, p2, p3]);

p5.then((value) => {
	console.log(value);
})