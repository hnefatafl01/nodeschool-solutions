const fs = require('fs');
const path = require('path');

module.exports = function(dir, ext, callback) {
    ext = '.' + ext;
    fs.readdir(dir, 'utf-8', (err, list) => {
        if (err) return callback(err);
        const matches = list.filter((val) => {
            if (val.endsWith(ext)) return val;
        });
        callback(null, matches);
    });
}