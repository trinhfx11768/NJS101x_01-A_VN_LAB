const http = require('http');

const express = require('express');

const app = express();

app.use('/', (req, res, next) => {
    console.log('This always run!');
    next();
});

app.use('/add-product', (req, res, next) => {
    res.send(`<h1>This is "ADD PRODUCT PAGE"!</h1>`);
});

app.use('/', (req, res, next) => {
    console.log('In another middleware!');
    res.send(`<h1>Hello from Express.js</h1>`);
});

const server = http.createServer(app);

server.listen(3000);