const getTypes = (pokemonTypes) => {
	let pokeTypes = '';
	pokemonTypes.forEach((item) => {
		pokeTypes += item.type.name;
		pokeTypes += ' / ';
	});
	pokeTypes = pokeTypes.substring(0, pokeTypes.length - 2);
	return pokeTypes;
};

export default getTypes;
