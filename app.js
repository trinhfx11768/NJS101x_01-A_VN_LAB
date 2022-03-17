const path = require('path');

const express = require('express');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

//Parsed body cho form data, XMLHttp, Json, ...
app.use(express.urlencoded({ extended: false }));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
    //path.join(__dirname,) là nơi đang sử dụng nó.
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
})

app.listen(3000);