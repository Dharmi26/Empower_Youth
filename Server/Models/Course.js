const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
	courseName : {
		type : String,
		required : true
	},
	coursePrice : {
		type : Number,
		required : true
	},
	courseProvider : {
		type : String,
		required : true
	},
	courseURL : {
		type : String,
		required : true,
		unique : true
	},
	domainName : {
		type : String,
		enum : ['Government' , 'Private' , 'Entrepreneur'],
		required : true,
	},
	subCatagory : {
		type : String,
		enum : ['Technical' , 'NonTechnical' , 'Arts'],
		required : true
	},
});

module.exports = mongoose.model('Course' , courseSchema);
