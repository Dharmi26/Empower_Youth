const mongoose = require("mongoose");
require('dotenv');

const connectToDB = async (req , res) => {
	try {
		const MONGO_URI = process.env.MONGO_URI;
		console.log("MongoDB URI : " + MONGO_URI);
		await mongoose.connect(MONGO_URI)
		.then(() => console.log("Connection with db established"));
	} catch(error) {
		console.log("Something went wrong while connecting to the mongoose database");
	}
}
module.exports = connectToDB;
