const fs = require('fs');
fs.readFile(process.argv[2], 'utf8', (err, data) => {
    if (err) throw err;
    const matches = data.match(/\n/g).length
    console.log(matches);
});

