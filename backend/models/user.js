const mongoose = require('mongoose');
const validator = require('validator');

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
        lowercase: true, 
        required: [true, "This Field is required"], 
        match: [/\S+@\S+\.\S+/, 'is invalid'], 
        index: true
    },
    biography: {
        type: String,
        maxlength: [1000, "Cant be longer than 1000 words"],
        index: true,
    },
    password: {
        type: String, 
        lowercase: true, 
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
    role: {
        type: String,
        default: 'user'
    },
    resetPasswordToken: String,
    resetPasswordTokenExpire: Date

});


module.exports = mongoose.model('User', userSchema);