console.log('Program Started.');
const fs = require('fs');
var data = 'some text';

// Create a reader stream
var writerStream = fs.createWriteStream('output.txt');

// readerStream.on('end', function handleEnd() {
// 	console.log('Read Completed');
// 	console.log(data);
// });

writerStream.on('finish', function handleFinish() {
	console.log('Write Completed');
});

writerStream.write(data, 'utf8');
writerStream.end();

writerStream.on('error', function handleError(err) {
	console.log(err);
});

console.log('Program Ended.');