const User = require('../models/user');
const ErrorHandler = require('../utils/errorHandlers');
const catchAsyncError = require('../middlewares/asyncErrors');



///Register User(consumer) ==== .api/v1/user/register


exports.registerUser = catchAsyncError(async (req, res, next)=>{
    const { userName, email, password} = req.body;

    const user = await user.create({
        userName,
        email,
        password,
        avatar: {
            pubic_id: '',
            ur: ''
        }
    })
    res.status(200).json({
        success: true,
        user
    })
})