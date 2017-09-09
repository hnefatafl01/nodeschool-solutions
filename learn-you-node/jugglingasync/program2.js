const async = require('async');
const http = require('http');
const urls = process.argv.slice(2);
const err = new Error('done messed up a-aron');

// function callback(err, url) {
//     return http.get(url, (res) => {
//         res.setEncoding('utf8');
//         res.on('error', err => console.error(err))
//         res.on('data', (data) => {
//             console.log(data)
//         });
//         res.on('end', () => { console.log('endpoint')})
//     })
// }

// async.map(urls, (err,callback) => {
//     if (err) return callback(err);
//     return callback(null, url);
// }),
// (err, data) => {
//     if (err) err => console.err(err)
//     console.log(data)
// }

function callback(err, data) {
    if (err) console.error(err);
    return data;
}

async.parallel([
    function(callback) {
        return http.get(urls[0], function(res) {
            res.setEncoding('utf8');
            let queue = [];
            if (err) return callback(err, null)
            res.on('data', function(chunk) {
                console.log(chunk)
                queue.push(chunk)
            })
            res.on('end', callback(null, queue.join('')))
        })
    },
    function(callback) {
        return http.get(urls[1], function(res) {
            res.setEncoding('utf8');
            let queue = [];
            if (err) return callback(err, null)
            res.on('data', function(chunk) {
                console.log(chunk)
                queue.push(chunk);
            })
            res.on('end', callback(null, queue.join('')))
        })
    },
    function(callback) {
        return http.get(urls[2], function(res) {
            res.setEncoding('utf8');
            let queue = [];
            if (err) return callback(err, null)
            res.on('data', function(chunk) {
                console.log(chunk)
                queue.push(chunk);

            })
            res.on('end', callback(null, queue.join('')))
        })
    }
],
function(err, results) {
    console.log(results);
});