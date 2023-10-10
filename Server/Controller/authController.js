const express = require("express");
const bcrypt = require("bcrypt");
const JWT = require("jsonwebtoken");
const userModel = require("../Models/userModel");

const registerController = async (req , res) => {
	try {
		const currentUser = await userModel.findOne({email : req.body.email});
		if (!currentUser) {
			return res.status(400).send({
				success : false,
				message : "User already registered"
			})
		}
		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(req.body.password , salt);
		currentUser.password = hashedPassword;

		const newUser = await new userModel.create(req.body);
		await newUser.save();
		return res.status(200).send({
			success : true,
			message : "User registered successfully",
			user
		});
	}
	catch(error) {
		return res.status(500).send({
			success : false,
			message : "Something went wrong",
			error
		})
	}
};

const loginController = async (req , res) => {
	try {
		const currentUser = await userMode.findOne({email : req.body.email});
		if (!currentUser) {
			return res.status(400).send({
				success : false,
				message : "User have'nt registered yet"
			})
		}
		const isSame = await bcrypt.compare(req.body.password , currentUser.password);
		if (!isSame) {
			return res.status(400).send({
				success : false,
				message : "email or password mismatched"
			})
		}
		const token = JWT.sign({userID : currentUser._id} , process.env.JWT_SECRET_KEY , {expiresIn : '2h'});
		return res.status(200).send({
			success : true,
			message : "User logged in successfully",
			token,
			currentUser
		});
	}
	catch(error) {
		return res.status(500).send({
			success : true,
			message : "Something went wrong",
			error
		})
	}
};
module.exports = {registerController , loginController};
