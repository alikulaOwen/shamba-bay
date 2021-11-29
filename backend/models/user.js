const mongoose = require('mongoose');
const validator = require('validator');
const crypto = require('crypto')

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');



const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        unique: true,
        maxlength: [50, "Can't be longer than 50 characters"],
        lowercase: true, 
        required: [true, "This Field is required"], 
        match: [/^[a-zA-Z0-9]+$/, 'is invalid'], 
        index: true
    },
    lastName: {
        type: String,
        unique: true,
        maxlength: [50, "Can't be longer than 50 characters"],
        lowercase: true, 
        required: [true, "This Field is required"], 
        match: [/^[a-zA-Z0-9]+$/, 'is invalid'], 
        index: true
    },
    userName: {
        type: String,
        unique: true,
        maxlength: [50, "Can't be longer than 50 characters"],
        lowercase: true, 
        required: [true, "This Field is required"], 
        match: [/^[a-zA-Z0-9]+$/, 'is invalid'], 
        index: true
    },
    email: {
        type: String,
        unique: true,
        maxlength: [50, "Can't be longer than 50 characters"],
        validate: [validator.isEmail, 'Please enter a valid email address']
    },
    biography: {
        type: String,
        maxlength: [1000, "Cant be longer than 1000 words"],
        index: true,
    },
    password: {
        type: String, 
        select: false,
        minlength: [6, 'password cant be less than 6 characters'],
        required: [true, "can't be blank"],
        index: true
    },
    profilePicture: {
        public_id: {
            type: String,
            required: false
        },
        url: {
            type: String,
            required: false
        }
    },
    dateOfBirth:{
        type: Date,
        default: Date.now
    },
    role: {
        type: String,
        default: 'user'
    },
    resetPasswordToken: String,
    resetPasswordTokenExpire: Date

});

//encrypt password
userSchema.pre('save', async function (next){
    if(!this.isModified('password')){
        next()
    }
    this.password = await bcrypt.hash(this.password, 10)
})
//compare password
userSchema.methods.comparePassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password)

    //needs recheck and debugging
}

//return json web token 

userSchema.methods.getJwtToken = function(){
    return jwt.sign({id: this._id}, process.env.JWT_SECRET,{
        expiresIn: process.env.JWT_EXPIRES_TIME
    })
}

userSchema.methods.getResetPasswordToken = function(){
    //generate reset in token
    const resetToken = crypto.randomBytes(20).toString('hex');

    //hash and set to resetPassword token
    this.resetPasswordToken = crypto.createHash('sha256').update(resetToken).digest('hex')


    //set token expire
    this.resetPasswordTokenExpire = Date.now() + 30* 60* 1000;

    return resetToken;
    


}

module.exports = mongoose.model('User', userSchema);