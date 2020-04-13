import handleSubmit from './index';
import updateApiDataName from '../updateApiDataName';
import makeRequest from '../makeRequest';
import capitalize from '../capitalize';
import getTypes from '../getTypes';
import getEnglishFlavorText from '../getEnglishFlavorText';
import clearAbilities from '../clearAbilities';
import getAbilities from '../getAbilities';
import showHiddenElement from '../showHiddenElement';

jest.mock('../updateApiDataName')
jest.mock('../makeRequest')
jest.mock('../capitalize')
jest.mock('../getTypes')
jest.mock('../getEnglishFlavorText')
jest.mock('../clearAbilities')
jest.mock('../getAbilities')
jest.mock('../showHiddenElement')

describe('handleSubmit', () => {
    const event = {
        preventDefault: jest.fn()
    }

    const mockApiObj = {
        sprites: {
            front_default: 'mock-sprite'
        },
        order: 'mock-order'
    }

    beforeEach(() => {
        handleSubmit(event)
        updateApiDataName.mockReturnValue('mock-value');
        makeRequest.mockReturnValue(mockApiObj);
        capitalize.mockReturnValue('mock-value');
        getTypes.mockReturnValue('mock-value');
        getEnglishFlavorText.mockReturnValue('mock-value');
        getAbilities.mockReturnValue('mock-value');
    });

    it('should call preventDefault on the event', () => {
        expect(event.preventDefault).toHaveBeenCalled()
    });

    describe('when updateApiDataName is called', () => {
        it('should call updateApiDataName', () => {
            expect(updateApiDataName).toHaveBeenCalled()
        });
    });

    describe('when makeRequest is called', () => {
        it('should call makeRequest', () => {
            expect(makeRequest).toHaveBeenCalled()
        });
    });

    describe('when checking if the pokemon object exists', () => {
        const apiSpeciesUrl ='https://pokeapi.co/api/v2/pokemon-species/'

        describe('if the pokemon object exists', () => {           
            it('should call makeRequest with apiSpeciesUrl', () => {
                expect(makeRequest).toHaveBeenCalledWith(apiSpeciesUrl)
            });
        });

        describe('if the pokemon object doesnt exist', () => {
            beforeEach(() => {
                makeRequest.mockClear();
                makeRequest.mockReturnValue(false)
            })
            it('should exit the function', () => {
                expect(makeRequest).not.toHaveBeenCalledWith(apiSpeciesUrl)
            });
        });
    });

    describe('when the sprite src is set', () => {
        const sprite = document.createElement('div')
        sprite.classList.add('sprite')
        document.body.appendChild(sprite)
        it('should set it to the correct value', () => {
            expect(sprite.src).toEqual('mock-sprite')
        });
    });

    describe('when the pokeName innerHTML is set', () => {
        const pokeName = document.createElement('div')
        pokeName.id = 'pokeName'
        document.body.appendChild(pokeName)
        it('should set it to the right value', () => {
            expect(pokeName.innerHTML).toEqual('mock-value')
        });
        it('should call capitalize', () => {
            expect(capitalize).toHaveBeenCalled()
        });
    });

    describe('when the pokeNumber innerHTML is set', () => {
        const pokeNumber = document.createElement('div')
        pokeNumber.id = 'pokeNumber'
        document.body.appendChild(pokeNumber)
        it('should set it to the correct value', () => {
            expect(pokeNumber.innerHTML).toEqual('#mock-order')
        });
    });

    describe('when the pokeType innerHTML is set', () => {
        const pokeType = document.createElement('div')
        pokeType.id = 'pokeType'
        document.body.appendChild(pokeType)
        it('should set it to the correct value', () => {
            expect(pokeType.innerHTML).toEqual('mock-value')
        });
        it('should call getTypes', () => {
            expect(getTypes).toHaveBeenCalled()
        });
    })

    describe('when the description innerHTML is set', () => {
        const description = document.createElement('div')
        description.classList.add('description')
        document.body.appendChild(description)
        it('should set it to the correct value', () => {
            expect(description.innerHTML).toEqual('mock-value')
        });
        it('should call getEnglishFlavorText', () => {
            expect(getEnglishFlavorText).toHaveBeenCalled()
        })
    });

    describe('when populating the abilities element', () => {
        it('should clear the element by calling clearAbilities', () => {
            expect(clearAbilities).toHaveBeenCalled()
        });
        it('should populate the element by calling getAbilities', () => {
            expect(getAbilities).toHaveBeenCalled()
        });
    });

    describe('when unhiding the hidden element', () => {
        it('should call showHiddenElement', () => {
            expect(showHiddenElement).toHaveBeenCalled()
        });
    });
});