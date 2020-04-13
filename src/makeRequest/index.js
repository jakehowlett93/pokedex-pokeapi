const makeRequest = async (apiUrl) => {
	try {
		const response = await fetch(apiUrl);
		const data = await response.json();
		return data;
	} catch (e) {
		alert("something went wrong! Perhaps that pokemon doesnt exist.");
	}
};

export default makeRequest;
