var total = 0;
for(var i=2;i<process.argv.length;i++){
    //adding each item to the total
    total += Number(process.argv[i]);
}
console.log(total);
