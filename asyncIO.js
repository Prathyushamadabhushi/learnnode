var fs = require('fs');
var file = process.argv[2];
fs.readFile(file, function(err, read){
    if(err){
        console.log('err',err);
    }else{
        var linesoftext = read.toString().split('\n').length-1;
        console.log(linesoftext);
    }
});
