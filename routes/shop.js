const path = require('path');

const express = require('express');
const adminData = require('./admin')

const rootDir = require('../Helper/path');

const router = express.Router();

router.get('/', (req, res, next) => {
    console.log(adminData.products);

    res.render('shop', { prods: adminData.products, docTitle: 'Shop' });


})
module.exports = router