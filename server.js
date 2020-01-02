const http = require('http');
const server = http.createServer((req, res) => {

    res.writeHead(200, {
        'Content-Type': 'text/plain;charset=utf-8'
    })
    res.end('it is ok');
});

server.listen(8080, 'localhost', () => {
    console.log('listen at http://localhost:8080');
});