const User = require("../models/user");
const ErrorHandler = require("../utils/errorHandlers");
const catchAsyncError = require("../middlewares/asyncErrors");
const sendToken = require("../utils/jwtToken");
const sendEmail = require("../utils/sendEmail");

///Register User(consumer) ==== .api/v1/register

exports.registerUser = catchAsyncError(async (req, res, next) => {
  const { firstName, lastName, userName, email, password } = req.body;

  const user = await User.create({
    firstName,
    lastName,
    userName,
    email,
    password,
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
  if (!email || !password) {
    return next(
      new ErrorHandler("please enter your email and password to login", 404)
    );
  }
  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    return next(new ErrorHandler("nvalid email and password", 401));
  }
  ///check idf password is a match or nit
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
