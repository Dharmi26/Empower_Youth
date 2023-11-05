const User = require('../Models/User');
const Course = require('../Models/Course');
const getAxiosResponse = require('../Utils/axiosRequest');
const checkCatagory = require('../Utils/checkCatagory');

const addCourseController = async function (req , res) {
	try {
		// const courseUrl = 'https://www.udemy.com/api-2.0/courses/beginning-javascript';
		const courseUrl = req.body.courseUrl;
		const domain = req.body.domain;
		let courseProviderName = '';
		let itr = 12;
		while (courseUrl[itr] != '.') {
			courseProviderName += courseUrl[itr];
			itr++;
		}

		const data = await getAxiosResponse(courseUrl);

		const urlOfCourse = 'https://www.' + courseProviderName + '.com' + data.url;
		const course = await Course.findOne({courseURL : urlOfCourse});

		if (course) {
			return res.status(400).send({
				success : true,
				message : 'Same course exist'
			});
		}
		const catagory = checkCatagory(data.title);
		newCourse = await Course({
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
		console.log(error);
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
			domainName : 0
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
		// test/catagory/catagoryName
		const catagoryName = req.params.catagoryName;
		const catagoryArray = ['Technical' , 'NonTechnical' , 'Arts'];

		if (!catagoryArray.includes(catagoryName)) {
			return res.status(400).send({
				success : false,
				message : 'Please provide the domain name from {Technical , NonTechnical , Arts} only'
			});
		}

		const catagoryCourses = await Course.find({subCatagory : catagoryName});
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
			courses : user.courses
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
	buyCourseController
}
