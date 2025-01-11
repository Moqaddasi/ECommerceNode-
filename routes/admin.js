const path = require('path');
const express = require('express');

const rootDir = require('../Helper/path');

const router = express.Router();

const products = [];

router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
})

router.post('/product', (req, res, next) => {
    console.log(req.body);
    products.push({
        name: req.body.name,
        price: req.body.price,
        description: req.body.description

    });
    console.log('products', products);

    res.redirect('/')
})

exports.routes = router
exports.products = products