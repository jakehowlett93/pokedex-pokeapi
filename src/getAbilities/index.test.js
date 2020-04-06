import getAbilities from './index'

describe('getAbilities', () => {
    const abilities = document.body
    const abilitiesList = [
        {
            ability: {
                name: "mock-name"
            }
        }
    ]
    let returnValue;

    beforeEach(() => {
        returnValue = getAbilities(abilitiesList, abilities)
    });

    it('should remove the child elements', () => {
        expect(returnValue.innerHTML).toEqual("<li>mock-name</li>")
    });
})