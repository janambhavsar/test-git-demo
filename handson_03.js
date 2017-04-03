console.log('Example of Blocking.');
console.log('============');
console.log('Before file read');

// Blocking. This blocks the thread because it uses synchronous method and waits till it is served
const fs = require('fs');
const data = fs.readFileSync('data.csv');
console.log('---------\n' + data.toString() + '\n---------------');
console.log('After file read');