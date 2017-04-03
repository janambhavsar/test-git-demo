console.log('Example of Un-Blocking.');
console.log('============');
console.log('Before file read');

// Un-Blocking. By using asynchronous method it does not wait for the method executing it moves on to the next Line of Code.
const fs = require('fs');
const filename = 'data.csv';

// Asynchronous file read
fs.readFile(filename, function(err, data) {
	if(err) {
		throw err;
	}
	
	var text = data.toString();
	console.log('---------\n' + text + '\n---------------');
});

console.log('After file read');