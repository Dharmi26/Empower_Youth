const validateURL = function (url) {
	const web = url[8] + url[9] + url[10] + url[11];
	if (web !== 'www.') {
	    let newUrl = 'https://www.';
	    for (let i = 8 ; i < url.length ; i++) {
	        newUrl += url[i];
	    }
	    return newUrl;
	}
	return url;
}

const getCourseProviderName = (url) => {
	let itr = 12;
	let courseProviderName = '';
	while (url[itr] != '.') {
		courseProviderName += url[itr];
		itr++;
	}
	return courseProviderName;
};

const getUnacademyCourseTitle = (url) => {
	const buffer = url.split('KSCGY')[1];
	let courseName = ''; 
	console.log(buffer);
	for (let i = 1 ; i < buffer.length ; i++) {
		if (buffer[i] == '/') break;
		courseName += buffer[i];
	}
	let name = courseName.split('-');
	courseName = '';
	for (let word of name) {
		courseName += word;
		courseName += ' ';
	}
	return courseName.trim();
};

const getTechnicalSet = () => {
	const techSet = new Set();
	techSet.add('javascript');
	techSet.add('c++');
	techSet.add('c');
	techSet.add('java');
	techSet.add('python');
	techSet.add('web');
	techSet.add('cyber');
	techSet.add('machine');
	techSet.add('learning');
	techSet.add('data');
	techSet.add('analysis');
	techSet.add('android');
	techSet.add('engineering');
	techSet.add('computer');
	techSet.add('network');
	techSet.add('react');
	techSet.add('angular');
	techSet.add('node');
	techSet.add('vue');
	techSet.add('microservice');
	techSet.add('microservices');
	techSet.add('spring');
	return techSet;
}

const getNonTechicalSet = () => {
	const set = new Set();
	set.add('business');
	set.add('marketing');
	set.add('human');
	set.add('communication');
	set.add('accounting');
	set.add('accounts');
	return set;
}

const checkCatagory = (courseTitle) => {
	const splittedTitle = courseTitle.toLowerCase().split(' ');

	/* the maximum length of the course title will be approx 25 words
	   and if each word is of average 10 letters then the over all time
	   complexity would by O(250) which is O(1)
	*/
	
	const techSet = getTechnicalSet();
	for (let i = 0 ; i < splittedTitle.length ; i++) {
		const word = splittedTitle[i];
		if (i > 0 && splittedTitle[i - 1] === 'human' && splittedTitle[i] === 'resource') {
			return 'NonTechnical';
		}
		if (techSet.has(word)) {
			return 'Technical';
		}
	}

	const nonTechSet = getNonTechicalSet();
	for (let i = 0 ; i < splittedTitle.length ; i++) {
		const word = splittedTitle[i];
		if (nonTechSet.has(word)) {
			return 'NonTechnical';
		}
	}
	return 'Arts';
};

const checkDomainAndCatagory = function (url , courseTitle , courseProviderName) {
	if (courseProviderName === 'unacademy') {
		// this means the domain is Government & catagory is arts 
		return 'Government Arts'
	} else {
		// course provider is udemy
		if (checkCatagory(courseTitle) === 'Technical') {
			return 'Private Technical'
		}
		return 'Entrepreneur NonTechnical'
	}
};


module.exports = {
	validateURL,
	getCourseProviderName,
	getUnacademyCourseTitle,
	checkDomainAndCatagory
}
