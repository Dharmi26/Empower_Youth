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

// end-point : auth/register
// API : register
// http request : POST

// router.post('/register' , registerValidation , userValidation , registerController);
router.post('/register' , registerController);

// end-point : auth/login
// API : login
// http request : POST

// router.post('/login' , loginValidation , userValidation , loginController);
router.post('/login' , loginController);

// end-point : auth/logout
// API : logout
// http request : POST

router.post('/logout' , isAuth , logoutController);

module.exports = router;
