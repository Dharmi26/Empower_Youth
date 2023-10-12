const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
	name : {
		type : String,
		required : true
	},
	email : {
		type : String,
		required : true,
		unique : true,
	},
	contactNumber : {
		type : String,
		require : true,
		unique : true,
		validate : {
			validator : function(v) {
				const contactNumRegex = /^[0-9]{10}$/;
				return contactNumRegex.test(v);
			}
		},
		message : "invalid contact number. Please provide a 10 digit number without country code"
	},
	password : {
		type : String,
		require : true
	}
} , {timestamps : true});

userSchema.methods.matchPassword = async function (enteredPassword) {
	return await bcrypt.compare(enteredPassword , this.password);
};

userSchema.pre("save" , async function(next) {
	if (!this.isModified("password")) {
		next();
	}
	const salt = await bcrypt.genSalt(10);
	this.password = await bcrypt.hash(this.password , salt);
});

module.exports = mongoose.model("users" , userSchema);
