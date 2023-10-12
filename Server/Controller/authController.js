const userModel = require("../Models/userModel");
const generateToken = require("../Utils/generateToken");

const registerController = async (req , res) => {
	const {name , email , contactNumber , password} = req.body;
	const userExists = await userModel.findOne({email});
	if (userExists) {
		return res.status(400).send({
			success : false,
			message : "User already registered"
		});
	}
	const newUser = await userModel.create({name , email , contactNumber , password});
	if (newUser) {
		return res.status(200).send({
			success : true,
			message : "User registered successfully",
			name : newUser.name,
			email : newUser.email,
			contactNumber : newUser.contactNumber,
			token : generateToken(newUser._id)
		});
	}
	else {
		return res.status(500).send({
			success : false,
			message : "Error in register API"
		});
	}
};

const loginController = async (req , res) => {
	const {email , password} = req.body;
	const user = await userModel.findOne({email});
	if (!user) {
		return res.status(400).send({
			success : false,
			message : "email is not registered"
		});
	}
	else if (user && (await user.matchPassword(password))) {
		return res.status(200).send({
			success : true,
			message : "login successfull",
			name : user.name,
			email : user.email,
			token : generateToken(user._id)
		});
	}
	else {
		return res.status(400).send({
			success : false,
			message : "email or password are not matching"
		})
	}
};
module.exports = {registerController , loginController};
