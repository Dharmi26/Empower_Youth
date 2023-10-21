const {check , validationResult} = require('express-validator');

const userValidation = function (req , res , next) {
	const result = validationResult(req).array();
	if (!result.length) { 
		return next();
	}
	const error = result[0];
	if (error) {
		return res.status(400).send({
			success : false,
			message : 'Error while validating user',
			error : error.message
		});
	}
};

const registerValidation = [
	check('name')
	.trim()
	.not()
	.isEmpty()
	.withMessage('name cannot be an empty field')
	.isString()
	.withMessage('must be a valid name')
	.isLength({min : 3 , max : 20})
	.withMessage('name must be between 3 to 20 characters'),

	check('email')
	.trim()
	.not()
	.isEmpty()
	.withMessage('email cannot be an empty field')
	.normalizeEmail({gmail_remove_dots : false})
	.isEmail()
	.withMessage('email format is not right'),

	check('password')
	.trim()
	.not()
	.isEmpty()
	.withMessage('password cannot be an empty field')
	.isLength({min : 8 , max : 20})
	.withMessage('password must be between 8 to 20 characters'),

	check('confirmPassword')
	.trim()
	.not()
	.isEmpty()
	.withMessage('confirm-password cannot be an empty field')
	.custom((value , {req}) => {
		if (value !== req.body.password) {
			throw new Error('Both password & confirm-password must be same')
		}
		return true;
	})
];

const loginValidation = [
	check('email')
	.trim()
	.not()
	.isEmpty()
	.withMessage('email is required')
	.normalizeEmail({gmail_remove_dots : false})
	.isEmail()
	.withMessage('email format is not right'),

	check('password')
	.trim()
	.not()
	.isEmpty()
	.withMessage('password is required')
];

module.exports = {
	userValidation,
	registerValidation,
	loginValidation
};