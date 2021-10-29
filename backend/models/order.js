const mongoose = require('mongoose');

const orderSchema = mongoose.schema({
    shippingInfo: {
        address: {
            type: String,
            required: true
        },
        postalCode: {
            type: String,
            required: true
        },
        town: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        subCounty: {
            type: String,
            required: true
        },
        county: {
            type: String,
            required: true
        },
        country: {
            type: String,
            required: true
        },
        continent: {
            type: String,
            required: true
        },
    },
    user: {
        type: mongoose.schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    orderItems: [
        {
            name: {
                type: String,
                required: true
            },
            amount: {
                type: String,
                required: true
            },
            image: {
                type: String,
                required: true
            },
            price: {
                type: Number,
                required: true
            },
            product: {
                type: mongoose.schema.Types.ObjectId,
                required: true,
                ref: 'Product'
            }
        }
    ],
    paymentInfo: {
        id: {
            type: String,

        },
        status:{
            type: String
        },
    },
    itemsPrice: {
        type: Number,
        required: true,
        default: 0.0,
    },
    taxPrice: {
        type: Number,
        required: true,
        default: 0.0,
    },
    shippingPrice: {
        type: Number,
        required: true,
        default: 0.0,
    },
    totalPrice: {
        type: Number,
        required: true,
        default: 0.0
    }, 
    deliveredAt : {
        type: Date
    },
    orderedAt: {
        type: Date,
        default: Date.now
    },
    orderStatus: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Order', orderSchema);


