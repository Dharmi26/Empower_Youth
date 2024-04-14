const isAuth = require('./isAuth');

const allowedToAdmin = async function (req , res , next) {
	try {
		isAuth(req , res , () => {
			if (req.user && req.user.isAdmin) {
				next(); 
			} else {
				return res.status(401).send({
					success : false,
					message : 'You are not allowed to perform this action'
				});
			}
		});
	} catch (error) {
		return res.status(500).send({
			success : false,
			message : 'Error while validating user for admin',
			error : error.message
		});
	}
};

module.exports = allowedToAdmin;
