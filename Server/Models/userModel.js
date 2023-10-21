const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
	name : {
		type : String,
		trim : true,
		required : true
	},
	email : {
		type : String,
		trim : true,
		required : true,
		unique : true,
	},
	password : {
		type : String,
		trim : true,
		require : true
	},
	tokens : [{type : Object}]
} , {timestamps : true});

userSchema.methods.matchPassword = async function (enteredPassword) {
	try {
		return await bcrypt.compare(enteredPassword , this.password);
	} catch (error) {
		console.log('Error occurred while matching passwords : ' + error.message);
	}
};

userSchema.pre('save' , async function(next) {
	if (!this.isModified("password")) {
		next();
	}
	const salt = await bcrypt.genSalt(10);
	this.password = await bcrypt.hash(this.password , salt);
});

userSchema.statics.isEmailRegistered = async function (email) {
	if (!email) {
		throw new Error('Invalid email');
	}
	try {
		const newUser = this.findOne({email});
		if (newUser) {
			return true;
		}
		return false;
	} catch (error) {
		console.log('Error occurred in the isEmailRegistered method : ' + error.message);
	}
}

module.exports = mongoose.model('User' , userSchema);
