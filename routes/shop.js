const path = require('path');

const express = require('express');
const adminData = require('./admin')

const rootDir = require('../Helper/path');

const router = express.Router();


router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
})

router.get('/', (req, res, next) => {
    console.log(adminData.products);
    const products = adminData.products;
    res.render('shop', { prods: products, docTitle: 'Shop' });


})

module.exports = router