const Product = require('../models/product');

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
exports.getProduct = async(req, res, next) => {

    const products = await Product.find()
    res.status(200).json(
        {
            success: true,
            count: products.length,
            products  }
    )
}

//getting a single object or product from data base.
 exports.getSingleProduct = async (req, res, next)=>
{
    const products = await Product.findById()

    if(!products){
        return res.status(404).json(
            {
                success: false,
                message: "404 Not found"
            }
        
        )
    }
    res.status(203).json({
        success: true,
        products
    })

}
//Update product =>

exports.updateProduct =async (req, res, next) =>{
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
}

//Delete product

exports.deleteProduct = async(req,res,next) => {
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

}