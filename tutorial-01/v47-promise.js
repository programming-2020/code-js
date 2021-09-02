

const p1 = new Promise((resolve, reject) => {
	resolve(11);
});

const p2 = new Promise((resolve, reject) => {
	resolve(22);
});


p1
.then((value) => {
	console.log(value);
	return p2;
})
.then((value) => {
	console.log(value);
});



