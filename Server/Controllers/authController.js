const JWT = require('jsonwebtoken');
const User = require('../Models/User');

const registerController = async (req , res) => { 
	try {
		const {name , email , password , isAdmin = false} = req.body;
		const userFound = await User.findOne({email : email});
		if (userFound) {
			return res.status(401).send({
				success : false,
				message : 'User already registered'
			});
		}
		const newUser = await User({
			name,
			email,
			isAdmin,
			password
		});
		await newUser.save();
		return res.status(201).send({
			success : true,
			message : 'User registered successfully',
			user : newUser
		});
	} catch (error) {
		console.log(error);
		return res.status(501).send({
			success : false,
			message : 'Error in registerController Public API',
			error : error.message
		});
	}
};

const loginController = async (req , res) => { 
	try {
		const {email , password} = req.body;
		const user = await User.findOne({email});
		if (!user) {
			return res.status(401).send({
				success : false,
				message : 'User not registered'
			});
		}

		const isMatch = await user.matchPassword(password);
		if (!isMatch) {
			return res.status(401).send({
				success : false,
				message : 'email / password are not matching'
			});
		}

		const token = JWT.sign({userId : user._id} , process.env.JWT_SECRET_KEY , {expiresIn : '1d'});
		
		let oldTokens = user.tokens || [];
		if (oldTokens.length) {
			oldTokens = oldTokens.filter(tkn => {
				const timeDiff = (Date.now() - parseInt(tkn.signedAt)) / 1000;
				if (timeDiff < 86400) {
					return tkn;
				}
			});
		}

		await User.findByIdAndUpdate(user._id , {
			tokens : [...oldTokens , {
				token, 
				signedAt : Date.now().toString()
			}]
		});
		const info = {
			name : user.name,
			email : user.email
		};
		return res.status(201).send({
			success : true,
			message : 'User logged in successfully',
			user : info,
			token
		});
	} catch (error) {
		return res.status(500).send({
			success : false,
			message : 'Error in loginController Public API',
			error : error.message
		});
	}
};

const logoutController = async (req , res) => { 
	try {
		if (req.headers && req.headers.authorization) {
			const token = req.headers.authorization.split(' ')[1];
			if (!token) {
				return res.status(400).send({
					success : false,
					message : 'Authorization failed'
				});
			}
			const tokens = req.user.tokens;
			const recentToken = tokens.filter(t => t.token !== token);
			await User.findByIdAndUpdate(req.user._id , {tokens : recentToken});
			return res.status(200).send({
				success : true,
				message : 'logout successfull' 
			});
		}
	} catch (error) {
		console.log('Error while logging out : ' + error.message);
		return res.status(501).send({
			success : false,
			message : 'Error in logoutController Public API'
		})
	}
};

module.exports = {
	registerController,
	loginController,
	logoutController
};
