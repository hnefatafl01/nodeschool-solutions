const http = require('http');

http.get(process.argv[2], (response) => {
    response.setEncoding('utf8');
    response.on("data", (response) => {
        console.log(response);
    })
    response.on("error", (err) => {
        console.log(err);
    })
}).on('error', console.error)