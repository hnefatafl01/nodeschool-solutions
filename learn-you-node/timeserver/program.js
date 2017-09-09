const net = require('net');
const dt = require('node-datetime');
const date = dt.create().format('Y-m-d H:M');
const server = net.createServer((socket) => {
    socket.write(date + '\n')
    socket.end()
});

server.listen(process.argv[2]);