const User = require("../models/user");
const ErrorHandler = require("../utils/errorHandlers");
const catchAsyncError = require("../middlewares/asyncErrors");
const sendToken = require("../utils/jwtToken");
const sendEmail = require("../utils/sendEmail");
const crypto = require('crypto');

///Register User(consumer) ==== .api/v1/register

exports.registerUser = catchAsyncError(async (req, res, next) => {
  const { firstName, lastName, userName, email, password, role } = req.body;

  const user = await User.create({
    firstName,
    lastName,
    userName,
    email,
    password,
    role,
    pictureProfile: {
      pubic_id: "",
      ur: "",
    },
  });

  sendToken(user, 200, res);
});

exports.loginUser = catchAsyncError(async (req, res, next) => {
  const { email, password } = req.body;
  //checks if user has entered password
  //bug 
  if (!email || !password) {
    return next(
      new ErrorHandler("please enter your email and password to login", 404)
      //trace bug
    );
  }
  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    return next(new ErrorHandler("invalid email and password", 401));//buggy
  }
  ///check if password is a match or not
  const isPasswordAMatch = await user.comparePassword(password);

  if (!isPasswordAMatch) {
    return next(new ErrorHandler("Invalid password", 401));
  }

  sendToken(user, 200, res);
});

/// forgot password => /api/vi/password/forgot
exports.forgotPassword = catchAsyncError(async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email });

  if (!user) {
    return next(new ErrorHandler("Email not found", 404));
  }

  //reset token
  const resetToken = user.getResetPasswordToken();

  await user.save({ validateBeforeSave: false });

  //create password reset url
  const resetURl = `${req.protoco}://${req.get(
    "host"
  )}/api/v1/password/reset/${resetToken}`;

  const message = `Your password reset token is as follow\n \n${resetURl}\n\n if you have not requested this email, then ignore it.`;

  try {
    await sendEmail({
      email: user.email,
      subject: "Password Recovery Shamba Bay",
      message,
    });

    res.status(200).json({
      success: true,
      message: `sent email to ${user.email}`,
    });
  } catch (error) {
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save({ validateBeforeSave: false });

    return next(new ErrorHandler(error.message, 500));
  }
});
//reset  password
exports.resetPassword = catchAsyncError(async(req, res, next)=>{
  const resetPasswordToken = crypto.createHash('sha256').update(req.params.token).digest('hex');

  const user = await User.findOne({
    resetPasswordToken,
    resetPasswordExpire:{$gt: Date.now()}
  })
  if(!user){
    return next( new ErrorHandler("This password token is invalid or has expired", 400))
  }
  if(req.body.password !== req.body.confirmPassword)
  {
    return next(new ErrorHandler("Passsword doesnt Match", 400))
  }
  // set up new password
  user.password = req.body.password;

  user.resetPasswordToken = undefined;
  user.resetPasswordExpire = undefined;

  await user.save();

  sendToken(user, 200, res)


})

///fetch user profile =>  / api/v1/profile

exports.getUserProfile= catchAsyncError(async (req,  res,  next) => {
    const user = await User.findById(req.body.id);

    res.status(200).json({
      success: true,
      user
    })

   });

exports.getUserPasswordUpdate= catchAsyncError(async (req,  res,  next) => {
    const user = await User.findById(req.user.id).select('+password');

    const isAMatch = await user.comparePassword(req.body.oldPassword)

    if(!isAMatch){
      return next(new ErrorHandler('Wrong Passsword', 400));
    }

    user.password = req.body.password;
    await user.save();

    sendToken(user, 200, res)



});
//updating user profile => api/v1/profile/update
exports.updateUserProfile = catchAsyncError(async(req, res, next)=> {
  const newProfileData = {
    userName: req.body.userName,
    email: req.body.email,

  }

  const user = await User.findByIdAndUpdate(req.user.id, newProfileData,{
    new: true,
    runValidators: true,
    useFindAndModify: false,

  })

  res.status(200).json({
    success: true,
  })
  
})


exports.updateUser= catchAsyncError(async(req, res, next)=> {
  const newProfileData = {
    userName: req.body.userName,
    email: req.body.email,
    role: req.body.role

  }

  const user = await User.findByIdAndUpdate(req.params.id, newProfileData,{
    new: true,
    runValidators: true,
    useFindAndModify: false,

  })

  res.status(200).json({
    success: true,
    user
  })
  
})

//logout user => /api/v1/logout

exports.logoutUser = catchAsyncError(async (req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    message: "Logged out",
  });
});


/// admin routes


//get all users in the database

exports.allUsers = catchAsyncError(async(req,res, next) => {
  const users = await User.find();

  res.status(200).json({
    success: true,
    users
  })


})

// get user from db => /api/v1/admin/user:id

exports.getUserDetails = catchAsyncError( async(req, res, next) => {
  const user = await User.findById(req.params.id);

  if(!user){
    return next (new ErrorHandler('User not found', 404));
  }

  res.status(200).json({
    success: true,
    user
  })
})

exports.deleteUser= catchAsyncError(async (req,  res,  next) => {
  const user = await User.findById(req.params.id);

  if(!user){
    return next( new ErrorHandler("User Not Found", 400))
  }
  //TODO : remove profile image from cloud blob storage:
  await user.remove();

  res.status(200).json({
    success: true,
    
  })

 });