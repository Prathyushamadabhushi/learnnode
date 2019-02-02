var fs = require('fs');
var path = process.argv[2];
var read = fs.readFileSync(path);
var linesoftext = read.toString().split('\n');
var newlines = linesoftext.length-1;
console.log(newlines);
