const express = require('express');
const router = express.Router();
const {
	registerController,
	loginController,
	logoutController
} = require('../Controllers/authController');
const {
	userValidation,
	registerValidation,
	loginValidation
} = require('../Middlewares/Validation/validateUser');
const isAuth = require('../Middlewares/isAuth');


//-----------------------------------POST APIs---------------------------------//


/*
	@desc : registers the user
	@API : Public
	@method : post
*/
router.post('/register' , registerValidation , userValidation , registerController);


/*
	@desc : logins the user
	@API : Public
	@method : post
*/
router.post('/login' , loginValidation , userValidation , loginController);

/*
	@desc : logouts the user
	@API : Public
	@method : post
*/
router.post('/logout' , isAuth , logoutController);

module.exports = router;
