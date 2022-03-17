const path = require('path');

const express = require('express');

const router = express.Router();

const products = [];

//[GET] /admin/add-product
router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
});

//[POST] /admin/add-product
router.post('/add-product', (req, res, next) => {
    products.push({title: req.body.title});
    res.redirect('/');
});

module.exports.routes = router;
module.exports.products = products;
