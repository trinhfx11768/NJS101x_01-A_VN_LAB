const path = require('path');

const express = require('express');

const shopController = require('../controllers/shop');

const router = express.Router();

// router.post('/cart-delete-item', shopController.postCartDeleteProduct);
router.get('/', shopController.getIndex);

router.get('/products/:productId', shopController.getProduct);
router.get('/products', shopController.getProducts);

// router.post('/cart', shopController.postCart);
// router.get('/cart', shopController.getCart);

// router.post('/create-order', shopController.postOrders);
// router.get('/orders', shopController.getOrders);

module.exports = router;
