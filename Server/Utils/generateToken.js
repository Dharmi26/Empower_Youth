const JWT = require("jsonwebtoken");

const generateToken = function (id) {
	return JWT.sign({userId : id} , process.env.JWT_SECRET_KEY , {expiresIn : '1d'});
};
module.exports = generateToken;