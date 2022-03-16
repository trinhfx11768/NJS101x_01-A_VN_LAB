const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    if(url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html><head><title>Message</title></head><body><form method="post" action="/message"><input type="text" name="message"><button type="submit">Send</button></form></body></html>');
        return res.end();
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html><head><title>My first page</title></head><body><h1>Hello From NodeJS!</h1></body></html>');
    res.end();
});

server.listen(3000);