const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required:[ true, 'Please enter product name'],
        maxlength: [5, 'product name cant exceed 5 characters'],
        trim: true
    },
    price: {
        type: Number,
        required:[ true, 'Please enter product price'],
        maxlength: [5, 'product name cant exceed 5 characters'],
        default: 0
    },
    description: {
        type: String,
        required:[ true, 'Please enter product name'],
        maxlength: [200, 'Description cant exceed 5 characters'],
        trim: true
    },
    ratings: {
        type: Number,
        default: 0,
    },
    images: [
        {
            pulic_id: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            }

        }
    ],
    category: {
        type: String,
        required: [true, 'Please select category']
    },
    seller: {
        type: String,
        required: [true, 'Please enter product seller']
    },
    stock: {
        type: Number,
        required: [true, 'please enter product stock'],
        maxLength: [5, 'producy cant exceed']
    }, 
    numOfReviews: {
        type: Number,
        default: 0
    },
    reviews: [
        {
        user: {
             type: String,
             required: true,
        },
        ratings: {
            type: String,
            required: true
        },
        comments: {
            type: String,
            required: true
        }
    }
],
timeCreated: {
    type: Date,
    default: Date.Now
}, 
status: {
    type: String,
    required: true
}
});

module.exports = mongoose.model('Product', productSchema);