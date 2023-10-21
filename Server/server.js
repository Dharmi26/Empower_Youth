const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectToDB = require('./Config/database'); 
const authRoute = require('./Routes/authRouter');
dotenv.config();
connectToDB();

const app = express();
app.use(express.json());
app.use(cors());

// authentication microservices
app.use('/auth' , authRoute);

const port = process.env.port || 8080;
app.listen(port , () => {
	console.log('Server is listening on http://localhost:' + port);
});
