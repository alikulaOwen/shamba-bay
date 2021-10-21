
<<<<<<< HEAD
const ErrorHandler = require('../utils/errorHandlers')

const AsyncErrors = require('../middlewares/asyncErrors')

const APIsFeature = require('../utils/api')



exports.newProduct =async (req, res, next)=>{
    const product = await Product.create(req.body);

    res.status(201).json(
        {
            success: true,
            product
        }
    )
}
//Get all products from database
exports.getProduct = AsyncErrors( async(req, res, next) => {
    
    const resPerPage = 4 ; 
    const productCount = await Product.countDocuments();
    
    const searchAPI = new APIsFeature(products.find(), req.query)
        .search()
        .filter()
        .pagination(resPerPage);
    const products = await searchAPI.query
    res.status(200).json(
        {
            success: true,
            count: products.length,
            productCount, 
            products  }
    )
});

//getting a single object or product from data base.
 exports.getSingleProduct = AsyncErrors(async (req, res, next)=>
{
    const products = await Product.findById()

    if(!products){
        return next(new ErrorHandler('Product Not Found', 404))
    }
    res.status(203).json({
        success: true,
        products
    })

})
//Update product =>

exports.updateProduct = AsyncErrors(async (req, res, next) =>{
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

exports.deleteProduct = AsyncErrors(async(req,res,next) => {
    const product = Product.findById();

    if(!product){
        return res.status(404).json(
            {
                success: false,
                message: "404 Not found"
            }
        
        )
    }

    await product.remove();

});
=======

exports.getProduct = (req, res, next) => {
    res.status(200).json(
        {
            success: true,
            message: "This route will show all products in the database"
        }
    )
}
>>>>>>> parent of 50bf7e1... added CRUD to product module.
