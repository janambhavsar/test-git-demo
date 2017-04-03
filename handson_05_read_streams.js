console.log('Program Started.');
const fs = require('fs');
var data = '';

// Create a reader stream
var readerStream = fs.createReadStream('data.csv');

// readerStream.on('end', function handleEnd() {
// 	console.log('Read Completed');
// 	console.log(data);
// });

readerStream.setEncoding('utf8');

readerStream.on('data', function readData(chunk) {
	data += chunk;
	console.log('Data');
});

readerStream.on('end', function handleEnd() {
	console.log('Read Completed');
	console.log(data);
});

readerStream.on('finish', function handleFinish() {
	console.log('Finished the complete stream reading process');
});

readerStream.on('error', function handleError(err) {
	console.log(err);
});

console.log('Program Ended.');