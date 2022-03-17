const http = require('http');

const express = require('express');

const app = express();

//Parsed body cho form data, XMLHttp, Json, ...
app.use(express.urlencoded({ extended: false }));

app.use('/add-product', (req, res, next) => {
    res.send(`<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Send</button></form>`);
});

app.use('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
})

app.use('/', (req, res, next) => {
    res.send(`<h1>Hello from Express.js</h1>`);
});

const server = http.createServer(app);

server.listen(3000);