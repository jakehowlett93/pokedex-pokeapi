import makeRequest from '../makeRequest';
import capitalize from '../capitalize';
import getTypes from '../getTypes';
import getEnglishFlavorText from '../getEnglishFlavorText';
import getAbilities from '../getAbilities';
import clearAbilities from '../clearAbilities';
import showHiddenElement from '../showHiddenElement';
import updateApiDataName from '../updateApiDataName';

const handleSubmit = async (event) => {
	event.preventDefault();

	const apiData = {
		url: 'https://pokeapi.co/api/v2/',
		type: 'pokemon',
		name: '',
	};
	const searchBar = document.getElementsByClassName('searchBar')[0];

	apiData.name = updateApiDataName(searchBar);
	if (!apiData.name) {
		return
	}

	let { url, type, name } = apiData;
	let apiPokemonUrl = `${url}${type}/${name}`;
	let apiSpeciesUrl = `${url}${type}-species/${name}`;

	const pokemon = await makeRequest(apiPokemonUrl);
	let species;
	if (pokemon) {
		species = await makeRequest(apiSpeciesUrl);
	} else {
		return;
	}

	document.getElementsByClassName('sprite')[0].src = pokemon.sprites.front_default;

	document.getElementById('pokeName').innerHTML = capitalize(pokemon.name);

	const pokeNumber = '#' + pokemon.order;
	document.getElementById('pokeNumber').innerHTML = pokeNumber;

	document.getElementById('pokeType').innerHTML = getTypes(pokemon.types);

	const flavorText = getEnglishFlavorText(species.flavor_text_entries);
	document.getElementsByClassName('description')[0].innerHTML = flavorText;

	const abilities = document.getElementsByClassName('abilities')[0];
	clearAbilities(abilities);
	getAbilities(pokemon.abilities, abilities);

	const hiddenElement = document.getElementsByClassName('hideElement')[0];
	showHiddenElement(hiddenElement);
};

export default handleSubmit;
