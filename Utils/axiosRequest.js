const axios = require('axios');

const getAxiosResponse = async function (url) {
	try {
		const response = await axios.get(url);
		return response.data;
	} catch (error) {
		throw new Error('Error while sending the axios request : ' + error);
	}
}

module.exports = getAxiosResponse;
