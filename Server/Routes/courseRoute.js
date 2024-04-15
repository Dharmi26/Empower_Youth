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
	@desc : fetches the courses from the database based on text provided in the body
	@API : Public
	@method : get
*/
// router.get('/courses' , isAuth , getAllCoursesController);

router.get('/courses' , getAllCoursesController);

module.exports = router;
