const http = require('http');
const urls = process.argv.slice(2);
const er = new Error('ERROR!');
const final = [];

function cb(err, data) {
    if (err) console.log('callback ' + er.message)
    final.push(data);
    console.log(data)
    return data;
}

function fetchStr(url, callback) {
    let rawData = '';
    http.get(url, (res) => {
        res.setEncoding('utf8')
        res.on('error', err => {
            return callback(err, null)
        });
        res.on('data', (chunk) => {
            rawData += chunk;
        });
        res.on('end', () => {
            try {
                callback(null, rawData)
            } catch (e) {
                callback(e, null);
            }
        })
    }).on('error', err => console.error(err.message));
}

fetchStr(process.argv[4] , cb)
fetchStr(process.argv[2] , cb)
fetchStr(process.argv[3] , cb)


