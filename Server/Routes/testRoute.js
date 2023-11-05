const express = require('express');
const isAuth = require('../Middlewares/isAuth');
const allowedToAdmin = require('../Middlewares/allowedToAdmin');
const {
	addCourseController,
	getCoursesByDomainController,
	getCoursesByCatagoryController,
	buyCourseController
} = require('../Controllers/courseController');

const router = express.Router();

// will add allowedToAdmin middleware later
router.post('/add-course' , addCourseController);

router.get('/get-by-domain' , getCoursesByDomainController);

router.get('/catagory/:catagoryName' , getCoursesByCatagoryController);

router.post('/buy/:courseId' , isAuth , buyCourseController);

module.exports = router;
