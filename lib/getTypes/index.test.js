import getTypes from './index';

describe('getTypes', () => {
    const pokemonTypeList = [{
        type: {
            name: "mock-type1"
        }
    }, {
        type: {
            name: "mock-type2"
        }
    }];
    let returnValue;

    beforeEach(() => {
        returnValue = getTypes(pokemonTypeList);
    });

    it('should return the two mock types', () => {
        expect(returnValue).toEqual("mock-type1 / mock-type2 ");
    });
});