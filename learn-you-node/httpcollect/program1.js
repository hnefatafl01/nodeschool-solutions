const http = require('http');

http.get(process.argv[2], (response) => {
    response.setEncoding('utf8');
    const err = new Error('something went wrong!');
    let collected = '';
    response.on('error', err => console.error(err.message + '\n' + err.stack));
    response.on('data', (dataChunk) => {
        collected += dataChunk;
    });
    response.on('end', () => {
        try {
            console.log(collected.length);
            console.log(collected);
        } 
        catch (e) {
            console.error('end' + e.message + '\n' + e.stack);
        }
    });
}).on('error', error => console.log(error));