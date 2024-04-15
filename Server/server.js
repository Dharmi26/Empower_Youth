const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const connectToDB = require('./Config/database');

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

const port = process.env.port || 8080;

connectToDB()
.then(() => {
	app.listen(port , () => {
		const rootUrl = 'http://' + 'localhost:' + port;
		console.log('Server is listening on ' + rootUrl);
	});
})
.catch(() => {
	console.log('Cannot connect to DB');
});

const authRoute = require('./Routes/authRoute');
const courseRoute = require('./Routes/courseRoute');
const testRoute = require('./Routes/testRoute');

app.use('/api/v1/auth', authRoute);
app.use('/api/v1/course', courseRoute);
app.use('/api/v1/test', testRoute);
