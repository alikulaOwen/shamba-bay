const express = require('express');
const router = express.Router();

const { getProduct } = require('../controllers/productController');

router.route('/products').get(getProduct);

module.exports = router;

