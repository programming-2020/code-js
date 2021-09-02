const {readFile, writeFile} = require('fs');

readFile('text.txt', (error, content) => {
	if (error) {
		throw error;
	}
	console.log(content);
});

