const http = require('http');

const express = require('express');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

//Parsed body cho form data, XMLHttp, Json, ...
app.use(express.urlencoded({ extended: false }));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).send(`<h1>Page not found</h1>`);
})

const server = http.createServer(app);

server.listen(3000);