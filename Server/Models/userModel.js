const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
	fullName : {
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
		require : true,
	},
	confirmPassword : {
		type : String,
		required : true,
		function() {
			if (this.password !== this.confirmPassword) return false;
			return true;
		}
	},
});
module.exports = mongoose.model("users" , userSchema);
