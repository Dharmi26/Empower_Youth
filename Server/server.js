const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');
const connectToDB = require('./Config/database'); 
const authRoute = require('./Routes/authRoute');
const courseRoute = require('./Routes/courseRoute');

dotenv.config();
connectToDB();

const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.port || 8080;
app.listen(port , () => {
	const rootUrl = 'http://' + 'localhost:' + port; 
	console.log('Server is listening on ' + rootUrl);
});


app.use('/auth' , authRoute);

app.use('/course' , courseRoute);
