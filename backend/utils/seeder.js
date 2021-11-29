const Product = require('../models/product');
const dotenv = require('dotenv');

const connectDB = require('../config/db');

const products = require('../data/data.json')

//dotenv file set up
dotenv.config({path: 'backend/config/config.env'});

connectDB();

const seedProducts =async () => {
    try{
        await Product.deleteMany();
        console.log('Products delete');

        await Product.insertMany(products);
        console.log('all products added');

        process.exit
    }catch(err){
        console.log(err.message);
        process.exit()
    }
}

seedProducts()