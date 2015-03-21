var fs = require('fs');
var read = fs.readFileSync(process.argv[2]).toString();
var read = read.split('\n');
console.log(read.length-1);