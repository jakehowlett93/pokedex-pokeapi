const getPokemon = async (apiUrl) => {
	const response = await fetch(apiUrl);
	const data = await response.json();
	return data;
};

export default getPokemon;
