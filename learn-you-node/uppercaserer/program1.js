const http = require('http');
const map = require('through2-map');
const server = http.createServer((req,res) => {
    console.log(req.method)
    if (req.method === 'POST') {
        req.pipe(map((chunk) => {
            return chunk.toString().toUpperCase();
        })).pipe(res);
    } else {
        res.write('405: ' + req.method + ' not allowed');
    }
})

server.listen(+process.argv[2]);

