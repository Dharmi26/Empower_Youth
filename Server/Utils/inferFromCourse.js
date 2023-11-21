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
	techSet.add('machinelearning');
	techSet.add('datascience');
	techSet.add('salesforce');
	techSet.add('devops');
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
	const splittedTitle = courseTitle.toLowerCase().split('-');
	/* 
	   the maximum length of the course title will be approx 25 words
	   and if each word is of average 10 letters then the over all time
	   complexity would by O(250) which is O(1)
	*/
	
	const techSet = getTechnicalSet();
	console.log(splittedTitle);
	for (let i = 0 ; i < splittedTitle.length ; i++) {
		const word = splittedTitle[i];
		if (word == 'railways') {
			console.log('railways');
			return 'Government Technical';
		}
		if (i > 0 && splittedTitle[i - 1] === 'human' && splittedTitle[i] === 'resource') {
			return 'NonTechnical';
		}
		else if (i > 0 && splittedTitle[i - 1] === 'microsoft' && splittedTitle[i] === 'excel') {
			return 'NonTechnical'
		}
		else if (i > 0 && splittedTitle[i - 1] === 'artificial' && splittedTitle[i] === 'intelligence') {
			return 'Technical'
		}
		if (i > 0 && splittedTitle[i - 1] === 'data' && splittedTitle[i] === 'structures') {
			return 'Technical'
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
		const catagory = checkCatagory(courseTitle);
		if (catagory === 'Government Technical') {
			return catagory;
		}
		return 'Government Arts'
	} else {
		const catagory = checkCatagory(courseTitle);
		if (catagory === 'Technical') {
			return 'Private Technical'
		}
		return 'Entrepreneur NonTechnical'
	}
};


module.exports = {
	validateURL,
	getCourseProviderName,
	checkDomainAndCatagory
}
