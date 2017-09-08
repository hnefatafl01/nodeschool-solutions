const http = require('http');
const bl = require('bl');

http.get(process.argv[2], (res) => {
    const err = new Error('ah ah ah!')
    res.pipe(
        bl((err,data) => {
            if(err) return console.error(err.message);
            data = data.toString();
            console.log(data.length);
            console.log(data);
        })
    );
});