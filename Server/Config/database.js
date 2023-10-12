const mongoose = require("mongoose");

const connectToDB = async (req , res) => {
	try {
		await mongoose.connect(process.env.MONGOOSE_URL);
		console.log("Connection to mongoose database is successfull");
	} 
	catch(error) {
		console.log("Something went wrong while connecting to the mongoose database");
	}
}
module.exports = connectToDB;
