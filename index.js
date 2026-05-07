const http = require('http');

const PORT = process.env.PORT || 80;

const server = http.createServer((req, res) => {

    if (req.url === '/api') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Hello from the API!' }));
        return;
    }

    res.end('Hello World!');
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
