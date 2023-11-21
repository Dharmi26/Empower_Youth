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


<<<<<<< HEAD
// router.post('/register' , registerValidation , userValidation , registerController);
router.post('/register' , registerController);
=======
//-----------------------------------POST APIs---------------------------------//


/*
	@desc : registers the user
	@API : Public
	@method : post
*/
router.post('/register' , registerValidation , userValidation , registerController);
>>>>>>> 93ffca43ce8513ae0c621a451ae72736cb9a6113


<<<<<<< HEAD
// router.post('/login' , loginValidation , userValidation , loginController);
router.post('/login' , loginController);
=======
/*
	@desc : logins the user
	@API : Public
	@method : post
*/
router.post('/login' , loginValidation , userValidation , loginController);
>>>>>>> 93ffca43ce8513ae0c621a451ae72736cb9a6113

/*
	@desc : logouts the user
	@API : Public
	@method : post
*/
router.post('/logout' , isAuth , logoutController);

module.exports = router;
