const NodeCache = require('node-cache');
const User = require('../Models/User');
const Course = require('../Models/Course');
const {
	validateURL,
	getCourseProviderName,
	checkDomainAndCatagory
} = require('../Utils/inferFromCourse');
const nodeCache = new NodeCache();

/*
udemy courseUrl = 'https://www.udemy.com/api-2.0/courses/beginning-javascript'

For unacademy courses , the suscription cost is 3139 ruppees per month
Course Providers are Udemy , coursera and unacademy courses only
*/


//-----------------------------------POST Controllers---------------------------------//


const addCourseController = async function (req , res) {
	try {
		let bodyUrl = req.body.url;
		bodyUrl = validateURL(bodyUrl);

		nodeCache.del('courses');

		const isFound = await Course.findOne({courseURL : req.body.url});
		if (isFound) {
			return res.status(400).send({
				success : false,
				message : 'This course is already added in the database'
			});
		}

		const courseProviderName = getCourseProviderName(bodyUrl);
		if (courseProviderName === 'udemy') {
			bodyUrl = 'https://www.udemy.com/api-2.0/courses/';
			let refUrl = req.body.url;

			if (refUrl[refUrl.length - 1] === '/') {
				refUrl = refUrl.slice(0 , -1);
			}
			let courseName = '';
			for (let i = refUrl.length - 1 ; i >= 0 ; i--) {
			    if (refUrl[i] === '/') {
			    	break;
			    }
			    courseName +=  refUrl[i];
			}

			courseName = courseName.split('').reverse().join('')
			bodyUrl += courseName;

			const domainAndCatagory = checkDomainAndCatagory(req.body.url , courseName , 'udemy').split(' ');
			const newCourse = await Course({
				courseName : courseName,
				coursePrice : '389₹',
				courseProvider : 'Udemy',
				courseURL : req.body.url,
				domainName : domainAndCatagory[0],
				subCatagory : domainAndCatagory[1]
			});
			await newCourse.save();
			return res.status(201).send({
				success : true,
				message : 'Course added successfully',
				course : newCourse
			});

		} else if (courseProviderName === 'unacademy') {
			// https://unacademy.com/lesson/overview-modern-indian-history-in-hindi/1D6SM30V

			const url = req.body.url;
			let cnt = 0 , start = 0 , end = 0;
			for (let i = url.length - 1 ; i >= 0 ; i--) {
				if (cnt === 2) {
					break;
				}
				if (url[i] === '/') {
					if (cnt === 0) {
						end = i - 1;
						cnt++;
					} else if (cnt === 1) {
						start = i + 1;
						cnt++;
					}
				}
			}
			let courseName = '';
			for (let i = start ; i <= end ; i++) {
				courseName += url[i];
			}
			let splittedArray = courseName.split('-');
			courseName = '';
			for (let i = 0 ; i < splittedArray.length ; i++) {
				courseName += splittedArray[i];
				if (i !== splittedArray.length - 1) {
					courseName += ' ';
				}
			}

			const domainAndCatagory = checkDomainAndCatagory(req.body.url , courseName , 'unacademy').split(' ');
			const newCourse = await Course({
				courseName : courseName,
				coursePrice : 'Subscription for 3139₹ / month',
				courseProvider : 'Unacademy',
				courseURL : req.body.url,
				domainName : domainAndCatagory[0],
				subCatagory : domainAndCatagory[1]
			})

			await newCourse.save();
			return res.status(201).send({
				success : true,
				message : 'Course added successfully',
				course : newCourse
			});

		} else if (courseProviderName === 'coursera') {
			const url = req.body.url;
			let i = url.length - 1;
			while (i >= 0) {
				if (url[i] === '/') {
					break;
				}
				i--;
			}
			i++;
			let courseName = '';
			while (i < url.length) {
				courseName += url[i];
				i++;
			}
			const newCourse = await Course({
				courseName : courseName,
				courseProvider : 'Coursera',
				coursePrice : '777₹ / month for 3 months',	
				courseURL : req.body.url,
				domainName : 'Entrepreneur',
				subCatagory : 'NonTechnical'
			});
			await newCourse.save();
			return res.status(201).send({
				success : true,
				message : 'Course added successfully',
				course : newCourse
			});
		}
	
	} catch (error) {
		return res.status(500).send({
			success : false,
			message : 'Error in addCourseController Private API',
			error : error.message
		});
	}
};


//-----------------------------------GET Controllers---------------------------------//


const getAllCoursesController = async function (req , res) {
	try {
		let {pattern} = req.body;
		let courses = null;

		if (!pattern) {
			if (nodeCache.has('courses')) {
				courses = JSON.parse(nodeCache.get('courses'));
			} else {
				courses = await Course.find({} , {
					__v : 0,
					_id : 0
				});
				
				nodeCache.set('courses' , JSON.stringify(courses));
			}
		} else {
			pattern = pattern.trim().toLowerCase();

			if (nodeCache.has(pattern)) {
				courses = JSON.parse(nodeCache.get(pattern));
			} else {
				courses = await Course.find({courseName : {
					$regex : pattern
				}} , {
					__v : 0,
					_id : 0
				});

				nodeCache.set(pattern , JSON.stringify(courses));
			}
		}

		return res.status(200).send({
			success : true,
			message : 'Courses fetched successfully',
			courses
		});

	} catch (error) {
		return res.status(500).send({
			success : false,
			message : 'Error in getAllCoursesController Public API',
			error : error.message
		});
	}
};


module.exports = {
	addCourseController,
	getAllCoursesController
}
