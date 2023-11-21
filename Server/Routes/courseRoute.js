const router = require('express').Router();
const isAuth = require('../Middlewares/isAuth');
const allowedToAdmin = require('../Middlewares/allowedToAdmin');
const {
	addCourseController,
	getAllCoursesController
} = require('../Controllers/courseController');


//-----------------------------------POST APIs---------------------------------//

/*
	@desc : adds the courses to the database
	@API : Private
	@method : post
*/
router.post('/add' , allowedToAdmin , addCourseController);


//-----------------------------------POST APIs---------------------------------//

/*
	@desc : fethces the courses from the database
	@API : Public
	@method : get
	@note : This one is a queried API  
*/
router.get('/courses' , getAllCoursesController);

module.exports = router;
