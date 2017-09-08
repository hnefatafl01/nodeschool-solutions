const fs = require('fs');
const ext = '.' + process.argv[3];
fs.readdir(process.argv[2], (err, list) => {
    if (err) throw err;
    const matches = list.filter((item) => {
        if (item.endsWith(ext)) {
            return item;
        }
    });

    const final = matches.reduce((acc, val, i) => {
        return acc += '\n' + val;
    });
    console.log(final);
});