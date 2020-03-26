import getPokemon from '../getPokemon';

const handleSubmit = async (event) => {
	event.preventDefault();

	const apiData = {
		url: 'https://pokeapi.co/api/v2/',
		type: 'pokemon',
		name: '',
	};

	apiData.name = document.getElementsByClassName('searchBar')[0].value;

	let { url, type, name } = apiData;
	let apiPokemonUrl = `${url}${type}/${name}`;
	let apiSpeciesUrl = `${url}${type}-species/${name}`;

	const pokemon = await getPokemon(apiPokemonUrl);
	const species = await getPokemon(apiSpeciesUrl);

	document.getElementsByClassName('sprite')[0].src = pokemon.sprites.front_default;

	const nameCapitalized = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
	document.getElementById('pokeName').innerHTML = nameCapitalized;

	const pokeNumber = '#' + pokemon.order;
	document.getElementById('pokeNumber').innerHTML = pokeNumber;

	let pokeTypes = '';
	pokemon.types.forEach((item) => {
		pokeTypes += item.type.name;
		pokeTypes += ' / ';
	});
	pokeTypes = pokeTypes.substring(0, pokeTypes.length - 2);
	document.getElementById('pokeType').innerHTML = pokeTypes;

	let flavourText;
	flavourText = species.flavor_text_entries.find((element) => element.language.name === 'en');
	document.getElementsByClassName('description')[0].innerHTML = flavourText.flavor_text;

	let abilityList = document.getElementsByClassName('abilities')[0];
	if (abilityList.children.length > 0) {
		abilityList.innerHTML = "";
	}
	pokemon.abilities.forEach((item) => {
		const ability = item.ability.name;
		const listElement = document.createElement('li');
		const abilityTextNode = document.createTextNode(ability);
		listElement.appendChild(abilityTextNode);
		abilityList.appendChild(listElement);
	});

	const hiddenElements = document.getElementsByClassName('hideElement')[0];
	hiddenElements.classList.remove('hideElement');
};

export default handleSubmit;
