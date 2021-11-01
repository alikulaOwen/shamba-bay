const Order = require("../models/order");


const ErrorHandler = require('../utils/errorHandlers');
const catchAsyncError = require('../middlewares/asyncErrors');
const product = require("../models/product");


// create order = /api/v1/order/me

exports.newOrder = catchAsyncError(async(req, res, next)=> {
    const {
        shippingInfo,
        orderItems,
        paymentInfo,
        taxPrice,
        itemPrice,
        shippingPrice,
        totalPrice

    } = req.body;

    const order = await Order.create({
        shippingInfo,
        orderItems,
        paymentInfo,
        taxPrice,
        itemPrice,
        shippingPrice,
        totalPrice,
        paidAt: Date.now(),
        user: req.user._id
    })

    res.status(200).json({
        success: true,
        order
    })
})

//get order => /api/v1/order/:id

exports.getOrder = catchAsyncError(async(req, res, next) =>{
    const order = await Order.findById(req.params.id).populate('user', 'name email');

    if(!order) {
        return next(new ErrorHandler('No Order found with id', 404));
    }

    res.status(200).json({
        success: true,
        order
    })
}) 


// find orders by logged in user

exports.getAllOrders = catchAsyncError(async(req, res, next) =>{
    const orders = await Order.find({user: req.user.id});

    res.status(200).json({
        success: true,
        orders
    })
}) 

// find all orders in the db  = api/vi/admin/orders

exports.allOrders = catchAsyncError(async(req, res, next) =>{
    const orders = await Order.find();

    let totalAmount = 0 ;

    orders.forEach(orders =>{
        totalAmount += orders.totalPrice
    })

    res.status(200).json({
        success: true,
        totalAmount,
        orders
    })
}) 
// update order ADMIN

exports.updateOrder = catchAsyncError(async(req, res, next) =>{
    const order = await Order.findById(req.params.id);

    if (order.orderStatus === 'Delivered'){
        return next(new ErrorHandler('Product already delivered', 400))
    }
    

    order.orderItems.forEach(async item => {
        await updateStock(item.product, item.amount)
    })

    order.orderStatus = req.body.status;
    order.orderedAt = Date.now();

    await order.save();

    res.status(200).json({
        success: true,
    })
}) 




//update func

async function updateStock(id, quantity){
    const product = await product.findById(id);

    product.stock = product.stock - amount;

    await product.save({validateBeforeSave: false })
}

//delete order
exports.deleteOrder = catchAsyncError(async(req, res, next) =>{
    const order = await Order.findById(req.params.id);
    if(!order) {
        return next(new ErrorHandler('No Order found with id', 404));
    }

    await order.remove()
    res.status(200).json({
        success: true,
    
    })
}) 