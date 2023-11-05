const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
	name : {
		type : String,
		trim : true,
		required : true
	},
	isAdmin : {
		type : Boolean,
		default : false
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
	tokens : [{type : Object}],
	courses : [{
		type : mongoose.Types.ObjectId,
		ref : 'Course'
	}]
} , {timestamps : true});

userSchema.methods.matchPassword = async function (enteredPassword) {
	try {
		if (!enteredPassword) {
			throw new Error('Password is missing');
		}
		const result = await bcrypt.compare(enteredPassword , this.password);
		return result;
	} catch (error) {
		console.log('Error occurred while matching passwords : ' + error.message);
	}
};

userSchema.pre('save' , async function(next) {
	if (!this.isModified("password")) {
		next();
	}
	const salt = await bcrypt.genSalt(10);
	const hashedPassword = await bcrypt.hash(this.password , salt);
	this.password = hashedPassword;
});

module.exports = mongoose.model('User' , userSchema);
