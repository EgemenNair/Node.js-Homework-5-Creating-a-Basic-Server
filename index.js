import * as http from 'http';

const server = http.createServer((req, res) => {
    const url = req.url;
    if (url === '/index') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<h1>Index Page</h1>');
    }
    else if (url === '/about') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<h1>About Page</h1>');
    }
    else if (url === '/contact') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<h1>Contact Page</h1>');
    }
    else {
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.write('<h1>404 NOT FOUND</h1>');
    }
    res.end();
});

const port = 5000;

server.listen(port, () => {
    console.log(`Server started on port: ${port}`);
});