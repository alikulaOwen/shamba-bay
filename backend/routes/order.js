const express = require('express');

const router = express.Router();

const { 
    newOrder, 
    getOrder, 
    getAllOrders, 
    allOrders, 
    updateOrder,
    deleteOrder
} = require('../controllers/orderController');
const { 
    isAuthenticatedUser, 
    authorizeUser 
} = require('../middlewares/auth');

router.route('/order/new').post(isAuthenticatedUser, authorizeUser, newOrder)
router.route('/order/:id').get(isAuthenticatedUser, authorizeUser, getOrder)
router.route('/order/myOrders').get(isAuthenticatedUser, authorizeUser, getAllOrders)
router.route('/admin/orders/').get(isAuthenticatedUser, authorizeUser('admin'), allOrders)
router.route('/admin/order/:id')
        .put(isAuthenticatedUser, authorizeUser('admin'), updateOrder)
        .delete(isAuthenticatedUser, authorizeUser('admin'), deleteOrder)

module.exports = router;