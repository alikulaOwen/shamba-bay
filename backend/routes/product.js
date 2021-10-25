const express = require('express');
const router = express.Router();

const { getProduct, getSingleProduct, deleteProduct, updateProduct, newProduct } = require('../controllers/productController');


const {isAuthenticatedUser, authorizeUser } = require('../middlewares/auth')
//get a single product
router.route('/products/:id').get(getSingleProduct);

//create new product
router.route('/admin/products/new').post(isAuthenticatedUser, authorizeUser('admin', 'user'), newProduct);

//get all products

router.route('/products').get(getProduct);
//update product
router.route('/admin/products/:id')
    .put(isAuthenticatedUser,authorizeUser('admin'),  updateProduct) 
    .delete(isAuthenticatedUser, authorizeUser('admin'),  deleteProduct)




//delete product




module.exports = router;

