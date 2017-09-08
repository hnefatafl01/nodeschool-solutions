const search = require('./progModule');
search(process.argv[2], process.argv[3], (err, data) => 
    err ? console.log('you done messed up a-aron') :  console.log(data.join('\n'))
);