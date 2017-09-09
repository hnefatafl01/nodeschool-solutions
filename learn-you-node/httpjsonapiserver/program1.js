const http = require('http');
const map = require('through2-map');
const url = require('url');
const fs = require('fs');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'application/json'});
    if (req.method === 'GET') {
        const myUrl = url.parse(req.url)
        const p = myUrl.query.slice(4);
        const parsed = new Date(p);
        let date;
        if (myUrl.pathname === '/api/parsetime') {
            date = {
                hour: parsed.getHours(),
                minute: parsed.getMinutes(),
                second: parsed.getSeconds()
            }
        } else if (myUrl.pathname === '/api/unixtime') {
            date = {
                unixtime: parsed.getTime()
            }
        } else {
            console.log('405')
        }
        date = JSON.stringify(date)
        res.end(date)
    }
});

server.listen(process.argv[2], () => {
    console.log('listening on port' + process.argv[2])
});