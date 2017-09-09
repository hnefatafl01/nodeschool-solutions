const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
    let readable = fs.createReadStream(process.argv[3]);
    readable.pipe(res)
});

server.listen(process.argv[2]);