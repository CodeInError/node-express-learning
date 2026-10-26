const http = require('http');

const server = http.createServer((req, res) => {
    if (req.method === 'POST' && req.url === '/users') {
        let body = '';

        req.on('data', (chunk) => {
            body += chunk;
        });

        req.on('end', () => {
            const user = JSON.parse(body);

            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({
                message: 'User received successfully',
                data: user
            }));
        });
    } else {
        res.statusCode = 404;
        res.end('Route not found');
    }
});

server.listen(3000, () => {
    console.log('Server running on port 3000');
});