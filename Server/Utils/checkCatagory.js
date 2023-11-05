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
	techSet.add('network')
	return techSet;
}

const getNonTechicalSet = () => {
	const nonTechSet = new Set();
	nonTechSet.add('business');
	nonTechSet.add('marketing');
	nonTechSet.add('human');
	nonTechSet.add('communication');
	return nonTechSet;
}

const checkCatagory = (courseTitle) => {
	const splittedTitle = courseTitle.toLowerCase().split(' ');
    
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

module.exports = checkCatagory;
