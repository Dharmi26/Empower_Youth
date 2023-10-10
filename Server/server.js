const express = require("express");
const dotenv = require("dotenv");
const connectToDB = require("./Config/database"); 
dotenv.config();
connectToDB();

const app = express();
app.use(express.json());

// authentication microservice
app.use("/auth" , require("./Routes/authRouter"));

const port = process.env.port || 8080;
app.listen(port , () => {
	console.log("Server is listening on http://localhost:" + port);
});
