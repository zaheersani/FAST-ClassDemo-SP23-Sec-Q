const http = require('http');
const { json } = require('stream/consumers');
const hostname = '127.0.0.1';
const port = 3000;

const users = require('./users.json');

const server = http.createServer((req, res) => {
    if (req.url == '/' && req.method == 'GET') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        var obj = {
            name: 'Zaheer',
            department: 'Software Engineering'
        }
        res.end(JSON.stringify(obj));
    } else if (req.url == '/users' && req.method == 'GET') {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(users));
    } else if (req.url.match(/\/users\/([0-9])/) && req.method == 'GET') {
        let id = req.url.split('/')[2]
        res.writeHead(200, { 'Content-Type': 'application/json' })
        let user = users.find(u => u.id == id)
        res.end(JSON.stringify(user));
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
