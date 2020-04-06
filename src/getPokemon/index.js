const getPokemon = async (apiUrl) => {
	try {
		const response = await fetch(apiUrl);
		const data = await response.json();
		return data;
	} catch (e) {
		alert(e);
	}
};

export default getPokemon;
