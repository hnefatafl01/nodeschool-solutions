const fs = require('fs');
const file = fs.readFileSync(process.argv[2]).toString();
var matches = file.match(/\n/g);
console.log(matches.length);



