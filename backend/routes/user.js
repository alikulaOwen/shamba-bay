const express = require('express');
const router  = express.Router();


const {
    registerUser, 
    loginUser, 
    forgotPassword, 
    resetPassword, 
    logoutUser, 
    getUserProfile,
    getUserPasswordUpdate,
    updateUserProfile,
    allUsers,
    getUserDetails,
    updateUser,
    deleteUser
} = require('../controllers/userController');

const { isAuthenticatedUser, authorizeUser } = require('../middlewares/auth');


router.route('/register').post(registerUser);
router.route('/login').post(loginUser);

//admin routes

router.route('/admin/allUsers').get(isAuthenticatedUser,authorizeUser('admin'), allUsers)
router.route('/admin/user/:id')
        .get(isAuthenticatedUser,authorizeUser('admin'), getUserDetails)
        .put(isAuthenticatedUser,authorizeUser('admin'), updateUser)
        .delete(isAuthenticatedUser, authorizeUser('admin', 'user'), deleteUser)

router.route('/password/forgot').post(forgotPassword);
router.route('/password/reset/:token').put(resetPassword);
router.route('/profile').get(isAuthenticatedUser, getUserProfile)
router.route('/password/update').put(isAuthenticatedUser, getUserPasswordUpdate) //buggy
router.route('/profile/update').put(isAuthenticatedUser, updateUserProfile)

router.route('/logout').get(logoutUser);

module.exports = router;   


