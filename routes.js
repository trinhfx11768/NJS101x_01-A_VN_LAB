
const fs = require('fs');

const requestHandler = (req, res, next) => {
    const url = req.url;
    const method = req.method;

    if(url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html><head><title>Message</title></head><body><form method="post" action="/message"><input type="text" name="message"><button type="submit">Send</button></form></body></html>');
        return res.end();
    }
    if(url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            message = parsedBody.split('=')[1];
            fs.writeFileSync('message.txt', message);
        });
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html><head><title>My first page</title></head><body><h1>Hello From NodeJS!</h1></body></html>');
    res.end();
}

// module.exports = requestHandler;

// module.exports = {
//     handler: requestHandler,
//     someText: 'Hard code'
// }

// module.exports.handler = requestHandler;
// module.exports.someText = 'someText';

exports.handler = requestHandler;
exports.someText = 'someText new';
 