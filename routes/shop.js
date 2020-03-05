// const path = require('path');

const express = require('express');

// const rootDir = require('../util/path');
const adminData = require('./admin');

const router = express.Router();

router.get('/', (req, res) => {
  // console.log('this is products array:', adminData.products);
  // res.sendFile(path.join(rootDir, 'views', 'shop.html'));
  const { products } = adminData;
  res.render('shop', { prods: products, pageTitle: 'Shop', path: '/' });
});

module.exports = router;
