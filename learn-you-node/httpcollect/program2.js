const http = require('http');
const concat = require('concat-stream');

http.get(process.argv[2], (res) => {
    const err = new Error('you done messed up a-aron');
    res.on('error', err => console.error(err.message, '\n', err.stack));
    res.pipe(concat((data) => {
        console.log(data.toString().length);
        console.log(data.toString());
    }));
});