const User = require('../Models/User');
const Course = require('../Models/Course');
const getAxiosResponse = require('../Utils/axiosRequest');
const {
	validateURL,
	getCourseProviderName,
	getUnacademyCourseTitle,
	checkDomainAndCatagory
} = require('../Utils/inferFromCourse')

// const courseUrl = 'https://www.udemy.com/api-2.0/courses/beginning-javascript';

// we are using Udemy for Private and Entrepreneurship courses and unacademy for government exams
// udemy's scrapping api does not provides the duration so either we hard code
// or remove the duration field from the Course model

const addCourseController = async function (req , res) {
	try {
		const url = req.body.courseUrl; 
		const courseUrl = validateURL(url);
		const courseProviderName = getCourseProviderName(courseUrl);

		if (courseProviderName === 'unacademy') {
			const courseTitle = getUnacademyCourseTitle(courseUrl);
			const newCourse = await Course({
				courseName : courseTitle,
				coursePrice : 3499,
				courseProvider : 'unacademy',
				courseURL : courseUrl,
				domainName : 'Government',
				subCatagory : 'Arts'
			});
			await newCourse.save();
			return res.status(201).send({
				success : true,
				message : 'Course added successfully',
				newCourse
			});
		}
		const data = await getAxiosResponse(courseUrl);
		const domainAndCatagory = checkDomainAndCatagory(courseUrl , data.title , courseProviderName).split(' ');

		const domain = domainAndCatagory[0];
		const catagory = domainAndCatagory[1];

		const urlOfCourse = 'https://www.' + courseProviderName + '.com' + data.url;
		const course = await Course.findOne({courseURL : urlOfCourse});

		if (course) {
			return res.status(400).send({
				success : true,
				message : 'This course is already present in the database'
			});
		}

		const newCourse = await Course({
			courseName : data.title,
			coursePrice : data.price_detail.amount,
			courseProvider : courseProviderName,
			courseURL : urlOfCourse,
			domainName : domain,
			subCatagory : catagory
		});
		await newCourse.save();
		
		return res.status(201).send({
			success : true,
			message : 'Course added successfully',
			newCourse
		});
	} catch (error) {
		return res.status(500).send({
			success : false,
			message : 'Error in the addCourseController Private API',
			error : error.message
		});
	}
}

const getCoursesByDomainController = async function (req , res) {
	try {
		const domain = req.body.domain;
		const domainArray = ['Government' , 'Private' , 'Entrepreneur'];
		if (!domainArray.includes(domain)) {
			return res.status(400).send({
				success : false,
				message : 'Please provide the domain name from {Government , Private , Entrepreneur} only'
			});
		}
		const domainCourses = await Course.find({domainName : domain} , {
			__v : 0
		});
		return res.status(200).send({
			success : true,
			message : 'Courses fetched successfully',
			courses : domainCourses
		});
	} catch (error) {
		return res.status(500).send({
			success : false,
			message : 'Error in getCourseByDomainController Public API',
			error : error.message
		});
	}
}


const getCoursesByCatagoryController = async function (req , res) {
	try {
		const catagoryName = req.params.catagoryName;
		const catagoryArray = ['Technical' , 'NonTechnical' , 'Arts'];

		if (!catagoryArray.includes(catagoryName)) {
			return res.status(400).send({
				success : false,
				message : 'Please provide the domain name from {Technical , NonTechnical , Arts} only'
			});
		}

		const catagoryCourses = await Course.find({subCatagory : catagoryName} , {
			__v : 0
		});
		return res.status(200).send({
			success : true,
			message : 'Couses fetched successfully',
			courses : catagoryCourses
		});

	} catch (error) {
		return res.staus(500).send({
			success : false,
			message:  'Error in getCoursesByCatagoryController Public API',
			error : error.message
		});
	}
}

const getAllCoursesController = async function (req , res) {
	try {
		const courses = await Course.find({} , {
			__v : 0
		});
		return res.status(200).send({
			success : true,
			message : 'Courses fetched successfully',
			courses
		});
	} catch (error) {
		return res.status(500).send({
			success : false,
			message : 'Error in the getAllCourseController Public API',
			error : error.message
		});
	}
}

const buyCourseController = async function (req , res) {
	try {
		const courseId = req.params.courseId;
		const email = req.user.email;
		
		const user = await User.findOne({email : email});
		const course = await Course.findById({_id : courseId});
		
		if (user.courses.includes(courseId)) {
			return res.status(400).send({
				success : false,
				message : 'You have already bought this course earlier'
			});
		}

		const coursesOfUser = user.courses;
		coursesOfUser.push(course);
		
		user.courses = coursesOfUser;
		await user.save();

		return res.status(200).send({
			success : true,
			message : 'You have successfully bought the course',
			course : course
		});

	} catch (error) {
		console.log(error);
		return res.status(500).send({
			success : false,
			message:  'Error in buyCourseController Public API',
			error : error.message
		});
	}
}

module.exports = {
	addCourseController,
	getCoursesByDomainController,
	getCoursesByCatagoryController,
	buyCourseController,
	getAllCoursesController
}
