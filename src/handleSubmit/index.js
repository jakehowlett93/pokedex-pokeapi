import getPokemon from '../getPokemon';
import capatalize from '../capitalize';
import getTypes from '../getTypes';
import getEnglishFlavorText from '../getEnglishFlavourText';
import getAbilities from '../getAbilities';
import clearAbilities from '../clearAbilities';

const handleSubmit = async (event) => {
	event.preventDefault();

	const apiData = {
		url: 'https://pokeapi.co/api/v2/',
		type: 'pokemon',
		name: '',
	};
	const searchBar = document.getElementsByClassName('searchBar')[0];
	if (searchBar.value) {
		apiData.name = searchBar.value;
	}

	let { url, type, name } = apiData;
	let apiPokemonUrl = `${url}${type}/${name}`;
	let apiSpeciesUrl = `${url}${type}-species/${name}`;

	const pokemon = await getPokemon(apiPokemonUrl);
	const species = await getPokemon(apiSpeciesUrl);

	document.getElementsByClassName('sprite')[0].src = pokemon.sprites.front_default;

	const pokeName = capatalize(pokemon.name);
	document.getElementById('pokeName').innerHTML = pokeName;

	const pokeNumber = '#' + pokemon.order;
	document.getElementById('pokeNumber').innerHTML = pokeNumber;

	document.getElementById('pokeType').innerHTML = getTypes(pokemon.types);

	const flavorText = getEnglishFlavorText(species.flavor_text_entries);
	document.getElementsByClassName('description')[0].innerHTML = flavorText;

	const abilities = document.getElementsByClassName('abilities')[0];
	clearAbilities(abilities);
	getAbilities(pokemon.abilities, abilities);

	const hiddenElement = document.getElementsByClassName('hideElement')[0];
	if (hiddenElement) {
		hiddenElement.classList.remove('hideElement');
	}
};

export default handleSubmit;
