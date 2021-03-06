const Product  = require('../models/product')


const ErrorHandler = require('../utils/errorHandlers')

const catchAsyncError = require('../middlewares/asyncErrors')

const APIsFeature = require('../utils/api')




exports.newProduct =async (req, res, next)=>{


    req.body.user = req.user.id;

    const product = await Product.create(req.body);

    res.status(201).json(
        {
            success: true,
            product
        }
    )
}
//Get all products from database
exports.getProduct = catchAsyncError( async(req, res, next) => {
    
    const resPerPage = 8 ; 
    const productsCount = await Product.countDocuments();
    
    const searchAPI = new APIsFeature(Product.find(), req.query)
        .search()
        .filter()
        .pagination(resPerPage);
    const products = await searchAPI.query;

    setTimeout(()=>{
        res.status(200).json(
            {
                success: true,
                productsCount,
                products  }
        )
    }, 1500);
    
});

//getting a single object or product from data base.
 exports.getSingleProduct = catchAsyncError(async (req, res, next)=>
{
    const products = await Product.findById(req.params.id)

    if(!products){
        return next(new ErrorHandler('Product Not Found', 404))
    }
    res.status(203).json({
        success: true,
        products
    })

})
//Update product =>

exports.updateProduct = catchAsyncError(async (req, res, next) =>{
    let product = await Product.findById()

    if(!product){
        return res.status(404).json(
            {
                success: false,
                message: "404 Not found"
            }
        
        )

    }

    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    });

    res.status(200).json({
        success: true,
        product
    });
});
//Delete product

exports.deleteProduct = catchAsyncError(async(req,res,next) => {
    const product = Product.findById(req.params.id);

    if(!product){
        return res.status(404).json(
            {
                success: false,
                message: "404 Not found"
            }
        
        )
    }

    await product.remove();
    res.status(200).json(
        {
            success: true,
            message: "Product deleted Successfully"
        }
    )

});

//create user reviews api

exports.newUserProductReview = catchAsyncError(async(req, res, next)=> {
    const {
        productId,
        comment,
        rating

    } = req.body;

    const review = {
        user: req.user._id,
        userName: req.user.userName,
        rating: Number(rating),
        comment
    }
    const product = await Product.findById(productId)

    //check if product  is reviewd by logged in user
    const isReviewed = product.reviews.find(
        r => r.user.toString() === req.user._id.toString()

    )

    if(isReviewed){
        product.reviews.foreach(review =>{
            if (review.user.toString() === req.user._id.toString()){
                review.comment = comment;
                review.rating = rating;
            }
        })

    }else{
        product.reviews.push(review);
        product.numOfReviews = product.reviews.length
    }
    product.ratings = product.reviews.reduce((acc, item) => item.rating + acc, 0)/product.reviews.length
    await product.save({ validateBeforeSave: true})

    res.status(200).json(
        {
            success: true
        }
    )
})

// get all product reviews
exports.getAllProductReviews = catchAsyncError(async(req, res, next) => {
    const product = await Product.findById(req.query.id);

    res.status(200).json({
        success: true,
        reviews: product.reviews
    })
})

exports.deleteProductReviews = catchAsyncError(async(req, res, next) => {
    const product = await Product.findById(req.query.productId);

    const reviews =product.reviews.filter(review => review._id.toString() !== req.query.productId.toString());

    const ratings = product.reviews.reduce((acc, item) => item.rating + acc,0) / reviews.length

    const numOfReviews = reviews.length;

    await Product.findByIdAndUpdate(req.query.productId, {
        reviews, 
        ratings,
        numOfReviews
    }, {
        new: true,
        runValidators: true,
        useFindAndModify: false

    })

    res.status(200).json({
        success: true,
    })
})