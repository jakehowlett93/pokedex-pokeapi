import handleSubmit from './index';
import updateApiDataName from '../updateApiDataName';
import makeRequest from '../makeRequest';
import capitalize from '../capitalize';
import getTypes from '../getTypes';
import getEnglishFlavorText from '../getEnglishFlavorText';
import clearAbilities from '../clearAbilities';
import getAbilities from '../getAbilities';
import showHiddenElement from '../showHiddenElement';

jest.mock('../updateApiDataName');
jest.mock('../makeRequest');
jest.mock('../capitalize');
jest.mock('../getTypes');
jest.mock('../getEnglishFlavorText');
jest.mock('../clearAbilities');
jest.mock('../getAbilities');
jest.mock('../showHiddenElement');

describe('handleSubmit', () => {
	const event = {
		preventDefault: jest.fn(),
	};

	const mockApiObj = {
		sprites: {
			front_default: 'mock-sprite',
		},
		order: 'mock-order',
		name: 'mock-name',
		types: 'mock-type',
		flavor_text_entries: 'mock-value',
		abilities: 'mock-value',
	};

	beforeEach(() => {
		handleSubmit(event);
		updateApiDataName.mockReturnValue('mock-value');
		makeRequest.mockReturnValue(mockApiObj);
		capitalize.mockReturnValue('mock-value');
		getTypes.mockReturnValue('mock-value');
		getEnglishFlavorText.mockReturnValue('mock-value');
		getAbilities.mockReturnValue('mock-value');
	});

	it('should call preventDefault on the event', () => {
		expect(event.preventDefault).toHaveBeenCalled();
	});

	describe('when updateApiDataName is called', () => {
		const searchDiv = document.createElement('div');
		searchDiv.classList.add('searchBar');
		document.body.append(searchDiv);
		const searchBar = document.getElementsByClassName('searchBar')[0];
		it('should call updateApiDataName with searchBar, apiData', () => {
			expect(updateApiDataName).toHaveBeenCalledWith(searchBar);
		});
	});

	describe('if apiData.name is empty (user submitted an empty search)', () => {
		mockApiObj.name = ''
		it('should exit out of the function', () => {
			makeRequest.mockClear()
			expect(makeRequest).not.toHaveBeenCalled()
		});
	});

	describe('when makeRequest is called', () => {
		const apiPokemonUrl = 'https://pokeapi.co/api/v2/pokemon/mock-value';

		beforeEach(() => {
			makeRequest.mockReturnValue(mockApiObj);
		});
		it('should call makeRequest with apiPokemonUrl', () => {
			expect(makeRequest).toHaveBeenCalledWith(apiPokemonUrl);
		});
	});

	describe('when checking if the pokemon object exists', () => {
		const apiSpeciesUrl = 'https://pokeapi.co/api/v2/pokemon-species/mock-value';
		describe('if the pokemon object exists', () => {
			it('should call makeRequest with apiSpeciesUrl', () => {
				expect(makeRequest).toHaveBeenCalledWith(apiSpeciesUrl);
			});
		});

		describe('if the pokemon object doesnt exist', () => {
			beforeEach(() => {
				makeRequest.mockClear();
				makeRequest.mockReturnValue(false);
			});
			it('should not call makeRequest with apiSpeciesUrl', () => {
				expect(makeRequest).not.toHaveBeenCalledWith(apiSpeciesUrl);
			});
		});
	});

	describe('when the sprite src is set', () => {
		const sprite = document.createElement('div');
		sprite.classList.add('sprite');
		document.body.appendChild(sprite);
		it('should set it to the correct value', () => {
			expect(sprite.src).toEqual('mock-sprite');
		});
	});

	describe('when the pokeName innerHTML is set', () => {
		const pokeName = document.createElement('div');
		pokeName.id = 'pokeName';
		document.body.appendChild(pokeName);
		it('should set it to the right value', () => {
			expect(pokeName.innerHTML).toEqual('mock-value');
		});
		it('should call capitalize with pokemon.name', () => {
			expect(capitalize).toHaveBeenCalledWith(mockApiObj.name);
		});
	});

	describe('when the pokeNumber innerHTML is set', () => {
		const pokeNumber = document.createElement('div');
		pokeNumber.id = 'pokeNumber';
		document.body.appendChild(pokeNumber);
		it('should set it to the correct value', () => {
			expect(pokeNumber.innerHTML).toEqual('#mock-order');
		});
	});

	describe('when the pokeType innerHTML is set', () => {
		const pokeType = document.createElement('div');
		pokeType.id = 'pokeType';
		document.body.appendChild(pokeType);
		it('should set it to the correct value', () => {
			expect(pokeType.innerHTML).toEqual('mock-value');
		});
		it('should call getTypes with pokemon.types', () => {
			expect(getTypes).toHaveBeenCalledWith(mockApiObj.types);
		});
	});

	describe('when the description innerHTML is set', () => {
		const description = document.createElement('div');
		description.classList.add('description');
		document.body.appendChild(description);
		it('should set it to the correct value', () => {
			expect(description.innerHTML).toEqual('mock-value');
		});
		it('should call getEnglishFlavorText with species.flavor_text_entries', () => {
			expect(getEnglishFlavorText).toHaveBeenCalledWith(mockApiObj.flavor_text_entries);
		});
	});

	describe('when populating the abilities element', () => {
		const abilitiesDiv = document.createElement('div');
		abilitiesDiv.classList.add('abilities');
		document.body.append(abilitiesDiv);
		const abilities = document.getElementsByClassName('abilities')[0];
		it('should clear the element by calling clearAbilities with abilities', () => {
			expect(clearAbilities).toHaveBeenCalledWith(abilities);
		});
		it('should populate the element by calling getAbilities with pokemon.abilities, abilities', () => {
			expect(getAbilities).toHaveBeenCalledWith(mockApiObj.abilities, abilities);
		});
	});

	describe('when unhiding the hidden element', () => {
		const hiddenElementDiv = document.createElement('div');
		hiddenElementDiv.classList.add('hideElement');
		document.body.append(hiddenElementDiv);
		const hiddenElement = document.getElementsByClassName('hideElement')[0];
		it('should call showHiddenElement with hiddenElement', () => {
			expect(showHiddenElement).toHaveBeenCalledWith(hiddenElement);
		});
	});
});
